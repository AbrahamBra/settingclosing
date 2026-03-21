'use client'

import { useState, useMemo } from 'react'
import { ScrollReveal } from './ui/ScrollReveal'

const TAUX_CONVERSION_DEFAULT = 25
const RDV_DEFAULT = 12
const TICKET_DEFAULT = 5000
const COUT_FIXE = 790 // €/mois Setting LinkedIn

function getPrimeParRDV(ticketMoyen: number): number {
  if (ticketMoyen < 5000) return 50
  if (ticketMoyen <= 15000) return 150
  return 250
}

function formatEur(n: number): string {
  return n.toLocaleString('fr-FR', { maximumFractionDigits: 0 }) + '\u00a0€'
}

export function ROICalculator() {
  const [ticketMoyen, setTicketMoyen] = useState(TICKET_DEFAULT)
  const [rdvParMois, setRdvParMois] = useState(RDV_DEFAULT)
  const [tauxClosing, setTauxClosing] = useState(TAUX_CONVERSION_DEFAULT)

  const results = useMemo(() => {
    const prime = getPrimeParRDV(ticketMoyen)
    const coutMensuel = COUT_FIXE + prime * rdvParMois
    const clientsGagnes = rdvParMois * (tauxClosing / 100)
    const revenuMensuel = clientsGagnes * ticketMoyen
    const roi = coutMensuel > 0 ? revenuMensuel / coutMensuel : 0
    const revenuNet = revenuMensuel - coutMensuel

    return { prime, coutMensuel, clientsGagnes, revenuMensuel, roi, revenuNet }
  }, [ticketMoyen, rdvParMois, tauxClosing])

  return (
    <section id="roi-calculator" className="bg-bg-primary section-padding">
      <div className="container-max max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Simulateur
            </p>
            <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-3">
              Combien peut vous rapporter le Setting&nbsp;?
            </h2>
            <p className="font-sans text-text-muted text-base">
              Ajustez les curseurs. Le calcul se fait en temps r&eacute;el.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ── Inputs ──────────────────────────────────────── */}
            <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-8 flex flex-col gap-7">
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <label
                    htmlFor="ticket"
                    className="font-sans text-sm text-text-primary font-semibold"
                  >
                    Ticket moyen
                  </label>
                  <span className="font-sans text-accent font-extrabold text-lg tabular-nums">
                    {formatEur(ticketMoyen)}
                  </span>
                </div>
                <input
                  id="ticket"
                  type="range"
                  min={1000}
                  max={50000}
                  step={500}
                  value={ticketMoyen}
                  onChange={(e) => setTicketMoyen(Number(e.target.value))}
                  className="w-full accent-accent h-1.5 bg-white/[0.06] rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between font-sans text-[10px] text-text-muted mt-1">
                  <span>1 000 €</span>
                  <span>50 000 €</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <label
                    htmlFor="rdv"
                    className="font-sans text-sm text-text-primary font-semibold"
                  >
                    RDV qualifi&eacute;s / mois
                  </label>
                  <span className="font-sans text-accent font-extrabold text-lg tabular-nums">
                    {rdvParMois}
                  </span>
                </div>
                <input
                  id="rdv"
                  type="range"
                  min={3}
                  max={30}
                  step={1}
                  value={rdvParMois}
                  onChange={(e) => setRdvParMois(Number(e.target.value))}
                  className="w-full accent-accent h-1.5 bg-white/[0.06] rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between font-sans text-[10px] text-text-muted mt-1">
                  <span>3</span>
                  <span>30</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <label
                    htmlFor="closing"
                    className="font-sans text-sm text-text-primary font-semibold"
                  >
                    Taux de closing
                  </label>
                  <span className="font-sans text-accent font-extrabold text-lg tabular-nums">
                    {tauxClosing}%
                  </span>
                </div>
                <input
                  id="closing"
                  type="range"
                  min={5}
                  max={50}
                  step={5}
                  value={tauxClosing}
                  onChange={(e) => setTauxClosing(Number(e.target.value))}
                  className="w-full accent-accent h-1.5 bg-white/[0.06] rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between font-sans text-[10px] text-text-muted mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              <p className="font-sans text-text-muted text-[11px] leading-relaxed mt-auto">
                Prime par RDV appliqu&eacute;e&nbsp;: {formatEur(results.prime)} (palier
                ticket&nbsp;{ticketMoyen < 5000 ? '< 5k €' : ticketMoyen <= 15000 ? '5 – 15k €' : '> 15k €'})
              </p>
            </div>

            {/* ── Results ─────────────────────────────────────── */}
            <div className="bg-bg-secondary rounded-2xl border border-accent/20 p-8 flex flex-col gap-6"
              style={{ background: 'rgba(200,117,51,0.03)' }}>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">
                Votre estimation mensuelle
              </p>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-text-muted text-sm">Co&ucirc;t Setting</span>
                  <span className="font-sans text-text-primary font-bold text-lg tabular-nums">
                    {formatEur(results.coutMensuel)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-text-muted text-sm">Clients gagn&eacute;s / mois</span>
                  <span className="font-sans text-text-primary font-bold text-lg tabular-nums">
                    {results.clientsGagnes.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-text-muted text-sm">Revenu potentiel</span>
                  <span className="font-sans text-accent font-extrabold text-xl tabular-nums">
                    {formatEur(results.revenuMensuel)}
                  </span>
                </div>

                <div className="h-px bg-white/[0.06] my-1" />

                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-text-muted text-sm">Revenu net (apr&egrave;s co&ucirc;t)</span>
                  <span className="font-sans text-[#34D399] font-extrabold text-xl tabular-nums">
                    {formatEur(results.revenuNet)}
                  </span>
                </div>
              </div>

              {/* ROI Badge */}
              <div
                className="rounded-xl px-6 py-4 text-center"
                style={{ background: 'rgba(200,117,51,0.10)', border: '1px solid rgba(200,117,51,0.20)' }}
              >
                <p className="font-sans text-xs text-text-muted mb-1">Retour sur investissement</p>
                <p className="font-sans font-extrabold text-3xl text-accent tabular-nums">
                  {results.roi.toFixed(1)}x
                </p>
                <p className="font-sans text-text-muted text-[11px] mt-1">
                  Pour 1&nbsp;&euro; investi, vous r&eacute;cup&eacute;rez {results.roi.toFixed(1)}&nbsp;&euro;
                </p>
              </div>

              <p className="font-sans text-text-muted text-[11px] leading-relaxed">
                Estimation indicative bas&eacute;e sur vos param&egrave;tres.
                Le taux de closing d&eacute;pend de votre offre et de votre march&eacute;.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
