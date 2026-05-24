import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const CALENDLY_URL = 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

export function CTAFinale() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm text-text-secondary mb-4">
              On accompagne 5 clients max par mois.{' '}
              <span className="font-semibold text-accent animate-pulse">
                2 places disponibles en avril.
              </span>
            </p>
            <h2 className="font-sans text-h2 font-bold text-text-primary mb-4">
              Prêt à remplir ton agenda ?
            </h2>
            <p className="font-sans text-text-secondary text-lg mb-10">
              30 minutes pour estimer combien de RDV on peut te livrer. Sans engagement.
            </p>
            <ButtonGlow
              as="a"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              Réserver 30 min →
            </ButtonGlow>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
