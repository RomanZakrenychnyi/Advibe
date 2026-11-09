import { Link, useLocation, useNavigate, useParams } from 'react-router'
import { getScrollDelay, markHashScrollHandled, scrollToSectionById } from '../utils/scroll'
import { careersSectionLocation, isCareersPath } from '../utils/routing'

export default function CareersSectionLink({ sectionId, children, className, onClick }) {
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const target = careersSectionLocation(lang, sectionId)
  const onCareers = isCareersPath(location.pathname, lang)

  function handleClick(event) {
    event.preventDefault()
    onClick?.(event)

    if (onCareers) {
      markHashScrollHandled()
      navigate(target)
      scrollToSectionById(sectionId, {
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
