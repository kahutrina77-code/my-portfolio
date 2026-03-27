import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'trinakahu77@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section contact">
      <div className="section-label">
        <span className="accent">04.</span> contact
      </div>

      <div className="contact-inner">
        <h2 className="contact-heading">
          Let's build<br />
          <span className="accent-text">something</span><br />
          together.
        </h2>

        <div className="contact-right">
          <p className="contact-sub">
            I'm currently looking for junior full-stack roles and open to
            freelance projects. My inbox is always open — reach out and
            I'll get back to you quickly.
          </p>

          <button className="email-btn" onClick={copyEmail}>
            <span className="email-addr">{email}</span>
            <span className="copy-label">{copied ? 'copied!' : 'copy'}</span>
          </button>

          <div className="social-links">
            <a href="https://github.com/account" target="_blank" rel="noreferrer" className="social-link">
              github
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link">
              linkedin
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link">
              twitter
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <span>built with React + Vite</span>
        <span>© {new Date().getFullYear()} Trina Kahu</span>
      </footer>
    </section>
  )
}
