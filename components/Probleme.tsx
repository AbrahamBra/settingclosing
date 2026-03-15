import { GlassCard } from './ui/GlassCard'
import { ScrollReveal } from './ui/ScrollReveal'

const problems = [
  {
    title: 'Vous prospectez dans le vide',
    body: "Pas de ciblage, pas de scoring. Des messages centrés sur le produit plutôt que sur ce que le client gagne. Peu de réponses, beaucoup de temps perdu.",
  },
  {
    title: 'Vos appels ne convertissent pas',
    body: "Sans discovery solide et sans méthode pour augmenter la valeur perçue, vous baissez le prix ou vous perdez le deal.",
  },
  {
    title: 'Vous faites tout vous-même',
    body: "Pendant que vous prospectez et tentez de closer, votre vrai travail attend.",
  },
]

export function Probleme() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-16">
            Ce que ça coûte de ne pas avoir de méthode
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 100}>
              <GlassCard className="p-8 h-full relative overflow-hidden">
                {/* Decorative number */}
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-5 font-serif select-none pointer-events-none leading-none"
                  style={{
                    fontSize: '5rem',
                    color: 'rgba(28,25,23,0.07)',
                    fontWeight: 400,
                  }}
                >
                  0{i + 1}
                </span>
                {/* Accent top-line */}
                <div className="w-8 h-0.5 bg-accent mb-6 rounded-full" />
                <h3 className="font-sans font-semibold text-h3 text-text-primary mb-4">
                  {problem.title}
                </h3>
                <p className="font-sans text-text-muted leading-relaxed">
                  {problem.body}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
