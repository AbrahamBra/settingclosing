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
      note: 'Ils veulent être rappelés. Entre 20 et 40\u00a0% de closing vers RDV.',
      values: { tauxRDV: 35, tauxClosing: 30 },
    },
    {
      id: 'contenu',
      label: 'Contenu',
      note: 'Téléchargement, webinar, engagement. Le taux dépend de la qualité de la base.',
      values: { tauxRDV: 15, tauxClosing: 15 },
    },
    {
      id: 'concours',
      label: 'Jeu concours',
      note: 'Volume élevé, intention faible. Beaucoup de tri, peu de RDV.',
      values: { tauxRDV: 5, tauxClosing: 8 },
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
      min: 5,
      max: 60,
      step: 5,
      default: 15,
      unit: '%',
      formatValue: (v) => `${v}\u00a0%`,
    },
    {
      id: 'tauxClosing',
      label: 'Taux de closing',
      min: 5,
      max: 50,
      step: 5,
      default: 15,
      unit: '%',
      formatValue: (v) => `${v}\u00a0%`,
    },
  ],
  hypotheses: [
    '10 min max par lead au téléphone',
    'Facturation par demi-journée (175\u00a0€)',
  ],
  conversionStat: 'Les taux varient selon la source : opt-in qualifié > contenu > jeu concours',
  setupAmount: 490,
  compute(values, includeSetup) {
    const tauxRDV = values.tauxRDV / 100
    const minParLead = 10
    const tauxClosing = values.tauxClosing / 100
    const halfDayRate = 175

    const rdvParMois = values.leadsParMois * tauxRDV
    const tempsHeures = (values.leadsParMois * minParLead) / 60
    const joursNecessaires = tempsHeures / 7
    const demiJournees = Math.ceil(joursNecessaires * 2)
    const prime = values.ticketMoyen < 5000 ? 25 : values.ticketMoyen <= 15000 ? 100 : 200
    const coutMensuel = (demiJournees * halfDayRate) + (prime * rdvParMois)
    const setupAmorti = includeSetup ? Math.round(490 / 3) : 0
    const coutTotal = coutMensuel + setupAmorti
    const clientsGagnes = rdvParMois * tauxClosing
    const revenuMensuel = clientsGagnes * values.ticketMoyen
    const roi = coutTotal > 0 ? revenuMensuel / coutTotal : 0

    return {
      items: [
        { label: 'Demi-journées / mois', value: `${demiJournees} (${tempsHeures.toFixed(0)}h)` },
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
      label: 'Taille de votre base',
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
  ],
  hypotheses: [
    'Funnels par thématique et maturité, construits sur mesure',
    'Tarification sur devis selon la taille de base',
  ],
  conversionStat: 'On construit des funnels par thématique et maturité, adaptés à votre base',
  setupAmount: 830,
  hideSetup: true,
  compute(values) {
    // Garantie dynamique selon la taille de base
    const base = values.tailleBase
    const garantie = base < 3000
      ? { rdv: 3, label: '3 RDV garantis' }
      : base < 7000
        ? { rdv: 5, label: '5 RDV garantis' }
        : { rdv: 10, label: '10 RDV garantis' }

    const tauxClosingPostRDV = 0.30
    const clientsSur3Mois = garantie.rdv * tauxClosingPostRDV
    const revenuSur3Mois = clientsSur3Mois * values.ticketMoyen

    return {
      items: [
        { label: 'Construction (mois 1-3)', value: '830\u00a0€/mo' },
        { label: 'Abonnement (mois 4+)', value: '990\u00a0€/mo' },
        { label: 'RDV garantis / 3 mois', value: `${garantie.rdv} minimum` },
        { label: 'Revenu potentiel / 3 mois', value: formatEur(revenuSur3Mois), highlight: true },
      ],
      roi: 0,
      roiLabel: garantie.label + ' en 3 mois, sinon M4 offert',
    }
  },
}

export const simulatorConfigs: Record<string, SimulatorConfig> = {
  'setting-linkedin': linkedinConfig,
  'setting-telephonique': telephoneConfig,
  'setting-newsletter': newsletterConfig,
}
