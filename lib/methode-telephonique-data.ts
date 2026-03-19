import type { LayerKey } from './pipeline-data'

export const telephoniqueSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
}[] = [
  {
    num: '01',
    label: 'Réception du lead',
    layers: ['ia'] as const,
    desc: "Le lead entre via formulaire, lead magnet ou demande de contact. L\u2019IA le route automatiquement vers la file de qualification avec les informations cl\u00e9s extraites\u00a0: source, entreprise, besoin d\u00e9clar\u00e9.",
    tools: ['CRM', 'Routing automatique'],
  },
  {
    num: '02',
    label: 'Appel de qualification',
    layers: ['humain'] as const,
    desc: "Un sales d\u00e9di\u00e9, form\u00e9 \u00e0 la m\u00e9thode Challenger Sale par Abdelhay, appelle chaque lead entrant. Grille de scoring structur\u00e9e\u00a0: budget, autorit\u00e9, besoin, timing. L\u2019objectif\u00a0: comprendre le probl\u00e8me, pas pitcher.",
    tools: ['Challenger Sale', 'Grille de scoring'],
  },
  {
    num: '03',
    label: 'Routing',
    layers: ['methode'] as const,
    desc: "Chaque lead est rout\u00e9 selon son score\u00a0: les leads chauds partent directement en RDV, les ti\u00e8des rejoignent la newsletter pour continuer la relation, les froids entrent dans une s\u00e9quence de nurturing automatis\u00e9e. Z\u00e9ro lead perdu.",
    tools: ['Scoring', 'Routing'],
  },
  {
    num: '04',
    label: 'Feedback loop',
    layers: ['hybrid'] as const,
    desc: "Les donn\u00e9es terrain recalibrent le scoring chaque semaine. Quels crit\u00e8res pr\u00e9disent un RDV\u00a0? Quels signaux trompent\u00a0? Le syst\u00e8me s\u2019affine \u00e0 chaque cycle.",
    tools: ['Feedback loop', 'Recalibrage'],
  },
] as const
