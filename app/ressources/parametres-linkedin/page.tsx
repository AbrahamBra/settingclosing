import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'
import { CtaArticle } from '@/components/CtaArticle'
import { RelatedArticles } from '@/components/RelatedArticles'
import { TldrBox } from '@/components/TldrBox'

export const metadata: Metadata = {
  title: "Paramètres LinkedIn : le guide complet (2026)",
  description:
    "Où trouver les paramètres LinkedIn et comment les régler : compte, sécurité, visibilité, confidentialité, publicité, notifications. Plus les 7 réglages à changer quand vous prospectez.",
  openGraph: {
    title: "Paramètres LinkedIn : le guide complet (2026)",
    description:
      "Les 6 sections des paramètres LinkedIn expliquées une par une, et les 7 réglages à changer quand vous prospectez en B2B.",
    locale: 'fr_FR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paramètres LinkedIn : le guide complet (2026)',
    description:
      "Les 6 sections des paramètres LinkedIn expliquées une par une, et les 7 réglages à changer quand vous prospectez en B2B.",
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/parametres-linkedin',
    languages: {
      'fr': 'https://www.setting.live/ressources/parametres-linkedin',
      'x-default': 'https://www.setting.live/ressources/parametres-linkedin',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/parametres-linkedin#article',
  headline: 'Paramètres LinkedIn : le guide complet (2026)',
  description:
    "Guide complet des paramètres LinkedIn : accès, préférences du compte, connexion et sécurité, visibilité, confidentialité des données, données publicitaires, notifications, et les réglages spécifiques à la prospection B2B.",
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
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/parametres-linkedin',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/parametres-linkedin',
  },
  image: 'https://www.setting.live/ressources/parametres-linkedin/opengraph-image',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]', '.tldr', '.faq-answer'],
  },
  articleSection: 'Paramètres LinkedIn',
  wordCount: 3200,
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://www.setting.live/#website',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  about: {
    '@type': 'Thing',
    name: 'Paramètres LinkedIn',
    description:
      "Panneau de configuration du compte LinkedIn, accessible via l’icône Vous puis Préférences et confidentialité. Il regroupe six sections : Préférences du compte, Connexion et sécurité, Visibilité, Confidentialité des données, Données publicitaires et Notifications.",
  },
  mentions: [
    { '@type': 'SoftwareApplication', name: 'LinkedIn', url: 'https://www.linkedin.com' },
    { '@type': 'SoftwareApplication', name: 'LinkedIn Sales Navigator', url: 'https://business.linkedin.com/sales-solutions' },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Accéder aux paramètres LinkedIn',
  description:
    "Comment ouvrir le panneau des paramètres LinkedIn depuis un navigateur ou depuis l’application mobile.",
  totalTime: 'PT1M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Ouvrir le menu Vous',
      text: "Sur la page d’accueil LinkedIn, cliquez sur l’icône Vous (votre photo de profil) en haut à droite de la barre de navigation.",
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Cliquer sur Préférences et confidentialité',
      text: "Dans le menu déroulant, sélectionnez « Préférences et confidentialité » (Settings & Privacy en anglais).",
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Choisir une section',
      text: "Le panneau s’ouvre sur six sections : Préférences du compte, Connexion et sécurité, Visibilité, Confidentialité des données, Données publicitaires et Notifications.",
    },
  ],
}

