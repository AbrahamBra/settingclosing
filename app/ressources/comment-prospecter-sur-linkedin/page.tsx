import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Comment prospecter sur LinkedIn en 2026 : guide complet | Setting',
  description:
    'Comment prospecter sur LinkedIn en B2B en 2026 ? M\u00e9thode signal-based, Sales Navigator, messages personnalis\u00e9s et erreurs \u00e0 \u00e9viter. Guide complet avec exemples.',
  openGraph: {
    title: 'Comment prospecter sur LinkedIn en 2026 : guide complet',
    description:
      'M\u00e9thode signal-based, Sales Navigator, messages personnalis\u00e9s et erreurs \u00e0 \u00e9viter pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s sur LinkedIn.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
      'x-default': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
    },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
  headline: 'Comment prospecter sur LinkedIn en 2026 : guide complet',
  description:
    'M\u00e9thode signal-based, Sales Navigator, messages personnalis\u00e9s et erreurs \u00e0 \u00e9viter pour g\u00e9n\u00e9rer des RDV qualifi\u00e9s sur LinkedIn en B2B.',
  author: {
    '@type': 'Person',
    name: 'Abraham Brakha',
    jobTitle: 'Fondateur, Setting',
    url: 'https://www.setting.live/equipe/abraham-brakha',
    sameAs: 'https://www.linkedin.com/in/abraham-brakha/',
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
  wordCount: 3500,
  url: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
  },
  about: [
    { '@type': 'Thing', name: 'Prospection LinkedIn' },
    { '@type': 'Thing', name: 'Setting commercial B2B' },
    { '@type': 'Thing', name: 'Social selling' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#definition', '#etapes'],
  },
}

const faqItems = [
  {
    question: 'Combien de messages LinkedIn puis-je envoyer par jour ?',
    answer:
      'Entre 20 et 30 messages personnalis\u00e9s par jour. Au-del\u00e0, LinkedIn peut restreindre ton compte temporairement. La qualit\u00e9 prime sur la quantit\u00e9 : 25 messages ancr\u00e9s sur un signal obtiennent plus de r\u00e9ponses que 200 templates g\u00e9n\u00e9riques.',
  },
  {
    question: 'La prospection LinkedIn est-elle compatible avec le RGPD ?',
    answer:
      'Oui, tant que tu ne scrapes pas de donn\u00e9es personnelles en dehors de la plateforme. Les messages envoy\u00e9s manuellement via LinkedIn restent dans le cadre de la plateforme. Le RGPD s\u2019applique surtout si tu exportes des donn\u00e9es (emails, t\u00e9l\u00e9phones) vers un outil tiers sans consentement.',
  },
  {
    question: 'Faut-il Sales Navigator pour prospecter sur LinkedIn ?',
    answer:
      'Recommand\u00e9 mais pas obligatoire. Sales Navigator (environ 100 \u20ac/mois) d\u00e9bloque les filtres avanc\u00e9s : fonction, taille d\u2019entreprise, anciennet\u00e9 dans le poste, changements r\u00e9cents. Sans lui, tu peux prospecter sur les signaux inbound (r\u00e9actions \u00e0 tes posts) mais ta capacit\u00e9 de recherche outbound sera limit\u00e9e.',
  },
  {
    question: 'Combien de temps avant les premiers r\u00e9sultats ?',
    answer:
      'Avec la m\u00e9thode signal-based, les premiers RDV tombent g\u00e9n\u00e9ralement d\u00e8s la premi\u00e8re semaine. En cold outreach classique, compte plut\u00f4t 3 \u00e0 4 semaines pour obtenir un volume suffisant de r\u00e9ponses.',
  },
  {
    question: 'Peut-on combiner prospection LinkedIn et emailing ?',
    answer:
      'Oui, le multicanal fonctionne bien. Le conseil : LinkedIn d\u2019abord pour le premier contact humain (taux de r\u00e9ponse plus \u00e9lev\u00e9), puis l\u2019email en relance ou pour partager du contenu. Ne fais pas l\u2019inverse : un email froid suivi d\u2019un message LinkedIn ressemble \u00e0 du harclement.',
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
      name: 'Comment prospecter sur LinkedIn',
      item: 'https://www.setting.live/ressources/comment-prospecter-sur-linkedin',
    },
  ],
}

