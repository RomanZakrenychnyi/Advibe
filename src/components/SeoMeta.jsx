import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { getBasename, SUPPORTED_LANGUAGES, switchLanguagePath } from '../utils/routing'

const META_KEYS = {
  home: {
    title: 'meta.title',
    description: 'meta.description',
  },
  careers: {
    title: 'meta.titleCareers',
    description: 'meta.descriptionCareers',
  },
  about: {
    title: 'meta.titleAbout',
    description: 'meta.descriptionAbout',
  },
}

function ensureMetaDescription() {
  let element = document.querySelector('meta[name="description"]')
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', 'description')
    document.head.appendChild(element)
  }
  return element
}

function ensureCanonicalLink() {
  let element = document.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  return element
}

function clearHreflangLinks() {
  document.querySelectorAll('link[data-seo-hreflang]').forEach((element) => {
    element.remove()
  })
}

function setHreflangLinks(origin, pathname, currentLang) {
  clearHreflangLinks()
  const basename = getBasename()

  SUPPORTED_LANGUAGES.forEach((code) => {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = code
    link.href = `${origin}${basename}${switchLanguagePath(currentLang, code, pathname)}`
    link.dataset.seoHreflang = 'true'
    document.head.appendChild(link)
  })

  const defaultLink = document.createElement('link')
  defaultLink.rel = 'alternate'
  defaultLink.hreflang = 'x-default'
  defaultLink.href = `${origin}${basename}${switchLanguagePath(currentLang, 'en', pathname)}`
  defaultLink.dataset.seoHreflang = 'true'
  document.head.appendChild(defaultLink)
}

export default function SeoMeta({ page = 'home' }) {
  const { t, i18n } = useTranslation()
  const { lang = 'en' } = useParams()
  const location = useLocation()
  const keys = META_KEYS[page] ?? META_KEYS.home

  useEffect(() => {
    document.title = t(keys.title)
    ensureMetaDescription().setAttribute('content', t(keys.description))

    const origin = window.location.origin
    const canonicalUrl = `${origin}${window.location.pathname}`
    ensureCanonicalLink().href = canonicalUrl
    setHreflangLinks(origin, location.pathname, lang)
  }, [page, keys, t, i18n.language, lang, location.pathname])

  return null
}
