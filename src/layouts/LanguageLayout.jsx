import { useEffect } from 'react'
import { Navigate, Outlet, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { isSupportedLanguage } from '../utils/routing'
import { saveLanguage } from '../utils/languageStorage'

export default function LanguageLayout() {
  const { lang } = useParams()
  const { i18n } = useTranslation()

  useEffect(() => {
    if (!isSupportedLanguage(lang)) {
      return
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }

    document.documentElement.lang = lang
    saveLanguage(lang)
  }, [lang, i18n])

  if (!isSupportedLanguage(lang)) {
    return <Navigate to="/en/" replace />
  }

  return <Outlet />
}
