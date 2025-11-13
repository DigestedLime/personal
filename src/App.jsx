import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import NowPage from './pages/NowPage'
import BlogRedirect from './pages/BlogRedirect'
import ResumePage from './pages/ResumePage'
import PortfolioPage from './pages/PortfolioPage'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <BrowserRouter basename="/personal">
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/now" element={<NowPage />} />
            <Route path="/blog" element={<BlogRedirect />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
