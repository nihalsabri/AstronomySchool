'use client'
import 'flag-icons/css/flag-icons.min.css'

const speakers = [
   {
    name: 'Prof. Vinay L. Kashyap',
    affiliation: 'Harvard-Smithsonian Center for Astrophysics',
    image: '/speakers/Kashyap, Vinay.jpeg',  
    country: 'USA',
    flag: 'us',
  },
  {
    name: 'Prof. Raid Suleiman',
    affiliation: 'Harvard-Smithsonian Center for Astrophysics',
    image: '/speakers/Raid M Suleiman.jpeg',
    country: 'USA',
    flag: 'us',
  },
   {
    name: 'Prof. Robert Szabó',
    affiliation: 'Konkoly Observatory — HUN-REN CSFK, Director',
    image: '/speakers/Ropert Szabo.jpeg',
    country: 'Hungary',
    flag: 'hu',
  },
  {
    name: 'Prof. Brankica Kubátová',
    affiliation: 'Head of Stellar Physics — Astronomical Institute AS CR, Ondřejov',
    image: '/speakers/Brankica Kubátová.jpeg',
    country: 'Czech Republic',
    flag: 'cz',
  },
  {
    name: 'Dr Shilpa Sarkar',
    affiliation: 'Astronomical Institute of the Czech Academy of Sciences| Stellar Physics Department',
    image: '/speakers/Dr Shilpa Sarkar.jpeg',
    country: 'India',
    flag: 'in',
  },
    {
    name: 'Prof. David Valls-Gabaud',
    affiliation: 'Observatoire de Paris',
    image: '/speakers/David Valls-Gabaud.jpeg',
    country: 'France',
    flag: 'fr',
  },
  
  {
    name: 'Dr. Doaa M. El Sayed',
    affiliation: 'NRIAG — Department of Astronomy',
    image: '/speakers/Doaa M. El Sayed.jpeg',
    country: 'Egypt',
    flag: 'eg',
  },
   {
    name: 'Prof. Ashraf Ahmed Shaker',
    affiliation: 'NRIAG — Department of Astronomy',
    image: '/speakers/Ashraf A. Shaker.jpeg',
    country: 'Egypt',
    flag: 'eg',
  },
  {
    name: 'Prof. Mohamed Ibrahim Nouh',
    affiliation: 'NRIAG — Department of Astronomy',
    image: '/speakers/Mohamed Ibrahim Nouh.jpeg',
    country: 'Egypt',
    flag: 'eg',
  },
 
  {
    name: 'Prof. Yasser Hassan Hendy',
    affiliation: 'NRIAG — Department of Astronomy',
    image: '/speakers/Yasser Hassan Hendy.jpeg',
    country: 'Egypt',
    flag: 'eg',
  },
  {
    name: 'Prof. Ahmed Shokry Elshaer',
    affiliation: 'NRIAG — Department of Astronomy',
    image: '/speakers/Ahmed Shokry Abouelfetouh.jpeg',
    country: 'Egypt',
    flag: 'eg',
  },

    {
    name: 'Prof. Gamal Eldin Hamed',
    affiliation: 'NRIAG — Department of Astronomy',
    image: '/speakers/Gamal Edin Mohamed Hamed.jpeg',
    country: 'Egypt',
    flag: 'eg',
  }
]

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-mono text-xs tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Faculty
          </p>
          <h2
            className="font-display text-4xl md:text-5xl mb-5"
            style={{ color: 'var(--navy-dark)' }}
          >
            Invited Lecturers
          </h2>
          <p
            className="max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            An international faculty of astronomers and astrophysicists from leading institutions across Egypt,
            Europe, and North America.
          </p>
        </div>

        {/* Speaker grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {speakers.map((sp, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ borderColor: 'var(--border)', background: '#fafbff' }}
            >
              {/* Photo placeholder */}
              <div
                className="w-24 h-24 rounded-full mb-4 flex items-center justify-center overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #e8edf8 0%, #d0d8ef 100%)',
                  border: '3px solid var(--border)',
                }}
              >
                {/* Placeholder silhouette */}
                <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-30" fill="var(--navy-dark)">
                  <circle cx="40" cy="28" r="16" />
                  <ellipse cx="40" cy="70" rx="26" ry="20" />
                </svg>
                {/* Replace this div with an <img> tag when you have photos */}
<img src={sp.image} alt={sp.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Flag icon using flag-icons library */}
              <div className={`fi fi-${sp.flag} w-6 h-6 rounded-sm`} title={sp.country} />
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-muted)' }}
              >
                {sp.country}
              </span>

              {/* Name */}
              <h3
                className="font-display font-semibold text-base mb-1.5 leading-snug"
                style={{ color: 'var(--navy-dark)' }}
              >
                {sp.name}
              </h3>

              {/* Affiliation */}
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {sp.affiliation}
              </p>

              {/* Gold accent line on hover */}
              <div
                className="mt-4 h-0.5 w-0 group-hover:w-12 transition-all duration-400"
                style={{ background: 'var(--gold)' }}
              />
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
