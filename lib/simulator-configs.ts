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

export interface SimulatorConfig {
  offerId: string
  color: string
  inputs: SimulatorInput[]
  hypotheses: string[]
  conversionStat: string
  setupAmount: number
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
    '12 RDV qualifiés / mois (≈ 3/semaine)',
    'Prime par RDV : 50\u00a0€ (<5k), 150\u00a0€ (5-15k), 250\u00a0€ (>15k)',
  ],
  conversionStat: 'En moyenne : 2 à 4 RDV qualifiés par semaine',
  setupAmount: 490,
  compute(values, includeSetup) {
    const rdvParMois = 12
    const prime = values.ticketMoyen < 5000 ? 50 : values.ticketMoyen <= 15000 ? 150 : 250
    const coutMensuel = 790 + prime * rdvParMois
    const setupAmorti = includeSetup ? Math.round(490 / 3) : 0
    const coutTotal = coutMensuel + setupAmorti
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
      roiLabel: `Pour 1\u00a0€ investi, vous récupérez ${roi.toFixed(1)}\u00a0€`,
    }
  },
}

// ── Setting Téléphonique ─────────────────────────────
const telephoneConfig: SimulatorConfig = {
  offerId: 'setting-telephonique',
  color: '#FBBF24',
  inputs: [
    {
      id: 'leadsParMois',
      label: 'Leads entrants / mois',
      min: 10,
      max: 200,
      step: 5,
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
  ],
  hypotheses: [
    '10 min max par lead au téléphone',
    '30% de prise de RDV',
    'Taux de closing : 25%',
    'Facturation par demi-journée (TJM 350\u00a0€)',
  ],
  conversionStat: '30% de prise de RDV en moyenne — 10 min par lead max',
  setupAmount: 490,
  compute(values, includeSetup) {
    const tauxRDV = 0.30
    const minParLead = 10
    const tauxClosing = 0.25
    const TJM = 350

    const rdvParMois = values.leadsParMois * tauxRDV
    const tempsHeures = (values.leadsParMois * minParLead) / 60
    const joursNecessaires = tempsHeures / 7
    const demiJournees = Math.ceil(joursNecessaires * 2)
    const prime = values.ticketMoyen < 5000 ? 25 : values.ticketMoyen <= 15000 ? 100 : 200
    const coutMensuel = (demiJournees * TJM / 2) + (prime * rdvParMois)
    const setupAmorti = includeSetup ? Math.round(490 / 3) : 0
    const coutTotal = coutMensuel + setupAmorti
    const clientsGagnes = rdvParMois * tauxClosing
    const revenuMensuel = clientsGagnes * values.ticketMoyen
    const roi = coutTotal > 0 ? revenuMensuel / coutTotal : 0

    return {
      items: [
        { label: 'Temps téléphone / mois', value: `${tempsHeures.toFixed(0)}h (${(demiJournees / 2).toFixed(1)}j)` },
        { label: 'RDV qualifiés générés', value: rdvParMois.toFixed(0) },
        { label: 'Coût mensuel estimé', value: formatEur(coutTotal) },
        { label: 'Revenu potentiel', value: formatEur(revenuMensuel), highlight: true },
      ],
      roi,
      roiLabel: `Pour 1\u00a0€ investi, vous récupérez ${roi.toFixed(1)}\u00a0€`,
    }
  },
}

export const simulatorConfigs: Record<string, SimulatorConfig> = {
  'setting-linkedin': linkedinConfig,
  'setting-telephonique': telephoneConfig,
}
