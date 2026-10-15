import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scrolls to the top on every route change (replaces the old scrollTo(0, 100) hacks). */
export const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
