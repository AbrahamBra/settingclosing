const members = [
  {
    name: 'Brahim',
    role: 'Setting',
    desc: 'Premier contact, qualification, signaux d\u2019achat. Il ouvre les portes.',
  },
  {
    name: 'Abraham',
    role: 'IA & Automatisation',
    desc: 'Systèmes, automatisations, IA. Il fait tourner la machine.',
  },
  {
    name: 'Abdelhay',
    role: 'Closing & Performance',
    desc: 'Négociation, closing, conversion. Il signe les deals.',
  },
]

export function TeamBanner() {
  return (
    <section id="equipe" className="py-20 md:py-28">
      <div className="container-max px-6 md:px-12 lg:px-20">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4 text-center">
          L&apos;équipe
        </p>
        <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4 text-center">
          Trois expertises, un pipeline
        </h2>
        <p className="font-sans text-text-muted text-center max-w-xl mx-auto mb-14">
          Chacun fait ce qu&apos;il sait faire. Le système tourne parce que les
          pièces s&apos;emboîtent.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map(({ name, role, desc }) => (
            <div
              key={name}
              className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-6 flex flex-col items-center text-center"
            >
              {/* Photo placeholder */}
              <div className="w-28 h-28 rounded-2xl bg-bg-primary border-2 border-dashed border-accent/30 flex items-center justify-center mb-5">
                <svg
                  className="w-10 h-10 text-accent/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>

              <h3 className="font-sans font-extrabold text-lg text-text-primary">
                {name}
              </h3>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mt-1 mb-3">
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
