# GEO Audit Report: Setting (www.setting.live)

**Audit Date:** 2026-03-21
**URL:** https://www.setting.live
**Business Type:** B2B Agency / Services (LinkedIn prospecting outsourcing)
**Pages Analyzed:** 38
**Language:** French (fr-FR)

---

## Executive Summary

**Overall GEO Score: 52/100 (Poor)**

Setting.live possede une base technique excellente (Next.js SSR, robots.txt exemplaire, schemas JSON-LD, llms.txt) mais souffre de trois problemes fondamentaux qui plombent sa visibilite IA : (1) une autorite de marque quasi-inexistante en dehors du site, (2) une identite de marque fragmentee entre "Setting" et "ChallengersLab", et (3) des schemas structures quantitativement riches mais qualitativement faibles. Le contenu est genuinement bon pour la citation IA, mais aucun systeme IA ne citera un site qu'il ne peut pas valider comme entite de confiance.

### Score Breakdown

| Categorie | Score | Poids | Score Pondere |
|---|---|---|---|
| AI Citability | 72/100 | 25% | 18.0 |
| Brand Authority | 8/100 | 20% | 1.6 |
| Content E-E-A-T | 58/100 | 20% | 11.6 |
| Technical GEO | 83/100 | 15% | 12.5 |
| Schema & Structured Data | 38/100 | 10% | 3.8 |
| Platform Optimization | 50/100 | 10% | 5.0 |
| **Overall GEO Score** | | | **52.5/100** |

---

## Issues Critiques (A corriger immediatement)

### 1. Identite de marque fragmentee Setting/ChallengersLab
**Severite: CRITIQUE | Impact: Toutes les categories**

L'identite de marque est eclatee entre deux noms :
- **"Setting"** : nom de marque actuel, titre des pages, H1
- **"ChallengersLab"** : copyright footer (toutes les pages), LinkedIn (`/company/challengerslab`), `llms.txt` et `llms-full.txt` (titre H1), `alternateName` dans tous les schemas JSON-LD, mentions dans les bylines auteur

Les systemes IA effectuant une resolution d'entite ne peuvent pas determiner si "Setting" et "ChallengersLab" sont la meme entreprise. Cela dilue 100% des signaux d'autorite.

**Fichiers a modifier :**
- `app/layout.tsx` : copyright footer + `alternateName` dans JSON-LD global
- `public/llms.txt` et `public/llms-full.txt` : titre H1 et references
- LinkedIn : renommer `/company/challengerslab`

### 2. Zero presence de marque externe
**Severite: CRITIQUE | Impact: Brand Authority (-92 pts potentiels)**

Setting n'existe sur aucune plateforme que les IA utilisent pour valider les entites :
- Wikipedia, Reddit, YouTube, Twitter/X : aucune mention
- Google Business Profile : inexistant
- Trustpilot / G2 / Capterra : aucun profil
- Presse : zero mention
- Backlinks externes : zero detecte

### 3. Schemas dupliques sur toutes les pages
**Severite: CRITIQUE | Impact: Schema Score**

`layout.tsx` injecte le schema complet WebSite + ProfessionalService + 4 Offers (~3KB JSON-LD) sur les 37 pages. Google recommande WebSite sur la homepage uniquement.

### 4. Publisher logo manquant dans les schemas Article
**Severite: CRITIQUE | Impact: Rich Results Article bloques**

22+ articles ont un schema Article correct mais aucun n'inclut `publisher.logo` — propriete requise par Google pour les rich results.

---

## Issues Haute Priorite (Corriger dans la semaine)

### 5. Zero citations externes dans le contenu
Aucun article ne cite de source externe. Toutes les statistiques sont des affirmations sans attribution. Le Challenger Sale reference sans citer Dixon & Adamson. SPIN Selling sans citer Rackham.

### 6. Credentials auteur insuffisantes
Abraham seul auteur, decrit comme "Fondateur & Automatisation" — titre auto-attribue. Aucune certification, education, historique pro, ou profil LinkedIn personnel lie.

### 7. SIRET manquant sur mentions legales
Obligation legale pour les micro-entreprises francaises. Red flag de conformite.

### 8. llms.txt avec ancien nom de marque et URLs non-www
Les deux fichiers utilisent "ChallengersLab" en titre et toutes les URLs sans prefixe `www`.

### 9. Zero propriete `speakable` dans les schemas
Aucune property `speakable` — signal direct pour les assistants vocaux IA.

