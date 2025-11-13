import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header({ darkMode, setDarkMode }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const isActive = (path) => {
    return location.pathname === path || (path === '/about' && location.pathname === '/')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>akira takaki</Link>
        </div>
        <div className="right-actions">
          {/* Keep dark mode toggle visible on mobile by keeping it outside nav-links */}
          <button 
            onClick={toggleDarkMode}
            className="dark-mode-toggle dark-toggle-mobile"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="menu-button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about" className={isActive('/about') || isActive('/') ? 'active' : ''}>
              about
            </Link>
          </li>
          <li>
            <Link to="/now" className={isActive('/now') ? 'active' : ''}>
              now
            </Link>
          </li>
          <li>
            <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>
              blog
            </Link>
          </li>
          <li>
            <Link 
              to="/resume" 
              className={`nav-external ${isActive('/resume') ? 'active' : ''}`}
              aria-label="Resume"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio"
              className="nav-external"
              aria-label="Portfolio"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </Link>
          </li>
          <li>
            <a 
              href="https://github.com/DigestedLime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-external"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/a1t" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-external"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </li>
          {/* Desktop dark mode toggle within icon list */}
          <li className="dark-toggle-desktop">
            <button 
              onClick={toggleDarkMode}
              className="dark-mode-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </li>
          
        </ul>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            <li><Link to="/about" onClick={closeMenu} className={isActive('/about') || isActive('/') ? 'active' : ''}>about</Link></li>
            <li><Link to="/now" onClick={closeMenu} className={isActive('/now') ? 'active' : ''}>now</Link></li>
            <li><Link to="/blog" onClick={closeMenu} className={isActive('/blog') ? 'active' : ''}>blog</Link></li>
            <li><Link to="/resume" onClick={closeMenu} className={isActive('/resume') ? 'active' : ''}>resume</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu} className={isActive('/portfolio') ? 'active' : ''}>portfolio</Link></li>
            <li><a href="https://github.com/DigestedLime" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>github</a></li>
            <li><a href="https://linkedin.com/in/a1t" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>linkedin</a></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
