import { isSupportedLanguage } from './routing'

export const LANG_STORAGE_KEY = 'advibe-lang'

export function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    return isSupportedLanguage(saved) ? saved : null
  } catch {
    return null
  }
}

export function saveLanguage(lang) {
  try {
    if (isSupportedLanguage(lang)) {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    }
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

export function getDefaultLanguage() {
  return getSavedLanguage() ?? 'en'
}
