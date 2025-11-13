import './ResumePage.css'

function ResumePage() {
  // Place your resume PDF in the public folder and update this path
  // For example: if the file is public/resume.pdf, use '/resume.pdf'
  const resumePath = '/Akira_Resume_Nov_2025.pdf'

  return (
    <div className="resume-page">
      <div className="resume-content">
        <h1 className="resume-title">resume</h1>
        <p>click below to view or download my resume:</p>
        <div className="resume-actions">
          <a 
            href={resumePath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-link"
          >
            view resume (pdf)
          </a>
          <a 
            href={resumePath} 
            download
            className="resume-link resume-download"
          >
            download resume
          </a>
        </div>
        <p className="resume-note">
          <em>note: update the resume path in ResumePage.jsx to point to your actual PDF file.</em>
        </p>
      </div>
    </div>
  )
}

export default ResumePage

