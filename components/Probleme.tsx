import { GlassCard } from './ui/GlassCard'
import { ScrollReveal } from './ui/ScrollReveal'

const problems = [
  {
    title: 'Vos messages se perdent dans le bruit',
    stat: '2–3%',
    statLabel: 'de taux de réponse en outreach classique',
    body: "Pas de ciblage, pas de scoring. Des messages centrés sur le produit plutôt que sur ce que le client gagne. Beaucoup de temps perdu sur des gens qui ne veulent pas acheter.",
  },
  {
    title: 'Vos appels ne convertissent pas',
    stat: '-40%',
    statLabel: "sur le tarif quand il n'y a pas de méthode",
    body: "Sans discovery solide et sans scoring de maturité préalable, vous appelez les mauvais au mauvais moment. Vous baissez le prix ou vous perdez le deal.",
  },
  {
    title: 'Vous faites tout vous-même',
    stat: '100%',
    statLabel: 'du temps commercial sur vos épaules',
    body: "Pendant que vous prospectez, nurturez et tentez de closer, votre vrai travail attend. Ce n'est pas un problème de discipline — c'est un problème d'organisation.",
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
              <GlassCard className="p-8 h-full relative overflow-hidden flex flex-col gap-5">
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
                <div className="w-8 h-0.5 bg-accent rounded-full" />
                {/* Stat */}
                <div>
                  <p className="font-serif text-3xl text-accent leading-none mb-1">
                    {problem.stat}
                  </p>
                  <p className="font-sans text-xs text-text-muted">
                    {problem.statLabel}
                  </p>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-h3 text-text-primary mb-3">
                    {problem.title}
                  </h3>
                  <p className="font-sans text-text-muted leading-relaxed text-sm">
                    {problem.body}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
