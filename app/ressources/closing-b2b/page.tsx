import type { Metadata } from 'next'
import { NavbarBlog } from '@/components/NavbarBlog'
import { Footer } from '@/components/Footer'
import { ButtonGlow } from '@/components/ui/ButtonGlow'
import { AuthorBlock } from '@/components/AuthorBlock'

export const metadata: Metadata = {
  title: 'Closing B2B : définition et méthode | Setting',
  description:
    "Le closing B2B transforme un prospect qualifié en client signé. Définition, rôle du closeur, discovery call, objections et programme complet.",
  openGraph: {
    title: 'Closing B2B : définition et méthode | Setting',
    description:
      "Closeur, discovery call, objections, Challenger Sale : tout sur le closing commercial en B2B. Ce que c'est, comment ça fonctionne, et pourquoi la plupart signent moins qu'ils ne devraient.",
    locale: 'fr_FR',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.setting.live/ressources/closing-b2b',
    languages: {
      'fr': 'https://www.setting.live/ressources/closing-b2b',
      'x-default': 'https://www.setting.live/ressources/closing-b2b',
    },
  },
}

// ─── Structured Data ──────────────────────────────────────────────────────────

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://www.setting.live/ressources/closing-b2b',
  headline: 'Closing B2B : définition, méthode et programme complet',
  description:
    "Le closing B2B est la phase de vente où un commercial transforme un prospect qualifié en client signé. Définition exacte, rôle du closeur, discovery call, gestion des objections et programme.",
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
  datePublished: '2026-03-18',
  dateModified: '2026-03-19',
  inLanguage: 'fr-FR',
  url: 'https://www.setting.live/ressources/closing-b2b',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.setting.live/ressources/closing-b2b',
  },
  image: 'https://www.setting.live/ressources/closing-b2b/opengraph-image',
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
  {
    question: "Combien de temps faut-il pour voir des résultats avec un programme de coaching closing ?",
    answer:
      "Les premiers changements arrivent dès la deuxième ou troisième semaine — le moment où vous restructurez votre discovery et que vous commencez à l'utiliser sur des appels réels. Le taux de closing monte progressivement sur 5 à 8 semaines. Le plateau — là où le taux se stabilise entre 25 et 35 % sur des leads qualifiés — s'atteint généralement entre le 2e et le 3e mois. Le mois 3 est là pour travailler les cas difficiles : les deals lents, les prospects hésitants, les relances qui ne répondent plus.",
  },
  {
    question: "Peut-on améliorer son closing sans setter ?",
    answer:
      "Oui, mais les résultats sont limités par la qualité des leads. Un closeur qui génère lui-même ses RDV passe 30 à 40 % de son temps sur de la prospection mal qualifiée. Son taux de closing s'améliore avec le coaching, mais il plafonne parce que les leads entrants restent hétérogènes. Le vrai levier — taux de closing × volume de leads qualifiés — ne se débloque qu'avec un setter dédié.",
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
      name: 'Closing B2B',
      item: 'https://www.setting.live/ressources/closing-b2b',
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
      <main className="pt-28 pb-24">
        <div className="container-max max-w-3xl px-6 md:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-text-secondary">
              <li><a href="/" className="hover:text-text-primary transition-colors">Accueil</a></li>
              <li aria-hidden="true" className="select-none">›</li>
              <li><a href="/ressources" className="hover:text-text-primary transition-colors">Ressources</a></li>
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
            <p className="font-sans text-text-secondary text-lg leading-relaxed mb-6">
              Le closing est la phase de vente où un commercial transforme un prospect qualifié en
              client signé. Ce guide couvre ce que ça implique vraiment — la discovery call, la
              gestion des objections, les erreurs les plus fréquentes, la méthode Challenger Sale —
              et comment un programme de coaching closing fonctionne semaine par semaine.
            </p>
            <AuthorBlock date="2026-03-18" readTime="25 min de lecture" dateLabel="18 mars 2026" updatedDate="2026-03-19" />
          </header>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { stat: '20–35 %', label: 'taux de closing sur leads qualifiés par un setter' },
              { stat: '10 → 8', label: 'contrats signés après une session de coaching discovery' },
              { stat: '1 500 €', label: "prix minimum d'offre pour que le coaching closing soit rentable" },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-bg-secondary rounded-xl p-5 text-center border border-white/[0.06]">
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
                { id: 'definition', label: "Ce que le closing B2B est — et ce que ce n'est pas" },
                { id: 'journee', label: 'La journée type d\'un closeur' },
                { id: 'discovery', label: "La discovery call : la phase que personne ne prépare assez" },
                { id: 'objections', label: 'Les objections : les vraies et les fausses' },
                { id: 'challenger', label: 'La méthode Challenger Sale' },
                { id: 'erreurs', label: 'Les 5 erreurs qui détruisent le taux de closing' },
                { id: 'programme', label: 'Programme de coaching closing : semaine par semaine' },
                { id: 'resultats', label: 'La courbe de progression réelle' },
                { id: 'cas-client', label: 'Cas client : de 0 signé sur 10 à 8 signés sur 10' },
                { id: 'setting-closing', label: 'Setting et closing : la chaîne complète' },
                { id: 'taux', label: 'Mesurer et améliorer son taux de closing' },
                { id: 'pour-qui', label: 'Pour qui le coaching closing est fait — et pour qui non' },
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

          {/* Section 1 — Définition */}
          <section id="definition" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Ce que le closing B2B est — et ce que ce n&apos;est pas
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Le closing est la phase finale d&apos;un cycle de vente B2B : le moment où un prospect
              qualifié devient client signé. Le{' '}
              <a href="/ressources/closer-b2b" className="text-accent hover:text-text-primary transition-colors">closeur</a>{' '}
              conduit un ou plusieurs appels commerciaux, explore
              le problème, présente la valeur de l&apos;offre et obtient une décision.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Ce que le closing n&apos;est pas : un ensemble de techniques de manipulation pour forcer une
              décision. Cette confusion vient en grande partie du vocabulaire — &ldquo;techniques de
              closing&rdquo;, &ldquo;<a href="/ressources/script-closing-b2b" className="text-accent hover:text-text-primary transition-colors">scripts de closing</a>&rdquo; — qui laisse entendre qu&apos;il s&apos;agit
              de trouver les bons mots pour contourner le jugement du prospect. Un closeur professionnel
              ne force rien. Il qualifie, il écoute, il explique — et il sait reconnaître quand le
              prospect n&apos;est pas le bon client.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              En B2B, le closing porte sur des offres à valeur élevée — généralement à partir de 1 500 à
              2 000 €. En dessous, le cycle de vente est trop court pour justifier un appel structuré.
              Au-dessus, un appel bien conduit peut faire la différence entre 20 % et 40 % de taux de
              transformation. C&apos;est considérable sur un pipeline de 8 à 12 appels par mois.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                La confusion fréquente : appeler &ldquo;closing&rdquo; tout le processus de vente.
                Dans une organisation avec un setter et un closeur, le closing désigne spécifiquement
                ce que fait le closeur — l&apos;appel de transformation. Le{' '}
                <a href="/setting" className="text-accent hover:underline transition-colors">setting</a>{' '}
                (prospection,
                qualification, prise de RDV) est un rôle distinct, avec ses propres outils, ses propres
                métriques et ses propres compétences.
              </p>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le cycle complet en 5 étapes : signal d&apos;achat détecté par le setter → message de
              prospection → qualification → prise de RDV → appel de closing. Le closeur n&apos;intervient
              qu&apos;à partir de la cinquième étape — mais c&apos;est lui qui décide si le chiffre
              d&apos;affaires rentre.
            </p>
          </section>

          {/* Section 2 — Journée type */}
          <section id="journee" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La journée type d&apos;un closeur
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un closeur qui travaille avec un setter reçoit ses RDV la veille ou en début de journée.
              Il ne prospecte pas. Sa journée est structurée autour de deux ou trois appels, avec
              de la préparation en amont et de la documentation en aval.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  time: '8h45',
                  title: 'Lecture des briefs setter',
                  desc: "Le setter a transmis un brief pour chaque RDV du jour : qui est le prospect, quel signal a déclenché le contact, ce qui a été dit dans les échanges précédents, son niveau de qualification (sur 5 niveaux). La lecture prend 10 à 15 minutes par appel. Pas de brief = pas de préparation correcte.",
                },
                {
                  time: '9h30',
                  title: 'Premier appel closing (45–60 min)',
                  desc: "20 minutes de discovery, 15 minutes de présentation calibrée sur ce qu'il vient d'entendre, 15 minutes d'objections et demande de décision. Pas d'improvisation — le plan de l'appel est préparé. Ce qui change d'un appel à l'autre, c'est l'adaptation en temps réel.",
                },
                {
                  time: '10h45',
                  title: 'Documentation post-appel (10 min)',
                  desc: "Immédiatement après l'appel : résultat (signé, pas signé, relance), objections rencontrées, profil exact du prospect, ce qui a fonctionné ou pas. Ce retour est transmis au setter. Sans cette documentation, le système ne s'améliore jamais.",
                },
                {
                  time: '14h00',
                  title: 'Deuxième appel closing',
                  desc: "Même structure. La préparation a été faite le matin ou en fin de matinée. Deux appels par jour est le rythme soutenable pour un closing de qualité — au-delà, la concentration baisse et les deals se perdent.",
                },
                {
                  time: '15h30',
                  title: 'Retour setter + alignement pipeline',
                  desc: "15 à 20 minutes avec le setter ou par message : quels leads arrivent cette semaine, quels profils convertissent mieux, ajustement des critères de qualification si nécessaire. C'est cette boucle setter-closeur qui fait que le système s'améliore semaine après semaine.",
                },
                {
                  time: '16h30',
                  title: 'Relances en cours',
                  desc: "Les prospects qui ont dit 'je réfléchis' lors d'appels précédents. Une relance n'est pas un rappel de politesse — c'est un deuxième mini-appel commercial. Le closeur prépare une accroche spécifique au contexte de chaque prospect. Une relance générique ne génère pas de réponse.",
                },
              ].map(({ time, title, desc }) => (
                <div key={time} className="flex gap-5">
                  <span className="font-sans text-accent text-xs font-semibold tabular-nums shrink-0 w-12 pt-0.5">
                    {time}
                  </span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] grid sm:grid-cols-3 gap-4 text-center">
              {[
                { chiffre: '2 appels / jour', detail: 'rythme soutenable pour un closing de qualité' },
                { chiffre: '60–70 %', detail: "du temps d'un appel en questions (discovery)" },
                { chiffre: '10 min', detail: 'de documentation post-appel minimum' },
              ].map(({ chiffre, detail }) => (
                <div key={chiffre}>
                  <p className="font-serif text-lg text-accent mb-1">{chiffre}</p>
                  <p className="font-sans text-xs text-text-secondary leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Discovery */}
          <section id="discovery" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La discovery call : la phase que personne ne prépare assez
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La majorité des deals perdus en B2B ne se perdent pas sur les objections. Ils se perdent
              parce que le closeur a présenté son offre sans comprendre ce que le prospect voulait
              vraiment. La discovery call est là pour éviter ça.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Une discovery bien conduite répond à quatre questions avant tout pitch :
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { q: "Quel est le problème exact ?", detail: "Pas le problème général. Le problème précis, dans leur contexte. 'Je n'arrive pas à prospecter régulièrement' n'est pas un problème — c'est un symptôme. Le problème, c'est ce que ce manque leur coûte." },
                { q: "Quel est le coût du statu quo ?", detail: "Ce qu'il en coûte de ne rien changer — en temps, argent, opportunités manquées. Sans ce chiffre dans la tête du prospect, le prix de votre solution n'a pas de référentiel." },
                { q: "Qu'ont-ils déjà essayé ?", detail: "Les tentatives précédentes révèlent les critères de décision réels, les biais, et ce qu'ils ne voudront plus jamais entendre comme argument." },
                { q: "Qui décide ?", detail: "Si la personne en face ne peut pas signer, toute la discovery doit l'amener à vous mettre en contact avec le décideur — pas à promettre d'en parler." },
              ].map(({ q, detail }) => (
                <div key={q} className="bg-bg-secondary rounded-xl p-4 border border-white/[0.06]">
                  <p className="font-sans text-sm font-semibold text-text-primary mb-1">{q}</p>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              La structure en 4 phases d&apos;une discovery de 45 minutes : 5 min de contexte et
              rapport (qui ils sont, d&apos;où ils viennent), 15 min sur le problème et son coût,
              10 min sur les tentatives précédentes et les critères de décision, 5 min pour valider
              la compréhension avant de passer au pitch. Le pitch lui-même prend 10 min — pas 30.
            </p>
            <div className="border-l-2 border-accent/30 pl-5 mb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                Résultat concret — coaching closing
              </p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                10 RDV consécutifs, 0 contrat signé. En première session de coaching, on a réécouté
                un appel enregistré. En 8 minutes, le problème était visible : il pitchait l&apos;offre
                avant d&apos;avoir compris le problème du prospect. Les prospects disaient
                &ldquo;je vais réfléchir&rdquo; — en réalité &ldquo;tu ne m&apos;as pas encore
                compris&rdquo;. Restructuration de la discovery, RDV suivant : signé. Les 7 d&apos;après
                aussi.
              </p>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mt-4">
              L&apos;article complet sur la discovery call est{' '}
              <a
                href="/ressources/discovery-call-b2b"
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
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              La première chose qu&apos;un closeur apprend : toutes les objections ne se traitent pas de
              la même façon. Il y a les objections réelles (le prospect a un doute légitime que vous devez
              lever) et les objections-prétextes (il cherche à mettre fin à la conversation sans conflit).
              Les traiter de la même manière est une erreur majeure — elle fait perdre du temps sur les
              prétextes et passer à côté des vraies résistances.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Objections réelles
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
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
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                  Objections-prétextes
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "C'est trop cher (sans avoir exploré la valeur)",
                    "Je vais réfléchir (sans date de retour)",
                    "Envoyez-moi une plaquette",
                    "Ce n'est pas le bon moment (sans contexte)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              L&apos;objection &ldquo;c&apos;est trop cher&rdquo; intervenant en fin d&apos;appel est
              presque toujours un signal que la valeur n&apos;a pas été établie pendant la discovery.
              La réponse n&apos;est pas d&apos;argumenter sur le prix — c&apos;est de revenir sur le
              coût du problème. &ldquo;Si on ne résout pas ça dans les 6 prochains mois, qu&apos;est-ce
              que ça vous coûte concrètement ?&rdquo;
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Pour les objections-prétextes, la méthode Challenger Sale recommande de clarifier directement
              plutôt que de relancer. &ldquo;Est-ce que c&apos;est le budget qui pose problème, ou c&apos;est
              que vous n&apos;êtes pas convaincu que c&apos;est la bonne solution ?&rdquo; La réponse dit
              exactement où vous en êtes. L&apos;article complet :{' '}
              <a
                href="/ressources/gestion-objections-b2b"
                className="text-accent hover:text-text-primary transition-colors"
              >
                gérer les objections en vente B2B — méthode et exemples
              </a>
              .
            </p>
          </section>

          {/* Section 5 — Challenger Sale */}
          <section id="challenger" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La méthode Challenger Sale
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Matthew Dixon et Brent Adamson ont étudié 6 000 commerciaux B2B pour comprendre ce qui
              différenciait les plus performants. Résultat : pas la relation client, pas la sympathie,
              pas la persévérance. Les meilleurs vendeurs étaient ceux qui challengeaient le prospect —
              ceux qui apportaient une perspective que le prospect n&apos;avait pas.
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Le Challenger Sale repose sur trois composantes :
            </p>
            <div className="space-y-5 mb-6">
              {[
                {
                  step: 'Teach',
                  title: 'Apporter un insight',
                  desc: "Le closeur arrive avec une perspective que le prospect n'a pas. Pas un pitch produit — une information sur son secteur, ses concurrents, ou son problème qu'il n'a probablement pas considérée sous cet angle. Ça crée de la crédibilité avant même que l'offre soit mentionnée. Exemple : 'La plupart des consultants que je vois en ce moment ont un taux de closing autour de 12 %. Vous, vous êtes à combien ?'",
                },
                {
                  step: 'Tailor',
                  title: 'Adapter au contexte',
                  desc: "Le même insight présenté de la même façon à tous les prospects ne fonctionne pas. Le Challenger adapte son discours au rôle, aux priorités et aux contraintes spécifiques de la personne en face. Un directeur commercial et un solopreneur n'ont pas les mêmes problèmes, les mêmes objections, ni le même vocabulaire.",
                },
                {
                  step: 'Take Control',
                  title: 'Conduire la décision',
                  desc: "Les Challengers ne subissent pas la conversation. Ils la pilotent. Ils demandent explicitement une décision, ils recadrent quand la discussion dérive, et ils sont à l'aise avec un 'non' direct plutôt qu'un 'je réfléchis' sans fin. Un closeur qui termine l'appel sans demander de décision ne close pas — il présente.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5">
                  <span className="font-sans text-accent text-xs font-semibold tabular-nums shrink-0 w-12 pt-0.5 uppercase tracking-widest">{step}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-1">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Pour les fondateurs, freelances et solopreneurs B2B, le Take Control est la composante la plus difficile
              à intégrer — elle va contre l&apos;instinct de ne pas brusquer le prospect. C&apos;est
              pourtant ce qui distingue un appel qui se termine par &ldquo;je réfléchis&rdquo; (deal
              probablement perdu) d&apos;un appel qui se termine par une décision claire.{' '}
              <a
                href="/ressources/challenger-sale-definition"
                className="text-accent hover:text-text-primary transition-colors"
              >
                L&apos;article complet sur le Challenger Sale
              </a>
              .
            </p>
          </section>

          {/* Section 6 — Les 5 erreurs */}
          <section id="erreurs" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Les 5 erreurs qui détruisent le taux de closing
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Ces cinq erreurs reviennent dans presque tous les audits d&apos;appels que nous
              réalisons. Elles ne sont pas des erreurs de débutant — on les retrouve chez des
              commerciaux avec plusieurs années d&apos;expérience. La différence : les débutants
              ne les voient pas, les expérimentés les rationalisent.
            </p>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  title: "Pitcher dans les 5 premières minutes",
                  desc: "C'est l'erreur numéro un, et de loin. Le closeur a préparé son pitch, il est dans son contexte, il pense que le prospect a besoin d'entendre ce qu'il fait avant de répondre aux questions. Résultat : le prospect répond aux questions depuis le prisme de ce qu'il vient d'entendre, pas depuis son vrai problème. La discovery devient une validation du pitch plutôt qu'une exploration. Les deals se perdent 3 semaines plus tard quand le prospect réalise que ce qu'il a acheté ne correspond pas exactement à ce qu'il cherchait.",
                },
                {
                  num: '02',
                  title: "Traiter 'je réfléchis' comme une réponse",
                  desc: "'Je vais réfléchir' n'est pas une décision — c'est une sortie polie. La quasi-totalité des prospects qui disent 'je réfléchis' sans date précise ne rappellent pas. Le closeur qui accepte cette réponse sans clarifier commet deux erreurs : il ne sait pas si c'est une objection réelle ou un prétexte, et il abandonne le contrôle de la conversation. La bonne réponse : 'Qu'est-ce qu'il vous manque pour prendre une décision aujourd'hui ?' La réponse à cette question dit tout.",
                },
                {
                  num: '03',
                  title: "Ne pas identifier le décideur dès le début",
                  desc: "45 minutes de discovery, une belle présentation, une bonne gestion des objections — et en toute fin d'appel : 'Je dois en parler à mon associé.' Cette information aurait dû être obtenue dans les 10 premières minutes. La discovery doit qualifier trois choses : le problème, le budget, et qui décide. Si quelqu'un d'autre co-décide, l'objectif de l'appel change : il s'agit de faire un allié du prospect pour qu'il convainque son associé, pas de closer seul.",
                },
                {
                  num: '04',
                  title: "Argumenter sur le prix au lieu d'explorer la valeur",
                  desc: "Quand le prospect dit 'c'est trop cher', l'instinct du closeur est de justifier le prix — expliquer ce qui est inclus, comparer avec la concurrence, proposer un paiement en plusieurs fois. Ça ne fonctionne pas parce que la résistance n'est pas sur le prix, elle est sur la valeur perçue. La seule réponse efficace : revenir sur le coût du problème. 'On a dit que ça vous coûtait environ X par mois de ne pas résoudre ça. Là on parle de Y. Comment vous voyez le rapport ?' Si la valeur du problème est réelle, la conversation change.",
                },
                {
                  num: '05',
                  title: "Ne pas documenter ce qui se passe après l'appel",
                  desc: "Le closeur qui ne documente pas ses appels perd la mémoire institutionnelle de son pipeline. Il recommence les mêmes erreurs, ne repère pas les patterns d'objections, et n'a aucune donnée à transmettre au setter pour améliorer la qualification des leads. 10 minutes de documentation après chaque appel — résultat, objections, profil du prospect, ce qui a fonctionné — c'est ce qui permet au système setter-closeur de s'améliorer en continu.",
                },
              ].map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5">
                  <span className="font-sans text-text-secondary/30 text-xs tabular-nums shrink-0 w-6 pt-0.5">{num}</span>
                  <div>
                    <p className="font-sans font-semibold text-text-primary text-sm mb-2">{title}</p>
                    <p className="font-sans text-text-secondary text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 — Programme semaine par semaine */}
          <section id="programme" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Programme de coaching closing : semaine par semaine
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un programme de coaching closing ne ressemble pas à une formation commerciale classique.
              Il n&apos;y a pas de modules à regarder, pas de quiz, pas de certification. C&apos;est
              du travail sur vos appels réels, avec votre offre, sur vos prospects.
            </p>

            {/* Semaine 1 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                  Semaine 1
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" aria-hidden="true" />
              </div>
              <p className="font-sans text-sm font-semibold text-text-primary mb-2">
                Audit de l&apos;existant
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                On commence par écouter. Si vous avez des enregistrements d&apos;appels, on les analyse
                ensemble. Sinon, on reconstitue la structure de vos 3 derniers appels depuis mémoire.
                L&apos;objectif : identifier le moment exact où les prospects se ferment. Pas
                &ldquo;en général&rdquo; — à quelle minute, sur quelle question ou quelle phrase.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06] text-sm">
                <p className="font-sans text-text-secondary leading-relaxed">
                  Ce que la semaine 1 produit : un diagnostic précis — les 2 ou 3 points où vos
                  appels perdent le prospect, et le plan de travail pour les 2 prochains mois.
                </p>
              </div>
            </div>

            {/* Semaines 2-3 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                  Semaines 2–3
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" aria-hidden="true" />
              </div>
              <p className="font-sans text-sm font-semibold text-text-primary mb-2">
                Restructuration de la discovery
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                On réécrit la structure de votre appel. Ça commence par les questions : on travaille
                l&apos;ordre (contexte → problème → coût → tentatives précédentes → décideur), les
                formulations qui font parler et celles qui font se fermer. Vous testez cette nouvelle
                structure sur des appels réels. On en reparle après chaque appel.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06] text-sm">
                <p className="font-sans text-text-secondary leading-relaxed">
                  Ce que les semaines 2-3 produisent : une structure de discovery adaptée à votre
                  offre et à votre marché. La plupart des gens ressentent un changement dès
                  le 2e appel avec la nouvelle structure.
                </p>
              </div>
            </div>

            {/* Semaines 4-6 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                  Semaines 4–6
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" aria-hidden="true" />
              </div>
              <p className="font-sans text-sm font-semibold text-text-primary mb-2">
                Gestion des objections spécifiques à votre marché
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                On construit votre bibliothèque d&apos;objections — les 5 à 8 objections que vous
                entendez systématiquement, avec la réponse calibrée pour chacune. Ce n&apos;est pas
                un script à réciter. C&apos;est un cadre mental qui permet de répondre naturellement
                parce que vous avez réfléchi à la réponse avant l&apos;appel.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06] text-sm">
                <p className="font-sans text-text-secondary leading-relaxed">
                  Ce que les semaines 4-6 produisent : un taux de closing qui monte. Pas encore
                  à son plateau, mais la progression est visible. Les objections commencent à
                  sembler prévisibles plutôt que surprenantes.
                </p>
              </div>
            </div>

            {/* Semaines 7-10 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                  Semaines 7–10
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" aria-hidden="true" />
              </div>
              <p className="font-sans text-sm font-semibold text-text-primary mb-2">
                Demande de décision et relances
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                La partie la plus difficile à maîtriser : comment conclure sans forcer. On travaille
                les formulations de demande de décision qui ne mettent pas le prospect en position
                défensive. Et on construit le protocole de relance pour les prospects qui &ldquo;réfléchissent&rdquo;
                — un message de relance n&apos;est pas un message de rappel. C&apos;est un deuxième
                appel commercial compressé en 3 lignes.
              </p>
              <div className="bg-bg-secondary rounded-lg p-4 border border-white/[0.06] text-sm">
                <p className="font-sans text-text-secondary leading-relaxed">
                  Ce que les semaines 7-10 produisent : votre taux de closing approche son plateau.
                  Les deals &ldquo;je réfléchis&rdquo; commencent à se résoudre plus vite — dans
                  un sens ou dans l&apos;autre.
                </p>
              </div>
            </div>

            {/* Mois 3 */}
            <div className="mb-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent shrink-0">
                  Mois 3
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" aria-hidden="true" />
              </div>
              <p className="font-sans text-sm font-semibold text-text-primary mb-2">
                Cas difficiles et consolidation
              </p>
              <p className="font-sans text-text-secondary text-sm leading-relaxed mb-3">
                On travaille ce qui résiste encore : les profils atypiques, les deals à plusieurs
                décideurs, les cycles longs. Et on met en place les outils de pilotage autonome —
                comment vous mesurez votre taux, comment vous identifiez une dégradation avant
                qu&apos;elle coûte, comment vous ajustez sans accompagnement.
              </p>
            </div>
          </section>

          {/* Section 8 — Courbe de résultats */}
          <section id="resultats" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              La courbe de progression réelle
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Ce que les gens imaginent avant de commencer : les résultats progressent de façon
              linéaire dès la première semaine. Ce qui se passe vraiment : la progression est
              non-linéaire, avec un creux autour de la semaine 3-4 quand on change les habitudes,
              puis une montée plus franche à partir de la semaine 5-6.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-3 pr-4 text-xs font-semibold uppercase tracking-widest text-accent w-1/3">
                      Étape
                    </th>
                    <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-accent">
                      Ce qui se passe
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {[
                    {
                      etape: 'Semaine 1-2',
                      desc: "Diagnostic. Vous voyez pour la première fois où vos appels perdent le prospect. Ça peut être inconfortable — la plupart des gens pensaient que le problème était ailleurs.",
                    },
                    {
                      etape: 'Semaine 3-4',
                      desc: "Transition. Vous utilisez la nouvelle structure de discovery mais elle n'est pas encore naturelle. Certains appels se sentent 'moins fluides' qu'avant. Le taux ne s'améliore pas encore, parfois baisse légèrement. C'est normal.",
                    },
                    {
                      etape: 'Semaine 5-8',
                      desc: "Montée. La nouvelle structure devient automatique. Le taux de closing commence à progresser : de 10-12 % vers 18-22 %. Les objections vous surprennent moins.",
                    },
                    {
                      etape: 'Mois 3+',
                      desc: "Plateau stable. Taux de 25-35 % sur leads qualifiés par un setter. Les deals difficiles — ceux qui nécessitaient 4 relances — se résolvent en 1 ou 2. L'autonomie est installée.",
                    },
                  ].map(({ etape, desc }) => (
                    <tr key={etape}>
                      <td className="py-4 pr-4 font-semibold text-text-primary align-top">{etape}</td>
                      <td className="py-4 text-text-secondary leading-relaxed">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              La semaine 3-4 est celle où les gens abandonnent les formations classiques. La nouvelle
              structure ne se sent pas encore naturelle, et le taux ne s&apos;est pas encore amélioré.
              C&apos;est précisément là que l&apos;accompagnement fait la différence — quelqu&apos;un
              qui regarde vos appels avec vous et confirme que vous êtes sur la bonne voie.
            </p>
          </section>

          {/* Section 9 — Cas client */}
          <section id="cas-client" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Cas client : de 0 signé sur 10 à 8 signés sur 10
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Consultant RH indépendant. Offre d&apos;accompagnement à 3 500 € sur 3 mois. Pipeline
              régulier — un setter générait 3 à 4 RDV par semaine. Le problème : 10 RDV consécutifs,
              0 contrat signé.
            </p>

            <div className="space-y-6 mb-6">
              {/* Situation initiale */}
              <div className="border-l-2 border-white/[0.06] pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-2">
                  Situation initiale
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Structure type de ses appels avant coaching : 5 min d&apos;introduction,
                  15 min de présentation de l&apos;offre, 5 min de questions, annonce du prix,
                  gestion des objections. Le problème était visible dès la première écoute :
                  il présentait l&apos;offre avant d&apos;avoir compris le problème du prospect.
                  Les prospects répondaient à ses questions depuis le prisme de ce qu&apos;ils
                  venaient d&apos;entendre — pas depuis leur réalité. Les &ldquo;je vais
                  réfléchir&rdquo; finaux n&apos;étaient pas des hésitations sur le prix,
                  c&apos;étaient des signaux que quelque chose ne correspondait pas.
                </p>
              </div>

              {/* Semaine 1 */}
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Séance 1 — Écoute et diagnostic
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  On a réécouté un appel enregistré ensemble. À la minute 7, le prospect avait dit
                  une phrase importante sur son vrai problème — et il l&apos;avait ignorée pour
                  continuer son pitch. On a identifié 3 points de rupture exacts dans la structure
                  de l&apos;appel. À la fin de la séance, il avait une nouvelle structure en 4 phases
                  à tester.
                </p>
              </div>

              {/* Semaine 2 */}
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Semaine 2 — Premier appel avec la nouvelle structure
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Nouvelle discovery : 20 min de questions sur le contexte, le problème, le coût
                  du statu quo, les tentatives précédentes. Présentation de l&apos;offre ensuite —
                  ancrée sur ce qu&apos;il avait entendu. Le prospect lui a dit en fin d&apos;appel :
                  &ldquo;J&apos;ai l&apos;impression qu&apos;on a parlé de mon problème, pas de ta
                  solution.&rdquo; Premier contrat signé.
                </p>
              </div>

              {/* Semaines 3-6 */}
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  Semaines 3–6 — Consolidation
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Les 7 appels suivants : signés. Pas parce que chaque prospect était idéal —
                  l&apos;un d&apos;eux avait des objections réelles sur le budget. On a travaillé
                  la réponse en temps réel après l&apos;appel. Le suivant, même profil : signé.
                  On a construit sa bibliothèque d&apos;objections sur 4 semaines.
                </p>
              </div>

              {/* 4 mois après */}
              <div className="border-l-2 border-accent/30 pl-5">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  4 mois plus tard
                </p>
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  Taux de closing stabilisé à 38 % sur 4 à 6 appels par semaine. Soit en moyenne
                  2 clients supplémentaires par mois par rapport à la situation initiale. Sur une
                  offre à 3 500 €, c&apos;est +7 000 €/mois. Le coaching lui a coûté 2 000 €/mois
                  pendant 3 mois — amorti par le premier mois de résultats.
                </p>
              </div>
            </div>

            <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06] grid sm:grid-cols-3 gap-4 text-center">
              {[
                { chiffre: '0 → 38 %', detail: 'taux de closing en 10 semaines' },
                { chiffre: '+2 clients/mois', detail: 'sur une offre à 3 500 €' },
                { chiffre: '+7 000 €/mois', detail: 'chiffre d\'affaires additionnel stabilisé' },
              ].map(({ chiffre, detail }) => (
                <div key={chiffre}>
                  <p className="font-serif text-lg text-accent mb-1">{chiffre}</p>
                  <p className="font-sans text-xs text-text-secondary leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10 — Setting → Closing */}
          <section id="setting-closing" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Setting et closing : la chaîne complète
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-5">
              Un closeur sans setter passe 50 % de son temps à prospecter — ce qui n&apos;est pas sa
              compétence principale. Un setter sans closeur génère des RDV que personne ne transforme.
              Les deux rôles fonctionnent en système, et la qualité du système dépend de la qualité
              de la boucle entre les deux.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { phase: 'Setter', detail: "Détecte les signaux d'achat sur LinkedIn, prospecte les profils qualifiés, reçoit les réponses, qualifie les leads sur 5 niveaux, prend les RDV, transmet le brief au closeur avant chaque appel." },
                { phase: 'Closeur', detail: "Reçoit le brief, prépare l'appel en 10-15 min, conduit la discovery, adapte la présentation à ce qu'il a entendu, gère les objections, demande une décision, documente le résultat et le transmet au setter." },
                { phase: 'Boucle', detail: "Le retour du closeur (objections rencontrées, profil du prospect qui signe, deals perdus et pourquoi) alimente la qualification du setter. Le setter ajuste ses critères. Le système s'améliore à chaque semaine de façon mesurable." },
              ].map(({ phase, detail }) => (
                <div key={phase} className="border-l-2 border-accent/30 pl-5">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                    {phase}
                  </p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              La différence détaillée entre les deux rôles, les compétences respectives, et dans
              quel ordre investir est dans cet article :{' '}
              <a
                href="/ressources/difference-setting-closing"
                className="text-accent hover:text-text-primary transition-colors"
              >
                Setting vs closing — rôles, compétences, ordre d&apos;investissement
              </a>
              .
            </p>
          </section>

          {/* Section 11 — Taux */}
          <section id="taux" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Mesurer et améliorer son taux de closing
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
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
                <div key={label} className="bg-bg-secondary rounded-xl p-4 border border-white/[0.06]">
                  <p className="font-sans text-xs text-text-secondary mb-1">{label}</p>
                  <p className="font-serif text-xl text-accent mb-2">{taux}</p>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">{context}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Un taux en dessous de 10 % sur des leads supposément qualifiés indique deux problèmes
              possibles : la qualification du setter est trop laxiste (il envoie des leads pas prêts),
              ou la structure de l&apos;appel est défaillante (pitch trop tôt, pas de discovery,
              pas de demande de décision explicite).
            </p>
            <p className="font-sans text-text-secondary leading-relaxed mb-4">
              Comment diagnostiquer : enregistrez vos 3 prochains appels et répondez à ces trois
              questions après écoute. Est-ce que vous avez passé plus de 15 minutes en questions
              avant de mentionner le prix ? Est-ce que vous savez ce que ça coûte au prospect de
              ne rien changer ? Est-ce que vous avez demandé explicitement une décision en fin
              d&apos;appel ?
            </p>
            <p className="font-sans text-text-secondary leading-relaxed">
              Si la réponse à l&apos;une de ces trois questions est non, vous avez trouvé votre
              premier axe de travail.
            </p>
          </section>

          {/* Section 12 — Pour qui */}
          <section id="pour-qui" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-h2 text-text-primary mb-5">
              Pour qui le coaching closing est fait — et pour qui non
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-bg-secondary rounded-xl p-5 border border-accent/20">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  Ça marche pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Solopreneurs avec une offre B2B à 1 500 € ou plus",
                    "Consultants qui font plusieurs appels par semaine",
                    "Infopreneurs qui closent leurs programmes haute valeur",
                    "Closeurs qui ont un setter mais pas de méthode structurée",
                    "Ceux qui ont des leads mais un taux de closing en dessous de 20 %",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-secondary rounded-xl p-5 border border-white/[0.06]">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-secondary/60 mb-3">
                  Ça ne marche pas pour
                </p>
                <ul className="space-y-2 font-sans text-sm text-text-secondary">
                  {[
                    "Offres B2C ou grand public",
                    "Activités sans appel commercial (e-commerce, SaaS self-serve)",
                    "Offres en dessous de 500 € — la marge ne justifie pas un appel structuré",
                    "Ceux qui n'ont pas encore de leads réguliers à closer",
                    "Ceux qui cherchent des 'techniques' plutôt qu'une méthode de fond",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-text-secondary/40 shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="font-sans text-text-secondary leading-relaxed">
              Le coaching closing fonctionne quand le problème est dans la structure de l&apos;appel,
              pas dans le volume de leads. Si vous n&apos;avez pas encore de pipeline régulier,
              commencer par le{' '}
              <a
                href="/ressources/setting-commercial-b2b"
                className="text-accent hover:text-text-primary transition-colors"
              >
                setting commercial B2B
              </a>
              {' '}est plus adapté à votre situation.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="font-serif text-h2 text-text-primary mb-6">
              Questions fréquentes sur le closing B2B
            </h2>
            <div className="space-y-6">
              {faqItems.map(({ question, answer }) => (
                <div key={question} className="border-l-2 border-white/[0.06] pl-5">
                  <p className="font-sans font-semibold text-text-primary text-sm mb-2">{question}</p>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pour aller plus loin */}
          <div className="mt-14 pt-8 border-t border-white/[0.06]">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-5">
              Pour aller plus loin
            </p>
            <div className="space-y-3">
              {[
                { href: '/setting', label: 'Setting : le guide complet du setting commercial B2B' },
                { href: '/ressources/discovery-call-b2b', label: 'Discovery call B2B : structure, questions et erreurs à éviter' },
                { href: '/ressources/gestion-objections-b2b', label: 'Gérer les objections en vente B2B : méthode et exemples' },
                { href: '/ressources/script-closing-b2b', label: 'Scripts et phrases de closing B2B : cadre et exemples' },
                { href: '/ressources/closer-b2b', label: 'Closer B2B : définition, compétences et comment en recruter un' },
                { href: '/ressources/challenger-sale-definition', label: "Qu'est-ce que le Challenger Sale ?" },
                { href: '/ressources/difference-setting-closing', label: 'Quelle est la différence entre setting et closing ?' },
                { href: '/ressources/setting-commercial-b2b', label: 'Setting commercial B2B : définition, méthode et programme complet' },
                { href: '/glossaire', label: 'Glossaire : closer, discovery, objection, pipeline — toutes les définitions' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center gap-2 font-sans text-sm text-text-secondary hover:text-text-primary transition-colors group"
                >
                  <span className="text-accent group-hover:translate-x-0.5 transition-transform">→</span>
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
              Vous voulez améliorer votre taux de closing ?
            </h3>
            <p className="font-sans text-text-secondary leading-relaxed mb-6">
              Un appel de 30 minutes pour regarder votre structure d&apos;appel actuelle, identifier
              où les deals se perdent et ce qui changerait dans votre cas. Gratuit. Sans engagement.
            </p>
            <ButtonGlow as="a" href="/#contact">
              Réserver un appel gratuit →
            </ButtonGlow>
          </div>

          {/* Glossaire */}
          <div className="mt-12 border border-white/[0.06] rounded-xl p-5">
            <p className="font-sans text-sm text-text-muted">
              Discovery call, objection, closing... Un terme vous échappe ?{' '}
              <a href="/glossaire" className="text-accent hover:underline">Consultez le glossaire</a>.
            </p>
          </div>

          {/* Back */}
          <div className="mt-8 text-center">
            <a
              href="/ressources"
              className="font-sans text-sm text-text-secondary hover:text-text-primary transition-colors"
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
