import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "La levée de fonds comme signal d'achat B2B | Setting",
  description:
    "Une levée de fonds débloque du budget et de la pression. Pourquoi contacter le jour de l'annonce est une erreur, quel montant change quoi, et à qui écrire.",
  openGraph: {
    title: "La levée de fonds comme signal d'achat B2B",
    description:
      "Le signal le plus disputé du B2B. Fenêtre de tir réelle, lecture du montant, et comment ne pas être le trentième message de la semaine.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "La levée de fonds comme signal d'achat B2B",
    description:
      "Le signal le plus disputé du B2B. Fenêtre de tir réelle, lecture du montant, et à qui écrire.",
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin',
      'x-default': 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin#article',
  headline: "La levée de fonds comme signal d'achat B2B",
  description:
    "Guide du signal de levée de fonds en prospection B2B : ce que le montant révèle, la fenêtre de tir réelle, à qui écrire selon le tour, et pourquoi c'est le signal le plus concurrentiel.",
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
    '@id': 'https://www.setting.live/#business',
    name: 'Setting',
    url: 'https://www.setting.live',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.setting.live/icon.png',
      width: 512,
      height: 512,
    },
  },
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin',
  },
  image: 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]', '.faq-answer'],
  },
  articleSection: 'Signaux d’achat',
  wordCount: 1600,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: {
    '@type': 'Thing',
    name: 'Signal de levée de fonds',
    description:
      "Annonce d'un tour de financement par une entreprise, interprétée en prospection B2B comme la disponibilité soudaine d'un budget assortie d'une pression de déploiement.",
  },
}

