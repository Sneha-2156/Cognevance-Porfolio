export default function About() {
  return (
    <section id="about" className="section about fade-in">
      <div className="about__content">
        <p className="eyebrow">Hi, I'm</p>
        <h1 className="about__name">Sneha M B</h1>
        <h2 className="about__role">Full Stack Developer</h2>
        <p className="about__bio">
          Computer Science undergrad and full-stack developer focused on building
          real, working products rather than tutorial demos. I like Java on the
          backend, React on the frontend, and shipping things that actually deploy.
        </p>
        <div className="about__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--ghost">Get in Touch</a>
        </div>
        <div className="about__links">
          <a href="https://github.com/Sneha-2156" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sneha-m-b-09a70038a" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
