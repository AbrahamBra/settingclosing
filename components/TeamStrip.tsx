import { ScrollReveal } from './ui/ScrollReveal'

const members = [
  { name: 'Brahim', initial: 'B', role: 'Setting', color: '#A78BFA', desc: 'Envoie les messages, qualifie, d\u00e9croche les RDV' },
  { name: 'Abraham', initial: 'A', role: 'IA & Automatisation', color: '#C87533', desc: 'Construit les outils de ciblage et les automatisations' },
  { name: 'Abdelhay', initial: 'A', role: 'Strat\u00e9gie', color: '#FBBF24', desc: 'D\u00e9finit l\u2019angle commercial et la strat\u00e9gie de conversion' },
]

export function TeamStrip() {
  return (
    <section className="section-padding">
      <div className="container-max max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-8 text-center">
            Qui fait tourner la machine
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 relative">
            {/* Connector line (desktop) */}
            <div className="hidden sm:block absolute top-6 left-[15%] right-[15%] h-px bg-white/[0.06]" />

            {members.map((m) => (
              <div key={m.name} className="flex flex-col items-center text-center relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3 relative z-10"
                  style={{ backgroundColor: `${m.color}15`, border: `2px solid ${m.color}30` }}
                >
                  <span className="font-extrabold text-sm" style={{ color: m.color }}>
                    {m.initial}
                  </span>
                </div>
                <p className="font-semibold text-text-primary text-sm">{m.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wider mt-0.5" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-text-muted text-xs mt-1 max-w-[160px]">{m.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
