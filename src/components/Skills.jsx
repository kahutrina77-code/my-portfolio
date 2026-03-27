import './Skills.css'

const categories = [
  {
    label: 'frontend',
    items: [
      { name: 'React', level: 75 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'HTML & CSS', level: 85 },
      { name: 'TypeScript', level: 50 },
    ],
  },
  {
    label: 'backend',
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 68 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'REST APIs', level: 72 },
    ],
  },
  {
    label: 'tools',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Docker', level: 40 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux / CLI', level: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-label">
        <span className="accent">02.</span> skills
      </div>

      <h2 className="section-title">What I work with</h2>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.label} className="skill-card">
            <h3 className="skill-cat">
              <span className="accent">{'/'}</span> {cat.label}
            </h3>
            <ul className="skill-list">
              {cat.items.map((skill) => (
                <li key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ '--w': `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
