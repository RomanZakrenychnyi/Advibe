import { Link, useParams } from 'react-router'
import { Trans, useTranslation } from 'react-i18next'
import ProductsLink from './ProductsLink'
import { localizedPath } from '../utils/routing'

export default function Hero() {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            <span>{t('hero.eyebrow')}</span>
          </div>
          <h1>
            <Trans
              i18nKey="hero.title"
              components={{ highlight: <em /> }}
            />
          </h1>
          <p className="hero-sub">{t('hero.subtitle')}</p>
          <div className="hero-ctas">
            <ProductsLink className="btn-primary">
              {t('hero.ctaPrimary')}
            </ProductsLink>
            <Link to={localizedPath(lang, 'careers')} className="btn-link">
              {t('hero.ctaSecondary')} <span className="arrow">{t('hero.arrow')}</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <svg viewBox="0 0 420 380" aria-hidden="true">
            <line x1="60" y1="190" x2="300" y2="80" stroke="#262830" strokeWidth="1" />
            <line x1="60" y1="190" x2="300" y2="150" stroke="#3A3D47" strokeWidth="1" />
            <line x1="60" y1="190" x2="300" y2="230" stroke="#EC1E83" strokeWidth="1.5" />
            <line x1="60" y1="190" x2="300" y2="300" stroke="#262830" strokeWidth="1" />
            <circle cx="300" cy="190" r="64" fill="none" stroke="#3A3D47" strokeWidth="1" />
            <circle cx="300" cy="190" r="40" fill="none" stroke="#262830" strokeWidth="1" />
            <circle cx="60" cy="190" r="7" fill="#0E0F12" stroke="#EC1E83" strokeWidth="2" />
            <circle cx="300" cy="80" r="3.5" fill="#5C5E66" />
            <circle cx="300" cy="150" r="3.5" fill="#5C5E66" />
            <circle cx="300" cy="230" r="5" fill="#EC1E83" />
            <circle cx="300" cy="300" r="3.5" fill="#5C5E66" />
            <circle cx="300" cy="190" r="4" fill="#5C5E66" />
          </svg>
        </div>
      </div>
    </section>
  )
}
