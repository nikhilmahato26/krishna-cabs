import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Handles scrolling to hash links (e.g. #about) or scrolling to top
 * when path changes without a hash.
 */
export default function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        // Small delay to ensure components are fully rendered/mounted
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        return () => clearTimeout(timer)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [pathname, hash])
}
