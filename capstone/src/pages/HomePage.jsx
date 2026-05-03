import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { navigateTo } from '../hooks/usePathname.js'

function HomePage() {
  useDocumentTitle('Home')

  return (
    <div className="page-grid home-page">
      <section className="home-hero">
        <span className="home-kicker">Minimal CV maker</span>
        <h1>Build a clean CV without extra noise.</h1>
        <p>
          Edit once, preview instantly, and keep the layout simple from start to finish.
        </p>

        <div className="hero-actions home-actions">
          <a
            href="/builder"
            className="primary-button"
            onClick={(event) => {
              event.preventDefault()
              navigateTo('/builder')
            }}
          >
            Start building
          </a>
          <a
            href="/templates"
            className="ghost-button"
            onClick={(event) => {
              event.preventDefault()
              navigateTo('/templates')
            }}
          >
            View templates
          </a>
        </div>

        <p className="home-meta">Live preview, local draft saving, and simple export options.</p>
      </section>
    </div>
  )
}

export default HomePage