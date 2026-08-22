import Image from "next/image"
import Link from "next/link"

export type Language = "fr" | "en"

const copy = {
  fr: {
    nav:["Parcours"], switchLabel:"English", status:"Disponible pour de nouveaux projets", role:"Chercheur & ingénieur en intelligence artificielle", bio:"Je conçois des systèmes d’IA qui relient recherche, expérimentation et mise en production.", curriculum:"Docteur en intelligence artificielle, avec une expérience antérieure de développeur full-stack et de consultant indépendant.", location:"Europe · Missions internationales", intro:"Domaines d’expertise", headline:"De la recherche à des systèmes qui fonctionnent dans le monde réel.", cvTitle:"Parcours en bref", linksTitle:"Me retrouver",contact:"Me contacter",reviewLabel:"Retour client",reviewTitle:"Une solution d’IA intégrée de bout en bout.",reviewQuote:"Sa compétence technique est indéniable, mais sa capacité à intégrer ces aspects techniques dans une solution complète est ce qui le distingue vraiment.",reviewProject:"Détection de quilles par vision artificielle",reviewSource:"Avis vérifié sur Codeur.com",
    themes:[
      {slug:"ai",number:"01",title:"Intelligence artificielle",description:"Conception de prototypes de recherche et de systèmes d’IA appliquée, depuis la formulation du problème jusqu’au déploiement.",skills:["Vision par ordinateur","IA neuro-symbolique","Planification automatisée","Machine learning interprétable","Conception expérimentale","Edge AI & APIs"],link:"Découvrir les projets IA",accent:"orange"},
      {slug:"web",number:"02",title:"Développement web",description:"Une expérience solide de systèmes web en production, d’intégrations métiers et de plateformes e-commerce.",skills:["Développement full-stack","APIs & intégrations","PrestaShop & WordPress","Performance & SEO","Vue.js","Maintenance en production"],link:"Voir les projets web",accent:"blue"},
    ],
  },
  en: {
    nav:["Background"], switchLabel:"Français", status:"Available for selected projects", role:"Artificial intelligence researcher & engineer", bio:"I design AI systems that connect research, experimentation and production delivery.", curriculum:"PhD in Artificial Intelligence, published at ICTAI 2024, with an earlier career as a full-stack developer and independent consultant.", location:"Europe · Working internationally", intro:"Areas of expertise", headline:"From research to systems that work in the real world.", cvTitle:"Background", linksTitle:"Find me online",contact:"Contact me",reviewLabel:"Client feedback",reviewTitle:"An end-to-end integrated AI solution.",reviewQuote:"His technical expertise is undeniable, but his ability to integrate these technical aspects into a complete solution is what truly sets him apart.",reviewProject:"Computer-vision bowling pin detection",reviewSource:"Verified review on Codeur.com",
    themes:[
      {slug:"ai",number:"01",title:"Artificial intelligence",description:"Research prototypes and applied AI systems, from problem formulation through experimentation and deployment.",skills:["Computer vision","Neuro-symbolic AI","Automated planning","Interpretable ML","Experimental design","Edge AI & APIs"],link:"Explore AI projects",accent:"orange"},
      {slug:"web",number:"02",title:"Web development",description:"A strong background in production web systems, business integrations and e-commerce platforms.",skills:["Full-stack development","APIs & integrations","PrestaShop & WordPress","Performance & SEO","Vue.js","Production maintenance"],link:"View web projects",accent:"blue"},
    ],
  },
} as const

export function HomeContent({language}:{language:Language}) {
  const t=copy[language]; const otherLanguage=language==="fr"?"en":"fr"
  return <>
    <header className="site-header home-header"><Link className="wordmark" href={`/${language}`}>Aymeric<span>Dev</span></Link><nav aria-label="Navigation principale"><Link href={language==="fr"?"/fr/parcours":"/en/background"}>{t.nav[0]}</Link></nav><Link className="language-switch" href={`/${otherLanguage}`} hrefLang={otherLanguage}>{t.switchLabel} <span>↗</span></Link></header>
    <main className="portfolio-layout">
      <aside className="profile-column"><div className="profile-photo"><div className="profile-photo-frame"><Image src="/images/profile/aymeric.jpg" alt="Aymeric Dev" fill priority sizes="(max-width: 860px) 100vw, 33vw"/></div></div><div className="profile-content">
        <section className="profile-block" id="profile-cv"><h2>{t.cvTitle}</h2><p>{t.curriculum}</p><p className="profile-location">{t.location}</p></section>
        <section className="profile-block" id="profile-links"><h2>{t.linksTitle}</h2><div className="profile-links"><a href="https://github.com/aymeric75" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aymericaieng/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.codeur.com/-aymerictech" target="_blank" rel="noreferrer">Codeur.com ↗</a></div></section>
      </div></aside>
      <div className="themes-column" id="expertise">
        {t.themes.map(theme=><section className={`theme-section theme-${theme.accent}`} key={theme.slug}><div className="theme-number">{theme.number}</div><div className="theme-body"><h2>{theme.title}</h2><p>{theme.description}</p><ul>{theme.skills.map(skill=><li key={skill}>{skill}</li>)}</ul><Link href={`/${language}/projects/${theme.slug}`}>{theme.link} <span>↗</span></Link></div></section>)}
        <section className="home-testimonial"><div className="home-testimonial-heading"><p className="eyebrow">{t.reviewLabel}</p><span aria-label="5 sur 5">★★★★★</span></div><h2>{t.reviewTitle}</h2><blockquote>“{t.reviewQuote}”</blockquote><div className="home-testimonial-credit"><div className="testimonial-client"><a className="testimonial-logo" href="https://2ds.ch/" target="_blank" rel="noreferrer"><Image src="/images/clients/2ds.svg" alt="2DS" width={144} height={65}/></a><div><strong>Justin Theytaz</strong><a href="https://2ds.ch/" target="_blank" rel="noreferrer">2DS ↗</a></div></div><div><Link href="/work/bowling-pin-detection">{t.reviewProject} ↗</Link><span>{t.reviewSource}</span></div></div></section>
        <footer className="home-footer"><span>© {new Date().getFullYear()} Aymeric Dev</span><Link href={`/${language}/contact`}>{t.contact} ↗</Link></footer>
      </div>
    </main>
  </>
}
