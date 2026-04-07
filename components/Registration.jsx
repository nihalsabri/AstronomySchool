import { DollarSign, Plane, Award } from 'lucide-react'

export default function Registration() {
  const steps = [
    {
      step: '01',
      title: 'Check Eligibility',
      desc: 'Ensure you are a physics or astronomy student/graduate. Other disciplines will not be considered.',
    },
    {
      step: '02',
      title: 'Prepare Documents',
      desc: 'CV, transcripts, brief statement of purpose, and a reference letter from your supervisor.',
    },
    {
      step: '03',
      title: 'Submit Application',
      desc: 'Complete the online registration form via the link below. Applications are reviewed on a rolling basis.',
    },
    {
      step: '04',
      title: 'Await Decision',
      desc: 'Shortlisted candidates will be notified by email with details on accommodation and logistics.',
    },
  ]

  return (
    <section
      id="registration"
      className="py-24"
      style={{
        background: 'linear-gradient(175deg, var(--navy-dark) 0%, #0f2d5e 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Applications
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'white' }}
          >
            Registration
          </h2>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Applications are open globally. The school accommodates 40–50 participants with gender and
            nationality diversity targets in mind.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mb-12" style={{ background: 'rgba(255,255,255,0.08)' }}>
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-7"
              style={{ background: 'var(--navy-dark)' }}
            >
              <div
                className="font-mono text-3xl font-bold mb-4"
                style={{ color: 'rgba(201,162,39,0.25)' }}
              >
                {s.step}
              </div>
              <h3
                className="font-display font-semibold text-base mb-2"
                style={{ color: 'white' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Important notes */}
        <div
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: <DollarSign className="w-5 h-5" />, title: 'Fees', body: 'Accommodation, meals, and all school materials are provided. Selected participants should confirm attendance upon notification.' },
            { icon: <Plane className="w-5 h-5" />, title: 'Travel', body: 'Participants are responsible for their own travel arrangements to the Kottamia Observatory site in Egypt.' },
            { icon: <Award className="w-5 h-5" />, title: 'Certificate', body: 'Participants who complete the programme will receive an official certificate from NRIAG.' },
          ].map((n, i) => (
            <div
              key={i}
              className="p-6"
              style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
            >
              <span className="text-yellow-400 mb-3 block">{n.icon}</span>
              <p className="font-semibold mb-2" style={{ color: 'var(--gold-light)', fontFamily: 'Playfair Display, serif' }}>
                {n.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {n.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div
          className="text-center p-10"
          style={{
            border: '1px solid rgba(201,162,39,0.4)',
            background: 'rgba(201,162,39,0.05)',
          }}
        >
          <p
            className="font-display text-2xl mb-2"
            style={{ color: 'white' }}
          >
            Ready to Apply?
          </p>
          <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Registration is now open. Limited places available , early submission is encouraged.
          </p>
          <a
             href="https://docs.google.com/forms/d/e/1FAIpQLSedujmVE2oCv64jdgX_97KfQSbulkMhL1aKJuoJnfshORVqkQ/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 font-mono text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:brightness-110"
            style={{ background: 'var(--gold)', color: 'var(--navy-dark)' }}
          >
            Open Registration Form
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          {/* <p className="font-mono text-xs mt-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Registration link will be active when applications open. 
          </p> */}
        </div>
      </div>
    </section>
  )
}
