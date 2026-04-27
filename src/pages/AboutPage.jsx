import { useState, useRef, useEffect } from 'react'
import './AboutPage.css'

// This data structure will be populated from the PDFs
// For now, using existing data structure - you can update this with PDF content
const timelineItems = [
  // professional work items
  {
    id: 1,
    type: 'work',
    title: 'software engineer',
    organization: 'robinhood',
    timeframe: 'dec 2024 - present',
    location: 'toronto, on',
    description: 'developing core locate and regulatory systems for short selling and optimizing data workflows.',
    bullets: [
      'designed locate and regulatory services projected to generate $7.5m arr in the first year.',
      'implemented go-based clearing infrastructure to replace legacy python and kafka services.',
      'led cross-functional validation with operations, achieving 93% automated test coverage.',
      'migrated data reporting pipelines to apache spark, cutting processing time by over 50%.'
    ]
  },
  {
    id: 2,
    type: 'work',
    title: 'research assistant',
    organization: 'university of toronto',
    timeframe: 'may 2024 - nov 2024',
    location: 'toronto, on',
    description: 'developed proof tooling and data science education software for undergraduate courses.',
    bullets: [
      'built lean 4 proof tooling (elfe) to assist computer science education under prof. ahmed ashraf.',
      'collaborated with prof. asal aslemand on tooling used in undergraduate statistics courses.'
    ]
  },
  {
    id: 7,
    type: 'work',
    title: 'software development engineer intern',
    organization: 'amazon web services (aws)',
    timeframe: 'may 2022 - aug 2022',
    location: 'vancouver, bc',
    description: 'shipped developer tooling used by 100k+ eks users to improve observability and configuration time.',
    bullets: [
      'developed a sigv4-authenticated proxy in kubectl enabling direct skylens access for eks customers.',
      'cut cluster setup time by an estimated 10 million minutes and authored a companion plugin for the proxy.'
    ]
  },
  {
    id: 4,
    type: 'work',
    title: 'undergraduate researcher',
    organization: 'university of toronto (supervised by dr. emmy murphy)',
    timeframe: 'jan 2024 - apr 2024',
    location: 'toronto, on',
    description: 'investigated stable orbits in the three-body problem for senior thesis.',
    bullets: [
      'completed senior thesis on stability properties of orbital systems.',
      'applied advanced differential equations and topology techniques.'
    ]
  },
  {
    id: 5,
    type: 'work',
    title: 'teaching assistant',
    organization: 'university of toronto',
    timeframe: 'sep 2020 - apr 2024',
    location: 'toronto, on',
    description: 'taught over 2000 hours across 35+ computer science and math course sections.',
    bullets: [
      'led tutorials, office hours, and discussion forums for 1,000+ students.',
      'created lesson plans, resources, and assessments for courses including:',
      'csc373h5 - algorithm design & analysis',
      'csc338h5 - numerical methods',
      'csc324h5 - principles of programming languages',
      'csc207h5 - software design',
      'csc165h1 - mathematical expression and reasoning for computer science',
      'csc148h1 - computer science ii',
      'mat301h5 - groups and symmetries',
      'mat244h1 - ordinary differential equations',
      'mat240h5 - algebra i',
      'mat224h1 - linear algebra ii',
      'mat202h5 - discrete mathematics',
      'mat136h1 - integral calculus',
      'mat135h1 - differential calculus',
      'mat102h5 - mathematical proofs'
    ]
  },
  {
    id: 6,
    type: 'work',
    title: 'software engineering intern',
    organization: 'graycore',
    timeframe: 'sep 2023 - nov 2023',
    location: 'remote us',
    description: 'contributed to daffodil, a progressive web framework for enterprise commerce.',
    bullets: [
      'developed typescript rest apis for daffodil\'s commerce platform integrations.',
      'optimized endpoint structure for scalability and easier extension by client teams.'
    ]
  },
  {
    id: 8,
    type: 'work',
    title: 'software engineer intern',
    organization: 'nasdaq',
    timeframe: 'may 2023 - aug 2023',
    location: 'toronto, on + new york, ny',
    description: 'improved trading protocol reliability and built monitoring tools for latency analysis.',
    bullets: [
      'enhanced fix, ouch, and itch protocols for fault tolerance and recovery during 24x7 trading.',
      'built a jupyter-based analytics toolkit to monitor latency and streamline qa workflows.'
    ]
  },
  {
    id: 9,
    type: 'work',
    title: 'undergraduate researcher',
    organization: 'university of toronto (supervised by dr. micheal pawliuk)',
    timeframe: 'sep 2022 - dec 2022',
    location: 'toronto, on',
    description: 'researched generalizations of conway\'s checkerboard army.',
    bullets: [
      'produced report analyzing combinatorial properties and extensions of the original puzzle.',
      'supervised by prof. micheal pawliuk.'
    ]
  },
  {
    id: 10,
    type: 'work',
    title: 'undergraduate researcher',
    organization: 'university of toronto (supervised by dr. alexander kupers)',
    timeframe: 'jan 2022 - apr 2022',
    location: 'toronto, on',
    description: 'studied de rham\'s theorem in the context of algebraic topology.',
    bullets: [
      'produced an expository paper on de rham cohomology and differential forms.',
      'presented findings in departmental seminar.'
    ]
  },
  {
    id: 11,
    type: 'work',
    title: 'undergraduate researcher',
    organization: 'university of toronto (supervised by dr. swastik kopparty)',
    timeframe: 'jan 2022 - apr 2022',
    location: 'toronto, on',
    description: 'studied fundamental results in quantum information theory.',
    bullets: [
      'surveyed quantum communication models and shannon entropy analogues.',
      'compiled a report introducing key results in quantum information theory.'
    ]
  },
  {
    id: 12,
    type: 'work',
    title: 'undergraduate researcher',
    organization: 'university of toronto (supervised by dr. swastik kopparty)',
    timeframe: 'sep 2021 - dec 2021',
    location: 'toronto, on',
    description: 'analyzed the aks primality test using fft on group rings.',
    bullets: [
      'implemented components of the aks primality test for computational experiments.',
      'explored applications of fast fourier transform techniques in number theory.'
    ]
  },
  {
    id: 13,
    type: 'work',
    title: 'research assistant',
    organization: 'the fields institute (supervised by dr. kevin cheung)',
    timeframe: 'july 2021 - aug 2021',
    location: 'toronto, on',
    description: 'optimized arithmetic circuits as part of the fusrp program.',
    bullets: [
      'implemented syntactic factorization heuristics in c++ to optimize small arithmetic circuits.',
      'curated benchmark datasets and achieved 10% computation time improvement.'
    ]
  },
  {
    id: 15,
    type: 'work',
    title: 'undergraduate software researcher',
    organization: 'university of toronto',
    timeframe: 'may 2020 - aug 2020',
    location: 'toronto, on',
    description: 'developed interactive exercises for theory of computation students.',
    bullets: [
      'worked on pcrs, a web-based platform for programming assignments',
      'built regex-to-dfa assessments using hopcroft\'s algorithm for 500+ students.',
      'partnered with instructors to integrate pedagogical insights and instant feedback.'
    ]
  },
  // passion projects (love)
  {
    id: 14,
    type: '',
    title: 'baobab',
    organization: 'personal project',
    timeframe: 'may 2021 - aug 2021',
    location: 'toronto, on',
    description: 'built an education-first social platform to help cohorts learn together.',
    bullets: [
      'led api and database design using three-tiered architecture and crc modeling.',
      'implemented pagination and file transfer pipelines reducing load times by 20%.'
    ]
  },
  {
    id: 16,
    type: '',
    title: 'numerical algorithms visualizer',
    organization: 'personal project',
    timeframe: 'may 2020 - aug 2020',
    location: 'toronto, on',
    description: 'built a visualization suite for comparing numerical methods.',
    bullets: [
      'implemented newton\'s method and related solvers with adjustable precision.',
      'visualized convergence telemetry and trade-offs for educational use.'
    ]
  },
  {
    id: 3,
    type: 'love',
    title: 'president',
    organization: 'mathematical and computational sciences society',
    timeframe: 'may 2023 - apr 2024',
    location: 'mississauga, on',
    description: 'led the largest student society for cs, math, and stats at utm.',
    bullets: [
      'led a 30-person executive team serving 5,000+ students.',
      'ran the third iteration of deerhacks, mississauga\'s largest hackathon with 300+ annual participants.',
      'forged partnerships with icube and mmpa to connect students with industry.'
    ]
  },
  {
    id: 17,
    type: 'love',
    title: 'co-founder',
    organization: 'deerhacks',
    timeframe: 'apr 2022 - present',
    location: 'mississauga, on',
    description: 'co-founded mississauga\'s largest hackathon with 300+ annual participants.',
    bullets: []
  },
  {
    id: 18,
    type: 'love',
    title: 'personal photographer',
    organization: 'cool people i know',
    timeframe: 'may 2022 - present',
    location: 'everywhere',
    description: 'taking photos and capturing memories of the goofballs that surround me',
    bullets: [
      'picked up the camera in may 2022 and haven\'t put it down'
    ]
  },
  {
    id: 19,
    type: 'love',
    title: 'shadow president / vp of external affairs',
    organization: 'mathematical and computational sciences society',
    timeframe: 'may 2021 - apr 2022',
    location: 'mississauga, on',
    description: 'helped lead the largest student society for cs, math, and stats at utm.',
    bullets: [
      'helped co-found deerhacks, mississauga\'s largest hackathon with 300+ annual participants.',
      'supported many other hackathon-style events, unfortunately now defunct',
      'ran a campus-wide hide and seek event because we can and should'
    ]
  },
  {
    id: 26,
    type: 'love',
    title: 'club exec',
    organization: 'multiple uoft clubs (mainly cs & math)',
    timeframe: 'sep 2020 - apr 2024',
    location: 'mississauga, on + toronto, on',
    description: 'helped out in various roles at various clubs at uoft',
    bullets: []
  },
  {
    id: 27,
    type: 'love',
    title: 'speaker',
    organization: 'utm math club',
    timeframe: 'sep 2020 - apr 2024',
    location: 'mississauga, on',
    description: 'helped out in various roles at various clubs at uoft',
    bullets: []
  },
  {
    id: 28,
    type: 'love',
    title: '',
    organization: 'utm math club',
    timeframe: 'sep 2020 - apr 2024',
    location: 'mississauga, on',
    description: 'helped out in various roles at various clubs at uoft',
    bullets: []
  },
  // education
  {
    id: 25,
    type: 'education',
    title: 'former university student',
    organization: 'university of toronto',
    timeframe: '2020 - 2024',
    location: 'toronto, on',
    description: 'honours bsc. in computer science and mathematics, gpa 3.8/4.0, dean\'s list every term.',
    bullets: []
  },
  // silly/fun items
  // {
  //   id: 23,
  //   type: 'silly',
  //   title: 'community member',
  //   organization: 'utm urbanism club',
  //   timeframe: 'may 2023 - apr 2024',
  //   location: 'toronto, on',
  //   description: 'participate in local urbanism and transit advocacy events.',
  //   bullets: [
  //     'organized discussions on transit and urban planning with advocates like reece martin.'
  //   ]
  // },
  {
    id: 22,
    type: 'silly',
    title: 'boat goat',
    organization: 'amazon interns',
    timeframe: 'summer 2022',
    location: 'vancouver, bc',
    description: 'got amazon to give 200 of us overpaid interns a boat party',
    bullets: [
      'secured $10,000 in funding to elevate intern engagement',
      'organized intern events from board game nights to rooftop barbeques'
    ]
  },
  {
    id: 30,
    type: 'silly',
    title: 'one piece card game expert',
    organization: 'one piece card game',
    timeframe: 'aug 2024 - present',
    location: 'toronto, on',
    description: 'got 70th at a 1024 person tournament, trying to do better',
    bullets: [
      'being a meta sheep and playing whatever\'s good'
    ]
  },
  {
    id: 31,
    type: 'silly',
    title: 'duolingo user',
    organization: 'hell',
    timeframe: 'forever',
    location: 'everywhere',
    description: 'trying to learn hindi, japanese and sometimes mandarin',
    bullets: [
      'talk to me in french, japanese or hindi please',
      'i need practice with everything'
    ]
  },
  {
    id: 32,
    type: 'silly',
    title: 'walking',
    organization: 'myself',
    timeframe: 'sometime in 2024',
    location: 'toronto, on',
    description: 'walked from finch to union',
    bullets: [
      'also walked like 9 km to go meet shakir and ethan',
    ]
  }
]


