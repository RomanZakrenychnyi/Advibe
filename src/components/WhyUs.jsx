import { useTranslation } from 'react-i18next'

const WHY_ITEMS = [
  {
    key: 'ai',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="url(#whyGradient)" strokeWidth="1.4" aria-hidden="true">
        <defs>
          <linearGradient id="whyGradient" x1="0" y1="0" x2="26" y2="26">
            <stop offset="0" stopColor="#8B2FE0" />
            <stop offset="1" stopColor="#EC1E83" />
          </linearGradient>
        </defs>
        <circle cx="13" cy="13" r="3.5" />
        <path d="M13 3.5v4M13 18.5v4M3.5 13h4M18.5 13h4M6.2 6.2l2.8 2.8M17 17l2.8 2.8M19.8 6.2L17 9M9 17l-2.8 2.8" />
      </svg>
    ),
  },
  {
    key: 'decisions',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="url(#whyGradient2)" strokeWidth="1.4" aria-hidden="true">
        <defs>
          <linearGradient id="whyGradient2" x1="0" y1="0" x2="26" y2="26">
            <stop offset="0" stopColor="#8B2FE0" />
            <stop offset="1" stopColor="#EC1E83" />
          </linearGradient>
        </defs>
        <path d="M13 3v9l6.5 4" />
        <circle cx="13" cy="13" r="9.5" />
      </svg>
    ),
  },
  {
    key: 'ownership',
    icon: (
      <svg viewBox="0 0 26 26" fill="none" stroke="url(#whyGradient3)" strokeWidth="1.4" aria-hidden="true">
        <defs>
          <linearGradient id="whyGradient3" x1="0" y1="0" x2="26" y2="26">
            <stop offset="0" stopColor="#8B2FE0" />
            <stop offset="1" stopColor="#EC1E83" />
          </linearGradient>
        </defs>
        <path d="M13 3.5l9 4.8v9.4l-9 4.8-9-4.8V8.3z" />
        <path d="M13 13l9-4.7M13 13v10.5M13 13L4 8.3" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  const { t } = useTranslation()

  return (
    <section className="why">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">{t('whyUs.tag')}</div>
          <h2>{t('whyUs.heading')}</h2>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map(({ key, icon }) => (
            <div className="why-item" key={key}>
              <div className="why-icon">{icon}</div>
              <h4>{t(`whyUs.items.${key}.title`)}</h4>
              <p>{t(`whyUs.items.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
