import { DarkCard } from './ui/DarkCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

export function PricingComparison() {
  return (
    <section id="pricing" className="section-padding bg-bg-secondary">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Tarifs
          </p>
          <h2 className="font-sans text-h2 text-text-primary mb-4">
            Deux offres. Zéro engagement long.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Setting card */}
          <ScrollReveal>
            <DarkCard className="p-0 h-full flex flex-col">
              <div className="h-1 bg-[#A78BFA]" />

              <div className="p-8 flex flex-col gap-5 flex-1">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#A78BFA' }}>
                    Setting
                  </p>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
                    2 à 4 RDV qualifiés par semaine.
                  </h3>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Fixe mensuel</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">À partir de 500 €</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                  </div>

                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Prime à la performance</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-xl text-text-primary font-bold">De 25 à 200 €</p>
                      <span className="font-sans text-text-muted text-sm">/ RDV livré</span>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-1">
                      Vous ne payez que sur les RDV qui arrivent
                    </p>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Garantie :</span> minimum 5 RDV qualifiés / mois
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Déléguer mon setting →
                  </ButtonGlow>
                </div>
              </div>
            </DarkCard>
          </ScrollReveal>

          {/* Closing card */}
          <ScrollReveal delay={150}>
            <DarkCard className="p-0 h-full flex flex-col">
              <div className="h-1 bg-[#34D399]" />

              <div className="p-8 flex flex-col gap-5 flex-1">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#34D399' }}>
                    Closing
                  </p>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
                    La méthode Challenger Sale. Appliquée à votre activité.
                  </h3>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Programme complet</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">À partir de 1 000 €</p>
                      <span className="font-sans text-text-muted text-sm">/ mois × 3 mois</span>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-1">
                      Un mois par phase : discovery, pricing, délégation
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Format</p>
                    <p className="font-sans text-text-primary font-semibold text-sm mb-2">
                      2h de coaching par semaine
                    </p>
                    <div className="flex gap-2 font-sans text-text-muted text-xs mb-1.5">
                      <span style={{ color: '#34D399' }} className="shrink-0">→</span>
                      <span>1h en visio — debriefs, stratégie, cas concrets</span>
                    </div>
                    <div className="flex gap-2 font-sans text-text-muted text-xs">
                      <span style={{ color: '#34D399' }} className="shrink-0">→</span>
                      <span>1h en situation réelle — coaching en direct sur un appel</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-2">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Améliorer mon closing →
                  </ButtonGlow>
                </div>
              </div>
            </DarkCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
