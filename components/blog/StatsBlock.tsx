export function StatsBlock({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="flex justify-center gap-6 md:gap-12 my-8 py-6 bg-[#34D399]/[0.04] border border-[#34D399]/[0.12] rounded-xl">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center gap-6">
          <div className="text-center">
            <div className="font-mono text-2xl font-extrabold text-[#34D399]">{s.value}</div>
            <div className="text-text-muted text-xs mt-1">{s.label}</div>
          </div>
          {i < stats.length - 1 && (
            <span className="text-white/10 text-xl">→</span>
          )}
        </div>
      ))}
    </div>
  )
}
