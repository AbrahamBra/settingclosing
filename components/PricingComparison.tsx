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
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Setting LinkedIn card */}
          <ScrollReveal>
            <DarkCard className="p-0 h-full">
              <div className="h-1 bg-[#A78BFA]" />

              <div className="p-8 flex flex-col gap-6">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#A78BFA' }}>
                    Setting LinkedIn
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

          {/* Setting téléphonique card */}
          <ScrollReveal>
            <DarkCard className="p-0 h-full">
              <div className="h-1 bg-[#FBBF24]" />

              <div className="p-8 flex flex-col gap-6">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#FBBF24' }}>
                    Setting t&eacute;l&eacute;phonique
                  </p>
                  <h3 className="font-sans text-xl font-bold text-text-primary">
                    Vos leads entrent. Un sales les qualifie.
                  </h3>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Sur devis</p>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Tarif adapt&eacute; au volume de leads entrants et &agrave; la complexit&eacute; de qualification.
                    </p>
                  </div>
                </div>

                {/* Livrables */}
                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Inclus</p>
                  {[
                    'Sales d\u00e9di\u00e9 qui appelle chaque lead entrant',
                    'Qualification et routing\u00a0: RDV, newsletter ou nurturing',
                    'Int\u00e9gration sur votre CRM et vos outils',
                    'Reporting et optimisation continue',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#FBBF24] shrink-0 mt-0.5">&check;</span>
                      <p className="font-sans text-text-primary text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2 mt-auto">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Discuter de mon volume &rarr;
                  </ButtonGlow>
                </div>
              </div>
            </DarkCard>
          </ScrollReveal>

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
                    On transforme vos contacts en RDV.
                  </h3>
                </div>

                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Mise en place</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">1&nbsp;500&nbsp;&euro;</p>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Construction du syst&egrave;me avec vous, sur votre stack existante. Puis prime par RDV livr&eacute;.
                    </p>
                  </div>
                </div>

                {/* Livrables */}
                <div className="border-t border-white/[0.06] pt-4 space-y-2.5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Inclus</p>
                  {[
                    'Scoring des leads selon signaux d\u2019engagement',
                    'S\u00e9quences de nurturing personnalis\u00e9es',
                    'Routing automatique vers appel commercial',
                    'Construit sur-mesure sur votre stack existante',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-[#C87533] shrink-0 mt-0.5">&check;</span>
                      <p className="font-sans text-text-primary text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Cyclical */}
                <p className="font-sans text-text-muted text-xs italic">
                  Le syst&egrave;me s&apos;affine avec vos donn&eacute;es. Au bout de 3 mois, le scoring est cal&eacute; sur votre march&eacute;.
                </p>

                {/* CTA */}
                <div className="pt-2 mt-auto">
                  <ButtonGlow as="a" href="#contact" className="w-full text-center">
                    Construire mon syst&egrave;me &rarr;
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
