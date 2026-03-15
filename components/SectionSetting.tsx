import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const phases = [
  {
    title: 'Prospection assistée par IA',
    desc: "Ciblage, Sales Navigator, messages orientés bénéfice client. L'IA génère et affine les approches en continu.",
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

export function SectionSetting() {
  return (
    <section id="setting" className="section-padding bg-bg-secondary">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — programme */}
          <ScrollReveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-10">
              5 rendez-vous qualifiés. Minimum. Garanti.
            </h2>

            <ul className="flex flex-col">
              {phases.map((phase, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent text-sm font-semibold font-sans">
                      {i + 1}
                    </div>
                    {i < phases.length - 1 && (
                      <div
                        className="w-px flex-1 my-1.5"
                        style={{ background: 'rgba(0,0,0,0.12)', minHeight: '24px' }}
                      />
                    )}
                  </div>
                  <div className="pb-7">
                    <p className="font-sans text-[10px] uppercase tracking-widest text-accent font-semibold mb-1">
                      Mois {i + 1}
                    </p>
                    <p className="font-sans font-semibold text-text-primary mb-1.5">
                      {phase.title}
                    </p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Right — pricing card */}
          <ScrollReveal delay={150}>
            <GlassCard accent className="p-8 flex flex-col gap-6">
              <div>
                <p className="font-sans text-text-muted text-sm mb-1">Fixe mensuel</p>
                <div className="flex items-baseline gap-2">
                  <p className="font-serif text-h2 text-text-primary">500 €</p>
                  <span className="font-sans text-text-muted text-base">/ mois</span>
                </div>
                <p className="font-sans text-text-muted text-sm mt-1">
                  Garanti, peu importe le volume de RDV
                </p>
              </div>

              <div className="border-t border-black/8 pt-5">
                <p className="font-sans text-text-muted text-sm mb-2">Prime à la performance</p>
                <div className="flex items-baseline gap-2">
                  <p className="font-serif text-h3 text-text-primary">25 € – 150 €</p>
                  <span className="font-sans text-text-muted text-sm">/ RDV livré</span>
                </div>
                <p className="font-sans text-text-muted text-sm mt-1">
                  Vous ne payez des primes que sur les RDV qui arrivent
                </p>
              </div>

              <div className="border-t border-black/8 pt-5">
                <p className="font-sans text-text-primary font-semibold mb-1">
                  Garantie : minimum 5 RDV qualifiés
                </p>
                <p className="font-sans text-text-muted text-sm">
                  Vous déléguez plusieurs clients ? On s&apos;adapte au volume.
                </p>
              </div>

              <ButtonGlow as="a" href="#contact" className="w-full text-center">
                Déléguer mon setting →
              </ButtonGlow>
            </GlassCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
