import { useEffect } from 'react'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | CV Maker` : 'CV Maker'
  }, [title])
}