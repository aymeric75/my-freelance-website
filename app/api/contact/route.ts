import {randomUUID} from "node:crypto"
import {NextRequest,NextResponse} from "next/server"

const attempts=new Map<string,{count:number;expires:number}>()
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request:NextRequest){
  const ip=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()||"unknown"
  const now=Date.now();const attempt=attempts.get(ip)
  if(attempt&&attempt.expires>now&&attempt.count>=5)return NextResponse.json({error:"Too many requests"},{status:429})
  attempts.set(ip,attempt&&attempt.expires>now?{...attempt,count:attempt.count+1}:{count:1,expires:now+15*60_000})

  const body=await request.json().catch(()=>null) as {name?:unknown;email?:unknown;message?:unknown;website?:unknown;startedAt?:unknown}|null
  if(!body)return NextResponse.json({error:"Invalid request"},{status:400})
  if(typeof body.website==="string"&&body.website)return NextResponse.json({ok:true})
  if(typeof body.startedAt!=="number"||now-body.startedAt<1500)return NextResponse.json({error:"Invalid request"},{status:400})

  const name=typeof body.name==="string"?body.name.trim():""
  const email=typeof body.email==="string"?body.email.trim():""
  const message=typeof body.message==="string"?body.message.trim():""
  if(name.length<2||name.length>100||email.length>200||!emailPattern.test(email)||message.length<20||message.length>5000)return NextResponse.json({error:"Invalid fields"},{status:400})

  const apiKey=process.env.RESEND_API_KEY
  const recipient=process.env.CONTACT_EMAIL
  const sender=process.env.CONTACT_FROM_EMAIL||"Aymeric Dev <onboarding@resend.dev>"
  if(!apiKey||!recipient)return NextResponse.json({error:"Contact service unavailable"},{status:503})

  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json","Idempotency-Key":randomUUID(),"User-Agent":"AymericDev-Portfolio/1.0"},body:JSON.stringify({from:sender,to:[recipient],reply_to:email,subject:`Nouveau message portfolio — ${name}`,text:`Nom : ${name}\nE-mail : ${email}\n\n${message}`})})
  if(!response.ok)return NextResponse.json({error:"Email delivery failed"},{status:502})
  return NextResponse.json({ok:true})
}
