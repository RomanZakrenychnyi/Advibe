import { Link, useLocation, useNavigate, useParams } from 'react-router'
import {
  getScrollDelay,
  markPendingPageTopScroll,
  resetHashScrollHandled,
  scrollToTop,
} from '../utils/scroll'
import { aboutPageLocation, isAboutPath } from '../utils/routing'

export default function AboutLink({ children, className, onClick, ...props }) {
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const target = aboutPageLocation(lang)
  const onAbout = isAboutPath(location.pathname, lang)

  function handleClick(event) {
    event.preventDefault()
    onClick?.(event)
    resetHashScrollHandled()
    navigate(target)

    if (onAbout) {
      scrollToTop({ delay: getScrollDelay(Boolean(onClick)) })
    } else {
      markPendingPageTopScroll(getScrollDelay(Boolean(onClick)))
    }
  }

  return (
    <Link to={target} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
