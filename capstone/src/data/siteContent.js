export const navigationLinks = [
  { to: '/', label: 'Home' },
  { to: '/builder', label: 'Builder' },
  { to: '/templates', label: 'Templates' },
  { to: '/export', label: 'Export' },
]

export const heroStats = [
  { label: 'Templates', value: '3 styles' },
  { label: 'Preview', value: 'Live updates' },
  { label: 'Export', value: 'JSON / text' },
]

export const cvTemplates = [
  {
    id: 'atlas',
    title: 'Classic CV',
    category: 'Clean',
    summary: 'Traditional layout for students and job seekers who want a crisp, readable CV.',
    impact: 'Best for professional roles and academic applications.',
  },
  {
    id: 'groove',
    title: 'Modern CV',
    category: 'Bold',
    summary: 'A stronger accent style with highlighted metrics and stronger section separation.',
    impact: 'Useful for digital portfolios and technical roles.',
  },
  {
    id: 'pulse',
    title: 'Creative CV',
    category: 'Creative',
    summary: 'A more expressive CV for design, media, and personal branding focused applications.',
    impact: 'Gives room for personality without losing structure.',
  },
]

export const featuredPillars = [
  {
    title: 'Editable CV fields',
    text: 'Name, contact details, summary, and experience are wired into a live editable form.',
  },
  {
    title: 'Persistent draft',
    text: 'The builder stores your draft in local storage so edits survive refreshes.',
  },
  {
    title: 'Real export actions',
    text: 'Download the current CV as JSON or copy a text snapshot for reuse elsewhere.',
  },
]

export const builderSections = [
  { id: 'summary', label: 'Profile summary', detail: 'Lead with a focused two-line overview.' },
  { id: 'experience', label: 'Work experience', detail: 'Show your latest role first.' },
  { id: 'education', label: 'Education', detail: 'Keep the most relevant qualification near the top.' },
  { id: 'skills', label: 'Skills', detail: 'Cluster the skills recruiters scan for quickly.' },
  { id: 'projects', label: 'Projects', detail: 'Highlight proof of work with links or outcomes.' },
]

export const starterCvProfile = {
  name: 'Jordan Ellis',
  title: 'Frontend Developer',
  email: 'jordan.ellis@email.com',
  phone: '+1 (555) 014-2034',
  location: 'Kathmandu, Nepal',
  website: 'jordanellis.dev',
  summary:
    'Detail-oriented frontend developer focused on accessible interfaces, fast iteration, and clean UI systems.',
  experience: [
    'Built React dashboards with routing, forms, and persistent local state.',
    'Improved page structure and responsiveness for student-facing web tools.',
  ],
  education: [
    'BSc Computer Science, Tribhuvan University',
    'Web Development specialization with React projects',
  ],
  skills: ['React', 'JavaScript', 'Routing', 'Forms', 'UI Design', 'Accessibility'],
  projects: [
    'CV Maker with template switching and local draft persistence',
    'Student dashboard with reusable components and responsive layout',
  ],
}

export const exportPoints = [
  'Download a JSON snapshot to reuse the content in another app.',
  'Copy a plain-text CV version for quick sharing in chat or email.',
  'Reset to the starter profile whenever you want to test a new layout.',
]