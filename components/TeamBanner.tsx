const members = [
  {
    name: 'Brahim',
    initial: 'B',
    role: 'Setting',
    color: '#B9A4FB',
    desc: 'C\u2019est lui qui envoie les messages, qualifie les prospects et te d\u00e9croche des RDV.',
  },
  {
    name: 'Abraham',
    initial: 'A',
    role: 'IA & Automatisation',
    color: '#C87533',
    desc: 'Il construit les outils de ciblage et les automatisations qui font gagner du temps au reste de l\u2019\u00e9quipe.',
  },
  {
    name: 'Abdelhay',
    initial: 'A',
    role: 'Strat\u00e9gie commerciale',
    color: '#FBBF24',
    desc: 'Il d\u00e9finit l\u2019angle commercial, les scripts et la strat\u00e9gie de conversion.',
  },
]

export function TeamBanner() {
  return (
    <section id="equipe" className="py-20 md:py-28">
      <div className="container-max px-6 md:px-12 lg:px-20">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4 text-center">
          L&apos;&eacute;quipe
        </p>
        <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4 text-center">
          Qui fait quoi
        </h2>
        <p className="font-sans text-text-muted text-center max-w-xl mx-auto mb-14">
          Chacun fait ce qu&apos;il sait faire. Le syst&egrave;me tourne parce que les
          pi&egrave;ces s&apos;embo&icirc;tent.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map(({ name, initial, role, color, desc }) => (
            <div
              key={name}
              className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-6 flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  backgroundColor: `${color}15`,
                  border: `1px solid ${color}30`,
                }}
              >
                <span
                  className="font-sans font-extrabold text-2xl"
                  style={{ color }}
                >
                  {initial}
                </span>
              </div>

              <h3 className="font-sans font-extrabold text-lg text-text-primary">
                {name}
              </h3>
              <p
                className="font-sans text-xs font-semibold uppercase tracking-widest mt-1 mb-3"
                style={{ color }}
              >
                {role}
              </p>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
