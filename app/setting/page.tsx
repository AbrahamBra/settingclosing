import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Setting : le guide complet du setting commercial B2B | Setting',
  description:
    "Le setting est la phase de prospection B2B qui transforme un inconnu en rendez-vous qualifié. Définition, méthode, outils, coût, scripts et comparatif setting vs closing.",
  openGraph: {
    title: 'Setting : le guide complet du setting commercial B2B',
    description:
      "Tout sur le setting : définition, méthode LinkedIn signal-based, outils, scripts, coût réel et programme complet. Le guide de référence pour les fondateurs B2B.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/setting',
    languages: {
      'fr': 'https://www.setting.live/setting',
      'x-default': 'https://www.setting.live/setting',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/setting',
  headline: 'Setting : le guide complet du setting commercial B2B en 2026',
  description:
    "Le setting est la phase de prospection B2B qui transforme un prospect inconnu en rendez-vous qualifié. Définition exacte, méthode, outils, scripts, coût réel, setting vs closing, et programme complet.",
  author: {
    '@type': 'Person',
    name: 'Abraham',
    url: 'https://www.setting.live/a-propos',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Setting',
    url: 'https://www.setting.live',
  },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/setting',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/setting',
  },
  about: [
    { '@type': 'Thing', name: 'Setting commercial' },
    { '@type': 'Thing', name: 'Prospection B2B' },
    { '@type': 'Thing', name: 'Setting LinkedIn' },
    { '@type': 'Thing', name: 'Setter B2B' },
  ],
}

const faqItems = [
  {
    question: "Qu'est-ce que le setting ?",
    answer:
      "Le setting est la phase de prospection commerciale B2B qui consiste a identifier des prospects qualifies, initier le contact, gerer la conversation et decrocher un rendez-vous qualifie. Le setter ne vend pas : il ouvre la porte au closer qui convertit le lead en client. Le setting se deploie principalement sur LinkedIn via une approche basee sur les signaux d'achat.",
  },
  {
    question: 'Quelle est la difference entre setting et closing ?',
    answer:
      "Le setting genere les rendez-vous qualifies (prospection, qualification, prise de RDV). Le closing convertit ces RDV en clients signes (discovery call, presentation, gestion des objections, signature). Separer les deux roles permet d'optimiser chaque etape : le setter excelle a l'ecrit et dans l'analyse de profils, le closer excelle a l'oral et dans la negociation.",
  },
  {
    question: "C'est quoi un setter en B2B ?",
    answer:
      "Un setter B2B est un commercial specialise dans la prospection sortante. Son role : identifier des prospects pertinents sur LinkedIn ou par email, qualifier leur interet pour l'offre, et decrocher un rendez-vous avec le closer ou le fondateur. Le setter ne vend pas et ne negocie pas. Il prend en charge tout ce qui precede l'appel de vente.",
  },
  {
    question: 'Combien coute un setter B2B ?',
    answer:
      "Un setter B2B externalise coute entre 500 et 1 500 euros par mois selon la formule. Un SDR interne revient a 45 000 - 70 000 euros par an charges comprises. Le modele hybride (fixe + prime par RDV) aligne les interets : chez Setting, c'est 490 euros de setup + 790 euros par mois avec une prime de 50 a 250 euros par RDV selon le ticket moyen.",
  },
  {
    question: 'Le setting LinkedIn fonctionne-t-il pour les solopreneurs ?',
    answer:
      "Oui, a condition d'utiliser une approche signal-based. Le setting generique (messages en masse) a un taux de reponse inferieur a 3%. Le setting sur signal (contacter des prospects qui ont reagi a un contenu lie a votre offre) depasse 20% de taux de reponse. La methode fait la difference, pas la plateforme.",
  },
  {
    question: 'Combien de RDV peut-on esperer avec le setting ?',
    answer:
      "En regime de croisiere (apres 6 a 8 semaines de calibration), un programme de setting B2B genere 2 a 4 RDV qualifies par semaine. Les premiers RDV arrivent des la semaine 1. Le volume depend du secteur, de la qualite de l'ICP et de la densite des signaux disponibles sur LinkedIn.",
  },
  {
    question: 'Faut-il automatiser le setting ou garder un setter humain ?',
    answer:
      "L'automatisation complete du setting produit des taux de reponse proches de zero : les prospects detectent les messages automatiques. L'approche qui fonctionne est hybride : l'IA detecte les signaux et propose des drafts, l'humain valide chaque message avant envoi. Aucun message ne part sans validation humaine.",
  },
  {
    question: 'Setting interne ou externalise : lequel choisir ?',
    answer:
      "Externaliser coute 6 000 a 24 000 euros la premiere annee contre 50 000 a 75 000 euros pour un SDR interne (recrutement + salaire + outils + formation). L'externalisation est recommandee quand on veut demarrer vite (2-3 semaines vs 3-6 mois), tester un canal sans engagement, ou quand le volume ne justifie pas un poste a temps plein.",
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
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Setting',
      item: 'https://www.setting.live/setting',
    },
  ],
}

