import { useTranslation } from 'react-i18next'

const PRODUCT_KEYS = ['sweepstakes', 'casino', 'affiliate']

function SweepstakesIllustration() {
  return (
    <svg viewBox="0 0 220 176" aria-hidden="true">
      <circle cx="110" cy="88" r="68" fill="none" stroke="#262830" strokeWidth="1" />
      <circle cx="110" cy="88" r="46" fill="none" stroke="#3A3D47" strokeWidth="1" />
      <circle cx="110" cy="88" r="24" fill="none" stroke="#3A3D47" strokeWidth="1" />
      <circle cx="110" cy="20" r="3.5" fill="#5C5E66" />
      <circle cx="42" cy="88" r="3.5" fill="#5C5E66" />
      <circle cx="110" cy="156" r="3.5" fill="#5C5E66" />
      <circle cx="156" cy="42" r="3.5" fill="#5C5E66" />
      <circle cx="64" cy="134" r="3.5" fill="#5C5E66" />
      <circle cx="134" cy="64" r="5" fill="#0E0F12" stroke="#EC1E83" strokeWidth="2" />
    </svg>
  )
}

function CasinoIllustration() {
  return (
    <svg viewBox="0 0 220 176" aria-hidden="true">
      <circle cx="70" cy="68" r="26" fill="none" stroke="#3A3D47" strokeWidth="1" />
      <circle cx="70" cy="68" r="26" fill="none" stroke="#262830" strokeWidth="6" strokeDasharray="2 6" />
      <circle cx="120" cy="100" r="26" fill="none" stroke="#3A3D47" strokeWidth="1" />
      <circle cx="120" cy="100" r="26" fill="none" stroke="#262830" strokeWidth="6" strokeDasharray="2 6" />
      <circle cx="158" cy="56" r="26" fill="none" stroke="#EC1E83" strokeWidth="1.5" />
      <circle cx="158" cy="56" r="26" fill="none" stroke="#EC1E83" strokeWidth="6" strokeDasharray="2 6" opacity="0.5" />
      <circle cx="158" cy="56" r="4" fill="#EC1E83" />
    </svg>
  )
}

function AffiliateIllustration() {
  return (
    <svg viewBox="0 0 220 176" aria-hidden="true">
      <line x1="34" y1="88" x2="186" y2="30" stroke="#3A3D47" strokeWidth="1" />
      <line x1="34" y1="88" x2="186" y2="62" stroke="#3A3D47" strokeWidth="1" />
      <line x1="34" y1="88" x2="186" y2="100" stroke="#EC1E83" strokeWidth="1.5" />
      <line x1="34" y1="88" x2="186" y2="146" stroke="#3A3D47" strokeWidth="1" />
      <circle cx="34" cy="88" r="6" fill="#0E0F12" stroke="#EC1E83" strokeWidth="2" />
      <circle cx="186" cy="30" r="3" fill="#5C5E66" />
      <circle cx="186" cy="62" r="3" fill="#5C5E66" />
      <circle cx="186" cy="100" r="4" fill="#EC1E83" />
      <circle cx="186" cy="146" r="3" fill="#5C5E66" />
    </svg>
  )
}

const ILLUSTRATIONS = {
  sweepstakes: SweepstakesIllustration,
  casino: CasinoIllustration,
  affiliate: AffiliateIllustration,
}

export default function ProductUnits() {
  const { t } = useTranslation()

  return (
    <section className="units" id="products">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">{t('products.tag')}</div>
          <h2>{t('products.heading')}</h2>
        </div>
        <div className="units-grid">
          {PRODUCT_KEYS.map((key) => {
            const Illustration = ILLUSTRATIONS[key]
            const tags = t(`products.${key}.tags`, { returnObjects: true })

            return (
              <div className="unit-card" key={key}>
                <div className="unit-index mono">{t(`products.${key}.index`)}</div>
                <h3>{t(`products.${key}.title`)}</h3>
                <p>{t(`products.${key}.description`)}</p>
                {key === 'casino' && (
                  <div className="license-badge">
                    <span>{t('products.casino.license')}</span>
                  </div>
                )}
                <div className="unit-tags">
                  {tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="unit-link">
                  {t(`products.${key}.link`)}
                </a>
                <div className="unit-visual">
                  <div className="illo-frame">
                    <Illustration />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
