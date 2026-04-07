import { Home } from 'lucide-react'

export default function Participants() {
  return (
    <section
      id="participants"
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
            Eligibility & Selection
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'white' }}
          >
            Who Should Apply
          </h2>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            The school is targeted at physics and astronomy students and professionals
            from Egypt, the Arab world, and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Eligibility */}
          <div>
            <h3
              className="font-display text-2xl mb-6"
              style={{ color: 'white' }}
            >
              Eligible Participants
            </h3>
            <div className="space-y-3">
              {[
                { level: 'Recent Graduates', desc: 'BSc/BA holders in Physics or Astronomy' },
                { level: "Master's Students", desc: 'Currently enrolled MSc candidates' },
                { level: 'Doctoral Students', desc: 'PhD candidates in Astronomy or related fields' },
                { level: 'Recent PhD Graduates', desc: 'Postdoctoral researchers in early career stage' },
                { level: 'Young Staff Members', desc: 'Junior academic/research staff' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4"
                  style={{ background: 'rgba(255,255,255,0.05)', borderLeft: '2px solid var(--gold)' }}
                >
                  <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(201,162,39,0.2)' }}
                  >
                    <svg className="w-3 h-3" fill="var(--gold)" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'white' }}>{item.level}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 text-sm"
              style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
                color: 'rgba(255,180,180,0.9)',
              }}
            >
              <strong>Note:</strong> Only applicants with a background in Physics and/or Astronomy will be considered.
              Other specialities will not be accepted.
            </div>
          </div>

          {/* Composition targets */}
          <div>
            <h3
              className="font-display text-2xl mb-6"
              style={{ color: 'white' }}
            >
              Participant Composition
            </h3>

            {/* Capacity */}
            <div
              className="p-6 mb-6"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
            >
              <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                Capacity
              </p>
              <p className="font-display text-5xl font-bold text-white mb-1">40–50</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Total participants (limited by guest house capacity at Kottamia Observatory)
              </p>
            </div>

            {/* Composition bars */}
            {[
              { label: 'Egyptian Students', pct: 50, desc: 'Target 50% of all participants', color: '#c9a227' },
              { label: 'International Students', pct: 50, desc: 'Arab world & global applicants', color: '#6270f1' },
              { label: 'Female Participants', pct: 50, desc: 'Gender parity goal', color: '#ec4899' },
              { label: 'Male Participants', pct: 50, desc: 'Gender parity goal', color: '#38bdf8' },
            ].map((bar, i) => (
              <div key={i} className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{bar.label}</span>
                  <span className="font-mono text-sm font-semibold" style={{ color: bar.color }}>{bar.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${bar.pct}%`, background: bar.color }}
                  />
                </div>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{bar.desc}</p>
              </div>
            ))}

            {/* Accommodation note */}
            <div
              className="mt-6 p-4 text-xs leading-relaxed"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <Home className="inline w-4 h-4 mr-2 text-yellow-400" /> Accommodation, meals, and all school facilities are provided at the Kottamia Observatory guest house,
              with separate female and male wings.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
