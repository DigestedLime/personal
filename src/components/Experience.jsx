import { useEffect } from 'react'
import './Experience.css'

const experiences = [
  {
    company: 'Robinhood',
    role: 'Software Engineer',
    timeframe: 'Dec 2024 – Present',
    location: 'Toronto, ON / Remote',
    highlights: [
      'Designed core logic for locate and regulatory services supporting the short selling product (projected $7.5M ARR in year one).',
      'Led end-to-end validation with operations, delivering 93% automated test coverage across new clearing workflows.',
      'Migrated critical services from Python and Apache Kafka to Go-based infrastructure, eliminating reconciliation mismatches.',
      'Moved reporting pipelines to Apache Spark to cut data processing time by more than half.'
    ]
  },
  {
    company: 'University of Toronto',
    role: 'Research Assistant',
    timeframe: 'May 2024 – Nov 2024',
    location: 'Toronto, ON',
    highlights: [
      'Created proof tooling in Lean 4 (ELFE) with Prof. Ahmed Ashraf to support CS education.',
      'Collaborated with Prof. Asal Aslemand on data science tooling used in undergraduate statistics courses.'
    ]
  },
  {
    company: 'Graycore',
    role: 'Software Engineering Intern',
    timeframe: 'Sep 2023 – Nov 2023',
    location: 'Remote',
    highlights: [
      'Built TypeScript REST APIs powering Daffodil, a progressive web app framework for enterprise commerce.'
    ]
  },
  {
    company: 'Nasdaq',
    role: 'Software Engineer Intern',
    timeframe: 'May 2023 – Aug 2023',
    location: 'New York, NY',
    highlights: [
      'Enhanced FIX, OUCH, and ITCH trading protocols with failover and recovery for 24x7 trading.',
      'Built a Jupyter-based analytics toolkit to monitor protocol latency and improve QA workflows.'
    ]
  },
  {
    company: 'Amazon Web Services (AWS)',
    role: 'Software Development Engineer Intern',
    timeframe: 'May 2022 – Aug 2022',
    location: 'Vancouver, BC',
    highlights: [
      'Shipped a configurable SIGv4-authenticated proxy in kubectl, enabling direct Skylens access for 100k+ EKS customers.',
      'Cut cluster configuration time by an estimated 10 million minutes and authored a companion plugin for the proxy.'
    ]
  }
]

function Experience({ id, setActiveSection }) {
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
    <section id={id} className="experience">
      <div className="experience-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Building resilient trading and developer experiences across fintech, cloud, and academia.
        </p>
      </div>
      <div className="experience-timeline">
        {experiences.map((job) => (
          <article key={job.company} className="experience-card">
            <header className="experience-card__header">
              <div>
                <h3>{job.role}</h3>
                <p className="experience-card__company">{job.company}</p>
              </div>
              <div className="experience-card__meta">
                <span>{job.timeframe}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
            </header>
            <ul className="experience-card__highlights">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
