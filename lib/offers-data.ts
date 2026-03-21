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
    situation: 'Je n\u2019ai pas de leads',
    description:
      'Pas d\u2019audience, pas de pipe. On prospecte pour vous sur LinkedIn avec un ciblage par signaux d\u2019achat.',
    features: [
      { title: 'Ciblage signal-based', detail: 'Intent, timing, changement de poste' },
      { title: '\u22483 RDV / semaine', detail: 'Avec les m\u00eames 100 invitations LinkedIn' },
      { title: 'Skill IA sur-mesure', detail: 'Messages calibr\u00e9s sur votre march\u00e9' },
    ],
    methodeLink: '/methode/setting-linkedin',
    pricing: {
      type: 'fixed',
      setup: { amount: 490, label: 'Setup', detail: 'Cadrage ICP, setup outils, r\u00e9daction des s\u00e9quences.' },
      subscription: { amount: 790, period: '/ mois', detail: '790\u00a0\u20ac/mois identique sur les 3 premiers mois.' },
      bonus: 'Prime par RDV : 50\u00a0\u20ac (ticket <\u00a05k), 150\u00a0\u20ac (5\u201315k), 250\u00a0\u20ac (>\u00a015k)',
    },
    guarantee: 'Moins de 5 RDV qualifi\u00e9s livr\u00e9s dans le mois\u00a0? Le mois suivant est offert.',
    noCommitment: true,
    cta: { label: 'D\u00e9l\u00e9guer mon setting \u2192', href: '#contact' },
  },
  {
    id: 'setting-telephonique',
    slug: 'setting-telephonique',
    eyebrow: 'Setting t\u00e9l\u00e9phonique',
    color: '#FBBF24',
    situation: 'J\u2019ai des leads mais personne pour les qualifier',
    description:
      'Vos lead magnets performent, votre contenu g\u00e9n\u00e8re de l\u2019engagement. Mais personne ne r\u00e9pond aux DMs, ne qualifie par t\u00e9l\u00e9phone et ne route vers un closing.',
    features: [
      { title: 'R\u00e9ponse aux leads LinkedIn', detail: 'DMs, commentaires de posts et lead magnets g\u00e9r\u00e9s pour vous' },
      { title: 'Qualification t\u00e9l\u00e9phonique', detail: 'Un sales d\u00e9di\u00e9 appelle chaque lead entrant' },
      { title: 'Tri intelligent', detail: 'Chaud \u2192 RDV, ti\u00e8de \u2192 newsletter, froid \u2192 nurturing' },
      { title: 'Z\u00e9ro lead perdu', detail: 'Chaque contact est rout\u00e9, rien ne tombe dans l\u2019oubli' },
    ],
    methodeLink: '/methode/setting-telephonique',
    pricing: {
      type: 'fixed',
      setup: { amount: 490, label: 'Setup', detail: 'Script, formation, configuration CRM et routing.' },
      subscription: { amount: 690, period: '/ mois', detail: '690\u00a0\u20ac/mois par tranche d\u20191h/jour. 2h/jour = 1\u00a0380\u00a0\u20ac/mois. Ajustable.' },
      bonus: 'Prime par RDV : 25\u00a0\u20ac (ticket <\u00a05k), 100\u00a0\u20ac (5\u201315k), 200\u00a0\u20ac (>\u00a015k)',
    },
    cta: { label: 'Obtenir un devis \u2192', href: '#contact' },
  },
  {
    id: 'nurturing',
    slug: 'nurturing',
    eyebrow: 'Setup Nurturing',
    color: '#C87533',
    situation: 'J\u2019ai une grosse base, z\u00e9ro revenu dessus',
    description:
      'Des milliers de contacts qui ne rapportent rien. On fait remonter les leads les plus chauds et on ouvre des revenus low ticket sur le reste.',
    features: [
      { title: 'Scoring comportemental', detail: 'Engagement, r\u00e9cence, intent\u00a0: chaque lead a un score' },
      { title: 'S\u00e9quences personnalis\u00e9es', detail: 'Contenu adapt\u00e9 au niveau de maturit\u00e9 du lead' },
      { title: 'Routing vers appel', detail: 'Les leads chauds arrivent directement dans l\u2019agenda' },
    ],
    methodeLink: '/methode/nurturing',
    pricing: {
      type: 'fixed',
      setup: { amount: 2490, label: 'Construction', detail: 'Scoring, s\u00e9quences, workflows automatis\u00e9s. ~4 semaines.' },
      subscription: { amount: 590, period: '/ mois \u00d7 3', detail: 'Affinage continu, autonomie apr\u00e8s M3.' },
      bonus: 'Prime par RDV : 50\u00a0\u20ac (ticket <\u00a05k), 150\u00a0\u20ac (5\u201315k), 250\u00a0\u20ac (>\u00a015k)',
    },
    cta: { label: 'Construire mon syst\u00e8me \u2192', href: '#contact' },
  },
]
