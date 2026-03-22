import { ScrollReveal } from './ui/ScrollReveal'

const stats = [
  { value: '20+', label: 'solopreneurs accompagnés' },
  { value: '400+', label: 'RDV qualifiés générés' },
  { value: '<7j', label: 'avant ton premier RDV' },
]

interface SocialProofProps {
  variant?: 'dark' | 'light'
}

export function SocialProof({ variant = 'dark' }: SocialProofProps) {
  const isLight = variant === 'light'

  return (
    <section className={`section-padding py-12 lg:py-16 ${isLight ? 'bg-transparent' : 'bg-bg-secondary'}`}>
      <div className="container-max">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-sans text-3xl sm:text-4xl font-extrabold text-accent tracking-tight">
                  {stat.value}
                </p>
                <p className={`font-sans text-xs uppercase tracking-wider mt-1 ${isLight ? 'text-[#6B6560]' : 'text-text-muted'}`}>
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
