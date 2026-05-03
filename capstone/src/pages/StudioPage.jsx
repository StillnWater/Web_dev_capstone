import { useState } from 'react'
import SectionHeader from '../components/SectionHeader.jsx'
import { builderSections, starterCvProfile } from '../data/siteContent.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const builderThemes = [
  { id: 'sunrise', label: 'Sunrise' },
  { id: 'midnight', label: 'Midnight' },
  { id: 'paper', label: 'Paper' },
]

function StudioPage() {
  useDocumentTitle('Builder')
  const [profile, setProfile] = useLocalStorage('cv-maker-profile', starterCvProfile)
  const [template, setTemplate] = useLocalStorage('cv-maker-template', 'Classic CV')
  const [theme, setTheme] = useLocalStorage('cv-maker-theme', 'sunrise')
  const [sectionOrder, setSectionOrder] = useLocalStorage(
    'cv-maker-section-order',
    builderSections,
  )
  const [draggedSection, setDraggedSection] = useState(null)

  const handleFieldChange = (field) => (event) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: event.target.value,
    }))
  }

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
    <div className="page-grid builder-page">
      <section className="builder-hero">
        <p className="eyebrow">CV builder</p>
        <h1>Edit your CV in one clean workspace.</h1>
        <p>
          Change the profile details, reorder sections, and keep the draft in local storage.
        </p>
      </section>

      <section className="card page-section builder-panel">
        <SectionHeader
          eyebrow="Controls"
          title="Pick a template, then fill in the details"
          description="The builder keeps the editing flow compact so the page stays readable while you work."
        />

        <div className="theme-options">
          {builderThemes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={theme === item.id ? 'theme-chip active' : 'theme-chip'}
              onClick={() => setTheme(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hero-actions builder-actions">
          {['Classic CV', 'Modern CV', 'Creative CV'].map((item) => (
            <button
              key={item}
              type="button"
              className={template === item ? 'theme-chip active' : 'theme-chip'}
              onClick={() => setTemplate(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <form className="studio-form builder-form" onSubmit={(event) => event.preventDefault()}>
          <input type="text" value={profile.name} placeholder="Full name" onChange={handleFieldChange('name')} />
          <input type="text" value={profile.title} placeholder="Job title" onChange={handleFieldChange('title')} />
          <input type="email" value={profile.email} placeholder="Email" onChange={handleFieldChange('email')} />
          <input type="text" value={profile.phone} placeholder="Phone" onChange={handleFieldChange('phone')} />
          <input type="text" value={profile.location} placeholder="Location" onChange={handleFieldChange('location')} />
          <input type="text" value={profile.website} placeholder="Website or portfolio" onChange={handleFieldChange('website')} />
          <textarea
            className="builder-textarea"
            rows="5"
            value={profile.summary}
            placeholder="Professional summary"
            onChange={handleFieldChange('summary')}
          />

          <div className="section-shell" style={{ width: '100%' }}>
            <div className="section-shell-header">
              <h4>Section order</h4>
              <p>Drag to change what shows first in the preview.</p>
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

          <p className="builder-footnote">The draft is saved automatically. You can export it from the Export page.</p>
        </form>
      </section>

      <section className={`card page-section builder-panel builder-preview theme-${theme}`}>
        <SectionHeader
          eyebrow="Preview"
          title="See the result as you edit"
          description="The live snapshot stays close to the controls without splitting the page into competing blocks."
        />

        <div className="resume-top">
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.title}</p>
          </div>
          <div className="contact-stack">
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
            <span>{profile.website}</span>
          </div>
        </div>

        <div className="section-shell">
          <div className="section-shell-header">
            <h4>Live summary</h4>
            <p>Use this as your quick CV snapshot.</p>
          </div>

          <div className="notes-list">
            {sectionOrder.map((section) => (
              <article key={section.id} className="note-card">
                <span>{section.label}</span>
                <p>{section.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudioPage