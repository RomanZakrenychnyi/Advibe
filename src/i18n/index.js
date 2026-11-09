import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLanguageFromPath } from '../utils/routing'
import en from './locales/en.json'
import pl from './locales/pl.json'
import cs from './locales/cs.json'
import ru from './locales/ru.json'

const initialLanguage = getLanguageFromPath(window.location.pathname)

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLanguage
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
    cs: { translation: cs },
    ru: { translation: ru },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
