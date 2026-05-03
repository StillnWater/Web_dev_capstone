import SectionHeader from '../components/SectionHeader.jsx'
import { exportPoints } from '../data/siteContent.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

function AboutPage() {
  useDocumentTitle('Export')

  return (
    <section className="card page-section">
      <SectionHeader
        eyebrow="Export tools"
        title="Save the CV when it is ready"
        description="Use the export actions to download a snapshot or copy the CV text for sharing."
      />

      <div className="about-list">
        {exportPoints.map((point) => (
          <article key={point} className="about-card">
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutPage