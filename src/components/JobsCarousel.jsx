import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import jobs from '../data/jobs.json'
import { useApplyModal } from '../context/useApplyModal'

function visibleCount(width) {
  if (width <= 560) return 1
  if (width <= 1040) return 2
  return 4
}

export default function JobsCarousel({ heading, description }) {
  const { t } = useTranslation()
  const { openApplyModal } = useApplyModal()
  const [index, setIndex] = useState(0)
  const [cardsVisible, setCardsVisible] = useState(() => visibleCount(window.innerWidth))

  const maxIndex = Math.max(0, jobs.length - cardsVisible)

  const updateVisibleCount = useCallback(() => {
    const nextVisible = visibleCount(window.innerWidth)
    setCardsVisible(nextVisible)
    setIndex((current) => Math.min(current, Math.max(0, jobs.length - nextVisible)))
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [updateVisibleCount])

  const safeIndex = Math.min(index, maxIndex)

  function handlePrev() {
    setIndex((current) => Math.max(0, current - 1))
  }

  function handleNext() {
    setIndex((current) => Math.min(maxIndex, current + 1))
  }

  const offsetPct = (100 / cardsVisible) * safeIndex

  return (
    <>
      <div className="ct-head">
        <div>
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="ct-nav">
          <button
            type="button"
            className="ct-nav-btn"
            aria-label={t('nav.previousRoles')}
            onClick={handlePrev}
            style={{ opacity: safeIndex === 0 ? 0.4 : 1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="ct-nav-btn"
            aria-label={t('nav.nextRoles')}
            onClick={handleNext}
            style={{ opacity: safeIndex === maxIndex ? 0.4 : 1 }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="roles-viewport">
        <div
          className="roles"
          style={{ transform: `translateX(-${offsetPct}%)` }}
        >
          {jobs.map((job) => {
            const title = t(`jobs.items.${job.id}.title`)

            return (
              <div className="role-card" key={job.id}>
                <div className="role-preview">{t(`jobs.items.${job.id}.preview`)}</div>
                <div className="role-top">
                  <span className="role-badge">
                    <span>{t('jobs.badge')}</span>
                  </span>
                  <span className="role-unit mono">{t(`jobs.units.${job.unit}`)}</span>
                </div>
                <h4>{title}</h4>
                <div className="role-meta">{t(`jobs.items.${job.id}.meta`)}</div>
                <button
                  type="button"
                  className="role-apply"
                  onClick={() => openApplyModal(title)}
                >
                  {t('jobs.apply')}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
