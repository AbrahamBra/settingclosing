import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const phases = [
  {
    title: 'Challenger la discovery',
    desc: 'Apprendre à poser les bonnes questions avant de parler prix. Comprendre les vrais enjeux pour vendre la bonne solution.',
  },
  {
    title: 'Challenger le pricing',
    desc: "Techniques pour augmenter la valeur perçue sans baisser le tarif. Structurer une offre qui se vend d'elle-même.",
  },
  {
    title: 'Déléguer à des closers',
    desc: 'Mise en place du système pour recruter et manager des closers. Vous passez de vendeur à manager commercial.',
  },
]

export function SectionClosing() {
  return (
    <section id="closing" className="section-padding bg-bg-primary">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — pricing card */}
          <ScrollReveal>
            <GlassCard accent className="p-8 flex flex-col gap-6">
              <div>
                <p className="font-sans text-text-muted text-sm mb-1">Programme complet</p>
                <div className="flex items-baseline gap-2">
                  <p className="font-serif text-h2 text-text-primary">1 000 €</p>
                  <span className="font-sans text-text-muted text-base">/ mois</span>
                </div>
                <p className="font-sans text-text-muted text-sm mt-1">
                  × 3 mois — engagement sur la durée pour de vrais résultats
                </p>
              </div>

              <div className="border-t border-white/5 pt-5 space-y-3">
                <p className="font-sans text-text-primary font-semibold">
                  2h de coaching par semaine
                </p>
                <div className="flex gap-3 font-sans text-text-muted text-sm">
                  <span className="text-accent shrink-0">→</span>
                  <span>1h en visio — debriefs, stratégie, cas concrets</span>
                </div>
                <div className="flex gap-3 font-sans text-text-muted text-sm">
                  <span className="text-accent shrink-0">→</span>
                  <span>1h en situation réelle — coaching en direct sur un appel prospect</span>
                </div>
              </div>

              <ButtonGlow as="a" href="#contact" className="w-full text-center">
                Améliorer mon closing →
              </ButtonGlow>
            </GlassCard>
          </ScrollReveal>

          {/* Right — programme */}
          <ScrollReveal delay={150}>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-10">
              Apprenez à closer comme les meilleurs commerciaux B2B.
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
                        style={{ background: 'rgba(255,255,255,0.08)', minHeight: '24px' }}
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

        </div>
      </div>
    </section>
  )
}
