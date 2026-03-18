// ─── AuthorBlock ──────────────────────────────────────────────────────────────
// Reusable author byline for blog articles.
// Provides E-E-A-T signal and links back to /a-propos.

interface AuthorBlockProps {
  date: string        // ISO date string e.g. "2026-03-18"
  readTime: string    // e.g. "25 min de lecture"
  dateLabel?: string  // Displayed label e.g. "18 mars 2026"
}

export function AuthorBlock({ date, readTime, dateLabel }: AuthorBlockProps) {
  const displayDate = dateLabel ?? new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="flex items-center gap-4 font-sans text-xs text-text-muted">
      {/* Avatar initiale */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-bg-secondary border border-white/[0.06] flex items-center justify-center">
        <span className="font-sans font-bold text-sm text-[#F87171]">A</span>
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <a
            href="/a-propos"
            className="font-semibold text-white hover:text-[#F87171] transition-colors text-xs"
          >
            Abraham
          </a>
          <span className="text-white/20">&middot;</span>
          <span className="text-text-secondary">Fondateur ChallengersLab</span>
        </div>
        <div className="flex items-center gap-2">
          <time dateTime={date}>{displayDate}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )
}
