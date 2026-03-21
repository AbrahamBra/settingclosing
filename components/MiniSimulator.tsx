'use client'

import { useState, useMemo } from 'react'
import type { SimulatorConfig } from '@/lib/simulator-configs'

export function MiniSimulator({ config }: { config: SimulatorConfig }) {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(config.inputs.map((input) => [input.id, input.default]))
  )
  const [includeSetup, setIncludeSetup] = useState(false)

  const results = useMemo(
    () => config.compute(values, includeSetup),
    [values, includeSetup, config]
  )

  const updateValue = (id: string, val: number) => {
    setValues((prev) => ({ ...prev, [id]: val }))
  }

  return (
    <div className="space-y-4">
      {/* Conversion stat */}
      <p className="text-xs font-semibold" style={{ color: config.color }}>
        {config.conversionStat}
      </p>

      {/* Sliders */}
      <div className="space-y-3">
        {config.inputs.map((input) => (
          <div key={input.id}>
            <div className="flex items-baseline justify-between mb-1">
              <label
                htmlFor={`sim-${config.offerId}-${input.id}`}
                className="font-sans text-xs text-text-primary font-semibold"
              >
                {input.label}
              </label>
              <span
                className="font-sans font-extrabold text-sm tabular-nums"
                style={{ color: config.color }}
              >
                {input.formatValue
                  ? input.formatValue(values[input.id])
                  : `${values[input.id]}${input.unit ? `\u00a0${input.unit}` : ''}`}
              </span>
            </div>
            <input
              id={`sim-${config.offerId}-${input.id}`}
              type="range"
              min={input.min}
              max={input.max}
              step={input.step}
              value={values[input.id]}
              onChange={(e) => updateValue(input.id, Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: config.color }}
            />
            <div className="flex justify-between font-sans text-[10px] text-text-muted mt-0.5">
              <span>
                {input.formatValue
                  ? input.formatValue(input.min)
                  : `${input.min.toLocaleString('fr-FR')}${input.unit ? `\u00a0${input.unit}` : ''}`}
              </span>
              <span>
                {input.formatValue
                  ? input.formatValue(input.max)
                  : `${input.max.toLocaleString('fr-FR')}${input.unit ? `\u00a0${input.unit}` : ''}`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Setup toggle */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={includeSetup}
          onChange={(e) => setIncludeSetup(e.target.checked)}
          className="rounded border-white/20 bg-white/10"
          style={{ accentColor: config.color }}
        />
        <span className="font-sans text-[11px] text-text-muted">
          Inclure le setup ({config.setupAmount.toLocaleString('fr-FR')}&nbsp;&euro; amorti sur 3 mois)
        </span>
      </label>

      {/* Divider */}
      <div className="h-px bg-white/[0.06]" />

      {/* Results */}
      <div className="space-y-2">
        {results.items.map((item) => (
          <div key={item.label} className="flex items-baseline justify-between">
            <span className="font-sans text-text-muted text-xs">{item.label}</span>
            <span
              className={`font-sans font-bold tabular-nums ${
                item.highlight ? 'text-sm' : 'text-xs text-text-primary'
              }`}
              style={item.highlight ? { color: config.color } : undefined}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* ROI Badge */}
      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{
          background: `${config.color}15`,
          border: `1px solid ${config.color}30`,
        }}
      >
        <p className="font-sans text-[10px] text-text-muted mb-0.5">
          Retour sur investissement
        </p>
        <p
          className="font-sans font-extrabold text-2xl tabular-nums"
          style={{ color: config.color }}
        >
          {results.roi.toFixed(1)}x
        </p>
        <p className="font-sans text-text-muted text-[10px] mt-0.5">
          {results.roiLabel}
        </p>
      </div>

      {/* Hypotheses */}
      <p className="font-sans text-[10px] text-text-muted leading-relaxed">
        Hypoth&egrave;ses&nbsp;: {config.hypotheses.join(' · ')}
      </p>
    </div>
  )
}
