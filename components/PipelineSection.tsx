import { PipelineStep } from './PipelineStep'
import { ScrollReveal } from './ui/ScrollReveal'

const settingSteps = [
  {
    num: '01',
    label: 'Stratégie & ciblage',
    layers: ['hybrid'] as const,
    desc: "ICP défini avec l'IA. Comptes à monitorer sélectionnés (concurrents, complémentaires). Filtres Sales Navigator configurés : fonctions, industrie, taille, triggers récents. L'humain valide les cibles — c'est la fondation du reste.",
    tools: ['Sales Navigator', 'ICP'],
  },
  {
    num: '02',
    label: 'Signaux inbound',
    layers: ['ia'] as const,
    desc: "Reactin surveille chaque interaction sur vos posts. L'IA identifie qui a réagi, quand, avec quel type de contenu — like passif, commentaire précis, question publique.",
    tools: ['Reactin'],
  },
  {
    num: '03',
    label: 'Signaux outbound',
    layers: ['ia'] as const,
    desc: "Spyer monitore les comptes concurrents et complémentaires. Sales Navigator remonte les changements de poste, prises de fonction et signaux d'achat récents. L'IA priorise les profils à contacter.",
    tools: ['Spyer', 'Sales Navigator'],
  },
  {
    num: '04',
    label: 'Profil analysé',
    layers: ['hybrid'] as const,
    desc: "Claude analyse le profil : titre, bio, posts récents, connexions communes. Résultat déposé dans un Google Sheet — contacter ou non, contexte clé, segment probable.",
    tools: ['Claude', 'Google Sheet'],
  },
  {
    num: '05',
    label: 'Scoring & ajustement',
    layers: ['methode'] as const,
    desc: "5 niveaux de maturité d'achat. L'œil humain valide chaque profil et ajuste les critères de ciblage au fil des retours terrain. Ce jugement recalibre Sales Navigator et Spyer en continu.",
    tools: ['Scoring', 'Feedback loop'],
  },
  {
    num: '06',
    label: 'Skill maison',
    layers: ['hybrid'] as const,
    desc: "Pour les clients qui le souhaitent : un skill Claude encodé sur leur expertise — jargon métier, objections connues, exemples de messages qui ont décroché des réponses. S'affine à chaque itération via le journal de bord du setter.",
    tools: ['Claude Skill', 'Journal de bord'],
  },
  {
    num: '07',
    label: 'Message co-rédigé',
    layers: ['hybrid'] as const,
    desc: "Claude propose un draft ancré dans le skill. La méthode impose les règles : 5 phrases max, 2e phrase = fait précis tiré du profil, jamais de pitch dans le premier DM.",
    tools: ['Claude', 'Règles méthode'],
  },
  {
    num: '08',
    label: 'Validé et envoyé',
    layers: ['humain'] as const,
    desc: "Test du téléphone appliqué. Si ça ne sonnerait pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine.",
    tools: ['Validation humaine'],
  },
  {
    num: '09',
    label: 'RDV qualifié',
    layers: ['humain'] as const,
    desc: "Le setter convertit la conversation en rendez-vous. Pas de pitch — une ouverture. Les leads tièdes qui ne sont pas prêts rentrent en nurturing vers la newsletter.",
    tools: ['Setter', 'Nurturing'],
  },
]

const closingStep = {
  num: '10',
  label: 'Closing structuré',
  layers: ['humain'] as const,
  desc: "Challenger Sale. Discovery structurée : on repose le problème avant de parler solution. Valeur perçue augmentée. Vous signez plus, sans négocier le prix.",
  tools: ['Challenger Sale', 'Discovery'],
  isLast: true,
}

export function PipelineSection() {
  return (
    <section id="pipeline" className="section-padding">
      <div className="container-max">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Architecture
            </p>
            <h2 className="font-sans text-h2 text-text-primary mb-4">
              Ce que nous automatisons. Ce que nous encodons. Ce qui reste humain.
            </h2>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              L&apos;IA détecte et co-rédige. La méthode filtre et calibre. L&apos;humain valide et décide.
              Aucun message ne part sans avoir passé les trois couches.
            </p>
          </div>
        </ScrollReveal>

        {/* Pipeline Setting zone label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#818CF8]/20 bg-[#818CF8]/10 font-sans text-xs font-semibold uppercase tracking-widest text-[#818CF8]">
              ⚡ Pipeline Setting
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        {/* Setting steps 1-9 */}
        <div className="max-w-2xl mx-auto">
          {settingSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 50}>
              <PipelineStep {...step} />
            </ScrollReveal>
          ))}
        </div>

        {/* Pipeline Closing zone label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-8 mt-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#34D399]/20 bg-[#34D399]/10 font-sans text-xs font-semibold uppercase tracking-widest text-[#34D399]">
              🤝 Pipeline Closing
            </span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </ScrollReveal>

        {/* Closing step 10 */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={settingSteps.length * 50}>
            <PipelineStep {...closingStep} />
          </ScrollReveal>
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={100}>
          <p className="text-center text-text-muted text-sm mt-12 max-w-xl mx-auto">
            Ce pipeline se calibre en deux mois. Après ça, vous vous concentrez sur les appels — pas sur la prospection.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
