'use client'

interface Tool {
  name: string
  color: string
}

const toolsRow1: Tool[] = [
  { name: 'Claude Code', color: '#C87533' },
  { name: 'Sales Navigator', color: '#B9A4FB' },
  { name: 'Reactin', color: '#B9A4FB' },
  { name: 'Make', color: '#34D399' },
  { name: 'Google Sheets', color: '#918B85' },
  { name: 'Calendly', color: '#C87533' },
]

const toolsRow2: Tool[] = [
  { name: 'Claude Cowork', color: '#C87533' },
  { name: 'Breakcold', color: '#34D399' },
  { name: 'LinkedIn', color: '#B9A4FB' },
  { name: 'Notion', color: '#918B85' },
  { name: 'HubSpot', color: '#FBBF24' },
  { name: 'Zapier', color: '#34D399' },
]

function Row({ tools, reverse = false }: { tools: Tool[]; reverse?: boolean }) {
  return (
    <div
      className="flex gap-10"
      style={{
        animation: `marquee ${reverse ? '40' : '35'}s linear infinite ${reverse ? 'reverse' : ''}`,
      }}
    >
      {[...tools, ...tools].map((tool, i) => (
        <span key={`${tool.name}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
          <span
            className="text-[13px] font-semibold uppercase tracking-[0.15em] transition-opacity duration-300"
            style={{ color: tool.color, opacity: 0.3 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.3'
            }}
          >
            {tool.name}
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
        </span>
      ))}
    </div>
  )
}

export function ToolMarquee() {
  return (
    <section className="relative overflow-hidden py-8 border-y border-white/[0.04]">
      <p className="mb-5 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        Les outils qu&apos;on ma&icirc;trise
      </p>
      <div className="space-y-4 overflow-hidden">
        <div className="overflow-hidden">
          <Row tools={toolsRow1} />
        </div>
        <div className="overflow-hidden">
          <Row tools={toolsRow2} reverse />
        </div>
      </div>
    </section>
  )
}
