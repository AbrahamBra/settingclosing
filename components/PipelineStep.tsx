interface PipelineStepProps {
  num: string
  label: string
  layers: Array<'ia' | 'methode' | 'hybrid' | 'humain'>
  desc: string
  tools: string[]
  isLast?: boolean
}

const layerConfig = {
  ia: { label: 'IA', text: 'text-[#818CF8]', bg: 'bg-[#818CF8]/10', border: 'border-[#818CF8]/20' },
  methode: { label: 'Méthode', text: 'text-[#FBBF24]', bg: 'bg-[#FBBF24]/10', border: 'border-[#FBBF24]/20' },
  hybrid: { label: 'IA + Méthode', text: 'text-[#C084FC]', bg: 'bg-[#C084FC]/10', border: 'border-[#C084FC]/20' },
  humain: { label: 'Humain', text: 'text-[#34D399]', bg: 'bg-[#34D399]/10', border: 'border-[#34D399]/20' },
}

export function PipelineStep({ num, label, layers, desc, tools, isLast = false }: PipelineStepProps) {
  const primary = layerConfig[layers[0]]

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 w-full">
        {/* Left marker */}
        <div className="shrink-0">
          <div
            className={`w-14 h-14 rounded-xl ${primary.bg} border ${primary.border} flex items-center justify-center`}
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
          <h3 className="font-sans text-h3 text-white mb-1.5">{label}</h3>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-3">{desc}</p>

          {/* Tool pills */}
          <div className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
              <span
                key={tool}
                className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-xs border ${primary.bg} ${primary.border} ${primary.text}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Connector arrow */}
      {!isLast && (
        <div className="flex justify-start w-full pl-[1.125rem]">
          <span className="text-text-muted text-lg leading-none select-none">↓</span>
        </div>
      )}
    </div>
  )
}