// blog posts from akiratakaki.com/blog
const blogPosts = [
  {
    id: 1,
    title: 'an involved example of strong induction',
    description: 'this semester, i\'m a teaching assistant for mat102, utm\'s introduction to mathematical proofs and reasoning.',
    date: 'nov 6, 2023'
  },
  {
    id: 2,
    title: 'you, yes you, do not understand infinity.',
    description: 'it\'s been a couple months since i\'ve written a blog post. lots has happened since then for me in my life, but i\'d like to get back to blogging, no matter my audience size.',
    date: 'jan 19, 2021'
  },
  {
    id: 3,
    title: 'fibonacci and me - part 4: loose ends',
    description: 'hey! welcome back to (hopefully) the last post in this 3(ish) part series.',
    date: 'oct 24, 2020'
  }
]

function idComparator(a, b) {
  return a.id - b.id
}

// Images should be placed in public/images/hero/
const heroImages = [
  { file: 'hero142857.png', caption: 'hi there!', weight: 6 },
  { file: 'hero285714.png', caption: 'larger than life', weight: 6 },
  { file: 'hero428571.png', caption: 'gotta quench your thirst!', weight: 4 },
  { file: 'hero571428.png', caption: 'a very cool bag and a torii', weight: 4 },
  { file: 'hero714285.png', caption: 'excuse me, have we met before?', weight: 2 },
  { file: 'hero857142.png', caption: 'hiking near vancouver', weight: 1 },
  { file: 'hero999999.png', caption: 'posing in cancun', weight: 1 },
]

