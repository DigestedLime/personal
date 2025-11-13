import './PortfolioPage.css'

function PortfolioPage() {
  const portfolioImages = [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.jpg',
    'p6.jpg',
  ]

  return (
    <div className="portfolio-page">
      <div className="portfolio-content">
        <h1 className="portfolio-title">photos</h1>
        <div className="portfolio-grid">
          {portfolioImages.map((file, idx) => (
            <figure key={idx} className="portfolio-item">
              <img
                src={`${import.meta.env.BASE_URL}images/portfolio/${file}`}
                alt={`portfolio ${idx + 1}`}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
        <div className="portfolio-cta">
          <p>
            if you want more, check out my page →{' '}
            <a
              href="https://www.instagram.com/photosbyakira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
