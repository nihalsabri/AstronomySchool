const days = [
  {
    day: 'Day 1',
    date: 'Friday, Oct 23',
    theme: 'Arrival & Orientation',
    events: [
      { time: '14:00–18:00', label: 'Registration & Welcome', type: 'admin' },
      { time: '18:00–19:30', label: 'Opening Ceremony & Introduction to Kottamia Observatory', type: 'lecture' },
      { time: '20:00', label: 'Welcome Dinner', type: 'social' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Saturday, Oct 24',
    theme: 'Cosmology & Galaxies',
    events: [
      { time: '09:00–10:30', label: 'Lecture: General Cosmology I', type: 'lecture' },
      { time: '10:30–11:00', label: 'Coffee Break', type: 'break' },
      { time: '11:00–12:30', label: 'Lecture: General Cosmology II', type: 'lecture' },
      { time: '14:00–15:30', label: 'Lecture: The Realm of Galaxies I', type: 'lecture' },
      { time: '15:30–17:00', label: 'Workshop: Cosmological Data Analysis', type: 'workshop' },
      { time: '21:00–23:00', label: 'Night Observation Session', type: 'observation' },
    ],
  },
  {
    day: 'Day 3',
    date: 'Sunday, Oct 25',
    theme: 'Compact Stars & Spectroscopy',
    events: [
      { time: '09:00–10:30', label: 'Lecture: Compact Stars — White Dwarfs & Neutron Stars', type: 'lecture' },
      { time: '11:00–12:30', label: 'Lecture: The Realm of Galaxies II', type: 'lecture' },
      { time: '14:00–15:30', label: 'Lecture: Spectroscopic Analysis — X-ray Binaries', type: 'lecture' },
      { time: '15:30–17:00', label: 'Workshop: Spectral Reduction Pipeline', type: 'workshop' },
      { time: '21:00–23:00', label: 'Night Observation Session', type: 'observation' },
    ],
  },
  {
    day: 'Day 4',
    date: 'Monday, Oct 26',
    theme: 'Photometry & Stellar Evolution',
    events: [
      { time: '09:00–10:30', label: 'Lecture: Photometric Analysis — Star Clusters', type: 'lecture' },
      { time: '11:00–12:30', label: 'Lecture: Stellar Evolution, Classification & Composition', type: 'lecture' },
      { time: '14:00–17:00', label: 'Workshop: Light Curve Analysis & Period Finding', type: 'workshop' },
      { time: '21:00–23:00', label: 'Night Observation Session', type: 'observation' },
    ],
  },
  {
    day: 'Day 5',
    date: 'Tuesday, Oct 27',
    theme: 'Instrumentation & Research Teams',
    events: [
      { time: '09:00–10:30', label: 'Lecture: How Electrical Engineers Power Astronomical Instruments', type: 'lecture' },
      { time: '11:00–12:30', label: 'Telescope Tour & Instrumentation Hands-On', type: 'observation' },
      { time: '14:00–17:00', label: 'Research Team Formation & Project Planning', type: 'workshop' },
      { time: '21:00–23:00', label: 'Night Observation Session (Team Projects)', type: 'observation' },
    ],
  },
  {
    day: 'Day 6',
    date: 'Wednesday, Oct 28',
    theme: 'Project Development & Presentations',
    events: [
      { time: '09:00–12:30', label: 'Team Research Project Work — Data & Analysis', type: 'workshop' },
      { time: '14:00–17:00', label: 'Research Presentations — Preliminary Results', type: 'lecture' },
      { time: '20:00', label: 'Gala Dinner & Cultural Evening', type: 'social' },
    ],
  },
  {
    day: 'Day 7',
    date: 'Thursday, Oct 29',
    theme: 'Final Presentations & Closing',
    events: [
      { time: '09:00–12:00', label: 'Final Research Presentations & Discussions', type: 'lecture' },
      { time: '12:00–13:00', label: 'Certificates Ceremony', type: 'admin' },
      { time: '13:00', label: 'Closing & Departure', type: 'social' },
    ],
  },
]

const typeStyle = {
  lecture: { bg: '#e8edf8', color: '#1a3060', label: 'Lecture' },
  workshop: { bg: '#fff3d0', color: '#7a4f00', label: 'Workshop' },
  observation: { bg: '#0f2044', color: '#a5b8fc', label: 'Observation' },
  break: { bg: '#f3f4f6', color: '#6b7280', label: 'Break' },
  admin: { bg: '#f0fdf4', color: '#166534', label: 'Admin' },
  social: { bg: '#fdf2f8', color: '#86198f', label: 'Social' },
}

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="py-24"
      style={{ background: '#f8f9fc' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Programme
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'var(--navy-dark)' }}
          >
            Weekly Schedule
          </h2>
          <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
            October 23 – 29, 2026 · Kottamia Observatory
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {Object.entries(typeStyle).map(([key, val]) => (
            <span
              key={key}
              className="font-mono text-xs px-3 py-1 tracking-wider"
              style={{ background: val.bg, color: val.color }}
            >
              {val.label}
            </span>
          ))}
        </div>

        {/* Days */}
        <div className="space-y-6">
          {days.map((day, di) => (
            <details
              key={di}
              className="group border"
              style={{ borderColor: 'var(--border)', background: 'white' }}
              open={di === 0}
            >
              <summary
                className="flex items-center justify-between px-6 py-5 cursor-pointer list-none"
                style={{ userSelect: 'none' }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 flex items-center justify-center font-mono text-xs font-semibold flex-shrink-0"
                    style={{ background: 'var(--navy-dark)', color: 'var(--gold)' }}
                  >
                    {di + 1}
                  </div>
                  <div>
                    <p
                      className="font-display font-semibold text-lg"
                      style={{ color: 'var(--navy-dark)' }}
                    >
                      {day.theme}
                    </p>
                    <p className="font-mono text-xs tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {day.day} · {day.date}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div
                className="px-6 pb-5 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="mt-4 space-y-2">
                  {day.events.map((ev, ei) => {
                    const s = typeStyle[ev.type]
                    return (
                      <div key={ei} className="flex items-center gap-4">
                        <span
                          className="font-mono text-xs w-24 flex-shrink-0"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {ev.time}
                        </span>
                        <span
                          className="font-mono text-xs px-2 py-0.5 flex-shrink-0"
                          style={{ background: s.bg, color: s.color }}
                        >
                          {s.label}
                        </span>
                        <span className="text-sm" style={{ color: 'var(--navy-dark)' }}>
                          {ev.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* <p
          className="text-center font-mono text-xs mt-8"
          style={{ color: '#c0c8d8' }}
        >
          Schedule is indicative and subject to minor adjustments. Final programme distributed upon registration.
        </p> */}
      </div>
    </section>
  )
}
