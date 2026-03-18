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
    desc: "Reactin surveille chaque interaction sur vos posts et ceux de vos concurrents. L'IA identifie qui a réagi, quand, avec quel type de contenu. On traque aussi les lead magnets à succès pour maximiser la prise de RDV — c'est là que le scoring devient clé : LinkedIn limite les demandes d'ajout par semaine et la messagerie devient vite ingérable sans priorisation.",
    tools: ['Reactin', 'Lead magnets', 'Scoring'],
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

const closingSteps = [
  {
    num: '10',
    label: 'Closer la discovery',
    layers: ['methode', 'humain'] as const,
    desc: "Seuil : deals entre 2k et 5k€. On vous forme à vendre correctement. Poser les bonnes questions avant de parler prix. Discovery structurée : comprendre le problème du prospect, qualifier son urgence, et ne pitcher qu'au bon moment. La base que 80% des fondateurs n'ont jamais apprise.",
    tools: ['Challenger Sale', 'Discovery', '2-5k€'],
  },
  {
    num: '11',
    label: 'Challenger le pricing',
    layers: ['methode', 'humain'] as const,
    desc: "Seuil : deals entre 5k et 10k€. À ce niveau, le prospect compare et négocie. On vous forme à augmenter la valeur perçue de votre offre pour que le prix ne soit plus le critère de décision. Structurer une offre qui se vend d'elle-même. Vous signez plus — sans baisser le tarif.",
    tools: ['Valeur perçue', 'Pricing', '5-10k€'],
  },
  {
    num: '12',
    label: 'Déléguer le closing',
    layers: ['humain'] as const,
    desc: "Seuil : deals à 10k€ et plus. Cycle de vente long, multi-interlocuteurs. Le fondateur ne peut plus tout faire seul. On recrute, forme et manage des closers dédiés sur votre offre. Vous n'êtes plus dans le pipe — vous le gérez.",
    tools: ['Closers formés', 'Management', '10k€+'],
    isLast: true,
  },
]

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

        {/* Closing steps 10-12 */}
        <div className="max-w-2xl mx-auto">
          {closingSteps.map((step, i) => (
            <ScrollReveal key={step.num} delay={(settingSteps.length + i) * 50}>
              <PipelineStep {...step} />
            </ScrollReveal>
          ))}
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
