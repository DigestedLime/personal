import './PortfolioPage.css'

function PortfolioPage() {
  const portfolioImages = [
    'p1.png',
    'p2.png',
    'p3.png',
    'p4.png',
  ]

  return (
    <div className="portfolio-page">
      <div className="portfolio-content">
        <h1 className="portfolio-title">photos</h1>
        <p className="portfolio-notice">i have not really gotten started on this page yet</p>
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
