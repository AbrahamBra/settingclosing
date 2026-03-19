import { ScrollReveal } from './ui/ScrollReveal'

const pills = [
  {
    label: 'IA suffit',
    classes: 'border border-semantic-ia/20 bg-semantic-ia/10 text-semantic-ia',
    dot: 'bg-semantic-ia',
  },
  {
    label: 'IA à entraîner',
    classes: 'border border-semantic-methode/20 bg-semantic-methode/10 text-semantic-methode',
    dot: 'bg-semantic-methode',
  },
  {
    label: "L'humain doit décider",
    classes: 'border border-semantic-humain/20 bg-semantic-humain/10 text-semantic-humain',
    dot: 'bg-semantic-humain',
  },
]

export function PainPoint() {
  return (
    <section className="section-padding py-20 lg:py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
            Le vrai problème
          </p>
          <h2 className="font-sans text-h2 text-text-primary mb-4">
            L&apos;IA fait le volume.
            <br className="hidden sm:block" />
            {' '}Mais qui arbitre&nbsp;?
          </h2>
          <p className="font-sans text-text-secondary text-base leading-relaxed max-w-xl mx-auto">
            Vous avez les outils. Tout le monde les a. Le vrai avantage,
            c&apos;est de savoir quand l&apos;IA suffit, quand elle doit être
            entraînée — et quand seul un humain peut débloquer le deal.
          </p>
        </ScrollReveal>

        <div className="flex justify-center gap-3 flex-wrap mt-8">
          {pills.map((pill, i) => (
            <ScrollReveal key={pill.label} delay={100 + i * 200}>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-sans text-xs font-semibold ${pill.classes}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${pill.dot}`} />
                {pill.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
