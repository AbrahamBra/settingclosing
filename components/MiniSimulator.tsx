'use client'

import { useState, useMemo } from 'react'
import type { SimulatorConfig } from '@/lib/simulator-configs'

function getInitialValues(config: SimulatorConfig): Record<string, number> {
  const defaults = Object.fromEntries(config.inputs.map((input) => [input.id, input.default]))
  // Apply first preset values if available
  if (config.presets?.[0]) {
    return { ...defaults, ...config.presets[0].values }
  }
  return defaults
}

export function MiniSimulator({ config }: { config: SimulatorConfig }) {
  const [values, setValues] = useState<Record<string, number>>(() => getInitialValues(config))
  const [includeSetup, setIncludeSetup] = useState(false)
  const [activePreset, setActivePreset] = useState<string | null>(
    config.presets?.[0]?.id ?? null
  )

  const results = useMemo(
    () => config.compute(values, includeSetup),
    [values, includeSetup, config]
  )

  const updateValue = (id: string, val: number) => {
    setValues((prev) => ({ ...prev, [id]: val }))
    // If user manually changes a value that a preset controls, clear active preset
    if (config.presets?.some((p) => id in p.values)) {
      setActivePreset(null)
    }
  }

  const applyPreset = (presetId: string) => {
    const preset = config.presets?.find((p) => p.id === presetId)
    if (!preset) return
    setActivePreset(presetId)
    setValues((prev) => ({ ...prev, ...preset.values }))
  }

  const activePresetData = config.presets?.find((p) => p.id === activePreset)

  return (
    <div className="space-y-4">
      {/* Conversion stat */}
      <p className="text-xs font-semibold" style={{ color: config.color }}>
        {config.conversionStat}
      </p>

      {/* Preset buttons */}
      {config.presets && config.presets.length > 0 && (
        <div className="space-y-2">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-text-muted">
            Type de base
          </p>
          <div className="flex gap-1.5">
            {config.presets.map((preset) => {
              const isActive = activePreset === preset.id
              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.id)}
                  className="flex-1 px-2 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200 cursor-pointer border"
                  style={
                    isActive
                      ? {
                          backgroundColor: `${config.color}20`,
                          borderColor: `${config.color}50`,
                          color: config.color,
                        }
                      : {
                          backgroundColor: 'rgba(255,255,255,0.03)',
                          borderColor: 'rgba(255,255,255,0.06)',
                          color: 'rgba(255,255,255,0.5)',
                        }
                  }
                >
                  {preset.label}
                </button>
              )
            })}
          </div>
          {activePresetData && (
            <p className="font-sans text-[11px] text-text-secondary leading-relaxed">
              {activePresetData.note}
            </p>
          )}
        </div>
      )}

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
      {!config.hideSetup && (
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
      )}

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

      {/* ROI Badge or Guarantee Badge */}
      <div
        className="rounded-lg px-4 py-3 text-center"
        style={{
          background: `${config.color}15`,
          border: `1px solid ${config.color}30`,
        }}
      >
        {results.roi > 0 ? (
          <>
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
              Pour 1&nbsp;&euro; investi, vous r&eacute;cup&eacute;rez {results.roi.toFixed(1)}&nbsp;&euro;
            </p>
          </>
        ) : (
          <>
            <p className="font-sans text-[10px] text-text-muted mb-0.5">
              Engagement minimum
            </p>
            <p
              className="font-sans font-bold text-sm leading-snug"
              style={{ color: config.color }}
            >
              {results.roiLabel}
            </p>
          </>
        )}
      </div>

      {/* Hypotheses */}
      <p className="font-sans text-[10px] text-text-muted leading-relaxed">
        Hypoth&egrave;ses&nbsp;: {config.hypotheses.join(' · ')}
      </p>
    </div>
  )
}
