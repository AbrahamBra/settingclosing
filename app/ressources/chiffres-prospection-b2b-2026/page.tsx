import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Chiffres cl\u00e9s de la prospection B2B en 2026',
  description:
    'Taux de r\u00e9ponse LinkedIn, co\u00fbt par lead, salaire SDR, budget outils, taux de closing : tous les benchmarks de la prospection B2B en France, sourc\u00e9s et dat\u00e9s.',
  openGraph: {
    title: 'Chiffres cl\u00e9s de la prospection B2B en 2026',
    description:
      'Taux de r\u00e9ponse, co\u00fbt par lead, salaire SDR, budget outils. Les benchmarks 2026 de la prospection B2B en France.',
    locale: 'fr_FR',
    type: 'article',
    images: [{ url: 'https://www.setting.live/api/og?title=Chiffres%20cl%C3%A9s%20prospection%20B2B%202026&tag=Benchmark', width: 1200, height: 630, alt: 'Chiffres cl\u00e9s de la prospection B2B en 2026 \u2014 Setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chiffres cl\u00e9s de la prospection B2B en 2026',
    description: 'Benchmarks sourc\u00e9s : taux de r\u00e9ponse LinkedIn, co\u00fbt par lead, salaire SDR, budget outils.',
    images: ['https://www.setting.live/api/og?title=Chiffres%20cl%C3%A9s%20prospection%20B2B%202026&tag=Benchmark'],
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026',
    languages: {
      'fr': 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026',
      'x-default': 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026',
    },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026#article',
  headline: 'Chiffres cl\u00e9s de la prospection B2B en France (2026)',
  description: 'Benchmarks 2026 de la prospection B2B en France : taux de r\u00e9ponse LinkedIn, co\u00fbt par lead, salaire SDR, budget outils, taux de closing.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.setting.live/a-propos#abraham',
    name: 'Abraham Brakha',
    url: 'https://www.setting.live/equipe/abraham-brakha',
    sameAs: ['https://www.linkedin.com/in/abraham-brakha'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: { '@type': 'ImageObject', url: 'https://www.setting.live/icon.png' },
  },
  datePublished: '2026-04-01',
  dateModified: '2026-04-01',
  mainEntityOfPage: 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026',
  image: 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026/opengraph-image',
  inLanguage: 'fr-FR',
  wordCount: 2800,
  articleSection: 'Prospection B2B',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quel est le taux de r\u00e9ponse moyen en prospection LinkedIn B2B\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En 2026, le taux de r\u00e9ponse moyen en prospection LinkedIn B2B est de 2 \u00e0 5\u00a0% pour l\u2019automatisation pure, 5 \u00e0 15\u00a0% pour les messages manuels g\u00e9n\u00e9riques, et 20 \u00e0 35\u00a0% pour la prospection signal-based avec personnalisation humaine (source\u00a0: donn\u00e9es internes Setting.live, 500+ campagnes 2024-2026).',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien co\u00fbte un lead B2B en France\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le co\u00fbt par lead B2B en France en 2026 varie de 50 \u00e0 100\u00a0\u20ac pour la prospection LinkedIn externalis\u00e9e, 100 \u00e0 300\u00a0\u20ac pour Google Ads/LinkedIn Ads, et 200 \u00e0 800\u00a0\u20ac pour un SDR interne (co\u00fbt complet divis\u00e9 par le nombre de leads g\u00e9n\u00e9r\u00e9s).',
      },
    },
    {
      '@type': 'Question',
      name: 'Combien co\u00fbte un SDR en France en 2026\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un SDR en France co\u00fbte entre 43\u00a0500 et 55\u00a0000\u00a0\u20ac/an tout compris (salaire brut 30-45k\u00a0\u20ac + charges patronales ~45\u00a0% + outils 200-300\u00a0\u20ac/mois + management 2-5h/semaine). La dur\u00e9e moyenne en poste est de 14 \u00e0 18 mois.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    { '@type': 'ListItem', position: 3, name: 'Chiffres prospection B2B 2026', item: 'https://www.setting.live/ressources/chiffres-prospection-b2b-2026' },
  ],
}

