# GEO Audit Report: Setting.live

**Date de l'audit :** 24 mars 2026
**URL :** https://www.setting.live
**Type d'entreprise :** Agence / Service B2B (prospection LinkedIn externalisee)
**Pages analysees :** 33

---

## Resume executif

**Score GEO global : 56/100 (Fair)**

Setting.live dispose d'une base technique exemplaire (robots.txt, llms.txt, SSR, schema.org) qui le place devant 90%+ des sites concurrents en termes d'accessibilite aux crawlers IA. Cependant, l'absence quasi totale de presence de marque sur les plateformes tierces (Reddit, YouTube, Wikipedia, annuaires B2B) et des lacunes en attribution d'auteur/E-E-A-T empechent les systemes IA de citer le site comme source autoritaire. Le plus gros levier d'amelioration est la construction de signaux d'autorite externes.

### Ventilation des scores

| Categorie | Score | Poids | Score pondere |
|---|---|---|---|
| AI Citability | 62/100 | 25% | 15.5 |
| Brand Authority | 12/100 | 20% | 2.4 |
| Content E-E-A-T | 62/100 | 20% | 12.4 |
| Technical GEO | 88/100 | 15% | 13.2 |
| Schema & Structured Data | 62/100 | 10% | 6.2 |
| Platform Optimization | 61/100 | 10% | 6.1 |
| **Score GEO global** | | | **55.8/100** |

### Scores par plateforme IA

| Plateforme | Score | Status |
|---|---|---|
| Google AI Overviews | 72/100 | Bon |
| Google Gemini | 58/100 | Fair |
| Bing Copilot | 55/100 | Fair |
| ChatGPT Web Search | 52/100 | Fair |
| Perplexity AI | 48/100 | Faible |

---

## Issues critiques (a corriger immediatement)

### 1. Conflit de prix dans le schema Service de /externaliser-prospection-linkedin

**Fichier :** `app/externaliser-prospection-linkedin/page.tsx` ~ligne 52
**Probleme :** Le schema Service declare `price: 500` EUR/mois alors que toutes les autres pages (homepage, tarifs) affichent 790 EUR/mois. Les moteurs IA et Google surfacent cette incoherence comme information contradictoire.
**Fix :** Corriger le prix a 790 dans le schema de cette page.

### 2. Mentions legales incompletes (obligation legale francaise)

**Fichier :** `app/mentions-legales/page.tsx`
**Probleme :** Numero SIRET absent. Adresse physique incomplete ("France" uniquement). L'article L111-1 du Code de la consommation exige les coordonnees completes sur les sites commerciaux.
**Fix :** Ajouter le SIRET et l'adresse complete.

### 3. `sameAs` Organisation limite a 1 seul lien

**Fichier :** `app/page.tsx` ~ligne 64
**Probleme :** Le schema ProfessionalService n'a qu'un seul lien `sameAs` (LinkedIn ChallengersLab). Les systemes IA utilisent `sameAs` pour construire le graphe d'entite. Avec 1 seul lien, l'entite "Setting" est quasi invisible.
**Fix :** Ajouter 5+ liens : LinkedIn personnel Abraham, challengerslab.com, YouTube (une fois cree), profils annuaires.

---

## Issues haute priorite (a corriger sous 1 semaine)

### 4. Aucune attribution d'auteur sur les articles

**Fichier :** Tous les fichiers `app/ressources/*/page.tsx`
**Probleme :** Les 25 articles n'affichent pas de byline visible. Le schema Article mentionne `author: { name: 'Abraham' }` mais sans `sameAs`, `image`, ni nom complet. Les systemes IA ne peuvent pas verifier l'identite de l'auteur.
**Fix :** Ajouter des bylines visibles avec photo, bio courte, lien LinkedIn. Enrichir le schema Person avec `sameAs`, `image`, `worksFor`, nom complet.

### 5. Aucune date de publication visible sur les articles

**Probleme :** Les dates existent dans le schema Article (datePublished, dateModified) mais ne sont pas affichees visuellement. Les utilisateurs et crawlers IA qui ne lisent pas le JSON-LD ne voient pas la fraicheur du contenu.
**Fix :** Afficher datePublished et "Mis a jour le" dateModified sur chaque article.

### 6. Pas de `speakable` sur les articles

**Fichier :** 25 fichiers article dans `app/ressources/`
**Probleme :** La propriete `speakable` n'est presente que sur la homepage. Elle devrait etre sur chaque article pour signaler aux assistants IA quels passages sont extractibles.
**Fix :** Ajouter `speakable` avec selecteurs CSS ciblant H1 et premier paragraphe.

