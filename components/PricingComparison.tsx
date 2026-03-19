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
            Notre offre. Sans engagement.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Setting card */}
          <ScrollReveal>
            <DarkCard className="p-0 h-full">
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

                {/* Pricing — two tiers */}
                <div className="space-y-4">
                  {/* Mois 1 */}
                  <div className="rounded-lg border border-semantic-methode/20 bg-semantic-methode/[0.04] p-4">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-semantic-methode mb-2">Mois 1 — Lancement</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">500&nbsp;€</p>
                      <span className="font-sans text-text-muted text-sm">forfait</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Tout inclus&nbsp;: setter dédié, setup outils, ciblage, premiers messages, premiers RDV. Pas de variable.
                    </p>
                  </div>

                  {/* Mois 2+ */}
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Mois 2+ — Abonnement</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">1&nbsp;000&nbsp;€</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Pipeline à plein régime + prime par RDV livré (montant défini ensemble selon votre situation).
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

                {/* Garantie */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Garantie&nbsp;:</span> moins de 5 RDV qualifiés livrés dans le mois&nbsp;? Le mois suivant est offert.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Sans engagement.</span> Résiliable à tout moment.
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

        {/* ROI context */}
        <div className="max-w-2xl mx-auto mt-6 space-y-3">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              <span className="text-text-primary font-semibold">Exemple&nbsp;:</span> un consultant à 2&nbsp;000&nbsp;€/mission qui close 1 prospect sur 5 RDV. Avec 5 RDV/mois dès le mois 1 → 1 nouveau client → 2&nbsp;000&nbsp;€ de CA pour 500&nbsp;€ investis.
            </p>
          </div>
          <p className="font-sans text-text-muted text-xs text-center">
            Un commercial freelance coûte 2&nbsp;000-3&nbsp;000&nbsp;€/mois. Notre formule&nbsp;: résultats dès la semaine 1, sans recrutement.
          </p>
        </div>

        {/* Cards grid — Setup Nurturing */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mt-6">

          {/* Setup Nurturing card */}
          <ScrollReveal>
            <DarkCard className="p-0 h-full">
              <div className="h-1 bg-[#C87533]" />

              <div className="p-8 flex flex-col gap-6">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#C87533' }}>
                    Setup Nurturing
                  </p>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
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
                <div className="space-y-2.5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Inclus</p>
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
                <div className="border-t border-white/[0.06] pt-4 space-y-3">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Mise en place</p>
                    <p className="font-sans text-2xl text-text-primary font-bold">1&nbsp;500&nbsp;€</p>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Construction du système avec vous, sur votre stack existante.
                    </p>
                  </div>
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Puis</p>
                    <p className="font-sans text-lg text-text-primary font-bold">Prime par RDV livré</p>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Pendant toute la durée de l&apos;accompagnement.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Construire mon système →
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
