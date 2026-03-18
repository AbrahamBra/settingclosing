import { ScrollReveal } from './ui/ScrollReveal'

export function PainBridge() {
  return (
    <section className="section-padding py-12 lg:py-16">
      <div className="container-max max-w-2xl text-center">
        <ScrollReveal>
          <p className="font-sans text-lg sm:text-xl font-semibold text-text-primary leading-snug mb-3">
            Vous postez. Vous prospectez. Vous relancez.
            <br className="hidden sm:block" />
            <span className="text-accent">Mais les RDV ne tombent pas.</span>
          </p>
          <p className="font-sans text-sm text-text-secondary">
            Le problème n&apos;est pas votre offre. C&apos;est l&apos;absence de système.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
