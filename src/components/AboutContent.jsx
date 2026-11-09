import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router'
import { localizedPath } from '../utils/routing'

const MODEL_KEYS = ['sweepstakes', 'casino', 'affiliate']

export default function AboutContent() {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()

  return (
    <section className="about-page">
      <div className="wrap">
        <div className="about-hero">
          <div className="section-tag">{t('about.tag')}</div>
          <h1>{t('about.heading')}</h1>
          <p className="about-intro">{t('about.intro')}</p>
        </div>

        <div className="about-section">
          <div className="section-head">
            <div className="section-tag">{t('about.story.tag')}</div>
            <h2>{t('about.story.heading')}</h2>
          </div>
          <div className="about-copy">
            <p>{t('about.story.paragraph1')}</p>
            <p>{t('about.story.paragraph2')}</p>
          </div>
        </div>

        <div className="about-section">
          <div className="section-head">
            <div className="section-tag">{t('about.model.tag')}</div>
            <h2>{t('about.model.heading')}</h2>
          </div>
          <div className="about-model-grid">
            {MODEL_KEYS.map((key) => (
              <div className="about-model-item" key={key}>
                <div className="unit-index mono">{t(`about.model.items.${key}.index`)}</div>
                <h3>{t(`about.model.items.${key}.title`)}</h3>
                <p>{t(`about.model.items.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-section about-presence">
          <div className="section-head">
            <div className="section-tag">{t('about.presence.tag')}</div>
            <h2>{t('about.presence.heading')}</h2>
          </div>
          <p className="about-copy">{t('about.presence.text')}</p>
          <div className="about-cta-row">
            <Link to={localizedPath(lang, 'careers')} className="btn-primary">
              {t('about.presence.ctaCareers')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
