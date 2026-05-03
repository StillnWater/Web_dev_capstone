import { useEffect, useState } from 'react'

function getCurrentPathname() {
  if (typeof window === 'undefined') {
    return '/'
  }

  return window.location.pathname || '/'
}

export function navigateTo(pathname) {
  if (typeof window === 'undefined') {
    return
  }

  if (window.location.pathname === pathname) {
    return
  }

  window.history.pushState({}, '', pathname)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function usePathname() {
  const [pathname, setPathname] = useState(getCurrentPathname)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getCurrentPathname())
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  return pathname
}