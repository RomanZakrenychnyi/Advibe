import { useTranslation } from 'react-i18next'
import { HOW_WE_HIRE_SECTION_ID, LIFE_AT_ADVIBE_SECTION_ID } from '../utils/routing'

const HIRE_STEPS = ['apply', 'intro', 'task', 'offer']
const LIFE_ITEMS = ['teams', 'ai', 'ownership']

export default function CareersExtraSections() {
  const { t } = useTranslation()

  return (
    <>
      <section className="careers-extra" id={HOW_WE_HIRE_SECTION_ID}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-tag">{t('careers.howWeHire.tag')}</div>
            <h2>{t('careers.howWeHire.heading')}</h2>
          </div>
          <div className="careers-steps">
            {HIRE_STEPS.map((key, index) => (
              <div className="careers-step" key={key}>
                <div className="careers-step-index mono">{String(index + 1).padStart(2, '0')}</div>
                <h3>{t(`careers.howWeHire.steps.${key}.title`)}</h3>
                <p>{t(`careers.howWeHire.steps.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-extra" id={LIFE_AT_ADVIBE_SECTION_ID}>
        <div className="wrap">
          <div className="section-head">
            <div className="section-tag">{t('careers.lifeAtAdvibe.tag')}</div>
            <h2>{t('careers.lifeAtAdvibe.heading')}</h2>
          </div>
          <div className="why-grid">
            {LIFE_ITEMS.map((key) => (
              <div className="why-item" key={key}>
                <h4>{t(`careers.lifeAtAdvibe.items.${key}.title`)}</h4>
                <p>{t(`careers.lifeAtAdvibe.items.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
