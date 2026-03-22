import { DarkCard } from './ui/DarkCard'
import { ScrollReveal } from './ui/ScrollReveal'

const proofs = [
  {
    icon: '📸',
    title: 'Ciblage chirurgical',
    desc: 'Tes filtres Sales Navigator en action sur une vraie liste',
    placeholder: 'Screenshot Sales Navigator',
  },
  {
    icon: '🎥',
    title: 'Scoring en temps réel',
    desc: "L'IA qui analyse et priorise tes leads",
    placeholder: 'Vidéo Claude Cowork',
  },
  {
    icon: '💬',
    title: 'Messages qui convertissent',
    desc: 'Exemples de séquences LinkedIn réelles',
    placeholder: 'Capture conversation LinkedIn',
  },
  {
    icon: '📊',
    title: 'Résultats mesurables',
    desc: "Métriques d'une campagne type",
    placeholder: 'Dashboard résultats',
  },
]

export function ProofGrid() {
  return (
    <section id="preuves" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Preuves
          </p>
          <h2 className="font-serif text-h2 text-text-primary mb-4">
            Ça ressemble à quoi concrètement ?
          </h2>
          <p className="font-sans text-text-muted text-lg max-w-2xl mx-auto">
            Screenshots, vidéos, preuves réelles de la méthode en action
          </p>
        </div>

        {/* Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proofs.map((proof, i) => (
              <DarkCard key={i} hover className="p-6">
                <div className="h-40 bg-white/[0.02] border border-dashed border-white/[0.08] rounded-lg flex flex-col items-center justify-center gap-2 mb-4">
                  <span className="text-3xl">{proof.icon}</span>
                  <span className="text-text-muted text-sm">{proof.placeholder}</span>
                </div>
                <h4 className="text-text-primary font-semibold mb-1">{proof.title}</h4>
                <p className="text-text-muted text-sm">{proof.desc}</p>
              </DarkCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
