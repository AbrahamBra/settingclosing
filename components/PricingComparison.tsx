import { ScrollReveal } from '@/components/ui/ScrollReveal'

const rows: {
  label: string
  setting: string | boolean
  agency: string | boolean
  freelance: string | boolean
}[] = [
  {
    label: 'Coût mensuel',
    setting: '790\u00a0–\u00a0990\u00a0€/mois',
    agency: '2\u00a0000\u00a0–\u00a04\u00a0000\u00a0€/mois',
    freelance: '1\u00a0500\u00a0–\u00a02\u00a0500\u00a0€/mois',
  },
  {
    label: 'Engagement',
    setting: 'Sans engagement',
    agency: '3-6 mois minimum',
    freelance: 'Variable',
  },
  {
    label: 'IA + signaux d\u2019achat',
    setting: true,
    agency: false,
    freelance: false,
  },
  {
    label: 'Prime sur résultat',
    setting: true,
    agency: false,
    freelance: 'Rare',
  },
  {
    label: 'Garantie RDV',
    setting: true,
    agency: false,
    freelance: false,
  },
]

function CellContent({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="text-semantic-humain font-bold text-base" aria-label="Oui">
        ✓
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="text-text-muted font-bold text-base" aria-label="Non">
        ✗
      </span>
    )
  }
  return <span className="text-text-secondary text-sm">{value}</span>
}

export function PricingComparison() {
  return (
    <section className="bg-bg-secondary section-padding">
      <div className="container-max max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            COMPARATIF
          </p>
          <h2 className="text-h2 text-text-primary font-extrabold text-center mb-10">
            Pourquoi Setting coûte 2 à 4× moins cher
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {/* Empty criteria column header */}
                  <th className="text-left px-4 py-3 min-w-[140px]" />

                  {/* Setting column */}
                  <th
                    className="px-4 py-3 min-w-[140px] border-t-2 text-sm font-bold text-center"
                    style={{
                      borderColor: '#C87533',
                      background: 'rgba(200,117,51,0.04)',
                      color: '#C87533',
                    }}
                  >
                    Setting
                  </th>

                  {/* Agence classique column */}
                  <th className="px-4 py-3 min-w-[140px] text-text-muted text-sm font-semibold text-center">
                    Agence classique
                  </th>

                  {/* SDR freelance column */}
                  <th className="px-4 py-3 min-w-[140px] text-text-muted text-sm font-semibold text-center">
                    SDR freelance
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-white/[0.06]">
                    {/* Label cell — sticky on mobile scroll */}
                    <td className="sticky left-0 bg-bg-secondary px-4 py-3 min-w-[140px] text-text-primary text-sm font-semibold">
                      {row.label}
                    </td>

                    {/* Setting cell */}
                    <td
                      className="px-4 py-3 min-w-[140px] text-center"
                      style={{ background: 'rgba(200,117,51,0.04)' }}
                    >
                      <CellContent value={row.setting} />
                    </td>

                    {/* Agency cell */}
                    <td className="px-4 py-3 min-w-[140px] text-center">
                      <CellContent value={row.agency} />
                    </td>

                    {/* Freelance cell */}
                    <td className="px-4 py-3 min-w-[140px] text-center">
                      <CellContent value={row.freelance} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
