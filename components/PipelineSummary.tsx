import { ScrollReveal } from './ui/ScrollReveal'

const steps = [
  {
    num: '1',
    icon: '🎯',
    title: 'Détection',
    layer: 'IA + Sales Navigator',
    desc: "L'IA repère les signaux d'achat sur LinkedIn. L'humain valide les cibles.",
    color: 'text-semantic-ia',
    iconBg: 'bg-semantic-ia/10',
    iconBorder: 'border-semantic-ia/20',
  },
  {
    num: '2',
    icon: '⚡',
    title: 'Qualification',
    layer: 'Méthode + Claude',
    desc: "Chaque profil est scoré sur 5 niveaux. La méthode filtre, l'humain recalibre.",
    color: 'text-semantic-methode',
    iconBg: 'bg-semantic-methode/10',
    iconBorder: 'border-semantic-methode/20',
  },
  {
    num: '3',
    icon: '🤝',
    title: 'Conversion',
    layer: 'Humain + Setter',
    desc: "Message co-rédigé, validé par l'humain. Le setter convertit en RDV qualifié.",
    color: 'text-semantic-humain',
    iconBg: 'bg-semantic-humain/10',
    iconBorder: 'border-semantic-humain/20',
  },
]

function Arrow() {
  return (
    <div className="hidden md:flex items-center justify-center pt-4" aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/[0.12]">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </div>
  )
}

export function PipelineSummary() {
  return (
    <section className="section-padding pb-0">
      <div className="container-max max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/15 bg-accent/8 font-sans text-[10px] font-semibold uppercase tracking-widest text-accent-light mb-5">
              Comment ça marche
            </span>
            <h2 className="font-sans text-h2 text-text-primary mb-3">
              De l&apos;invisible au rendez-vous. En&nbsp;3&nbsp;phases.
            </h2>
            <p className="font-sans text-text-secondary text-sm">
              Chaque étape filtre, qualifie et rapproche. Rien n&apos;est laissé au hasard.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-step row with inline arrows */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-y-8 md:gap-y-0">
          {steps.flatMap((step, i) => {
            const card = (
              <ScrollReveal key={step.num} delay={i * 120}>
                <div className="text-center px-2">
                  <div
                    className={`relative w-14 h-14 rounded-2xl ${step.iconBg} border ${step.iconBorder} flex items-center justify-center mx-auto mb-4 text-2xl`}
                  >
                    <span>{step.icon}</span>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-bg-primary border border-white/10 text-[10px] font-bold text-text-secondary flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <p className={`text-[9px] font-semibold uppercase tracking-wider ${step.color} mb-1.5`}>
                    {step.layer}
                  </p>
                  <h3 className="text-text-primary font-bold text-[15px] mb-1.5">{step.title}</h3>
                  <p className="text-text-secondary text-[13px] leading-relaxed max-w-[240px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
            if (i < steps.length - 1) {
              return [card, <Arrow key={`arrow-${i}`} />]
            }
            return [card]
          })}
        </div>
      </div>
    </section>
  )
}
