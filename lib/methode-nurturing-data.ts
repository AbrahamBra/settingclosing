import type { LayerKey } from './pipeline-data'

export const nurturingSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
}[] = [
  {
    num: '01',
    label: 'Scoring comportemental',
    layers: ['ia'] as const,
    desc: "L\u2019IA analyse votre base existante\u00a0: engagement, r\u00e9cence, interactions pass\u00e9es, signaux d\u2019intent. Chaque contact re\u00e7oit un score de maturit\u00e9 qui d\u00e9termine son parcours.",
    tools: ['Scoring', 'Analyse comportementale'],
  },
  {
    num: '02',
    label: 'Segmentation',
    layers: ['methode'] as const,
    desc: "D\u00e9coupage de la base par niveau de maturit\u00e9 du funnel. Les contacts froids, ti\u00e8des et chauds re\u00e7oivent des parcours diff\u00e9rents. La m\u00e9thode structure les crit\u00e8res de passage d\u2019un segment \u00e0 l\u2019autre.",
    tools: ['Segmentation', 'Funnel de maturit\u00e9'],
  },
  {
    num: '03',
    label: 'S\u00e9quences personnalis\u00e9es',
    layers: ['hybrid'] as const,
    desc: "Contenu adapt\u00e9 au niveau de maturit\u00e9 de chaque segment. Newsletters, webinars, contenus exclusifs. Upsell vers une communaut\u00e9 Skool ou une offre low ticket pour acc\u00e9l\u00e9rer la conversion.",
    tools: ['S\u00e9quences email', 'Contenu adapt\u00e9'],
  },
  {
    num: '04',
    label: 'Routing vers appel',
    layers: ['humain'] as const,
    desc: "Les leads dont le score franchit le seuil arrivent directement dans l\u2019agenda commercial. Le syst\u00e8me s\u2019affine \u00e0 chaque cycle\u00a0: plus le temps passe, plus la machine est pr\u00e9cise.",
    tools: ['Routing automatique', 'Agenda commercial'],
  },
] as const
