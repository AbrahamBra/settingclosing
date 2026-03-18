import { DarkCard } from './ui/DarkCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const settingPhases = [
  {
    title: 'Prospection assistée par IA',
    desc: "Ciblage ICP, Sales Navigator, messages adaptés au contexte du prospect. L'IA affine chaque séquence au fil des retours.",
  },
  {
    title: 'Base de connaissance',
    desc: 'On construit le contexte métier et les best practices de votre secteur. Vos messages deviennent plus pertinents, les prospects répondent plus.',
  },
  {
    title: 'Scoring + Nurturing',
    desc: 'Chaque lead est scoré : qui appeler maintenant, qui nurture, qui oublier. Fini de perdre du temps sur les mauvais profils.',
  },
]

const closingPhases = [
  {
    title: 'Challenger la discovery',
    desc: 'Poser les bonnes questions avant de parler prix. On ne pitch pas une solution sans comprendre le problème.',
  },
  {
    title: 'Challenger le pricing',
    desc: "Techniques pour augmenter la valeur perçue sans baisser le tarif. Structurer une offre qui se vend d'elle-même.",
  },
  {
    title: 'Déléguer à des closers',
    desc: "Recruter et manager des closers. Vous n'êtes plus dans le pipe, vous le gérez.",
  },
]

function Timeline({
  phases,
  accentColor,
}: {
  phases: { title: string; desc: string }[]
  accentColor: string
}) {
  return (
    <ul className="flex flex-col">
      {phases.map((phase, i) => (
        <li key={i} className="flex gap-3">
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-sans text-white"
              style={{
                background: `${accentColor}20`,
                border: `1px solid ${accentColor}66`,
                color: accentColor,
              }}
            >
              {i + 1}
            </div>
            {i < phases.length - 1 && (
              <div
                className="w-px flex-1 my-1"
                style={{ background: 'rgba(255,255,255,0.06)', minHeight: '20px' }}
              />
            )}
          </div>
          <div className="pb-5">
            <p
              className="font-sans text-[10px] uppercase tracking-widest font-semibold mb-1"
              style={{ color: accentColor }}
            >
              Mois {i + 1}
            </p>
            <p className="font-sans font-semibold text-white text-sm mb-1">
              {phase.title}
            </p>
            <p className="font-sans text-text-muted text-xs leading-relaxed">
              {phase.desc}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function PricingComparison() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Offres
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Setting card */}
          <ScrollReveal>
            <DarkCard className="p-0 h-full flex flex-col">
              {/* Indigo top border */}
              <div className="h-1 bg-[#818CF8]" />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#818CF8' }}>
                    Setting
                  </p>
                  <h3 className="font-serif text-h3 text-white">
                    2 à 4 rendez-vous qualifiés par semaine.
                  </h3>
                </div>

                {/* Timeline */}
                <Timeline phases={settingPhases} accentColor="#818CF8" />

                {/* Pricing */}
                <div className="border-t border-white/[0.06] pt-5">
                  <div className="mb-4">
                    <p className="font-sans text-text-muted text-sm mb-1">Fixe mensuel</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-serif text-2xl text-white font-bold">500 €</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-1">
                      Garanti, peu importe le volume de RDV
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="font-sans text-text-muted text-sm mb-1">Prime à la performance</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-serif text-xl text-white font-bold">25 € – 150 €</p>
                      <span className="font-sans text-text-muted text-sm">/ RDV livré</span>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-1">
                      Vous ne payez des primes que sur les RDV qui arrivent
                    </p>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="border-t border-white/[0.06] pt-5">
                  <p className="font-sans text-white font-semibold text-sm mb-1">
                    Garantie : minimum 5 RDV qualifiés / mois
                  </p>
                  <p className="font-sans text-text-muted text-xs leading-relaxed">
                    En pratique : 2 à 4 RDV par semaine. Avec lead magnet, le volume monte — les leads remontés sont traités en priorité.
                  </p>
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
              {/* Emerald top border */}
              <div className="h-1 bg-[#34D399]" />

              <div className="p-8 flex flex-col gap-6 flex-1">
                {/* Eyebrow + headline */}
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#34D399' }}>
                    Closing
                  </p>
                  <h3 className="font-serif text-h3 text-white">
                    La méthode Challenger Sale. Appliquée à votre activité.
                  </h3>
                </div>

                {/* Timeline */}
                <Timeline phases={closingPhases} accentColor="#34D399" />

                {/* Pricing */}
                <div className="border-t border-white/[0.06] pt-5">
                  <div className="mb-4">
                    <p className="font-sans text-text-muted text-sm mb-1">Programme complet</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-serif text-2xl text-white font-bold">1 000 €</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-1">
                      × 3 mois. Un mois par phase : discovery, pricing, délégation.
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-white font-semibold text-sm mb-2">
                      2h de coaching par semaine
                    </p>
                    <div className="flex gap-2 font-sans text-text-muted text-xs mb-1.5">
                      <span style={{ color: '#34D399' }} className="shrink-0">→</span>
                      <span>1h en visio — debriefs, stratégie, cas concrets</span>
                    </div>
                    <div className="flex gap-2 font-sans text-text-muted text-xs">
                      <span style={{ color: '#34D399' }} className="shrink-0">→</span>
                      <span>1h en situation réelle — coaching en direct sur un appel prospect</span>
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