### 7. Hero de la homepage en `'use client'` -- invisible aux crawlers IA

**Fichier :** `components/Hero.tsx`
**Probleme :** Le H1 ("Tu as une offre qui marche..."), le sous-titre et le CTA sont dans un composant client avec framer-motion. GPTBot, ClaudeBot et PerplexityBot n'executent pas JavaScript et ne voient donc pas ce contenu.
**Fix :** Extraire le H1 et le texte statique dans un Server Component. Ne garder que les animations dans le client component. Ou ajouter un `<noscript>` fallback.

### 8. Aucune presence Reddit

**Probleme :** Zero mention de Setting.live, ChallengersLab ou Abraham Brakha sur Reddit. Perplexity indexe et cite massivement Reddit.
**Fix :** Creer des posts de valeur (methodo, retours terrain) dans r/EntrepreneurFrancais, r/freelance et subreddits B2B. Ne pas faire de promotion directe.

---

## Issues moyenne priorite (a corriger sous 1 mois)

### 9. Pas de chaine YouTube

**Impact :** Google Gemini et Google AI Overviews favorisent les entites avec presence dans l'ecosysteme Google. Un canal YouTube avec 5-10 videos courtes (3-5 min) sur la methodologie creerait un signal multi-format.
**Suggestion :** "Les 9 etapes du setting LinkedIn", "BANT vs Challenger Sale", "Signal d'achat LinkedIn : c'est quoi ?"

### 10. Pas de Google Business Profile

**Impact :** Meme en tant que service a distance, un GBP renforce les signaux Knowledge Graph de Gemini.
**Fix :** Creer un GBP categorie "Consultant en marketing" / "Conseil en gestion d'entreprise", zone de service : France.

### 11. Pas d'inscription dans les annuaires B2B francais

**Impact :** Les listes "Top agences prospection LinkedIn 2026" de Salesdorado, Oscar Black, LicorneSociety sont citees par ChatGPT et Perplexity comme sources d'autorite.
**Fix :** Contacter ces editeurs pour inclusion. Le contenu et le positionnement prix existent deja.

### 12. Pas de protocole IndexNow pour Bing

**Impact :** Bing Copilot beneficierait d'un indexage quasi instantane des nouveaux contenus.
**Fix :** Ajouter une cle IndexNow dans `/public/` et soumettre les URLs a l'API IndexNow lors des publications.

### 13. Aucune citation de sources externes dans les articles

**Impact :** ChatGPT et Google AI Overviews preferent citer des pages qui elles-memes citent des sources verifiables.
**Fix :** Ajouter des liens vers les publications originales quand des frameworks sont references (livre Challenger Sale de Dixon/Adamson, etudes LinkedIn Sales Solutions, benchmarks industrie).

### 14. FAQ en accordeon potentiellement invisible aux crawlers

**Probleme :** Si les reponses FAQ sont derriere des `<details>` ou des accordeons JS, les crawlers a execution JS limitee (Perplexity, GPTBot) pourraient ne pas les voir.
**Fix :** S'assurer que le texte complet des reponses est dans le HTML source meme quand visuellement collapse.

### 15. HowTo schema sur 8 pages -- retire de Google depuis sept. 2023

**Probleme :** Le schema HowTo ne genere plus de rich results Google. Il reste utile semantiquement sur la page methodologie principale mais ajoute du poids inutile sur les 6-7 articles.
**Fix :** Garder HowTo sur `/methode/setting-linkedin`. Retirer des articles ressources.

### 16. Schemas Organisation non unifies

**Probleme :** Deux schemas Organisation distincts : ProfessionalService (homepage) et Organization (a-propos). Pas de lien `@id` entre eux.
**Fix :** Utiliser `@id: "https://www.setting.live/#business"` comme reference croisee.

### 17. Cookie consent RGPD

**Probleme :** Google Analytics est integre mais aucun bandeau de consentement cookies n'est documente. La CNIL exige un opt-in explicite.
**Fix :** Implementer un bandeau de consentement conforme RGPD avant chargement de GA.

### 18. Incoherence de marque Setting.live vs ChallengersLab

**Probleme :** L'email utilise challengerslab.com, le LinkedIn pointe vers /company/challengerslab, mais le site est setting.live. Cette fragmentation reduit la reconnaissance d'entite par les IA.
**Fix :** Expliquer clairement la relation sur la page A propos. Considerer un email @setting.live.

