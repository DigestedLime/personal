import { useEffect } from 'react'
import './Projects.css'

function Projects({ id, setActiveSection }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(id)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [id, setActiveSection])

  const projects = [
    {
      id: 1,
      title: 'Baobab',
      description:
        'An education-first social platform that helps cohorts learn together through discussion, resources, and shared accountability.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'NestJS'],
      link: '#',
      github: '#',
      highlights: [
        'Led API architecture and database design using three-tiered architecture and CRC diagrams.',
        'Shipped pagination and file transfer pipelines that reduced load times by 20%.',
      ],
    },
    {
      id: 2,
      title: 'PCRS: Programming Exercises',
      description:
        'Interactive exercises for Theory of Computation students that reinforce automata concepts through instant feedback.',
      technologies: ['Django', 'Liquid', 'Python', 'JavaScript'],
      link: '#',
      github: '#',
      highlights: [
        'Built regex-to-DFA assessments used by ~500 students with Hopcroft and subset construction algorithms.',
        'Partnered with course staff to align pedagogy with tooling insights and inline hints.',
      ],
    },
    {
      id: 3,
      title: 'Numerical Algorithms Visualizer',
      description:
        'A visualization suite comparing high-precision numerical methods with real-time telemetry and reporting.',
      technologies: ['React', 'TypeScript', 'Flask', 'Python', 'ApexCharts'],
      link: '#',
      github: '#',
      highlights: [
        'Implemented Newton’s method and related solvers with precision controls for research reproducibility.',
        'Instrumented charting to compare convergence speeds and communicate trade-offs to students.',
      ],
    },
  ]

  return (
    <section id={id} className="projects">
      <div className="projects-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="400" height="300" fill="url(#projectGradient)" />
                  <defs>
                    <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

