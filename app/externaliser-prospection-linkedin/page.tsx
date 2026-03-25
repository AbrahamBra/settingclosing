import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { DarkCard } from '@/components/ui/DarkCard'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Externaliser sa prospection LinkedIn B2B | Setting',
  description:
    "Externalisez votre prospection LinkedIn à une équipe dédiée. Setter humain, ciblage IA par signaux d'achat, RDV qualifiés dès la première semaine.",
  alternates: {
    canonical: 'https://www.setting.live/externaliser-prospection-linkedin',
    languages: {
      'fr': 'https://www.setting.live/externaliser-prospection-linkedin',
      'x-default': 'https://www.setting.live/externaliser-prospection-linkedin',
    },
  },
  openGraph: {
    title: 'Externaliser sa prospection LinkedIn B2B | Setting',
    description:
      'Externalisez votre prospection LinkedIn. Setter dédié + IA signal-based. RDV qualifiés dès la semaine 1.',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Externalisation prospection LinkedIn B2B',
  description:
    "Service d'externalisation de la prospection LinkedIn pour consultants, fondateurs et solopreneurs B2B. Setter dédié, détection IA des signaux d'achat, RDV qualifiés dès la première semaine.",
  provider: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  serviceType: 'Prospection commerciale LinkedIn externalisée',
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  offers: {
    '@type': 'Offer',
    price: '790',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '790',
      priceCurrency: 'EUR',
      unitText: 'MON',
      billingDuration: 'P1M',
      valueAddedTaxIncluded: false,
    },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de temps avant les premiers résultats ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les premiers RDV arrivent généralement dans les 7 premiers jours. On définit votre cible et vos messages en 48h, puis le setter commence à prospecter immédiatement. Si vous avez moins de 5 RDV dans le premier mois, le mois suivant est offert.",
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que vous envoyez des messages sans mon accord ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Chaque message est relu et validé par un humain avant envoi. Rien ne part en automatique. Vous gardez le contrôle total sur ce qui sort sous votre nom.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le coût comparé à un SDR interne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un SDR junior coûte 35 000 à 45 000 €/an, plus 3 à 6 mois de montée en compétence. Si ça ne fonctionne pas, vous avez perdu 6 mois et plus de 20 000 €. L'externalisation démarre à 790 €/mois, sans engagement long terme.",
      },
    },
    {
      '@type': 'Question',
      name: "Et si mon offre n'est pas encore rodée ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "C'est justement un bon moment pour prospecter. Les retours terrain vous aident à affiner votre positionnement plus vite que n'importe quelle analyse interne. On travaille avec vous sur les messages pour tester plusieurs angles.",
      },
    },
    {
      '@type': 'Question',
      name: "Y a-t-il un engagement minimum ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Non. Pas d'engagement minimum imposé. On vous demande juste de nous laisser 30 jours pour que le pipeline produise ses premiers résultats.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: 'https://www.setting.live',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Externaliser sa prospection LinkedIn',
      item: 'https://www.setting.live/externaliser-prospection-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExternaliserProspectionLinkedinPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-20">

        {/* ── Breadcrumb ────────────────────────────────────────────────────── */}
        <nav
          aria-label="Fil d'Ariane"
          className="bg-bg-primary border-b border-white/[0.06]"
        >
          <div className="container-max py-3">
            <ol className="flex items-center gap-2 font-sans text-sm text-text-muted">
              <li>
                <Link href="/" className="hover:text-text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/20">
                /
              </li>
              <li className="text-text-secondary">
                Externaliser sa prospection LinkedIn
              </li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section id="hero" className="bg-bg-primary section-padding">
          <div className="container-max max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                Externalisation prospection LinkedIn
              </p>
              <h1 className="font-sans font-extrabold text-h1 text-text-primary mb-6 leading-tight">
                Externaliser sa prospection LinkedIn&nbsp;: pour qui, quand, comment
              </h1>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                Tu es bon pour d&eacute;livrer ton service. Mais la prospection prend du temps que tu n&apos;as pas.
                Tu as essay&eacute; des outils d&apos;automatisation et les r&eacute;sultats &eacute;taient d&eacute;cevants.
                Externaliser, c&apos;est confier cette partie &agrave; quelqu&apos;un qui fait &ccedil;a &agrave; plein temps.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                Discuter de mon projet
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pourquoi externaliser ────────────────────────────────────────── */}
        <section id="pourquoi" className="bg-bg-secondary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-12">
                Pourquoi externaliser sa prospection LinkedIn
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Tu n&apos;as pas le temps
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Bien prospecter sur LinkedIn prend 2 &agrave; 3 heures par jour.
                    Entre la livraison, l&apos;administratif et le commercial, la plupart des fondateurs n&apos;ont pas ces heures.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    L&apos;automatisation ne suffit pas
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Des outils comme Waalaxy ou PhantomBuster envoient des messages.
                    Mais sans jugement humain sur qui cibler et quoi dire, les taux de r&eacute;ponse restent &agrave; 2&ndash;5&nbsp;%.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Recruter un SDR est risqu&eacute;
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Un SDR junior co&ucirc;te 35&ndash;45&nbsp;k&euro;/an, plus 3 &agrave; 6 mois de mont&eacute;e en comp&eacute;tence.
                    Si &ccedil;a ne fonctionne pas, tu as perdu 6 mois et plus de 20&nbsp;000&nbsp;&euro;.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Pour qui c'est fait ──────────────────────────────────────────── */}
        <section id="pour-qui" className="bg-bg-primary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Pour qui c&apos;est fait
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
                Ce service est fait pour ceux qui vendent en B2B et ont besoin de RDV qualifi&eacute;s sans passer leurs journ&eacute;es sur LinkedIn.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Consultants et freelances B2B
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu vends de l&apos;expertise, pas du volume.
                    Tu as besoin de 3 &agrave; 5 RDV qualifi&eacute;s par semaine, pas de 100 messages envoy&eacute;s dans le vide.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Fondateurs de startups
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu dois valider ton march&eacute; et remplir ton pipeline pendant que tu construis le produit.
                    Faire les deux en m&ecirc;me temps sans aide, c&apos;est compliqu&eacute;.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard hover className="p-8 h-full">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Solopreneurs et coachs B2B
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Tu as l&apos;offre et les comp&eacute;tences pour d&eacute;livrer.
                    Il te manque juste un flux r&eacute;gulier de prospects qualifi&eacute;s.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Comment ça marche ────────────────────────────────────────────── */}
        <section id="comment-ca-marche" className="bg-bg-secondary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Comment &ccedil;a marche
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
                Trois &eacute;tapes. Pas de surprise. D&eacute;tails complets sur{' '}
                <Link href="/methode" className="text-accent hover:underline">
                  notre m&eacute;thode
                </Link>
                .
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0}>
                <DarkCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm">
                      1
                    </span>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary">
                      On d&eacute;finit ta cible
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    ICP, signaux d&apos;achat, messages. On cadre tout &ccedil;a ensemble en 48h.
                    Tu valides avant qu&apos;on commence.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm">
                      2
                    </span>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary">
                      Un setter prospecte pour toi
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    L&apos;IA d&eacute;tecte les signaux d&apos;achat. Les messages sont co-r&eacute;dig&eacute;s et valid&eacute;s par un humain avant chaque envoi.
                    Rien ne part en automatique.
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard className="p-8 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-sans font-bold text-sm">
                      3
                    </span>
                    <h3 className="font-sans font-extrabold text-h3 text-text-primary">
                      Tu re&ccedil;ois des RDV qualifi&eacute;s
                    </h3>
                  </div>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Premiers RDV d&egrave;s la premi&egrave;re semaine.
                    Reporting hebdomadaire avec les stats et les &eacute;changes.
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── Comparatif ────────────────────────────────────────────────────── */}
        <section id="comparatif" className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Combien co&ucirc;te vraiment la prospection&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-10 max-w-xl mx-auto">
                Les chiffres, c&ocirc;te &agrave; c&ocirc;te. Pas de discours marketing.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-3 min-w-[140px]" />
                      <th className="px-4 py-3 min-w-[130px] text-text-muted text-sm font-semibold text-center">SDR interne</th>
                      <th className="px-4 py-3 min-w-[130px] text-text-muted text-sm font-semibold text-center">Agence classique</th>
                      <th className="px-4 py-3 min-w-[130px] text-text-muted text-sm font-semibold text-center">Outil automation</th>
                      <th className="px-4 py-3 min-w-[130px] border-t-2 text-sm font-bold text-center" style={{ borderColor: '#C87533', background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>Setting.live</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-primary px-4 py-3 text-text-primary text-sm font-semibold">Co&ucirc;t mensuel</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&nbsp;000&ndash;4&nbsp;000&nbsp;&euro;</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">2&nbsp;000&ndash;5&nbsp;000&nbsp;&euro;</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">100&ndash;200&nbsp;&euro;</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>790&nbsp;&euro;</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-primary px-4 py-3 text-text-primary text-sm font-semibold">D&eacute;lai premier RDV</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&ndash;6 mois</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">2&ndash;4 semaines</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">1&ndash;2 semaines</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>&lt;&nbsp;7 jours</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-primary px-4 py-3 text-text-primary text-sm font-semibold">Taux de r&eacute;ponse</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">5&ndash;15&nbsp;%</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&ndash;8&nbsp;%</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">2&ndash;5&nbsp;%</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>20&ndash;35&nbsp;%</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-primary px-4 py-3 text-text-primary text-sm font-semibold">Engagement</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">CDI / CDD</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">3&ndash;12 mois</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Mensuel</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>Aucun</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-primary px-4 py-3 text-text-primary text-sm font-semibold">Personnalisation</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Variable</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Templates</td>
                      <td className="px-4 py-3 text-center text-text-secondary text-sm">Templates</td>
                      <td className="px-4 py-3 text-center text-sm font-semibold" style={{ background: 'rgba(200,117,51,0.04)', color: '#C87533' }}>IA + humain</td>
                    </tr>
                    <tr className="border-b border-white/[0.06]">
                      <td className="sticky left-0 bg-bg-primary px-4 py-3 text-text-primary text-sm font-semibold">Garantie r&eacute;sultats</td>
                      <td className="px-4 py-3 text-center"><span className="text-text-muted font-bold" aria-label="Non">&#x2717;</span></td>
                      <td className="px-4 py-3 text-center"><span className="text-text-muted font-bold" aria-label="Non">&#x2717;</span></td>
                      <td className="px-4 py-3 text-center"><span className="text-text-muted font-bold" aria-label="Non">&#x2717;</span></td>
                      <td className="px-4 py-3 text-center" style={{ background: 'rgba(200,117,51,0.04)' }}><span className="font-bold" style={{ color: '#C87533' }} aria-label="Oui">&#x2713;</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Résultats attendus ───────────────────────────────────────────── */}
        <section id="resultats" className="bg-bg-primary section-padding">
          <div className="container-max">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-4">
                Ce que tu peux attendre
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed text-center mb-12 max-w-xl mx-auto">
                Des chiffres bas&eacute;s sur les missions en cours. Pas des projections marketing.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <ScrollReveal delay={0}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">~3</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    RDV qualifi&eacute;s par semaine
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">20&ndash;35&nbsp;%</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    de taux de r&eacute;ponse (vs 2&ndash;5&nbsp;% en automatisation)
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">7 j</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    pour les premiers r&eacute;sultats
                  </p>
                </DarkCard>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <DarkCard accent className="p-8 text-center h-full">
                  <p className="font-sans font-extrabold text-4xl text-accent mb-2">Garanti</p>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Moins de 5 RDV dans le mois, le suivant est offert
                  </p>
                </DarkCard>
              </ScrollReveal>
            </div>
            <ScrollReveal>
              <p className="font-sans text-text-muted text-sm text-center">
                Pour en savoir plus sur la m&eacute;thode derri&egrave;re ces r&eacute;sultats, lisez{' '}
                <Link href="/ressources/setting-commercial-b2b" className="text-accent hover:underline">
                  notre guide sur le setting commercial B2B
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Pricing teaser ───────────────────────────────────────────────── */}
        <section id="tarifs" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Combien &ccedil;a co&ucirc;te&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
                Le service d&eacute;marre &agrave; <strong className="text-text-primary">790&nbsp;&euro;/mois</strong>.
                Pas d&apos;engagement ann&eacute;el. Pas de frais cach&eacute;s.
              </p>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                La structure tarifaire compl&egrave;te avec les diff&eacute;rentes formules est sur{' '}
                <Link href="/tarifs" className="text-accent hover:underline">
                  la page tarifs
                </Link>
                .
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq" className="bg-bg-primary section-padding">
          <div className="container-max max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary text-center mb-12">
                Questions fr&eacute;quentes
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-4">

              <ScrollReveal delay={0}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Combien de temps avant les premiers r&eacute;sultats&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Les premiers RDV arrivent g&eacute;n&eacute;ralement dans les 7 premiers jours.
                    On d&eacute;finit ta cible et tes messages en 48h, puis le setter commence &agrave; prospecter.
                    Si tu as moins de 5 RDV dans le premier mois, le mois suivant est offert.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={60}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Est-ce que tu envoies des messages sans mon accord&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Non. Chaque message est relu et valid&eacute; par un humain avant envoi.
                    Rien ne part en automatique.
                    Tu gardes le contr&ocirc;le sur ce qui sort sous ton nom.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Quel est le co&ucirc;t compar&eacute; &agrave; un SDR interne&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Un SDR junior co&ucirc;te 35 &agrave; 45&nbsp;k&euro;/an, plus 3 &agrave; 6 mois de mont&eacute;e en comp&eacute;tence.
                    Si &ccedil;a ne fonctionne pas, tu as perdu 6 mois et plus de 20&nbsp;000&nbsp;&euro;.
                    L&apos;externalisation d&eacute;marre &agrave; 790&nbsp;&euro;/mois, sans engagement long terme.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Et si mon offre n&apos;est pas encore rod&eacute;e&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    C&apos;est justement un bon moment pour prospecter.
                    Les retours terrain affinent ton positionnement plus vite que n&apos;importe quelle analyse interne.
                    On travaille avec toi sur les messages pour tester plusieurs angles.
                  </p>
                </DarkCard>
              </ScrollReveal>

              <ScrollReveal delay={240}>
                <DarkCard className="p-8">
                  <h3 className="font-sans font-extrabold text-h3 text-text-primary mb-3">
                    Y a-t-il un engagement minimum&nbsp;?
                  </h3>
                  <p className="font-sans text-text-secondary text-lg leading-relaxed">
                    Non. Pas d&apos;engagement minimum impos&eacute;.
                    On te demande juste de nous laisser 30 jours pour que le pipeline produise ses premiers r&eacute;sultats.
                  </p>
                </DarkCard>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── Voir aussi ────────────────────────────────────────────────── */}
        <section className="bg-bg-primary section-padding">
          <div className="container-max max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="font-sans text-xs font-semibold tracking-widest text-text-muted uppercase mb-6">Voir aussi</p>
              <div className="grid sm:grid-cols-3 gap-4">
                <a href="/methode/setting-linkedin" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">La méthode en 9 étapes</p>
                  <p className="font-sans text-sm text-text-muted">Du signal d'achat au RDV qualifié : le pipeline complet.</p>
                </a>
                <a href="/resultats" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Résultats clients</p>
                  <p className="font-sans text-sm text-text-muted">3+ RDV qualifiés par semaine, premiers résultats en 7 jours.</p>
                </a>
                <a href="/tarifs" className="group block border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                  <p className="font-sans font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">Tarifs</p>
                  <p className="font-sans text-sm text-text-muted">D\u00e8s 490\u00a0\u20ac de setup + 790\u00a0\u20ac/mois. Sans engagement.</p>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA finale ───────────────────────────────────────────────────── */}
        <section id="cta" className="bg-bg-secondary section-padding">
          <div className="container-max max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-sans font-extrabold text-h2 text-text-primary mb-4">
                Pr&ecirc;t &agrave; externaliser ta prospection&nbsp;?
              </h2>
              <p className="font-sans text-text-secondary text-lg leading-relaxed mb-8">
                Un appel de 30 minutes pour &eacute;valuer si ce service correspond &agrave; ta situation.
                Pas de pitch agressif. Juste une conversation franche.
              </p>
              <ButtonGlow as="a" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                R&eacute;server un appel d&eacute;couverte
              </ButtonGlow>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
