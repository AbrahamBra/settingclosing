import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'

export const metadata: Metadata = {
  title: 'Closing B2B : définition, méthode et programme complet | ChallengersLab',
  description:
    "Le closing B2B est la phase de vente où un commercial transforme un prospect qualifié en client signé. Définition exacte, rôle du closeur, discovery call, gestion des objections et programme complet.",
  openGraph: {
    title: 'Closing B2B : définition et méthode complète',
    description:
      "Closeur, discovery call, objections, Challenger Sale : tout sur le closing commercial en B2B. Ce que c'est, comment ça fonctionne, et pourquoi la plupart signent moins qu'ils ne devraient.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://challengerslab.fr/blog/closing-b2b',
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://challengerslab.fr/blog/closing-b2b',
  headline: 'Closing B2B : définition, méthode et programme complet',
  description:
    "Le closing B2B est la phase de vente où un commercial transforme un prospect qualifié en client signé. Définition exacte, rôle du closeur, discovery call, gestion des objections et programme.",
  author: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ChallengersLab',
    url: 'https://challengerslab.fr',
  },
  datePublished: '2026-03-18',
  dateModified: '2026-03-18',
  inLanguage: 'fr-FR',
  url: 'https://challengerslab.fr/blog/closing-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://challengerslab.fr/blog/closing-b2b',
  },
}

