import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { AuthorBlock } from '@/components/AuthorBlock'
import { TldrBox } from '@/components/TldrBox'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: 'Agence de prospection LinkedIn : comment choisir en 2026 | Setting',
  description:
    'Comment choisir une agence de prospection LinkedIn ? Crit\u00e8res, prix, m\u00e9thode, red flags et comparatif des mod\u00e8les pour trouver le bon prestataire B2B.',
  openGraph: {
    title: 'Agence de prospection LinkedIn : comment choisir en 2026',
    description:
      'Comparatif des mod\u00e8les d\u2019agence de prospection LinkedIn : automation, hybride et setting. Crit\u00e8res de s\u00e9lection, tarifs r\u00e9els et red flags.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/agence-prospection-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/agence-prospection-linkedin',
      'x-default': 'https://www.setting.live/ressources/agence-prospection-linkedin',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence de prospection LinkedIn : comment choisir en 2026',
    description: 'Comparatif des mod\u00e8les d\u2019agence de prospection LinkedIn : automation, hybride et setting. Crit\u00e8res de s\u00e9lection, tarifs r\u00e9els et red flags.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/agence-prospection-linkedin',
  headline: 'Agence de prospection LinkedIn : comment choisir en 2026',
  description:
    'Comparatif des mod\u00e8les d\u2019agence de prospection LinkedIn (automation, hybride, setting), crit\u00e8res de s\u00e9lection, tarifs r\u00e9els et red flags \u00e0 surveiller.',
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
  wordCount: 3200,
  url: 'https://www.setting.live/ressources/agence-prospection-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/agence-prospection-linkedin',
  },
  about: [
    { '@type': 'Thing', name: 'Agence prospection LinkedIn' },
    { '@type': 'Thing', name: 'Externalisation prospection B2B' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['#modeles', '#criteres'],
  },
}

const faqItems = [
  {
    question: 'Combien co\u00fbte une agence de prospection LinkedIn ?',
    answer:
      'De 300 \u20ac/mois (automation pure, Waalaxy-like) \u00e0 3 000 \u20ac+/mois (agence premium avec engagement long). Le mod\u00e8le setting chez Setting co\u00fbte 790 \u20ac/mois, sans engagement, avec setter d\u00e9di\u00e9 et garantie RDV.',
  },
  {
    question: 'Quelle garantie de r\u00e9sultats attendre ?',
    answer:
      'Les bonnes agences garantissent un volume de RDV qualifi\u00e9s, pas un nombre de leads bruts. Un \u00ab\u00a01 000 leads par mois\u00a0\u00bb sans qualification, c\u2019est du bruit. Chez Setting, la garantie est de 5 RDV qualifi\u00e9s par mois minimum.',
  },
  {
    question: 'Faut-il un engagement minimum ?',
    answer:
      'Cela d\u00e9pend du mod\u00e8le. Les agences hybrides demandent souvent 3 \u00e0 6 mois d\u2019engagement. Le mod\u00e8le setting (chez Setting) est sans engagement, r\u00e9siliable \u00e0 tout moment. La logique : si les r\u00e9sultats sont l\u00e0, tu restes. Sinon, tu pars.',
  },
  {
    question: 'Peut-on coupler agence LinkedIn et prospection t\u00e9l\u00e9phonique ?',
    answer:
      'Oui, et c\u2019est recommand\u00e9. LinkedIn g\u00e9n\u00e8re des leads ti\u00e8des qui se qualifient mieux par t\u00e9l\u00e9phone. Un appel court permet de scorer le lead et de le router vers le bon parcours. Chez Setting, le setting t\u00e9l\u00e9phonique est factur\u00e9 175 \u20ac/demi-journ\u00e9e.',
  },
  {
    question: 'Comment mesurer le ROI d\u2019une agence de prospection ?',
    answer:
      'Les m\u00e9triques qui comptent : co\u00fbt par RDV (budget mensuel divis\u00e9 par le nombre de RDV), co\u00fbt par client sign\u00e9, comparaison avec ton taux horaire. Si tu passes 8h/semaine \u00e0 prospecter et que ton taux horaire est de 100 \u20ac, \u00e7a te co\u00fbte 3 200 \u20ac/mois en temps.',
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
      name: 'Agence prospection LinkedIn',
      item: 'https://www.setting.live/ressources/agence-prospection-linkedin',
    },
  ],
}