### 10. `sameAs` incorrect dans Organization schema
Unique lien `sameAs` pointe vers `linkedin.com/company/challengerslab` (ancien nom).

### 11. OG images manquantes sur 6+ pages
`/methode/*`, `/tarifs`, `/resultats`, `/a-propos`, `/glossaire` sans image OG. Pour un service LinkedIn, les previews sans image sont critiques.

---

## Issues Priorite Moyenne (Corriger dans le mois)

### 12. Pas de schema HowTo sur les pages methode
`/methode/setting-linkedin` : processus en 9 etapes = candidat ideal pour HowTo schema.

### 13. Pas d'IndexNow pour Bing
Chemin le plus rapide vers l'indexation Bing Copilot.

### 14. Pas de tableaux HTML de comparaison
Page `/tarifs` et articles comparatifs en prose. Les AI Overviews extraient les tables HTML.

### 15. Auteur unique pour 23 articles
Brahim et Abdelhay devraient co-signer dans leurs domaines.

### 16. Pas de preuves visuelles
Aucune capture de conversations LinkedIn, dashboards, ou graphiques avant/apres.

### 17. Dates de publication non visibles sur les articles
Presentes dans le schema mais pas affichees. Ajouter "Mis a jour le [date]" visible.

### 18. Pas de Content-Security-Policy header
Seul header securite majeur manquant.

### 19. Case studies anonymes
Les 3 etudes de cas utilisent des roles generiques sans nommer le client.

---

## Issues Basse Priorite

### 20. Bots AI manquants dans robots.txt
Manquent : `OAI-SearchBot`, `Applebot-Extended`, `CCBot`, `LinkedInBot`

### 21. Twitter Cards utilisent `summary` au lieu de `summary_large_image`

### 22. Pas de `next/image` (aucune image responsive/conversion auto)

### 23. Meta description > 160 chars sur 1 page

### 24. Reviews avec auteurs generiques dans le schema

### 25. Conflit /setting page vs redirect

---

## Category Deep Dives

### AI Citability (72/100)

**Forces :**
- Article pilier (~9,000 mots) excellent pour extraction IA : definitions auto-contenues, stats comparatives, FAQ structurees
- Glossaire (18 termes, DefinedTerm schema) score 88/100 en citabilite
- FAQ schemas sur homepage, tarifs, et pilier = blocs de reponse directement extractibles
- Benchmarks comparatifs (2-3% vs >20%, 0-4 vs 12-20 RDV/mois) tres quotables

**Faiblesses :**
- Pages methode narratives plutot que structurees en blocs extractibles
- Zero source externe = fiabilite percue reduite
- Case studies sans noms = non citables avec attribution

### Brand Authority (8/100)

Faiblesse catastrophique. Setting est invisible en dehors de son propre domaine. Aucune plateforme que les IA consultent pour valider les entites ne mentionne cette entreprise. Domain tres recent (1 jour), rebrand recent, aucune strategie de presence externe.

### Content E-E-A-T (58/100)

| Dimension | Score | Points cles |
|---|---|---|
| Experience | 16/25 | Case studies, outils proprietaires (Reactin, Spyer), anti-patterns. Manque : noms clients, screenshots |
| Expertise | 12/25 | Profondeur technique genuine. Manque : credentials, certifications, bio detaillee |
| Authoritativeness | 8/25 | 23 articles, schema. Manque : citations, presse, backlinks |
| Trustworthiness | 19/25 | HTTPS, legal, prix transparents, garantie. Manque : SIRET, adresse, coherence marque |

### Technical GEO (83/100)

**Excellent** : SSR Next.js (92/100), URL structure (95/100), robots.txt (8 bots IA), sitemap (38 URLs), headers securite, canonical coherent.

**A corriger** : llms.txt brand/URLs, OG images manquantes, CSP header, conflit /setting.

### Schema & Structured Data (38/100)

Quantitativement riche (12 types, 37 pages), qualitativement faible :
- Schema duplique sur chaque page
- `alternateName: "ChallengersLab"` partout = desastre d'identite
- `publisher.logo` manquant = rich results bloques
- Zero `speakable`, un seul `sameAs` incorrect
- Pas de `@id` cross-referencing, pas de `SearchAction`, pas de `logo`

### Platform Optimization (50/100)

