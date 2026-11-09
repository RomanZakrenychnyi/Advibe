import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import AboutLink from './AboutLink'
import HomeLink from './HomeLink'
import LanguageSwitcher from './LanguageSwitcher'
import ProductsLink from './ProductsLink'
import SocialLinks from './SocialLinks'
import CareersSectionLink from './CareersSectionLink'
import { OPEN_ROLES_SECTION_ID } from '../utils/routing'

function DesktopNavLinks() {
  const { t } = useTranslation()

  return (
    <>
      <HomeLink>{t('nav.home')}</HomeLink>
      <ProductsLink>{t('nav.products')}</ProductsLink>
      <AboutLink>{t('nav.about')}</AboutLink>
      <CareersSectionLink sectionId={OPEN_ROLES_SECTION_ID}>
        {t('nav.careers')}
      </CareersSectionLink>
      <span className="nav-divider" aria-hidden="true" />
      <SocialLinks />
    </>
  )
}

function MobileNavLinks({ onNavigate }) {
  const { t } = useTranslation()

  return (
    <>
      <HomeLink onClick={onNavigate}>
        {t('nav.home')}
      </HomeLink>
      <ProductsLink onClick={onNavigate}>{t('nav.products')}</ProductsLink>
      <AboutLink onClick={onNavigate}>
        {t('nav.about')}
      </AboutLink>
      <CareersSectionLink sectionId={OPEN_ROLES_SECTION_ID} onClick={onNavigate}>
        {t('nav.careers')}
      </CareersSectionLink>
    </>
  )
}

export default function Header() {
  const { t } = useTranslation()
  const location = useLocation()
  const [menuRequested, setMenuRequested] = useState(false)
  const [menuPath, setMenuPath] = useState('')
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const mobileNavId = useId()

  const menuOpen = menuRequested && menuPath === location.pathname

  const closeMenu = useCallback(() => {
    setMenuRequested(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuRequested((open) => {
      if (open) {
        return false
      }
      setMenuPath(location.pathname)
      return true
    })
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    function handleClickOutside(event) {
      const target = event.target
      if (
        menuRef.current?.contains(target)
        || menuButtonRef.current?.contains(target)
      ) {
        return
      }
      closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen, closeMenu])

  return (
    <header className={menuOpen ? 'header-menu-open' : undefined}>
      <div className="wrap header-inner">
        <HomeLink aria-label={t('nav.home')} className="header-logo">
          <Logo />
        </HomeLink>

        <nav className="nav-desktop" aria-label={t('nav.mainNavigation')}>
          <DesktopNavLinks />
        </nav>

        <div className="header-right header-right-desktop">
          <LanguageSwitcher />
          <CareersSectionLink sectionId={OPEN_ROLES_SECTION_ID} className="btn-careers">
            {t('nav.hiring')}
          </CareersSectionLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="mobile-menu-btn"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={menuOpen}
          aria-controls={mobileNavId}
          onClick={toggleMenu}
        >
          <span className="mobile-menu-icon" aria-hidden="true">
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </span>
        </button>
      </div>

      <nav
        ref={menuRef}
        id={mobileNavId}
        className={`mobile-nav-panel${menuOpen ? ' open' : ''}`}
        aria-label={t('nav.mainNavigation')}
        aria-hidden={!menuOpen}
      >
        <div className="wrap mobile-nav-inner">
          <MobileNavLinks onNavigate={closeMenu} />
          <div className="mobile-nav-lang">
            <LanguageSwitcher variant="menu" onLanguageChange={closeMenu} />
          </div>
          <CareersSectionLink
            sectionId={OPEN_ROLES_SECTION_ID}
            className="btn-careers mobile-hiring"
            onClick={closeMenu}
          >
            {t('nav.hiring')}
          </CareersSectionLink>
          <span className="mobile-nav-divider" aria-hidden="true" />
          <SocialLinks onNavigate={closeMenu} />
        </div>
      </nav>
    </header>
  )
}
