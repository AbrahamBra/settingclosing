import { ScrollReveal } from './ui/ScrollReveal'

const stats = [
  { value: '20+', label: 'solopreneurs accompagnés' },
  { value: '400+', label: 'RDV qualifiés générés' },
  { value: '<7j', label: 'avant ton premier RDV' },
]

export function SocialProof() {
  return (
    <section className="section-padding py-12 lg:py-16 bg-bg-secondary">
      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-sans text-3xl sm:text-4xl font-extrabold text-accent tracking-tight">
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-text-muted uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