const faqItems = [
  {
    question: 'Où sont les paramètres sur LinkedIn ?',
    answer:
      "Cliquez sur l’icône Vous en haut à droite de la page d’accueil LinkedIn, puis sur « Préférences et confidentialité ». Sur mobile, appuyez sur votre photo de profil puis sur Paramètres. Le panneau est organisé en six sections : Préférences du compte, Connexion et sécurité, Visibilité, Confidentialité des données, Données publicitaires et Notifications.",
  },
  {
    question: 'Comment voir un profil LinkedIn sans être vu ?',
    answer:
      "Allez dans Paramètres puis Visibilité, puis « Options de visualisation du profil », et choisissez le mode navigation privée. Attention : en mode privé, vous ne voyez plus non plus qui a consulté votre propre profil. Si vous prospectez, laissez ce réglage désactivé : vos visites de profil sont un signal utile.",
  },
  {
    question: 'Comment empêcher LinkedIn de prévenir mon réseau quand je modifie mon profil ?',
    answer:
      "Dans Paramètres puis Visibilité, désactivez « Partager les modifications de votre profil ». Vos changements de poste, ajouts de compétences et anniversaires professionnels ne génèreront plus de notification auprès de vos relations.",
  },
  {
    question: 'Comment cacher mon profil LinkedIn des moteurs de recherche ?',
    answer:
      "Dans Visibilité, ouvrez « Modifier votre profil public » et désactivez la visibilité du profil public. Votre profil ne sera plus indexable par Google. En prospection B2B, faites l’inverse : gardez-le public, c’est souvent le premier point de contact d’un prospect qui vous cherche.",
  },
  {
    question: 'Comment chercher un emploi sans que mon employeur le sache ?',
    answer:
      "Dans Confidentialité des données, activez « Signaler votre intérêt » pour les recruteurs. LinkedIn masque alors le signal aux recruteurs identifiés comme appartenant à votre entreprise actuelle. La protection n’est pas absolue : désactivez aussi le partage des modifications de profil.",
  },
  {
    question: 'Comment activer la validation en deux étapes sur LinkedIn ?',
    answer:
      "Dans Connexion et sécurité, ouvrez « Validation en deux étapes » et activez-la. Préférez une application d’authentification au SMS. C’est le réglage le plus important de cette section : un compte LinkedIn piraté sert immédiatement à spammer votre réseau.",
  },
  {
    question: 'Qui peut voir ma liste de relations LinkedIn ?',
    answer:
      "Par défaut, vos relations de 1er niveau peuvent voir et télécharger votre liste. Dans Visibilité, « Qui peut voir ou télécharger votre liste de relations » permet de la restreindre à vous seul. Utile si votre réseau constitue un actif commercial.",
  },
  {
    question: 'Quels paramètres LinkedIn régler pour prospecter ?',
    answer:
      "Sept réglages comptent : désactiver le mode navigation privée, garder le profil public visible, activer le mode créateur, activer Profil ouvert si vous êtes Premium, ouvrir les invitations, couper le partage des modifications pendant une refonte de profil, et restreindre la visibilité de votre liste de relations.",
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
      name: 'Paramètres LinkedIn',
      item: 'https://www.setting.live/ressources/parametres-linkedin',
    },
  ],
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const tocItems = [
  { id: 'acces', label: 'Où sont les paramètres LinkedIn ?' },
  { id: 'compte', label: 'Préférences du compte' },
  { id: 'securite', label: 'Connexion et sécurité' },
  { id: 'visibilite', label: 'Visibilité : qui voit quoi' },
  { id: 'donnees', label: 'Confidentialité des données' },
  { id: 'publicite', label: 'Données publicitaires' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'prospection', label: 'Les 7 paramètres à régler quand vous prospectez' },
  { id: 'faq', label: 'Questions fréquentes' },
]

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections = [
  {
    n: '01',
    name: 'Préférences du compte',
    what: "Informations de base, abonnements, langue, préférences de réseau.",
  },
  {
    n: '02',
    name: 'Connexion et sécurité',
    what: "Mot de passe, validation en deux étapes, appareils et sessions.",
  },
  {
    n: '03',
    name: 'Visibilité',
    what: "Qui voit votre profil, votre activité et vos relations.",
  },
  {
    n: '04',
    name: 'Confidentialité des données',
    what: "Usage de vos données, recherche d’emploi, qui peut vous contacter.",
  },
  {
    n: '05',
    name: 'Données publicitaires',
    what: "Les informations utilisées pour vous cibler.",
  },
  {
    n: '06',
    name: 'Notifications',
    what: "Types et fréquence de ce que LinkedIn vous envoie.",
  },
]