const faqItems = [
  {
    question: 'Pourquoi une levée de fonds est-elle un signal d’achat ?',
    answer:
      "Une levée débloque un budget et crée une obligation de le dépenser vite. Les investisseurs attendent une accélération mesurable, souvent sur l'acquisition et le recrutement. L'entreprise passe d'une logique de préservation de trésorerie à une logique de déploiement, en quelques jours.",
  },
  {
    question: 'Quand contacter après une levée de fonds ?',
    answer:
      "Entre la 3e et la 8e semaine après l'annonce. Le jour même et la semaine qui suit, l'entreprise reçoit des dizaines de sollicitations commerciales et n'a encore rien décidé. Passé deux mois, les gros postes de dépense sont arbitrés.",
  },
  {
    question: 'Le montant levé change-t-il l’approche ?',
    answer:
      "Oui, complètement. Sous un million d'euros, le dirigeant décide encore seul et achète des solutions légères et rapides à mettre en place. Au-delà de cinq millions, une structure se met en place, les achats passent par des responsables de fonction et les cycles s'allongent.",
  },
  {
    question: 'Qui contacter dans une entreprise qui vient de lever ?',
    answer:
      "Sur un petit tour, le dirigeant. Sur un tour important, le responsable de la fonction concernée, qui vient souvent d'être recruté ou promu et cumule alors deux signaux. Le fondateur d'une série B est le profil le plus sollicité du marché et répond peu.",
  },
  {
    question: 'Comment détecter les levées de fonds ?',
    answer:
      "Les annonces sont publiées sur LinkedIn par les fondateurs et les fonds. Une liste de comptes suivis dans Sales Navigator, complétée par la veille des fonds d'investissement actifs sur votre segment, couvre l'essentiel. Suivre les investisseurs est souvent plus efficace que suivre les entreprises.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
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
      name: 'Signal de levée de fonds',
      item: 'https://www.setting.live/ressources/signal-levee-de-fonds-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SignalLeveeDeFondsLinkedInPage() {
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
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Signal de levée de fonds</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/ressources/signal-achat-linkedin" className="hover:underline transition-colors">Signaux d&apos;achat</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              La levée de fonds comme signal d&apos;achat
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Une levée débloque un budget et crée une obligation de le dépenser vite.
              Le signal le plus lisible du B2B, et le plus disputé. La plupart des gens le
              jouent au mauvais moment.
            </p>
            <AuthorBlock date="2026-09-03" readTime="8 min de lecture" dateLabel="3 septembre 2026" />
          </header>

          {/* Definition Block */}
          <div data-speakable="true" className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Le <strong>signal de levée de fonds</strong> est l&apos;annonce d&apos;un tour de
              financement, interprétée comme la disponibilité soudaine d&apos;un budget assortie
              d&apos;une pression de déploiement. C&apos;est un{' '}
              <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal
              d&apos;achat</a> outbound à forte visibilité : tout le monde le voit en même temps
              que vous.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce qui change dans l&apos;entreprise
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Avant la levée, l&apos;entreprise préserve sa trésorerie. Chaque dépense se discute,
              les décisions traînent, et un prestataire externe passe pour un luxe. Après la levée,
              la logique s&apos;inverse en quelques jours.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Les investisseurs n&apos;ont pas mis de l&apos;argent pour qu&apos;il dorme. Ils
              attendent une accélération mesurable, le plus souvent sur l&apos;acquisition et le
              recrutement. Le dirigeant se retrouve avec une pression nouvelle : dépenser vite et bien.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              L&apos;opportunité vient de ce renversement, pas de l&apos;argent lui-même.
              Une entreprise riche qui n&apos;a rien à prouver n&apos;achète pas plus vite.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Une levée annonce presque toujours une vague de recrutement.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Ce qui en fait un signal double. Surveillez les offres publiées dans les semaines qui
                suivent : elles vous disent précisément où va le budget. C&apos;est le croisement avec le{' '}
                <a href="/ressources/signal-recrutement-linkedin" className="text-accent hover:underline transition-colors">signal
                de recrutement</a>.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi le jour de l&apos;annonce est le pire moment
            </h2>
            <p data-speakable="true" className="font-sans text-text-secondary leading-relaxed mb-5">
              La fenêtre utile se situe entre la 3<sup>e</sup> et la 8<sup>e</sup> semaine après
              l&apos;annonce. Le jour même, le fondateur reçoit des félicitations, des demandes de
              partenariat et des dizaines de messages commerciaux. Il n&apos;a encore rien décidé,
              et il n&apos;a surtout pas le temps de vous lire.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Deux à trois semaines plus tard, le bruit retombe et les arbitrages commencent.
              C&apos;est là que la question « avec qui on fait ça ? » se pose réellement.
              Vous arrivez dans une boîte de réception redevenue lisible, sur un sujet devenu urgent.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Au-delà de deux mois, les gros postes de dépense sont engagés. Le budget existe encore,
              mais il est fléché.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Lire le montant
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Le montant ne dit pas seulement combien ils peuvent dépenser. Il dit comment ils
              décident, et donc à qui vous devez écrire.
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm font-sans text-text-secondary border border-white/[0.08] rounded-lg">
                <thead className="bg-white/[0.03]">
                  <tr>
                    <th className="text-left p-3 border-b border-white/[0.08]">Tour</th>
                    <th className="text-left p-3 border-b border-white/[0.08]">Qui décide</th>
                    <th className="text-left p-3 border-b border-white/[0.08]">Ce qu&apos;ils achètent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-white/[0.06] text-text-primary">Moins de 1 M€</td>
                    <td className="p-3 border-b border-white/[0.06]">Le dirigeant, seul</td>
                    <td className="p-3 border-b border-white/[0.06]">Du léger, du rapide, du sans engagement</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/[0.06] text-text-primary">1 à 5 M€</td>
                    <td className="p-3 border-b border-white/[0.06]">Dirigeant + premier responsable de fonction</td>
                    <td className="p-3 border-b border-white/[0.06]">De la mise en place de process, souvent externalisée</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-text-primary">Plus de 5 M€</td>
                    <td className="p-3">Responsables de fonction, avec un process d&apos;achat</td>
                    <td className="p-3">De l&apos;internalisation et des outils structurants</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Une conséquence contre-intuitive : les gros tours ne sont pas les meilleures cibles pour
              une offre externalisée. Au-delà de cinq millions, l&apos;entreprise recrute en interne
              plutôt qu&apos;elle ne délègue. Les tours de un à cinq millions sont la zone où votre
              proposition arrive au bon moment.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le signal le plus concurrentiel
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Contrairement au{' '}
              <a href="/ressources/signal-changement-poste-linkedin" className="text-accent hover:underline transition-colors">changement
              de poste</a>, qui passe inaperçu pour qui ne surveille pas, une levée est une annonce
              publique amplifiée par les fondateurs, les fonds et la presse. Tous vos concurrents la
              voient le même jour.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Le timing compte donc plus ici qu&apos;ailleurs. Arriver trois semaines après tout le
              monde n&apos;est pas un retard, c&apos;est un positionnement. Vous êtes seul
              dans une boîte de réception qui a été saturée puis vidée.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Et le message doit éviter le mot lui-même. « Félicitations pour votre levée » est la
              première ligne de trente messages déjà reçus. Parlez de ce que la levée rend possible
              dans leur métier, pas de la levée.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden mt-6">
              <div className="px-6 py-4 border-b border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary">Trois semaines après, pas le jour même</p>
              </div>
              <div className="px-6 py-5">
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  « J&apos;ai vu que vous ouvriez deux postes commerciaux depuis le mois dernier.
                  Sur ce type de montée en charge, la partie qui coince en général, c&apos;est le
                  temps entre la signature et les premiers rendez-vous. Vous avez prévu quoi pour
                  ce trimestre-là&nbsp;? »
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Détecter les levées
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Les annonces circulent d&apos;abord sur LinkedIn, publiées par les fondateurs puis
              relayées par les fonds. Une liste de comptes suivis dans Sales Navigator couvre vos
              cibles connues.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Mais la meilleure source est ailleurs : <strong className="text-text-primary">suivez
              les investisseurs plutôt que les entreprises</strong>. Un fonds actif sur votre segment
              annonce ses opérations, et vous découvrez ainsi des sociétés qui n&apos;étaient pas dans
              votre liste. C&apos;est le seul moyen de capter les levées de comptes que vous ne
              surveilliez pas encore.
            </p>
          </section>

          <CtaArticle variant="setting" />

          {/* FAQ */}
          <section className="mb-14 mt-14" id="faq">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes
            </h2>
            <div className="divide-y divide-white/[0.06]">
              {faqItems.map(({ question, answer }, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-sans font-semibold text-text-primary text-sm pr-4">{question}</h3>
                    <span className="text-accent shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="faq-answer font-sans text-text-secondary text-sm leading-relaxed mt-3">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les autres signaux
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { href: '/ressources/signal-achat-linkedin', label: "Signaux d'achat LinkedIn : le guide" },
                { href: '/ressources/signal-recrutement-linkedin', label: 'Le recrutement comme signal' },
                { href: '/ressources/signal-changement-poste-linkedin', label: 'Le changement de poste comme signal' },
                { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet' },
                { href: '/ressources/inbound-setting-linkedin', label: 'Inbound setting LinkedIn' },
                { href: '/ressources/liste-prospection-linkedin-b2b', label: 'Construire sa liste de prospection' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                >
                  <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                    {label}
                  </p>
                  <span className="font-sans text-xs text-text-secondary">→ Lire le guide</span>
                </a>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-bg-secondary rounded-2xl p-8 md:p-10 text-center border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Le bon moment, pas le premier
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-4">
              On arrive quand la boîte de réception s&apos;est vidée
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
              Surveillance des levées, des recrutements qui suivent, et des changements de poste.
              Un setter dédié écrit au moment où le message est encore lu.
            </p>
            <ButtonGlow href="/tarifs">
              Voir nos tarifs
            </ButtonGlow>
          </section>

          {/* Related */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min' },
              { href: '/ressources/signal-recrutement-linkedin', title: 'Le recrutement comme signal d’achat', readTime: '8 min' },
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : définition, méthode et exemples', readTime: '25 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
