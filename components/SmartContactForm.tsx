import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const CALENDLY_URL = 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

export function SmartContactForm() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-sans text-h2 font-extrabold text-text-primary mb-4">
            On en parle ?
          </h2>
          <p className="font-sans text-text-secondary text-lg leading-relaxed mb-10">
            30 minutes pour comprendre ta situation et voir si on peut t'aider.
          </p>
          <ButtonGlow
            as="a"
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            Réserver un créneau →
          </ButtonGlow>
        </ScrollReveal>
      </div>
    </section>
  )
}
