import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const flow = [
  {
    label: 'Setting',
    title: 'Remplir le pipeline',
    desc: 'RDV qualifiés livrés chaque mois. Vous ne prospectez plus.',
    accent: false,
  },
  {
    label: 'Closing',
    title: 'Convertir les deals',
    desc: 'Méthode, valeur perçue, closers opérationnels. Vous ne perdez plus de deals.',
    accent: false,
  },
  {
    label: 'Les deux',
    title: 'Pipeline complet',
    desc: 'Concentrez-vous sur votre vraie valeur ajoutée. Le reste est délégué.',
    accent: true,
  },
]

export function SectionComplementarite() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max max-w-4xl">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent text-center mb-4">
            Complémentarité
          </p>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-4">
            L&apos;un remplit le pipeline. L&apos;autre le convertit.
          </h2>
          <p className="font-sans text-text-muted text-center text-lg mb-16 max-w-2xl mx-auto">
            Utilisez l&apos;une, l&apos;autre, ou les deux — selon là où vous perdez le plus de temps.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {flow.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 120}>
              <GlassCard accent={item.accent} className="p-7 h-full flex flex-col gap-3">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                  {item.label}
                </p>
                <p className="font-sans font-semibold text-text-primary text-lg leading-snug">
                  {item.title}
                </p>
                <p className="font-sans text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center">
            <ButtonGlow as="a" href="#contact">
              Discuter de mes besoins →
            </ButtonGlow>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
