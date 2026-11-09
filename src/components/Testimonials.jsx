import { useTranslation } from 'react-i18next'

const TESTIMONIAL_KEYS = ['hrDirector', 'founder', 'headOfPeople', 'coo']

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="wrap">
        <div className="testimonials-head">
          <h2 id="testimonials-heading">{t('testimonials.heading')}</h2>
          <p>{t('testimonials.description')}</p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIAL_KEYS.map((key) => (
            <figure className="testimonial-card" key={key}>
              <blockquote>
                <span className="testimonial-quote" aria-hidden="true">“</span>
                <p>{t(`testimonials.items.${key}.quote`)}</p>
              </blockquote>
              <figcaption>
                <strong>{t(`testimonials.items.${key}.role`)}</strong>
                <span>{t(`testimonials.items.${key}.company`)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
