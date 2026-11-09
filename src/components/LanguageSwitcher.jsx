import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, switchLanguagePath } from '../utils/routing'
import { saveLanguage } from '../utils/languageStorage'

export default function LanguageSwitcher({ onLanguageChange, variant = 'header' }) {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleSelect(targetLang) {
    setOpen(false)
    saveLanguage(targetLang)
    onLanguageChange?.()

    if (targetLang !== lang) {
      navigate(switchLanguagePath(lang, targetLang, location.pathname))
    }
  }

  return (
    <div
      className={`lang-switcher${variant === 'menu' ? ' lang-switcher-menu' : ''}`}
      ref={containerRef}
    >
      <button
        type="button"
        className="lang-switcher-btn mono"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t('nav.selectLanguage')}
        onClick={() => setOpen((value) => !value)}
      >
        {t(`languages.${lang}`)}
        <svg viewBox="0 0 12 12" aria-hidden="true" className="lang-chevron">
          <path d="M3 4.5L6 7.5L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
      {open && (
        <div className="lang-dropdown" role="listbox">
          {SUPPORTED_LANGUAGES.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={code === lang}
              className={code === lang ? 'active' : ''}
              onClick={() => handleSelect(code)}
            >
              {t(`languages.${code}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
