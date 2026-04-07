import { Atom, Disc3, Star, Satellite, Microscope, Settings, Beaker } from 'lucide-react'

const topics = [
  {
    code: 'T01',
    title: 'General Cosmology',
    desc: 'Foundations of modern cosmology: the expanding universe, dark matter, dark energy, and the large-scale structure of the cosmos.',
    icon: <Atom className="w-6 h-6" />,
  },
  {
    code: 'T02',
    title: 'The Realm of Galaxies',
    desc: 'Galaxy formation, morphology, classification, active galactic nuclei, and multi-wavelength observations of extragalactic systems.',
    icon: <Disc3 className="w-6 h-6" />,
  },
  {
    code: 'T03',
    title: 'Compact Stars',
    desc: 'White dwarfs, neutron stars, and black holes — their formation, structure, observational signatures, and role in binary systems.',
    icon: <Star className="w-6 h-6" />,
  },
  {
    code: 'T04',
    title: 'Photometric Analysis',
    desc: 'Techniques in optical photometry: light curves, period analysis, and photometric studies of variable stars and stellar clusters.',
    icon: <Satellite className="w-6 h-6" />,
  },
  {
    code: 'T05',
    title: 'Spectroscopic Analysis',
    desc: 'Spectral classification, X-ray binaries, stellar evolution, composition, and advanced spectral reduction pipelines.',
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    code: 'T06',
    title: 'Astronomical Instrumentation',
    desc: 'How electrical engineers design and power astronomical instruments — detectors, control systems, and telescope electronics.',
    icon: <Settings className="w-6 h-6" />,
  },
]

export default function Topics() {
  return (
    <section
      id="topics"
      className="py-24"
      style={{ background: 'var(--navy-dark)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Scientific Programme
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'white' }}
          >
            Topics & Lectures
          </h2>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            This year's programme spans six major areas of modern astrophysics,
            delivered through theoretical lectures and hands-on workshops.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.08)' }}>
          {topics.map((topic) => (
            <div
              key={topic.code}
              className="group p-8 transition-all duration-300 hover:z-10"
              style={{ background: 'var(--navy-dark)' }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: 'rgba(201,162,39,0.6)' }}
                >
                  {topic.code}
                </span>
                <span className="text-yellow-400">{topic.icon}</span>
              </div>

              {/* Title */}
              <h3
                className="font-display text-xl mb-3 transition-colors duration-200"
                style={{ color: 'white' }}
              >
                {topic.title}
              </h3>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {topic.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'var(--gold)' }}
              />
            </div>
          ))}
        </div>

        {/* Practical note */}
        <div
          className="mt-8 p-6 flex gap-4 items-start"
          style={{
            border: '1px solid rgba(201,162,39,0.25)',
            background: 'rgba(201,162,39,0.05)',
          }}
        >
          <span className="text-yellow-400 flex-shrink-0"><Beaker className="w-5 h-5" /></span>
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: 'var(--gold-light)', fontFamily: 'Playfair Display, serif' }}
            >
              Practical Workshops
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Each theoretical topic is complemented by hands-on computer laboratory sessions where students
              analyse real observational and archived data, developing the research skills necessary to participate
              actively in international astrophysics projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
