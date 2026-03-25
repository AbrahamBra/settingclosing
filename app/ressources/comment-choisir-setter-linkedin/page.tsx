import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Comment choisir son setter LinkedIn en 2026 | Setting',
  description:
    '7 criteres concrets pour evaluer un setter LinkedIn avant de signer. Methode de qualification, outils, remuneration, red flags et questions a poser.',
  openGraph: {
    title: 'Comment choisir son setter LinkedIn en 2026 | Setting',
    description:
      'Guide pratique : les 7 criteres qui separent un bon setter d\u2019un mauvais, les red flags a reperer et les questions a poser avant de signer.',
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
      'x-default': 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
  headline: 'Comment choisir son setter LinkedIn en 2026',
  description:
    '7 criteres concrets pour evaluer un setter LinkedIn avant de signer. Methode, outils, remuneration, volume, reporting, garantie : tout ce qui compte vraiment.',
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
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
  url: 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
  },
  image: 'https://www.setting.live/ressources/comment-choisir-setter-linkedin/opengraph-image',
}

const faqItems = [
  {
    question: 'Un setter junior peut-il etre un bon choix ?',
    answer:
      "Oui, a condition qu\u2019il travaille dans un cadre structure. Un setter junior sans methode ni outils va tattonner pendant 3 mois et bruler vos leads. Un setter junior integre dans un programme avec skill IA, journal de bord et sessions de calibration hebdomadaires peut livrer des resultats equivalents a un profil senior des le deuxieme mois. Ce qui compte, c\u2019est l\u2019infrastructure autour de lui, pas seulement son experience.",
  },
  {
    question: 'Combien de temps pour evaluer si ca marche ?',
    answer:
      "Comptez 2 mois minimum. Le premier mois sert a calibrer le ciblage, tester les messages et affiner les criteres de qualification. Le deuxieme mois est celui ou le volume se stabilise. Si apres 8 semaines il n\u2019y a ni rendez-vous qualifies ni amelioration visible des taux de reponse, c\u2019est un signal clair que quelque chose ne fonctionne pas dans la methode ou dans le ciblage.",
  },
  {
    question: 'Peut-on changer de setter en cours de programme ?',
    answer:
      "Oui. Chez Setting, la connaissance accumulee (journal de bord, base de connaissance, scoring des profils) appartient au programme, pas au setter. Si un changement est necessaire, le nouveau setter reprend la base existante et ne repart pas de zero. C\u2019est un des avantages d\u2019un programme structure par rapport a un freelance isole : la continuite ne depend pas d\u2019une seule personne.",
  },
  {
    question: 'Faut-il fournir les outils soi-meme au setter ?',
    answer:
      "Ca depend du format. Avec un freelance, vous fournissez generalement les licences (Sales Navigator, Reactin, Spyer). Avec une agence comme Setting, les outils sont inclus dans le programme. Verifiez ce point avant de signer : les outils representent 200 a 300 \u20AC/mois, et leur absence degrade la qualite du ciblage et de la detection de signaux.",
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
      name: 'Comment choisir son setter LinkedIn',
      item: 'https://www.setting.live/ressources/comment-choisir-setter-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommentChoisirSetterLinkedinPage() {
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
          <nav aria-label="Fil d&apos;Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">&rsaquo;</li>
              <li className="text-text-primary">Choisir son setter LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Setting
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Comment choisir son setter LinkedIn en 2026
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              7 crit&egrave;res concrets pour &eacute;valuer un setter avant de signer.
              Pas de checklist g&eacute;n&eacute;rique. Des questions qui s&eacute;parent les bons des mauvais.
            </p>
            <AuthorBlock date="2026-03-25" readTime="10 min de lecture" dateLabel="25 mars 2026" />
          </header>

          {/* Definition block */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              D&eacute;finition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Ce qu&apos;un setter LinkedIn fait vraiment
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Un <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline transition-colors">setter B2B</a> n&apos;est
              pas un &laquo;&nbsp;envoyeur de messages&nbsp;&raquo;. C&apos;est un commercial sp&eacute;cialis&eacute; qui identifie les bons
              profils, d&eacute;tecte les signaux d&apos;achat, r&eacute;dige des approches personnalis&eacute;es,
              qualifie les r&eacute;ponses et d&eacute;croche des rendez-vous avec des prospects
              qui correspondent &agrave; votre ICP. La diff&eacute;rence entre un bon et un mauvais setter
              se mesure en leads brul&eacute;s et en heures perdues en appel avec les mauvaises personnes.
            </p>
          </div>

          {/* Stat block */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '7 crit\u00e8res', label: 'pour \u00e9valuer un setter' },
              { stat: '2 mois', label: 'de calibration minimum' },
              { stat: '790\u00a0\u20ac/mois', label: 'mod\u00e8le hybride Setting' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Article body */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-12">

            {/* Section 1 — Pourquoi le choix du setter change tout */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pourquoi le choix du setter change tout
              </h2>
              <p className="mb-4">
                Un mauvais setter ne produit pas juste z&eacute;ro r&eacute;sultat. Il produit des d&eacute;g&acirc;ts.
              </p>
              <p className="mb-4">
                Des leads brul&eacute;s par des messages g&eacute;n&eacute;riques. Des profils
                ICP qui vous ont bloqu&eacute; parce que l&apos;approche ressemblait &agrave; du spam.
                Des appels de 30 minutes avec des prospects qui n&apos;ont ni le budget ni le besoin.
                Et au bout de 3 mois, la frustration de recommencer &agrave; z&eacute;ro avec quelqu&apos;un d&apos;autre.
              </p>
              <p className="mb-4">
                Un bon setter, c&apos;est l&apos;inverse. Des rendez-vous avec les bonnes personnes,
                au bon moment, avec un contexte pr&eacute;cis transmis avant l&apos;appel.
                Vous ouvrez votre agenda et les opportunit&eacute;s sont l&agrave;.
              </p>
              <p>
                La diff&eacute;rence entre les deux n&apos;est pas une question de talent inn&eacute;.
                C&apos;est une question de m&eacute;thode, d&apos;outils et de rigueur.
                Les 7 crit&egrave;res qui suivent vous permettent de faire le tri
                avant de signer quoi que ce soit.
              </p>
            </section>

            {/* Section 2 — Les 7 criteres */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 7 crit&egrave;res qui comptent vraiment
              </h2>
              <p className="mb-6">
                Oubliez les &laquo;&nbsp;soft skills&nbsp;&raquo; et les portfolios.
                Voici ce qu&apos;il faut v&eacute;rifier concr&egrave;tement, point par point.
              </p>

              <div className="space-y-4">
                {/* Critere 1 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      1. M&eacute;thode de qualification
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Pas de grille de qualification document&eacute;e. Le setter &laquo;&nbsp;sent&nbsp;&raquo;
                        si un prospect est bon. Aucun crit&egrave;re objectif pour d&eacute;cider
                        si un profil m&eacute;rite un message ou non.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Utilisation d&apos;un syst&egrave;me de scoring (BANT, MEDDIC, ou un scoring maison).
                        Des crit&egrave;res explicites : fonction, taille d&apos;entreprise, signal d&apos;achat d&eacute;tect&eacute;,
                        budget estim&eacute;. Chaque lead a un score avant d&apos;&ecirc;tre contact&eacute;.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critere 2 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      2. Connaissance de votre march&eacute;
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Le setter d&eacute;marre d&egrave;s la premi&egrave;re semaine sans poser de questions
                        sur votre offre, votre ICP ou vos clients actuels. Pas d&apos;onboarding structur&eacute;.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Un onboarding de 1 &agrave; 2 semaines avec interview du fondateur,
                        &eacute;tude des clients existants, analyse des concurrents.
                        Le setter ne touche pas &agrave; LinkedIn avant d&apos;avoir compris votre march&eacute;.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critere 3 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      3. Outils utilis&eacute;s
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Recherche manuelle sur LinkedIn gratuit.
                        Pas de Sales Navigator, pas de d&eacute;tection de signaux.
                        Le setter travaille &agrave; l&apos;aveugle.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Sales Navigator pour le ciblage, Reactin pour les signaux inbound,
                        Spyer pour la veille concurrentielle. Un setter qui ma&icirc;trise ces outils
                        couvre plus de terrain avec plus de pr&eacute;cision.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critere 4 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      4. Mod&egrave;le de r&eacute;mun&eacute;ration
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Fixe &eacute;lev&eacute; sans engagement sur les r&eacute;sultats.
                        Ou prime seule qui pousse &agrave; livrer du volume sans qualit&eacute;.
                        Dans les deux cas, les int&eacute;r&ecirc;ts ne sont pas align&eacute;s.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Mod&egrave;le hybride : fixe bas + prime par RDV qualifi&eacute;.
                        Le setter est pay&eacute; pour la continuit&eacute; ET pour les r&eacute;sultats.
                        D&eacute;tail complet dans notre <a href="/ressources/cout-setter-b2b-prix" className="text-accent hover:underline transition-colors">guide des prix d&apos;un setter B2B</a>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critere 5 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      5. Volume vs qualit&eacute;
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        500 profils contact&eacute;s par semaine avec des messages identiques.
                        L&apos;approche est celle de l&apos;automatisation d&eacute;guis&eacute;e en humain.
                        Taux de r&eacute;ponse en dessous de 5 %.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        20 &agrave; 50 profils par semaine, chacun avec un message adapt&eacute;
                        &agrave; son contexte. Taux de r&eacute;ponse entre 15 et 30 %.
                        Le setter privil&eacute;gie la pertinence au volume.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critere 6 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      6. Reporting et journal de bord
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Pas de reporting r&eacute;gulier. Vous ne savez pas combien de messages ont &eacute;t&eacute;
                        envoy&eacute;s, quels angles ont &eacute;t&eacute; test&eacute;s, ni quels profils ont r&eacute;pondu.
                        Le setter avance dans le noir.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Un journal de bord document&eacute; chaque semaine.
                        Messages envoy&eacute;s, taux de r&eacute;ponse, objections, angles test&eacute;s.
                        Ce journal alimente la base de connaissance et permet d&apos;it&eacute;rer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Critere 7 */}
                <div className="bg-bg-secondary rounded-xl p-6 border border-accent/30">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-sans font-semibold text-text-primary text-sm">
                      7. Garantie sur les r&eacute;sultats
                    </p>
                    <p className="font-sans text-sm font-semibold text-accent">
                      D&eacute;cisif
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvais signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Aucun engagement chiffr&eacute;. &laquo;&nbsp;On va faire de notre mieux&nbsp;&raquo;.
                        Pas de seuil minimum de RDV, pas de m&eacute;canisme de compensation
                        si les r&eacute;sultats ne sont pas l&agrave;.
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bon signe</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        Un minimum garanti (chez Setting : 5 RDV qualifi&eacute;s par mois).
                        Si le seuil n&apos;est pas atteint, la diff&eacute;rence n&apos;est pas factur&eacute;e.
                        Le risque est partag&eacute;, pas port&eacute; par le client seul.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 — Red flags */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les red flags &agrave; rep&eacute;rer
              </h2>
              <p className="mb-6">
                Certains signaux doivent vous faire reculer imm&eacute;diatement.
                Si vous rep&eacute;rez un ou plusieurs de ces points, ne signez pas.
              </p>

              <div className="space-y-4">
                {[
                  {
                    flag: 'Pas de m\u00e9thode document\u00e9e',
                    detail: "Demandez \u00e0 voir la m\u00e9thode de qualification par \u00e9crit. Si le setter n\u2019a rien \u00e0 montrer, c\u2019est qu\u2019il improvise. Et l\u2019improvisation en prospection B2B br\u00fble des leads.",
                  },
                  {
                    flag: 'Promesse de 50+ RDV par mois',
                    detail: "Sur LinkedIn, un setter qui g\u00e8re un compte humainement peut livrer entre 5 et 15 RDV qualifi\u00e9s par mois. Quelqu\u2019un qui promet 50, c\u2019est de l\u2019automatisation d\u00e9guis\u00e9e ou des RDV non qualifi\u00e9s. Dans les deux cas, vous perdez.",
                  },
                  {
                    flag: 'Aucun outil professionnel',
                    detail: "Un setter sans Sales Navigator, c\u2019est un chauffeur de taxi sans GPS. Il peut arriver quelque part, mais pas de mani\u00e8re fiable ni r\u00e9p\u00e9table.",
                  },
                  {
                    flag: 'Pas de p\u00e9riode de calibration',
                    detail: "Un setter qui dit pouvoir livrer des r\u00e9sultats d\u00e8s la premi\u00e8re semaine n\u2019a pas compris le m\u00e9tier. Les 2 premiers mois servent \u00e0 comprendre votre march\u00e9, tester les messages et affiner le ciblage. Cette phase est incompressible.",
                  },
                  {
                    flag: 'Refuse la transparence sur le process',
                    detail: "Si le setter ne veut pas partager son journal de bord, ses m\u00e9triques ou sa m\u00e9thode, c\u2019est qu\u2019il n\u2019en a pas. La transparence n\u2019est pas une option. C\u2019est la base d\u2019une collaboration qui dure.",
                  },
                ].map(({ flag, detail }) => (
                  <div key={flag} className="flex gap-4">
                    <span className="text-red-400 shrink-0 mt-0.5 font-semibold text-sm">&times;</span>
                    <div>
                      <p className="font-sans font-semibold text-text-primary text-sm mb-1">{flag}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 — Questions a poser */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les questions &agrave; poser avant de signer
              </h2>
              <p className="mb-6">
                Cinq questions. Les r&eacute;ponses vous disent tout.
              </p>

              <div className="space-y-5">
                {[
                  {
                    num: '1',
                    question: 'Comment qualifiez-vous un prospect avant de le contacter ?',
                    good: "Le setter d\u00e9crit un process pr\u00e9cis : filtres Sales Navigator, crit\u00e8res de scoring, signaux d\u2019achat identifi\u00e9s. Il sait exactement ce qu\u2019il cherche.",
                    bad: "R\u00e9ponse vague du type \u00ab\u00a0je regarde le profil et je vois si \u00e7a peut coller\u00a0\u00bb. Aucun crit\u00e8re objectif.",
                  },
                  {
                    num: '2',
                    question: "Quel est votre process d\u2019onboarding ?",
                    good: "1 \u00e0 2 semaines d\u00e9di\u00e9es : interview du fondateur, \u00e9tude de l\u2019offre, analyse des clients existants, d\u00e9finition de l\u2019ICP, premiers tests de messages.",
                    bad: "\u00ab\u00a0On peut commencer demain.\u00a0\u00bb Sans poser de questions sur votre march\u00e9.",
                  },
                  {
                    num: '3',
                    question: 'Quels outils utilisez-vous et sont-ils inclus ?',
                    good: "Sales Navigator, Reactin, Spyer. Le setter sait expliquer \u00e0 quoi sert chaque outil et comment il l\u2019utilise au quotidien.",
                    bad: "\u00ab\u00a0Je fais tout depuis LinkedIn gratuit.\u00a0\u00bb Ou bien : \u00ab\u00a0j\u2019utilise Waalaxy\u00a0\u00bb (c\u2019est de l\u2019automatisation, pas du setting humain).",
                  },
                  {
                    num: '4',
                    question: 'Quelle garantie offrez-vous sur les r\u00e9sultats ?',
                    good: "Un seuil minimum de RDV qualifi\u00e9s par mois avec un m\u00e9canisme de compensation (pas de facturation si le seuil n\u2019est pas atteint).",
                    bad: "\u00ab\u00a0Aucune garantie, le setting c\u2019est al\u00e9atoire.\u00a0\u00bb Le setting bien ex\u00e9cut\u00e9 n\u2019est pas al\u00e9atoire.",
                  },
                  {
                    num: '5',
                    question: 'Comment documentez-vous ce qui fonctionne ?',
                    good: "Un journal de bord hebdomadaire avec les messages test\u00e9s, les taux de r\u00e9ponse, les objections et les ajustements faits. Base de connaissance aliment\u00e9e semaine apr\u00e8s semaine.",
                    bad: "Pas de documentation. Le setter garde tout dans sa t\u00eate. Si la collaboration s\u2019arr\u00eate, la connaissance part avec lui.",
                  },
                ].map(({ num, question, good, bad }) => (
                  <div key={num} className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                    <div className="flex gap-3 mb-4">
                      <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4 pt-0.5">{num}.</span>
                      <p className="font-sans font-semibold text-text-primary text-sm">{question}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-sans text-xs font-semibold text-accent mb-1.5">Bonne r&eacute;ponse</p>
                        <p className="font-sans text-text-secondary text-sm leading-relaxed">{good}</p>
                      </div>
                      <div>
                        <p className="font-sans text-xs font-semibold text-red-400 mb-1.5">Mauvaise r&eacute;ponse</p>
                        <p className="font-sans text-text-secondary text-sm leading-relaxed">{bad}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5 — Freelance, agence ou interne */}
            <section>
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Freelance, agence ou interne : quelle option
              </h2>
              <p className="mb-6">
                Le format change la dynamique du programme. Voici ce que chaque option implique concr&egrave;tement.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full font-sans text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 pr-6 font-semibold text-text-primary w-1/4" />
                      <th className="text-left py-3 pr-6 font-semibold text-text-primary">Freelance</th>
                      <th className="text-left py-3 pr-6 font-semibold text-text-primary">Agence</th>
                      <th className="text-left py-3 font-semibold text-text-primary">Interne</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Co\u00fbt mensuel', '500\u2013900\u00a0\u20ac', '790\u20131\u00a0500\u00a0\u20ac', '2\u00a0500\u20134\u00a0000\u00a0\u20ac'],
                      ['D\u00e9marrage', '1\u20132 semaines', '2\u20133 semaines', '2\u20134 mois'],
                      ['M\u00e9thode fournie', 'Rarement', 'Oui', '\u00c0 construire'],
                      ['Outils inclus', 'Non', 'Souvent', '\u00c0 acheter'],
                      ['Continuit\u00e9', 'Fragile', 'Assur\u00e9e', 'D\u00e9pend du turnover'],
                      ['Calibration', 'Seul', 'Accompagn\u00e9e', 'Seul'],
                    ].map(([label, freelance, agence, interne], i) => (
                      <tr key={i} className="border-b border-white/[0.06]">
                        <td className="py-3 pr-6 font-medium text-text-primary">{label}</td>
                        <td className="py-3 pr-6 text-text-secondary">{freelance}</td>
                        <td className="py-3 pr-6 text-text-secondary">{agence}</td>
                        <td className="py-3 text-text-secondary">{interne}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="font-sans text-text-secondary text-sm mt-6 leading-relaxed">
                Pour un fondateur ou solopreneur B2B qui veut des r&eacute;sultats rapides sans g&eacute;rer
                l&apos;infrastructure, l&apos;agence est le format le plus adapt&eacute;.
                Le freelance fonctionne si vous avez d&eacute;j&agrave; une m&eacute;thode &agrave; transmettre.
                L&apos;interne n&apos;a de sens qu&apos;&agrave; partir du moment o&ugrave; vous avez valid&eacute;
                un volume de leads pr&eacute;visible et r&eacute;current sur au moins 6 mois.
              </p>

              <p className="font-sans text-text-secondary text-sm mt-4 leading-relaxed">
                Pour aller plus loin sur la comparaison <a href="/ressources/setting-humain-vs-automatisation-linkedin" className="text-accent hover:underline transition-colors">setting humain vs automatisation LinkedIn</a> et
                sur les diff&eacute;rences <a href="/ressources/sdr-interne-vs-externalise" className="text-accent hover:underline transition-colors">SDR interne vs externalis&eacute;</a>.
              </p>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions fr&eacute;quentes
              </h2>
              <div className="divide-y divide-white/[0.06]">
                {faqItems.map((item, i) => (
                  <div key={i} className="py-5">
                    <p className="font-sans font-semibold text-text-primary mb-2">
                      {item.question}
                    </p>
                    <p className="font-sans text-text-secondary leading-relaxed text-sm">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/cout-setter-b2b-prix', label: "Co\u00fbt d\u2019un setter B2B en 2026 : les vrais chiffres" },
                { href: '/ressources/setter-b2b-definition', label: "C\u2019est quoi un setter en B2B ?" },
                { href: '/ressources/setting-humain-vs-automatisation-linkedin', label: 'Setting humain vs automatisation LinkedIn : le vrai comparatif' },
              ].map(({ href, label }) => (
                <a key={href} href={href} className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group">
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Voir le programme Setting
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              M&eacute;thode structur&eacute;e, outils inclus, garantie 5 RDV qualifi&eacute;s par mois.
              Pas de paiement si l&apos;objectif n&apos;est pas atteint. D&eacute;marrage en 2 semaines.
            </p>
            <ButtonGlow as="a" href="https://calendly.com/a-brakha-challengerslab/echange-decouverte-challengerslab" target="_blank" rel="noopener noreferrer">
              Voir le programme Setting &rarr;
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
