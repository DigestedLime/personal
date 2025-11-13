import { useEffect } from 'react'
import './BlogRedirect.css'

function BlogRedirect() {
  useEffect(() => {
    // Redirect to blog
    window.location.href = 'https://transitorythoughts.substack.com/'
  }, [])

  return (
    <div className="blog-redirect">
      <div className="blog-redirect-content">
        <h1>blog</h1>
        <p>redirecting to my substack...</p>
      </div>
    </div>
  )
}

export default BlogRedirect

