import { useEffect } from 'react'
import './Leadership.css'

const leadershipHighlights = [
  {
    title: 'Mathematical and Computational Sciences Society',
    role: 'President',
    timeframe: 'May 2023 – Apr 2024',
    impact: [
      'Led a 30-person team supporting a community of 5,000+ mathematics, statistics, and CS students.',
      'Co-founded and scaled DeerHacks, Mississauga’s largest hackathon with 300+ applicants annually.',
      'Forged partnerships with ICUBE and MMPA to connect students with entrepreneurship opportunities.'
    ]
  },
  {
    title: 'UTM Urbanism Club',
    role: 'Member',
    timeframe: 'May 2023 – Present',
    impact: ['Organize conversations on transit and urban planning with advocates such as Reece Martin.']
  },
  {
    title: 'Hack the 6ix',
    role: 'Operations Executive',
    timeframe: 'Jan 2023 – Aug 2023',
    impact: [
      'Coordinated venue logistics, catering, and programming for one of Toronto’s flagship hackathons.',
      'Ensured a seamless experience for hundreds of participants and volunteers.'
    ]
  },
  {
    title: 'Amazon Internship Community',
    role: 'Head Organizer',
    timeframe: 'May 2022 – Aug 2022',
    impact: [
      'Programmed weekly intern events, from board game nights to rooftop barbeques.',
      'Hosted a 200-person harbour cruise by coordinating catering, activities, and operations.',
      'Secured $10,000 in funding to elevate intern engagement.'
    ]
  },
  {
    title: 'UTM Math Forum & Math Club',
    role: 'Administrator & Community Organizer',
    timeframe: 'Sep 2020 – May 2024',
    impact: [
      'Co-founded the largest online academic forum for UTM students, connecting 4,000+ learners with faculty and TAs.',
      'Organized Math Day and delivered talks on roots of unity, geometric group theory, and cryptography.'
    ]
  }
]

function Leadership({ id, setActiveSection }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        })
      },
      { threshold: 0.25 }
    )

    const element = document.getElementById(id)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [id, setActiveSection])

  return (
    <section id={id} className="leadership">
      <div className="leadership-header">
        <h2 className="section-title">Leadership & Outreach</h2>
        <p className="section-subtitle">
          Creating inclusive communities, mentoring students, and organizing experiences that bring people together.
        </p>
      </div>
      <div className="leadership-grid">
        {leadershipHighlights.map((item) => (
          <article key={item.title} className="leadership-card">
            <header>
              <h3>{item.title}</h3>
              <p className="leadership-role">{item.role}</p>
              <p className="leadership-timeframe">{item.timeframe}</p>
            </header>
            <ul>
              {item.impact.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Leadership
