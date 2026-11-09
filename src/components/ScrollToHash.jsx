import { useEffect } from 'react'
import { useLocation } from 'react-router'
import {
  consumeHashScrollHandled,
  consumePendingPageTopScroll,
  resetHashScrollHandled,
  scrollToSectionById,
  scrollToTop,
} from '../utils/scroll'

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      resetHashScrollHandled()
      const { pending, delay } = consumePendingPageTopScroll()
      if (pending) {
        scrollToTop({ smooth: false, delay })
      }
      return undefined
    }

    if (consumeHashScrollHandled()) {
      return undefined
    }

    const id = location.hash.replace(/^#/, '')
    if (!id) {
      return undefined
    }

    let cancelled = false
    let attempts = 0
    const maxAttempts = 24

    function tryScroll() {
      if (cancelled) {
        return
      }

      if (scrollToSectionById(id, { smooth: true })) {
        return
      }

      attempts += 1
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 50)
      }
    }

    window.requestAnimationFrame(tryScroll)

    return () => {
      cancelled = true
    }
  }, [location.pathname, location.hash])

  return null
}
