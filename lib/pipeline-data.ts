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
    pedagogy: {
      mistake: 'Importer 10 000 profils depuis Sales Navigator avec des filtres larges ("directeur", "France", "SaaS") et lancer une séquence automatisée dessus. Le volume rassure. Le taux de réponse, non.',
      arbitrage: "On commence par définir un ICP précis avec l'IA — fonction, taille d'entreprise, signaux récents. Chaque compte est validé avant d'entrer dans le pipe. 200 profils bien ciblés convertissent plus que 10 000 mal filtrés.",
    },
  },
  {
    num: '02',
    label: 'Signaux inbound',
    layers: ['ia'] as const,
    desc: "Reactin surveille chaque interaction sur vos posts et ceux de vos concurrents. L'IA identifie qui a réagi, quand, avec quel type de contenu. On traque aussi les lead magnets à succès pour maximiser la prise de RDV — c'est là que le scoring devient clé : LinkedIn limite les demandes d'ajout par semaine et la messagerie devient vite ingérable sans priorisation.",
    tools: ['Reactin', 'Lead magnets', 'Scoring'],
    pedagogy: {
      mistake: "Installer un outil de tracking qui notifie à chaque like sur vos posts. Résultat : 45 notifications par jour, aucune priorisation. Un CEO qui like un post et un étudiant en marketing reçoivent le même traitement.",
      arbitrage: "Reactin surveille les interactions sur vos posts et ceux de vos concurrents. Mais l'IA ne fait pas que compter — elle score. Qui a réagi, sur quel type de contenu, à quelle fréquence. LinkedIn limite les demandes de connexion par semaine : sans scoring, vous gaspillez vos créneaux sur les mauvais profils.",
    },
  },
  {
    num: '03',
    label: 'Signaux outbound',
    layers: ['ia'] as const,
    desc: "Spyer monitore les comptes concurrents et complémentaires. Sales Navigator remonte les changements de poste, prises de fonction et signaux d'achat récents. L'IA priorise les profils à contacter.",
    tools: ['Spyer', 'Sales Navigator'],
    pedagogy: {
      mistake: "Utiliser un outil de veille concurrentielle pour scraper les abonnés d'un concurrent et leur envoyer un message type \"J'ai vu que vous suiviez [concurrent], on fait la même chose en mieux.\" Envoyé à des centaines de personnes. Le message est transparent, l'intention aussi. Ça brûle votre image et ferme la porte à tout futur partenariat.",
      arbitrage: "Spyer monitore les comptes concurrents et complémentaires — mais pour comprendre qui s'intéresse à quoi, pas pour spammer. L'IA identifie les profils pertinents. Sales Navigator remonte les changements de poste et signaux d'achat. Le contact viendra plus tard, avec un vrai contexte.",
    },
  },
  {
    num: '04',
    label: 'Profil analysé',
    layers: ['hybrid'] as const,
    desc: "Claude analyse le profil : titre, bio, posts récents, connexions communes. Résultat déposé dans un Google Sheet — contacter ou non, contexte clé, segment probable.",
    tools: ['Claude', 'Google Sheet'],
    pedagogy: {
      mistake: "Laisser l'IA générer une fiche prospect à partir du titre LinkedIn et de la bio. \"CEO, passionné d'innovation\" — et on part là-dessus. Le problème : la bio date de 2019, le poste a changé, et les 3 derniers posts parlent de tout autre chose que ce que l'IA a retenu.",
      arbitrage: "Claude analyse le profil complet — titre, bio, posts récents, connexions communes. Mais le résultat passe dans un Google Sheet avec un verdict : contacter ou non, contexte clé, segment probable. Un humain relit avant que le profil avance dans le pipe.",
    },
  },
  {
    num: '05',
    label: 'Scoring & ajustement',
    layers: ['methode'] as const,
    desc: "5 niveaux de maturité d'achat. On valide chaque profil et on ajuste les critères de ciblage au fil des retours terrain. Ce jugement recalibre Sales Navigator et Spyer en continu.",
    tools: ['Scoring', 'Feedback loop'],
    pedagogy: {
      mistake: "Mettre en place un scoring automatique une fois et ne plus y toucher. 6 mois plus tard, les critères ne correspondent plus au terrain. Les \"leads chauds\" ne répondent pas, les vrais acheteurs passent sous le radar.",
      arbitrage: "5 niveaux de maturité d'achat, recalibrés en continu avec les retours terrain. Le jugement humain nourrit l'IA, pas l'inverse.",
    },
  },
  {
    num: '06',
    label: 'Skill maison',
    layers: ['hybrid'] as const,
    desc: "Si vous le souhaitez : un skill Claude encodé sur votre expertise — jargon métier, objections connues, exemples de messages qui ont décroché des réponses. Il s'affine à chaque itération via le journal de bord.",
    tools: ['Claude Skill', 'Journal de bord'],
    pedagogy: {
      mistake: "Demander à ChatGPT de rédiger des messages de prospection \"en tant qu'expert [secteur].\" L'IA produit quelque chose de générique qui ressemble à de l'expertise sans en être. Le prospect du métier repère l'imposture en 3 secondes — mauvais jargon, exemples hors sujet, ton trop lisse.",
      arbitrage: "On construit un skill Claude entraîné sur votre expertise réelle — votre jargon métier, vos objections connues, vos messages qui ont déjà décroché des réponses. Il s'affine à chaque itération via le journal de bord. L'IA parle comme vous parce qu'elle a appris de vous.",
    },
  },
  {
    num: '07',
    label: 'Message co-rédigé',
    layers: ['hybrid'] as const,
    desc: "Claude propose un draft ancré dans le skill. La méthode impose les règles : 5 phrases max, 2e phrase = fait précis tiré du profil, jamais de pitch dans le premier DM.",
    tools: ['Claude', 'Règles méthode'],
    pedagogy: {
      mistake: "Générer 50 variantes d'un message avec l'IA et A/B tester au volume. \"Bonjour [Prénom], j'ai vu votre profil et je pense que [proposition de valeur générique].\" Le message a l'air personnalisé. Il ne l'est pas. Le prospect le sait — il en reçoit 12 par semaine.",
      arbitrage: "Claude propose un draft ancré dans le skill maison. La méthode impose des règles : 5 phrases max, la deuxième phrase cite un fait précis tiré du profil, jamais de pitch dans le premier DM. L'IA structure, la méthode contraint.",
    },
  },
  {
    num: '08',
    label: 'Validé et envoyé',
    layers: ['humain'] as const,
    desc: "Test du téléphone appliqué. Si ça ne sonnerait pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine.",
    tools: ['Validation humaine'],
    pedagogy: {
      mistake: "Automatiser l'envoi. Le message part sans relecture. Une faute de contexte, un mauvais prénom, une référence à un post que la personne n'a pas écrit. Un seul message raté peut griller un compte stratégique.",
      arbitrage: "Test du téléphone : si ça ne sonne pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine. C'est la seule étape où l'IA n'intervient pas.",
    },
  },
  {
    num: '09',
    label: 'RDV qualifié',
    layers: ['humain'] as const,
    desc: "On convertit la conversation en rendez-vous. Pas de pitch — une ouverture. Les leads tièdes qui ne sont pas prêts rentrent en nurturing vers la newsletter.",
    tools: ['Setter', 'Nurturing'],
    pedagogy: {
      mistake: "Pousser au rendez-vous dès le deuxième message. \"Seriez-vous disponible pour un call de 15 min ?\" Le prospect n'a encore rien demandé. Ça ressemble à ce que c'est : de la prospection déguisée en conversation.",
      arbitrage: "On convertit la conversation en rendez-vous quand le timing est bon. Pas de pitch — une ouverture. Les leads qui ne sont pas prêts rentrent en nurturing vers la newsletter. Forcer un RDV tiède, c'est perdre un client chaud de dans 3 mois.",
    },
  },
] as const
