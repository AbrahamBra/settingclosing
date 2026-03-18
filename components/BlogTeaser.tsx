import Link from 'next/link'
import { DarkCard } from './ui/DarkCard'
import { ScrollReveal } from './ui/ScrollReveal'

const featured = {
  category: 'Méthode',
  categoryColor: '#FBBF24',
  title: "Signaux d'achat LinkedIn : le guide complet",
  meta: 'Par Abraham · 12 min',
}

const articles = [
  {
    category: 'Setting',
    categoryColor: '#818CF8',
    title: 'Le Setter B2B : architecte de la prise de RDV qualifié',
    meta: '8 min',
  },
  {
    category: 'Closing',
    categoryColor: '#34D399',
    title: 'Challenger Sale : transformer vos appels en closing',
    meta: '10 min',
  },
]

export function BlogTeaser() {
  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-h2 text-white">Derniers articles</h2>
            <Link
              href="/blog"
              className="font-sans text-accent hover:underline text-sm font-semibold"
            >
              Tout voir →
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid: 3-col on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured card — spans 2 cols */}
          <ScrollReveal className="lg:col-span-2" delay={100}>
            <DarkCard hover className="p-6 h-full flex flex-col">
              {/* Image placeholder */}
              <div
                className="h-48 rounded-lg border border-dashed border-white/[0.08] flex items-center justify-center mb-5"
                style={{ background: 'rgba(251, 191, 36, 0.04)' }}
              >
                <span className="text-text-muted text-sm">Image article</span>
              </div>

              {/* Category pill */}
              <span
                className="inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-semibold font-sans mb-3"
                style={{
                  background: `${featured.categoryColor}18`,
                  color: featured.categoryColor,
                }}
              >
                {featured.category}
              </span>

              <h3 className="font-serif text-xl text-white mb-2">{featured.title}</h3>
              <p className="font-sans text-text-muted text-sm mt-auto">{featured.meta}</p>
            </DarkCard>
          </ScrollReveal>

          {/* Two small cards stacked */}
          <div className="flex flex-col gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <DarkCard hover className="p-5 flex flex-col">
                  {/* Image placeholder */}
                  <div
                    className="h-24 rounded-lg border border-dashed border-white/[0.08] flex items-center justify-center mb-4"
                    style={{ background: `${article.categoryColor}08` }}
                  >
                    <span className="text-text-muted text-xs">Image article</span>
                  </div>

                  {/* Category pill */}
                  <span
                    className="inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-semibold font-sans mb-2"
                    style={{
                      background: `${article.categoryColor}18`,
                      color: article.categoryColor,
                    }}
                  >
                    {article.category}
                  </span>

                  <h4 className="font-sans font-semibold text-white text-sm mb-1.5">
                    {article.title}
                  </h4>
                  <p className="font-sans text-text-muted text-xs">{article.meta}</p>
                </DarkCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
