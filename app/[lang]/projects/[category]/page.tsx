import Image from "next/image"
import Link from "next/link"
import {notFound} from "next/navigation"

import {projects} from "../../../projects"
import {webProjects} from "../../../theme-projects"

const text={
  fr:{back:"Retour à l’accueil",aiTitle:"Projets en intelligence artificielle",aiIntro:"Recherche publiée, systèmes livrés à des clients et prototypes en cours.",webTitle:"Projets de développement web",webIntro:"Une sélection de missions illustrant mon expérience antérieure en production, e-commerce, APIs, performance et SEO.",caseStudy:"Lire l’étude de cas",switch:"English"},
  en:{back:"Back to home",aiTitle:"Artificial intelligence projects",aiIntro:"Published research, client systems and transparent work in progress.",webTitle:"Web development projects",webIntro:"Selected work from my earlier experience with production systems, e-commerce, APIs, performance and SEO.",caseStudy:"Read case study",switch:"Français"},
} as const

export function generateStaticParams(){return ["fr","en"].flatMap(lang=>["ai","web"].map(category=>({lang,category})))}

export default async function ThemeProjects({params}:{params:Promise<{lang:string;category:string}>}){
  const {lang,category}=await params
  if((lang!=="fr"&&lang!=="en")||!['ai','web'].includes(category))notFound()
  const l=lang as "fr"|"en"; const t=text[l]; const other=l==="fr"?"en":"fr"
  const title=category==="ai"?t.aiTitle:t.webTitle
  const intro=category==="ai"?t.aiIntro:t.webIntro
  return <><header className="site-header case-header"><Link className="wordmark" href={`/${l}`}>Aymeric<span>Dev</span></Link><Link className="back-link" href={`/${l}`}>← {t.back}</Link><Link className="language-switch" href={`/${other}/projects/${category}`}>{t.switch} ↗</Link></header><main className="theme-page shell">
    <section className="theme-page-hero"><p className="eyebrow">{category==="ai"?"AI / ML":"Web"}</p><h1>{title}</h1><p>{intro}</p></section>
    {category==="ai"&&<div className="theme-project-grid">{projects.map(project=><article className="theme-project-card" key={project.slug}><div className="theme-project-image">{project.image.endsWith('.gif')?(
      // eslint-disable-next-line @next/next/no-img-element
      <img src={project.image} alt={project.imageAlt}/>):<Image src={project.image} alt={project.imageAlt} fill sizes="(max-width:800px) 100vw, 48vw"/>}</div><div className="theme-project-copy"><div className="project-meta"><span>{project.kind}</span><span>{project.year}</span></div><h2>{project.title}</h2><p>{project.summary}</p><Link href={`/work/${project.slug}`}>{t.caseStudy} ↗</Link></div></article>)}</div>}
    {category==="web"&&<div className="web-project-list">{webProjects.map(project=><article key={project.title}><div><span>{project.year}</span><span>{project.kind}</span></div><h2>{project.title}</h2><p>{project.description[l]}</p><ul>{project.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></article>)}</div>}
  </main></>
}
