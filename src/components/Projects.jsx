import './Projects.css'

const projects = [
  {
    num: '01',
    title: 'devlinks',
    desc: 'A full-stack link-sharing app. Users create profiles, add social links, and share a live page. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT Auth'],
    live: '#',
    github: '#',
    featured: true,
  },
  {
    num: '02',
    title: 'taskflow api',
    desc: 'RESTful task management API with user auth, CRUD operations, filtering, and pagination. Documented with Swagger.',
    tags: ['Express', 'MongoDB', 'REST', 'Swagger'],
    live: null,
    github: '#',
    featured: false,
  },
  {
    num: '03',
    title: 'weather dash',
    desc: 'Real-time weather dashboard fetching from OpenWeather API. Location search, 5-day forecast, and animated weather icons.',
    tags: ['React', 'API', 'CSS Animations'],
    live: '#',
    github: '#',
    featured: false,
  },
  {
    num: '04',
    title: 'portfolio v1',
    desc: 'My first portfolio site — plain HTML/CSS/JS. Kept as a milestone of how far I\'ve come.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    github: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-label">
        <span className="accent">03.</span> projects
      </div>
      <h2 className="section-title">Things I've built</h2>

      <div className="projects-list">
        {projects.map((p) => (
          <div key={p.num} className={`project-row ${p.featured ? 'featured' : ''}`}>
            <span className="project-num">{p.num}</span>

            <div className="project-body">
              <div className="project-top">
                <h3 className="project-title">{p.title}</h3>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                      github ↗
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link accent-link">
                      live ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
