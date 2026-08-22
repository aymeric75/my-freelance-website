import Link from "next/link"
import {notFound} from "next/navigation"

import {ContactForm} from "../../contact-form"

const copy={
  fr:{back:"Retour à l’accueil",switch:"English",eyebrow:"Un projet, une question ?",title:"Parlons-en.",intro:"Décrivez-moi votre besoin, son contexte et le résultat attendu. Je vous répondrai directement.",note:"Votre message est transmis de manière privée : mon adresse personnelle n’est jamais publiée sur le site."},
  en:{back:"Back to home",switch:"Français",eyebrow:"A project or a question?",title:"Let’s talk.",intro:"Tell me about your needs, their context and the outcome you are looking for. I will reply directly.",note:"Your message is sent privately: my personal address is never published on the website."},
} as const

export function generateStaticParams(){return [{lang:"fr"},{lang:"en"}]}

export default async function ContactPage({params}:{params:Promise<{lang:string}>}){
  const {lang}=await params
  if(lang!=="fr"&&lang!=="en")notFound()
  const language=lang as "fr"|"en";const t=copy[language];const other=language==="fr"?"en":"fr"
  return <><header className="site-header case-header"><Link className="wordmark" href={`/${language}`}>Aymeric<span>Dev</span></Link><Link className="back-link" href={`/${language}`}>← {t.back}</Link><Link className="language-switch" href={`/${other}/contact`}>{t.switch} ↗</Link></header><main className="contact-page shell"><section className="contact-heading"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p></section><section className="contact-panel"><ContactForm language={language}/><aside><span>01</span><p>{t.note}</p></aside></section></main></>
}
