import { layerConfig } from '@/lib/pipeline-data'
import type { LayerKey } from '@/lib/pipeline-data'

const glowColors: Record<string, string> = {
  'text-semantic-ia': '185, 164, 251',       // #B9A4FB
  'text-semantic-methode': '251, 191, 36',    // #FBBF24
  'text-semantic-humain': '52, 211, 153',     // #34D399
  'text-semantic-hybrid': '208, 160, 253',    // #D0A0FD
}

interface PipelineStepProps {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
  isLast?: boolean
  pedagogy?: { mistake: string; arbitrage: string }
}

export function PipelineStep({ num, label, layers, desc, tools, isLast = false, pedagogy }: PipelineStepProps) {
  const primary = layerConfig[layers[0]]

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 w-full">
        {/* Left marker */}
        <div className="shrink-0 group/marker">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${primary.bg} border ${primary.border} flex items-center justify-center transition-shadow duration-200 shadow-[0_0_16px_var(--glow)] group-hover/marker:shadow-[0_0_20px_var(--glow-hover)]`}
            style={{
              '--glow': `rgba(${glowColors[primary.text] ?? '255,255,255'}, 0.15)`,
              '--glow-hover': `rgba(${glowColors[primary.text] ?? '255,255,255'}, 0.30)`,
            } as React.CSSProperties}
          >
            <span className={`font-mono text-sm font-bold ${primary.text}`}>{num}</span>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 min-w-0 pb-8">
          {/* Layer pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {layers.map((layer) => {
              const cfg = layerConfig[layer]
              return (
                <span
                  key={layer}
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${cfg.bg} ${cfg.border} ${cfg.text}`}
                >
                  {cfg.label}
                </span>
              )
            })}
          </div>

          {/* Title */}
          <h3 className="font-sans text-h3 text-text-primary mb-1.5">{label}</h3>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-3">{desc}</p>

          {/* Tool pills */}
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs border transition-[transform,border-color] duration-200 hover:scale-105 hover:border-white/20 ${primary.bg} ${primary.border} ${primary.text}`}
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Pedagogy block */}
          {pedagogy && (
            <div className="mt-4 space-y-2">
              <div className="flex gap-3 items-start rounded-lg bg-red-400/[0.02] border-0 border-l-[3px] border-red-400/30 px-3.5 py-2.5">
                <span className="shrink-0 mt-0.5 text-red-400 text-xs font-semibold uppercase tracking-wider">✕</span>
                <p className="text-red-400 text-xs leading-relaxed">{pedagogy.mistake}</p>
              </div>
              <div className="flex gap-3 items-start rounded-lg bg-emerald-400/[0.02] border-0 border-l-[3px] border-emerald-400/30 px-3.5 py-2.5">
                <span className="shrink-0 mt-0.5 text-emerald-400 text-xs font-semibold uppercase tracking-wider">→</span>
                <p className="text-emerald-400 text-xs leading-relaxed">{pedagogy.arbitrage}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="flex justify-start w-full pl-[27px] md:pl-[31px]">
          <div
            className="w-[2px] h-6 rounded-full"
            style={{ backgroundColor: `rgba(${glowColors[primary.text] ?? '255,255,255'}, 0.3)` }}
          />
        </div>
      )}
    </div>
  )
}
