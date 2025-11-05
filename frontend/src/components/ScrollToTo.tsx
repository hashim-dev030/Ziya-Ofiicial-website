import { useEffect } from "react"
import { useLocation, useNavigationType } from "react-router-dom"

export const ScrollToTop = () => {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // Always scroll to top when navigating or reloading
    window.scrollTo({
      top: 0,
    })
  }, [pathname, navigationType])

  return null
}
