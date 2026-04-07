'use client'
import { useState } from 'react'
import { MapPin, Calendar, Globe } from 'lucide-react'

const faqs = [
  {
    q: 'Who is eligible to apply to the school?',
    a: 'The school is open to recent graduates, Master\'s and doctoral students, recent PhD graduates, and young staff members with a background exclusively in physics and/or astronomy. Applicants from Egypt, Arab countries, and worldwide are welcome.',
  },
  {
    q: 'Is the school free to attend?',
    a: 'Accommodation, meals, and all school materials at Kottamia Observatory are provided for selected participants. Participants are responsible for their own travel costs to the observatory.',
  },
  {
    q: 'How many participants will be accepted?',
    a: 'The school targets 40 : 50 participants, constrained by the capacity of the Kottamia Observatory guest house. The selection aims for approximately 50% Egyptian students and 50% female participants.',
  },
  {
    q: 'What language will lectures be delivered in?',
    a: 'All lectures and workshops will be conducted in English, given the international nature of the faculty and the participation of students from multiple countries.',
  },
  {
    q: 'What equipment or software should I bring?',
    a: 'Participants should bring their own laptops if possible. All necessary software will be installed and made available in the computer laboratory. Archived observational data will be provided on flash drives.',
  },
  {
    q: 'Will I receive a certificate upon completion?',
    a: 'Yes. Participants who successfully complete the full programme will receive an official certificate issued by the National Research Institute of Astronomy and Geophysics (NRIAG), Egypt.',
  },
  {
    q: 'Is accommodation mixed or separated?',
    a: 'The Kottamia Observatory guest house has separate female and male wings. All selected participants will be housed on-site for the duration of the school.',
  },
  {
    q: 'When will I hear about my application result?',
    a: 'Applications are reviewed on a rolling basis. Shortlisted candidates will be contacted by email. We encourage early submission as places are limited.',
  },
]

export default function Contact() {
  const [open, setOpen] = useState(null)

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Support
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'var(--navy-dark)' }}
          >
            Contact & FAQ
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* FAQ */}
          <div className="lg:col-span-3">
            <h3
              className="font-display text-2xl mb-6"
              style={{ color: 'var(--navy-dark)' }}
            >
              Frequently Asked Questions
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className="text-sm font-semibold leading-snug"
                      style={{ color: 'var(--navy-dark)', fontFamily: 'Playfair Display, serif' }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-200"
                      style={{
                        color: 'var(--text-muted)',
                        transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {open === i && (
                    <div
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: '#4b5563', borderTop: '1px solid var(--border)' }}
                    >
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3
              className="font-display text-2xl mb-6"
              style={{ color: 'var(--navy-dark)' }}
            >
              Get in Touch
            </h3>

            <div
              className="p-6 mb-6"
              style={{ background: '#f8f9fc', border: '1px solid var(--border)' }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: 'var(--gold)' }}
              >
                Organising Institution
              </p>
              <p
                className="font-display font-semibold text-base mb-1"
                style={{ color: 'var(--navy-dark)' }}
              >
                National Research Institute of Astronomy and Geophysics
              </p>
              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                NRIAG , Department of Astronomy, Egypt
              </p>

              <div className="space-y-3">
                {[
                  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Kottamia Astronomical Observatory, Egypt' },
                  { icon: <Calendar className="w-5 h-5" />, label: 'Dates', value: 'October 23 : 29, 2026' },
                  { icon: <Globe className="w-5 h-5" />, label: 'Website', value: 'www.nriag.sci.eg' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="text-yellow-400 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-mono text-xs tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                        {item.label}
                      </p>
                      <p className="text-sm whitespace-pre-line" style={{ color: 'var(--navy-dark)' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="p-6"
              style={{ background: 'var(--navy-dark)' }}
            >
              <p
                className="font-mono text-xs tracking-widest uppercase mb-3"
                style={{ color: 'var(--gold)' }}
              >
                Have a Question?
              </p>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                For enquiries about the school, please reach out to the organising committee at NRIAG.
              </p>
              <a
                href="mailto:astrophysicsschool@nriag.sci.eg"
                className="inline-flex items-center gap-2 text-sm font-mono transition-opacity hover:opacity-80"
                style={{ color: 'var(--gold-light)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Organising Committee
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
