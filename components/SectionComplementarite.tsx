import { GlassCard } from './ui/GlassCard'
import { ButtonGlow } from './ui/ButtonGlow'
import { ScrollReveal } from './ui/ScrollReveal'

const differentiants = [
  {
    icon: '⟡',
    title: 'Signal-based, pas cold',
    desc: "On ne prospecte pas toute la liste. On identifie les prospects qui montrent déjà un signal d'achat — sur vos posts ou sur des comptes tiers. Vous parlez aux bonnes personnes au bon moment.",
    accent: false,
  },
  {
    icon: '⟡',
    title: 'Pipeline complet, un seul toit',
    desc: "Du premier message au deal signé : signal, scoring, setting, closing. Pas deux prestataires à coordonner — une seule méthode bout en bout, calibrée pour votre marché.",
    accent: true,
  },
  {
    icon: '⟡',
    title: 'Alignés sur vos résultats',
    desc: "500 €/mois fixe + prime par RDV livré. On n'est rémunérés sur la performance que si vous avez des rendez-vous. Nos intérêts sont les mêmes que les vôtres.",
    accent: false,
  },
]

export function SectionComplementarite() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-max max-w-4xl">
        <ScrollReveal>
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent text-center mb-4">
            Pourquoi ChallengersLab
          </p>
          <h2 className="font-serif text-h2 text-text-primary text-center mb-4">
            Ce qui nous rend différents.
          </h2>
          <p className="font-sans text-text-muted text-center text-lg mb-16 max-w-2xl mx-auto">
            N&apos;importe quel setter peut envoyer des messages. Très peu commencent en amont — au moment où le prospect décide d&apos;acheter.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {differentiants.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <GlassCard accent={item.accent} className="p-7 h-full flex flex-col gap-4">
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
              Discuter de mon pipeline →
            </ButtonGlow>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
