export const SUPPORTED_LANGUAGES = ['en', 'pl', 'cs', 'ru']
export const PRODUCTS_SECTION_ID = 'products'
export const OPEN_ROLES_SECTION_ID = 'careers'
export const HOW_WE_HIRE_SECTION_ID = 'how-we-hire'
export const LIFE_AT_ADVIBE_SECTION_ID = 'life-at-advibe'

export function getBasename() {
  const base = import.meta.env.BASE_URL ?? '/'
  if (base === '/') {
    return ''
  }
  return base.replace(/\/$/, '')
}

export function stripBasename(pathname) {
  const basename = getBasename()
  if (!basename || !pathname.startsWith(basename)) {
    return pathname
  }
  return pathname.slice(basename.length) || '/'
}

export function isSupportedLanguage(lang) {
  return SUPPORTED_LANGUAGES.includes(lang)
}

export function getLanguageFromPath(pathname) {
  const routerPath = stripBasename(pathname)
  const match = routerPath.match(/^\/([a-z]{2})(?:\/|$)/)
  const lang = match?.[1]
  return isSupportedLanguage(lang) ? lang : 'en'
}

export function localizedPath(lang, path = '') {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return normalized ? `/${lang}/${normalized}` : `/${lang}/`
}

export function careersSectionLocation(lang, sectionId) {
  return {
    pathname: localizedPath(lang, 'careers'),
    hash: `#${sectionId}`,
  }
}

export function homeSectionLocation(lang, sectionId) {
  return {
    pathname: localizedPath(lang),
    hash: `#${sectionId}`,
  }
}

export function productsPath(lang) {
  return `${localizedPath(lang)}#${PRODUCTS_SECTION_ID}`
}

export function isHomePath(pathname, lang) {
  const routerPath = stripBasename(pathname)
  const home = localizedPath(lang)
  const homeNoSlash = home.replace(/\/$/, '')
  return routerPath === home || routerPath === homeNoSlash
}

export function isCareersPath(pathname, lang) {
  const routerPath = stripBasename(pathname)
  return routerPath === localizedPath(lang, 'careers')
}

export function isAboutPath(pathname, lang) {
  const routerPath = stripBasename(pathname)
  return routerPath === localizedPath(lang, 'about')
}

export function aboutPageLocation(lang) {
  return {
    pathname: localizedPath(lang, 'about'),
    hash: '',
  }
}

export function switchLanguagePath(currentLang, targetLang, pathname) {
  const routerPath = stripBasename(pathname)
  const suffix = routerPath.replace(new RegExp(`^/${currentLang}`), '') || '/'
  return `/${targetLang}${suffix === '/' ? '/' : suffix}`
}
