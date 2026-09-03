import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Le changement de poste comme signal d'achat B2B | Setting",
  description:
    "Un décideur qui vient d'arriver veut marquer son passage. Quand le contacter, pourquoi féliciter est une erreur, et le cas du client qui change d'entreprise.",
  openGraph: {
    title: "Le changement de poste comme signal d'achat B2B",
    description:
      "La fenêtre des 90 jours, la bonne façon d'entrer en contact, et le signal le plus rentable du B2B : votre ancien client qui change de boîte.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Le changement de poste comme signal d'achat B2B",
    description:
      "La fenêtre des 90 jours, la bonne façon d'entrer en contact, et le signal le plus rentable du B2B.",
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/signal-changement-poste-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/signal-changement-poste-linkedin',
      'x-default': 'https://www.setting.live/ressources/signal-changement-poste-linkedin',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/signal-changement-poste-linkedin#article',
  headline: "Le changement de poste comme signal d'achat B2B",
  description:
    "Guide du signal de changement de poste en prospection B2B : la fenêtre des 90 jours, la détection sur LinkedIn, l'erreur de la félicitation et le cas du champion qui change d'entreprise.",
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
  url: 'https://www.setting.live/ressources/signal-changement-poste-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/signal-changement-poste-linkedin',
  },
  image: 'https://www.setting.live/ressources/signal-changement-poste-linkedin/opengraph-image',
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
    name: 'Signal de changement de poste',
    description:
      "Arrivée d'un décideur à un nouveau poste, interprétée en prospection B2B comme une fenêtre d'ouverture : budget à redéfinir, fournisseurs à réévaluer, volonté de marquer son passage.",
  },
}

