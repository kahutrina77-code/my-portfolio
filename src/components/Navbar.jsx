import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['hero', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <span className="nav-logo" onClick={() => scrollTo('hero')}>
        <span className="accent">{'>'}</span> trina_kahu
      </span>
      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={link}>
            <button
              className={`nav-link ${active === link ? 'active' : ''}`}
              onClick={() => { scrollTo(link); setActive(link) }}
            >
              <span className="nav-num">0{i + 1}.</span> {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
