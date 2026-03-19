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
            Notre offre. Zéro engagement long.
          </h2>
        </div>

        {/* Single Setting card */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <DarkCard className="p-0">
              <div className="h-1 bg-[#A78BFA]" />

              <div className="p-8 flex flex-col gap-6">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#A78BFA' }}>
                    Setting
                  </p>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
                    Des RDV qualifiés dans votre agenda, chaque semaine.
                  </h3>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Fixe mensuel</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">500&nbsp;€</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Votre setter dédié&nbsp;: listes de prospection, setup outils, rédaction des messages, invitations, suivi jusqu&apos;au RDV.
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Prime à la performance</p>
                    <p className="font-sans text-lg text-text-primary font-bold">Variable par RDV livré</p>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Le montant dépend de la complexité du setting&nbsp;:
                    </p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex gap-2 font-sans text-text-secondary text-xs">
                        <span style={{ color: '#A78BFA' }} className="shrink-0">→</span>
                        <span><span className="text-text-primary font-medium">Outbound pur</span> (pas de contenu, pas de lead magnet)&nbsp;: fourchette haute</span>
                      </div>
                      <div className="flex gap-2 font-sans text-text-secondary text-xs">
                        <span style={{ color: '#A78BFA' }} className="shrink-0">→</span>
                        <span><span className="text-text-primary font-medium">Inbound + outbound</span> (lead magnets actifs, audience existante)&nbsp;: fourchette basse</span>
                      </div>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-2 italic">
                      On calibre le montant exact ensemble, selon votre situation.
                    </p>
                  </div>
                </div>

                {/* Livrables */}
                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Inclus</p>
                  {[
                    'Setter dédié sur votre compte LinkedIn',
                    'Ciblage par signaux d\u2019achat (pas de cold spray)',
                    'Skill IA calibré sur votre marché (objections, jargon, formulations testées)',
                    'Reporting hebdomadaire',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                      <p className="font-sans text-text-primary text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Engagement */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Engagement premier mois&nbsp;:</span> si zéro RDV qualifié livré après 30 jours de collaboration active, on prolonge la phase de calibration sans frais fixes.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Déléguer mon setting →
                  </ButtonGlow>
                </div>
              </div>
            </DarkCard>
          </ScrollReveal>
        </div>

        {/* Setup Nurturing */}
        <div className="max-w-2xl mx-auto mt-8">
          <ScrollReveal>
            <div className="border-l-[3px] border-[#C87533] bg-[#C87533]/[0.04] rounded-r-lg p-6 flex flex-col gap-4">
              {/* Eyebrow + headline */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C87533' }}>
                  Setup Nurturing
                </p>
                <h3 className="font-sans text-lg font-bold text-text-primary">
                  Votre base de leads dort. On la réveille.
                </h3>
              </div>

              {/* Description */}
              <p className="font-sans text-text-secondary text-sm">
                Pour ceux qui ont une audience, des contacts, des inscrits — mais zéro système pour scorer, nourrir et convertir.
                On construit avec vous, sur vos outils, le workflow qui transforme vos leads en RDV qualifiés.
              </p>

              {/* Cyclical messaging */}
              <p className="font-sans text-text-muted text-sm italic">
                Un système qui s&apos;affine à chaque cycle&nbsp;: les règles de scoring se précisent avec les données réelles,
                les séquences s&apos;adaptent aux retours de conversion, le routing s&apos;optimise.
                Plus le temps passe, plus la machine est efficace.
              </p>

              {/* Livrables */}
              <div className="space-y-1.5">
                {[
                  'Scoring des leads selon signaux d\u2019engagement',
                  'Séquences de nurturing personnalisées',
                  'Routing automatique vers appel commercial',
                  'Construit sur-mesure sur votre stack existante',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#C87533] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">{item}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <div>
                  <p className="font-sans text-text-muted text-xs mb-0.5">Mise en place</p>
                  <p className="font-sans text-xl text-text-primary font-bold">1&nbsp;500&nbsp;€</p>
                </div>
                <div>
                  <p className="font-sans text-text-muted text-xs mb-0.5">Puis</p>
                  <p className="font-sans text-sm text-text-primary font-semibold">Prime par RDV livré</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="font-sans text-sm font-semibold transition-colors inline-flex items-center gap-1"
                style={{ color: '#C87533' }}
              >
                Construire mon système →
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Closing mention */}
        <p className="text-center text-text-muted text-sm mt-8">
          Besoin d&apos;un accompagnement sur le closing&nbsp;? On en parle en call.
        </p>
      </div>
    </section>
  )
}
