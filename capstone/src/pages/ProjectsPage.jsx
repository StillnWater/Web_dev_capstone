import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { cvTemplates } from '../data/siteContent.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

const categories = ['All', ...new Set(cvTemplates.map((template) => template.category))]

function ProjectsPage() {
  useDocumentTitle('Templates')
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return cvTemplates
    }

    return cvTemplates.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="card page-section">
      <SectionHeader
        eyebrow="Template gallery"
        title="Choose a CV style"
        description="Filter by style and jump back to the builder when you want to apply one."
      />

      <div className="chip-row" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'theme-chip active' : 'theme-chip'}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsPage