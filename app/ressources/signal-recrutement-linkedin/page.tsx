import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'

export const metadata: Metadata = {
  title: "Le recrutement comme signal d'achat B2B : détecter et exploiter | Setting",
  description:
    "Une entreprise qui recrute vient de valider un besoin et un budget. Comment détecter ces offres sur LinkedIn, qui contacter, quand, et quoi écrire.",
  openGraph: {
    title: "Le recrutement comme signal d'achat B2B : détecter et exploiter",
    description:
      "Une offre d'emploi est une déclaration publique de manque. Détection, fenêtre de tir, bonne cible et message.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Le recrutement comme signal d'achat B2B",
    description:
      "Une offre d'emploi est une déclaration publique de manque. Détection, fenêtre de tir, bonne cible et message.",
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/signal-recrutement-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/signal-recrutement-linkedin',
      'x-default': 'https://www.setting.live/ressources/signal-recrutement-linkedin',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/signal-recrutement-linkedin#article',
  headline: "Le recrutement comme signal d'achat B2B : détecter et exploiter",
  description:
    "Guide du signal de recrutement en prospection B2B : où détecter les offres sur LinkedIn, ce qu'elles révèlent, la fenêtre de tir, la bonne cible et le message à écrire.",
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
  url: 'https://www.setting.live/ressources/signal-recrutement-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/signal-recrutement-linkedin',
  },
  image: 'https://www.setting.live/ressources/signal-recrutement-linkedin/opengraph-image',
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
    name: 'Signal de recrutement',
    description:
      "Publication d'une offre d'emploi par une entreprise, interprétée en prospection B2B comme la validation publique d'un besoin et d'un budget sur une fonction précise.",
  },
}

