export interface OfferFeature {
  title: string
  detail: string
}

export interface OfferPricing {
  type: 'fixed' | 'custom'
  launch?: { amount: number; label: string; detail: string }
  subscription?: { amount: number; period: string; detail: string }
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
      launch: { amount: 500, label: 'Mois 1 \u2014 Lancement', detail: 'Tout inclus\u00a0: setter d\u00e9di\u00e9, setup outils, ciblage, premiers messages, premiers RDV.' },
      subscription: { amount: 1000, period: '/ mois', detail: 'Pipeline \u00e0 plein r\u00e9gime + prime par RDV livr\u00e9.' },
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
      type: 'custom',
      customLabel: 'Sur devis',
      customDetail: 'Tarif adapt\u00e9 au volume de leads entrants et \u00e0 la complexit\u00e9 de qualification.',
    },
    cta: { label: 'Discuter de mon volume \u2192', href: '#contact' },
  },
  {
    id: 'nurturing',
    slug: 'nurturing',
    eyebrow: 'Setup Nurturing',
    color: '#C87533',
    situation: 'J\u2019ai une base \u00e9norme',
    description:
      'Des milliers de contacts, actifs ou dormants. Z\u00e9ro syst\u00e8me pour scorer, nourrir et convertir.',
    features: [
      { title: 'Scoring comportemental', detail: 'Engagement, r\u00e9cence, intent\u00a0: chaque lead a un score' },
      { title: 'S\u00e9quences personnalis\u00e9es', detail: 'Contenu adapt\u00e9 au niveau de maturit\u00e9 du lead' },
      { title: 'Routing vers appel', detail: 'Les leads chauds arrivent directement dans l\u2019agenda' },
    ],
    methodeLink: '/methode/nurturing',
    pricing: {
      type: 'fixed',
      launch: { amount: 1500, label: 'Mise en place', detail: 'Construction du syst\u00e8me sur votre stack existante. Puis prime par RDV livr\u00e9.' },
    },
    cta: { label: 'Construire mon syst\u00e8me \u2192', href: '#contact' },
  },
]
