import { ScrollReveal } from './ui/ScrollReveal'

const steps = [
  {
    label: 'Semaine 1',
    desc: 'On comprend ton offre, ton client idéal, tes angles',
  },
  {
    label: 'Semaine 2',
    desc: 'Premiers messages envoyés — ton setter est opérationnel',
  },
  {
    label: 'Semaine 3',
    desc: 'Premiers RDV qualifiés dans ton agenda',
  },
  {
    label: 'Mois 2+',
    desc: 'Optimisation continue — chaque semaine on affine avec tes retours',
  },
]

export function OnboardingTimeline() {
  return (
    <section className="section-padding">
      <div className="container-max max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C87533] mb-10 text-center">
            Comment ça se passe
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal */}
        <div className="hidden md:flex items-start relative">
          {/* Connector line */}
          <div className="absolute top-[7px] left-0 right-0 h-[2px] bg-[#D4CFC7]" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100} className="flex-1 relative px-2">
              {/* Dot */}
              <div
                className="w-3.5 h-3.5 rounded-full border-2 border-white mx-auto mb-4 relative z-10"
                style={{
                  background: i === steps.length - 1 ? '#C87533' : '#A8A090',
                }}
              />
              <h3 className="font-semibold text-[#1A1816] text-sm text-center mb-1">
                {step.label}
              </h3>
              <p className="text-xs text-[#6B6560] text-center leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden flex flex-col relative pl-6">
          {/* Connector line */}
          <div className="absolute top-0 bottom-0 left-[6px] w-[2px] bg-[#D4CFC7]" />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 100} className="relative pb-8 last:pb-0">
              {/* Dot */}
              <div
                className="absolute left-[-20px] top-0.5 w-3.5 h-3.5 rounded-full border-2 border-[#F5F2ED]"
                style={{
                  background: i === steps.length - 1 ? '#C87533' : '#A8A090',
                }}
              />
              <h3 className="font-semibold text-[#1A1816] text-sm mb-1">
                {step.label}
              </h3>
              <p className="text-xs text-[#6B6560] leading-relaxed">
                {step.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
