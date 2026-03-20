// Shared pipeline data used by OfferLadder and /methode page

export const layerConfig = {
  ia: { label: 'IA', text: 'text-semantic-ia', bg: 'bg-semantic-ia/10', border: 'border-semantic-ia/20' },
  methode: { label: 'Méthode', text: 'text-semantic-methode', bg: 'bg-semantic-methode/10', border: 'border-semantic-methode/20' },
  hybrid: { label: 'IA + Méthode', text: 'text-semantic-hybrid', bg: 'bg-semantic-hybrid/10', border: 'border-semantic-hybrid/20' },
  humain: { label: 'Humain', text: 'text-semantic-humain', bg: 'bg-semantic-humain/10', border: 'border-semantic-humain/20' },
} as const

export type LayerKey = keyof typeof layerConfig

export const settingSteps = [
  {
    num: '01',
    label: 'Stratégie & ciblage',
    layers: ['hybrid'] as const,
    desc: "ICP défini avec l'IA. Comptes à monitorer sélectionnés (concurrents, complémentaires). Filtres Sales Navigator configurés : fonctions, industrie, taille, triggers récents. On valide chaque cible — c'est la base de tout le reste.",
    tools: ['Sales Navigator', 'ICP'],
    pedagogy: {
      mistake: "LinkedIn limite à ~100 connexions par semaine. Importer 1 000 profils Sales Navigator filtrés \"directeur + France + SaaS\" et lancer une séquence dessus, c'est griller son quota hebdomadaire sur des profils qui n'ont montré aucun signal d'achat. Pas de signal, pas de contexte pour le message, pas de réponse.",
      arbitrage: "On définit l'ICP sur 5 niveaux de maturité. Seuls les profils à partir du 3e niveau entrent dans le pipe. 100 connexions/semaine sur des profils qualifiés, c'est 100 conversations possibles. Sur des profils au hasard, c'est 3.",
    },
  },
  {
    num: '02',
    label: 'Signaux inbound',
    layers: ['ia'] as const,
    desc: "Reactin surveille chaque interaction sur vos posts et ceux de vos concurrents. L'IA identifie qui a réagi, quand, avec quel type de contenu. On traque aussi les lead magnets à succès pour maximiser la prise de RDV — sans scoring, la messagerie devient ing\u00e9rable en 48h. LinkedIn limite les demandes d\u2019ajout par semaine, donc chaque cr\u00e9neau compte.",
    tools: ['Reactin', 'Lead magnets', 'Scoring'],
    pedagogy: {
      mistake: "Scraper toutes les interactions sur vos posts LinkedIn et les exporter dans un tableur. 200 likes cette semaine. Et après ? Un like n'est pas un signal d'achat. Un commentaire qui décrit un problème concret, oui. Sans taxonomie de signaux — inbound (réactions à vos posts) vs tiers (réactions sur les posts de vos concurrents) — vous noyez les vrais signaux dans le bruit.",
      arbitrage: "Reactin distingue le type de signal, pas juste la quantité. Un CEO qui commente un post concurrent en décrivant un problème = signal fort, il passe en priorité. Un étudiant qui like = bruit, il ne rentre pas dans le pipe. Le scoring trie avant que vous n'ouvriez la messagerie.",
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
      arbitrage: "Spyer monitore les comptes concurrents et complémentaires pour cartographier qui s'intéresse à quoi dans votre marché. Un profil qui réagit à 3 posts d'un concurrent en 2 semaines est en phase d'exploration active. Le contact viendra quand on aura quelque chose de pertinent à dire, pas avant.",
    },
  },
  {
    num: '04',
    label: 'Profil analysé',
    layers: ['hybrid'] as const,
    desc: "Claude analyse le profil : titre, bio, posts récents, connexions communes. Résultat déposé dans un Google Sheet — contacter ou non, contexte clé, segment probable.",
    tools: ['Claude', 'Google Sheet'],
    pedagogy: {
      mistake: "Laisser l'IA générer une fiche prospect à partir du titre LinkedIn et de la bio. \"CEO, passionné d'innovation\" — et on part là-dessus. La bio date de 2019, le poste a changé, et les 3 derniers posts parlent de tout autre chose que ce que l'IA a retenu.",
      arbitrage: "Claude analyse le profil complet et identifie le levier d'achat dominant : est-ce que ce prospect cherche de la sécurité, du confort ou du ROI mesurable ? Le message change du tout au tout. Un profil \"Sécurité\" reçoit des preuves et des références. Un profil \"Nouveauté\" reçoit un angle sur ce qui a changé dans son marché.",
    },
  },
  {
    num: '05',
    label: 'Scoring & ajustement',
    layers: ['methode'] as const,
    desc: "5 niveaux de maturité d'achat. On valide chaque profil et on ajuste les critères de ciblage au fil des retours terrain. Ce jugement recalibre Sales Navigator et Spyer en continu.",
    tools: ['Scoring', 'Feedback loop'],
    pedagogy: {
      mistake: "Configurer un scoring automatique basé sur le titre du poste et la taille de l'entreprise, et ne plus y toucher. 6 mois plus tard, les \"leads chauds\" ne répondent pas. Le scoring n'a jamais intégré ce que le terrain a appris : que les CTOs en scale-up répondent à un angle différent des VP Sales en grand groupe. Que \"trop cher\" cette semaine signifie que la discovery est incomplète, pas que le prix est trop haut.",
      arbitrage: "5 niveaux de maturité, recalibrés chaque semaine avec les retours terrain. \"Cette semaine, 3 prospects ont décroché sur l'angle X mais pas sur Y\" — ça remonte dans les filtres Sales Navigator et dans le skill Claude. Le jugement humain nourrit l'IA, pas l'inverse.",
    },
  },
  {
    num: '06',
    label: 'Skill maison',
    layers: ['hybrid'] as const,
    desc: "Si vous le souhaitez : un skill Claude encodé sur votre expertise — jargon métier, objections connues, exemples de messages qui ont décroché des réponses. Il s'affine à chaque itération via le journal de bord.",
    tools: ['Claude Skill', 'Journal de bord'],
    pedagogy: {
      mistake: "Demander à ChatGPT de rédiger \"en tant qu'expert cybersécurité.\" L'IA invente un jargon plausible mais faux. Elle ne sait pas que vos prospects disent \"stack\" et pas \"infrastructure\", qu'ils se plaignent de la \"dette technique\" et pas de la \"complexité opérationnelle.\" Le prospect du métier repère l'imposture en 3 secondes.",
      arbitrage: "Le skill se construit dans le temps. Mois 1, il est générique. Mois 2, il a intégré les vrais mots de vos prospects, les objections qui reviennent (\"on a déjà un prestataire\", \"pas le bon timing\"), et les formulations qui ont décroché des réponses. Apr\u00e8s 2 mois, le skill conna\u00eet vos prospects mieux qu\u2019un commercial qui d\u00e9barque.",
    },
  },
  {
    num: '07',
    label: 'Message co-rédigé',
    layers: ['hybrid'] as const,
    desc: "Claude propose un draft ancré dans le skill. La méthode impose les règles : 5 phrases max, 2e phrase = fait précis tiré du profil, jamais de pitch dans le premier DM.",
    tools: ['Claude', 'Règles méthode'],
    pedagogy: {
      mistake: "Générer 50 variantes et A/B tester au volume. \"Bonjour [Prénom], j'ai vu votre profil et je pense que [proposition de valeur].\" Il en reçoit 12 par semaine. Le problème n'est pas le message en soi : 80% des commerciaux abandonnent après 2-3 contacts, alors qu'il en faut 8 en moyenne avant d'obtenir un RDV.",
      arbitrage: "La méthode impose 5 phrases max, la 2e phrase cite un fait précis tiré du profil, jamais de pitch dans le premier DM. Mais surtout, on planifie la séquence complète : message 1 = ouverture, relance à J+5, interaction sur un post entre-temps, nouveau message à J+12. L\u2019IA propose la s\u00e9quence, les r\u00e8gles de m\u00e9thode d\u00e9cident si elle tient la route.",
    },
  },
  {
    num: '08',
    label: 'Validé et envoyé',
    layers: ['humain'] as const,
    desc: "Test du téléphone appliqué. Si ça ne sonnerait pas naturel dit à voix haute, on réécrit. Aucun message ne part sans validation humaine.",
    tools: ['Validation humaine'],
    pedagogy: {
      mistake: "Automatiser l'envoi. Le message part sans relecture. Un mauvais prénom, une référence à un post que la personne n'a pas écrit. La coquille se corrige. Le ton, non. Un message qui sent l'automatisation grille votre image auprès d'un décideur que vous mettrez 6 mois à recroiser.",
      arbitrage: "Test du téléphone : si ça ne sonne pas naturel dit à voix haute, on réécrit. L'IA n'intervient plus ici. Un humain valide chaque envoi. C\u2019est la seule \u00e9tape 100% manuelle. Si le message ne passe pas le test, il ne part pas.",
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
      arbitrage: "On convertit la conversation en rendez-vous quand le timing est bon. Pas de pitch, une ouverture. Ce qui compte ensuite, c'est le reporting : quels messages ont décroché des réponses et quels profils ont bloqué. Ce retour recalibre tout le pipe.",
    },
  },
] as const
