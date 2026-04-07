import { Telescope, Moon, Database, Computer, Monitor, Code, TrendingUp } from 'lucide-react'

const tools = [
  {
    name: 'Kottamia Telescope',
    type: 'Instrument',
    desc: 'The primary 1.88m reflector telescope at Kottamia Observatory. Students will participate in real observing runs.',
    icon: <Telescope className="w-6 h-6" />,
  },
  {
    name: 'Meade Telescopes',
    type: 'Instrument',
    desc: 'Portable optical telescopes for supplementary observation training and multi-telescope exercises.',
    icon: <Moon className="w-6 h-6" />,
  },
  {
    name: 'International Archive Databases',
    type: 'Data Source',
    desc: 'Access to archived observation tables from major international observatories and space missions. Data downloaded via internet and provided on flash drives.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    name: 'IRAF / PyRAF',
    type: 'Software',
    desc: 'Standard image reduction and analysis framework for optical and spectroscopic data processing.',
    icon: <Computer className="w-6 h-6" />,
  },
  {
    name: 'SAOImage DS9',
    type: 'Software',
    desc: 'Astronomical imaging and data visualisation application used for FITS file inspection and analysis.',
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    name: 'Python Astropy Stack',
    type: 'Software',
    desc: 'Python-based astronomy libraries including Astropy, NumPy, Matplotlib and SciPy for data analysis and visualisation.',
    icon: <Code className="w-6 h-6" />,
  },
  {
    name: 'Period Analysis Tools',
    type: 'Software',
    desc: 'Specialised tools for period finding and light curve analysis of variable stars and photometric data.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    name: 'Computer Laboratory',
    type: 'Facility',
    desc: 'Fully equipped computational lab at the Centre of Excellence, Kottamia Observatory, available throughout the school.',
    icon: <Monitor className="w-6 h-6" />,
  },
]

export default function DataSoftware() {
  return (
    <section
      id="software"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Infrastructure
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'var(--navy-dark)' }}
          >
            Data & Software
          </h2>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Students will receive hands-on training with professional-grade astronomical software
            and real observational datasets from both the Kottamia telescope and international archives.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="p-5 border hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'var(--border)', background: '#fafbff' }}
            >
            <div className="text-yellow-400">{tool.icon}</div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-2"
                style={{ color: 'var(--gold)' }}
              >
                {tool.type}
              </div>
              <h3
                className="font-display font-semibold text-base mb-2 leading-snug"
                style={{ color: 'var(--navy-dark)' }}
              >
                {tool.name}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Data note */}
        <div
          className="mt-10 p-6 grid md:grid-cols-2 gap-6"
          style={{ background: '#f0f4ff', border: '1px solid #dce3f0' }}
        >
          <div>
            <p
              className="font-semibold mb-2"
              style={{ color: 'var(--navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
              Archival Data Access
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
              Participants will learn to download and handle archival observation data from international telescope
              databases via internet, and will be provided with curated datasets saved on flash drives for offline
              laboratory work.
            </p>
          </div>
          <div>
            <p
              className="font-semibold mb-2"
              style={{ color: 'var(--navy-dark)', fontFamily: 'Playfair Display, serif' }}
            >
              No Prior Software Experience Required
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
              All workshops are structured to guide participants from first principles. Introductory sessions
              on each software tool will be provided before hands-on data analysis exercises begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
