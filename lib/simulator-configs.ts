export interface SimulatorInput {
  id: string
  label: string
  min: number
  max: number
  step: number
  default: number
  unit?: string
  formatValue?: (v: number) => string
}

export interface SimulatorResultItem {
  label: string
  value: string
  highlight?: boolean
}

export interface SimulatorResults {
  items: SimulatorResultItem[]
  roi: number
  roiLabel: string
}

export interface SimulatorPreset {
  id: string
  label: string
  note: string
  values: Record<string, number>
}

export interface SimulatorConfig {
  offerId: string
  color: string
  inputs: SimulatorInput[]
  presets?: SimulatorPreset[]
  hypotheses: string[]
  conversionStat: string
  setupAmount: number
  hideSetup?: boolean
  compute: (values: Record<string, number>, includeSetup: boolean) => SimulatorResults
}

function formatEur(n: number): string {
  return n.toLocaleString('fr-FR', { maximumFractionDigits: 0 }) + '\u00a0€'
}

// ── Setting LinkedIn ─────────────────────────────────
const linkedinConfig: SimulatorConfig = {
  offerId: 'setting-linkedin',
  color: '#A78BFA',
  inputs: [
    {
      id: 'rdvParSemaine',
      label: 'RDV qualifiés / semaine',
      min: 1,
      max: 4,
      step: 1,
      default: 2,
      formatValue: (v) => `${v}`,
    },
    {
      id: 'ticketMoyen',
      label: 'Ticket moyen',
      min: 1000,
      max: 50000,
      step: 500,
      default: 5000,
      unit: '€',
      formatValue: (v) => formatEur(v),
    },
    {
      id: 'tauxClosing',
      label: 'Taux de closing',
      min: 10,
      max: 50,
      step: 5,
      default: 25,
      unit: '%',
      formatValue: (v) => `${v}\u00a0%`,
    },
  ],
  hypotheses: [
    'Prime par RDV : 50\u00a0€ (<5k), 150\u00a0€ (5-15k), 250\u00a0€ (>15k)',
  ],
  conversionStat: 'En moyenne : 1 à 4 RDV qualifiés par semaine selon le marché',
  setupAmount: 0,
  compute(values, includeSetup) {
    const rdvParMois = values.rdvParSemaine * 4
    const prime = values.ticketMoyen < 5000 ? 50 : values.ticketMoyen <= 15000 ? 150 : 250
    const coutMensuel = 790 + prime * rdvParMois
    const coutTotal = coutMensuel
    const clientsGagnes = rdvParMois * (values.tauxClosing / 100)
    const revenuMensuel = clientsGagnes * values.ticketMoyen
    const roi = coutTotal > 0 ? revenuMensuel / coutTotal : 0

    return {
      items: [
        { label: 'Coût mensuel estimé', value: formatEur(coutTotal) },
        { label: 'Clients gagnés / mois', value: clientsGagnes.toFixed(1) },
        { label: 'Revenu potentiel', value: formatEur(revenuMensuel), highlight: true },
      ],
      roi,
      roiLabel: `Pour 1\u00a0€ investi, tu récupères ${roi.toFixed(1)}\u00a0€`,
    }
  },
}

// ── Setting Téléphonique ─────────────────────────────
const telephoneConfig: SimulatorConfig = {
  offerId: 'setting-telephonique',
  color: '#FBBF24',
  presets: [
    {
      id: 'optin',
      label: 'Opt-in qualifié',
      note: 'Ils ont demandé à être rappelés. Meilleur taux de conversion.',
      values: { tauxRDV: 25, tauxClosing: 20 },
    },
    {
      id: 'contenu',
      label: 'Contenu',
      note: 'Téléchargement, webinar, engagement. Intention moyenne.',
      values: { tauxRDV: 10, tauxClosing: 12 },
    },
    {
      id: 'concours',
      label: 'Jeu concours',
      note: 'Volume élevé, intention faible. Beaucoup de tri, peu de RDV.',
      values: { tauxRDV: 3, tauxClosing: 8 },
    },
  ],
  inputs: [
    {
      id: 'leadsParMois',
      label: 'Leads entrants / mois',
      min: 10,
      max: 500,
      step: 10,
      default: 50,
      formatValue: (v) => `${v}`,
    },
    {
      id: 'ticketMoyen',
      label: 'Ticket moyen',
      min: 1000,
      max: 50000,
      step: 500,
      default: 5000,
      unit: '€',
      formatValue: (v) => formatEur(v),
    },
    {
      id: 'tauxRDV',
      label: 'Taux de prise de RDV',
      min: 3,
      max: 40,
      step: 1,
      default: 12,
      unit: '%',
      formatValue: (v) => `${v}\u00a0%`,
    },
    {
      id: 'tauxClosing',
      label: 'Taux de closing',
      min: 5,
      max: 40,
      step: 1,
      default: 12,
      unit: '%',
      formatValue: (v) => `${v}\u00a0%`,
    },
  ],
  hypotheses: [
    '~15 min par lead (8 min d\u2019échange + composition + notes CRM)',
    'Max 15 leads traités par demi-journée (3h de calls effectifs)',
    'Facturation par demi-journée (175\u00a0€)',
  ],
  conversionStat: 'Les taux varient selon la source : opt-in qualifié > contenu > jeu concours',
  setupAmount: 490,
  compute(values, includeSetup) {
    const tauxRDV = values.tauxRDV / 100
    const tauxClosing = values.tauxClosing / 100
    const halfDayRate = 175
    const minParLead = 15
    const leadsParDemiJournee = 15

    const rdvParMois = values.leadsParMois * tauxRDV
    const tempsHeures = (values.leadsParMois * minParLead) / 60
    // Cap par capacité : max 15 leads par demi-journée
    const demiJourneesParTemps = Math.ceil(values.leadsParMois / leadsParDemiJournee)
    const demiJournees = demiJourneesParTemps
    const prime = values.ticketMoyen < 5000 ? 25 : values.ticketMoyen <= 15000 ? 100 : 200
    const coutMensuel = (demiJournees * halfDayRate) + (prime * rdvParMois)
    const setupAmorti = includeSetup ? Math.round(490 / 3) : 0
    const coutTotal = coutMensuel + setupAmorti
    const clientsGagnes = rdvParMois * tauxClosing
    const revenuMensuel = clientsGagnes * values.ticketMoyen
    const roi = coutTotal > 0 ? revenuMensuel / coutTotal : 0

    return {
      items: [
        { label: 'Demi-journées nécessaires', value: `${demiJournees} (~${tempsHeures.toFixed(0)}h de calls)` },
        { label: 'RDV qualifiés générés', value: rdvParMois.toFixed(0) },
        { label: 'Coût mensuel estimé', value: formatEur(coutTotal) },
        { label: 'Revenu potentiel', value: formatEur(revenuMensuel), highlight: true },
      ],
      roi,
      roiLabel: `Pour 1\u00a0€ investi, tu récupères ${roi.toFixed(1)}\u00a0€`,
    }
  },
}

