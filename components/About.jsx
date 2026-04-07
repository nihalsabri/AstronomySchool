import { Telescope, BarChart3, Handshake, Globe } from 'lucide-react'

export default function About() {
  const stats = [
    { value: '40–50', label: 'Participants' },
    { value: '6th', label: 'Edition' },
    { value: '7', label: 'Days of Training' },
    { value: '11+', label: 'Expert Lecturers' },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="flex justify-center gap-8 mb-6">
         <img src="/NRIAG-logo.jpg" alt="NRIAG Logo" className="h-16" />
    <img src="/ArAS_logo.jpeg" alt="ARAS Logo" className="h-16" />
          </div> */}
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Overview
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'var(--navy-dark)' }}
          >
            About the School
          </h2>
          <div className="ornament-line max-w-xs mx-auto">
            <span className="font-mono text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
              NRIAG · EGYPT
            </span>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <h3
              className="font-display text-2xl mb-5"
              style={{ color: 'var(--navy-dark)' }}
            >
              A Premier Training Programme
              <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}> in Observational Astronomy</span>
            </h3>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
              <p>
                The Sixth Advanced Arab Astrophysics School (ARAS 2026) is a flagship hands-on training
                programme organised by the <strong>National Research Institute of Astronomy and Geophysics (NRIAG)</strong>,
                Egypt. It will be held at Kottamia Astronomical Observatory (KAO) from
                October 23–29, 2026.
              </p>
              <p>
                The school provides both theoretical and practical training in astronomical observations
                through the Kottamia Telescope and Meade telescopes, optical and spectral analysis, and
                the use of archived observation tables from international telescopes.
              </p>
              <p>
                A central objective of the school is to train students to work as part of a research team 
                from initial idea generation through to the final presentation of results in a research paper.
                Egyptian, Arab, and international professors participate, diversifying expertise and fostering
                future collaborative relationships.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Telescope className="w-6 h-6" />,
                title: 'Telescope Observations',
                desc: 'Hands-on training with the Kottamia Telescope and Meade telescopes, including night-sky observation sessions.',
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: 'Data Analysis',
                desc: 'Optical and spectral data analysis using state-of-the-art computer laboratory facilities and archived international telescope data.',
              },
              {
                icon: <Handshake className="w-6 h-6" />,
                title: 'Research Collaboration',
                desc: 'Students develop research project plans and work in teams, guided by international research advisors.',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'International Faculty',
                desc: 'Lecturers from Harvard, Paris Observatory, Konkoly Observatory, Czech Academy of Sciences, and beyond.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 border-l-2 transition-all duration-200 hover:shadow-sm"
                style={{
                  borderColor: 'var(--gold)',
                  background: '#f8f9fc',
                }}
              >
                <div className="text-lg flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }}>
                  {item.icon}
                </div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: 'var(--navy-dark)', fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center py-8"
              style={{ borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}
            >
              <p
                className="font-display text-4xl font-bold mb-1"
               style={{ color: 'var(--gold)' }}
              >
                {s.value}
              </p>
              <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
