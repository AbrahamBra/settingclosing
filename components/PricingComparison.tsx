import { ScrollReveal } from '@/components/ui/ScrollReveal'

const rows: {
  label: string
  solo: string | boolean
  outil: string | boolean
  setting: string | boolean
}[] = [
  { label: 'Coût mensuel', solo: '0–80\u00a0€', outil: '100–200\u00a0€', setting: '790\u00a0€' },
  { label: 'Temps / semaine', solo: '8–10h', outil: '4–6h', setting: '0h' },
  { label: 'RDV générés', solo: '1–2/sem', outil: '2–3/sem', setting: '3+/sem garanti' },
  { label: 'Personnalisation', solo: 'Manuelle', outil: 'Templates', setting: 'IA + humain' },
  { label: 'Signaux d\u2019achat', solo: false, outil: 'Basiques', setting: 'IA temps réel' },
  { label: 'Garantie RDV', solo: false, outil: false, setting: true },
  { label: 'Tu fais quoi', solo: 'TOUT', outil: 'Stratégie + suivi', setting: 'Tu closes. C\u2019est tout.' },
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
            Pourquoi déléguer ton setting
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {/* Empty criteria column header */}
                  <th className="text-left px-4 py-3 min-w-[140px]" />

                  {/* Toi seul column */}
                  <th className="px-4 py-3 min-w-[140px] text-text-muted text-sm font-semibold text-center">
                    Toi seul
                  </th>

                  {/* Toi + outil column */}
                  <th className="px-4 py-3 min-w-[140px] text-text-muted text-sm font-semibold text-center">
                    Toi + outil
                    <br />
                    <span className="text-xs font-normal">(Lemlist...)</span>
                  </th>

                  {/* Toi + SettingClosing column */}
                  <th
                    className="px-4 py-3 min-w-[140px] border-t-2 text-sm font-bold text-center"
                    style={{
                      borderColor: '#C87533',
                      background: 'rgba(200,117,51,0.04)',
                      color: '#C87533',
                    }}
                  >
                    Toi + SettingClosing
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

                    {/* Solo cell */}
                    <td className="px-4 py-3 min-w-[140px] text-center">
                      <CellContent value={row.solo} />
                    </td>

                    {/* Outil cell */}
                    <td className="px-4 py-3 min-w-[140px] text-center">
                      <CellContent value={row.outil} />
                    </td>

                    {/* SettingClosing cell */}
                    <td
                      className="px-4 py-3 min-w-[140px] text-center"
                      style={{ background: 'rgba(200,117,51,0.04)' }}
                    >
                      <CellContent value={row.setting} />
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
