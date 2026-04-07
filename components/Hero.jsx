'use client'
import { useEffect, useRef } from 'react'
import { Calendar, MapPin, Globe } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    // Generate stars
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
    }))

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      t += 0.016
      stars.forEach((s) => {
        const a = 0.3 + 0.7 * ((Math.sin(t * s.speed * 60 + s.phase) + 1) / 2)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(175deg, var(--navy-deep) 0%, var(--navy-dark) 45%, #0f2d5e 100%)',
      }}
    >
      {/* Star canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      {/* Decorative meridian lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <ellipse cx="720" cy="450" rx="700" ry="420" stroke="white" strokeWidth="0.8" fill="none" />
        <ellipse cx="720" cy="450" rx="500" ry="420" stroke="white" strokeWidth="0.6" fill="none" />
        <ellipse cx="720" cy="450" rx="300" ry="420" stroke="white" strokeWidth="0.4" fill="none" />
        <line x1="720" y1="30" x2="720" y2="870" stroke="white" strokeWidth="0.6" />
        <line x1="20" y1="450" x2="1420" y2="450" stroke="white" strokeWidth="0.6" />
      </svg>

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 px-5 py-2 mb-10 text-xs font-mono tracking-widest uppercase"
          style={{
            border: '1px solid rgba(201,162,39,0.5)',
            color: 'var(--gold-light)',
            background: 'rgba(201,162,39,0.07)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--gold)' }}
          />
          National Research Institute of Astronomy and Geophysics — NRIAG , EGYPT
        </div>

        {/* Edition */}
        <p
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Sixth Edition · Hands-On Training
        </p>

        {/* Title */}
        <h1
          className="font-display mb-6 leading-tight"
          style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 700 }}
        >
          Advanced Arab
          <br />
          <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>
            Astrophysics School
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}
        >
          A world-class hands-on training programme in observational astronomy,
          data analysis, and research methodology conducted at the Kottamia Observatory.
        </p>
          {/* <div className="flex justify-center gap-8 mb-6">
         <img src="/NRIAG-logo.jpg" alt="NRIAG Logo" className="h-16" />
    <img src="/ArAS_logo.jpeg" alt="ARAS Logo" className="h-16" />
          </div> */}
        {/* Date / Location strip */}
        <div
          className="inline-grid grid-cols-3 divide-x mb-12"
          style={{
            borderColor: 'rgba(255,255,255,0.15)',
            divideColor: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          {[
            { icon: <Calendar className="w-5 h-5 text-yellow-400" />, label: 'Dates', value: 'Oct 23–29, 2026' },
            { icon: <MapPin className="w-5 h-5 text-yellow-400" />, label: 'Location', value: 'Kottamia Observatory , Egypt' },
            { icon: <Globe className="w-5 h-5 text-yellow-400" />, label: 'Open to', value: 'Global Applicants' },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 px-6 py-4"
              style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
            >
              <div className="text-lg">{item.icon}</div>
              <span className="font-mono text-xs tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {item.label}
              </span>
              <span className="text-sm font-semibold" style={{ color: 'white' }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#registration"
            className="px-8 py-4 font-mono text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:brightness-110"
            style={{ background: 'var(--gold)', color: 'var(--navy-dark)' }}
          >
            Apply to attend
          </a>
          <a
            href="#about"
            className="px-8 py-4 font-mono text-sm tracking-widest uppercase transition-all duration-200 hover:bg-white/10"
            style={{
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'white',
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
