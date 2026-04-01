import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Setter B2B : r\u00f4le, salaire, outils et quotidien (2026)',
  description:
    'Le setter B2B qualifie les prospects avant le closing. R\u00f4le, comp\u00e9tences, salaire (25-45k \u20ac), outils, diff\u00e9rence avec le SDR et le closer. Guide terrain.',
  openGraph: {
    title: 'Setter B2B : le guide terrain (2026)',
    description:
      'R\u00f4le du setter, comp\u00e9tences, salaire, outils du quotidien et diff\u00e9rence avec SDR et closer.',
    locale: 'fr_FR',
    type: 'article',
    images: [{ url: 'https://www.setting.live/api/og?title=Setter%20B2B%20%3A%20le%20guide%20terrain&tag=Guide', width: 1200, height: 630, alt: 'Setter B2B : r\u00f4le, salaire et outils \u2014 Setting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Setter B2B : r\u00f4le, salaire, outils et quotidien (2026)',
    description: 'Le setter B2B qualifie les prospects avant le closing. Guide terrain complet.',
    images: ['https://www.setting.live/api/og?title=Setter%20B2B%20%3A%20le%20guide%20terrain&tag=Guide'],
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/setter-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/setter-b2b',
      'x-default': 'https://www.setting.live/ressources/setter-b2b',
    },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/setter-b2b#article',
  headline: 'Setter B2B : r\u00f4le, salaire, outils et quotidien',
  description: 'Le setter B2B qualifie les prospects avant le closing. R\u00f4le, comp\u00e9tences, salaire, outils, diff\u00e9rence avec le SDR et le closer.',
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
  mainEntityOfPage: 'https://www.setting.live/ressources/setter-b2b',
  image: 'https://www.setting.live/ressources/setter-b2b/opengraph-image',
  inLanguage: 'fr-FR',
  wordCount: 3200,
  articleSection: 'Setting commercial',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien gagne un setter B2B en France\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un setter B2B en France gagne entre 25\u00a0000 et 35\u00a0000\u00a0\u20ac brut/an en salari\u00e9 (junior \u00e0 confirm\u00e9). En freelance, la r\u00e9mun\u00e9ration est souvent bas\u00e9e sur une commission de 50 \u00e0 150\u00a0\u20ac par RDV qualifi\u00e9 transmis, soit 2\u00a0000 \u00e0 4\u00a0500\u00a0\u20ac/mois avec un pipeline actif.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle diff\u00e9rence entre un setter et un SDR\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le SDR (Sales Development Representative) couvre la prospection compl\u00e8te : d\u00e9tection, premier contact, qualification et parfois relance post-appel. Le setter se concentre sur la qualification et la prise de RDV. Son r\u00f4le commence apr\u00e8s la d\u00e9tection et s\u2019arr\u00eate au moment o\u00f9 le closeur prend l\u2019appel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels outils utilise un setter B2B au quotidien\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les outils courants\u00a0: LinkedIn Sales Navigator pour le ciblage (100\u00a0\u20ac/mois), un outil de connexion comme Reactin (50\u00a0\u20ac/mois), un CRM l\u00e9ger comme BreakCold ou HubSpot Free, et une IA co-r\u00e9dactrice (Claude ou ChatGPT) pour personnaliser les messages. Budget total\u00a0: 150 \u00e0 250\u00a0\u20ac/mois.',
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il recruter un setter ou externaliser\u00a0?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recruter un setter interne co\u00fbte 35\u00a0000 \u00e0 50\u00a0000\u00a0\u20ac/an (salaire + charges + outils + management) avec 3 \u00e0 6 mois de mont\u00e9e en comp\u00e9tence. Un service de setting externalis\u00e9 co\u00fbte 790 \u00e0 2\u00a0000\u00a0\u20ac/mois et livre des RDV d\u00e8s la premi\u00e8re semaine. L\u2019externalisation convient mieux aux solopreneurs et petites \u00e9quipes.',
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
    { '@type': 'ListItem', position: 3, name: 'Setter B2B', item: 'https://www.setting.live/ressources/setter-b2b' },
  ],
}

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab'

