function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
      </div>
      <p>{project.summary}</p>
      <small>{project.impact}</small>
    </article>
  )
}

export default ProjectCard