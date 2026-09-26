// Edit this array with your real projects (TrustLine, Nexora AI OS, FestiGO, etc.)
const PROJECTS = [
  {
    title: 'Project One',
    description: 'One or two lines describing what it does and the problem it solves.',
    tech: ['React', 'Spring Boot', 'MySQL'],
    repo: 'https://github.com/Sneha-2156',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'One or two lines describing what it does and the problem it solves.',
    tech: ['Java', 'REST API'],
    repo: 'https://github.com/Sneha-2156',
    demo: '#',
  },
  {
    title: 'Project Three',
    description: 'One or two lines describing what it does and the problem it solves.',
    tech: ['JavaScript', 'HTML/CSS'],
    repo: 'https://github.com/Sneha-2156',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects fade-in">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-card__tech">
              {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="project-card__links">
              <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
              <a href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
