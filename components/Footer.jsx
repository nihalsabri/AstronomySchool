export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: 'var(--navy-deep)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3">
                 <img src="/NRIAG-logo.jpg" alt="NRIAG Logo" className="h-12" />
    <img src="/ArAS_logo.jpeg" alt="ARAS Logo" className="h-12" />
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Sixth Advanced Arab Astrophysics School<br />
              October 23 : 29, 2026<br />
              Kottamia Observatory, Egypt
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Navigation
            </p>
            <div className="space-y-2">
              {['About', 'Topics', 'Speakers', 'Participants', 'Software', 'Registration', 'Contact'].map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/-+/g, '-')}`}
                  className="block text-xs transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Organiser */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              Organised By
            </p>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              National Research Institute of Astronomy and Geophysics (NRIAG)<br />
              Department of Astronomy<br />
              Egypt
            </p>
            {/* <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
              In collaboration with international partners from Harvard-Smithsonian CfA, Observatoire de Paris,
              Konkoly Observatory, and Astronomical Institute AS CR.
            </p> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 NRIAG , Advanced Arab Astrophysics School. All rights reserved.
          </p>
          <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Sixth Edition · Kottamia Observatory · Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