| Plateforme | Score | Bloqueur principal |
|---|---|---|
| Google AI Overviews | 62/100 | Manque tables HTML + domain authority |
| ChatGPT Web Search | 51/100 | Zero autorite externe |
| Bing Copilot | 48/100 | Pas d'IndexNow |
| Google Gemini | 45/100 | Brand authority bloque |
| Perplexity AI | 44/100 | Zero sources citees |

---

## Quick Wins (Implementer cette semaine)

| # | Action | Temps | Impact |
|---|---|---|---|
| 1 | "ChallengersLab" -> "Setting" dans llms.txt, llms-full.txt, footer, alternateName | 30 min | +5-8 pts |
| 2 | Ajouter SIRET dans mentions legales | 5 min | +2 pts |
| 3 | Ajouter `publisher.logo` aux schemas Article | 15 min | Rich results |
| 4 | Ajouter OAI-SearchBot, Applebot-Extended, CCBot a robots.txt | 5 min | +2 pts |
| 5 | Deplacer schema global de layout.tsx vers homepage | 30 min | +5 pts |
| 6 | Corriger URLs www dans llms.txt et llms-full.txt | 10 min | +3 pts |
| 7 | Creer Google Business Profile | 30 min | +5 pts Brand |

## Plan d'action 30 jours

### Semaine 1 : Fondation identitaire
- [ ] Unifier marque "ChallengersLab" -> "Setting" partout
- [ ] Ajouter SIRET et adresse sur mentions legales
- [ ] Corriger `publisher.logo` dans schemas Article
- [ ] Deplacer schema global vers homepage
- [ ] Ajouter bots manquants dans robots.txt
- [ ] Creer Google Business Profile
- [ ] Implementer IndexNow pour Bing

### Semaine 2 : Autorite externe
- [ ] Creer profil Trustpilot, demander 5+ avis clients
- [ ] Renommer page LinkedIn vers slug "setting"
- [ ] Creer compte Twitter/X
- [ ] Publier 1 video YouTube
- [ ] Soumettre article invite (Maddyness, BPI France, Journal du Net)
- [ ] Ajouter `sameAs` pour tous les nouveaux profils

### Semaine 3 : Contenu enrichi
- [ ] Ajouter 2-3 citations externes par article
- [ ] Creer pages auteur detaillees (/equipe/abraham, /equipe/brahim, /equipe/abdelhay)
- [ ] Ajouter schema HowTo sur /methode/setting-linkedin
- [ ] Ajouter `speakable` sur FAQ et definitions
- [ ] Convertir comparaisons en `<table>` HTML sur /tarifs
- [ ] Afficher dates de publication sur tous les articles

### Semaine 4 : Optimisation plateforme
- [ ] Ajouter OG images sur pages methode, tarifs, resultats, a-propos, glossaire
- [ ] Diversifier les bylines
- [ ] Ajouter screenshots redactes LinkedIn/dashboards
- [ ] Implementer CSP header
- [ ] Obtenir 2-3 clients nommes avec logo
- [ ] Verifier indexation Google Search Console

---

## Projection d'amelioration

| Etape | GEO Score |
|---|---|
| Actuel | **52/100** |
| Apres Quick Wins (S1) | ~65/100 |
| Apres Autorite externe (S2) | ~72/100 |
| Apres Contenu enrichi (S3) | ~78/100 |
| Apres Optimisation plateforme (S4) | ~82/100 |

---

## Appendice : Pages analysees

| URL | Issues GEO |
|---|---|
| / | Brand split, schema duplique |
| /tarifs | Pas d'OG image, pas de table HTML |
| /resultats | Reviews auteurs generiques |
| /methode/setting-linkedin | Pas de HowTo schema, pas d'OG image |
| /methode/setting-telephonique | Pas d'OG image |
| /methode/nurturing | Pas d'OG image |
| /ressources/setting-commercial-b2b | Zero sources externes, byline ChallengersLab |
| /ressources/closing-b2b | Liens vers /setting |
| /ressources/challenger-sale-definition | Citation manquante Dixon & Adamson |
| /ressources/methode-spin-selling | Citation manquante Rackham |
| /ressources/methode-soncas | Citation manquante source originale |
| /a-propos | Bios trop courtes, pas de credentials |
| /glossaire | DefinedTerm excellent (88/100 citabilite) |
| /mentions-legales | SIRET manquant |
| 20+ autres articles ressources | Zero sources externes, byline unique |
