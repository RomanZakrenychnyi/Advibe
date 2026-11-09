import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useApplyModal } from '../context/useApplyModal'

export default function ApplyModal() {
  const { t } = useTranslation()
  const { isOpen, roleTitle, closeApplyModal, telegramUsername } = useApplyModal()
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  const displayRole = roleTitle || t('applyModal.fallbackRole')
  const message = t('applyModal.telegramMessage', { role: displayRole })
  const telegramHref = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    // Move focus into the dialog and restore it to the trigger on close.
    const previouslyFocused = document.activeElement
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeApplyModal()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      // Keep Tab / Shift+Tab inside the dialog.
      const focusable = dialogRef.current?.querySelectorAll('a[href], button:not([disabled])')
      if (!focusable || focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [isOpen, closeApplyModal])

  return (
    <div
      className={`apply-overlay${isOpen ? ' open' : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeApplyModal()
        }
      }}
    >
      <div
        ref={dialogRef}
        className="apply-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="applyRoleTitle"
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="apply-modal-close"
          aria-label={t('applyModal.close')}
          onClick={closeApplyModal}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="apply-modal-eyebrow mono">{t('applyModal.eyebrow')}</div>
        <h3 id="applyRoleTitle">{displayRole}</h3>
        <p>{t('applyModal.description')}</p>
        <a
          href={telegramHref}
          className="apply-modal-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M21.05 2.93a1.5 1.5 0 0 0-1.55-.24L2.6 9.7c-.97.4-.96 1.78.02 2.16l4.4 1.7 1.7 5.36c.3.95 1.55 1.16 2.16.36l2.18-2.86 4.4 3.25c.8.6 1.95.16 2.13-.82l3.06-15.4a1.5 1.5 0 0 0-.6-1.52zM8.9 13.1l8.2-6.7-6.9 7.6-.3 2.9-1-3.8z" />
          </svg>
          {t('applyModal.telegramButton')}
        </a>
      </div>
    </div>
  )
}
