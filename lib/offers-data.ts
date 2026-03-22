export interface OfferFeature {
  title: string
  detail: string
}

export interface OfferPricing {
  type: 'fixed' | 'custom'
  setup?: { amount: number; label: string; detail: string }
  launch?: { amount: number; label: string; detail: string }
  subscription?: { amount: number; period: string; detail: string }
  bonus?: string
  customLabel?: string
  customDetail?: string
}

export interface Offer {
  id: string
  slug: string
  eyebrow: string
  color: string
  phase: 1 | 2 | 3
  phaseLabel: string
  phaseSituation: string
  situation: string
  description: string
  features: OfferFeature[]
  methodeLink: string
  pricing: OfferPricing
  guarantee?: string
  noCommitment?: boolean
  cta: { label: string; href: string }
}

export const offers: Offer[] = [
  {
    id: 'setting-linkedin',
    slug: 'setting-linkedin',
    eyebrow: 'Setting LinkedIn',
    color: '#A78BFA',
    phase: 1,
    phaseLabel: 'Lancer',
    phaseSituation: 'Tu as une offre mais z\u00e9ro pipeline',
    situation: 'Tu n\u2019as pas de leads',
    description:
      'On prospecte pour toi sur LinkedIn avec un ciblage par signaux d\u2019achat. Tu te concentres sur le closing.',
    features: [
      { title: 'Ciblage signal-based', detail: 'Intent, timing, changement de poste' },
      { title: '\u22483 RDV / semaine', detail: 'Avec les m\u00eames 100 invitations LinkedIn' },
      { title: 'Skill IA sur-mesure', detail: 'Messages calibr\u00e9s sur ton march\u00e9' },
      { title: 'Base de connaissance d\u00e9di\u00e9e', detail: 'L\u2019IA apprend ton offre, ton march\u00e9, ton ton' },
    ],
    methodeLink: '/methode/setting-linkedin',
    pricing: {
      type: 'fixed',
      setup: { amount: 0, label: 'Setup offert', detail: 'Cadrage ICP, setup outils, r\u00e9daction des s\u00e9quences.' },
      subscription: { amount: 790, period: '/ mois', detail: '790\u00a0\u20ac/mois. Sans engagement.' },
      bonus: 'Prime par RDV : 50\u00a0\u20ac (ticket <\u00a05k), 150\u00a0\u20ac (5\u201315k), 250\u00a0\u20ac (>\u00a015k)',
    },
    guarantee: 'Moins de 5 RDV qualifi\u00e9s livr\u00e9s dans le mois\u00a0? Le mois suivant est offert.',
    noCommitment: true,
    cta: { label: 'D\u00e9marrer\u00a0\u2192', href: '#contact' },
  },
  {
    id: 'setting-telephonique',
    slug: 'setting-telephonique',
    eyebrow: 'Setting t\u00e9l\u00e9phonique',
    color: '#FBBF24',
    phase: 2,
    phaseLabel: 'Qualifier',
    phaseSituation: 'Tu as des leads mais pas le temps de qualifier',
    situation: 'Tu as des leads mais personne pour les qualifier',
    description:
      'Tes lead magnets performent, ton contenu g\u00e9n\u00e8re de l\u2019engagement. On qualifie par t\u00e9l\u00e9phone et on route vers le closing.',
    features: [
      { title: 'R\u00e9ponse aux leads LinkedIn', detail: 'DMs, commentaires de posts et lead magnets g\u00e9r\u00e9s pour toi' },
      { title: 'Qualification t\u00e9l\u00e9phonique', detail: 'Un sales d\u00e9di\u00e9 appelle chaque lead entrant' },
      { title: 'Tri intelligent', detail: 'Chaud \u2192 RDV, ti\u00e8de \u2192 newsletter, froid \u2192 nurturing' },
      { title: 'Z\u00e9ro lead perdu', detail: 'Chaque contact est rout\u00e9, rien ne tombe dans l\u2019oubli' },
    ],
    methodeLink: '/methode/setting-telephonique',
    pricing: {
      type: 'fixed',
      setup: { amount: 490, label: 'Setup', detail: 'Script, formation, configuration CRM et routing.' },
      subscription: { amount: 175, period: '/ demi-journ\u00e9e', detail: '175\u00a0\u20ac/demi-journ\u00e9e. 2-4 demi-journ\u00e9es/mois en moyenne.' },
      bonus: 'Prime par RDV : 25\u00a0\u20ac (ticket <\u00a05k), 100\u00a0\u20ac (5\u201315k), 200\u00a0\u20ac (>\u00a015k)',
    },
    cta: { label: 'Ajouter\u00a0\u2192', href: '#contact' },
  },
  {
    id: 'setting-newsletter',
    slug: 'setting-newsletter',
    eyebrow: 'Setting Newsletter',
    color: '#C87533',
    phase: 3,
    phaseLabel: 'Scaler',
    phaseSituation: 'Tu as une audience, transforme-la en clients',
    situation: 'Tu as une grosse base, z\u00e9ro revenu dessus',
    description:
      'Des milliers de contacts qui ne rapportent rien. On op\u00e8re ta newsletter d\u2019expert \u2014 contenu segment\u00e9, scoring, routing automatique des leads chauds.',
    features: [
      { title: 'Newsletter thought leadership', detail: '2 \u00e9ditions/mois en ton nom, dans ta voix. Tu ne r\u00e9diges rien.' },
      { title: '4 contenus par cycle', detail: 'G\u00e9n\u00e9rale + TOFU + MOFU + BOFU\u00a0: chaque lecteur re\u00e7oit ce qui correspond \u00e0 sa maturit\u00e9' },
      { title: 'Scoring & routing automatique', detail: 'Lead chaud d\u00e9tect\u00e9 \u2192 alerte dans l\u2019agenda, pr\u00eat \u00e0 closer' },
    ],
    methodeLink: '/methode/setting-newsletter',
    pricing: {
      type: 'fixed',
      setup: { amount: 0, label: 'Setup inclus', detail: 'Construction int\u00e9gr\u00e9e : interview voix, Skill IA, ligne \u00e9ditoriale, scoring, config outil.' },
      subscription: { amount: 990, period: '/ mois', detail: '990\u00a0\u20ac/mois tout compris. Engagement 3 mois, puis sans engagement.' },
      bonus: 'Prime par RDV\u00a0: 50\u00a0\u20ac (ticket\u00a0<\u00a05k), 150\u00a0\u20ac (5\u201315k), 250\u00a0\u20ac (>\u00a015k)',
    },
    guarantee: 'Garantie RDV proportionnelle \u00e0 ta base. Si on ne livre pas, M4 offert.',
    noCommitment: false,
    cta: { label: 'Passer \u00e0 l\u2019\u00e9chelle\u00a0\u2192', href: '#contact' },
  },
]