const faqItems = [
  {
    question: 'Pourquoi un changement de poste est-il un signal d’achat ?',
    answer:
      "Une personne qui arrive à un poste hérite de décisions qu'elle n'a pas prises. Elle veut montrer un résultat rapidement et n'a aucun attachement aux fournisseurs en place. C'est la période où un contrat historique est le plus facilement remis en question.",
  },
  {
    question: 'Quand contacter quelqu’un qui vient de changer de poste ?',
    answer:
      "Entre le 30e et le 90e jour. Les premières semaines, la personne est saturée d'onboarding et de félicitations, elle ne lit rien. Après trois mois, ses priorités sont arrêtées et son budget est engagé. La fenêtre utile est étroite et elle est au milieu.",
  },
  {
    question: 'Faut-il féliciter pour la nouvelle prise de poste ?',
    answer:
      "Non. La personne reçoit des dizaines de félicitations automatiques la première semaine, et LinkedIn propose même un bouton pour le faire. Vous vous rangez immédiatement dans la catégorie du bruit. Écrivez plutôt sur ce qu'elle hérite dans son nouveau périmètre.",
  },
  {
    question: 'Comment détecter les changements de poste sur LinkedIn ?',
    answer:
      "Sales Navigator envoie une alerte pour chaque changement de poste dans vos listes de prospects sauvegardées. C'est la fonction la plus rentable de l'abonnement. Sans Sales Navigator, LinkedIn affiche l'information dans les notifications, mais uniquement pour vos relations de 1er niveau.",
  },
  {
    question: 'Que faire quand un client change d’entreprise ?',
    answer:
      "C'est le signal le plus rentable du B2B et le plus souvent ignoré. La personne connaît déjà votre travail, la confiance existe et vous n'avez plus à faire la preuve. Recontactez-la après un à deux mois dans le nouveau poste, sans jamais faire référence au contrat précédent comme un dû.",
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
      name: 'Signal de changement de poste',
      item: 'https://www.setting.live/ressources/signal-changement-poste-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SignalChangementPosteLinkedInPage() {
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
              <li className="text-text-primary">Signal de changement de poste</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/ressources/signal-achat-linkedin" className="hover:underline transition-colors">Signaux d&apos;achat</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Le changement de poste comme signal d&apos;achat
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Quelqu&apos;un qui arrive à un poste hérite de décisions qu&apos;il n&apos;a pas prises.
              Il n&apos;a aucun attachement aux fournisseurs en place et il veut montrer un résultat vite.
              C&apos;est la période où tout se rediscute.
            </p>
            <AuthorBlock date="2026-09-03" readTime="8 min de lecture" dateLabel="3 septembre 2026" />
          </header>

          {/* Definition Block */}
          <div data-speakable="true" className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Le <strong>signal de changement de poste</strong> est l&apos;arrivée d&apos;un décideur
              à une nouvelle fonction, interprétée comme une fenêtre d&apos;ouverture : budget à
              redéfinir, fournisseurs à réévaluer, volonté d&apos;imprimer sa marque. C&apos;est un{' '}
              <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal
              d&apos;achat</a> outbound, et le plus daté de tous : il a une date de péremption nette.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi ce signal fonctionne
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un décideur en place défend ses choix. Il a signé les contrats en cours, il a recommandé
              les outils, il a arbitré les budgets. Remettre en cause un fournisseur, c&apos;est
              remettre en cause sa propre décision.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un décideur qui vient d&apos;arriver n&apos;a rien signé. Il découvre un existant qu&apos;il
              n&apos;a pas choisi, et il est même attendu sur sa capacité à le remettre à plat. Changer
              de prestataire dans ses trois premiers mois n&apos;est pas un aveu d&apos;échec, c&apos;est
              une prise de fonction.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              C&apos;est toute la différence. Sur le même compte, avec la même offre, le même message
              obtient une réponse polie six mois trop tard et une réunion dans la bonne fenêtre.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La fenêtre des 90 jours, et pourquoi ce n&apos;est pas la première semaine
            </h2>
            <p data-speakable="true" className="font-sans text-text-secondary leading-relaxed mb-5">
              La bonne fenêtre se situe entre le 30<sup>e</sup> et le 90<sup>e</sup> jour. La plupart
              des gens contactent le premier jour, ce qui est le pire moment.
            </p>

            <div className="space-y-4 my-6">
              {[
                { t: 'Jours 1 à 30 — trop tôt', d: 'La personne croule sous les félicitations automatiques et l’onboarding. Elle ne lit pas ses DM, elle apprend les prénoms de son équipe.' },
                { t: 'Jours 30 à 90 — la fenêtre', d: 'Elle a identifié ce qui ne va pas, elle n’a pas encore arbitré. Elle cherche activement des options et elle a besoin d’un résultat visible avant sa première revue.' },
                { t: 'Après 90 jours — trop tard', d: 'Les priorités sont posées, le budget de l’exercice est engagé, et elle a déjà choisi ses partenaires. Vous repassez en file d’attente normale.' },
              ].map(({ t, d }) => (
                <div key={t} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">{t}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed">
              Concrètement, cela veut dire qu&apos;un changement de poste détecté aujourd&apos;hui ne
              se travaille pas aujourd&apos;hui. Il se note, et il se ressort dans un mois. Peu
              d&apos;équipes ont la discipline de faire ça, ce qui explique que la fenêtre reste peu
              encombrée alors que le signal est connu de tous.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Détecter les changements de poste
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Sales Navigator envoie une alerte pour chaque changement de poste dans vos listes de
              prospects sauvegardées. C&apos;est la fonction la plus rentable de l&apos;abonnement,
              et celle que la plupart des utilisateurs n&apos;activent jamais.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Sans Sales Navigator, LinkedIn remonte l&apos;information dans les notifications, mais
              seulement pour vos relations de 1<sup>er</sup> niveau. C&apos;est une bonne raison
              d&apos;accepter large et de{' '}
              <a href="/ressources/parametres-linkedin" className="text-accent hover:underline transition-colors">garder
              vos invitations ouvertes</a> : chaque relation devient un capteur.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Le signal marche dans les deux sens.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Le prospect qui bouge est une opportunité. Le poste qu&apos;il libère en est une autre :
                quelqu&apos;un va le remplacer, et cette personne arrivera elle aussi sans attachement
                aux fournisseurs en place. Un départ crée deux fenêtres.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pourquoi féliciter est une erreur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              LinkedIn propose un bouton pour féliciter. Des dizaines de personnes cliquent dessus la
              première semaine. Si votre message commence par « Félicitations pour votre nouveau
              poste », vous venez de vous ranger dans une catégorie que le prospect a appris à
              ignorer en trois jours.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Ce qui fonctionne consiste à parler de ce qu&apos;il hérite, pas de ce qu&apos;il vient
              d&apos;obtenir. La prise de poste n&apos;est pas le sujet du message, elle en est
              seulement la raison.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
              <div className="px-6 py-4 border-b border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary">Deux entrées, même signal</p>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                    Ce qui se noie
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    « Félicitations pour votre nouveau poste de Head of Sales&nbsp;! Je serais ravi
                    d&apos;échanger sur vos enjeux d&apos;acquisition. »
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Ce qui ouvre
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    « Vous arrivez sur un périmètre où l&apos;équipe commerciale est passée de 3 à 8
                    personnes en un an, si j&apos;ai bien lu. Vous héritez de la structuration ou elle
                    est déjà faite&nbsp;? »
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              Le second message demande cinq minutes de lecture du profil et de la page entreprise.
              C&apos;est exactement le travail qu&apos;un{' '}
              <a href="/ressources/setter-b2b" className="text-accent hover:underline transition-colors">setter</a>{' '}
              fait avant d&apos;écrire.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le cas le plus rentable : votre client qui change d&apos;entreprise
            </h2>
            <p data-speakable="true" className="font-sans text-text-secondary leading-relaxed mb-5">
              C&apos;est le signal le plus fort du B2B, et celui que presque personne ne surveille.
              Une personne qui a travaillé avec vous et qui rejoint une autre entreprise connaît déjà
              votre travail. La preuve est faite. Vous n&apos;avez plus à vendre la confiance, seulement
              la pertinence dans le nouveau contexte.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Deux conditions pour que ça marche. La première est le délai : laissez un à deux mois,
              le temps qu&apos;elle ait de la marge. La seconde tient à la façon de le formuler.
              Le contrat précédent n&apos;est pas un dû et ne doit jamais être présenté comme tel.
              Vous reprenez une conversation, vous ne réclamez pas une reconduction.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              En pratique, cela suppose de tenir une liste de vos anciens interlocuteurs et de la
              surveiller. C&apos;est un fichier de quelques dizaines de lignes qui produit plus que
              des centaines de contacts froids.
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
                { href: '/ressources/signal-levee-de-fonds-linkedin', label: 'La levée de fonds comme signal' },
                { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet' },
                { href: '/ressources/message-linkedin-b2b', label: 'Messages LinkedIn B2B qui obtiennent une réponse' },
                { href: '/ressources/setter-b2b', label: 'Setter B2B : le métier, le salaire et l’évolution' },
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
              La fenêtre est étroite
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-4">
              On surveille, on note, on relance au bon moment
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
              Un changement de poste détecté aujourd&apos;hui se travaille dans un mois.
              C&apos;est le genre de discipline qu&apos;un setter dédié tient à votre place.
            </p>
            <ButtonGlow href="/tarifs">
              Voir nos tarifs
            </ButtonGlow>
          </section>

          {/* Related */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/signal-achat-linkedin', title: "C'est quoi un signal d'achat LinkedIn ?", readTime: '7 min' },
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : définition, méthode et exemples', readTime: '25 min' },
              { href: '/ressources/message-linkedin-b2b', title: 'Messages LinkedIn B2B qui obtiennent une réponse', readTime: '14 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
