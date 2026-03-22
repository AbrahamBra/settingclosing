'use client'

import { useState, useMemo } from 'react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { simulatorConfigs } from '@/lib/simulator-configs'

function formatEur(n: number): string {
  return n.toLocaleString('fr-FR', { maximumFractionDigits: 0 }) + '\u00a0\u20ac'
}

export function CombinedSimulator() {
  const linkedinConfig = simulatorConfigs['setting-linkedin']
  const telephoneConfig = simulatorConfigs['setting-telephonique']

  // LinkedIn inputs
  const [rdvParSemaine, setRdvParSemaine] = useState(2)
  const [ticketMoyen, setTicketMoyen] = useState(5000)
  const [tauxClosing, setTauxClosing] = useState(25)

  // Telephone toggle + inputs
  const [withTelephone, setWithTelephone] = useState(false)
  const [leadsParMois, setLeadsParMois] = useState(50)
  const [tauxRDV, setTauxRDV] = useState(12)

  const results = useMemo(() => {
    // LinkedIn
    const rdvLinkedinMois = rdvParSemaine * 4
    const prime = ticketMoyen < 5000 ? 50 : ticketMoyen <= 15000 ? 150 : 250
    const coutLinkedin = 790 + prime * rdvLinkedinMois
    const clientsLinkedin = rdvLinkedinMois * (tauxClosing / 100)
    const revenuLinkedin = clientsLinkedin * ticketMoyen

    // Telephone (if active)
    let coutTelephone = 0
    let rdvTelMois = 0
    let clientsTel = 0
    let revenuTel = 0
    let demiJournees = 0

    if (withTelephone) {
      rdvTelMois = leadsParMois * (tauxRDV / 100)
      demiJournees = Math.ceil(leadsParMois / 15)
      const primeTel = ticketMoyen < 5000 ? 25 : ticketMoyen <= 15000 ? 100 : 200
      coutTelephone = demiJournees * 175 + primeTel * rdvTelMois
      clientsTel = rdvTelMois * (tauxClosing / 100)
      revenuTel = clientsTel * ticketMoyen
    }

    const coutTotal = coutLinkedin + coutTelephone
    const revenuTotal = revenuLinkedin + revenuTel
    const roi = coutTotal > 0 ? revenuTotal / coutTotal : 0

    return {
      coutLinkedin,
      coutTelephone,
      coutTotal,
      rdvTotal: rdvLinkedinMois + rdvTelMois,
      clientsTotal: clientsLinkedin + clientsTel,
      revenuTotal,
      roi,
      demiJournees,
    }
  }, [rdvParSemaine, ticketMoyen, tauxClosing, withTelephone, leadsParMois, tauxRDV])

  const sliderClass = 'w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer'

  return (
    <section className="section-padding bg-bg-primary">
      <div className="container-max max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              Simulateur ROI
            </p>
            <h2 className="font-sans text-h2 font-extrabold text-text-primary mb-3">
              Combien tu peux g&eacute;n&eacute;rer ?
            </h2>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">
              Joue avec les curseurs. Les r&eacute;sultats se calculent en temps r&eacute;el.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ── LEFT: Inputs ──────────────────────────────── */}
            <div className="space-y-6">
              {/* LinkedIn block (always on) */}
              <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
                  <span className="font-sans text-sm font-bold text-text-primary">Setting LinkedIn</span>
                  <span className="ml-auto text-xs text-text-muted">790&nbsp;&euro;/mois</span>
                </div>

                {/* RDV par semaine */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-text-primary font-semibold">RDV qualifi&eacute;s / semaine</label>
                    <span className="text-sm font-extrabold tabular-nums text-[#A78BFA]">{rdvParSemaine}</span>
                  </div>
                  <input type="range" min={1} max={4} step={1} value={rdvParSemaine}
                    onChange={(e) => setRdvParSemaine(Number(e.target.value))}
                    className={sliderClass} style={{ accentColor: '#A78BFA' }} />
                  <div className="flex justify-between text-[10px] text-text-muted mt-0.5">
                    <span>1</span><span>4</span>
                  </div>
                </div>

                {/* Ticket moyen */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-text-primary font-semibold">Ticket moyen</label>
                    <span className="text-sm font-extrabold tabular-nums text-[#A78BFA]">{formatEur(ticketMoyen)}</span>
                  </div>
                  <input type="range" min={1000} max={50000} step={500} value={ticketMoyen}
                    onChange={(e) => setTicketMoyen(Number(e.target.value))}
                    className={sliderClass} style={{ accentColor: '#A78BFA' }} />
                  <div className="flex justify-between text-[10px] text-text-muted mt-0.5">
                    <span>1&nbsp;000&nbsp;&euro;</span><span>50&nbsp;000&nbsp;&euro;</span>
                  </div>
                </div>

                {/* Taux closing */}
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-xs text-text-primary font-semibold">Taux de closing</label>
                    <span className="text-sm font-extrabold tabular-nums text-[#A78BFA]">{tauxClosing}&nbsp;%</span>
                  </div>
                  <input type="range" min={10} max={50} step={5} value={tauxClosing}
                    onChange={(e) => setTauxClosing(Number(e.target.value))}
                    className={sliderClass} style={{ accentColor: '#A78BFA' }} />
                  <div className="flex justify-between text-[10px] text-text-muted mt-0.5">
                    <span>10&nbsp;%</span><span>50&nbsp;%</span>
                  </div>
                </div>
              </div>

              {/* Telephone block (toggleable) */}
              <div className={`rounded-2xl border p-6 transition-all duration-300 ${
                withTelephone
                  ? 'bg-bg-secondary border-[#FBBF24]/20'
                  : 'bg-bg-secondary/50 border-white/[0.04]'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => setWithTelephone(!withTelephone)}
                    className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                      withTelephone ? 'bg-[#FBBF24]' : 'bg-white/10'
                    }`}
                  >
                    <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                      withTelephone ? 'left-[22px]' : 'left-0.5'
                    }`} />
                  </button>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="w-2 h-2 rounded-full bg-[#FBBF24]" />
                    <span className={`font-sans text-sm font-bold transition-colors ${
                      withTelephone ? 'text-text-primary' : 'text-text-muted'
                    }`}>
                      + Qualification t&eacute;l&eacute;phonique
                    </span>
                  </div>
                  <span className="text-xs text-text-muted">175&nbsp;&euro;/demi-j</span>
                </div>

                {withTelephone && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-xs text-text-primary font-semibold">Leads entrants / mois</label>
                        <span className="text-sm font-extrabold tabular-nums text-[#FBBF24]">{leadsParMois}</span>
                      </div>
                      <input type="range" min={10} max={500} step={10} value={leadsParMois}
                        onChange={(e) => setLeadsParMois(Number(e.target.value))}
                        className={sliderClass} style={{ accentColor: '#FBBF24' }} />
                      <div className="flex justify-between text-[10px] text-text-muted mt-0.5">
                        <span>10</span><span>500</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-xs text-text-primary font-semibold">Taux de prise de RDV</label>
                        <span className="text-sm font-extrabold tabular-nums text-[#FBBF24]">{tauxRDV}&nbsp;%</span>
                      </div>
                      <input type="range" min={3} max={40} step={1} value={tauxRDV}
                        onChange={(e) => setTauxRDV(Number(e.target.value))}
                        className={sliderClass} style={{ accentColor: '#FBBF24' }} />
                      <div className="flex justify-between text-[10px] text-text-muted mt-0.5">
                        <span>3&nbsp;%</span><span>40&nbsp;%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT: Results ─────────────────────────────── */}
            <div className="flex flex-col">
              <div className="bg-bg-secondary rounded-2xl border border-white/[0.06] p-6 flex-1 flex flex-col justify-between">
                {/* Cost breakdown */}
                <div className="space-y-3 mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                    R&eacute;sultats estim&eacute;s / mois
                  </p>

                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-text-muted">Co&ucirc;t LinkedIn</span>
                    <span className="text-xs font-bold text-text-primary tabular-nums">{formatEur(results.coutLinkedin)}</span>
                  </div>

                  {withTelephone && (
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-text-muted">Co&ucirc;t T&eacute;l&eacute;phone ({results.demiJournees} demi-j)</span>
                      <span className="text-xs font-bold text-text-primary tabular-nums">{formatEur(results.coutTelephone)}</span>
                    </div>
                  )}

                  <div className="h-px bg-white/[0.06]" />

                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-text-primary font-semibold">Co&ucirc;t total</span>
                    <span className="text-sm font-extrabold text-text-primary tabular-nums">{formatEur(results.coutTotal)}</span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-text-muted">RDV qualifi&eacute;s / mois</span>
                    <span className="text-sm font-extrabold text-accent tabular-nums">{results.rdvTotal}</span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-text-muted">Clients gagn&eacute;s / mois</span>
                    <span className="text-xs font-bold text-text-primary tabular-nums">{results.clientsTotal.toFixed(1)}</span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-text-primary font-semibold">Revenu potentiel</span>
                    <span className="text-lg font-extrabold text-accent tabular-nums">{formatEur(results.revenuTotal)}</span>
                  </div>
                </div>

                {/* ROI badge */}
                <div
                  className="rounded-xl px-5 py-4 text-center"
                  style={{ background: 'rgba(200,117,51,0.08)', border: '1px solid rgba(200,117,51,0.2)' }}
                >
                  <p className="text-[10px] text-text-muted mb-1">Retour sur investissement</p>
                  <p className="text-4xl font-extrabold text-accent tabular-nums">
                    {results.roi.toFixed(1)}x
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    Pour 1&nbsp;&euro; investi, tu r&eacute;cup&egrave;res {results.roi.toFixed(1)}&nbsp;&euro;
                  </p>
                </div>

                {/* Hypotheses */}
                <p className="text-[10px] text-text-muted mt-4 leading-relaxed">
                  Hypoth&egrave;ses : prime par RDV selon ticket &middot; 15 leads/demi-journ&eacute;e max (t&eacute;l&eacute;phone) &middot; taux de closing partag&eacute;
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
