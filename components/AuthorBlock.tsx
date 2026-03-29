// ─── AuthorBlock ──────────────────────────────────────────────────────────────
// Reusable author byline for blog articles.
// Provides E-E-A-T signal and links back to /a-propos.

interface AuthorBlockProps {
  date: string        // ISO date string e.g. "2026-03-18"
  readTime: string    // e.g. "25 min de lecture"
  dateLabel?: string  // Displayed label e.g. "18 mars 2026"
  updatedDate?: string // ISO date string for "Mis à jour le" e.g. "2026-03-19"
}

export function AuthorBlock({ date, readTime, dateLabel, updatedDate }: AuthorBlockProps) {
  const displayDate = dateLabel ?? new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const displayUpdated = updatedDate
    ? new Date(updatedDate).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <div className="flex items-center gap-4 font-sans text-xs text-text-muted">
      {/* Avatar initiale */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-bg-secondary border border-white/[0.06] flex items-center justify-center">
        <span className="font-sans font-bold text-sm text-[#C87533]">A</span>
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5 flex-wrap">
          <a
            href="/a-propos"
            className="font-semibold text-text-primary hover:text-[#C87533] transition-colors text-xs"
          >
            Abraham
          </a>
          <span className="text-white/40">&middot;</span>
          <span className="text-text-secondary">Fondateur & Automatisation, Setting</span>
          <a
            href="https://www.linkedin.com/in/abraham-brakha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn Abraham Brakha"
          >
            <svg className="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <time dateTime={date}>{displayDate}</time>
          {displayUpdated && displayUpdated !== displayDate && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span className="text-semantic-methode/80">Mis à jour le <time dateTime={updatedDate!}>{displayUpdated}</time></span>
            </>
          )}
          <span aria-hidden="true">&middot;</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  )
}
