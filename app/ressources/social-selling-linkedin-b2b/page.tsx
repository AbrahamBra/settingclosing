import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Social selling LinkedIn : d\u00e9finition, m\u00e9thode et SSI en B2B | Setting',
  description:
    'Le social selling LinkedIn consiste \u00e0 vendre via son r\u00e9seau professionnel. D\u00e9finition, m\u00e9thode, Social Selling Index (SSI) et lien avec le setting B2B.',
  openGraph: {
    title: 'Social selling LinkedIn : d\u00e9finition, m\u00e9thode et SSI en B2B',
    description:
      'Le social selling LinkedIn consiste \u00e0 vendre via son r\u00e9seau professionnel. D\u00e9finition, m\u00e9thode, Social Selling Index (SSI) et lien avec le setting B2B.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
      'x-default': 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social selling LinkedIn : d\u00e9finition, m\u00e9thode et SSI en B2B',
    description: 'Le social selling LinkedIn consiste \u00e0 vendre via son r\u00e9seau professionnel. D\u00e9finition, m\u00e9thode, Social Selling Index (SSI) et lien avec le setting B2B.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
  headline: 'Social selling LinkedIn : d\u00e9finition, m\u00e9thode et SSI en B2B',
  description:
    'Le social selling LinkedIn consiste \u00e0 vendre via son r\u00e9seau professionnel. D\u00e9finition, m\u00e9thode, Social Selling Index (SSI) et lien avec le setting B2B.',
  author: {
    '@type': 'Person',
    '@id': 'https://www.setting.live/a-propos#abraham',
    name: 'Abraham Brakha',
    url: 'https://www.setting.live/equipe/abraham-brakha',
    jobTitle: 'Fondateur & Automatisation IA',
    sameAs: ['https://www.linkedin.com/in/abraham-brakha'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: 'https://www.setting.live/opengraph-image',
  },
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  inLanguage: 'fr-FR',
  wordCount: 3000,
  url: 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
  },
  about: [
    { '@type': 'Thing', name: 'Social selling LinkedIn' },
    { '@type': 'Thing', name: 'Social Selling Index' },
    { '@type': 'Thing', name: 'Setting commercial B2B' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#definition', '#ssi'],
  },
}

const faqItems = [
  {
    question: "C'est quoi un bon score SSI LinkedIn ?",
    answer:
      "Un SSI au-dessus de 70 est consid\u00e9r\u00e9 bon par LinkedIn. Mais attention : le SSI mesure ton activit\u00e9 sur la plateforme, pas ta capacit\u00e9 \u00e0 convertir. Un score de 85 sans aucun RDV g\u00e9n\u00e9r\u00e9, \u00e7a ne sert \u00e0 rien. Regarde ton SSI comme un indicateur d\u2019hygi\u00e8ne, pas comme un KPI business.",
  },
  {
    question: 'Le social selling remplace-t-il la prospection ?',
    answer:
      "Non, il la compl\u00e8te. Le social selling cr\u00e9e les conditions : visibilit\u00e9, cr\u00e9dibilit\u00e9, signaux d\u2019int\u00e9r\u00eat. La prospection (setting) convertit ces signaux en RDV. Sans social selling, tu prospectes \u00e0 froid. Sans setting, tu accumules de l\u2019engagement sans pipeline.",
  },
  {
    question: 'Combien de temps investir dans le social selling ?',
    answer:
      "Minimum 3 \u00e0 5 heures par semaine. R\u00e9partition type : 1h30 de cr\u00e9ation de contenu (2-3 posts), 2h d\u2019engagement cibl\u00e9 (commentaires chez tes prospects et partenaires), 1h de d\u00e9tection de signaux et premier contact. En dessous de 3h, les r\u00e9sultats sont trop lents pour justifier l\u2019effort.",
  },
  {
    question: 'Le social selling marche sans publier de contenu ?',
    answer:
      "Partiellement. Tu peux g\u00e9n\u00e9rer des signaux en commentant chez d\u2019autres, en r\u00e9agissant aux posts de tes prospects, en partageant du contenu tiers. Mais sans contenu propre, tu n\u2019as pas de preuve d\u2019expertise visible. Les prospects qui visitent ton profil n\u2019y trouvent rien. Le combo contenu + engagement est nettement plus efficace.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.setting.live' },
    { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://www.setting.live/ressources' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Social selling LinkedIn B2B',
      item: 'https://www.setting.live/ressources/social-selling-linkedin-b2b',
    },
  ],
}

export default function SocialSellingLinkedInB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Social selling LinkedIn B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Social Selling &middot; LinkedIn &middot; B2B
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Social selling LinkedIn : d&eacute;finition, m&eacute;thode et SSI en B2B
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le social selling, c&apos;est vendre en construisant des relations avant de pitcher.
              Sur LinkedIn, &ccedil;a passe par du contenu, de l&apos;engagement cibl&eacute; et une
              d&eacute;tection de signaux. Mais un bon SSI ne remplace pas un pipeline. Ce guide
              couvre la d&eacute;finition, la m&eacute;thode, le Social Selling Index et le lien
              concret avec le setting B2B.
            </p>
            <AuthorBlock date="2026-03-25" readTime="12 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p>Le social selling LinkedIn consiste &agrave; g&eacute;n&eacute;rer de la confiance et des signaux d&apos;int&eacute;r&ecirc;t via ton profil et ton contenu, avant tout contact direct. Le SSI mesure ton activit&eacute; mais pas tes conversions. Pour transformer les signaux en RDV, il faut combiner social selling (visibilit&eacute;) et setting (conversion). 3 &agrave; 5h/semaine minimum, contenu + engagement + d&eacute;tection.</p>
          </TldrBox>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '78%', label: 'des social sellers d\u00e9passent leurs pairs non actifs' },
              { stat: '3\u20135h', label: 'par semaine pour des r\u00e9sultats visibles' },
              { stat: '70+', label: 'score SSI consid\u00e9r\u00e9 bon par LinkedIn' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: 'Social selling LinkedIn : d\u00e9finition' },
                { id: 'ssi', label: 'Le Social Selling Index : ce que \u00e7a mesure vraiment' },
                { id: 'vs-prospection', label: 'Social selling vs prospection LinkedIn' },
                { id: 'piliers', label: "Les 5 piliers d'une strat\u00e9gie social selling" },
                { id: 'setting-combo', label: 'Social selling et setting : la combinaison qui fonctionne' },
                { id: 'telephonique', label: 'Social selling et setting t\u00e9l\u00e9phonique' },
                { id: 'roi', label: 'Mesurer le ROI du social selling' },
                { id: 'faq', label: 'Questions fr\u00e9quentes' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${id}`}
                    className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* Section 1 — D\u00e9finition */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Social selling LinkedIn : d&eacute;finition
              </h2>
              <p className="mb-4">
                Le social selling, c&apos;est utiliser ton r&eacute;seau professionnel pour g&eacute;n&eacute;rer des opportunit&eacute;s commerciales. Pas en spammant des DMs. En construisant une pr&eacute;sence cr&eacute;dible, en &eacute;changeant avec ta cible et en cr&eacute;ant des points de contact avant le moindre pitch.
              </p>
              <p className="mb-4">
                Concr&egrave;tement, le social selling LinkedIn repose sur le personal branding (ton profil et ton contenu montrent que tu ma&icirc;trises ton sujet), l&apos;engagement cibl&eacute; (tu commentes et r&eacute;agis l&agrave; o&ugrave; tes prospects sont actifs) et la prospection douce (ton premier message arrive apr&egrave;s que le prospect t&apos;a d&eacute;j&agrave; vu quelque part).
              </p>
              <p className="mb-4">
                La diff&eacute;rence avec le cold outreach classique est claire. En cold, tu contactes un inconnu qui ne t&apos;a jamais vu. En social selling, tu contactes quelqu&apos;un qui a d&eacute;j&agrave; crois&eacute; ton nom ou lu un de tes posts. Le taux de r&eacute;ponse n&apos;a rien &agrave; voir.
              </p>
              <p className="mb-4">
                Le social selling ne remplace pas la vente. Il cr&eacute;e les conditions pour que la vente soit plus facile. Tu r&eacute;chauffes le terrain. Quand tu envoies un message &agrave; un prospect qui a lik&eacute; 3 de tes posts, tu n&apos;es plus un inconnu. Tu es quelqu&apos;un dont il conna&icirc;t le point de vue.
              </p>
              <p>
                C&apos;est un jeu de long terme. Et c&apos;est pr&eacute;cis&eacute;ment pour &ccedil;a qu&apos;il fonctionne mieux quand il est coupl&eacute; &agrave; une action directe de <a href="/ressources/setting-linkedin-definition" className="text-accent hover:underline">setting LinkedIn</a> pour convertir les signaux en RDV.
              </p>
            </section>

            {/* Section 2 — SSI */}
            <section id="ssi" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Le Social Selling Index : ce que &ccedil;a mesure vraiment
              </h2>
              <p className="mb-4">
                Le Social Selling Index (SSI) est un score LinkedIn sur 100, mis &agrave; jour quotidiennement. Tu peux le consulter gratuitement sur <span className="text-text-primary">linkedin.com/sales/ssi</span>. Il mesure ta performance sur 4 piliers, chacun not&eacute; sur 25.
              </p>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <ul className="space-y-3 text-sm">
                  <li><span className="text-text-primary font-semibold">1. &Eacute;tablir ta marque professionnelle</span> : profil complet, contenu publi&eacute;, engagement re&ccedil;u sur tes posts</li>
                  <li><span className="text-text-primary font-semibold">2. Trouver les bonnes personnes</span> : utilisation des filtres de recherche, consultation de profils dans ton ICP</li>
                  <li><span className="text-text-primary font-semibold">3. &Eacute;changer des insights</span> : partage de contenu pertinent, conversations initi&eacute;es, messages envoy&eacute;s</li>
                  <li><span className="text-text-primary font-semibold">4. Construire des relations</span> : taux d&apos;acceptation, connexions avec des d&eacute;cideurs, interactions r&eacute;currentes</li>
                </ul>
              </div>

              <p className="mb-4">
                Le score moyen en France tourne autour de 25-35. Un commercial actif sur LinkedIn monte g&eacute;n&eacute;ralement entre 50 et 70. Au-dessus de 70, LinkedIn te consid&egrave;re comme un bon social seller.
              </p>
              <p className="mb-4">
                Mais voici le probl&egrave;me : LinkedIn d&eacute;-emphase le SSI. Il n&apos;est plus mis en avant dans l&apos;interface, il ne figure plus dans les formations officielles r&eacute;centes. La raison probable : le SSI encourageait des comportements de vanity (liker en masse, publier pour publier) sans corr&eacute;lation directe avec les ventes.
              </p>
              <p className="mb-4">
                Un SSI de 90 avec z&eacute;ro RDV g&eacute;n&eacute;r&eacute;, c&apos;est un score d&apos;activit&eacute;, pas de performance. Un SSI de 55 avec 8 RDV par mois, c&apos;est un business qui tourne.
              </p>
              <p>
                Utilise le SSI comme un indicateur d&apos;hygi&egrave;ne. Si tu es en dessous de 40, tu n&apos;es probablement pas assez actif. Mais ne le traite jamais comme un KPI business. Le vrai KPI, c&apos;est le nombre de RDV qualifi&eacute;s.
              </p>
            </section>

            {/* Section 3 — Social selling vs prospection */}
            <section id="vs-prospection" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Social selling vs prospection LinkedIn : quelle diff&eacute;rence ?
              </h2>
              <p className="mb-4">
                Les deux termes sont souvent confondus. Ils ne d&eacute;signent pas la m&ecirc;me chose.
              </p>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-text-primary font-semibold mb-2">Social selling</p>
                    <ul className="space-y-1">
                      <li>Long terme, branding</li>
                      <li>Contenu + engagement</li>
                      <li>Objectif : visibilit&eacute; et signaux</li>
                      <li>Pas de contact direct imm&eacute;diat</li>
                      <li>Indicateur : SSI, engagement, vues</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-text-primary font-semibold mb-2">Prospection LinkedIn</p>
                    <ul className="space-y-1">
                      <li>Court terme, conversion</li>
                      <li>Message personnalis&eacute;</li>
                      <li>Objectif : RDV qualifi&eacute;</li>
                      <li>Contact direct, one-to-one</li>
                      <li>Indicateur : taux de r&eacute;ponse, RDV</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                Le social selling pr&eacute;pare le terrain. La <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline">prospection LinkedIn</a> exploite ce terrain. L&apos;un sans l&apos;autre fonctionne, mais les deux ensemble multiplient les r&eacute;sultats.
              </p>
              <p className="mb-4">
                Si tu fais du social selling sans jamais prospecter, tu accumules de l&apos;audience sans pipeline. Si tu prospectes sans social selling, tu envoies des messages froids &agrave; des gens qui ne te connaissent pas.
              </p>
              <p>
                Le <a href="/ressources/setting-commercial-linkedin" className="text-accent hover:underline">setting commercial</a> combine les deux. Le setter utilise les signaux g&eacute;n&eacute;r&eacute;s par le social selling (qui a r&eacute;agi, qui a visit&eacute; le profil, qui a comment&eacute;) pour envoyer des messages ancr&eacute;s sur un fait pr&eacute;cis. R&eacute;sultat : un premier contact qui ne ressemble pas &agrave; du d&eacute;marchage.
              </p>
            </section>

            {/* Section 4 — 5 piliers */}
            <section id="piliers" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les 5 piliers d&apos;une strat&eacute;gie social selling
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">1. Profil optimis&eacute;</h3>
                  <p>
                    Ton profil est ta landing page. Le headline doit dire ce que tu fais pour tes clients, pas ton titre de poste. La banni&egrave;re affiche ta proposition de valeur. La section &laquo;&nbsp;&Agrave; propos&nbsp;&raquo; suit le sch&eacute;ma : probl&egrave;me + solution + preuve. Les prospects qui te d&eacute;couvrent via un commentaire iront syst&eacute;matiquement v&eacute;rifier ton profil. S&apos;il est vide ou g&eacute;n&eacute;rique, la confiance s&apos;arr&ecirc;te l&agrave;.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">2. Contenu r&eacute;gulier (2-3 posts par semaine)</h3>
                  <p>
                    Publier du contenu prouve ton expertise, te rend visible dans le fil de tes prospects et g&eacute;n&egrave;re des signaux exploitables (qui like, qui commente, qui partage). Pas besoin de devenir cr&eacute;ateur &agrave; plein temps. 2 &agrave; 3 posts par semaine sur tes sujets de pr&eacute;dilection suffisent. Formats qui marchent : retour d&apos;exp&eacute;rience, opinion tranch&eacute;e, m&eacute;thode concr&egrave;te.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">3. Engagement cibl&eacute;</h3>
                  <p>
                    Commenter chez tes prospects et partenaires est le levier le plus sous-estim&eacute;. Quand tu laisses un commentaire pertinent sous le post d&apos;un prospect, il voit ton nom, clique sur ton profil, et retient ta t&ecirc;te. Au bout de 3-4 interactions, tu n&apos;es plus un inconnu. Cible 5 &agrave; 10 profils strat&eacute;giques par jour. Pas de commentaires vides (&laquo;&nbsp;Super post !&nbsp;&raquo;). Un vrai point de vue ajout&eacute;.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">4. D&eacute;tection de signaux</h3>
                  <p>
                    Chaque interaction sur LinkedIn est un <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline">signal d&apos;achat</a> potentiel. Un prospect qui like ton post sur la prospection B2B montre un int&eacute;r&ecirc;t pour le sujet. Un prospect qui commente chez un concurrent &eacute;value probablement des options. Un changement de poste signale un nouveau budget ou de nouvelles priorit&eacute;s. Surveille ces signaux quotidiennement.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">5. Premier contact ancr&eacute; sur un signal</h3>
                  <p>
                    Le social selling ne s&apos;arr&ecirc;te pas &agrave; l&apos;engagement passif. &Agrave; un moment, il faut initier la conversation. Mais pas n&apos;importe comment. Ton premier message doit mentionner un fait pr&eacute;cis : le post que le prospect a comment&eacute;, la r&eacute;action qu&apos;il a eue, son changement de poste. C&apos;est ce qui transforme un message de prospection en message de social selling. Le prospect voit que tu as pr&ecirc;t&eacute; attention &agrave; son activit&eacute;, pas que tu l&apos;as ajout&eacute; &agrave; une liste.
                  </p>
                </div>
              </div>
            </section>

            <CtaArticle variant="methode" />

            {/* Section 5 — Setting combo */}
            <section id="setting-combo" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Social selling et setting : la combinaison qui fonctionne
              </h2>
              <p className="mb-4">
                Le social selling g&eacute;n&egrave;re des signaux. Le setting les exploite.
              </p>
              <p className="mb-4">
                Quand tu publies du contenu et que tu t&apos;engages activement, des prospects r&eacute;agissent. Ils likent, commentent, visitent ton profil. Chacune de ces actions est un signal exploitable. Mais encore faut-il les capter et agir dessus au bon moment.
              </p>
              <p className="mb-4">
                Chez Setting, on utilise Reactin pour surveiller les r&eacute;actions aux posts du client. D&egrave;s qu&apos;un prospect dans l&apos;ICP r&eacute;agit, le setter re&ccedil;oit une alerte. Il analyse le profil, identifie le signal, et r&eacute;dige un message personnalis&eacute; dans les 24 heures.
              </p>
              <p className="mb-4">
                Le timing compte. Un prospect qui a lik&eacute; ton post il y a 2 heures est plus r&eacute;ceptif qu&apos;un prospect qui l&apos;a fait il y a 2 semaines. Sans r&eacute;activit&eacute;, le social selling reste du branding. Avec un setter qui agit vite, il devient un canal d&apos;acquisition.
              </p>
              <p className="mb-4">
                La m&eacute;thode combine aussi l&apos;<a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline">IA et l&apos;humain</a>. L&apos;IA d&eacute;tecte les signaux &agrave; &eacute;chelle (qui a r&eacute;agi, qui correspond &agrave; l&apos;ICP, quel est le contexte). Le setter humain r&eacute;dige le message, adapte le ton et g&egrave;re la conversation. L&apos;IA lui donne les bonnes cibles au bon moment.
              </p>
              <p>
                En pratique, les clients Setting qui combinent social selling actif et setting r&eacute;actif obtiennent un taux de r&eacute;ponse 2 &agrave; 3 fois sup&eacute;rieur &agrave; ceux qui font de la prospection &agrave; froid.
              </p>
            </section>

            {/* Section 6 — Setting t\u00e9l\u00e9phonique */}
            <section id="telephonique" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Social selling et setting t&eacute;l&eacute;phonique
              </h2>
              <p className="mb-4">
                Tous les prospects identifi&eacute;s via le social selling ne sont pas pr&ecirc;ts pour un RDV par message. Certains r&eacute;pondent &laquo;&nbsp;int&eacute;ressant, mais pas le bon moment&nbsp;&raquo;. D&apos;autres posent des questions sans aller plus loin. D&apos;autres encore visitent ton profil 3 fois sans jamais t&apos;&eacute;crire.
              </p>
              <p className="mb-4">
                C&apos;est l&agrave; que le setting t&eacute;l&eacute;phonique prend le relais. Un appel de qualification de 5 &agrave; 10 minutes permet de scorer le lead et de le router vers le bon parcours.
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-accent font-semibold">Lead chaud</span> : besoin confirm&eacute;, budget identifi&eacute;, timing align&eacute; &rarr; RDV avec le closeur</li>
                  <li><span className="text-[#FBBF24] font-semibold">Lead ti&egrave;de</span> : int&eacute;r&ecirc;t r&eacute;el mais timing d&eacute;cal&eacute; &rarr; rappel programm&eacute; dans 2-4 semaines</li>
                  <li><span className="text-text-muted font-semibold">Lead froid</span> : curiosit&eacute; sans besoin concret &rarr; inscription newsletter et nurturing</li>
                </ul>
              </div>
              <p className="mb-4">
                Le t&eacute;l&eacute;phone r&eacute;sout un probl&egrave;me que LinkedIn ne peut pas r&eacute;gler : la qualification en temps r&eacute;el. En 5 minutes d&apos;appel, tu obtiens plus d&apos;informations qu&apos;en 10 &eacute;changes de messages. Tu entends les h&eacute;sitations, tu d&eacute;tectes les vrais freins, tu peux adapter ton discours imm&eacute;diatement.
              </p>
              <p className="mb-4">
                Chez Setting, le service de setting t&eacute;l&eacute;phonique est factur&eacute; 175&nbsp;&euro;/demi-journ&eacute;e, au r&eacute;el. Pas de setup fee, pas d&apos;engagement minimum. Le setter appelle les leads d&eacute;tect&eacute;s via le social selling et la prospection LinkedIn, les qualifie, et les route selon le scoring.
              </p>
              <p>
                C&apos;est le compl&eacute;ment naturel quand ton volume de leads entrants (via les signaux social selling) d&eacute;passe ce que tu peux qualifier par message seul.
              </p>
            </section>

            {/* Section 7 — ROI */}
            <section id="roi" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Mesurer le ROI du social selling
              </h2>
              <p className="mb-4">
                Le SSI ne mesure pas ton retour sur investissement. Il mesure ton niveau d&apos;activit&eacute;. Pour &eacute;valuer le ROI r&eacute;el du social selling, il faut suivre d&apos;autres indicateurs.
              </p>

              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-text-primary font-semibold text-sm mb-3">Les KPIs qui comptent</p>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-primary font-semibold">Taux d&apos;engagement sur tes posts</span> : mesure ta visibilit&eacute; aupr&egrave;s de ta cible. Objectif : 2-5% d&apos;engagement rate</li>
                  <li><span className="text-text-primary font-semibold">Taux de r&eacute;ponse aux DMs</span> : mesure la qualit&eacute; de tes messages. Signal-based : 20-35%. Cold : 2-5%</li>
                  <li><span className="text-text-primary font-semibold">Nombre de RDV qualifi&eacute;s par mois</span> : le KPI business final. C&apos;est ce qui rentre dans le pipeline</li>
                  <li><span className="text-text-primary font-semibold">Co&ucirc;t par RDV</span> : temps investi (ou co&ucirc;t externalis&eacute;) divis&eacute; par le nombre de RDV. Permet de comparer avec d&apos;autres canaux</li>
                </ul>
              </div>

              <p className="mb-4">
                L&apos;erreur classique, c&apos;est de mesurer uniquement le SSI ou le nombre de vues. Un post qui fait 50 000 vues mais z&eacute;ro RDV, c&apos;est du divertissement. Un post qui fait 2 000 vues mais g&eacute;n&egrave;re 3 signaux exploitables qui m&egrave;nent &agrave; 2 RDV, c&apos;est du business.
              </p>
              <p className="mb-4">
                Pour suivre correctement ton ROI, trace la cha&icirc;ne compl&egrave;te : post publi&eacute; &rarr; r&eacute;action d&apos;un prospect ICP &rarr; message envoy&eacute; &rarr; r&eacute;ponse &rarr; RDV &rarr; client sign&eacute;. Si tu ne traces pas cette cha&icirc;ne, tu ne sauras jamais quel contenu g&eacute;n&egrave;re du business et lequel g&eacute;n&egrave;re des likes.
              </p>
              <p className="mb-4">
                Un CRM l&eacute;ger (BreakCold, HubSpot, voire un simple tableur) suffit. Note le signal d&apos;origine de chaque lead : quel post, quel commentaire, quel &eacute;v&eacute;nement. Apr&egrave;s 3 mois, tu verras clairement quels types de contenu g&eacute;n&egrave;rent des conversations et lesquels ne produisent que de l&apos;engagement de surface.
              </p>
              <p>
                Le social selling est un investissement de long terme. Les premiers signaux arrivent en 2 &agrave; 4 semaines. Les premiers RDV attribuables au social selling en 6 &agrave; 8 semaines. Si tu veux des r&eacute;sultats plus rapides, combine avec de la <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline">prospection LinkedIn directe</a> d&egrave;s le d&eacute;part.
              </p>
            </section>

            <CtaArticle />

            {/* FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes
              </h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="border-b border-white/[0.06] pb-6">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">
                      {item.question}
                    </h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Related Articles */}
          <RelatedArticles
            articles={[
              { href: '/ressources/setting-linkedin-definition', title: 'Setting LinkedIn : d\u00e9finition et m\u00e9thode', readTime: '19 min' },
              { href: '/ressources/signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min' },
              { href: '/ressources/prospection-linkedin-b2b', title: 'Prospection LinkedIn B2B : m\u00e9thode compl\u00e8te', readTime: '13 min' },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
