import Image from "next/image"
import Link from "next/link"

export type Language = "fr" | "en"

const copy = {
  fr: {
    nav:["Expertise","Parcours"], switchLabel:"English", status:"Disponible pour de nouveaux projets", role:"Chercheur & ingénieur en intelligence artificielle", bio:"Je conçois des systèmes d’IA qui relient recherche, expérimentation et mise en production.", curriculum:"Docteur en intelligence artificielle, avec une expérience antérieure de développeur full-stack et de consultant indépendant.", location:"Europe · Missions internationales", intro:"Domaines d’expertise", headline:"De la recherche à des systèmes qui fonctionnent dans le monde réel.", cvTitle:"Parcours en bref", linksTitle:"Me retrouver", footer:"Conçu comme un lien entre recherche et ingénierie.",
    themes:[
      {slug:"ai",number:"01",title:"Intelligence artificielle",description:"Conception de prototypes de recherche et de systèmes d’IA appliquée, depuis la formulation du problème jusqu’au déploiement.",skills:["Vision par ordinateur","IA neuro-symbolique","Planification automatisée","Machine learning interprétable","Conception expérimentale","Edge AI & APIs"],link:"Découvrir les projets IA",accent:"orange"},
      {slug:"web",number:"02",title:"Développement web",description:"Une expérience solide de systèmes web en production, d’intégrations métiers et de plateformes e-commerce.",skills:["Développement full-stack","APIs & intégrations","PrestaShop & WordPress","Performance & SEO","Vue.js","Maintenance en production"],link:"Voir les projets web",accent:"blue"},
    ],
  },
  en: {
    nav:["Expertise","Background"], switchLabel:"Français", status:"Available for selected projects", role:"Artificial intelligence researcher & engineer", bio:"I design AI systems that connect research, experimentation and production delivery.", curriculum:"PhD in Artificial Intelligence, published at ICTAI 2024, with an earlier career as a full-stack developer and independent consultant.", location:"Europe · Working internationally", intro:"Areas of expertise", headline:"From research to systems that work in the real world.", cvTitle:"Background", linksTitle:"Find me online", footer:"Built at the intersection of research and engineering.",
    themes:[
      {slug:"ai",number:"01",title:"Artificial intelligence",description:"Research prototypes and applied AI systems, from problem formulation through experimentation and deployment.",skills:["Computer vision","Neuro-symbolic AI","Automated planning","Interpretable ML","Experimental design","Edge AI & APIs"],link:"Explore AI projects",accent:"orange"},
      {slug:"web",number:"02",title:"Web development",description:"A strong background in production web systems, business integrations and e-commerce platforms.",skills:["Full-stack development","APIs & integrations","PrestaShop & WordPress","Performance & SEO","Vue.js","Production maintenance"],link:"View web projects",accent:"blue"},
    ],
  },
} as const

export function HomeContent({language}:{language:Language}) {
  const t=copy[language]; const otherLanguage=language==="fr"?"en":"fr"
  return <>
    <header className="site-header home-header"><Link className="wordmark" href={`/${language}`}>Aymeric<span>Dev</span></Link><nav aria-label="Navigation principale"><a href="#expertise">{t.nav[0]}</a><Link href={language==="fr"?"/fr/parcours":"/en/background"}>{t.nav[1]}</Link></nav><Link className="language-switch" href={`/${otherLanguage}`} hrefLang={otherLanguage}>{t.switchLabel} <span>↗</span></Link></header>
    <main className="portfolio-layout">
      <aside className="profile-column"><div className="profile-photo"><div className="profile-photo-frame"><Image src="/images/profile/aymeric.jpg" alt="Aymeric Dev" fill priority sizes="(max-width: 860px) 100vw, 33vw"/></div></div><div className="profile-content">
        <section className="profile-block" id="profile-cv"><h2>{t.cvTitle}</h2><p>{t.curriculum}</p><p className="profile-location">{t.location}</p></section>
        <section className="profile-block" id="profile-links"><h2>{t.linksTitle}</h2><div className="profile-links"><a href="https://github.com/aymeric75" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aymericaieng/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.codeur.com/-aymerictech" target="_blank" rel="noreferrer">Codeur.com ↗</a></div></section>
      </div></aside>
      <div className="themes-column" id="expertise">
        {t.themes.map(theme=><section className={`theme-section theme-${theme.accent}`} key={theme.slug}><div className="theme-number">{theme.number}</div><div className="theme-body"><h2>{theme.title}</h2><p>{theme.description}</p><ul>{theme.skills.map(skill=><li key={skill}>{skill}</li>)}</ul><Link href={`/${language}/projects/${theme.slug}`}>{theme.link} <span>↗</span></Link></div></section>)}
        <footer className="home-footer"><span>© {new Date().getFullYear()} Aymeric Dev</span><span>{t.footer}</span></footer>
      </div>
    </main>
  </>
}
