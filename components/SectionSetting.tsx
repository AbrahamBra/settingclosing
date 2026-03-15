import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const methods = [
  "Base de connaissance construite avec l'IA — contexte client et best practices marketing/sales",
  'Segmentation par niveaux de maturité pour cibler au bon moment',
  'Système de scoring pour prioriser les bons prospects',
  'Listes sur-mesure via LinkedIn Sales Navigator',
  'Copywriting orienté bénéfice client, pas produit',
]

export function SectionSetting() {
  return (
    <section id="setting" className="section-padding bg-bg-secondary">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-8">
              5 rendez-vous qualifiés. Minimum. Garanti.
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
          <ScrollReveal delay={150}>
            <GlassCard accent className="p-8 flex flex-col gap-6">
              <div>
                <p className="font-sans text-text-muted text-sm mb-2">Tarif</p>
                <p className="font-serif text-h2 text-text-primary">
                  À partir de 500 €
                  <span className="text-h3 text-text-muted font-sans"> / client</span>
                </p>
                <p className="font-sans text-text-muted text-sm mt-1">
                  Fixe + variable sur devis
                </p>
              </div>
              <div className="border-t border-white/5 pt-6">
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
