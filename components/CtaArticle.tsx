interface CtaArticleProps {
  /** 'setting' = link to /tarifs, 'methode' = link to /methode/setting-linkedin */
  variant?: 'setting' | 'methode'
}

export function CtaArticle({ variant = 'setting' }: CtaArticleProps) {
  const config = variant === 'setting'
    ? {
        text: 'Tu veux qu\u2019on s\u2019occupe de ta prospection LinkedIn\u00a0?',
        sub: '790\u00a0\u20ac/mois, z\u00e9ro engagement, premiers RDV en 7\u00a0jours.',
        href: '/tarifs',
        label: 'Voir les tarifs',
      }
    : {
        text: 'Comment on g\u00e9n\u00e8re des RDV qualifi\u00e9s sur LinkedIn\u00a0?',
        sub: '9\u00a0\u00e9tapes, de la d\u00e9tection de signaux au RDV qualifi\u00e9.',
        href: '/methode/setting-linkedin',
        label: 'Voir la m\u00e9thode',
      }

  return (
    <div className="my-12 rounded-xl border border-accent/20 bg-accent/[0.03] p-6 text-center">
      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{config.text}</p>
      <p className="font-sans text-text-muted text-xs mb-4">{config.sub}</p>
      <a
        href={config.href}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-accent text-bg-primary font-sans text-sm font-semibold hover:bg-accent/90 transition-colors"
      >
        {config.label}
      </a>
    </div>
  )
}
