interface TldrBoxProps {
  children: React.ReactNode
}

export function TldrBox({ children }: TldrBoxProps) {
  return (
    <div className="my-8 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
        En bref
      </p>
      <div className="font-sans text-text-secondary text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}
