import { useMemo, useState } from 'react'
import './App.css'

const templates = [
  {
    id: 'modern',
    name: 'Modern Edge',
    accent: 'Teal',
    summary: 'Minimal, sharp, and designed for product and design roles.',
  },
  {
    id: 'classic',
    name: 'Classic Pro',
    accent: 'Navy',
    summary: 'A clean layout that keeps the focus on credentials and impact.',
  },
  {
    id: 'creative',
    name: 'Creative Grid',
    accent: 'Sunset',
    summary: 'A bolder structure for portfolios, marketing, and founders.',
  },
]

const themeModes = [
  { id: 'day', label: 'Daylight' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'paper', label: 'Paper' },
]

const sections = [
  { id: 'summary', label: 'Professional Summary', detail: 'Move to pin the value prop up top.' },
  { id: 'experience', label: 'Experience', detail: 'Reorder to spotlight your strongest story.' },
  { id: 'skills', label: 'Skills', detail: 'Keep only the skills the role needs.' },
  { id: 'projects', label: 'Projects', detail: 'Drag this higher for entry-level resumes.' },
]

const resumeStats = [
  { label: 'ATS score', value: '94%' },
  { label: 'Template', value: 'Modern Edge' },
  { label: 'Sections', value: '4 active' },
]

function App() {
  const [activeTemplate, setActiveTemplate] = useState(templates[0].id)
  const [activeTheme, setActiveTheme] = useState(themeModes[0].id)
  const [sectionOrder, setSectionOrder] = useState(sections)
  const [draggedSection, setDraggedSection] = useState(null)

  const currentTemplate = useMemo(
    () => templates.find((template) => template.id === activeTemplate) ?? templates[0],
    [activeTemplate],
  )

  const handleDragStart = (sectionId) => {
    setDraggedSection(sectionId)
  }

  const handleDrop = (targetId) => {
    if (!draggedSection || draggedSection === targetId) {
      return
    }

    setSectionOrder((currentOrder) => {
      const nextOrder = [...currentOrder]
      const fromIndex = nextOrder.findIndex((section) => section.id === draggedSection)
      const toIndex = nextOrder.findIndex((section) => section.id === targetId)

      if (fromIndex < 0 || toIndex < 0) {
        return currentOrder
      }

      const [moved] = nextOrder.splice(fromIndex, 1)
      nextOrder.splice(toIndex, 0, moved)
      return nextOrder
    })

    setDraggedSection(null)
  }

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  return (
    <div className={`page theme-${activeTheme}`}>
      <header className="topbar">
        <div>
          <p className="eyebrow"></p>
          <h1>Build polished resumes with templates, live preview, and export controls.</h1>
        </div>
        <div className="topbar-actions">
          <button type="button" className="ghost-button">
            Preview live
          </button>
          <button type="button" className="primary-button">
            Download PDF
          </button>
        </div>
      </header>

      <main className="dashboard">
        <section className="panel hero-panel">
          <div className="hero-copy">
            <span className="status-pill">Multiple templates + theme switching</span>
            <p className="lead">
              A focused resume editor for fast iteration, clean structure, and share-ready exports.
            </p>

            <div className="template-switcher" aria-label="Resume templates">
              {templates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  className={template.id === activeTemplate ? 'template-card active' : 'template-card'}
                  onClick={() => setActiveTemplate(template.id)}
                >
                  <span className="template-name">{template.name}</span>
                  <span className="template-accent">{template.accent}</span>
                  <span className="template-summary">{template.summary}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="hero-preview">
            <div className="preview-header">
              <div>
                <p className="preview-label">Live preview</p>
                <h2>{currentTemplate.name}</h2>
              </div>
              <span className="preview-badge">Theme ready</span>
            </div>

            <div className="preview-sheet">
              <div className="resume-top">
                <div>
                  <h3>Jordan Ellis</h3>
                  <p>Frontend Engineer</p>
                </div>
                <div className="contact-stack">
                  <span>jordan.ellis@email.com</span>
                  <span>linkedin.com/in/jordanellis</span>
                  <span>Portfolio available on request</span>
                </div>
              </div>

              <div className="preview-metrics">
                {resumeStats.map((stat) => (
                  <article key={stat.label}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </article>
                ))}
              </div>

              <div className="section-shell">
                <div className="section-shell-header">
                  <h4>Section drag & drop</h4>
                  <p>Reorder the resume structure before exporting.</p>
                </div>

                <div className="section-list">
                  {sectionOrder.map((section, index) => (
                    <button
                      key={section.id}
                      type="button"
                      className={draggedSection === section.id ? 'section-row dragging' : 'section-row'}
                      draggable
                      onDragStart={() => handleDragStart(section.id)}
                      onDragOver={handleDragOver}
                      onDrop={() => handleDrop(section.id)}
                    >
                      <span className="section-index">0{index + 1}</span>
                      <span className="section-copy">
                        <strong>{section.label}</strong>
                        <small>{section.detail}</small>
                      </span>
                      <span className="drag-handle">Drag</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="sidebar">
          <section className="panel theme-panel">
            <div className="panel-heading">
              <div>
                <p className="preview-label">Theme switching</p>
                <h2>One click visual modes</h2>
              </div>
            </div>

            <div className="theme-options">
              {themeModes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className={theme.id === activeTheme ? 'theme-chip active' : 'theme-chip'}
                  onClick={() => setActiveTheme(theme.id)}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </section>

          <section className="panel export-panel">
            <div className="panel-heading">
              <div>
                <p className="preview-label">Export and share</p>
                <h2>Clean download UI</h2>
              </div>
            </div>

            <div className="export-actions">
              <button type="button" className="primary-button wide">
                Export PDF
              </button>
              <button type="button" className="ghost-button wide">
                Download DOCX
              </button>
            </div>

            <ul className="feature-list">
              <li>ATS-friendly formatting</li>
              <li>Sharing links for reviewers</li>
              <li>Version snapshots for each edit</li>
            </ul>
          </section>

          <section className="panel build-panel">
            <div className="panel-heading">
              <div>
                <p className="preview-label">Project scope</p>
                <h2>Top-tier resume project</h2>
              </div>
            </div>

            <div className="build-grid">
              <article>
                <strong>Templates</strong>
                <span>Swap layouts instantly</span>
              </article>
              <article>
                <strong>Sections</strong>
                <span>Reorder by dragging</span>
              </article>
              <article>
                <strong>Preview</strong>
                <span>See the final result live</span>
              </article>
              <article>
                <strong>Export</strong>
                <span>Download in multiple formats</span>
              </article>
            </div>
          </section>
        </aside>
      </main>
    </div>
  )
}

export default App
