import Link from 'next/link'

interface Article {
  href: string
  title: string
  readTime: string
}

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <aside className="mt-16 pt-10 border-t border-white/[0.06]">
      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-6">
        Articles connexes
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(({ href, title, readTime }) => (
          <Link
            key={href}
            href={href}
            className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors"
          >
            <p className="font-sans font-semibold text-text-primary text-sm mb-1 group-hover:text-white transition-colors leading-snug">
              {title}
            </p>
            <p className="font-sans text-xs text-text-muted">{readTime}</p>
          </Link>
        ))}
      </div>
    </aside>
  )
}