const faqItems = [
  {
    question: "Qu'est-ce que le closing en B2B ?",
    answer:
      "Le closing B2B est la phase de vente où un commercial transforme un prospect qualifié en client signé. Il intervient après le setting : le setter a généré le rendez-vous, le closeur conduit l'appel de vente. Le closing inclut la discovery call, la présentation de valeur, la gestion des objections et la demande de décision. Un closeur ne prospecte pas — il signe.",
  },
  {
    question: "Quelle est la différence entre setting et closing ?",
    answer:
      "Le setter génère les rendez-vous qualifiés. Le closeur les transforme en contrats. Le setter travaille en amont : prospection LinkedIn, détection de signaux, qualification des leads, prise de rendez-vous. Le closeur travaille sur les appels : discovery, présentation, objections, signature. Séparer les deux permet d'optimiser chaque rôle. Un closeur qui fait son propre setting passe la moitié de son temps sur ce qui n'est pas sa compétence.",
  },
  {
    question: "Qu'est-ce qu'une discovery call ?",
    answer:
      "La discovery call est le premier appel commercial du closeur avec un prospect. Son objectif : comprendre le problème, le contexte, les tentatives précédentes et le coût du statu quo — avant de parler de l'offre. Une bonne discovery mobilise 60 à 70 % du temps de l'appel en questions et écoute. Les closeurs qui pitchent dès les premières minutes sautent cette phase et perdent des contrats.",
  },
  {
    question: "Comment gérer l'objection 'c'est trop cher' ?",
    answer:
      "L'objection prix en fin d'appel signale presque toujours que la valeur n'a pas été suffisamment établie pendant la discovery. La méthode : revenir au coût du problème que vous résolvez. 'Si on ne fait rien, qu'est-ce que ça vous coûte dans 6 mois ?' Puis ancrer le prix sur cette valeur. Si la valeur du problème est inférieure au prix de la solution, le problème vient du ciblage, pas du closing.",
  },
  {
    question: "Comment mesurer son taux de closing ?",
    answer:
      "Taux de closing = nombre de contrats signés / nombre de rendez-vous réalisés. En B2B sur des leads chauds (qualifiés par un setter), un taux de 20 à 35 % est atteignable. Sur des leads froids ou auto-prospectés, on tourne plutôt entre 10 et 15 %. En dessous de 10 %, le problème vient soit de la qualification des leads (trop froids), soit de la structure de l'appel (pas de discovery, pitch trop tôt).",
  },
  {
    question: "À partir de quel prix un coaching closing est-il rentable ?",
    answer:
      "Dès que votre offre dépasse 1 500 à 2 000 € et que vous réalisez plusieurs appels par semaine. Exemple concret : si vous signez 2 clients de plus par mois grâce à un meilleur taux de closing sur une offre à 3 000 €, le gain est de 6 000 € mensuels. Un coaching à 2 000 € par mois est amorti par un seul contrat supplémentaire.",
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
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://challengerslab.fr/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Closing B2B',
      item: 'https://challengerslab.fr/blog/closing-b2b',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClosingB2BPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, faqSchema, breadcrumbSchema]),
        }}
      />
      <NavbarBlog />
      <main className="bg-bg-primary pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/blog" className="hover:text-text-primary transition-colors">Blog</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li className="text-text-primary">Closing B2B</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide complet · Closing
            </p>
            <h1 className="font-serif text-h1 text-text-primary mb-5 leading-tight">
              Closing B2B : définition, méthode et programme complet
            </h1>
            <p className="font-sans text-text-muted text-lg leading-relaxed mb-6">
              Le closing est la phase de vente où un commercial transforme un prospect qualifié en
              client signé. Ce guide couvre ce que ça implique vraiment — la discovery call, la gestion
              des objections, la méthode Challenger Sale — et comment un programme de coaching closing
              fonctionne en pratique.
            </p>
            <div className="flex items-center gap-3 font-sans text-xs text-text-muted">
              <time dateTime="2026-03-18">18 mars 2026</time>
              <span aria-hidden="true">·</span>
              <span>15 min de lecture</span>
            </div>
          </header>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { stat: '20–35 %', label: 'taux de closing sur leads qualifiés par un setter' },
              { stat: '10 → 8', label: 'contrats signés après une session de coaching discovery' },
              { stat: '1 500 €', label: "prix minimum d'offre pour que le closing coaching soit rentable" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-black/8">
                <p className="font-serif text-2xl text-accent mb-1">{stat}</p>
                <p className="font-sans text-xs text-text-muted leading-snug">{label}</p>
              </div>
            ))}
          </div>

          {/* Sommaire */}
          <nav aria-label="Sommaire" className="bg-bg-secondary rounded-xl p-6 mb-14 border border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Sommaire
            </p>
            <ol className="space-y-2">
              {[
                { id: 'definition', label: "Ce que le closing B2B est — et ce que ce n'est pas" },
                { id: 'closeur', label: 'Ce que fait un closeur au quotidien' },
                { id: 'discovery', label: "La discovery call : la phase que personne ne prépare assez" },
                { id: 'objections', label: 'Les objections : les vraies et les fausses' },
                { id: 'challenger', label: 'La méthode Challenger Sale' },
                { id: 'setting-closing', label: 'Setting et closing : la chaîne complète' },
                { id: 'taux', label: 'Mesurer et améliorer son taux de closing' },
                { id: 'pour-qui', label: 'Pour qui le coaching closing est fait — et pour qui non' },
              ].map(({ id, label }, i) => (
                <li key={id} className="flex gap-3 items-baseline">
                  <span className="font-sans text-text-muted/30 text-xs tabular-nums shrink-0 w-5 text-right">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={`#${id}`}
                    className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors leading-snug"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1 — Définition */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que le closing B2B est — et ce que ce n&apos;est pas
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Le closing est la phase finale d&apos;un cycle de vente B2B : le moment où un prospect
              qualifié devient client signé. Le closeur conduit un ou plusieurs appels commerciaux, explore
              le problème, présente la valeur de l&apos;offre et obtient une décision.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Ce que le closing n&apos;est pas : un ensemble de techniques de manipulation pour forcer une
              décision. Un closeur professionnel ne force rien. Il qualifie, il écoute, il explique — et
              il sait reconnaître quand le prospect n&apos;est pas le bon client.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-5">
              En B2B, le closing porte sur des offres à valeur élevée — généralement à partir de 1 500 à
              2 000 €. En dessous, le cycle de vente est trop court pour justifier un appel structuré.
              Au-dessus, un appel bien conduit peut faire la différence entre 30 % et 60 % de taux de
              transformation.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                La confusion fréquente : appeler &ldquo;closing&rdquo; tout le processus de vente.
                Dans une organisation avec un setter et un closeur, le closing désigne spécifiquement
                ce que fait le closeur — l&apos;appel de transformation. Le setting (prospection,
                qualification, prise de RDV) est un rôle distinct.
              </p>
            </div>
          </section>

          {/* Section 2 — Le closeur */}
          <section id="closeur" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que fait un closeur au quotidien
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-5">
              Un closeur reçoit un agenda rempli de rendez-vous qualifiés par un setter. Il ne prospecte
              pas. Sa journée tourne autour de la préparation des appels, des appels eux-mêmes, et du
              suivi post-appel.
            </p>
            <div className="space-y-5 mb-6">
              {[
                {
                  step: '01',
                  title: 'Préparation de l\'appel',
                  desc: "Le setter transmet un brief : qui est le prospect, quel signal a déclenché le contact, ce qui a été dit dans les échanges, son niveau de qualification. Le closeur lit ce contexte avant chaque appel. Il ne repart jamais de zéro.",
                },
                {
                  step: '02',
                  title: 'La discovery call',
                  desc: "60 à 70 % du temps de l'appel est en questions. Le closeur cherche à comprendre le problème précis, le contexte, les tentatives précédentes, le coût du statu quo. Il ne présente pas l'offre avant d'avoir cette image claire.",
                },
                {
                  step: '03',
                  title: 'Présentation de valeur',
                  desc: "Il présente l'offre en l'ancrant sur ce qu'il vient d'entendre — pas un pitch générique. Ce que le prospect a décrit comme son problème principal devient le fil directeur de la présentation.",
                },
                {
                  step: '04',
                  title: 'Gestion des objections et décision',
                  desc: "Il traite les objections, distingue les vraies résistances des prétextes, et demande explicitement une décision. Un closeur qui termine l'appel sans demander de décision ne close pas — il présente.",
                },
                {
                  step: '05',
                  title: 'Suivi et reporting',
                  desc: "Après chaque appel, il documente ce qui s'est passé : objections rencontrées, niveau d'intérêt, relance prévue. Ce retour alimente la base de connaissance du setter et améliore la qualité des leads suivants.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-text-muted/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Discovery */}
          <section id="discovery" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La discovery call : la phase que personne ne prépare assez
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              La majorité des deals perdus en B2B ne se perdent pas sur les objections. Ils se perdent
              parce que le closeur a présenté son offre sans comprendre ce que le prospect voulait
              vraiment. La discovery call est là pour éviter ça.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-5">
              Une discovery bien conduite répond à quatre questions avant tout pitch :
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { q: "Quel est le problème exact ?", detail: "Pas le problème général. Le problème précis, dans leur contexte." },
                { q: "Quel est le coût du statu quo ?", detail: "Ce qu'il en coûte de ne rien changer — en temps, argent, opportunités manquées." },
                { q: "Qu'ont-ils déjà essayé ?", detail: "Les tentatives précédentes révèlent les critères de décision réels." },
                { q: "Qui décide ?", detail: "Si la personne en face ne peut pas signer, la conversation doit l'amener vers le décideur." },
              ].map(({ q, detail }) => (
                <div key={q} className="bg-bg-secondary rounded-xl p-4 border border-black/8">
                  <p className="font-sans text-sm font-semibold text-text-primary mb-1">{q}</p>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Résultat concret — coaching closing
              </p>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                10 RDV consécutifs, 0 contrat signé. En première session, on a retravaillé la structure
                de la discovery — passer d&apos;une présentation de l&apos;offre à une exploration du
                problème client. Le RDV suivant : signé. Les 7 d&apos;après aussi.
              </p>
            </div>
            <p className="font-sans text-text-muted leading-relaxed mt-4">
              L&apos;article complet sur la discovery call est{' '}
              <a
                href="/blog/discovery-call-b2b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-text-primary transition-colors"
              >
                ici : structure, questions et erreurs à éviter
              </a>
              .
            </p>
          </section>

          {/* Section 4 — Objections */}
          <section id="objections" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les objections : les vraies et les fausses
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-5">
              La première chose qu&apos;un closeur apprend : toutes les objections ne se traitent pas de
              la même façon. Il y a les objections réelles (le prospect a un doute légitime que vous devez
              lever) et les objections-prétextes (il cherche à mettre fin à la conversation sans conflit).
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Objections réelles
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-muted">
                  {[
                    "Je n'ai pas le budget pour les 3 prochains mois",
                    "Je dois en parler à mon associé qui co-décide",
                    "J'ai déjà signé un contrat similaire jusqu'en juin",
                    "Je ne comprends pas encore comment ça marche",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-black/8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted/60 mb-3">
                  Objections-prétextes
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-muted">
                  {[
                    "C'est trop cher (sans avoir exploré la valeur)",
                    "Je vais réfléchir (sans date de retour)",
                    "Envoyez-moi une plaquette",
                    "Ce n'est pas le bon moment (sans contexte)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-muted/40 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              L&apos;objection &ldquo;c&apos;est trop cher&rdquo; intervenant en fin d&apos;appel est
              presque toujours un signal que la valeur n&apos;a pas été établie pendant la discovery.
              La réponse n&apos;est pas d&apos;argumenter sur le prix — c&apos;est de revenir sur le
              coût du problème. &ldquo;Si on ne résout pas ça dans les 6 prochains mois, qu&apos;est-ce
              que ça vous coûte concrètement ?&rdquo;
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              Pour les objections-prétextes, la méthode Challenger Sale recommande de clarifier directement
              plutôt que de relancer. &ldquo;Est-ce que c&apos;est le budget qui pose problème, ou c&apos;est
              que vous n&apos;êtes pas convaincu que c&apos;est la bonne solution ?&rdquo; La réponse dit
              exactement où vous en êtes.
            </p>
          </section>

          {/* Section 5 — Challenger Sale */}
          <section id="challenger" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La méthode Challenger Sale
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Matthew Dixon et Brent Adamson ont étudié 6 000 commerciaux B2B pour comprendre ce qui
              différenciait les plus performants. Résultat : pas la relation client, pas la sympathie,
              pas la persévérance. Les meilleurs vendeurs étaient ceux qui challengeaient le prospect.
            </p>
            <p className="font-sans text-text-muted leading-relaxed mb-5">
              Le Challenger Sale repose sur trois composantes :
            </p>
            <div className="space-y-5 mb-6">
              {[
                {
                  step: 'Teach',
                  title: 'Apporter un insight',
                  desc: "Le closeur arrive avec une perspective que le prospect n'a pas. Pas un pitch produit — une information sur son secteur, ses concurrents, ou son problème qu'il n'a probablement pas considérée sous cet angle. Ça crée de la crédibilité avant même que l'offre soit mentionnée.",
                },
                {
                  step: 'Tailor',
                  title: 'Adapter au contexte',
                  desc: "Le même insight présenté de la même façon à tous les prospects ne fonctionne pas. Le Challenger adapte son discours au rôle, aux priorités et aux contraintes spécifiques de la personne en face. Un directeur commercial et un solopreneur n'ont pas les mêmes problèmes.",
                },
                {
                  step: 'Take Control',
                  title: 'Conduire la décision',
                  desc: "Les Challengers ne subissent pas la conversation. Ils la pilotent. Ils demandent explicitement une décision, ils recadrent quand la discussion dérive, et ils sont à l'aise avec un 'non' direct plutôt qu'un 'je réfléchis' sans fin.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-accent text-xs font-semibold tabular-nums shrink-0 w-12 pt-0.5 uppercase tracking-widest">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-muted leading-relaxed">
              L&apos;article complet sur le Challenger Sale est{' '}
              <a
                href="/blog/challenger-sale-definition"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-text-primary transition-colors"
              >
                ici
              </a>
              , avec l&apos;application pratique pour les solopreneurs et infopreneurs.
            </p>
          </section>

          {/* Section 6 — Setting → Closing */}
          <section id="setting-closing" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setting et closing : la chaîne complète
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-5">
              Un closeur sans setter passe 50 % de son temps à prospecter — ce qui n&apos;est pas sa
              compétence principale. Un setter sans closeur génère des RDV que personne ne transforme.
              Les deux rôles fonctionnent en système.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { phase: 'Setter', detail: "Détecte les signaux d'achat, prospecte sur LinkedIn, qualifie les leads sur 5 niveaux, prend les RDV, transmet le brief au closeur." },
                { phase: 'Closeur', detail: "Reçoit le brief, prépare l'appel, conduit la discovery, présente l'offre, gère les objections, demande la décision, documente le résultat." },
                { phase: 'Boucle', detail: "Le retour du closeur (objections rencontrées, profil du prospect qui signe) alimente la qualification du setter. Le système s'améliore à chaque semaine." },
              ].map(({ phase, detail }) => (
                <div key={phase} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                    {phase}
                  </p>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-muted leading-relaxed">
              La différence détaillée entre les deux rôles est dans cet article :{' '}
              <a
                href="/blog/difference-setting-closing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-text-primary transition-colors"
              >
                Setting vs closing — rôles, compétences, ordre d&apos;investissement
              </a>
              .
            </p>
          </section>

          {/* Section 7 — Taux */}
          <section id="taux" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Mesurer et améliorer son taux de closing
            </h2>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Le taux de closing se calcule simplement : contrats signés / rendez-vous réalisés. Mais
              ce ratio seul ne dit pas grand chose. Il faut le croiser avec la source des leads pour
              comprendre d&apos;où vient le problème.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Leads qualifiés par un setter', taux: '20–35 %', context: 'Le setter a qualifié le prospect, le closeur reçoit un brief et arrive en terrain préparé.' },
                { label: 'Leads auto-prospectés', taux: '10–15 %', context: 'Le closeur prospectait lui-même. Moins de contexte, moins de qualification, plus de temps perdu.' },
                { label: 'Leads inbound froids', taux: '5–10 %', context: "Le prospect a rempli un formulaire sans qualification. Intention floue, décision lente." },
                { label: 'Leads sur référence', taux: '40–60 %', context: "La confiance est pré-établie. La discovery est plus courte, les objections moins nombreuses." },
              ].map(({ label, taux, context }) => (
                <div key={label} className="bg-bg-secondary rounded-xl p-4 border border-black/8">
                  <p className="font-sans text-xs text-text-muted mb-1">{label}</p>
                  <p className="font-serif text-xl text-accent mb-2">{taux}</p>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">{context}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-muted leading-relaxed mb-4">
              Un taux en dessous de 10 % sur des leads supposément qualifiés indique deux problèmes
              possibles : la qualification du setter est trop laxiste (il envoie des leads pas prêts),
              ou la structure de l&apos;appel est défaillante (pitch trop tôt, pas de discovery,
              pas de demande de décision explicite).
            </p>
            <p className="font-sans text-text-muted leading-relaxed">
              La première chose à regarder : est-ce que le closeur pose des questions pendant au moins
              15 minutes avant de mentionner le prix ? Si non, la discovery est incomplète.
            </p>
          </section>

          {/* Section 8 — Pour qui */}
          <section id="pour-qui" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pour qui le coaching closing est fait — et pour qui non
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Ça marche pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-muted">
                  {[
                    "Solopreneurs avec une offre B2B à 1 500 € ou plus",
                    "Consultants qui font plusieurs appels par semaine",
                    "Infopreneurs qui closent leurs programmes haute valeur",
                    "Closeurs qui ont un setter mais pas de méthode structurée",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-black/8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted/60 mb-3">
                  Ça ne marche pas pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-muted">
                  {[
                    "Offres B2C ou grand public",
                    "Activités sans appel commercial (e-commerce, SaaS self-serve)",
                    "Offres en dessous de 500 € — la marge ne justifie pas un appel structuré",
                    "Ceux qui n'ont pas encore de leads réguliers à closer",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-muted/40 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes sur le closing B2B
            </h2>
            <div className="space-y-6">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="border-l-2 border-black/10 pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">{question}</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/blog/discovery-call-b2b', label: 'Discovery call B2B : structure, questions et erreurs à éviter' },
                { href: '/blog/gestion-objections-b2b', label: 'Gérer les objections en vente B2B : méthode et exemples' },
                { href: '/blog/script-closing-b2b', label: 'Scripts et phrases de closing B2B : cadre et exemples' },
                { href: '/blog/closer-b2b', label: 'Closer B2B : définition, compétences et comment en recruter un' },
                { href: '/blog/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
                { href: '/blog/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/blog/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/glossaire', label: 'Glossaire : closer, discovery, objection, pipeline — toutes les définitions' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-sans text-sm text-text-muted hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 bg-bg-secondary rounded-2xl p-8 border border-black/8">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              ChallengersLab
            </p>
            <h3 className="font-serif text-h3 text-text-primary mb-3">
              Vous voulez améliorer votre taux de closing ?
            </h3>
            <p className="font-sans text-text-muted leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder votre structure d&apos;appel actuelle, identifier
              où les deals se perdent et ce qui changerait dans votre cas. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/blog"
              className="font-sans text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              ← Retour au blog
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
