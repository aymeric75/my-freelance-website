import Image from "next/image"
import Link from "next/link"
import {notFound} from "next/navigation"

import {projects} from "../../../projects"
import {additionalAiProjects,aiProjectCopy,webProjects} from "../../../theme-projects"

const text={
  fr:{back:"Retour à l’accueil",aiTitle:"Projets en intelligence artificielle",aiIntro:"Recherche publiée, systèmes livrés à des clients et prototypes en cours.",webTitle:"Projets de développement web",webIntro:"Une sélection de missions illustrant mon expérience antérieure en production, e-commerce, APIs, performance et SEO.",clientSection:"Applications client",researchSection:"Recherche",caseStudy:"Lire l’étude de cas",viewProject:"Voir le projet",switch:"English"},
  en:{back:"Back to home",aiTitle:"Artificial intelligence projects",aiIntro:"Published research, client systems and transparent work in progress.",webTitle:"Web development projects",webIntro:"Selected work from my earlier experience with production systems, e-commerce, APIs, performance and SEO.",clientSection:"Client applications",researchSection:"Research",caseStudy:"Read case study",viewProject:"View project",switch:"Français"},
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
    {category==="ai"&&<div className="ai-project-groups">
      <AiProjectSection title={t.clientSection} language={l} group="client" linkLabel={t}/>
      <AiProjectSection title={t.researchSection} language={l} group="research" linkLabel={t}/>
    </div>}
    {category==="web"&&<div className="web-project-list">{webProjects.map(project=><article key={project.title}><div><span>{project.year}</span><span>{project.kind}</span></div><h2>{project.title}</h2><p>{project.description[l]}</p><ul>{project.skills.map(skill=><li key={skill}>{skill}</li>)}</ul></article>)}</div>}
  </main></>
}

function AiProjectSection({title,language,group,linkLabel}:{title:string;language:"fr"|"en";group:"client"|"research";linkLabel:{caseStudy:string;viewProject:string}}){
  const originalProjects=projects.filter(project=>group==="client"?project.slug==="bowling-pin-detection":project.slug!=="bowling-pin-detection").map(project=>({id:project.slug,year:project.year,image:project.image,imageAlt:project.imageAlt,href:`/work/${project.slug}`,external:false,copy:aiProjectCopy[project.slug as keyof typeof aiProjectCopy][language]}))
  const addedProjects=additionalAiProjects.filter(project=>project.group===group).map(project=>({id:project.id,year:project.year,image:project.image,imageAlt:project.imageAlt,href:project.href,external:true,copy:project.copy[language]}))
  return <section className="ai-project-section"><div className="ai-section-heading"><p className="eyebrow">{title}</p><span>{String(originalProjects.length+addedProjects.length).padStart(2,"0")}</span></div><div className="theme-project-grid">{[...originalProjects,...addedProjects].map(project=><article className="theme-project-card" key={project.id}><div className="theme-project-image">{project.image.endsWith('.gif')?(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={project.image} alt={project.imageAlt}/>):<Image src={project.image} alt={project.imageAlt} fill sizes="(max-width:800px) 100vw, 48vw"/>}</div><div className="theme-project-copy"><div className="project-meta"><span>{project.copy.kind}</span><span>{project.year}</span></div><h2>{project.copy.title}</h2><p>{project.copy.summary}</p>{project.external?<a href={project.href} target="_blank" rel="noreferrer">{linkLabel.viewProject} ↗</a>:<Link href={project.href}>{linkLabel.caseStudy} ↗</Link>}</div></article>)}</div></section>
}
