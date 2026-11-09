import { useTranslation } from 'react-i18next'
import { SOCIAL_LINKS } from '../config/site'

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.05 2.93a1.5 1.5 0 0 0-1.55-.24L2.6 9.7c-.97.4-.96 1.78.02 2.16l4.4 1.7 1.7 5.36c.3.95 1.55 1.16 2.16.36l2.18-2.86 4.4 3.25c.8.6 1.95.16 2.13-.82l3.06-15.4a1.5 1.5 0 0 0-.6-1.52zM8.9 13.1l8.2-6.7-6.9 7.6-.3 2.9-1-3.8z" />
    </svg>
  )
}

const ICONS = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  telegram: TelegramIcon,
}

const LABELS = {
  linkedin: 'footer.linkedin',
  instagram: 'footer.instagram',
  telegram: 'applyModal.telegramButton',
}

export default function SocialLinks({ className = 'nav-social', onNavigate }) {
  const { t } = useTranslation()

  return (
    <div className={className}>
      {Object.entries(SOCIAL_LINKS).map(([key, href]) => {
        const Icon = ICONS[key]
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(LABELS[key])}
            onClick={onNavigate}
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export function SocialTextLinks() {
  const { t } = useTranslation()

  return (
    <>
      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
        {t('footer.linkedin')}
      </a>
      <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
        {t('footer.instagram')}
      </a>
    </>
  )
}
