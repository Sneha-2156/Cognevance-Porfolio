const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Responsive Design'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'Node.js (basics)'],
  },
  {
    title: 'Database & Tools',
    items: ['MySQL', 'Git & GitHub', 'Postman', 'VS Code / IntelliJ'],
  },
  {
    title: 'Currently Learning',
    items: ['Spring Security', 'Docker', 'Deployment (Render/Railway/Vercel)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills fade-in">
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
