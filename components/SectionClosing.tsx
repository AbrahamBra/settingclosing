import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const methods = [
  "Formé à la Challenger Sale — la méthode avec les meilleurs résultats sur les ventes complexes",
  "Discovery approfondie pour comprendre les vrais enjeux avant de parler prix",
  "Techniques pour augmenter la valeur perçue sans baisser le prix",
  '"Catch the cat" — reprendre le contrôle d\'un deal qui part dans tous les sens',
]

export function SectionClosing() {
  return (
    <section id="closing" className="section-padding bg-bg-primary">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <GlassCard accent className="p-8 flex flex-col gap-6">
              <div>
                <p className="font-sans text-text-muted text-sm mb-2">Tarif</p>
                <p className="font-serif text-h2 text-text-primary">
                  1 000 €
                  <span className="text-h3 text-text-muted font-sans"> / mois</span>
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 space-y-3">
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
          <ScrollReveal delay={150}>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Closing
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-8">
              Apprenez à closer comme les meilleurs commerciaux B2B.
            </h2>
            <ul className="space-y-4">
              {methods.map((method) => (
                <li key={method} className="flex gap-3 font-sans text-text-muted">
                  <span className="text-accent mt-1 shrink-0">→</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
