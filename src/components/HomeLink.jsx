import { Link, useLocation, useNavigate, useParams } from 'react-router'
import { getScrollDelay, resetHashScrollHandled, scrollToTop } from '../utils/scroll'
import { isHomePath, localizedPath } from '../utils/routing'

export default function HomeLink({ children, className, onClick, ...props }) {
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const homePath = localizedPath(lang)
  const target = { pathname: homePath, hash: '' }
  const onHome = isHomePath(location.pathname, lang)

  function handleClick(event) {
    event.preventDefault()
    onClick?.(event)
    resetHashScrollHandled()
    navigate(target)

    if (onHome || location.hash) {
      scrollToTop({ delay: getScrollDelay(Boolean(onClick)) })
    }
  }

  return (
    <Link to={target} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