const prospectionSettings = [
  {
    n: 1,
    label: 'Mode navigation privée',
    where: 'Visibilité › Options de visualisation du profil',
    value: 'Désactivé',
    why: "Vos visites deviennent visibles. C’est une prise de contact sans message. Une visite en retour est un signal d’achat fiable. En navigation privée, vous perdez aussi la liste de vos propres visiteurs.",
  },
  {
    n: 2,
    label: 'Visibilité du profil public',
    where: 'Visibilité › Modifier votre profil public',
    value: 'Public, indexation activée',
    why: "Un prospect qui entend parler de vous vous cherche sur Google avant de répondre. Si votre profil n’est pas indexable, ce parcours s’arrête là.",
  },
  {
    n: 3,
    label: 'Mode créateur',
    where: 'Visibilité › Mode créateur',
    value: 'Activé',
    why: "Le bouton principal passe de « Se connecter » à « Suivre ». Vos posts récents remontent en haut du profil. Utile si vous publiez : vos posts génèrent les signaux inbound.",
  },
  {
    n: 4,
    label: 'Profil ouvert',
    where: 'Préférences du compte › Abonnement (Premium)',
    value: 'Activé',
    why: "N’importe qui peut vous écrire sans être en relation et sans consommer d’InMail. Réservé aux comptes Premium. Une barrière en moins pour les prospects entrants.",
  },
  {
    n: 5,
    label: 'Invitations',
    where: 'Confidentialité des données › Qui peut vous envoyer des invitations',
    value: 'Tout le monde',
    why: "Restreindre les invitations coupe votre flux entrant. Filtrez à l’acceptation, pas à l’envoi.",
  },
  {
    n: 6,
    label: 'Partager les modifications de votre profil',
    where: 'Visibilité › Partager les modifications de votre profil',
    value: 'Désactivé pendant une refonte',
    why: "Le temps de retravailler votre profil, votre réseau n’a pas besoin de quinze notifications. Réactivez après. Un changement de poste annoncé reste un signal fort, chez vous comme chez vos prospects.",
  },
  {
    n: 7,
    label: 'Visibilité de la liste de relations',
    where: 'Visibilité › Qui peut voir ou télécharger votre liste de relations',
    value: 'Vous uniquement',
    why: "Votre réseau est un actif commercial. Le laisser téléchargeable revient à offrir votre liste de prospection à vos concurrents.",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ParametresLinkedInPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema, howToSchema]),
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
              <li className="text-text-primary">Param&egrave;tres LinkedIn</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide pratique
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Param&egrave;tres LinkedIn : le guide complet
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Les param&egrave;tres LinkedIn tiennent dans six sections, accessibles
              en deux clics. Ce guide les passe en revue une par une. Ce qui vaut
              la peine d&apos;&ecirc;tre chang&eacute;, ce qu&apos;il faut laisser
              tranquille. Puis les sept r&eacute;glages &agrave; revoir si vous vous
              servez de LinkedIn pour prospecter.
            </p>
            <AuthorBlock date="2026-09-02" readTime="12 min de lecture" dateLabel="2 septembre 2026" />
          </header>

          {/* TL;DR */}
          <TldrBox>
            <p data-speakable="true">
              Les <strong className="text-text-primary">param&egrave;tres LinkedIn</strong> s&apos;ouvrent
              en cliquant sur l&apos;ic&ocirc;ne <em>Vous</em>, puis sur
              <em> Pr&eacute;f&eacute;rences et confidentialit&eacute;</em>. Six sections :
              Pr&eacute;f&eacute;rences du compte, Connexion et s&eacute;curit&eacute;,
              Visibilit&eacute;, Confidentialit&eacute; des donn&eacute;es, Donn&eacute;es
              publicitaires, Notifications. Trois r&eacute;glages comptent plus que les autres :
              la validation en deux &eacute;tapes, le mode navigation priv&eacute;e et le partage
              des modifications de profil. Si vous prospectez en B2B, sept r&eacute;glages
              suppl&eacute;mentaires sont &agrave; revoir. Ils sont d&eacute;taill&eacute;s
              en fin de guide.
            </p>
          </TldrBox>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: '6', label: 'sections dans les paramètres LinkedIn' },
              { stat: '2', label: 'clics pour y accéder depuis l’accueil' },
              { stat: '7', label: 'réglages à changer si vous prospectez' },
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
              {tocItems.map(({ id, label }, i) => (
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

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 1 — Accès */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="acces" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                O&ugrave; sont les param&egrave;tres LinkedIn&nbsp;?
              </h2>
              <p className="mb-4" data-speakable="true">
                Sur ordinateur, cliquez sur l&apos;ic&ocirc;ne <strong className="text-text-primary">Vous</strong> en
                haut &agrave; droite. C&apos;est votre photo de profil, dans la barre
                de navigation. Puis <strong className="text-text-primary">Pr&eacute;f&eacute;rences
                et confidentialit&eacute;</strong>. Sur mobile : photo de profil,
                puis <em>Param&egrave;tres</em>. Deux clics dans les deux cas.
              </p>
              <p className="mb-4">
                Le panneau s&apos;ouvre sur un menu de gauche &agrave; six entr&eacute;es.
                LinkedIn d&eacute;place r&eacute;guli&egrave;rement des r&eacute;glages
                d&apos;une section &agrave; l&apos;autre. Si une option n&apos;est pas
                l&agrave; o&ugrave; ce guide l&apos;indique, cherchez-la dans la barre
                de recherche en haut du panneau.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Les six sections en un coup d&apos;&oelig;il
                </p>
                <div className="space-y-4">
                  {sections.map(({ n, name, what }) => (
                    <div key={n} className="flex gap-3 items-baseline">
                      <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-5 text-right">
                        {n}
                      </span>
                      <p className="text-sm">
                        <strong className="text-text-primary">{name}</strong> &middot; {what}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-4">
                LinkedIn renomme ses libell&eacute;s plusieurs fois par an. Le d&eacute;ploiement
                est progressif : deux comptes peuvent afficher des noms diff&eacute;rents
                le m&ecirc;me jour. Les libell&eacute;s cit&eacute;s ici sont ceux de
                l&apos;interface fran&ccedil;aise en septembre 2026.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 2 — Préférences du compte */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="compte" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pr&eacute;f&eacute;rences du compte
              </h2>
              <p className="mb-4" data-speakable="true">
                La section administrative. Adresses e-mail, t&eacute;l&eacute;phone,
                langue de l&apos;interface, abonnement Premium, fusion ou fermeture
                de compte. Rien de strat&eacute;gique. Deux points m&eacute;ritent
                quand m&ecirc;me une v&eacute;rification.
              </p>
              <p className="mb-4">
                <strong className="text-text-primary">Les adresses e-mail secondaires.</strong>{' '}
                LinkedIn permet d&apos;en associer plusieurs. C&apos;est ce qui sauve
                un compte quand l&apos;adresse principale devient inaccessible.
                Le cas classique : une adresse professionnelle apr&egrave;s un changement
                d&apos;entreprise. Ajoutez-en une personnelle. Une fois suffit.
              </p>
              <p className="mb-4">
                <strong className="text-text-primary">La langue de l&apos;interface.</strong>{' '}
                Elle est distincte de celle du profil. Vous lisez LinkedIn en fran&ccedil;ais,
                un visiteur &eacute;tranger voit votre profil en anglais. C&apos;est
                la fonction profil multilingue.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 3 — Sécurité */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="securite" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Connexion et s&eacute;curit&eacute;
              </h2>
              <p className="mb-4" data-speakable="true">
                Mot de passe, validation en deux &eacute;tapes, appareils connect&eacute;s,
                sessions actives, alertes de connexion. Un seul r&eacute;glage compte
                vraiment. La validation en deux &eacute;tapes. Activez-la par application
                d&apos;authentification, pas par SMS.
              </p>
              <p className="mb-4">
                Un compte LinkedIn pirat&eacute; ne sert pas &agrave; voler des
                donn&eacute;es. Il sert &agrave; &eacute;crire &agrave; votre r&eacute;seau
                sous votre nom. Le co&ucirc;t n&apos;est pas technique. Il tombe sur
                les relations que vous avez mis des ann&eacute;es &agrave; construire.
              </p>
              <p className="mb-4">
                Ouvrez aussi <em>Appareils qui se souviennent de votre mot de passe</em>,
                puis <em>Sessions actives</em>. Un appareil que vous ne reconnaissez pas&nbsp;?
                D&eacute;connectez-le. Changez le mot de passe dans la foul&eacute;e.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 4 — Visibilité */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="visibilite" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Visibilit&eacute; : qui voit quoi
              </h2>
              <p className="mb-4" data-speakable="true">
                La section la plus importante. C&apos;est aussi celle o&ugrave; les
                r&eacute;glages par d&eacute;faut conviennent le moins. Elle contr&ocirc;le
                qui voit votre profil, qui voit votre activit&eacute;, et ce que LinkedIn
                annonce en votre nom.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Mode navigation priv&eacute;e
              </h3>
              <p className="mb-4">
                Sous <em>Options de visualisation du profil</em>, trois choix. Votre nom
                et votre titre. Des caract&eacute;ristiques anonymes. Ou rien du tout.
                Le compromis est rarement expliqu&eacute; : en mode priv&eacute;, vous perdez
                aussi la liste des personnes qui ont consult&eacute; votre profil.
                L&apos;anonymat marche dans les deux sens.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Visibilit&eacute; du profil public
              </h3>
              <p className="mb-4">
                Sous <em>Modifier votre profil public</em>, vous d&eacute;cidez de deux choses.
                Si votre profil appara&icirc;t dans les moteurs de recherche. Et ce
                qu&apos;un visiteur non connect&eacute; peut en voir, section par section.
                Coupez la visibilit&eacute; et votre profil dispara&icirc;t de Google.
                Utile pour se faire discret. Co&ucirc;teux dans tous les autres cas.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Partager les modifications de votre profil
              </h3>
              <p className="mb-4">
                Ce r&eacute;glage d&eacute;cide si LinkedIn pr&eacute;vient votre r&eacute;seau
                quand vous modifiez votre profil, changez de poste ou f&ecirc;tez un
                anniversaire professionnel. Coupez-le avant de retravailler votre profil
                en profondeur. R&eacute;activez-le apr&egrave;s. Sinon votre r&eacute;seau
                re&ccedil;oit quinze notifications &laquo;&nbsp;a mis &agrave; jour son
                profil&nbsp;&raquo; dans l&apos;apr&egrave;s-midi.
              </p>

              <h3 className="font-sans font-semibold text-text-primary mb-2 mt-6">
                Qui peut voir votre liste de relations
              </h3>
              <p className="mb-4">
                Par d&eacute;faut, vos relations de 1<sup>er</sup> niveau peuvent consulter
                et exporter votre liste. Vous pouvez la r&eacute;server &agrave; vous seul.
                Si votre r&eacute;seau est votre outil de travail, changez ce r&eacute;glage.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 5 — Données */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="donnees" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Confidentialit&eacute; des donn&eacute;es
              </h2>
              <p className="mb-4" data-speakable="true">
                L&apos;usage que LinkedIn fait de vos donn&eacute;es, qui peut vous contacter,
                vos pr&eacute;f&eacute;rences de recherche d&apos;emploi. C&apos;est aussi
                d&apos;ici que vous demandez une copie compl&egrave;te de vos donn&eacute;es.
                LinkedIn met quelques heures &agrave; pr&eacute;parer l&apos;export.
              </p>
              <p className="mb-4">
                <strong className="text-text-primary">Signaler votre int&eacute;r&ecirc;t
                aux recruteurs.</strong> Vous indiquez que vous &ecirc;tes ouvert aux
                opportunit&eacute;s. LinkedIn masque le signal aux recruteurs de votre
                entreprise actuelle. La protection repose sur une identification automatique.
                Elle n&apos;est pas infaillible. Si la discr&eacute;tion compte, coupez
                aussi le partage des modifications de profil.
              </p>
              <p className="mb-4">
                <strong className="text-text-primary">Qui peut vous envoyer des invitations.</strong>{' '}
                Par d&eacute;faut, tout le monde passe. Restreindre aux personnes qui
                connaissent votre e-mail r&eacute;duit le bruit. &Ccedil;a coupe aussi
                les prises de contact l&eacute;gitimes.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 6 — Publicité */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="publicite" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Donn&eacute;es publicitaires
              </h2>
              <p className="mb-4" data-speakable="true">
                Les informations que LinkedIn utilise pour vous cibler. Donn&eacute;es
                de profil, connexions, interactions avec les pages entreprise, audiences
                fournies par des annonceurs tiers. D&eacute;sactiver ces options ne supprime
                pas les publicit&eacute;s. Elles deviennent moins pertinentes, c&apos;est tout.
              </p>
              <p className="mb-4">
                Si vous faites de l&apos;acquisition, lisez cette section autrement.
                Ce que vous coupez ici pour vous-m&ecirc;me, vos concurrents l&apos;utilisent
                pour vous atteindre. C&apos;est la liste des crit&egrave;res de ciblage
                disponibles sur LinkedIn Ads, vue de l&apos;autre c&ocirc;t&eacute;.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 7 — Notifications */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="notifications" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Notifications
              </h2>
              <p className="mb-4" data-speakable="true">
                Types et fr&eacute;quence de ce que LinkedIn vous envoie. Messages,
                invitations, alertes emploi, r&eacute;actions &agrave; vos publications,
                e-mails de r&eacute;capitulatif, notifications push. Tout est
                d&eacute;sactivable individuellement.
              </p>
              <p className="mb-4">
                Si vous publiez, gardez les notifications de r&eacute;actions et de
                commentaires. Coupez le reste. Quelqu&apos;un qui commente un post sur
                votre sujet vient de vous dire qu&apos;il s&apos;y int&eacute;resse.
                C&apos;est un{' '}
                <a href="/ressources/signal-achat-linkedin" className="text-accent hover:underline transition-colors">signal
                d&apos;achat</a>.
              </p>
            </section>

            {/* ──────────────────────────────────────────────────── */}
            {/* Section 8 — Prospection */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="prospection" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 7 param&egrave;tres &agrave; r&eacute;gler quand vous prospectez
              </h2>
              <p className="mb-4" data-speakable="true">
                Les r&eacute;glages par d&eacute;faut visent un utilisateur passif qui
                prot&egrave;ge sa vie priv&eacute;e. Si LinkedIn est votre canal commercial,
                plusieurs jouent contre vous. Voici les sept qui comptent.
              </p>

              <div className="space-y-4 my-6">
                {prospectionSettings.map(({ n, label, where, value, why }) => (
                  <div key={n} className="bg-bg-secondary rounded-xl p-6 border border-white/[0.06]">
                    <div className="flex gap-3 items-baseline mb-2">
                      <span className="font-sans text-accent text-xs tabular-nums shrink-0">
                        {String(n).padStart(2, '0')}
                      </span>
                      <p className="font-sans font-semibold text-text-primary text-sm">
                        {label}
                      </p>
                    </div>
                    <p className="font-sans text-xs text-text-secondary/70 mb-3 pl-8">
                      {where} &middot; <span className="text-accent">{value}</span>
                    </p>
                    <p className="font-sans text-sm leading-relaxed pl-8">{why}</p>
                  </div>
                ))}
              </div>

              <p className="mb-4">
                Ces sept r&eacute;glages ne remplacent pas une m&eacute;thode. Ils
                enl&egrave;vent les freins. Profil visible, visites qui laissent une trace,
                invitations qui passent. Ce que vous en faites ensuite, c&apos;est le{' '}
                <a href="/ressources/setting-linkedin" className="text-accent hover:underline transition-colors">setting
                LinkedIn</a>. D&eacute;tecter le signal, &eacute;crire au bon moment.
                C&apos;est un autre sujet, document&eacute; dans notre guide de r&eacute;f&eacute;rence.
              </p>

              <div className="bg-bg-secondary rounded-xl p-6 my-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  L&apos;erreur la plus fr&eacute;quente
                </p>
                <p className="font-sans text-sm leading-relaxed">
                  Activer le mode navigation priv&eacute;e &laquo;&nbsp;pour ne pas se faire
                  rep&eacute;rer&nbsp;&raquo; pendant une phase de prospection. C&apos;est
                  l&apos;inverse de ce qu&apos;il faut faire. Une visite de profil visible
                  est gratuite et non intrusive. Elle d&eacute;clenche souvent une visite
                  en retour. En mode priv&eacute;, vous vous privez du signal le moins cher
                  de LinkedIn.
                </p>
              </div>
            </section>

            <CtaArticle variant="setting" />

            {/* ──────────────────────────────────────────────────── */}
            {/* FAQ */}
            {/* ──────────────────────────────────────────────────── */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-8">
                Questions fr&eacute;quentes sur les param&egrave;tres LinkedIn
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
            <section className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Pour aller plus loin
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { href: '/ressources/setter-b2b', label: "Setter B2B : le métier, le salaire et l’évolution" },
                  { href: '/ressources/setting-definition', label: "Le setting, c'est quoi ? Définition complète" },
                  { href: '/ressources/setting-linkedin', label: 'Setting LinkedIn : le guide complet' },
                  { href: '/ressources/signal-achat-linkedin', label: 'Signaux d’achat LinkedIn' },
                  { href: '/ressources/comment-prospecter-sur-linkedin', label: 'Comment prospecter sur LinkedIn' },
                  { href: '/ressources/message-linkedin-b2b', label: 'Messages LinkedIn B2B qui obtiennent une réponse' },
                  { href: '/ressources/inbound-setting-linkedin', label: 'Inbound setting LinkedIn' },
                  { href: '/methode/setting-linkedin', label: 'Notre méthode en 9 étapes' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="bg-bg-secondary rounded-xl px-5 py-4 border border-white/[0.06] hover:border-accent/30 transition-colors group"
                  >
                    <p className="font-sans text-sm text-text-primary group-hover:text-accent transition-colors">
                      {label}
                    </p>
                    <span className="font-sans text-xs text-text-secondary">&rarr; Lire le guide</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-bg-secondary rounded-2xl p-8 md:p-10 text-center border border-white/[0.06]">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Vos param&egrave;tres sont r&eacute;gl&eacute;s. Et maintenant&nbsp;?
              </p>
              <h2 className="font-serif text-h2 text-text-primary mb-4">
                On s&apos;occupe de la prospection
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed mb-6 max-w-xl mx-auto">
                D&eacute;tection des signaux, r&eacute;daction des messages, qualification.
                Un setter d&eacute;di&eacute; s&apos;en charge et livre les RDV dans votre
                agenda. Chaque message est relu par un humain.
              </p>
              <ButtonGlow href="/tarifs">
                Voir nos tarifs
              </ButtonGlow>
            </section>

          </article>

          {/* Related articles */}
          <div className="mt-16">
            <RelatedArticles articles={[
              { href: '/ressources/setting-linkedin', title: 'Setting LinkedIn : la méthode et des exemples concrets', readTime: '25 min' },
              { href: '/ressources/signal-achat-linkedin', title: 'Signaux d’achat LinkedIn : les repérer et les exploiter', readTime: '14 min' },
              { href: '/ressources/comment-prospecter-sur-linkedin', title: 'Comment prospecter sur LinkedIn en 2026', readTime: '18 min' },
            ]} />
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
