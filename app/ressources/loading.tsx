export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-8 w-48 bg-white/[0.06] rounded-lg" />
        <div className="h-4 w-72 bg-white/[0.04] rounded" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 max-w-4xl w-full px-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 bg-white/[0.03] border border-white/[0.06] rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
