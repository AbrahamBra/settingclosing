import type { LayerKey } from './pipeline-data'

export const telephoniqueSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
  pedagogy?: { mistake: string; arbitrage: string }
}[] = [
  {
    num: '01',
    label: 'Co-construction de la grille de qualification',
    layers: ['methode'] as const,
    desc: "Avant le premier appel, on construit la grille de qualification avec vous. Le BANT (Budget, Authority, Need, Timeline) sert de socle, mais chaque critère est adapté à votre marché. « Budget » pour un SaaS à 200\u00a0€/mois ne se qualifie pas comme un projet à 50\u00a0K€. « Authority » dans une PME de 15 personnes signifie le dirigeant\u00a0; dans un grand groupe, c\u2019est le sponsor interne plus un circuit de validation. On définit ensemble les critères éliminatoires, les critères pondérés, et les seuils de passage.",
    tools: ['BANT', 'Grille sur mesure', 'Workshop client'],
    pedagogy: {
      mistake: "Utiliser une grille BANT générique trouvée sur Google. « Le prospect a-t-il un budget\u00a0? Oui/Non. » C\u2019est une checklist, pas une qualification. Un « oui » à budget sans conna\u00eetre le montant, le cycle budgétaire et le processus d\u2019achat ne vaut rien. La grille générique donne l\u2019illusion de qualifier sans rien apprendre d\u2019utile.",
      arbitrage: "La grille est co-construite lors d\u2019un workshop de 90 minutes avec votre équipe. Quels deals ont signé vite\u00a0? Qu\u2019avaient-ils en commun\u00a0? Quels deals ont tra\u00eené 6 mois pour rien\u00a0? Chaque critère est pondéré\u00a0: Budget compte triple si votre cycle de vente est court, Authority compte triple si vous vendez à des grands comptes.",
    },
  },
  {
    num: '02',
    label: 'Intelligence pré-appel',
    layers: ['ia'] as const,
    desc: "Le lead entre via formulaire, lead magnet ou demande de contact. Avant qu\u2019un humain décroche, l\u2019IA enrichit la fiche\u00a0: taille de l\u2019entreprise, secteur, poste exact, historique d\u2019interactions sur votre site ou vos contenus. Le setter ouvre l\u2019appel avec du contexte, pas à l\u2019aveugle. Un lead qui a téléchargé votre guide sur le closing B2B n\u2019a pas le même besoin que celui qui a rempli « demande de devis ».",
    tools: ['CRM', 'Enrichissement IA', 'Historique interactions'],
    pedagogy: {
      mistake: "Appeler le lead dans les 5 minutes « parce que la stat dit que ça convertit mieux », sans avoir regardé qui c\u2019est. Le setter ouvre avec « Bonjour, vous avez rempli un formulaire sur notre site, c\u2019est bien ça\u00a0? » Le prospect se sent traité comme un numéro. Pire\u00a0: le setter pose des questions auxquelles le formulaire avait déjà répondu.",
      arbitrage: "2 minutes de préparation changent tout. Le setter sait d\u2019où vient le lead, ce qu\u2019il a consulté, et quelle est sa situation probable. L\u2019ouverture devient\u00a0: « J\u2019ai vu que vous aviez téléchargé notre guide sur la prospection LinkedIn — vous cherchez à structurer votre outbound ou vous avez déjà quelque chose en place\u00a0? » Le prospect sent qu\u2019on s\u2019intéresse à lui, pas qu\u2019on déroule un script.",
    },
  },
  {
    num: '03',
    label: 'Ouverture Challenger Sale',
    layers: ['humain'] as const,
    desc: "L\u2019approche Challenger Sale repose sur trois piliers\u00a0: Teach, Tailor, Take Control. Le setter n\u2019appelle pas pour « prendre la température » — il apporte un insight. Teach\u00a0: partager une observation que le prospect ne connaissait pas sur son marché. Tailor\u00a0: adapter cet insight au contexte spécifique du prospect. Take Control\u00a0: diriger la conversation vers un diagnostic, pas un pitch. Concrètement, les 90 premières secondes posent le cadre\u00a0: « On travaille avec des [profil similaire] et on observe que [insight sectoriel]. Est-ce que ça résonne avec votre situation\u00a0? »",
    tools: ['Challenger Sale', 'Script d\u2019ouverture'],
    pedagogy: {
      mistake: "Ouvrir l\u2019appel comme 90\u00a0% des commerciaux\u00a0: « Bonjour, je suis X de la société Y, on propose des solutions de Z, est-ce que vous auriez 5 minutes\u00a0? » Le prospect a déjà décidé de raccrocher avant la fin de la phrase. Le setter n\u2019a rien apporté, rien appris, et a gaspillé un lead qualifié.",
      arbitrage: "Le Challenger Sale inverse la dynamique. Au lieu de demander du temps, on en donne\u00a0: un insight, une donnée, une observation. « Les entreprises de votre secteur qui externalisent leur prospection génèrent en moyenne 3x plus de RDV que celles qui la gèrent en interne. C\u2019est contre-intuitif, mais la raison est simple\u2026 » Le prospect écoute parce qu\u2019il apprend quelque chose.",
    },
  },
  {
    num: '04',
    label: 'Discovery & qualification BANT',
    layers: ['humain', 'methode'] as const,
    desc: "Le cœur de l\u2019appel\u00a0: 7 à 12 minutes de questions structurées. La grille co-construite guide la conversation sans la rigidifier. Budget\u00a0: pas « avez-vous un budget\u00a0? » mais « comment fonctionne votre processus d\u2019achat pour ce type de prestation\u00a0? ». Authority\u00a0: « qui d\u2019autre serait impliqué dans cette décision\u00a0? ». Need\u00a0: « qu\u2019est-ce que ça vous coûte aujourd\u2019hui de ne pas avoir résolu ce problème\u00a0? ». Timeline\u00a0: « qu\u2019est-ce qui fait que c\u2019est un sujet maintenant plutôt qu\u2019il y a 6 mois\u00a0? ». Le setter écoute 70\u00a0% du temps et note les verbatims exacts — pas son interprétation.",
    tools: ['Grille BANT', 'Prise de notes structurée'],
    pedagogy: {
      mistake: "Transformer l\u2019appel en interrogatoire. « Quel est votre budget\u00a0? Êtes-vous le décideur\u00a0? Quel est votre besoin\u00a0? Quel est votre timing\u00a0? » Le prospect sent le script. Résultat\u00a0: il donne des réponses courtes et défensives. Le setter remplit sa grille mais n\u2019a rien compris au vrai problème.",
      arbitrage: "Les questions BANT sont tissées dans une conversation naturelle. Le Need se découvre en premier — c\u2019est ce qui a motivé le lead. L\u2019Authority émerge quand on demande « comment s\u2019est passée la dernière décision similaire\u00a0? ». Le Budget se clarifie quand on parle de l\u2019impact financier. Le setter suit la grille mais respecte le rythme du prospect.",
    },
  },
  {
    num: '05',
    label: 'Scoring & verdict',
    layers: ['methode'] as const,
    desc: "À la fin de l\u2019appel, chaque critère BANT est scoré sur une échelle pondérée. Le verdict tombe en trois catégories. Lead chaud\u00a0: besoin réel, budget existant, décideur identifié, timing court — il part en RDV closeur. Lead tiède\u00a0: 2 critères sur 4 validés, souvent le timing ou l\u2019authority manquent — il entre en nurturing actif. Lead froid\u00a0: besoin flou ou inexistant — il rejoint une séquence longue ou est disqualifié proprement. La disqualification n\u2019est pas un échec\u00a0: c\u2019est du temps gagné pour le closeur.",
    tools: ['Scoring pondéré', 'Matrice de décision'],
    pedagogy: {
      mistake: "Qualifier en binaire\u00a0: « intéressé » ou « pas intéressé ». Un prospect qui dit « pas maintenant » est classé froid et oublié. 3 mois plus tard, il signe chez un concurrent. « Pas maintenant » ≠ « pas intéressé ». C\u2019était un lead tiède qui avait besoin de 2 mois de nurturing, pas d\u2019un abandon.",
      arbitrage: "Le scoring par gradient évite les faux négatifs. Un prospect avec un besoin fort mais sans budget immédiat n\u2019est pas froid — il est en cycle budgétaire. Le score le place en nurturing actif avec un rappel calé sur son prochain trimestre. La grille pondérée distingue un « non définitif » d\u2019un « pas encore ».",
    },
  },
  {
    num: '06',
    label: 'Routing par maturité',
    layers: ['ia'] as const,
    desc: "Le CRM route automatiquement selon le score. Les leads chauds reçoivent un lien Calendly dans les 2 minutes suivant l\u2019appel — le momentum est clé. Les leads tièdes entrent dans une séquence de nurturing personnalisée selon le critère manquant\u00a0: contenu sur le ROI si c\u2019est le budget qui bloque, case studies du même secteur si c\u2019est la confiance, relance à date si c\u2019est le timing. Les leads froids reçoivent un email de courtoisie et rejoignent la newsletter. Zéro lead tombe entre les mailles.",
    tools: ['CRM', 'Routing automatique', 'Séquences email'],
    pedagogy: {
      mistake: "Envoyer le même email de suivi à tous les leads\u00a0: « Merci pour notre échange, voici un lien pour prendre RDV. » Le lead chaud n\u2019a pas besoin de ce mail — il avait besoin du lien 30 secondes après avoir raccroché. Le lead tiède n\u2019est pas prêt pour un RDV — il avait besoin d\u2019un contenu qui lève son objection. Le lead froid n\u2019avait besoin de rien.",
      arbitrage: "Le routing différencié respecte le rythme du prospect. Le lead chaud reçoit le Calendly avant d\u2019avoir ouvert LinkedIn. Le lead tiède « budget » reçoit un case study avec ROI chiffré. Le lead tiède « timing » reçoit une relance calée 2 semaines avant son prochain trimestre. Chaque lead avance à son rythme.",
    },
  },
  {
    num: '07',
    label: 'Feedback loop',
    layers: ['hybrid'] as const,
    desc: "Chaque semaine, on analyse les données terrain. Quels critères prédisent vraiment un RDV qui signe\u00a0? Quels verbatims reviennent chez les leads chauds\u00a0? Quels signaux trompent — un lead enthousiaste au téléphone qui ne se présente pas au RDV\u00a0? Ces retours recalibrent trois choses\u00a0: la grille de scoring (les pondérations bougent), le script d\u2019ouverture (les insights s\u2019affinent), et les critères de routing (les seuils s\u2019ajustent). Après 4 semaines, le système qualifie mieux qu\u2019un commercial senior qui débute sur votre offre.",
    tools: ['Reporting hebdomadaire', 'Recalibrage', 'Optimisation continue'],
    pedagogy: {
      mistake: "Configurer le système et ne plus y toucher. 3 mois plus tard, le taux de conversion RDV\u2009→\u2009signature baisse de 30\u00a0% à 18\u00a0%. Personne ne sait pourquoi. Le marché a bougé, les objections ont changé, un concurrent a lancé une offre agressive — mais le scoring n\u2019a rien intégré.",
      arbitrage: "Le feedback loop est le vrai avantage compétitif. Semaine 1\u00a0: la grille est générique. Semaine 4\u00a0: elle a intégré que les prospects qui mentionnent « on a déjà essayé » sont 2x plus susceptibles de signer — problème validé, solution précédente insuffisante. Semaine 8\u00a0: le setter sait que « pas le bon timing » signifie « rappelez-moi dans 6 semaines, pas dans 6 mois ».",
    },
  },
] as const
