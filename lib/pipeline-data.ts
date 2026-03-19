// Shared pipeline data used by PipelineSection (homepage) and /methode page

export const layerConfig = {
  ia: { label: 'IA', text: 'text-semantic-ia', bg: 'bg-semantic-ia/10', border: 'border-semantic-ia/20' },
  methode: { label: 'Méthode', text: 'text-semantic-methode', bg: 'bg-semantic-methode/10', border: 'border-semantic-methode/20' },
  hybrid: { label: 'IA + Méthode', text: 'text-semantic-hybrid', bg: 'bg-semantic-hybrid/10', border: 'border-semantic-hybrid/20' },
  humain: { label: 'Humain', text: 'text-semantic-humain', bg: 'bg-semantic-humain/10', border: 'border-semantic-humain/20' },
} as const

export type LayerKey = keyof typeof layerConfig

export const closingTiers = [
  {
    level: 'Niveau 1',
    label: 'Closer la discovery',
    threshold: '2k – 5k€',
    layers: ['methode', 'humain'] as const,
    desc: "On vous forme à vendre correctement. Discovery structurée : comprendre le problème du prospect, qualifier son urgence, ne pitcher qu'au bon moment. La base que 80% des fondateurs n'ont jamais apprise.",
    tools: ['Challenger Sale', 'Discovery'],
  },
  {
    level: 'Niveau 2',
    label: 'Challenger le pricing',
    threshold: '5k – 10k€',
    layers: ['methode', 'humain'] as const,
    desc: "Le prospect compare et négocie. On vous forme à augmenter la valeur perçue pour que le prix ne soit plus le critère de décision. Structurer une offre qui se vend d'elle-même.",
    tools: ['Valeur perçue', 'Pricing'],
  },
  {
    level: 'Niveau 3',
    label: 'Déléguer le closing',
    threshold: '10k€+',
    layers: ['humain'] as const,
    desc: "Cycle de vente long, multi-interlocuteurs. Vous ne pouvez plus tout faire seul. On recrute, forme et manage des closers dédiés sur votre offre. Vous n'êtes plus dans le pipe — vous le gérez.",
    tools: ['Closers formés', 'Management'],
  },
] as const

export const settingSteps = [
  {
    num: '01',
    label: 'Stratégie & ciblage',
    layers: ['hybrid'] as const,
    desc: "ICP défini avec l'IA. Comptes à monitorer sélectionnés (concurrents, complémentaires). Filtres Sales Navigator configurés : fonctions, industrie, taille, triggers récents. On valide chaque cible — c'est la fondation du reste.",
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
    desc: "5 niveaux de maturité d'achat. On valide chaque profil et on ajuste les critères de ciblage au fil des retours terrain. Ce jugement recalibre Sales Navigator et Spyer en continu.",
    tools: ['Scoring', 'Feedback loop'],
  },
  {
    num: '06',
    label: 'Skill maison',
    layers: ['hybrid'] as const,
    desc: "Si vous le souhaitez : un skill Claude encodé sur votre expertise — jargon métier, objections connues, exemples de messages qui ont décroché des réponses. Il s'affine à chaque itération via le journal de bord.",
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
    desc: "On convertit la conversation en rendez-vous. Pas de pitch — une ouverture. Les leads tièdes qui ne sont pas prêts rentrent en nurturing vers la newsletter.",
    tools: ['Setter', 'Nurturing'],
  },
] as const