export default function CommentProspecterLinkedInPage() {
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
              <li className="text-text-primary">Comment prospecter sur LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection &middot; LinkedIn &middot; B2B
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Comment prospecter sur LinkedIn en 2026 : guide complet
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              La prospection LinkedIn a chang&eacute;. Les templates g&eacute;n&eacute;riques
              envoient un signal clair au prospect : &laquo;&nbsp;tu es un num&eacute;ro dans ma
              liste&nbsp;&raquo;. La m&eacute;thode qui fonctionne en 2026, c&apos;est le
              signal-based : identifier un fait pr&eacute;cis sur le profil, puis &eacute;crire
              un message ancr&eacute; dessus. Ce guide couvre tout, de la pr&eacute;paration au RDV.
            </p>
            <AuthorBlock date="2026-03-25" readTime="14 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p>La prospection LinkedIn repose sur un profil cr&eacute;dible, des signaux d&apos;achat identifi&eacute;s et un message court ancr&eacute; sur un fait pr&eacute;cis du prospect. Taux de r&eacute;ponse attendu : 20 &agrave; 35% avec la m&eacute;thode signal-based, contre 2-3% en cold outreach classique. Premi&egrave;res r&eacute;ponses d&egrave;s la semaine 1.</p>
          </TldrBox>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '950M', label: 'membres LinkedIn dans le monde' },
              { stat: '65M', label: 'd\u00e9cideurs actifs sur la plateforme' },
              { stat: '20\u201335%', label: 'taux de r\u00e9ponse signal-based' },
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
                { id: 'pourquoi-linkedin', label: 'Pourquoi LinkedIn reste le canal #1 en B2B' },
                { id: 'approches', label: 'Les 2 approches de la prospection LinkedIn' },
                { id: 'preparation', label: 'Pr\u00e9parer sa prospection : profil, ICP et outils' },
                { id: 'etapes', label: 'Les 7 \u00e9tapes pour prospecter sur LinkedIn' },
                { id: 'exemples', label: 'Exemples de messages de prospection' },
                { id: 'erreurs', label: 'Les erreurs qui ruinent ta prospection' },
                { id: 'telephonique', label: 'Prospection LinkedIn + setting t\u00e9l\u00e9phonique' },
                { id: 'externaliser', label: 'Quand externaliser sa prospection' },
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

            {/* Section 1 */}
            <section id="pourquoi-linkedin" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Pourquoi LinkedIn reste le canal #1 de la prospection B2B
              </h2>
              <p className="mb-4">
                LinkedIn regroupe 950 millions de membres, dont 65 millions de d&eacute;cideurs. En France, plus de 28 millions de profils sont actifs. Pour la prospection B2B, aucun autre canal ne donne un acc&egrave;s aussi direct aux personnes qui prennent les d&eacute;cisions d&apos;achat.
              </p>
              <p className="mb-4">
                Concr&egrave;tement : un email froid obtient entre 1 et 3% de taux de r&eacute;ponse. Un message LinkedIn personnalis&eacute;, ancr&eacute; sur un signal d&apos;achat, monte &agrave; 20-35%. La diff&eacute;rence vient de ce que tu sais sur le prospect avant de lui &eacute;crire.
              </p>
              <p className="mb-4">
                Sur LinkedIn, l&apos;information est publique. Tu vois les posts que le prospect commente, les articles qu&apos;il partage, ses changements de poste, les personnes avec qui il interagit. Chacune de ces actions est un signal exploitable.
              </p>
              <p>
                L&apos;autre avantage : la relation est directe. Pas de gatekeeper, pas de standard t&eacute;l&eacute;phonique. Tu &eacute;cris &agrave; la personne concern&eacute;e, pas &agrave; son assistant.
              </p>
            </section>

            {/* Section 2 */}
            <section id="approches" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les 2 approches de la prospection LinkedIn
              </h2>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Le cold outreach classique</h3>
              <p className="mb-4">
                Tu construis une liste de prospects sur Sales Navigator, tu r&eacute;diges 2-3 templates, tu les envoies &agrave; 200 personnes par semaine via un outil d&apos;automatisation. Taux de r&eacute;ponse : 2 &agrave; 5%. Beaucoup de volume, peu de conversations. Les prospects reconnaissent imm&eacute;diatement un message copier-coller.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">La m&eacute;thode signal-based</h3>
              <p className="mb-4">
                Tu d&eacute;tectes d&apos;abord un signal d&apos;achat (un prospect a comment&eacute; un post sur ta th&eacute;matique, chang&eacute; de poste, r&eacute;agi &agrave; un contenu concurrent). Puis tu &eacute;cris un message court, ancr&eacute; sur ce signal pr&eacute;cis. Le prospect voit que tu as pris le temps de lire son activit&eacute;. Taux de r&eacute;ponse : 20 &agrave; 35%.
              </p>
              <p className="mb-4">
                C&apos;est cette deuxi&egrave;me approche que nous utilisons chez Setting. L&apos;IA d&eacute;tecte les signaux, le setter r&eacute;dige le message et le valide avant envoi.
              </p>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/setting-linkedin-definition" className="text-accent hover:underline">Setting LinkedIn : d&eacute;finition et m&eacute;thode</a>
              </p>
            </section>

            {/* Section 3 */}
            <section id="preparation" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Pr&eacute;parer sa prospection : profil, ICP et outils
              </h2>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Ton profil LinkedIn</h3>
              <p className="mb-4">
                Avant d&apos;envoyer un seul message, ton profil doit inspirer confiance. Le headline compte (pas &laquo;&nbsp;CEO&nbsp;&raquo; mais ce que tu fais concr&egrave;tement pour tes clients). La banni&egrave;re aussi (proposition de valeur lisible en 3 secondes). Et la section &laquo;&nbsp;&Agrave; propos&nbsp;&raquo; doit poser le probl&egrave;me r&eacute;solu, pour qui, avec une preuve.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Ton ICP (Ideal Customer Profile)</h3>
              <p className="mb-4">
                D&eacute;finis pr&eacute;cis&eacute;ment qui tu cibles. Secteur, taille d&apos;entreprise, poste du d&eacute;cideur, probl&egrave;me sp&eacute;cifique que tu r&eacute;sous. Sans ICP clair, tu prospectes dans le vide. Avec un ICP pr&eacute;cis, chaque message a une raison d&apos;exister.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Les outils</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-primary font-semibold">Sales Navigator</span> (~100 &euro;/mois) : filtres avanc&eacute;s, alertes changements de poste, listes de prospects</li>
                  <li><span className="text-text-primary font-semibold">Reactin</span> : d&eacute;tecte qui r&eacute;agit &agrave; tes posts et ceux de tes concurrents</li>
                  <li><span className="text-text-primary font-semibold">BreakCold</span> : CRM l&eacute;ger pour suivre tes conversations LinkedIn</li>
                </ul>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/outils-setting-linkedin" className="text-accent hover:underline">Les outils du setting LinkedIn</a>
              </p>
            </section>

            {/* Section 4 */}
            <section id="etapes" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les 7 &eacute;tapes pour prospecter sur LinkedIn
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">1. D&eacute;finir ton ICP</h3>
                  <p>
                    Qui est ton client id&eacute;al ? Quel poste occupe-t-il ? Quelle taille d&apos;entreprise ? Quel probl&egrave;me a-t-il ? Note tout sur une page. C&apos;est ta boussole pour tout le reste.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">2. Configurer Sales Navigator</h3>
                  <p>
                    Cr&eacute;e des filtres qui correspondent &agrave; ton ICP. Sauvegarde tes recherches. Active les alertes sur les changements de poste et les nouvelles publications. C&apos;est ton radar.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">3. D&eacute;tecter les signaux d&apos;achat</h3>
                  <p>
                    Un signal d&apos;achat, c&apos;est un comportement observable : le prospect like un post sur ta th&eacute;matique, commente chez un concurrent, change de poste, publie sur un probl&egrave;me que tu r&eacute;sous. Chaque signal est une porte d&apos;entr&eacute;e pour une conversation pertinente.
                  </p>
                  <p className="text-sm text-text-muted italic mt-2">
                    Pour aller plus loin : <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline">C&apos;est quoi un signal d&apos;achat LinkedIn ?</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">4. Analyser le profil</h3>
                  <p>
                    Avant d&apos;&eacute;crire, lis. Titre, bio, 3 derniers posts, connexions communes. Tu cherches un fait pr&eacute;cis &agrave; mentionner dans ton message. Si tu ne trouves rien de sp&eacute;cifique, passe au prospect suivant.
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">5. R&eacute;diger un message ancr&eacute; sur le signal</h3>
                  <p>
                    5 lignes maximum. La deuxi&egrave;me phrase mentionne le fait pr&eacute;cis que tu as identifi&eacute;. Pas de pitch. Une question ouverte &agrave; la fin. Signe avec ton pr&eacute;nom uniquement.
                  </p>
                  <p className="text-sm text-text-muted italic mt-2">
                    Pour aller plus loin : <a href="/ressources/script-setting-linkedin" className="text-accent hover:underline">Scripts de setting LinkedIn</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">6. Envoyer et suivre</h3>
                  <p>
                    Envoie le message. Note la date et le signal utilis&eacute; dans ton CRM. Si pas de r&eacute;ponse apr&egrave;s 5 jours, relance une fois avec un nouvel angle. Apr&egrave;s 2 relances sans r&eacute;ponse, passe &agrave; autre chose.
                  </p>
                  <p className="text-sm text-text-muted italic mt-2">
                    Pour aller plus loin : <a href="/ressources/relance-linkedin-b2b" className="text-accent hover:underline">Relance LinkedIn B2B</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-sans font-semibold text-text-primary mb-2">7. Qualifier et convertir en RDV</h3>
                  <p>
                    Quand le prospect r&eacute;pond, ne pitch pas. Pose des questions pour comprendre son contexte. Si le besoin est confirm&eacute;, propose un cr&eacute;neau. Envoie un lien Calendly court, pas 3 paragraphes de pitch.
                  </p>
                  <p className="text-sm text-text-muted italic mt-2">
                    Pour aller plus loin : <a href="/ressources/qualification-leads-b2b" className="text-accent hover:underline">Qualifier un lead en B2B</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="exemples" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Exemples de messages de prospection LinkedIn
              </h2>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Signal inbound : r&eacute;action &agrave; ton post</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu que tu avais r&eacute;agi &agrave; mon post sur la qualification des leads B2B.<br />
                  C&apos;est un sujet sur lequel tu bosses en ce moment chez [Entreprise] ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Signal outbound : changement de poste</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  F&eacute;licitations pour ton nouveau poste de [Titre] chez [Entreprise].<br />
                  Quand on prend un r&ocirc;le commercial dans une nouvelle bo&icirc;te, la prospec est souvent le premier chantier. C&apos;est le cas pour toi ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Signal concurrent : commentaire chez un concurrent</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-6">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  J&apos;ai vu ton commentaire sous le post de [Concurrent] sur l&apos;externalisation de la prospection.<br />
                  Tu &eacute;values des options pour [Entreprise] en ce moment ?<br /><br />
                  Abraham
                </p>
              </div>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">Connexion commune</h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <p className="text-sm text-text-primary leading-relaxed">
                  Salut [Pr&eacute;nom],<br /><br />
                  On a [Connexion] en commun. J&apos;ai vu que tu g&eacute;rais le d&eacute;veloppement commercial chez [Entreprise].<br />
                  Vous faites votre prospection en interne ou vous avez externalis&eacute; une partie ?<br /><br />
                  Abraham
                </p>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/messages-linkedin-sans-reponse" className="text-accent hover:underline">Pourquoi vos messages LinkedIn n&apos;obtiennent pas de r&eacute;ponses</a>
              </p>
            </section>

            {/* Section 6 */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Les erreurs qui ruinent ta prospection LinkedIn
              </h2>

              <div className="space-y-4">
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Pitcher dans le premier message</p>
                  <p className="text-sm">Le premier DM sert &agrave; ouvrir une conversation, pas &agrave; vendre. Si tu mentionnes ton offre dans le premier message, tu perds 80% des r&eacute;ponses potentielles.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Envoyer du volume sans personnalisation</p>
                  <p className="text-sm">200 messages g&eacute;n&eacute;riques = 4 r&eacute;ponses. 50 messages personnalis&eacute;s = 12 r&eacute;ponses. Fais le calcul.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Relancer 4 fois ou plus</p>
                  <p className="text-sm">Maximum 2 relances, espac&eacute;es de 5 &agrave; 7 jours. Au-del&agrave;, tu d&eacute;grades ta r&eacute;putation et risques d&apos;&ecirc;tre signal&eacute; comme spam.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">Ignorer les signaux d&apos;achat</p>
                  <p className="text-sm">Un prospect qui commente sur ta th&eacute;matique est 10x plus r&eacute;ceptif qu&apos;un prospect froid. Ne pas exploiter ce signal, c&apos;est laisser de l&apos;argent sur la table.</p>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-semibold text-text-primary text-sm mb-1">&Eacute;crire des messages trop longs</p>
                  <p className="text-sm">5 lignes maximum sur mobile. Si ton prospect doit scroller pour lire ton message, il ne le lira pas.</p>
                </div>
              </div>
            </section>

            {/* Section 7 — Setting téléphonique */}
            <section id="telephonique" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Prospection LinkedIn + setting t&eacute;l&eacute;phonique
              </h2>
              <p className="mb-4">
                LinkedIn fonctionne bien pour le premier contact. Mais tous les prospects ne sont pas pr&ecirc;ts &agrave; prendre un RDV par message. Certains r&eacute;pondent &laquo;&nbsp;int&eacute;ressant, mais pas maintenant&nbsp;&raquo;. D&apos;autres posent des questions sans aller plus loin.
              </p>
              <p className="mb-4">
                C&apos;est l&agrave; que le setting t&eacute;l&eacute;phonique prend le relais. Un appel court de qualification permet de scorer le lead et de le router vers le bon parcours :
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-accent font-semibold">Lead chaud</span> : besoin confirm&eacute;, budget identifi&eacute; &rarr; RDV avec le closeur</li>
                  <li><span className="text-[#FBBF24] font-semibold">Lead ti&egrave;de</span> : int&eacute;r&ecirc;t r&eacute;el mais timing pas bon &rarr; rappel programm&eacute;</li>
                  <li><span className="text-text-muted font-semibold">Lead froid</span> : curiosit&eacute; sans besoin &rarr; newsletter et nurturing</li>
                </ul>
              </div>
              <p>
                Chez Setting, le service de setting t&eacute;l&eacute;phonique est factur&eacute; 175&nbsp;&euro;/demi-journ&eacute;e, au r&eacute;el. Pas de setup, pas d&apos;engagement. C&apos;est un bon compl&eacute;ment &agrave; la prospection LinkedIn quand ton volume de leads entrants justifie une qualification vocale.
              </p>
            </section>

            <CtaArticle variant="methode" />

            {/* Section 8 */}
            <section id="externaliser" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Externaliser sa prospection LinkedIn : quand et pourquoi
              </h2>
              <p className="mb-4">
                Prospecter sur LinkedIn prend du temps. D&eacute;tection de signaux, analyse de profils, r&eacute;daction de messages, suivi des conversations. Compte 5 &agrave; 10 heures par semaine. Si ton taux horaire d&eacute;passe 80&nbsp;&euro;, externaliser devient rentable d&egrave;s le premier mois.
              </p>
              <p className="mb-4">
                L&apos;externalisation a du sens dans ces situations :
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-2 items-baseline">
                  <span className="text-accent shrink-0">1.</span>
                  <span>Tu n&apos;as pas le temps de prospecter toi-m&ecirc;me (la livraison mange tout)</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <span className="text-accent shrink-0">2.</span>
                  <span>Tu n&apos;as pas la m&eacute;thode (taux de r&eacute;ponse en dessous de 5%)</span>
                </li>
                <li className="flex gap-2 items-baseline">
                  <span className="text-accent shrink-0">3.</span>
                  <span>Tu as besoin de r&eacute;sultats rapides (premiers RDV sous 7 jours)</span>
                </li>
              </ul>
              <p>
                Chez Setting, le programme co&ucirc;te 790&nbsp;&euro;/mois. Z&eacute;ro engagement, setter d&eacute;di&eacute;, 5 RDV qualifi&eacute;s par mois minimum garanti. Le setup (ICP, s&eacute;quences, outils) est inclus dans le premier mois.
              </p>
              <p className="text-sm text-text-muted italic mt-2">
                Pour aller plus loin : <a href="/ressources/prospection-linkedin-b2b" className="text-accent hover:underline">Prospection LinkedIn B2B : m&eacute;thode compl&egrave;te</a>
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
              { href: '/ressources/signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min' },
              { href: '/ressources/script-setting-linkedin', title: 'Scripts de setting LinkedIn B2B', readTime: '11 min' },
              { href: '/ressources/setting-linkedin-definition', title: 'Setting LinkedIn : d\u00e9finition et m\u00e9thode', readTime: '19 min' },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