export default function AgenceProspectionLinkedInPage() {
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

          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Agence prospection LinkedIn</li>
            </ol>
          </nav>

          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Prospection &middot; Agence &middot; B2B
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Agence de prospection LinkedIn : comment choisir en 2026
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le march&eacute; des agences de prospection LinkedIn est opaque. Entre les vendeurs
              d&apos;automatisation &agrave; 300&nbsp;&euro; et les agences premium &agrave;
              3&nbsp;000&nbsp;&euro; avec 6 mois d&apos;engagement, il y a de quoi se perdre.
              Ce guide d&eacute;taille les mod&egrave;les qui existent, les crit&egrave;res de choix
              et les signaux d&apos;alerte &agrave; surveiller.
            </p>
            <AuthorBlock date="2026-03-25" readTime="13 min de lecture" dateLabel="25 mars 2026" />
          </header>

          <div data-speakable="true">
            <TldrBox>
              <p>Trois mod&egrave;les d&apos;agence coexistent : automation (300-600 &euro;, risque de ban), hybride (1 500-3 000 &euro;, engagement long), et setting (790 &euro; chez Setting, z&eacute;ro engagement, setter d&eacute;di&eacute;). Crit&egrave;res cl&eacute;s : m&eacute;thode signal-based, garantie RDV, transparence reporting, absence d&apos;engagement forc&eacute;.</p>
            </TldrBox>
          </div>

          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">Sommaire</p>
            <ol className="space-y-2">
              {[
                { id: 'pourquoi', label: 'Pourquoi faire appel \u00e0 une agence' },
                { id: 'modeles', label: 'Les 3 mod\u00e8les d\u2019agence' },
                { id: 'criteres', label: 'Les 7 crit\u00e8res pour choisir' },
                { id: 'red-flags', label: 'Les red flags d\u2019une mauvaise agence' },
                { id: 'vs-soi-meme', label: 'Agence vs faire soi-m\u00eame' },
                { id: 'telephonique', label: 'Setting t\u00e9l\u00e9phonique : le compl\u00e9ment' },
                { id: 'setting', label: 'Comment Setting se positionne' },
                { id: 'faq', label: 'Questions fr\u00e9quentes' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">{String(i + 1).padStart(2, '0')}</span>
                  <a href={`#${id}`} className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors leading-snug">{label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            <section id="pourquoi" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Pourquoi faire appel &agrave; une agence de prospection LinkedIn</h2>
              <p className="mb-4">
                Prospecter sur LinkedIn prend entre 5 et 10 heures par semaine. D&eacute;tection de signaux, analyse de profils, r&eacute;daction de messages, suivi des conversations, relances. Si tu es fondateur ou freelance, ces heures sont prises sur ta livraison ou ton sommeil.
              </p>
              <p className="mb-4">
                Une agence apporte ce que tu n&apos;as pas forc&eacute;ment : du temps (un setter d&eacute;di&eacute; qui ne fait que &ccedil;a), une m&eacute;thode rod&eacute;e (signal-based, pas du cold outreach) et les bons outils (Sales Navigator, Reactin, CRM). Elle apporte aussi la r&eacute;gularit&eacute;. La prospec ne s&apos;arr&ecirc;te pas quand tu es en mission.
              </p>
              <p>
                Le vrai calcul : si ton taux horaire d&eacute;passe 80&nbsp;&euro;, les 8 heures hebdomadaires que tu passes &agrave; prospecter te co&ucirc;tent 2&nbsp;560&nbsp;&euro;/mois en temps. Une agence &agrave; 790&nbsp;&euro; est rentable d&egrave;s le premier mois.
              </p>
            </section>

            <section id="modeles" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Les 3 mod&egrave;les d&apos;agence de prospection LinkedIn</h2>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">1. L&apos;agence automation</h3>
              <p className="mb-4">
                Elle configure un outil (Waalaxy, Dripify, Expandi) qui envoie des s&eacute;quences automatis&eacute;es &agrave; des listes de prospects. Co&ucirc;t : 300 &agrave; 600&nbsp;&euro;/mois. Avantage : volume. Inconv&eacute;nient : taux de r&eacute;ponse de 2-5%, risque de restriction du compte LinkedIn, aucune personnalisation r&eacute;elle.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">2. L&apos;agence hybride</h3>
              <p className="mb-4">
                Elle combine templates semi-personnalis&eacute;s et intervention humaine ponctuelle. Co&ucirc;t : 1&nbsp;500 &agrave; 3&nbsp;000&nbsp;&euro;/mois, souvent avec un engagement de 3 &agrave; 6 mois et un setup fee de 500 &agrave; 1&nbsp;500&nbsp;&euro;. Le niveau de personnalisation d&eacute;pend de l&apos;agence : certaines sont tr&egrave;s proches de l&apos;automation d&eacute;guis&eacute;e.
              </p>

              <h3 className="font-sans font-semibold text-text-primary text-lg mb-3">3. L&apos;agence setting</h3>
              <p className="mb-4">
                Un setter d&eacute;di&eacute; d&eacute;tecte les signaux d&apos;achat, analyse chaque profil, et r&eacute;dige des messages personnalis&eacute;s. L&apos;IA aide &agrave; la d&eacute;tection et &agrave; la r&eacute;daction de drafts, mais chaque message est valid&eacute; par un humain avant envoi. Taux de r&eacute;ponse : 20-35%.
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.1]">
                      <th className="text-left py-3 pr-4 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Automation</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Hybride</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Setting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Prix/mois', '300-600 \u20ac', '1 500-3 000 \u20ac', '790 \u20ac'],
                      ['Engagement', 'Mensuel', '3-6 mois', 'Z\u00e9ro'],
                      ['Taux r\u00e9ponse', '2-5%', '5-12%', '20-35%'],
                      ['Personnalisation', 'Templates', 'Semi-perso', 'Signal-based'],
                      ['Risque ban', '\u00c9lev\u00e9', 'Mod\u00e9r\u00e9', 'Aucun'],
                      ['Setter d\u00e9di\u00e9', 'Non', 'Pool partag\u00e9', 'Oui'],
                      ['Garantie RDV', 'Rarement', 'Parfois', '5 RDV/mois'],
                    ].map(([critere, auto, hybride, setting]) => (
                      <tr key={critere} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 text-text-primary font-medium">{critere}</td>
                        <td className="py-3 px-4">{auto}</td>
                        <td className="py-3 px-4">{hybride}</td>
                        <td className="py-3 px-4 text-accent">{setting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline">Devenir setter ou closer B2B : le guide complet</a>
              </p>
            </section>

            <section id="criteres" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Les 7 crit&egrave;res pour choisir son agence</h2>
              <div className="space-y-6">
                {[
                  { title: 'M\u00e9thode : automation ou signal-based ?', desc: 'Demande comment les messages sont r\u00e9dig\u00e9s. Si la r\u00e9ponse est \u00ab\u00a0on cr\u00e9e des s\u00e9quences automatis\u00e9es\u00a0\u00bb, tu sais \u00e0 quoi t\u2019attendre. La m\u00e9thode signal-based (chaque message ancr\u00e9 sur un fait du profil) donne des taux de r\u00e9ponse 5 \u00e0 10x sup\u00e9rieurs.' },
                  { title: 'Engagement : sans ou avec contrainte ?', desc: 'Une agence qui demande 6 mois d\u2019engagement sans garantie parie que tu oublieras de r\u00e9silier. Privil\u00e9gie le sans engagement : si les r\u00e9sultats sont bons, tu restes naturellement.' },
                  { title: 'Tarification : fixe, variable ou hybride ?', desc: 'Le fixe pur ne motive pas l\u2019agence. Le variable pur cr\u00e9e un risque de leads non qualifi\u00e9s. L\u2019hybride (fixe + bonus par RDV qualifi\u00e9) aligne les int\u00e9r\u00eats.' },
                  { title: 'Garantie r\u00e9sultats : volume de RDV ou de leads ?', desc: 'Un \u00ab\u00a0500 leads par mois\u00a0\u00bb ne vaut rien si aucun ne d\u00e9bouche sur un appel. Cherche une garantie en RDV qualifi\u00e9s, pas en volume brut.' },
                  { title: 'Transparence : acc\u00e8s au pipeline ?', desc: 'Tu dois voir les messages envoy\u00e9s, les r\u00e9ponses re\u00e7ues, les leads qualifi\u00e9s. Un reporting hebdomadaire minimum. Si l\u2019agence refuse de partager le d\u00e9tail, m\u00e9fiance.' },
                  { title: '\u00c9quipe : setter d\u00e9di\u00e9 ou pool partag\u00e9 ?', desc: 'Un setter d\u00e9di\u00e9 conna\u00eet ton offre, ton ICP, ton jargon m\u00e9tier. Un pool partag\u00e9 entre 10 clients envoie des messages g\u00e9n\u00e9riques. La diff\u00e9rence se voit dans le taux de r\u00e9ponse.' },
                  { title: 'Outils : quels outils, qui paye ?', desc: 'Sales Navigator (~100 \u20ac/mois) est souvent \u00e0 ta charge. V\u00e9rifie si l\u2019agence utilise ses propres outils ou te demande d\u2019acheter des licences suppl\u00e9mentaires.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                    <p className="font-semibold text-text-primary text-sm mb-2">{title}</p>
                    <p className="text-sm">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted italic mt-4">
                Pour aller plus loin : <a href="/ressources/comment-devenir-setter-b2b" className="text-accent hover:underline">le guide complet du setter B2B</a>
              </p>
            </section>

            <section id="red-flags" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Les red flags d&apos;une mauvaise agence</h2>
              <ul className="space-y-3">
                {[
                  'Promet des centaines de \u00ab\u00a0leads\u00a0\u00bb par mois sans d\u00e9finir ce qu\u2019est un lead qualifi\u00e9',
                  'Pas de reporting d\u00e9taill\u00e9 ni acc\u00e8s au pipeline',
                  'Engagement long (6+ mois) avec setup payant (500-1 500 \u20ac)',
                  'Envoie des templates g\u00e9n\u00e9riques que tu reconnais toi-m\u00eame en tant que prospect',
                  'Aucune strat\u00e9gie de ciblage par signaux d\u2019achat',
                  'Sous-traite la r\u00e9daction \u00e0 l\u2019\u00e9tranger sans ma\u00eetrise du march\u00e9 francophone',
                  'Refuse de t\u2019expliquer sa m\u00e9thode en d\u00e9tail',
                ].map((flag) => (
                  <li key={flag} className="flex gap-3 items-baseline text-sm">
                    <span className="text-red-400 shrink-0">&#x2717;</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="vs-soi-meme" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Agence prospection LinkedIn vs faire soi-m&ecirc;me</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.1]">
                      <th className="text-left py-3 pr-4 text-text-muted font-semibold">Crit&egrave;re</th>
                      <th className="text-left py-3 px-4 text-text-muted font-semibold">Faire soi-m&ecirc;me</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Agence setting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Temps/semaine', '5-10h', '1h (suivi reporting)'],
                      ['Co\u00fbt r\u00e9el/mois', '2 000-4 000 \u20ac (temps)', '790 \u20ac'],
                      ['Outils', '\u00c0 ta charge', 'Inclus (sauf SalesNav)'],
                      ['M\u00e9thode', '\u00c0 construire', 'Signal-based rod\u00e9e'],
                      ['D\u00e9lai premiers RDV', '3-6 semaines', '< 7 jours'],
                      ['R\u00e9gularit\u00e9', 'Fluctuante', 'Constante'],
                    ].map(([critere, soi, agence]) => (
                      <tr key={critere} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 text-text-primary font-medium">{critere}</td>
                        <td className="py-3 px-4">{soi}</td>
                        <td className="py-3 px-4 text-accent">{agence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/externaliser-prospection-linkedin#sdr-commercial" className="text-accent hover:underline">SDR interne vs externalis&eacute; : co&ucirc;t r&eacute;el et ROI</a>
              </p>
            </section>

            <section id="telephonique" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Setting t&eacute;l&eacute;phonique : le compl&eacute;ment indispensable</h2>
              <p className="mb-4">
                La prospection LinkedIn g&eacute;n&egrave;re des r&eacute;ponses, mais pas toutes au m&ecirc;me niveau de maturit&eacute;. Un prospect qui r&eacute;pond &laquo;&nbsp;pourquoi pas, on en reparle&nbsp;&raquo; n&apos;est pas au m&ecirc;me stade qu&apos;un &laquo;&nbsp;oui, dispo mardi&nbsp;&raquo;.
              </p>
              <p className="mb-4">
                Le setting t&eacute;l&eacute;phonique traite ces leads ti&egrave;des. Un appel court (5-10 minutes) de qualification permet de scorer le lead et de le router :
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-accent font-semibold">Chaud</span> : besoin confirm&eacute;, budget OK &rarr; RDV direct avec le closeur</li>
                  <li><span className="text-[#FBBF24] font-semibold">Ti&egrave;de</span> : int&eacute;r&ecirc;t r&eacute;el, pas de timing &rarr; rappel programm&eacute; &agrave; 2-4 semaines</li>
                  <li><span className="text-text-muted font-semibold">Froid</span> : curiosit&eacute; sans besoin &rarr; inscription newsletter + nurturing</li>
                </ul>
              </div>
              <p>
                Chez Setting, le setting t&eacute;l&eacute;phonique co&ucirc;te 175&nbsp;&euro;/demi-journ&eacute;e, factur&eacute; au r&eacute;el. Le script est co-construit avec toi. Le sales d&eacute;di&eacute; conna&icirc;t ton offre et tes crit&egrave;res de qualification.
              </p>
            </section>

            <CtaArticle variant="methode" />

            <section id="setting" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">Comment Setting se positionne</h2>
              <p className="mb-4">
                Setting est une agence de setting commercial B2B, pas d&apos;automatisation ni de marketing LinkedIn. Les faits :
              </p>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] mb-4">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-primary font-semibold">790&nbsp;&euro;/mois</span>, setup offert</li>
                  <li><span className="text-text-primary font-semibold">Z&eacute;ro engagement</span>, r&eacute;siliable &agrave; tout moment</li>
                  <li><span className="text-text-primary font-semibold">Setter d&eacute;di&eacute;</span> form&eacute; &agrave; ton offre</li>
                  <li><span className="text-text-primary font-semibold">M&eacute;thode signal-based</span> : IA pour la d&eacute;tection, humain pour la validation</li>
                  <li><span className="text-text-primary font-semibold">Garantie 5 RDV qualifi&eacute;s/mois</span>, mois suivant offert si non atteint</li>
                  <li><span className="text-text-primary font-semibold">Primes RDV</span> : 50 &euro; (ticket &lt; 5k), 150 &euro; (5-15k), 250 &euro; (&gt; 15k)</li>
                </ul>
              </div>
              <p className="text-sm text-text-muted italic">
                Pour aller plus loin : <a href="/tarifs" className="text-accent hover:underline">Voir les tarifs d&eacute;taill&eacute;s</a>
              </p>
            </section>

            <CtaArticle />

            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">Questions fr&eacute;quentes</h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="border-b border-white/[0.06] pb-6">
                    <h3 className="font-sans font-semibold text-text-primary text-sm mb-2">{item.question}</h3>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <RelatedArticles
            articles={[
              { href: '/ressources/comment-devenir-setter-b2b', title: 'Devenir setter ou closer B2B : le guide complet', readTime: '20 min' },
              { href: '/externaliser-prospection-linkedin#agence-vs-freelance', title: 'Agence setting vs setter freelance', readTime: '9 min' },
              { href: '/externaliser-prospection-linkedin#sdr-commercial', title: 'SDR interne vs externalis\u00e9', readTime: '10 min' },
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
