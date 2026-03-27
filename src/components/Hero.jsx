import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['full-stack developer', 'react enthusiast', 'api builder', 'problem solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="accent">$</span> hello, world —
        </p>
        <h1 className="hero-name">Trina<br />Kahu</h1>
        <p className="hero-role">
          <span className="accent">{'>'}</span>{' '}
          <span className="typewriter">{displayed}</span>
          <span className="caret">|</span>
        </p>
        <p className="hero-bio">
          Building clean, fast, and purposeful web experiences.<br />
          Currently open to junior full-stack roles.
        </p>
        <div className="hero-cta">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            view my work
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            get in touch →
          </button>
        </div>
        <div className="hero-status">
          <span className="status-dot" />
          available for hire
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
