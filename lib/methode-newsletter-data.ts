import type { LayerKey } from './pipeline-data'

export const newsletterSteps: readonly {
  num: string
  label: string
  layers: readonly LayerKey[]
  desc: string
  tools: string[]
  pedagogy?: { mistake: string; arbitrage: string }
}[] = [
  {
    num: '01',
    label: 'Interview voix & Skill IA sur-mesure',
    layers: ['hybrid'] as const,
    desc: "Tout commence par une conversation, pas par un brief. Une interview visio de 1h30 à 2h avec le dirigeant, pas pour rédiger un questionnaire, mais pour extraire ce qui fait la singularité de sa voix\u00a0: son vocabulaire propre, ses convictions profondes, ses exemples récurrents, la façon dont il formule les problèmes de ses clients. Un dirigeant en cybersécurité ne parle pas comme un coach commercial. Un fondateur de fintech ne choisit pas les mêmes métaphores qu'un consultant RH. La transcription de l'interview est ensuite transformée en Skill IA structuré\u00a0: voix (style, registre, mots à éviter), expertise (domaine, angles, convictions), audience (qui sont ses lecteurs, ce qui les préoccupe). Ce Skill est le fondement de tout le système. Sans lui, l'IA rédige du contenu plausible mais impersonnel. Un premier draft test est soumis au dirigeant pour calibrage\u00a0: là où il corrige, on apprend ce qui manque.",
    tools: ['Interview visio', 'Transcription IA', 'Skill Claude'],
    pedagogy: {
      mistake: "Demander à une IA de « rédiger comme un expert cybersécurité ». L'IA produit un jargon plausible (Zero Trust, surface d'attaque, résilience opérationnelle) qui sonne correct mais sonne faux. Le dirigeant lui-même ne reconnaît pas sa voix. Et ses abonnés, qui le connaissent en vrai, perçoivent l'imposture en trois secondes. Le texte est techniquement correct, mais il n'a pas d'auteur.",
      arbitrage: "Le Skill se construit sur la vraie voix du dirigeant\u00a0: ses mots, pas ceux de l'industrie. Si il dit toujours « charge cognitive » plutôt que « complexité opérationnelle », c'est dans le Skill. Si il commence toujours par une anecdote terrain avant la conclusion théorique, c'est dans le Skill. Le premier draft test sert de calibrage\u00a0: là où il biffe, on comprend ce qui lui échappe encore. Le Skill s'affine à chaque cycle d'envoi.",
    },
  },
  {
    num: '02',
    label: 'Nettoyage & scoring de la base',
    layers: ['ia'] as const,
    desc: "Une base email non nettoyée est une bombe à retardement. Chaque adresse invalide envoyée dégrade votre score d'expéditeur, et quand ce score tombe trop bas, vos emails arrivent en spam, même pour les contacts valides. L'import commence par la déduplication (un même contact avec trois adresses différentes = une fiche, pas trois), l'enrichissement des données manquantes (poste, taille d'entreprise, secteur), et la suppression des adresses invalides, inactives ou à risque. Vient ensuite le scoring initial\u00a0: deux dimensions coexistent. Démographique d'abord, 30\u00a0% du score final. Poste, niveau hiérarchique, taille d'entreprise, secteur. C'est la question « qui êtes-vous\u00a0? ». Comportemental ensuite, 70\u00a0% du score. Ouvertures, clics, visites du site, téléchargements, temps passé sur la page tarifs. C'est la question « qu'avez-vous fait récemment\u00a0? ». Le score composite détermine dans quel segment entre chaque contact dès le départ.",
    tools: ['Import CRM', 'Déduplication', 'Enrichissement', 'Scoring composite'],
    pedagogy: {
      mistake: "Importer 10\u00a0000 contacts bruts dans un outil d'emailing et lancer une première campagne. Résultat typique\u00a0: 15\u00a0% de bounces (adresses invalides ou désactivées), 2\u00a0% de taux d'ouverture, et votre domaine flaggé comme expéditeur suspect. Reconstruire une réputation d'expéditeur prend 2 à 3 mois, pendant lesquels vos newsletters atterrissent en spam, même pour les contacts qui voulaient les recevoir.",
      arbitrage: "On nettoie avant d'envoyer. La base de 10\u00a0000 passe à 6\u00a0500 contacts valides, et c'est une bonne nouvelle, pas une perte. Mieux vaut 6\u00a0500 contacts qui reçoivent vos emails qu'une base gonflée qui détruit votre délivrabilité. Le scoring comportemental pèse 70\u00a0%\u00a0: un directeur qui n'a jamais ouvert un email vaut moins qu'un responsable ops qui visite la page tarifs chaque mois.",
    },
  },
  {
    num: '03',
    label: 'Ligne éditoriale & segmentation',
    layers: ['methode'] as const,
    desc: "Une newsletter sans ligne éditoriale est un blog distribué par email. La ligne éditoriale fixe trois paramètres\u00a0: les thèmes piliers (3 à 5 sujets sur lesquels le dirigeant a une expertise et une conviction), le format (long-form éducatif, micro-format tactique, étude de cas\u2026), et le rythme\u00a0: bimensuel. Deux envois par mois, pas un de plus. Assez pour rester présent, pas assez pour fatiguer. La segmentation suit la logique TOFU/MOFU/BOFU\u00a0: chaque abonné est dans l'un des trois segments selon son score composite. TOFU (score bas)\u00a0: il découvre le problème. Il a besoin de contenu qui valide son ressenti. MOFU (score intermédiaire)\u00a0: il évalue les solutions. Il compare, cherche des preuves. BOFU (score élevé)\u00a0: il est prêt à décider. Il a besoin d'un dernier élément pour passer à l'action. Un cycle bimensuel génère 4 contenus\u00a0: 1 newsletter générale pour tous + 1 contenu dédié à chaque segment. Chaque abonné reçoit exactement 2 emails par mois, l'un commun, l'autre calibré sur sa maturité.",
    tools: ['Calendrier éditorial', 'Segmentation', 'Seuils scoring'],
    pedagogy: {
      mistake: "Envoyer la même newsletter à toute la base. Le contact TOFU reçoit un cas client détaillé\u00a0: il ne comprend pas les termes, ne connaît même pas bien le problème. Le contact BOFU reçoit un article de blog générique alors qu'il a visité la page tarifs 3 fois en deux semaines. Tout le monde reçoit un contenu qui ne lui parle pas. Les désabonnements montent, les taux d'ouverture descendent, et la newsletter devient du bruit.",
      arbitrage: "4 contenus par cycle, chaque segment reçoit ce qui correspond à sa maturité. TOFU\u00a0: « 5 signes que votre pipeline ne fonctionne pas », pour identifier le problème. MOFU\u00a0: « Internaliser vs externaliser\u00a0: le comparatif chiffré », pour évaluer. BOFU\u00a0: « Comment nos clients ont généré 15 RDV en 60 jours », pour décider. Le même dirigeant, la même voix, mais quatre angles calibrés.",
    },
  },
  {
    num: '04',
    label: 'Rédaction IA & validation dirigeant',
    layers: ['hybrid'] as const,
    desc: "À chaque cycle bimensuel, le Skill IA rédige les 4 newsletters\u00a0: la générale et les trois segmentées. Le Skill applique la voix, les convictions, le registre et les exemples extraits lors de l'interview initiale, puis enrichis à chaque cycle précédent. Le dirigeant reçoit les 4 drafts et les valide en 10 à 15 minutes\u00a0: pas une relecture ligne à ligne, une validation éditoriale. Est-ce que ma prise de position est claire\u00a0? Est-ce que je reconnaîtrais ce texte comme le mien\u00a0? Chaque correction faite par le dirigeant est analysée et intégrée dans le Skill\u00a0: si il reformule systématiquement d'une certaine façon, c'est que le Skill ne l'a pas encore intégré. Après 3 à 4 cycles, le nombre de corrections diminue notablement. Le Skill s'est aligné sur la voix réelle.",
    tools: ['Skill Claude', 'Scheduled Tasks Cowork', 'Validation humaine'],
    pedagogy: {
      mistake: "Contenu correct mais générique\u00a0: bien structuré, sans fautes, mais qui se lit comme un article de blog HubSpot. Aucune conviction, aucune prise de position. Ou l'inverse\u00a0: le dirigeant valide sans vraiment lire, approuve en 30 secondes. Six mois plus tard, la newsletter a perdu tout caractère parce que le Skill n'a jamais appris à corriger.",
      arbitrage: "Le Skill rédige avec les convictions du dirigeant, pas juste son style. Si un sujet n'appelle pas de prise de position dans le draft, il est réécrit avant validation. La validation n'est pas une relecture orthographique\u00a0: c'est un check éditorial. « Est-ce que c'est ce que je pense vraiment\u00a0? » Si non, on réécrit et on intègre la correction dans le Skill pour le cycle suivant.",
    },
  },
  {
    num: '05',
    label: 'Envoi segmenté & triggers comportementaux',
    layers: ['ia'] as const,
    desc: "Les envois bimensuels suivent le calendrier éditorial, mais le système ne se limite pas au calendrier. En parallèle, des triggers comportementaux réagissent en temps réel aux actions des abonnés. Un contact visite la page tarifs\u00a0? Il reçoit un email BOFU avec un cas client de son secteur dans l'heure, pas à la prochaine newsletter, maintenant. Un contact reclique sur un ancien email après 2 mois de silence\u00a0? Son score est recalculé et il réintègre la séquence active. Un abonné ouvre 4 newsletters d'affilée sans jamais cliquer\u00a0? Le format change\u00a0: une vidéo courte remplace le long-form. Le système s'adapte à l'outil email du client\u00a0: Brevo, Mailchimp, ActiveCampaign, HubSpot, ou autre. Les workflows sont configurés dans l'outil existant, pas besoin de migrer ni d'acheter un nouvel outil.",
    tools: ["Outil email du client", 'Triggers automatisés', 'Workflows conditionnels'],
    pedagogy: {
      mistake: "Programmer les envois à date fixe et ne rien toucher. Newsletter du 1er, newsletter du 15. Indépendamment de ce que font les abonnés. Un contact a visité la page tarifs hier\u00a0? Il attend quand même le prochain envoi calendrier dans 10 jours. Il n'a rien ouvert depuis 3 mois\u00a0? Il reçoit quand même les newsletters MOFU. La séquence vit sa vie, déconnectée du comportement réel.",
      arbitrage: "Les triggers remplacent le calendrier par l'intention. Une visite sur la page tarifs déclenche un email BOFU dans l'heure, pas dans 10 jours. 3 mois de silence déclenchent une séquence de réactivation courte. Le système respecte le rythme de chacun\u00a0: certains abonnés passent de TOFU à BOFU en 3 semaines, d'autres en 6 mois. Les deux trajectoires sont gérées automatiquement.",
    },
  },
  {
    num: '06',
    label: 'Routing leads chauds & qualification',
    layers: ['humain'] as const,
    desc: "Quand le score d'un abonné franchit le seuil BOFU, une alerte arrive dans l'agenda du commercial. Le lead est « sales-ready ». L'alerte n'est pas juste une notification\u00a0: elle s'accompagne de la fiche complète du contact. Quels emails il a ouverts, quels liens il a cliqués, quand il a visité le site, depuis combien de temps il est dans la base, quel est son score actuel et comment il a évolué. L'appel peut reprendre là où le nurturing s'est arrêté, sans redemander ce que le contact a déjà montré. Si l'appel ne convertit pas, le contact ne tombe pas dans le vide. Selon l'objection identifiée (timing, budget, priorité, décideur différent), il est re-scoré et repositionné en MOFU avec une séquence adaptée. Ce module est combinable avec le Setting Téléphonique\u00a0: le setter prend l'appel de qualification, le closer ferme.",
    tools: ['Alerte scoring', 'Fiche contact enrichie', 'Agenda commercial', 'Rebouclage MOFU'],
    pedagogy: {
      mistake: "Deux erreurs symétriques. Première erreur\u00a0: ne jamais router. La newsletter tourne, les scores montent, mais personne ne passe à l'action, et le contact reçoit des emails jusqu'à ce qu'il se désinscrive. Deuxième erreur\u00a0: router trop tôt, avant que le seuil soit atteint. Le commercial appelle un lead qui n'est pas mûr, essuie un refus, et le lead est « grillé »\u00a0: il n'ouvrira plus les emails et ne décrochera plus.",
      arbitrage: "Le seuil BOFU est calibré sur les données réelles de conversion\u00a0: on analyse les leads qui ont signé, leur score au moment du premier appel, et on fixe le seuil en conséquence. Pas sur un chiffre rond, sur la réalité du pipeline. Un contact non converti est re-segmenté, pas abandonné. Il repart en MOFU avec un contenu adapté à l'objection notée pendant l'appel.",
    },
  },
  {
    num: '07',
    label: 'Optimisation & recalibrage',
    layers: ['hybrid'] as const,
    desc: "Une newsletter qui tourne sans optimisation se dégrade. Les taux d'ouverture à 35\u00a0% au lancement tombent à 12\u00a0% en 6 mois si rien ne bouge. Les sujets vieillissent, les formats s'usent, les seuils deviennent approximatifs. L'optimisation est hebdomadaire et non négociable. Quels contenus ont performé en termes d'ouverture, de clics, de visites site\u00a0? Quels segments progressent, lesquels stagnent\u00a0? Le TOFU se désengage\u00a0? On teste un nouvel angle d'entrée. Le MOFU ne monte pas en BOFU\u00a0? Les seuils ou les contenus sont à ajuster. Les seuils de scoring bougent de 3 à 5 points par mois en moyenne jusqu'à stabilisation. Le Skill IA s'enrichit à chaque cycle\u00a0: les corrections du dirigeant, les formats qui performent, les angles qui engagent. Après 3 mois, un bilan complet\u00a0: le client choisit entre autonomie (on lui remet le système en main) ou continuité (on opère).",
    tools: ['Analytics', 'A/B testing', 'Recalibrage scoring', 'Ajustement Skill'],
    pedagogy: {
      mistake: "Lancer la newsletter, vérifier les stats une première fois, et ne plus y toucher. 6 mois plus tard, les taux d'ouverture sont à 12\u00a0%, les désabonnements s'accumulent, et le dirigeant pense que « la newsletter ne marche pas pour son secteur ». La newsletter fonctionnait. C'est le manque d'optimisation qui l'a tuée.",
      arbitrage: "L'optimisation hebdomadaire est non négociable\u00a0: quels emails ont performé, lesquels sont sous le benchmark\u00a0? Quels segments progressent, lesquels stagnent\u00a0? Taux d'ouverture en baisse sur le TOFU\u00a0? On teste un nouvel objet. Routing en hausse sur le MOFU\u00a0? Le scoring fonctionne, on ne touche à rien. Les seuils bougent de 3 à 5 points par mois en moyenne jusqu'à stabilisation. Le Skill s'enrichit à chaque cycle. Après M3, le système est mature, et le client choisit s'il prend l'autonomie ou continue avec nous.",
    },
  },
] as const