---

## Issues basse priorite (optimiser quand possible)

### 19. Titre homepage trop long (73 caracteres)

**Fix :** Raccourcir a ~60 caracteres. Suggestion : "Setting LinkedIn B2B | RDV qualifies des la semaine 1"

### 20. Pas de metadata Twitter/X explicite

**Fix :** Ajouter `twitter: { site: '@handle', creator: '@handle' }` dans les metadata.

### 21. Logo en schema pointe vers une route Next.js

**Probleme :** `logo: '/opengraph-image'` est une route, pas une URL directe d'image.
**Fix :** Utiliser `logo: 'https://www.setting.live/logo.png'` (fichier image direct).

### 22. Pas de preconnect pour les origines tierces

**Fix :** Ajouter `<link rel="preconnect" href="https://www.googletagmanager.com">` et pour Calendly.

### 23. Video background sur homepage -- impact performance mobile

**Fix :** `preload="none"` sur mobile, poster statique, lazy loading.

### 24. Pas de `articleSection` ni `wordCount` dans les schemas Article

**Fix :** Ajouter ces proprietes a tous les 25 schemas Article.

### 25. Pas de tables HTML de comparaison

**Impact :** Google AI Overviews extrait directement les `<table>` HTML.
**Suggestion :** Ajouter un tableau Setting vs SDR interne vs Agence vs Outil automation sur /tarifs et /externaliser.

---

## Deep Dives par categorie

### AI Citability (62/100)

**Forces :**
- Contenu riche en statistiques specifiques (790 EUR/mois, 400+ RDV, 20-35% taux de reponse, ~100 connexions/semaine)
- FAQ structurees sur 3 pages majeures (19 Q&A au total)
- Methodologie detaillee en 9 etapes avec frameworks nommes (BANT, Challenger Sale)
- Glossaire avec definitions auto-contenues

**Faiblesses :**
- Les statistiques sont dispersees dans le texte narratif, pas dans des blocs extraits faciles a citer
- Les reponses FAQ commencent souvent par des explications detaillees au lieu d'une reponse directe en 1-2 phrases
- Pas de "answer target paragraphs" (phrase de reponse directe de 40-60 mots avant le developpement)
- Pas de tableaux comparatifs en HTML `<table>`
- Les claims statistiques ne citent pas de sources externes verifiables

**Recommandation cle :** Restructurer les passages statistiques en blocs autonomes et commencer chaque FAQ par une reponse directe d'une phrase avant le developpement.

---

### Brand Authority (12/100)

C'est le **goulot d'etranglement critique** du score GEO.

| Plateforme | Presence | Status |
|---|---|---|
| LinkedIn (entreprise) | Oui (challengerslab) | Sous-developpe |
| YouTube | Non | Absent |
| Reddit | Non | Absent |
| Wikipedia | Non | Absent |
| Wikidata | Non | Absent |
| Product Hunt | Non | Absent |
| G2 / Capterra | Non | Absent |
| Trustpilot | Non | Absent |
| Annuaires B2B FR | Non | Absent |
| Crunchbase | Non | Absent |
| Twitter/X | Non | Absent |

**Impact :** Les systemes IA comme ChatGPT, Perplexity et Gemini utilisent les mentions tierces pour valider qu'une entite est reelle et autoritaire. Avec quasi zero presence externe, Setting.live est techniquement accessible mais ne sera pas cite comme source.

**Plan d'action (3-6 mois) :**
1. Se faire lister dans 3-5 articles "Top agences prospection LinkedIn" (Salesdorado, Oscar Black, LicorneSociety)
2. Lancer une chaine YouTube (5-10 videos methodologie)
3. Poster regulierement sur Reddit (r/EntrepreneurFrancais, r/freelance)
4. Creer des profils G2 / Capterra (avec avis clients)
5. Developper la page LinkedIn ChallengersLab (posts hebdo, team complete)

---

### Content E-E-A-T (62/100)

| Dimension | Score | Forces | Faiblesses |
|---|---|---|---|
| Experience (17/25) | 68% | Metrics specifiques, process operationnels, outils nommes | Pas d'etudes de cas, pas de screenshots campagnes |
| Expertise (15/25) | 60% | 25+ articles, frameworks references, profondeur methodologique | Pas de credentials formels, pas de profils LinkedIn lies |
| Autorite (10/25) | 40% | Bonne architecture topicale interne | Zero signal d'autorite externe |
| Confiance (16/25) | 64% | Prix transparents, garantie, pages legales | SIRET manquant, pas de temoignages, pas d'avis tiers |

