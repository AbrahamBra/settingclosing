import { ScrollReveal } from './ui/ScrollReveal'

export function Philosophie() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max max-w-4xl">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-8">
            Les meilleures méthodes B2B, importées dans votre secteur
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="font-sans text-text-muted text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            Le secteur des solopreneurs et infopreneurs évolue vite. La prospection et le closing restent souvent artisanaux. ChallengersLab applique ce qui fonctionne en B2B — scoring, niveaux de maturité, Challenger Sale — à ce marché.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
          <ScrollReveal delay={100}>
            <div className="bg-bg-secondary p-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Setting
              </p>
              <h3 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                Piloté par la donnée
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                Ciblage, scoring, LinkedIn Sales Navigator, copywriting orienté bénéfice client — pas produit.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bg-bg-secondary p-10">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Closing
              </p>
              <h3 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                Structuré
              </h3>
              <p className="font-sans text-text-muted leading-relaxed">
                Discovery approfondie, valeur perçue, méthode Challenger Sale appliquée.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
