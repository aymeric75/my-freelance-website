"use client"

import {FormEvent,useRef,useState} from "react"

const copy={
  fr:{name:"Nom",email:"E-mail",message:"Votre message",submit:"Envoyer le message",sending:"Envoi…",success:"Merci, votre message a bien été envoyé.",error:"L’envoi a échoué. Veuillez réessayer dans quelques instants.",privacy:"Votre adresse sert uniquement à vous répondre."},
  en:{name:"Name",email:"Email",message:"Your message",submit:"Send message",sending:"Sending…",success:"Thank you, your message has been sent.",error:"The message could not be sent. Please try again shortly.",privacy:"Your address is used only to reply to you."},
} as const

export function ContactForm({language}:{language:"fr"|"en"}){
  const t=copy[language]
  const startedAt=useRef(Date.now())
  const [state,setState]=useState<"idle"|"sending"|"success"|"error">("idle")

  async function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    setState("sending")
    const form=event.currentTarget
    const payload=Object.fromEntries(new FormData(form))
    const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,startedAt:startedAt.current})}).catch(()=>null)
    if(response?.ok){form.reset();setState("success")}else setState("error")
  }

  return <form className="contact-form" onSubmit={submit}>
    <div className="contact-field"><label htmlFor="contact-name">{t.name}</label><input id="contact-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={100} required/></div>
    <div className="contact-field"><label htmlFor="contact-email">{t.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={200} required/></div>
    <div className="contact-field contact-message"><label htmlFor="contact-message">{t.message}</label><textarea id="contact-message" name="message" minLength={20} maxLength={5000} rows={8} required/></div>
    <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off"/></div>
    <div className="contact-submit"><button type="submit" disabled={state==="sending"}>{state==="sending"?t.sending:t.submit} <span>↗</span></button><small>{t.privacy}</small></div>
    <p className={`contact-feedback ${state}`} role="status" aria-live="polite">{state==="success"?t.success:state==="error"?t.error:""}</p>
  </form>
}
