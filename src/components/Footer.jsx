import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import AboutLink from './AboutLink'
import CareersSectionLink from './CareersSectionLink'
import ProductsLink from './ProductsLink'
import { SocialTextLinks } from './SocialLinks'
import { CONTACT_EMAIL } from '../config/site'
import { HOW_WE_HIRE_SECTION_ID, LIFE_AT_ADVIBE_SECTION_ID, OPEN_ROLES_SECTION_ID } from '../utils/routing'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>{t('footer.description')}</p>
          </div>
          <div className="footer-col">
            <h5>{t('footer.company')}</h5>
            <AboutLink>{t('footer.about')}</AboutLink>
            <ProductsLink>{t('footer.sweepstakes')}</ProductsLink>
            <ProductsLink>{t('footer.saCasino')}</ProductsLink>
            <ProductsLink>{t('footer.affiliate')}</ProductsLink>
          </div>
          <div className="footer-col">
            <h5>{t('footer.careers')}</h5>
            <CareersSectionLink sectionId={OPEN_ROLES_SECTION_ID}>
              {t('footer.openRoles')}
            </CareersSectionLink>
            <CareersSectionLink sectionId={HOW_WE_HIRE_SECTION_ID}>
              {t('footer.howWeHire')}
            </CareersSectionLink>
            <CareersSectionLink sectionId={LIFE_AT_ADVIBE_SECTION_ID}>
              {t('footer.lifeAtAdvibe')}
            </CareersSectionLink>
          </div>
          <div className="footer-col">
            <h5>{t('footer.connect')}</h5>
            <SocialTextLinks />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="mono">{t('footer.legal')}</span>
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  )
}
