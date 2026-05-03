import { useEffect } from 'react'
import AppLayout from './components/AppLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import StudioPage from './pages/StudioPage.jsx'
import { usePathname, navigateTo } from './hooks/usePathname.js'

function App() {
  const pathname = usePathname()

  useEffect(() => {
    if (
      pathname !== '/' &&
      pathname !== '/projects' &&
      pathname !== '/templates' &&
      pathname !== '/studio' &&
      pathname !== '/builder' &&
      pathname !== '/about' &&
      pathname !== '/export'
    ) {
      navigateTo('/')
    }
  }, [pathname])

  let page = <HomePage />

  if (pathname === '/builder') {
    page = <StudioPage />
  } else if (pathname === '/templates' || pathname === '/projects') {
    page = <ProjectsPage />
  } else if (pathname === '/studio') {
    page = <StudioPage />
  } else if (pathname === '/export' || pathname === '/about') {
    page = <AboutPage />
  }

  return (
    <AppLayout>
      {page}
    </AppLayout>
  )
}

export default App