**Actions les plus impactantes :**
1. Ajouter des bylines auteur completes + pages auteur dediees
2. Publier 3-5 etudes de cas detaillees avec metriques
3. Completer les mentions legales (SIRET, adresse)
4. Ajouter des dates de publication/mise a jour visibles
5. Creer des liens LinkedIn pour chaque membre de l'equipe

---

### Technical GEO (88/100)

**Score le plus eleve** -- la fondation technique est excellente.

| Composant | Score | Detail |
|---|---|---|
| Crawlability (robots.txt + sitemap) | 98/100 | Tous les crawlers IA autorises explicitement. Sitemap bien structure |
| llms.txt | 78/100 | Excellent (tres rare !) mais manque les FAQ et le glossaire |
| SSR / Rendu | 78/100 | Next.js SSR mais homepage lourde en composants client |
| Meta tags | 90/100 | Complet (OG, hreflang, canonical). Titre homepage un peu long |
| Securite | 95/100 | HSTS, CSP, X-Frame-Options, permissions-policy -- exemplaire |
| URL structure | 95/100 | Propre, hierarchique, keyword-rich, redirections legacy |

**Le point d'attention principal** est le Hero de la homepage en `'use client'` avec framer-motion. Le H1 et le texte hero ne sont pas visibles aux crawlers IA qui n'executent pas JavaScript. Le llms.txt compense partiellement, mais le HTML devrait contenir le texte critique en server-rendered.

---

### Schema & Structured Data (62/100)

**Forces :**
- JSON-LD exclusif sur toutes les pages (bonne pratique)
- Diversite de types : Organization, FAQPage, HowTo, Article, Service, BreadcrumbList, DefinedTerm, CollectionPage, speakable
- Rendu cote serveur (pas de dependance JS pour le schema)
- Glossaire avec DefinedTerm -- implementation avancee

**Faiblesses critiques :**
- `sameAs` limite a 1 lien (devrait etre 5+)
- Conflit de prix sur /externaliser (500 vs 790 EUR)
- Person schemas sans `sameAs`, `image`, nom complet
- `speakable` absent des 25 articles
- HowTo sur 8 pages (retire de Google depuis sept. 2023)
- 2 schemas Organisation non relies par `@id`
- `unitText: 'HALF_DAY'` non standard Schema.org

---

### Platform Optimization (61/100)

**Meilleure plateforme :** Google AI Overviews (72/100) -- la structure de contenu est bien alignee avec l'extraction AIO.

**Pire plateforme :** Perplexity (48/100) -- zero validation communautaire (Reddit, forums, avis tiers), ce qui est le signal principal de Perplexity pour decider de citer une source.

**Lacune transversale :** L'absence de presence dans l'ecosysteme Google (YouTube, GBP, Google Scholar) impacte simultanement Gemini et AI Overviews. L'absence de presence Microsoft (LinkedIn entreprise developpe, IndexNow) impacte Bing Copilot.

---

## Quick Wins (a implementer cette semaine)

1. **Corriger le prix 500 -> 790 dans le schema Service de /externaliser** -- 5 min, elimine un conflit de donnees critique
2. **Ajouter `speakable` aux 25 schemas Article** -- 30 min, signale aux IA que le contenu est extractible
3. **Etendre `sameAs` Organisation a 5+ plateformes** -- 10 min, ameliore reconnaissance d'entite
4. **Ajouter SIRET et adresse complete aux mentions legales** -- 10 min, conformite legale + signal confiance
5. **Enrichir Person schemas avec nom complet et sameAs LinkedIn** -- 20 min, permet verification auteur par les IA

---

## Plan d'action 30 jours

### Semaine 1 : Corrections techniques critiques
- [ ] Corriger prix schema /externaliser (500 -> 790)
- [ ] Ajouter SIRET + adresse mentions legales
- [ ] Etendre sameAs Organisation (5+ liens)
- [ ] Enrichir Person schemas (nom complet, sameAs, image)
- [ ] Ajouter speakable aux 25 articles
- [ ] Extraire Hero H1 en Server Component
- [ ] Corriger logo schema (URL directe vs route)

### Semaine 2 : E-E-A-T et contenu
- [ ] Ajouter bylines auteur visibles sur tous les articles
- [ ] Afficher dates publication/mise a jour sur les articles
- [ ] Ajouter citations sources externes dans les articles
- [ ] Creer "answer target paragraphs" en debut de FAQ
- [ ] Ajouter FAQ et glossaire au llms-full.txt
- [ ] Retirer HowTo des 6 articles (garder sur methode)

