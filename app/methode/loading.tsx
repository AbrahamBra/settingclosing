export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-8 w-48 bg-white/[0.06] rounded-lg" />
        <div className="h-4 w-64 bg-white/[0.04] rounded" />
      </div>
    </div>
  )
}
