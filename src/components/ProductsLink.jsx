import { Link, useLocation, useNavigate, useParams } from 'react-router'
import { getScrollDelay, markHashScrollHandled, scrollToSectionById } from '../utils/scroll'
import { homeSectionLocation, isHomePath, PRODUCTS_SECTION_ID } from '../utils/routing'

export default function ProductsLink({ className, children, onClick }) {
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const target = homeSectionLocation(lang, PRODUCTS_SECTION_ID)
  const onHome = isHomePath(location.pathname, lang)

  function handleClick(event) {
    event.preventDefault()
    onClick?.(event)

    if (onHome) {
      markHashScrollHandled()
      navigate(target)
      scrollToSectionById(PRODUCTS_SECTION_ID, {
        delay: getScrollDelay(Boolean(onClick)),
      })
      return
    }

    navigate(target)
  }

  return (
    <Link to={target} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
