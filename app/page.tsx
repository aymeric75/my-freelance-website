import Image from "next/image"
import Link from "next/link"

import { projects } from "./projects"

const Arrow = () => <span aria-hidden="true">↗</span>

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="#top" aria-label="Aymeric Dev, home">Aymeric<span>Dev</span></Link>
        <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>
      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for selected projects</p>
            <h1>I build AI systems that move from <em>research</em> to reality.</h1>
            <p className="hero-intro">Applied AI researcher and engineer working across computer vision, neuro-symbolic AI and interpretable machine learning.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore selected work <span>↓</span></a>
              <a className="button text-button" href="https://github.com/aymeric75" target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
            </div>
          </div>
          <div className="hero-portrait">
            <Image src="/images/profile/aymeric.jpg" alt="Aymeric Dev" fill priority sizes="(max-width: 800px) 75vw, 34vw" />
            <span className="portrait-caption">Based in Europe · Working internationally</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="Professional highlights"><div className="shell proof-grid">
          <div><strong>PhD</strong><span>Artificial Intelligence</span></div><div><strong>ICTAI ’24</strong><span>Published research</span></div>
          <div><strong>9 × 5★</strong><span>Freelance client reviews</span></div><div><strong>End-to-end</strong><span>Research to deployment</span></div>
        </div></section>

        <section className="work-section shell" id="work">
          <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Three ways I turn complex ideas into useful systems.</h2></div><p>Commercial delivery, published research and transparent work in progress.</p></div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card ${index % 2 ? "reverse" : ""}`} key={project.slug}>
                <Link className="project-visual" href={`/work/${project.slug}`} aria-label={`Read ${project.title} case study`}>
                  {project.image.endsWith(".gif") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={project.image} alt={project.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
                  ) : <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 58vw" />}
                  <span className={`project-index accent-${index + 1}`}>0{index + 1}</span>
                </Link>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.kind}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3><p>{project.summary}</p>
                  <ul className="tag-list" aria-label="Technologies">{project.tags.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <Link className="case-link" href={`/work/${project.slug}`}>Read the case study <Arrow /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section"><div className="shell testimonial-grid">
          <p className="eyebrow">Client perspective</p>
          <blockquote>“His technical competence is undeniable, but his ability to integrate complex technical aspects into a complete solution is what truly sets him apart.”</blockquote>
          <div className="quote-credit"><strong>Justin Theytaz</strong><span>Swiss computer-vision client · translated from French</span></div>
        </div></section>

        <section className="about-section shell" id="about">
          <div><p className="eyebrow">About</p><h2>Research depth.<br />Engineering discipline.</h2></div>
          <div className="about-copy">
            <p className="lead">I’m Aymeric Dev, an AI researcher and engineer interested in systems that learn, reason and remain understandable.</p>
            <p>My work spans academic research and real-world delivery—from learning executable symbolic models directly from images to deploying computer vision on constrained edge hardware.</p>
            <p>Before specializing in AI, I spent years building production web systems, APIs and data integrations. That background still shapes how I work: practical scope, clear communication and software that has to survive outside a notebook.</p>
            <div className="capabilities"><div><span>01</span><strong>Applied ML & computer vision</strong></div><div><span>02</span><strong>Neuro-symbolic AI & planning</strong></div><div><span>03</span><strong>Research prototypes & experiments</strong></div><div><span>04</span><strong>APIs & edge deployment</strong></div></div>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="shell contact-inner">
          <p className="eyebrow">Have a difficult problem?</p><h2>Let’s make it<br /><em>work in the real world.</em></h2>
          <a className="contact-link" href="https://github.com/aymeric75" target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
        </div></section>
      </main>
      <footer className="site-footer shell"><span>© {new Date().getFullYear()} Aymeric Dev</span><div><a href="https://github.com/aymeric75" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></footer>
    </>
  )
}
