import { useEffect } from 'react'
import './About.css'

function About({ id, setActiveSection }) {
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

  return (
    <section id={id} className="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">
            Hello, I'm <span className="highlight">Akira Takaki</span>
          </h1>
          <p className="about-subtitle">Software Engineer at Robinhood · CS & Math Researcher</p>
          <p className="about-description">
            I build resilient trading infrastructure, educational tooling, and thoughtfully designed developer
            experiences. From launching Robinhood’s short selling services to architecting research software at the
            University of Toronto, I care about shipping systems that are both reliable and delightful to use.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Currently</h3>
              <p>
                Designing short selling workflows and Spark reporting pipelines for Robinhood’s clearing platform while
                mentoring teammates on Go-first service design.
              </p>
            </div>
            <div className="highlight-card">
              <h3>Education</h3>
              <p>
                Honours BSc. in Computer Science & Mathematics from the University of Toronto (GPA 3.8/4.0, Dean’s List
                Scholar every term).
              </p>
            </div>
          </div>
          <div className="about-skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              <span className="skill-tag">Go</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Apache Spark</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Lean 4</span>
            </div>
          </div>
          <div className="about-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

