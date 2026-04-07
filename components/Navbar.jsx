'use client'
import { useState, useEffect } from 'react'


const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#topics', label: 'Topics' },
  { href: '#speakers', label: 'Speakers' },
  // { href: '#schedule', label: 'Schedule' },
  { href: '#participants', label: 'Participants' },
  { href: '#software', label: 'Data & Software' },
  // { href: '#registration', label: 'Register' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
      <img src="/NRIAG-logo.jpg" alt="NRIAG Logo" className="h-10" />
    <img src="/ArAS_logo.jpeg" alt="ARAS Logo" className="h-10" />

    
          </div>
          {/* <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'var(--navy-dark)' }}
          >
             <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <circle cx="12" cy="12" r="3" fill="#c9a227" />
              <circle cx="12" cy="12" r="6" stroke="#c9a227" strokeWidth="0.8" strokeDasharray="2 2" fill="none" />
              <circle cx="12" cy="12" r="9.5" stroke="white" strokeWidth="0.5" fill="none" />
              <line x1="12" y1="2" x2="12" y2="4" stroke="#c9a227" strokeWidth="1.2" />
              <line x1="12" y1="20" x2="12" y2="22" stroke="#c9a227" strokeWidth="1.2" />
              <line x1="2" y1="12" x2="4" y2="12" stroke="#c9a227" strokeWidth="1.2" />
              <line x1="20" y1="12" x2="22" y2="12" stroke="#c9a227" strokeWidth="1.2" />
            </svg> 
          </div> */}
          {/* <span
            className="font-display font-semibold text-sm leading-tight hidden sm:block"
            style={{ color: scrolled ? 'var(--navy-dark)' : 'white' }}
          >
            ARAS 2026
          </span> */}
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-xs font-mono tracking-widest uppercase transition-colors duration-200 ${
                scrolled ? 'text-navy-900 hover:text-yellow-600' : 'text-white/80 hover:text-white'
              }`}
              style={{ letterSpacing: '0.08em' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#registration"
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200"
          style={{
            background: 'var(--gold)',
            color: 'var(--navy-dark)',
            fontWeight: 600,
          }}
        >
          Apply Now
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          style={{ color: scrolled ? 'var(--navy-dark)' : 'white' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-mono tracking-wider uppercase py-1 border-b border-gray-100"
                style={{ color: 'var(--navy-dark)' }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#registration"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center py-3 text-sm font-mono font-semibold tracking-wider"
              style={{ background: 'var(--gold)', color: 'var(--navy-dark)' }}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