function pickWeightedHero(images) {
  const validImages = images.filter((img) => img.weight > 0)
  const totalWeight = validImages.reduce((sum, img) => sum + img.weight, 0)

  // Fallback to uniform selection if all weights are invalid.
  if (!totalWeight || validImages.length === 0) {
    return images[Math.floor(Math.random() * images.length)]
  }

  let random = Math.random() * totalWeight

  for (const image of validImages) {
    random -= image.weight
    if (random <= 0) return image
  }

  return validImages[0]
}

function AboutPage() {
  const [filter, setFilter] = useState('love') // 'work', 'love', 'silly'
  const timelineRef = useRef(null)
  const [hero, setHero] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    if (heroImages.length) {
      setHero(pickWeightedHero(heroImages))
    }
  }, [])

  const filteredItems = timelineItems.sort(idComparator).filter(item => {
        if (filter === 'work') return item.type === 'work'
        if (filter === 'love') return item.type === 'love'
        if (filter === 'silly') return item.type === 'silly'
        return false
      })

  const scrollToTimeline = (filterType) => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        setFilter(filterType)
      }, 100)
    }
  }

  const workItems = timelineItems.filter(item => item.type === 'work').slice(0, 3)

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-section">
            <h2 className="about-section-title">work</h2>
            <div className="work-summary">
              {workItems.map((item) => (
                <div key={item.id} className="work-summary-item">
                  <div className="work-summary-header">
                    <span className="work-role">{item.title}</span>
                    <span className="work-org">{item.organization}</span>
                  </div>
                  <p className="work-description">{item.description}</p>
                </div>
              ))}
            </div>
            <button 
              className="section-link-btn"
              onClick={() => scrollToTimeline('work')}
            >
              view all work →
            </button>
          </div>

          <div className="about-hero-photo">
            {hero ? (
              <figure className="hero-image-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}images/hero/${hero.file}`}
                  alt={hero.caption || 'hero'}
                  className="hero-image"
                  loading="lazy"
                />
                {hero.caption && <figcaption className="hero-caption">{hero.caption}</figcaption>}
              </figure>
            ) : (
              <div className="photo-placeholder">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="url(#photoGradient)" />
                  <defs>
                    <linearGradient id="photoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--sage-green)" />
                      <stop offset="100%" stopColor="var(--lavender-purple)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>

          <div className="about-hero-section">
            <h2 className="about-section-title">blog</h2>
            <div className="blog-summary">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-summary-item">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-description">{post.description}</p>
                </div>
              ))}
            </div>
            <a 
              href="https://akiratakaki.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="section-link-btn"
            >
              read blog →
            </a>
          </div>
        </div>
      </section>

      <section className="about-timeline-section" ref={timelineRef}>
        <h2 className="section-title">about me</h2>
        
        <div className="timeline-filters">
          <button 
            className={`filter-btn ${filter === 'love' ? 'active' : ''}`}
            onClick={() => setFilter('love')}
          >
            what i did for love
          </button>
          <button 
            className={`filter-btn ${filter === 'silly' ? 'active' : ''}`}
            onClick={() => setFilter('silly')}
          >
            what i did for silly
          </button>
          <button 
            className={`filter-btn ${filter === 'work' ? 'active' : ''}`}
            onClick={() => setFilter('work')}
          >
            what i did for work
          </button>
        </div>
        <div className="timeline">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`timeline-item timeline-item-${item.type}`}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item) }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p className="timeline-meta">
                  <span>{item.timeframe}</span>
                  {item.location && (
                    <>
                      <span className="separator">•</span>
                      <span>{item.location}</span>
                    </>
                  )}
                </p>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}

          {selectedItem && (
            <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
              <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" aria-label="Close" onClick={() => setSelectedItem(null)}>✕</button>
                <h2 id="modal-title" className="modal-title">{selectedItem.title}</h2>
                {selectedItem.organization && (
                  <p className="modal-subtitle">{selectedItem.organization}</p>
                )}
                <p className="modal-meta">
                  {selectedItem.timeframe}
                  {selectedItem.location ? ` • ${selectedItem.location}` : ''}
                </p>

                {selectedItem.description && (
                  <p className="modal-description">{selectedItem.description}</p>
                )}

                {selectedItem.bullets && selectedItem.bullets.length > 0 ? (
                  <ul className="modal-bullets">
                    {selectedItem.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="modal-empty">no additional details available.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
