import type { LayerKey } from './pipeline-data'

export const nurturingSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
  pedagogy?: { mistake: string; arbitrage: string }
}[] = [
  {
    num: '01',
    label: 'Audit & nettoyage de la base',
    layers: ['ia'] as const,
    desc: "Tout commence par un état des lieux. Combien de contacts\u00a0? Depuis quand\u00a0? D\u2019où viennent-ils\u00a0? On importe votre base, on déduplique (un même contact avec 3 emails = 1 fiche, pas 3), on enrichit les données manquantes (poste actuel, taille d\u2019entreprise, secteur), et on supprime les adresses invalides. Un email envoyé à une adresse morte fait baisser votre score d\u2019expéditeur — et tous vos prochains emails arrivent un peu plus en spam.",
    tools: ['Import CRM', 'Déduplication', 'Enrichissement', 'Vérification emails'],
    pedagogy: {
      mistake: "Importer sa base brute de 10\u00a0000 contacts dans un outil d\u2019emailing et lancer une campagne. Résultat\u00a0: 15\u00a0% de bounces (adresses invalides), 2\u00a0% d\u2019ouverture, et votre domaine flaggé comme spammeur. Reconstruire une réputation d\u2019expéditeur prend 2 à 3 mois.",
      arbitrage: "On nettoie avant d\u2019envoyer. La base passe de 10\u00a0000 à 6\u00a0500 contacts valides — et c\u2019est une bonne nouvelle. Mieux vaut 6\u00a0500 contacts qui reçoivent vos emails qu\u2019une base gonflée qui détruit votre délivrabilité. L\u2019enrichissement ajoute les données manquantes pour segmenter\u00a0: sans conna\u00eetre le poste ou le secteur, impossible d\u2019envoyer du contenu pertinent.",
    },
  },
  {
    num: '02',
    label: 'Double scoring : comportemental + démographique',
    layers: ['ia'] as const,
    desc: "Deux types de scoring coexistent, et les confondre est une erreur courante. Le scoring démographique évalue le profil\u00a0: poste, taille d\u2019entreprise, secteur, localisation. C\u2019est la dimension « qui êtes-vous\u00a0? ». Il est statique — un CEO de PME tech reste un CEO de PME tech. Le scoring comportemental évalue les actions\u00a0: ouvrir un email = 1 point, cliquer un lien = 3 points, visiter la page tarifs = 10 points, télécharger un cas client = 5 points, revenir sur le site 3 fois en une semaine = 15 points. C\u2019est la dimension « qu\u2019avez-vous fait récemment\u00a0? ». Le score final combine les deux. Un CEO qui n\u2019ouvre jamais vos emails vaut moins qu\u2019un responsable opérationnel qui lit tout et compare vos tarifs. Le comportemental pèse 70\u00a0% du score final parce qu\u2019il mesure l\u2019intention, pas le potentiel théorique.",
    tools: ['Scoring démographique', 'Scoring comportemental', 'Score composite'],
    pedagogy: {
      mistake: "Scorer uniquement sur le profil\u00a0: « C-level dans une entreprise de +50 personnes = lead chaud. » Un CEO inscrit à votre newsletter il y a 18 mois et qui n\u2019a jamais ouvert un seul email n\u2019est pas un lead chaud — c\u2019est un contact dormant avec un beau titre. Pendant ce temps, un responsable ops qui lit chaque article et visite votre page tarifs chaque mois est ignoré parce que son titre ne « matche » pas.",
      arbitrage: "Le scoring comportemental inverse la logique\u00a0: on mesure ce que les gens font, pas ce qu\u2019ils sont. Un contact qui visite la page tarifs 3 fois en 10 jours envoie un signal d\u2019achat plus fort qu\u2019un CEO silencieux. Le score composite additionne les deux dimensions\u00a0: profil (30\u00a0%) + comportement (70\u00a0%). Un bon profil qui ne fait rien reste froid. Un profil moyen qui s\u2019engage activement monte dans le funnel.",
    },
  },
  {
    num: '03',
    label: 'Seuils de passage & segmentation',
    layers: ['methode'] as const,
    desc: "Le score seul ne suffit pas — il faut des seuils qui déclenchent des actions. Trois segments, trois seuils. TOFU (Top of Funnel, score 0-25)\u00a0: le contact découvre son problème. Il ne vous conna\u00eet pas encore, ou vaguement. Il a besoin de contenu éducatif. MOFU (Middle of Funnel, score 25-50)\u00a0: le contact évalue les solutions. Il compare, lit des cas clients, évalue les options. BOFU (Bottom of Funnel, score 50+)\u00a0: le contact est prêt à décider. Il conna\u00eet les options, il a besoin d\u2019un dernier élément pour passer à l\u2019action. Ces seuils ne sont pas arbitraires\u00a0: on les calibre sur vos données réelles. Si vos leads qui ont converti avaient en moyenne un score de 45 au moment du premier appel commercial, le seuil BOFU est à 45 — pas à 50 parce que c\u2019est un chiffre rond.",
    tools: ['Segmentation', 'Funnel TOFU/MOFU/BOFU', 'Calibrage des seuils'],
    pedagogy: {
      mistake: "Envoyer la même newsletter mensuelle à toute la base. Le contact TOFU reçoit un cas client détaillé qu\u2019il ne comprend pas — il ne sait même pas qu\u2019il a un problème. Le contact BOFU reçoit un article de blog générique alors qu\u2019il est prêt à acheter. Tout le monde se désinscrit parce que le contenu n\u2019est jamais pertinent.",
      arbitrage: "Chaque segment reçoit le bon contenu au bon moment. TOFU\u00a0: « 5 signes que votre prospection LinkedIn ne fonctionne pas » — contenu qui aide à identifier le problème. MOFU\u00a0: « Externaliser sa prospection vs recruter un SDR\u00a0: le comparatif chiffré » — contenu qui aide à évaluer. BOFU\u00a0: « Comment nos clients génèrent 15 RDV/mois en 60 jours » — contenu qui aide à décider.",
    },
  },
  {
    num: '04',
    label: 'Séquences de contenu par segment',
    layers: ['hybrid'] as const,
    desc: "Pour chaque segment, une séquence de contenus est construite et automatisée. Ce ne sont pas des emails promotionnels — c\u2019est du contenu qui fait progresser le contact dans sa réflexion. Newsletters éducatives, invitations webinars, études de cas sectorielles, guides pratiques, vidéos courtes. Le timing est calibré\u00a0: pas d\u2019email le lundi matin (bo\u00eete saturée), pas plus de 2 par semaine (fatigue), pas moins de 1 par quinzaine (oubli). Chaque email a un objectif unique\u00a0: informer, comparer ou déclencher une action. Si un email essaie de faire les trois, il n\u2019en réussit aucun.",
    tools: ['Séquences email', 'Contenu segmenté', 'Calendrier éditorial'],
    pedagogy: {
      mistake: "Créer une séquence de 7 emails « de bienvenue » identique pour tout le monde, avec un pitch produit dès l\u2019email 3. Le contact vient de s\u2019inscrire et reçoit déjà « Demandez votre démo gratuite\u00a0! » Le taux de désinscription explose à l\u2019email 3 et ne redescend jamais.",
      arbitrage: "Chaque séquence est construite comme un parcours pédagogique. Email 1\u00a0: bienvenue + contenu qui valide le problème du contact. Email 2 (J+4)\u00a0: approfondissement avec données ou cas réel. Email 3 (J+10)\u00a0: angle différent, même thématique. Le CTA n\u2019arrive qu\u2019au moment où le contact a montré — par ses clics, ses visites — qu\u2019il est prêt à avancer.",
    },
  },
  {
    num: '05',
    label: 'Triggers comportementaux',
    layers: ['ia'] as const,
    desc: "Au-delà des séquences planifiées, le système réagit en temps réel. Un contact visite la page tarifs\u00a0? Il reçoit un email avec un cas client de son secteur dans l\u2019heure. Un contact reclique sur un ancien email après 3 mois de silence\u00a0? Son score est recalculé et il réintègre la séquence active. Un contact ouvre 4 emails d\u2019affilée sans cliquer\u00a0? On change le format — vidéo au lieu de texte. C\u2019est là que le scoring automatisé prend tout son sens\u00a0: un humain ne peut pas surveiller 6\u00a0500 contacts en parallèle. L\u2019automatisation détecte les micro-signaux en temps réel et déclenche la bonne action sans délai.",
    tools: ['Triggers automatisés', 'Workflows conditionnels', 'Alertes temps réel'],
    pedagogy: {
      mistake: "Programmer une séquence linéaire\u00a0: Email 1 à J+0, Email 2 à J+7, Email 3 à J+14\u2026 indépendamment de ce que fait le contact. Il a visité la page tarifs hier\u00a0? Il reçoit quand même l\u2019email TOFU prévu au calendrier. Il n\u2019a rien ouvert depuis 2 mois\u00a0? Il reçoit quand même le contenu MOFU. La séquence vit sa vie, déconnectée du comportement réel.",
      arbitrage: "Les triggers remplacent le calendrier par l\u2019intention. La visite de la page tarifs déclenche un email BOFU, pas le prochain email de la séquence. 3 mois de silence déclenchent une séquence de réactivation, pas un email de plus dans le vide. Le système s\u2019adapte\u00a0: certains passent de TOFU à BOFU en 2 semaines, d\u2019autres en 6 mois. Les deux sont légitimes.",
    },
  },
  {
    num: '06',
    label: 'Routing vers appel & fin de boucle',
    layers: ['humain'] as const,
    desc: "Quand le score franchit le seuil BOFU, une alerte arrive dans l\u2019agenda du commercial. Le lead est « sales-ready ». Le commercial qui prend l\u2019appel a sous les yeux tout l\u2019historique\u00a0: quels contenus le contact a lus, quand il a visité le site, quel est son score, depuis combien de temps il est dans le funnel. L\u2019appel reprend là où le nurturing s\u2019est arrêté. Et si l\u2019appel ne convertit pas\u00a0? Le contact ne retombe pas dans le vide. Il est re-scoré, repositionné en MOFU avec une séquence différente, et il continue sa progression. Le nurturing continue tant que le contact est actif. Signature ou désinscription, ce sont les deux seules sorties.",
    tools: ['Alerte scoring', 'Fiche contact enrichie', 'Agenda commercial', 'Rebouclage MOFU'],
    pedagogy: {
      mistake: "Deux erreurs symétriques. Première erreur\u00a0: ne jamais router vers un appel. Le nurturing tourne en boucle infinie, le contact reçoit des emails, mais personne ne lui propose de passer à l\u2019étape suivante. Deuxième erreur\u00a0: router trop tôt, avant que le contact ne soit mûr. Le commercial appelle un lead qui n\u2019est pas prêt, essuie un refus, et le lead est « grillé » — il n\u2019ouvrira plus vos emails.",
      arbitrage: "Le seuil de routing est calibré sur les données réelles. On analyse les leads qui ont converti\u00a0: quel score avaient-ils au moment du premier appel\u00a0? Ce profil de conversion définit le seuil. Après un appel non converti, le contact est re-segmenté — pas abandonné. La boucle le reprend avec un contenu adapté à l\u2019objection identifiée pendant l\u2019appel. Le closeur note « timing » ou « budget » — et le nurturing ajuste la séquence en conséquence.",
    },
  },
  {
    num: '07',
    label: 'Recalibrage des seuils & optimisation',
    layers: ['hybrid'] as const,
    desc: "Les seuils de scoring ne sont pas gravés dans le marbre. Chaque semaine, on analyse\u00a0: les leads routés à 50 points convertissent-ils mieux que ceux routés à 40\u00a0? Les emails MOFU performent-ils mieux que les TOFU\u00a0? Les cas clients convertissent-ils mieux que les guides\u00a0? Les leads issus de webinars avancent-ils plus vite\u00a0? Ces données affinent trois paramètres\u00a0: le contenu des séquences, les seuils de scoring, et la pondération des actions. Si les clics sur les cas clients prédisent mieux la conversion que les ouvertures d\u2019emails, on augmente leur poids dans le score. Un système de nurturing bien calibré s\u2019améliore de mois en mois — chaque email envoyé génère de la donnée qui rend le suivant plus pertinent.",
    tools: ['A/B testing', 'Analytics', 'Recalibrage scoring', 'Ajustement seuils'],
    pedagogy: {
      mistake: "Lancer le nurturing, vérifier les stats une fois, et ne plus y toucher. 6 mois plus tard, les taux d\u2019ouverture sont passés de 35\u00a0% à 12\u00a0%. Les contenus sont datés, les seuils laissent passer des leads trop froids, et le nurturing est devenu du bruit — il dégrade votre image au lieu de la construire.",
      arbitrage: "L\u2019optimisation hebdomadaire est non négociable. Quels emails ont performé, lesquels sont sous le benchmark\u00a0? Quels segments progressent, lesquels stagnent\u00a0? Taux d\u2019ouverture en baisse sur le TOFU\u00a0? On teste un nouvel angle. Routing en hausse sur le MOFU\u00a0? Le scoring fonctionne, on ne touche à rien. Les seuils bougent de 3 à 5 points par mois en moyenne jusqu\u2019à stabilisation.",
    },
  },
] as const