### Semaine 3 : Presence de marque
- [ ] Creer profil Google Business (service a distance, zone France)
- [ ] Enrichir page LinkedIn ChallengersLab (description, team, lien)
- [ ] Premier post Reddit r/EntrepreneurFrancais (contenu methodologique)
- [ ] Implementer IndexNow pour Bing
- [ ] Verifier site dans Bing Webmaster Tools
- [ ] Contacter Salesdorado / Oscar Black pour inclusion annuaire

### Semaine 4 : Contenus a haute valeur GEO
- [ ] Publier 1 etude de cas detaillee avec metriques
- [ ] Ajouter tableaux comparatifs HTML (Setting vs SDR vs Agence vs Outil)
- [ ] Convertir headings methodologie en format question
- [ ] Implementer cookie consent RGPD
- [ ] Planifier creation chaine YouTube (scripts pour 5 videos)

---

## Annexe : Pages analysees

| URL | Titre | Issues GEO |
|---|---|---|
| / | Setting LinkedIn B2B - Prospection externalisee | Hero en client component, titre trop long |
| /methode/setting-linkedin | Notre methode complete (9 etapes) | HowTo ok, pas de speakable |
| /tarifs | Tarifs -- a partir de 790 EUR/mois | Pas de table comparaison HTML |
| /externaliser-prospection-linkedin | Externaliser sa prospection LinkedIn | **Prix schema incorrect (500 vs 790)** |
| /ressources | Ressources -- Prospection et setting LinkedIn B2B | CollectionPage ok |
| /a-propos | A propos de Setting | Person schemas incomplets |
| /glossaire | Glossaire | DefinedTerm bien implemente |
| /ressources/setting-commercial-b2b | Setting commercial B2B : definition et methode | Pas de byline, pas de speakable |
| /ressources/closing-b2b | Closing B2B : le guide complet | Pas de byline, pas de speakable |
| /ressources/prospection-linkedin-b2b | Prospection LinkedIn B2B : methode complete | HowTo a retirer, pas de speakable |
| /ressources/discovery-call-b2b | Discovery call B2B : structure et questions | HowTo a retirer |
| /ressources/script-setting-linkedin | Scripts de setting LinkedIn B2B | HowTo a retirer |
| /ressources/script-closing-b2b | Scripts et phrases de closing B2B | HowTo a retirer |
| /ressources/qualification-leads-b2b | Qualifier un lead en B2B 2026 | HowTo a retirer |
| /ressources/comment-devenir-setter-b2b | Comment devenir setter B2B | HowTo a retirer |
| /ressources/gestion-objections-b2b | Gerer les objections en vente B2B | Pas de speakable |
| /ressources/signal-achat-linkedin | C'est quoi un signal d'achat LinkedIn | Pas de speakable |
| /ressources/setter-b2b-definition | C'est quoi un setter en B2B | Pas de speakable |
| /ressources/challenger-sale-definition | Qu'est-ce que le Challenger Sale | Pas de speakable |
| /ressources/difference-setting-closing | Difference entre setting et closing | Pas de speakable |
| /ressources/cout-setter-b2b-prix | Cout d'un setter B2B en 2026 | Pas de speakable |
| /ressources/messages-linkedin-sans-reponse | Pourquoi vos messages n'obtiennent pas de reponses | Pas de speakable |
| /ressources/ia-methode-humain-setting-linkedin | IA, methode et humain | Pas de speakable |
| /ressources/relance-linkedin-b2b | Relance LinkedIn B2B | Pas de speakable |
| /ressources/closer-b2b | Closer B2B : definition et competences | Pas de speakable |
| /ressources/devenir-business-developer | Devenir business developer | Pas de speakable |
| /ressources/methodes-vente-b2b | Methodes de vente B2B | Pas de speakable |
| /ressources/methode-soncas | Methode SONCAS en B2B 2026 | Pas de speakable |
| /ressources/methode-spin-selling | SPIN Selling 2026 | Pas de speakable |
| /ressources/setting-humain-vs-automatisation-linkedin | Setting humain vs automatisation | Pas de speakable |
| /ressources/sdr-interne-vs-externalise | SDR interne vs externalise | Pas de speakable |
| /mentions-legales | Mentions legales | **SIRET manquant** |
| /politique-confidentialite | Politique de confidentialite | Cookie consent RGPD a implementer |
