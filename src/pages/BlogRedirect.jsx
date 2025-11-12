import { useEffect } from 'react'
import './BlogRedirect.css'

function BlogRedirect() {
  useEffect(() => {
    // Redirect to blog
    window.location.href = 'https://akiratakaki.com/blog'
  }, [])

  return (
    <div className="blog-redirect">
      <div className="blog-redirect-content">
        <h1>blog</h1>
        <p>redirecting to my substack...</p>
        <p className="blog-note">
          <em>substack link to be added</em>
        </p>
      </div>
    </div>
  )
}

export default BlogRedirect

