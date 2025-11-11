import { useEffect } from 'react'
import './Header.css'

function Header({ activeSection, setActiveSection }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'leadership', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setActiveSection('about')
            }}
          >
            Akira Takaki
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('experience')
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('projects')
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#leadership"
              className={activeSection === 'leadership' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('leadership')
              }}
            >
              Leadership
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