export default function ChiffresProspectionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]) }}
      />

      <NavbarBlog />

      <main className="bg-bg-primary pt-28 pb-24">
        <article className="container-max max-w-3xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <li><a href="/" className="hover:text-accent transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li><a href="/ressources" className="hover:text-accent transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li className="text-text-secondary">Chiffres 2026</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">Benchmark</span>
            <h1 className="font-serif text-h1 text-text-primary mb-4 leading-tight">
              Chiffres cl&eacute;s de la prospection B2B en France (2026)
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl">
              Les vrais chiffres. Pas ceux des livres blancs sponsoris&eacute;s. Ceux qu&apos;on voit quand on fait de la prospection LinkedIn tous les jours depuis 2024.
            </p>
            <div className="mt-6"><AuthorBlock date="2026-04-01" readTime="10 min de lecture" /></div>
            <p className="font-mono text-xs text-text-muted mt-4">
              Derni&egrave;re mise &agrave; jour : avril 2026. Sources : donn&eacute;es internes Setting.live (500+ campagnes), LinkedIn, Glassdoor, APEC.
            </p>
          </header>

          <TldrBox>
            <ul className="list-disc list-inside space-y-1">
              <li>Taux de r&eacute;ponse LinkedIn&nbsp;: 2-5&nbsp;% en automatisation, 20-35&nbsp;% en signal-based.</li>
              <li>Co&ucirc;t par lead&nbsp;: 50-100&nbsp;&euro; (externalis&eacute;) vs 200-800&nbsp;&euro; (SDR interne).</li>
              <li>SDR interne co&ucirc;t r&eacute;el&nbsp;: 43&nbsp;500 - 55&nbsp;000&nbsp;&euro;/an tout compris.</li>
              <li>Taux de closing B2B moyen&nbsp;: 15-25&nbsp;% (sans coaching), 30-45&nbsp;% (avec).</li>
            </ul>
          </TldrBox>

          <div className="prose-custom space-y-14 mt-14">

            {/* Section 1 — Taux de réponse */}
            <section id="taux-reponse" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quel est le taux de r&eacute;ponse moyen en prospection LinkedIn&nbsp;?
              </h2>
              <p className="mb-6">
                Tout d&eacute;pend de la m&eacute;thode. Le m&ecirc;me message, envoy&eacute; &agrave; 100 personnes au hasard vs. 20 personnes qui viennent de montrer un signal d&apos;achat, ne produit pas le m&ecirc;me r&eacute;sultat.
              </p>

              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">M&eacute;thode</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">Taux de r&eacute;ponse</th>
                      <th className="px-3 py-3 text-left text-text-muted font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { method: 'Automatisation pure (Waalaxy, PhantomBuster)', rate: '2 - 5\u00a0%', source: 'Donn\u00e9es outils, forums utilisateurs' },
                      { method: 'Messages manuels g\u00e9n\u00e9riques', rate: '5 - 15\u00a0%', source: 'Moyennes observ\u00e9es secteur' },
                      { method: 'Messages personnalis\u00e9s sans signal', rate: '10 - 20\u00a0%', source: 'Setting.live, campagnes phase calibration' },
                      { method: 'Signal-based + personnalisation humaine', rate: '20 - 35\u00a0%', source: 'Setting.live, 500+ campagnes 2024-2026' },
                      { method: 'Relance sur prospect ayant vu le message', rate: '70 - 80\u00a0%', source: 'Setting.live, donn\u00e9es Reactin' },
                    ].map(({ method, rate, source }, i) => (
                      <tr key={method} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary">{method}</td>
                        <td className="px-3 py-3 text-center text-accent font-semibold">{rate}</td>
                        <td className="px-3 py-3 text-text-muted text-xs">{source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Le signal d&apos;achat fait la diff&eacute;rence. Quand tu contactes quelqu&apos;un qui vient de recruter un commercial, de publier sur LinkedIn sur un probl&egrave;me que tu r&eacute;sous, ou de lever des fonds, le contexte est l&agrave;. Tu n&apos;as pas besoin de le cr&eacute;er. La conversation d&eacute;marre plus vite parce que le sujet est d&eacute;j&agrave; dans la t&ecirc;te du prospect.
              </p>
            </section>

            {/* Section 2 — Coût par lead */}
            <section id="cout-par-lead" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Combien co&ucirc;te un lead B2B en France&nbsp;?
              </h2>
              <p className="mb-6">
                Le co&ucirc;t par lead varie du simple au d&eacute;cuple selon le canal. Et la plupart des entreprises ne calculent pas le vrai co&ucirc;t (management + outils + temps perdu sur les leads non qualifi&eacute;s).
              </p>

              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">Canal</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">Co&ucirc;t / lead qualifi&eacute;</th>
                      <th className="px-3 py-3 text-left text-text-muted font-semibold">Calcul</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { canal: 'SDR interne', cost: '200 - 800\u00a0\u20ac', calc: 'Co\u00fbt total annuel / leads g\u00e9n\u00e9r\u00e9s. Inclut ramp-up improductif.' },
                      { canal: 'Google Ads', cost: '100 - 300\u00a0\u20ac', calc: 'CPC moyen B2B France\u00a0: 3-15\u00a0\u20ac. Taux de conversion landing\u00a0: 2-5\u00a0%.' },
                      { canal: 'LinkedIn Ads', cost: '150 - 400\u00a0\u20ac', calc: 'CPC moyen\u00a0: 5-12\u00a0\u20ac. Taux conversion\u00a0: 1-3\u00a0%. Ciblage pr\u00e9cis mais cher.' },
                      { canal: 'Setting LinkedIn externalis\u00e9', cost: '50 - 100\u00a0\u20ac', calc: '790\u00a0\u20ac/mois \u00f7 8-15 RDV qualifi\u00e9s/mois.' },
                      { canal: 'Inbound (SEO + contenu)', cost: '30 - 80\u00a0\u20ac', calc: 'Moins cher par lead mais d\u00e9lai 6-12 mois avant volume.' },
                    ].map(({ canal, cost, calc }, i) => (
                      <tr key={canal} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary font-semibold">{canal}</td>
                        <td className="px-3 py-3 text-center text-accent font-semibold">{cost}</td>
                        <td className="px-3 py-3 text-text-muted text-xs">{calc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                La vraie m&eacute;trique, c&apos;est le co&ucirc;t par RDV qualifi&eacute;, pas le co&ucirc;t par lead brut. Un lead qui r&eacute;pond "int&eacute;ressant, envoyez-moi un email" n&apos;est pas un lead qualifi&eacute;. Un RDV qualifi&eacute;, c&apos;est un appel book&eacute; avec un prospect qui correspond &agrave; l&apos;ICP, qui a un besoin et un budget potentiel.
              </p>
            </section>

            {/* Section 3 — Coût SDR */}
            <section id="cout-sdr" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Combien co&ucirc;te un SDR en France en 2026&nbsp;?
              </h2>
              <p className="mb-6">
                Le salaire affich&eacute; sur l&apos;annonce, c&apos;est la partie visible. Le co&ucirc;t r&eacute;el pour l&apos;entreprise est 1,5x &agrave; 2x plus &eacute;lev&eacute;.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Co&ucirc;t r&eacute;el d&apos;un SDR interne (ann&eacute;e 1)
                </p>
                <div className="space-y-3">
                  {[
                    { item: 'Salaire brut', value: '30\u00a0000 - 45\u00a0000\u00a0\u20ac/an', note: 'Junior \u00e0 confirm\u00e9. Source\u00a0: Glassdoor, APEC 2026.' },
                    { item: 'Charges patronales (~45\u00a0%)', value: '+13\u00a0500 - 20\u00a0000\u00a0\u20ac', note: 'S\u00e9curit\u00e9 sociale, retraite, ch\u00f4mage.' },
                    { item: 'Outils (Sales Nav, CRM, enrichissement)', value: '+2\u00a0400 - 3\u00a0600\u00a0\u20ac/an', note: '200-300\u00a0\u20ac/mois.' },
                    { item: 'Management (2-5h/semaine)', value: '+5\u00a0000 - 10\u00a0000\u00a0\u20ac', note: 'Valoris\u00e9 au co\u00fbt horaire du manager.' },
                    { item: 'Total ann\u00e9e 1', value: '50\u00a0000 - 75\u00a0000\u00a0\u20ac', note: 'Dont 3-6 mois de ramp-up improductif.' },
                  ].map(({ item, value, note }) => (
                    <div key={item} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-sans text-sm text-text-primary font-semibold shrink-0 sm:w-52">{item}</span>
                      <span className="font-sans text-sm text-accent font-semibold shrink-0">{value}</span>
                      <span className="font-sans text-xs text-text-muted">{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                La dur&eacute;e moyenne d&apos;un SDR en poste en France est de 14 &agrave; 18 mois (source : LinkedIn Workforce Report 2025, Glassdoor). Chaque d&eacute;part relance le cycle recrutement-onboarding-ramp-up. Sur 3 ans, tu peux passer par 2 &agrave; 3 SDR diff&eacute;rents.
              </p>
              <p>
                En comparaison, un <a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">service de setting externalis&eacute;</a> co&ucirc;te ~10&nbsp;000&nbsp;&euro; par an (790&nbsp;&euro;/mois) et livre des RDV d&egrave;s la premi&egrave;re semaine. Tu ne portes ni les charges, ni le ramp-up, ni le management au quotidien.
              </p>
            </section>

            {/* Section 4 — Taux de closing */}
            <section id="taux-closing" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quel est le taux de closing moyen en B2B&nbsp;?
              </h2>
              <p className="mb-6">
                Le taux de closing, c&apos;est le ratio entre les appels r&eacute;alis&eacute;s et les deals sign&eacute;s. Il varie selon le secteur, le ticket moyen et la qualit&eacute; de la qualification en amont.
              </p>

              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">Contexte</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">Taux de closing</th>
                      <th className="px-3 py-3 text-left text-text-muted font-semibold">Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { ctx: 'Moyenne secteur B2B (tous confondus)', rate: '15 - 25\u00a0%', source: 'HubSpot Sales Report 2025' },
                      { ctx: 'SaaS B2B (ticket 500-5k\u00a0\u20ac)', rate: '20 - 30\u00a0%', source: 'Moyennes secteur SaaS' },
                      { ctx: 'Conseil / coaching (ticket 3-15k\u00a0\u20ac)', rate: '25 - 40\u00a0%', source: 'Setting.live, donn\u00e9es clients 2025-2026' },
                      { ctx: 'Apr\u00e8s coaching closing structur\u00e9', rate: '30 - 45\u00a0%', source: 'Setting.live, programme coaching 10 semaines' },
                    ].map(({ ctx, rate, source }, i) => (
                      <tr key={ctx} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary">{ctx}</td>
                        <td className="px-3 py-3 text-center text-accent font-semibold">{rate}</td>
                        <td className="px-3 py-3 text-text-muted text-xs">{source}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Le taux de closing d&eacute;pend surtout de la qualit&eacute; de la <a href="/ressources/closing-b2b" className="text-accent hover:underline transition-colors">discovery call</a> et de la qualification en amont. Si le setter envoie des prospects mal qualifi&eacute;s, le closeur perd du temps sur des appels sans issue. On le voit souvent : un fondateur qui close bien mais dont le pipeline est rempli de leads ti&egrave;des. Le probl&egrave;me n&apos;est pas le closing, c&apos;est le tri en amont.
              </p>
            </section>

            {/* Section 5 — Budget outils */}
            <section id="budget-outils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quel budget outils pour prospecter sur LinkedIn en 2026&nbsp;?
              </h2>

              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">Outil</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">Co&ucirc;t/mois</th>
                      <th className="px-3 py-3 text-left text-text-muted font-semibold">Indispensable&nbsp;?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: 'LinkedIn Sales Navigator', cost: '~100\u00a0\u20ac', need: 'Oui. Le ciblage avanc\u00e9 par signaux d\u2019achat n\u2019est pas possible sans.' },
                      { tool: 'Outil de connexion (Reactin, Waalaxy)', cost: '30 - 80\u00a0\u20ac', need: 'Oui pour g\u00e9rer le volume. Non si tu fais tout \u00e0 la main.' },
                      { tool: 'CRM (BreakCold, HubSpot Free)', cost: '0 - 29\u00a0\u20ac', need: 'Oui d\u00e8s 20+ conversations actives.' },
                      { tool: 'Enrichissement (Dropcontact, Kaspr)', cost: '30 - 80\u00a0\u20ac', need: 'Seulement si tu prospectes aussi par email.' },
                      { tool: 'IA co-r\u00e9dactrice (Claude, ChatGPT)', cost: '0 - 20\u00a0\u20ac', need: 'Utile. Acc\u00e9l\u00e8re la personnalisation, ne remplace pas le jugement.' },
                      { tool: 'Automatisation (Make, Zapier)', cost: '0 - 9\u00a0\u20ac', need: 'Optionnel. Pour automatiser le reporting et les workflows.' },
                    ].map(({ tool, cost, need }, i) => (
                      <tr key={tool} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary font-semibold">{tool}</td>
                        <td className="px-3 py-3 text-center text-accent">{cost}</td>
                        <td className="px-3 py-3 text-text-secondary text-xs">{need}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Budget minimal : 130&nbsp;&euro;/mois (Sales Navigator + outil de connexion). Budget confortable : 200-250&nbsp;&euro;/mois. Au-del&agrave;, tu payes pour du confort. On a test&eacute; des stacks &agrave; 500&nbsp;&euro;/mois sans diff&eacute;rence mesurable sur le nombre de RDV. Ce qui fait la diff&eacute;rence, c&apos;est le temps pass&eacute; &agrave; lire les profils, pas le nombre d&apos;outils.
              </p>
            </section>

            {/* Section 6 — FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes sur les chiffres de la prospection B2B
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {[
                  { q: 'Ces chiffres sont-ils fiables\u00a0?', a: 'Les donn\u00e9es de taux de r\u00e9ponse et de co\u00fbt par lead proviennent de 500+ campagnes g\u00e9r\u00e9es par Setting.live entre 2024 et 2026. Les donn\u00e9es salariales viennent de Glassdoor, APEC et LinkedIn Workforce Report. On met \u00e0 jour cette page chaque trimestre.' },
                  { q: 'Mon secteur est diff\u00e9rent, ces chiffres s\u2019appliquent-ils\u00a0?', a: 'Les fourchettes couvrent le B2B de services (conseil, SaaS, formation, coaching, agences). Pour l\u2019industrie, le m\u00e9dical ou le B2G, les cycles sont plus longs et les taux de r\u00e9ponse plus bas. Contactez-nous pour un benchmark sp\u00e9cifique.' },
                  { q: 'Pourquoi le setting externalis\u00e9 est-il moins cher qu\u2019un SDR interne\u00a0?', a: 'Pas de charges patronales, pas de ramp-up de 3-6 mois, pas de management \u00e0 votre charge. Le setter externalis\u00e9 est d\u00e9j\u00e0 form\u00e9 et op\u00e9rationnel d\u00e8s la semaine 1.' },
                ].map(({ q, a }, i) => (
                  <details key={q} className="group py-5" {...(i === 0 ? { open: true } : {})}>
                    <summary className="font-sans font-semibold text-text-primary cursor-pointer list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      {q}
                      <span className="shrink-0 text-accent transition-transform group-open:rotate-45 text-lg">+</span>
                    </summary>
                    <p className="font-sans text-text-secondary leading-relaxed text-sm mt-3">{a}</p>
                  </details>
                ))}
              </div>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-16">
            <CtaArticle variant="setting" />
          </div>

          {/* Related */}
          <RelatedArticles
            articles={[
              { href: '/ressources/setter-b2b', title: 'Setter B2B : r\u00f4le, salaire et quotidien', readTime: '12 min' },
              { href: '/externaliser-prospection-linkedin', title: 'Externaliser sa prospection LinkedIn B2B', readTime: '12 min' },
              { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : guide complet', readTime: '18 min' },
            ]}
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