// ─── Cluster data ─────────────────────────────────────────────────────────────

const clusterSetting = [
  { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : definition, methode et programme complet' },
  { href: '/ressources/setter-b2b-definition', label: "C'est quoi un setter en B2B ?" },
  { href: '/ressources/comment-devenir-setter-b2b', label: 'Comment devenir setter B2B en 2026' },
  { href: '/ressources/cout-setter-b2b-prix', label: "Cout d'un setter B2B : les vrais chiffres" },
  { href: '/ressources/sdr-interne-vs-externalise', label: 'SDR interne vs externalise : le comparatif cout reel' },
  { href: '/ressources/difference-setting-closing', label: 'Quelle est la difference entre setting et closing ?' },
]

const clusterLinkedin = [
  { href: '/ressources/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B : methode complete en 2026' },
  { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn : exemples et cadre complet' },
  { href: '/ressources/messages-linkedin-sans-reponse', label: "Pourquoi vos messages LinkedIn n'obtiennent pas de reponses" },
  { href: '/ressources/relance-linkedin-b2b', label: 'Relance LinkedIn B2B : quand et comment relancer' },
  { href: '/ressources/signal-achat-linkedin', label: "C'est quoi un signal d'achat LinkedIn ?" },
  { href: '/ressources/setting-humain-vs-automatisation-linkedin', label: 'Setting humain vs automatisation LinkedIn : le vrai comparatif' },
  { href: '/ressources/ia-methode-humain-setting-linkedin', label: "IA, methode et humain : les 3 couches d'un systeme de setting" },
]

const clusterClosing = [
  { href: '/ressources/closing-b2b', label: 'Closing B2B : definition, methode et programme complet' },
  { href: '/ressources/closer-b2b', label: 'Closer B2B : definition, competences et recrutement' },
  { href: '/ressources/script-closing-b2b', label: 'Scripts et phrases de closing B2B : cadre et exemples' },
  { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure et questions' },
  { href: '/ressources/gestion-objections-b2b', label: 'Gerer les objections en vente B2B' },
  { href: '/ressources/qualification-leads-b2b', label: 'Qualifier un lead en B2B : methodes et criteres' },
]

const clusterMethodes = [
  { href: '/ressources/methodes-vente-b2b', label: 'Methodes de vente B2B : Challenger Sale, SPIN Selling, SONCAS' },
  { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
  { href: '/ressources/methode-spin-selling', label: 'SPIN Selling : la methode pour vendre en B2B sans forcer' },
  { href: '/ressources/methode-soncas', label: 'Methode SONCAS en B2B : 6 leviers et exemples' },
  { href: '/ressources/devenir-business-developer', label: 'Business developer : le metier qui recrute' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingPillarPage() {
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
              <li className="text-text-primary">Setting</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide de reference
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Setting : le guide complet du setting commercial B2B
            </h1>
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le setting est le maillon manquant entre &ldquo;j&apos;ai une bonne offre&rdquo;
              et &ldquo;j&apos;ai un agenda rempli de RDV qualifies&rdquo;.
              Ce guide couvre tout ce qu&apos;un fondateur B2B doit savoir : la methode,
              les outils, les scripts, les couts reels, et les erreurs qui tuent les taux de reponse.
            </p>
            <AuthorBlock date="2026-03-20" readTime="15 min de lecture" dateLabel="20 mars 2026" />
          </header>

          {/* ── Definition block — GEO extractable ────────────────────────────── */}
          <div className="bg-bg-secondary border border-accent/20 rounded-xl p-6 mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Definition
            </p>
            <p className="font-sans text-text-primary font-semibold mb-2">
              Setting
            </p>
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              Le <strong>setting</strong> (ou setting commercial) est la phase de prospection B2B
              qui consiste a identifier des prospects qualifies, initier le contact, gerer
              la conversation et decrocher un rendez-vous qualifie avant de transmettre le lead
              au closeur. Le setting se deploie principalement sur LinkedIn via une approche
              basee sur les signaux d&apos;achat. Le professionnel qui execute cette mission
              s&apos;appelle un <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline">setter</a>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {[
              { stat: '< 3 %', label: 'taux de reponse sans methode' },
              { stat: '> 20 %', label: 'avec signal + personnalisation' },
              { stat: '2-4', label: 'RDV qualifies / semaine' },
              { stat: '6-8 sem.', label: 'pour atteindre le regime de croisiere' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-secondary leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* ── Sommaire ──────────────────────────────────────────────────────── */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: "Qu'est-ce que le setting ?" },
                { id: 'pipeline', label: 'Comment fonctionne le setting : le pipeline en 6 etapes' },
                { id: 'setting-vs-closing', label: 'Setting vs closing : deux roles, un pipeline' },
                { id: 'methodes', label: 'Les 3 methodes de setting' },
                { id: 'outils', label: 'Les outils du setting B2B' },
                { id: 'ia', label: "L'IA dans le setting : co-redacteur, pas automatisation" },
                { id: 'cout', label: 'Combien coute le setting ?' },
                { id: 'erreurs', label: 'Les 5 erreurs qui tuent le setting' },
                { id: 'programme', label: 'Le programme de setting en 3 phases' },
                { id: 'scripts', label: 'Scripts et exemples de messages' },
                { id: 'cluster', label: 'Toutes les ressources sur le setting' },
                { id: 'faq', label: 'Questions frequentes' },
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

          {/* ── Article body ───────────────────────────────────────────────────── */}
          <article className="font-sans text-text-secondary leading-relaxed space-y-14">

            {/* Section 1 — Definition */}
            <section id="definition" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Qu&apos;est-ce que le setting ?
              </h2>
              <p className="mb-4">
                Le setting est l&apos;ensemble des actions qui transforment un prospect inconnu
                en rendez-vous qualifie pret pour un appel de vente. Ce n&apos;est pas de la
                prospection en masse. Ce n&apos;est pas de l&apos;automatisation. C&apos;est un
                processus structure, conduit par un etre humain, avec l&apos;IA comme outil
                de co-redaction.
              </p>
              <p className="mb-4">
                Le terme vient de l&apos;anglais &ldquo;to set an appointment&rdquo; &mdash;
                poser un rendez-vous. En B2B francophone, on parle de <strong>setting commercial</strong>{' '}
                ou de <strong>setting LinkedIn</strong> quand le canal principal est LinkedIn.
                Le professionnel qui execute le setting s&apos;appelle un{' '}
                <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline">setter</a>{' '}
                (ou SDR, Sales Development Representative).
              </p>
              <p>
                La majorite des fondateurs B2B melangent setting et{' '}
                <a href="/ressources/closing-b2b" className="text-accent hover:underline">closing</a>{' '}
                dans la meme action. Le premier message est trop long, trop commercial, trop tot.
                Le prospect disparait avant d&apos;avoir entendu la vraie valeur de l&apos;offre.
                Ce n&apos;est pas un probleme d&apos;offre &mdash; c&apos;est un probleme de sequence.
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 mt-6 border border-white/[0.06]">
                <div className="w-6 h-0.5 bg-accent mb-3 rounded-full" />
                <p className="font-sans font-semibold text-text-primary mb-1">
                  Le setting ne se resume pas a &ldquo;envoyer des messages LinkedIn&rdquo;.
                </p>
                <p className="font-sans text-text-secondary text-sm">
                  C&apos;est un pipeline complet &mdash; detection des signaux, analyse des profils,
                  redaction personnalisee, gestion des conversations, qualification et handover au closer.
                  Le{' '}
                  <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline">guide complet du setting commercial</a>{' '}
                  detaille chaque etape semaine par semaine.
                </p>
              </div>
            </section>

            {/* Section 2 — Pipeline */}
            <section id="pipeline" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Comment fonctionne le setting : le pipeline en 6 etapes
              </h2>
              <p className="mb-6">
                Le setting suit un processus structure. Chaque etape conditionne la suivante.
                Sauter une etape detruit le taux de reponse.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { num: '1', title: 'Detection des signaux', text: "Identifier les prospects qui ont montre un signe d'interet (like, commentaire, visite de profil) ou qui correspondent a l'ICP defini.", link: '/ressources/signal-achat-linkedin', linkLabel: 'Signaux d\'achat LinkedIn' },
                  { num: '2', title: 'Analyse du profil', text: "Lire les posts recents, comprendre le contexte, decider si le contact vaut la peine et avec quel angle. Pas de message sans cette etape." },
                  { num: '3', title: 'Redaction du message', text: "Ancre sur un fait precis tire du profil ou d'un post recent. 5 phrases maximum. Aucun pitch.", link: '/ressources/script-setting-linkedin', linkLabel: 'Scripts de setting LinkedIn' },
                  { num: '4', title: 'Gestion de la conversation', text: "Reponse humaine a chaque echange. Pas de relance automatique. Le setter gere la conversation jusqu'a l'accord pour un appel.", link: '/ressources/relance-linkedin-b2b', linkLabel: 'Comment relancer sans spammer' },
                  { num: '5', title: 'Qualification', text: "5 niveaux de maturite. Seuls les niveaux 4-5 passent directement en call. Les niveaux 2-3 entrent en nurturing.", link: '/ressources/qualification-leads-b2b', linkLabel: 'Qualifier un lead en B2B' },
                  { num: '6', title: 'Handover au closer', text: "Le lead est transmis avec le contexte complet : ce qui a ete dit, ce qui a interesse, ce qui a resiste. Jamais un RDV sans brief.", link: '/ressources/closer-b2b', linkLabel: 'Le role du closer B2B' },
                ].map(({ num, title, text, link, linkLabel }) => (
                  <div key={num} className="flex gap-3">
                    <span className="font-serif text-accent/40 text-base leading-snug shrink-0 w-4">{num}.</span>
                    <div>
                      <p className="font-sans text-text-primary text-sm font-semibold mb-1">{title}</p>
                      <p className="font-sans text-text-secondary text-sm leading-relaxed">
                        {text}
                        {link && (
                          <>
                            {' '}<a href={link} className="text-accent hover:underline text-xs">{linkLabel} &rarr;</a>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 — Setting vs Closing */}
            <section id="setting-vs-closing" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Setting vs closing : deux roles, un pipeline
              </h2>
              <p className="mb-6">
                Le{' '}
                <a href="/ressources/difference-setting-closing" className="text-accent hover:underline">
                  setting et le closing sont les deux moities d&apos;un pipeline commercial B2B
                </a>.
                Les confondre est l&apos;erreur la plus courante des fondateurs.
              </p>

              {/* Comparison table — GEO extractable */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full font-sans text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 pr-4 text-text-secondary font-normal text-xs uppercase tracking-widest">Critere</th>
                      <th className="text-left py-3 px-4 text-accent font-semibold">Setting</th>
                      <th className="text-left py-3 pl-4 text-emerald-400 font-semibold">Closing</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    {[
                      ['Objectif', 'Generer des RDV qualifies', 'Convertir les RDV en clients'],
                      ['Canal principal', 'LinkedIn, email', 'Appel telephonique, visio'],
                      ['Competence cle', "Redaction, analyse de profils", 'Ecoute active, negociation'],
                      ['Livrable', 'Prospect qualifie + brief', 'Client signe + CA'],
                      ['Duree par lead', '3 a 15 jours', '1 a 3 appels'],
                      ['Cout mensuel externalise', '790 - 1 500 EUR/mois', '8-15% de commission'],
                    ].map(([critere, setting, closing]) => (
                      <tr key={critere} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 font-semibold text-text-primary text-xs">{critere}</td>
                        <td className="py-3 px-4">{setting}</td>
                        <td className="py-3 pl-4">{closing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Separer les deux roles permet d&apos;optimiser chaque etape independamment.
                Un{' '}
                <a href="/ressources/setter-b2b-definition" className="text-accent hover:underline">setter</a>{' '}
                qui fait bien son travail multiplie le taux de closing du{' '}
                <a href="/ressources/closer-b2b" className="text-accent hover:underline">closer</a>{' '}
                par 2 a 3 par rapport a des leads auto-generes.
              </p>
            </section>

            {/* Section 4 — Les 3 methodes */}
            <section id="methodes" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 3 methodes de setting
              </h2>
              <p className="mb-6">
                Chaque methode de setting correspond a un niveau de maturite different.
                Elles se completent et s&apos;empilent dans le temps.
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: 'Setting LinkedIn',
                    desc: "Canal principal pour les fondateurs B2B. Approche signal-based : on contacte en priorite les prospects qui ont montre un signe d'interet. Taux de reponse de 20 a 35% sur les profils bien filtres. C'est la methode de base, activee en premier.",
                    href: '/methode/setting-linkedin',
                    accent: 'text-accent',
                    border: 'border-accent/30',
                  },
                  {
                    title: 'Setting telephonique',
                    desc: "Qualification des leads entrants par telephone. Grille BANT co-construite, methode Challenger Sale, scoring pondere et routing par maturite. Active quand le flux de leads entrants justifie une qualification structuree.",
                    href: '/methode/setting-telephonique',
                    accent: 'text-blue-400',
                    border: 'border-blue-400/30',
                  },
                  {
                    title: 'Setup Nurturing',
                    desc: "Scoring comportemental, routing automatique des leads chauds et creation de revenus low ticket sur la base existante. Active en phase 2, quand le flux principal est stabilise. Exploite les 97% de contacts qui ne sont pas prets maintenant.",
                    href: '/methode/nurturing',
                    accent: 'text-emerald-400',
                    border: 'border-emerald-400/30',
                  },
                ].map(({ title, desc, href, accent, border }) => (
                  <a
                    key={title}
                    href={href}
                    className={`block border ${border} rounded-xl p-5 hover:bg-bg-secondary/50 transition-colors group`}
                  >
                    <p className={`font-sans font-semibold ${accent} mb-2 group-hover:translate-x-0.5 transition-transform`}>
                      {title} &rarr;
                    </p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </a>
                ))}
              </div>

              <p className="mt-5 text-sm">
                <a href="/methode" className="text-accent hover:underline">Voir les 3 methodes en detail &rarr;</a>
              </p>
            </section>

            {/* Section 5 — Outils */}
            <section id="outils" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les outils du setting B2B
              </h2>
              <p className="mb-6">
                Quatre outils forment le stack de base du setting LinkedIn.
                Aucun ne remplace l&apos;humain &mdash; ils captent les signaux et accelerent
                la redaction.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { tool: 'Reactin', role: 'Capture les signaux inbound (likes, commentaires sur vos posts)' },
                  { tool: 'Spyer', role: 'Surveille les comptes concurrents et leurs audiences' },
                  { tool: 'Sales Navigator', role: 'Filtre et cible avec precision (100 EUR/mois)' },
                  { tool: 'Claude (skill maison)', role: 'Co-redige les messages depuis le contexte client' },
                ].map(({ tool, role }) => (
                  <div key={tool} className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{tool}</p>
                    <p className="font-sans text-text-secondary text-xs leading-relaxed">{role}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm">
                Le{' '}
                <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline">guide complet du setting commercial</a>{' '}
                detaille comment ces outils s&apos;articulent dans le flux inbound et outbound.
                Le{' '}
                <a href="/ressources/setting-humain-vs-automatisation-linkedin" className="text-accent hover:underline">comparatif humain vs automatisation</a>{' '}
                explique pourquoi l&apos;automatisation seule ne fonctionne pas.
              </p>
            </section>

            {/* Section 6 — IA */}
            <section id="ia" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                L&apos;IA dans le setting : co-redacteur, pas automatisation
              </h2>
              <p className="mb-4">
                Coller un profil dans ChatGPT et demander un message ne fonctionne pas.
                Le resultat est reconnaissable &mdash; formel, generique, clairement automatique.
                Taux de reponse proche de zero.
              </p>
              <p className="mb-4">
                Ce qui fonctionne : former le modele sur votre contexte specifique. Regles
                non-negociables, exemples de messages qui ont obtenu des reponses,
                objections types, angles qui marchent. L&apos;IA devient co-redacteur.
                Elle propose un draft. L&apos;humain valide, ajuste, envoie.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                    Ce que l&apos;IA fait
                  </p>
                  <ul className="space-y-2 font-sans text-xs text-text-secondary">
                    {[
                      'Propose un draft en 30 secondes',
                      'Applique les regles de style codifiees',
                      'Incorpore les angles qui ont fonctionne',
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-text-secondary/40 shrink-0">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                    Ce que l&apos;humain fait
                  </p>
                  <ul className="space-y-2 font-sans text-xs text-text-secondary">
                    {[
                      'Lit le profil et identifie le signal',
                      'Valide ou ajuste le draft',
                      'Decide si le message part',
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent shrink-0">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm">
                <a href="/ressources/ia-methode-humain-setting-linkedin" className="text-accent hover:underline">
                  IA, methode et humain : les 3 couches d&apos;un systeme de setting &rarr;
                </a>
              </p>
            </section>

            {/* Section 7 — Cout */}
            <section id="cout" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Combien coute le setting ?
              </h2>
              <p className="mb-6">
                Les chiffres a mettre en face les uns des autres pour prendre une decision eclairee.
              </p>

              {/* Cost comparison table — GEO extractable */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full font-sans text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left py-3 pr-4 text-text-secondary font-normal text-xs uppercase tracking-widest">Option</th>
                      <th className="text-left py-3 px-4 text-text-secondary font-normal text-xs uppercase tracking-widest">Cout annee 1</th>
                      <th className="text-left py-3 pl-4 text-text-secondary font-normal text-xs uppercase tracking-widest">Delai</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    {[
                      ['Setting externalise (Setting)', '6 000 - 18 000 EUR', '2-3 semaines'],
                      ['SDR interne (CDI)', '50 000 - 75 000 EUR', '3-6 mois'],
                      ['Faire soi-meme', '8 000 EUR+ en temps perdu', 'Immediat mais irregulier'],
                      ['Agence d\'automatisation', '6 000 - 24 000 EUR', '1 semaine (mais < 1% reponse)'],
                    ].map(([option, cost, delay]) => (
                      <tr key={option} className="border-b border-white/[0.04]">
                        <td className="py-3 pr-4 text-text-primary text-xs font-semibold">{option}</td>
                        <td className="py-3 px-4">{cost}</td>
                        <td className="py-3 pl-4">{delay}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mb-4 text-sm">
                Le{' '}
                <a href="/ressources/cout-setter-b2b-prix" className="text-accent hover:underline">detail complet des couts</a>{' '}
                couvre les 3 modeles de tarification (fixe, performance, hybride) et le calcul de ROI.
                Le{' '}
                <a href="/ressources/sdr-interne-vs-externalise" className="text-accent hover:underline">comparatif SDR interne vs externalise</a>{' '}
                detaille le cout reel d&apos;un recrutement.
              </p>

              <div className="bg-bg-secondary rounded-xl px-6 py-5 border border-white/[0.06]">
                <p className="font-sans font-semibold text-text-primary mb-2 text-sm">
                  Le calcul ROI
                </p>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  Programme a 1 500 EUR/mois &rarr; 10 RDV/mois &rarr; 30% de closing &rarr;
                  3 clients &rarr; offre a 4 000 EUR &rarr; 12 000 EUR de CA.
                  Le programme est amorti par un seul client supplementaire.
                </p>
              </div>

              <p className="mt-4 text-sm">
                <a href="/tarifs" className="text-accent hover:underline">
                  Voir les tarifs detailles &rarr;
                </a>
              </p>
            </section>

            {/* Section 8 — Erreurs */}
            <section id="erreurs" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Les 5 erreurs qui tuent le setting
              </h2>
              <p className="mb-6">
                Ces erreurs ne viennent pas d&apos;un manque de motivation. Elles viennent
                d&apos;une mauvaise comprehension de ce que le setting est cense produire.
              </p>

              <div className="space-y-5">
                {[
                  {
                    num: '01',
                    titre: 'Prospecter quand on a le temps',
                    texte: "Les signaux d'achat ont une duree de vie. Un prospect qui a commente hier est chaud maintenant. Dans 3 semaines, la fenetre est fermee. Le setting demande une presence quotidienne, meme courte.",
                  },
                  {
                    num: '02',
                    titre: 'Pitcher dans le premier message',
                    texte: "Le premier message doit declencher une reponse, pas vendre. Tout ce qui ressemble a un pitch signale au prospect qu'il fait face a un template envoye en masse.",
                    link: '/ressources/messages-linkedin-sans-reponse',
                    linkLabel: 'Pourquoi vos messages n\'obtiennent pas de reponses',
                  },
                  {
                    num: '03',
                    titre: 'Traiter tous les signaux comme equivalents',
                    texte: "Un like sur un post generique n'est pas le meme signal qu'un commentaire detaille. Le signal et l'ICP doivent correspondre ensemble.",
                    link: '/ressources/signal-achat-linkedin',
                    linkLabel: 'Comprendre les signaux d\'achat',
                  },
                  {
                    num: '04',
                    titre: 'Ne pas noter ce qui fonctionne',
                    texte: "Le setting sans journalisation est statique. Un angle qui a decroche 4 reponses doit etre codifie et reutilise. Sans ca, chaque message repart de zero.",
                  },
                  {
                    num: '05',
                    titre: 'Automatiser avant d\'avoir calibre',
                    texte: "Les messages automatiques sont detectes et le taux de reponse chute a moins de 1%. La sequence correcte : calibrer d'abord, industrialiser ensuite.",
                    link: '/ressources/setting-humain-vs-automatisation-linkedin',
                    linkLabel: 'Humain vs automatisation : le vrai comparatif',
                  },
                ].map(({ num, titre, texte, link, linkLabel }) => (
                  <div key={num} className="border-l-2 border-accent/30 pl-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      Erreur {num}
                    </p>
                    <p className="font-sans text-sm font-semibold text-text-primary mb-1">{titre}</p>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {texte}
                      {link && (
                        <>
                          {' '}<a href={link} className="text-accent hover:underline text-xs">{linkLabel} &rarr;</a>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9 — Programme */}
            <section id="programme" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Le programme de setting en 3 phases
              </h2>
              <p className="mb-6">
                Un programme de setting ne se deploie pas du premier jour. Il se calibre.
                Les 6 premieres semaines visent la precision, pas le volume.
              </p>

              <div className="space-y-5 mb-6">
                {[
                  {
                    phase: 'Phase 0',
                    periode: 'Semaine 1',
                    title: 'Strategie et infrastructure',
                    desc: "ICP precis (pas generique), comptes monitores, filtres Sales Navigator, skill Claude initialise. On ne commence pas a prospecter avant que cette infrastructure soit en place.",
                  },
                  {
                    phase: 'Phase 1',
                    periode: 'Semaines 2-8',
                    title: 'Calibration',
                    desc: "Volume bas (5 a 8 messages/jour). Chaque message est une experience. Le journal de bord tourne des le jour 1. Les patterns emergent en semaines 4-6. Les premiers RDV arrivent entre J+4 et J+10.",
                  },
                  {
                    phase: 'Phase 2',
                    periode: 'Mois 3+',
                    title: 'Regime de croisiere',
                    desc: "Le setter intervient 2 a 3 heures par jour. Le skill Claude produit des drafts proches de la cible. 2 a 4 RDV qualifies par semaine en continu. Le nurturing s'active pour les prospects pas encore prets.",
                  },
                ].map(({ phase, periode, title, desc }) => (
                  <div key={phase} className="flex gap-4">
                    <div className="shrink-0 w-24">
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent">{phase}</p>
                      <p className="font-sans text-xs text-text-secondary">{periode}</p>
                    </div>
                    <div className="border-l-2 border-accent/20 pl-4">
                      <p className="font-sans text-sm font-semibold text-text-primary mb-1">{title}</p>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm">
                Le{' '}
                <a href="/ressources/setting-commercial-b2b" className="text-accent hover:underline">guide detaille</a>{' '}
                couvre chaque phase semaine par semaine avec un cas client reel (0 a 12 RDV/mois en 10 semaines).
              </p>
            </section>

            {/* Section 10 — Scripts */}
            <section id="scripts" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Scripts et exemples de messages
              </h2>
              <p className="mb-6">
                Les scripts de setting ne sont pas des templates a copier-coller.
                Ce sont des cadres &mdash; une structure qui s&apos;adapte a chaque profil.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { href: '/ressources/script-setting-linkedin', label: 'Scripts de setting LinkedIn', desc: '6 exemples concrets (inbound + outbound) avec les regles de redaction' },
                  { href: '/ressources/script-closing-b2b', label: 'Scripts de closing B2B', desc: '5 scripts pour chaque phase de l\'appel de vente' },
                  { href: '/ressources/messages-linkedin-sans-reponse', label: 'Pourquoi vos messages ne marchent pas', desc: '5 erreurs precises qui tuent le taux de reponse, avec corrections' },
                  { href: '/ressources/relance-linkedin-b2b', label: 'Comment relancer sur LinkedIn', desc: 'Timing optimal (J+3, J+7, J+21) et 3 approches de relance' },
                ].map(({ href, label, desc }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex gap-4 items-start p-4 rounded-xl border border-white/[0.06] hover:bg-bg-secondary/50 transition-colors group"
                  >
                    <span className="text-accent shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    <div>
                      <p className="font-sans text-sm font-semibold text-text-primary mb-0.5">{label}</p>
                      <p className="font-sans text-xs text-text-secondary">{desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Section 11 — Cluster map (maillage interne) */}
            <section id="cluster" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-5">
                Toutes les ressources sur le setting
              </h2>
              <p className="mb-8">
                24 guides pratiques organises par theme. Chaque article est autonome,
                mais ils forment ensemble le corpus le plus complet en francais sur le setting B2B.
              </p>

              {/* Cluster: Setting core */}
              <div className="mb-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                  Setting : les fondamentaux
                </p>
                <div className="space-y-2">
                  {clusterSetting.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                    >
                      <span className="text-accent group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Cluster: LinkedIn */}
              <div className="mb-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
                  Setting LinkedIn : methode et scripts
                </p>
                <div className="space-y-2">
                  {clusterLinkedin.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                    >
                      <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Cluster: Closing */}
              <div className="mb-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
                  Closing : convertir les RDV en clients
                </p>
                <div className="space-y-2">
                  {clusterClosing.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                    >
                      <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Cluster: Methodes */}
              <div className="mb-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
                  Methodes de vente B2B
                </p>
                <div className="space-y-2">
                  {clusterMethodes.map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                    >
                      <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-4">
                  Nos services de setting
                </p>
                <div className="space-y-2">
                  {[
                    { href: '/methode/setting-linkedin', label: 'Methode Setting LinkedIn : le pipeline en 9 etapes' },
                    { href: '/methode/setting-telephonique', label: 'Methode Setting telephonique : qualification BANT + Challenger Sale' },
                    { href: '/methode/nurturing', label: 'Setup Nurturing : scoring et monetisation de la base existante' },
                    { href: '/externaliser-prospection-linkedin', label: 'Externaliser sa prospection LinkedIn : pour qui, quand, comment' },
                    { href: '/tarifs', label: 'Tarifs : prix du setting externalise' },
                  ].map(({ href, label }) => (
                    <a
                      key={href}
                      href={href}
                      className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                    >
                      <span className="text-text-secondary/40 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 12 — FAQ */}
            <section id="faq" className="scroll-mt-24">
              <h2 className="font-serif text-h2 text-text-primary mb-6">
                Questions frequentes sur le setting
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

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Setting
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Pret a mettre en place votre programme de setting ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              On construit le systeme complet : strategie, ciblage, skill maison,
              setter dedie, coaching closing. Premiers RDV qualifies des la semaine 1.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Reserver un appel gratuit &rarr;
            </ButtonGlow>
          </div>

          {/* Glossaire */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-5">
            <p className="font-sans text-sm text-text-muted">
              Setter, ICP, signal d&apos;achat, pipeline... Un terme vous echappe ?{' '}
              <a href="/glossaire" className="text-accent hover:underline">Consultez le glossaire</a>.
            </p>
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
