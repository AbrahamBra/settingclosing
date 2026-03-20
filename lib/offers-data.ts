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
      launch: { amount: 790, label: 'Mois 1-2 \u2014 Calibration', detail: 'Phase de rodage\u00a0: ciblage, tests, premiers RDV.' },
      subscription: { amount: 1290, period: '/ mois', detail: 'Pipeline \u00e0 plein r\u00e9gime d\u00e8s le mois 3.' },
      bonus: '+50\u00a0\u20ac par RDV au-del\u00e0 de 15',
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
      'Les lead magnets performent, les formulaires se remplissent. Mais personne ne d\u00e9croche pour qualifier et router.',
    features: [
      { title: 'Qualification t\u00e9l\u00e9phonique', detail: 'Un sales d\u00e9di\u00e9 appelle chaque lead entrant' },
      { title: 'Tri intelligent', detail: 'Chaud \u2192 RDV, ti\u00e8de \u2192 newsletter, froid \u2192 nurturing' },
      { title: 'Z\u00e9ro lead perdu', detail: 'Chaque contact est rout\u00e9, rien ne tombe dans l\u2019oubli' },
    ],
    methodeLink: '/methode/setting-telephonique',
    pricing: {
      type: 'fixed',
      setup: { amount: 290, label: 'Setup', detail: 'Script, formation, configuration CRM et routing.' },
      subscription: { amount: 690, period: '/ mois', detail: 'Qualification de vos leads entrants. 490\u00a0\u20ac/mois en compl\u00e9ment du Setting LinkedIn.' },
    },
    cta: { label: 'Obtenir un devis \u2192', href: '#contact' },
  },
  {
    id: 'nurturing',
    slug: 'nurturing',
    eyebrow: 'Setup Nurturing',
    color: '#C87533',
    situation: 'J\u2019ai une base \u00e9norme',
    description:
      'Des milliers de contacts, actifs ou dormants. Z\u00e9ro syst\u00e8me pour les exploiter.',
    features: [
      { title: 'Scoring comportemental', detail: 'Engagement, r\u00e9cence, intent\u00a0: chaque lead a un score' },
      { title: 'S\u00e9quences personnalis\u00e9es', detail: 'Contenu adapt\u00e9 au niveau de maturit\u00e9 du lead' },
      { title: 'Routing vers appel', detail: 'Les leads chauds arrivent directement dans l\u2019agenda' },
    ],
    methodeLink: '/methode/nurturing',
    pricing: {
      type: 'fixed',
      setup: { amount: 1990, label: 'Construction', detail: 'Scoring, s\u00e9quences, workflows automatis\u00e9s. ~4 semaines.' },
      subscription: { amount: 490, period: '/ mois \u00d7 3', detail: 'Optimisation + 80-100\u00a0\u20ac par RDV g\u00e9n\u00e9r\u00e9. Autonomie apr\u00e8s M3.' },
    },
    cta: { label: 'Construire mon syst\u00e8me \u2192', href: '#contact' },
  },
]
