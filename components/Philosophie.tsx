import { ScrollReveal } from './ui/ScrollReveal'

const steps = [
  {
    num: '01',
    label: 'Signal',
    title: 'Détecter les acheteurs actifs',
    desc: "On identifie les prospects qui montrent un signal d'achat sur LinkedIn — sur vos propres posts ou sur des comptes tiers. Pas de cold outreach : on parle aux gens qui veulent déjà avancer.",
  },
  {
    num: '02',
    label: 'Score',
    title: 'Classer par maturité',
    desc: 'Chaque lead est scoré selon son niveau de maturité commerciale. Qui appeler maintenant. Qui nurture. Qui ignorer. Fini de perdre du temps sur les mauvais profils.',
  },
  {
    num: '03',
    label: 'Setting',
    title: 'RDV qualifiés livrés',
    desc: 'Outreach personnalisé, base de connaissance métier, messages orientés bénéfice client. Premiers rendez-vous qualifiés dès la première semaine.',
  },
  {
    num: '04',
    label: 'Closing',
    title: 'Convertir sans baisser le prix',
    desc: 'Discovery structurée, valeur perçue augmentée, méthode Challenger Sale appliquée à votre activité. Vous closez plus — ou vous déléguez à des closers formés.',
  },
]

export function Philosophie() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max max-w-5xl">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent text-center mb-4">
            La méthode
          </p>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-4">
            Une machine, quatre étapes.
          </h2>
          <p className="font-sans text-text-muted text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            La plupart des setters font du cold outreach. ChallengersLab commence en amont — au moment où le prospect montre qu'il veut acheter.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 80}>
              <div className="bg-bg-secondary p-8 h-full flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl text-accent/30 leading-none select-none">
                    {step.num}
                  </span>
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                    {step.label}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-text-primary leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
