import { useTranslation } from 'react-i18next'
import JobsCarousel from './JobsCarousel'

export default function Careers({ variant = 'teaser' }) {
  const { t } = useTranslation()
  const isPage = variant === 'page'

  return (
    <section className={`careers-teaser${isPage ? ' careers-page' : ''}`} id="careers">
      <div className="wrap">
        <JobsCarousel
          heading={isPage ? t('careers.pageHeading') : t('careers.heading')}
          description={isPage ? t('careers.pageDescription') : t('careers.description')}
        />
      </div>
    </section>
  )
}
