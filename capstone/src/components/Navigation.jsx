import { navigationLinks } from '../data/siteContent.js'
import { navigateTo, usePathname } from '../hooks/usePathname.js'

function Navigation() {
  const pathname = usePathname()

  return (
    <header className="topbar">
      <div className="brand-block">
        <span className="brand-mark">CS</span>
        <div>
          <p className="eyebrow">React CV maker</p>
          <h1>CV Maker Studio</h1>
        </div>
      </div>

      <nav className="nav-links" aria-label="Primary">
        {navigationLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className={
              pathname === link.to || (link.to !== '/' && pathname.startsWith(`${link.to}/`))
                ? 'nav-link active'
                : 'nav-link'
            }
            onClick={(event) => {
              event.preventDefault()
              navigateTo(link.to)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navigation