// ── Setting Newsletter ──────────────────────────────
const newsletterConfig: SimulatorConfig = {
  offerId: 'setting-newsletter',
  color: '#C87533',
  inputs: [
    {
      id: 'tailleBase',
      label: 'Taille de ta base',
      min: 500,
      max: 25000,
      step: 500,
      default: 3000,
      formatValue: (v) => v.toLocaleString('fr-FR'),
    },
    {
      id: 'ticketMoyen',
      label: 'Ticket moyen',
      min: 1000,
      max: 50000,
      step: 500,
      default: 5000,
      unit: '€',
      formatValue: (v) => formatEur(v),
    },
    {
      id: 'tauxClosing',
      label: 'Taux de closing post-RDV',
      min: 10,
      max: 50,
      step: 5,
      default: 30,
      unit: '%',
      formatValue: (v) => `${v}\u00a0%`,
    },
  ],
  hypotheses: [
    '990\u00a0\u20ac/mois tout compris (construction + op\u00e9ration)',
    'Engagement 3 mois, puis sans engagement',
    'Estimation RDV bas\u00e9e sur la taille de base et les benchmarks',
    'Prime par RDV : 50\u00a0\u20ac (<5k), 150\u00a0\u20ac (5-15k), 250\u00a0\u20ac (>15k)',
  ],
  conversionStat: 'Funnels par thematique et maturite, adaptes a ta base',
  setupAmount: 0,
  compute(values) {
    const base = values.tailleBase

    // Estimation realiste de RDV sur 3 mois (+ garantie minimum)
    const estimation = base < 3000
      ? { rdv: 6, garantie: 3, label: '3 RDV garantis, ~6 estimes' }
      : base < 7000
        ? { rdv: 12, garantie: 5, label: '5 RDV garantis, ~12 estimes' }
        : base < 15000
          ? { rdv: 20, garantie: 10, label: '10 RDV garantis, ~20 estimes' }
          : { rdv: 25, garantie: 10, label: '10 RDV garantis, ~25 estimes' }

    const tauxClosing = values.tauxClosing / 100
    const clientsSur3Mois = estimation.rdv * tauxClosing
    const revenuSur3Mois = clientsSur3Mois * values.ticketMoyen

    // Cout : 990€/mo × 3 + primes sur RDV estimes
    const prime = values.ticketMoyen < 5000 ? 50 : values.ticketMoyen <= 15000 ? 150 : 250
    const coutAbo3Mois = 990 * 3
    const coutPrimes = prime * estimation.rdv
    const coutTotal3Mois = coutAbo3Mois + coutPrimes

    const roi = coutTotal3Mois > 0 ? revenuSur3Mois / coutTotal3Mois : 0

    return {
      items: [
        { label: 'Abonnement / 3 mois', value: formatEur(coutAbo3Mois) },
        { label: 'Primes RDV estimees', value: formatEur(coutPrimes) },
        { label: 'Cout total / 3 mois', value: formatEur(coutTotal3Mois) },
        { label: 'RDV estimes / 3 mois', value: `~${estimation.rdv} (${estimation.garantie} garantis)` },
        { label: 'Clients potentiels', value: clientsSur3Mois.toFixed(1) },
        { label: 'Revenu potentiel / 3 mois', value: formatEur(revenuSur3Mois), highlight: true },
      ],
      roi,
      roiLabel: `Pour 1\u00a0\u20ac investi, tu r\u00e9cup\u00e8res ${roi.toFixed(1)}\u00a0\u20ac \u2014 ${estimation.garantie} RDV garantis sinon M4 offert`,
    }
  },
}

export const simulatorConfigs: Record<string, SimulatorConfig> = {
  'setting-linkedin': linkedinConfig,
  'setting-telephonique': telephoneConfig,
  'setting-newsletter': newsletterConfig,
}