const faqItems = [
  {
    question: 'Pourquoi une offre d’emploi est-elle un signal d’achat ?',
    answer:
      "Publier une offre coûte cher et engage l'entreprise publiquement. Cela signifie qu'un besoin a été identifié, qu'un budget a été validé en interne et qu'une fonction est aujourd'hui mal couverte. C'est la seule catégorie de signal où l'entreprise décrit elle-même, en détail, le problème qu'elle cherche à résoudre.",
  },
  {
    question: 'Où détecter les recrutements sur LinkedIn ?',
    answer:
      "Trois sources : l'onglet Emplois d'une page entreprise, les alertes de Sales Navigator sur une liste de comptes surveillés, et le badge « recrute » affiché sur les profils des collaborateurs. Sales Navigator est la seule des trois qui vous prévient sans que vous ayez à regarder.",
  },
  {
    question: 'Faut-il contacter le recruteur ou le manager ?',
    answer:
      "Le manager de la fonction recrutée, presque toujours. Le recruteur gère un processus, pas un budget d'achat, et reçoit déjà des dizaines de sollicitations de cabinets. Le manager, lui, subit le manque au quotidien. C'est lui qui a demandé le poste.",
  },
  {
    question: 'Quel est le bon moment pour contacter après une offre publiée ?',
    answer:
      "Les deux premières semaines. Passé un mois, l'entreprise a souvent avancé sur des candidats et la douleur est perçue comme temporaire. En dessous de quelques jours, vous tombez au moment où le manager valide encore la fiche de poste avec les RH.",
  },
  {
    question: 'Que dire dans le message ?',
    answer:
      "Ancrez sur le poste précis, pas sur le fait de recruter. « J'ai vu que vous cherchiez un SDR » ne dit rien. Citez un élément de la fiche de poste et posez une question sur le délai ou sur ce qui est fait en attendant. Ne proposez jamais votre offre comme alternative au recrutement dans le premier message.",
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
      name: 'Signal de recrutement',
      item: 'https://www.setting.live/ressources/signal-recrutement-linkedin',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SignalRecrutementLinkedInPage() {
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
              <li className="text-text-primary">Signal de recrutement</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              <a href="/ressources/signal-achat-linkedin" className="hover:underline transition-colors">Signaux d&apos;achat</a>
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Le recrutement comme signal d&apos;achat
            </h1>
            <p data-speakable="true" className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Une offre d&apos;emploi est une déclaration publique de manque. L&apos;entreprise dit
              elle-même quelle fonction est mal couverte, ce qu&apos;elle attend, et qu&apos;elle a
              débloqué le budget. Aucun autre signal n&apos;est aussi documenté.
            </p>
            <AuthorBlock date="2026-09-03" readTime="8 min de lecture" dateLabel="3 septembre 2026" />
          </header>

          {/* Definition Block */}
          <div data-speakable="true" className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Définition
            </p>
            <p className="font-sans text-text-primary leading-relaxed">
              Le <strong>signal de recrutement</strong> est la publication d&apos;une offre d&apos;emploi,
              interprétée comme la validation publique d&apos;un besoin et d&apos;un budget sur une
              fonction précise. C&apos;est un{' '}
              <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal
              d&apos;achat</a> de type outbound : le prospect ne vous connaît pas, mais il vient de
              rendre son problème public.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce qu&apos;une offre d&apos;emploi révèle vraiment
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Publier une offre engage. Il a fallu qu&apos;un manager remonte un besoin, que la direction
              valide une enveloppe, et que les RH rédigent une fiche de poste. Trois validations internes
              avant que l&apos;annonce sorte. Quand vous la lisez, la décision est déjà prise.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un like sur un post indique un intérêt. Une offre d&apos;emploi indique un budget
              validé. Les deux ne se travaillent pas pareil.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Elle dit aussi trois choses que le prospect ne vous dirait jamais en premier appel :
              la fonction qui pose problème aujourd&apos;hui, les outils déjà en place (la section
              « environnement technique » est une mine), et le niveau de maturité de l&apos;équipe.
              Une entreprise qui recrute son premier commercial n&apos;achète pas la même chose
              qu&apos;une qui recrute son cinquième.
            </p>

            <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
              <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
              <p className="font-sans font-semibold text-text-primary mb-1">
                Le recrutement d&apos;un profil commercial est le sous-signal le plus fort.
              </p>
              <p className="font-sans text-text-secondary text-sm">
                Une entreprise qui recrute un SDR ou un business developer a décidé d&apos;investir dans
                l&apos;acquisition sortante. C&apos;est exactement le moment où une alternative externalisée
                devient discutable, parce que la comparaison se fait naturellement dans sa tête.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Où détecter les recrutements
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Trois sources, de la plus manuelle à la plus automatisable.
            </p>

            <div className="space-y-4">
              {[
                {
                  t: 'L’onglet Emplois d’une page entreprise',
                  d: 'Gratuit, complet, mais il faut y aller. Utilisable sur une liste courte de comptes prioritaires, pas à l’échelle.',
                },
                {
                  t: 'Les alertes Sales Navigator',
                  d: 'Vous créez une liste de comptes et l’outil vous prévient des nouvelles offres. C’est la seule source qui travaille pendant que vous faites autre chose. Le réglage utile est l’alerte par compte, pas par mot-clé.',
                },
                {
                  t: 'Le badge « recrute » sur les profils',
                  d: 'Visible sur la photo des collaborateurs. Moins précis, mais il vous alerte quand vous consultez un profil pour une autre raison.',
                },
              ].map(({ t, d }) => (
                <div key={t} className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
                  <p className="font-sans font-semibold text-text-primary mb-2">{t}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              La détection ne vaut rien sans filtrage. Une offre publiée par une entreprise hors de votre{' '}
              <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">ICP</a>{' '}
              reste une offre hors ICP. Le signal ne remplace pas le ciblage, il le priorise.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La fenêtre de tir
            </h2>
            <p data-speakable="true" className="font-sans text-text-secondary leading-relaxed mb-5">
              Les deux premières semaines après la publication. Avant, le manager finalise encore la
              fiche de poste avec les RH et n&apos;a pas la tête à autre chose. Après un mois, des
              candidats sont en process et la douleur devient temporaire dans son esprit.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Il existe une seconde fenêtre, moins évidente : le moment où
              l&apos;offre est republiée. Une entreprise qui remet la même annonce en ligne deux mois
              plus tard vient de vous dire qu&apos;elle n&apos;a trouvé personne. La douleur est
              redevenue aiguë, et la solution alternative devient beaucoup plus audible.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Surveiller les republications demande de garder un historique de vos détections.
              Sans cet historique, une republication passe inaperçue.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Qui contacter, et qui éviter
            </h2>
            <p data-speakable="true" className="font-sans text-text-secondary leading-relaxed mb-5">
              Le manager de la fonction recrutée. Pas le recruteur, pas les RH, pas le dirigeant
              par défaut. Le manager est celui qui a remonté le besoin et qui subit le manque
              toutes les semaines.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Le recruteur, lui, gère un processus. Il ne dispose d&apos;aucun budget d&apos;achat
              et reçoit déjà une dizaine de sollicitations de cabinets par offre publiée. Vous
              arrivez dans une file d&apos;attente où tout le monde propose la même chose.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-bg-secondary px-6 py-5">
              <p className="font-sans font-semibold text-text-primary mb-3">
                Trouver le bon interlocuteur en trois clics
              </p>
              <ol className="font-sans text-text-secondary text-sm leading-relaxed space-y-2 list-decimal pl-5">
                <li>Ouvrez la page entreprise, onglet <em>Personnes</em>.</li>
                <li>Filtrez sur la fonction recrutée. Vous cherchez le niveau au-dessus du poste ouvert.</li>
                <li>Si deux profils correspondent, prenez celui dont l&apos;ancienneté est la plus longue. C&apos;est en général lui qui porte le sujet.</li>
              </ol>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Le message : ce qui marche et ce qui tue
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              L&apos;erreur classique est de traiter le recrutement comme un prétexte
              d&apos;accroche, puis de pivoter immédiatement vers son offre. « J&apos;ai vu que vous
              recrutiez un SDR, avez-vous pensé à externaliser ? » Le prospect lit une objection à sa
              propre décision, dans le premier message d&apos;un inconnu.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Ce qui fonctionne est plus lent. Vous citez un élément précis de la fiche de poste, et
              vous posez une question sur le délai ou sur l&apos;intérim. Le manager, lui, sait très
              bien qu&apos;un recrutement prend trois mois. Il se demande déjà ce qu&apos;il fait
              d&apos;ici là. Ouvrez cette question-là, pas la vôtre.
            </p>

            <div className="rounded-xl border border-white/[0.06] bg-bg-secondary overflow-hidden">
              <div className="px-6 py-4 border-b border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary">Deux formulations, même signal</p>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                    Ce qui ferme
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    « Bonjour, j&apos;ai vu que vous recrutiez un SDR. Nous proposons de la prospection
                    externalisée à partir de 790 € par mois, sans engagement. Seriez-vous disponible
                    pour un échange de 15 minutes&nbsp;? »
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                    Ce qui ouvre
                  </p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    « Bonjour, j&apos;ai lu votre offre de SDR, notamment la partie sur la construction
                    des listes de prospection en autonomie. Vous visez une prise de poste pour quelle
                    échéance&nbsp;? Je demande parce que c&apos;est en général le trimestre entre la
                    décision et l&apos;arrivée qui coûte le plus cher. »
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sans text-text-secondary leading-relaxed mt-6">
              Le second message ne vend rien. Il montre que vous avez lu, et il pose une question dont
              la réponse intéresse le prospect autant que vous. Les principes de rédaction sont
              détaillés dans notre guide des{' '}
              <a href="/ressources/message-linkedin-b2b" className="text-accent hover:underline transition-colors">messages
              LinkedIn B2B</a>.
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
                { href: '/ressources/signal-changement-poste-linkedin', label: 'Le changement de poste comme signal' },
                { href: '/ressources/signal-levee-de-fonds-linkedin', label: 'La levée de fonds comme signal' },
                { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet' },
                { href: '/ressources/message-linkedin-b2b', label: 'Messages LinkedIn B2B qui obtiennent une réponse' },
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
              Détecter, c&apos;est un métier
            </p>
            <h2 className="font-serif text-h2 text-text-primary mb-4">
              On surveille les signaux pour vous
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
              Recrutements, changements de poste, levées de fonds, engagement sur vos posts.
              Un setter dédié surveille, écrit et qualifie. Vous recevez les rendez-vous.
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
              { href: '/ressources/liste-prospection-linkedin-b2b', title: 'Liste de prospection LinkedIn B2B', readTime: '12 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