export default function SetterB2BPage() {
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
              <li className="text-text-secondary">Setter B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <span className="font-mono text-xs text-accent uppercase tracking-widest mb-4 block">Guide</span>
            <h1 className="font-serif text-h1 text-text-primary mb-4 leading-tight">
              Setter B2B : le m&eacute;tier qui remplit ton pipeline
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed max-w-2xl">
              Le setter, c&apos;est la personne qui transforme un profil LinkedIn en rendez-vous qualifi&eacute;.
              Pas un bot, pas un template copi&eacute;-coll&eacute;. Quelqu&apos;un qui lit un profil, comprend le contexte, et &eacute;crit un message qui a du sens.
            </p>
            <div className="mt-6"><AuthorBlock date="2026-04-01" readTime="12 min de lecture" /></div>
          </header>

          <TldrBox>
            <ul className="list-disc list-inside space-y-1">
              <li>Le setter qualifie les prospects, le closer vend. Deux m&eacute;tiers diff&eacute;rents.</li>
              <li>Salaire setter B2B en France&nbsp;: 25-35k&nbsp;&euro; salari&eacute;, 2-4,5k&nbsp;&euro;/mois en freelance.</li>
              <li>Outils du quotidien&nbsp;: Sales Navigator + Reactin + CRM + IA co-r&eacute;dactrice. 150-250&nbsp;&euro;/mois.</li>
              <li>Recruter un setter interne = 35-50k&nbsp;&euro;/an. Externaliser = 790&nbsp;&euro;/mois, RDV d&egrave;s J7.</li>
            </ul>
          </TldrBox>

          <div className="prose-custom space-y-14 mt-14">

            {/* Section 1 */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                C&apos;est quoi un setter B2B, concr&egrave;tement&nbsp;?
              </h2>
              <p className="mb-4">
                Un setter B2B, c&apos;est quelqu&apos;un qui rep&egrave;re les bons profils sur LinkedIn, &eacute;crit un premier message adapt&eacute; &agrave; chaque prospect, g&egrave;re la conversation et book un appel quand le prospect est pr&ecirc;t. Le setter ne vend rien. Son job s&apos;arr&ecirc;te quand le closeur prend le relais.
              </p>
              <p className="mb-4">
                Le mot vient de &laquo;&nbsp;to set an appointment&nbsp;&raquo;. En fran&ccedil;ais, on parle parfois de &laquo;&nbsp;prise de rendez-vous qualifi&eacute;e&nbsp;&raquo;, mais le terme &laquo;&nbsp;setting&nbsp;&raquo; s&apos;est impos&eacute; dans le B2B francophone depuis 2023.
              </p>
              <p>
                Un bon setter ne se mesure pas au nombre de messages envoy&eacute;s. Il se mesure au nombre de RDV qualifi&eacute;s. Chez Setting.live, on vise 2 &agrave; 4 RDV par semaine. Avec un taux de r&eacute;ponse de 20 &agrave; 35&nbsp;% (contre 2-5&nbsp;% en automatisation pure).
              </p>
            </section>

            {/* Section 2 — Quotidien */}
            <section id="quotidien" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                &Agrave; quoi ressemble la journ&eacute;e d&apos;un setter B2B&nbsp;?
              </h2>
              <p className="mb-4">
                Pas de surprise. C&apos;est un m&eacute;tier r&eacute;p&eacute;titif mais qui demande du jugement &agrave; chaque &eacute;tape. Voici une journ&eacute;e type.
              </p>
              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Journ&eacute;e type d&apos;un setter
                </p>
                <div className="space-y-3">
                  {[
                    { time: '8h30', task: 'V\u00e9rifier les r\u00e9ponses de la veille. R\u00e9pondre aux conversations ouvertes.' },
                    { time: '9h00', task: 'D\u00e9tecter les nouveaux signaux d\u2019achat sur Sales Navigator (changement de poste, recrutement, lev\u00e9e de fonds, post LinkedIn).' },
                    { time: '10h00', task: 'Analyser 20-30 profils. Filtrer ceux qui correspondent \u00e0 l\u2019ICP.' },
                    { time: '11h00', task: 'R\u00e9diger les messages du jour. Chaque message est ancr\u00e9 sur un fait pr\u00e9cis du profil. 5 lignes max. Pas de pitch.' },
                    { time: '14h00', task: 'G\u00e9rer les relances (J+3, J+7, J+21). Adapter le ton selon la r\u00e9ponse pr\u00e9c\u00e9dente.' },
                    { time: '15h30', task: 'Qualifier les prospects chauds. Scorer sur 5 niveaux de maturit\u00e9. Transf\u00e9rer les niveaux 4-5 au closeur avec un brief.' },
                    { time: '16h30', task: 'Reporting\u00a0: messages envoy\u00e9s, r\u00e9ponses, RDV book\u00e9s. Ajuster le ciblage pour le lendemain.' },
                  ].map((item) => (
                    <div key={item.time} className="flex gap-3">
                      <span className="font-mono text-accent text-xs shrink-0 w-12">{item.time}</span>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{item.task}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p>
                En volume, un setter g&egrave;re 20 &agrave; 40 messages par jour en phase active. C&apos;est peu compar&eacute; &agrave; l&apos;automatisation (200+ messages/jour). Mais c&apos;est le point : un message qui cite un post LinkedIn pr&eacute;cis du prospect obtient 10x plus de r&eacute;ponses qu&apos;un template envoy&eacute; &agrave; 500 personnes.
              </p>
            </section>

            {/* Section 3 — Setter vs SDR vs Closer */}
            <section id="setter-vs-sdr" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setter, SDR, closer : quelle diff&eacute;rence&nbsp;?
              </h2>
              <p className="mb-6">
                Les trois termes sont souvent confondus. Pourtant, ils d&eacute;signent trois jobs diff&eacute;rents dans le pipeline commercial.
              </p>

              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="px-3 py-3 text-center text-accent font-semibold">Setter</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">SDR</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">Closer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { crit: 'P\u00e9rim\u00e8tre', setter: 'Qualification + prise de RDV', sdr: 'Prospection compl\u00e8te (d\u00e9tection \u2192 RDV)', closer: 'Appel de vente + signature' },
                      { crit: 'Contact principal', setter: 'LinkedIn DM', sdr: 'LinkedIn + email + t\u00e9l\u00e9phone', closer: 'Appel visio ou t\u00e9l.' },
                      { crit: 'M\u00e9trique cl\u00e9', setter: 'RDV qualifi\u00e9s / semaine', sdr: 'Pipeline g\u00e9n\u00e9r\u00e9', closer: 'Taux de closing + CA sign\u00e9' },
                      { crit: 'Salaire FR (brut/an)', setter: '25-35k\u00a0\u20ac', sdr: '30-45k\u00a0\u20ac', closer: '35-60k\u00a0\u20ac + variable' },
                      { crit: 'Freelance possible', setter: 'Oui (50-150\u00a0\u20ac/RDV)', sdr: 'Rare', closer: 'Oui (8-15\u00a0% du CA sign\u00e9)' },
                    ].map(({ crit, setter, sdr, closer }, i) => (
                      <tr key={crit} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary font-semibold">{crit}</td>
                        <td className="px-3 py-3 text-center text-accent">{setter}</td>
                        <td className="px-3 py-3 text-center text-text-secondary">{sdr}</td>
                        <td className="px-3 py-3 text-center text-text-secondary">{closer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Le setter a un p&eacute;rim&egrave;tre plus cibl&eacute; que le SDR, qui couvre toute la cha&icirc;ne de prospection. Le closer, lui, prend le relais sur l&apos;appel de vente. Chez les solopreneurs B2B, c&apos;est presque toujours le setting qui manque. Le fondateur sait vendre son offre en appel. Mais personne ne remplit le pipeline pour qu&apos;il ait des appels.
              </p>
            </section>

            {/* Section 4 — Compétences */}
            <section id="competences" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quelles comp&eacute;tences faut-il pour &ecirc;tre setter B2B&nbsp;?
              </h2>
              <p className="mb-4">
                Le setting, c&apos;est pas technique. Tu n&apos;as pas besoin de savoir coder ou de ma&icirc;triser 10 outils. Ce qui compte, c&apos;est le jugement. Et &ccedil;a, &ccedil;a ne s&apos;apprend qu&apos;en faisant.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-6">
                {[
                  { title: 'Lecture de profil', desc: 'Comprendre en 30 secondes si un prospect vaut un message. Posts r\u00e9cents, changement de poste, recrutement en cours, secteur, taille de bo\u00eete.' },
                  { title: 'R\u00e9daction contextualis\u00e9e', desc: '\u00c9crire un message qui fait r\u00e9f\u00e9rence \u00e0 un fait pr\u00e9cis du prospect. Pas de template g\u00e9n\u00e9rique. Chaque message est unique.' },
                  { title: 'Gestion de conversation', desc: 'Relancer sans harceler. Poser les bonnes questions. Sentir quand un prospect h\u00e9site et quand il fuit.' },
                  { title: 'Qualification rigoureuse', desc: 'Scorer les prospects sur 5 niveaux. Ne transmettre que les 4-5 au closeur. Pas de RDV pour gonfler les chiffres.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-bg-secondary rounded-xl p-5">
                    <p className="font-sans font-semibold text-text-primary text-sm mb-2">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <p>
                Le facteur num&eacute;ro un, c&apos;est la pr&eacute;cision. Un setter qui envoie 20 messages bien plac&eacute;s g&eacute;n&egrave;re plus de RDV qu&apos;un outil qui en envoie 200 au hasard. On le voit chaque semaine.
              </p>
            </section>

            {/* Section 5 — Salaire */}
            <section id="salaire" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Combien gagne un setter B2B en France en 2026&nbsp;?
              </h2>
              <p className="mb-6">
                Le m&eacute;tier est r&eacute;cent en France. Les grilles de salaire ne sont pas encore stabilis&eacute;es. Voici ce qu&apos;on observe sur le terrain.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  R&eacute;mun&eacute;ration setter B2B (France, 2026)
                </p>
                <div className="space-y-4">
                  {[
                    { model: 'Salari\u00e9 junior (0-2 ans)', range: '25\u00a0000 - 30\u00a0000\u00a0\u20ac brut/an', note: 'Souvent en CDI dans des agences ou startups SaaS.' },
                    { model: 'Salari\u00e9 confirm\u00e9 (3+ ans)', range: '30\u00a0000 - 35\u00a0000\u00a0\u20ac brut/an', note: 'Peut monter \u00e0 40k\u00a0\u20ac avec un variable sur les RDV.' },
                    { model: 'Freelance (commission/RDV)', range: '50 - 150\u00a0\u20ac par RDV qualifi\u00e9', note: 'Soit 2\u00a0000 \u00e0 4\u00a0500\u00a0\u20ac/mois avec 30-40 RDV.' },
                    { model: 'Freelance (forfait mensuel)', range: '1\u00a0500 - 3\u00a0000\u00a0\u20ac/mois', note: 'Fixe + variable. Plus pr\u00e9visible pour le client.' },
                  ].map(({ model, range, note }) => (
                    <div key={model} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="font-sans text-sm text-text-primary font-semibold shrink-0 sm:w-56">{model}</span>
                      <span className="font-sans text-sm text-accent font-semibold">{range}</span>
                      <span className="font-sans text-xs text-text-muted">{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p>
                Pour comparer : un SDR interne co&ucirc;te 43&nbsp;500 &agrave; 55&nbsp;000&nbsp;&euro;/an tout compris (salaire + charges patronales + outils + management). Un service de <a href="/externaliser-prospection-linkedin" className="text-accent hover:underline transition-colors">setting externalis&eacute;</a> comme le n&ocirc;tre co&ucirc;te 790&nbsp;&euro;/mois et livre des RDV d&egrave;s la premi&egrave;re semaine.
              </p>
            </section>

            {/* Section 6 — Outils */}
            <section id="outils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Quels outils utilise un setter B2B au quotidien&nbsp;?
              </h2>
              <p className="mb-4">
                Le stack est l&eacute;ger. Pas besoin de 15 outils. Quatre suffisent.
              </p>
              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">Outil</th>
                      <th className="px-3 py-3 text-left text-text-muted font-semibold">Usage</th>
                      <th className="px-3 py-3 text-right text-text-muted font-semibold">Co&ucirc;t/mois</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: 'LinkedIn Sales Navigator', use: 'Ciblage, d\u00e9tection de signaux d\u2019achat', cost: '~100\u00a0\u20ac' },
                      { tool: 'Reactin', use: 'Connexion et suivi des messages LinkedIn', cost: '~50\u00a0\u20ac' },
                      { tool: 'BreakCold (ou HubSpot Free)', use: 'CRM\u00a0: suivi des conversations et du pipeline', cost: '0-29\u00a0\u20ac' },
                      { tool: 'Claude / ChatGPT', use: 'Co-r\u00e9daction de messages (pas d\u2019envoi automatique)', cost: '0-20\u00a0\u20ac' },
                    ].map(({ tool, use, cost }, i) => (
                      <tr key={tool} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary font-semibold">{tool}</td>
                        <td className="px-3 py-3 text-text-secondary">{use}</td>
                        <td className="px-3 py-3 text-right text-accent">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Budget total : 150 &agrave; 250&nbsp;&euro;/mois. L&apos;IA ne remplace pas le setter, elle lui fait gagner du temps sur la formulation. Concr&egrave;tement : le setter choisit l&apos;angle, l&apos;IA propose un brouillon, le setter relit et ajuste. Aucun message ne part sans qu&apos;un humain l&apos;ait valid&eacute;.
              </p>
            </section>

            {/* Section 7 — Recruter vs externaliser */}
            <section id="recruter-ou-externaliser" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Faut-il recruter un setter ou externaliser&nbsp;?
              </h2>
              <p className="mb-6">
                La r&eacute;ponse d&eacute;pend de ton volume et de ta structure.
              </p>
              <div className="overflow-x-auto mb-6" style={{ WebkitOverflowScrolling: 'touch' }}>
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left px-3 py-3 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="px-3 py-3 text-center text-text-muted font-semibold">Recrutement interne</th>
                      <th className="px-3 py-3 text-center text-accent font-semibold">Setting externalis&eacute;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { crit: 'Co\u00fbt ann\u00e9e 1', interne: '35\u00a0000 - 50\u00a0000\u00a0\u20ac', externe: '~10\u00a0000\u00a0\u20ac (790\u00a0\u20ac/mois)' },
                      { crit: 'D\u00e9lai avant RDV', interne: '3 \u00e0 6 mois (ramp-up)', externe: '< 7 jours' },
                      { crit: 'Risque si \u00e7a marche pas', interne: '\u00c9lev\u00e9 (pr\u00e9avis, co\u00fbts sunk)', externe: 'Faible (z\u00e9ro engagement)' },
                      { crit: 'Management n\u00e9cessaire', interne: '2-5h/semaine', externe: '30 min/semaine (review)' },
                      { crit: 'Scalabilit\u00e9', interne: 'Recruter un deuxi\u00e8me', externe: 'Ajouter un setter au programme' },
                    ].map(({ crit, interne, externe }, i) => (
                      <tr key={crit} className={`border-b border-white/[0.06] ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                        <td className="px-3 py-3 text-text-primary font-semibold">{crit}</td>
                        <td className="px-3 py-3 text-center text-text-secondary">{interne}</td>
                        <td className="px-3 py-3 text-center text-accent font-semibold">{externe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Si tu es seul ou en petite &eacute;quipe, l&apos;externalisation est plus logique. Pas de ramp-up de 6 mois, pas de risque salarial, tu peux arr&ecirc;ter quand tu veux. Le recrutement interne ne devient pertinent que quand tu as une &eacute;quipe commerciale structur&eacute;e et un besoin de 50+ RDV par mois.
              </p>
            </section>

            {/* Section 8 — FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes sur le setter B2B
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {[
                  { q: 'Combien gagne un setter B2B en France\u00a0?', a: 'Entre 25\u00a0000 et 35\u00a0000\u00a0\u20ac brut/an en salari\u00e9. En freelance, 50 \u00e0 150\u00a0\u20ac par RDV qualifi\u00e9, soit 2\u00a0000 \u00e0 4\u00a0500\u00a0\u20ac/mois avec un pipeline actif.' },
                  { q: 'Quelle diff\u00e9rence entre setter et SDR\u00a0?', a: 'Le SDR couvre toute la prospection (d\u00e9tection \u00e0 relance). Le setter se concentre sur la qualification et la prise de RDV. P\u00e9rim\u00e8tre plus cibl\u00e9, execution plus profonde.' },
                  { q: 'Faut-il une formation pour devenir setter\u00a0?', a: 'Pas de formation obligatoire. Les meilleures comp\u00e9tences s\u2019acqui\u00e8rent sur le terrain : lecture de profil, r\u00e9daction contextualis\u00e9e, gestion de conversation. Un bon setter peut d\u00e9marrer en 2-4 semaines avec un accompagnement.' },
                  { q: 'Un setter peut-il travailler en remote\u00a0?', a: 'Oui. Le setting LinkedIn est 100\u00a0% remote par nature. Le setter a besoin d\u2019un ordinateur, de Sales Navigator et d\u2019une connexion internet. Pas de bureau, pas de d\u00e9placement.' },
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
              { href: '/ressources/setting-commercial-b2b', title: 'Setting commercial B2B : guide complet', readTime: '18 min' },
              { href: '/ressources/closing-b2b', title: 'Closing B2B : structurer un appel qui convertit', readTime: '20 min' },
              { href: '/externaliser-prospection-linkedin', title: 'Externaliser sa prospection LinkedIn B2B', readTime: '12 min' },
            ]}
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
