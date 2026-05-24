# Historique des articles SEO — setting.live

> Suivi des articles publiés dans le cadre du plan éditorial cadence 2/semaine. Mis à jour à chaque publication.

---

## Légende statuts

- 🟢 **Live** : publié en prod, deploy confirmé
- 🟡 **GSC submitted** : Request Indexing fait dans Search Console
- 🔵 **Indexed** : confirmé indexé par Google (visible dans GSC Pages)
- 📊 **Measured** : mesure de position effectuée à J+28 post-deploy

---

## Articles publiés

### Article #1 — Message LinkedIn B2B : la séquence en 5 phases (2026)

| Champ | Valeur |
|---|---|
| URL | https://www.setting.live/ressources/message-linkedin-b2b |
| Publi | 2026-05-24 |
| Mots | ~5 400 |
| Statut | 🟢 Live · 🟡 GSC submitted |
| Cluster | Outbound LinkedIn |
| Keywords cibles | `message linkedin b2b`, `message linkedin b to b`, `modèle message linkedin prospection b2b français` |
| Baseline GSC (28j pré-deploy) | 9 imp / pos 14 sur `message linkedin b to b` |
| Schemas | Article + FAQPage + Breadcrumb + speakable |
| Maillage | → /ressources/setting-linkedin (pilier), /ressources/prospection-linkedin-b2b, /ressources/setting-definition |
| Spécificités | 5 phases chronologiques (Phase 0 liste, M1, creusement, call, relances, sortie) — 8 scénarios étiquetés outbound/warm/inbound + source A/B/C/D |

### Article #2 — Liste de prospection LinkedIn B2B : les 4 sources qui marchent en France en 2026

| Champ | Valeur |
|---|---|
| URL | https://www.setting.live/ressources/liste-prospection-linkedin-b2b |
| Publi | 2026-05-24 |
| Mots | ~4 500 |
| Statut | 🟢 Live · 🟡 GSC à soumettre |
| Cluster | Outbound LinkedIn |
| Keywords cibles | `liste prospection b2b`, `scraping linkedin`, `scraping linkedin légal`, `outil scraping linkedin` |
| Baseline GSC | nouvelle requête, à mesurer J+28 |
| Schemas | Article + FAQPage + Breadcrumb + speakable |
| Maillage | → /ressources/message-linkedin-b2b, /ressources/setting-linkedin, /ressources/prospection-linkedin-b2b |
| Spécificités | 4 sources détaillées (A audience scrapée concurrent, B commentateurs lead magnet, C Sales Nav+trigger, D event), outils nommés (Phantombuster, Captain Data, Evaboot, Reactin, Spyer), section RGPD/CGU LinkedIn, 3 paliers maturité |

---

## Articles à venir (plan 7 prochains, cadence 2/semaine)

### À écrire S2 (cette semaine — fin)

#### Article #3 — Trouver des clients sur LinkedIn en B2B : le playbook 2026
- Keyword cible principal : `trouver des clients sur linkedin` (volume FR mid-high, 250-500/mois)
- Angle : playbook end-to-end (inbound + outbound + conversion) pour fondateurs / freelances B2B
- Mots estimés : ~4 500
- À publier : avant fin semaine 2

### À écrire S3

#### Article #4 — Prospection LinkedIn automatique : ce qui marche encore en France et ce qui ne marche plus
- Keyword cible : `prospection automatique linkedin` (50/mois FR, position actuelle 86 — gros gap)
- Angle : honnête, anti-marketing, ce qui rank vraiment vs ce qui détruit ton compte
- À publier : début semaine 3

#### Article #5 — Prospecter des dirigeants de PME B2B sur LinkedIn (le guide 2026)
- Keyword cible : `prospection linkedin pour pme b2b` (low mais buyer pur, position 14)
- Angle : spécificités PME (taille, accessibilité dirigeant, cycle court)
- À publier : fin semaine 3

### À écrire S4

#### Article #6 — Stratégie de prospection LinkedIn B2B : le playbook tactique 2026
- Keyword cible : `stratégie prospection linkedin b2b` (position 21 — à pousser top 10)
- Angle : stratégique haut-funnel, vs tactique terrain
- À publier : début semaine 4

#### Article #7 — Sales Navigator B2B : les 7 filtres méconnus qui sortent les bonnes listes
- Keyword cible : `sales navigator b2b`, `sales navigator filtres`
- Angle : technique, buyer (capture intention "outil")
- À publier : fin semaine 4

### À écrire S5

#### Article #8 — Agences de prospection LinkedIn en France : comment choisir en 2026
- Keyword cible : `agence prospection linkedin` (140/mois FR, position 16 — pousser top 10)
- Angle : critères de choix, pas de comparatif nommé (éviter conflit concurrentiel)
- À publier : début semaine 5

---

## Métriques de référence (28j pré-plan, 25/04 → 22/05 2026)

| KPI | Baseline |
|---|---|
| Clics | 24 |
| Impressions | 1 233 |
| CTR | 1,95 % |
| Position moyenne | 14 |
| Top 3 keywords | 3 |
| Pays avec clics | 6 (France 17 clics, autres < 4) |

## Cibles M+1 (re-mesure fin juin 2026)

| KPI | Cible |
|---|---|
| Clics 28j | 50+ |
| CTR | 3 %+ |
| Position moyenne | 11 |
| Top 3 keywords | 5+ |

---

## Règles d'or à tenir sur chaque article

1. **Zéro tic IA** — scan multi-itérations avant chaque deploy (~200 patterns, voir cleanup standard)
2. **Pas de messages/scripts fabriqués** — frameworks, principes, pièges, jamais de templates copy-paste
3. **Outils nommés OK** (Phantombuster, Sales Nav, Reactin, Spyer, etc.) — Setting capture le SEO sans révéler son process exact
4. **Pas de tutoriel pas-à-pas** — montrer la complexité, pas la recette
5. **Anti-IA tone** — peer-to-peer, opinions tranchées, phrases courtes, registres mixés
6. **Maillage interne systématique** vers pilier `/ressources/setting-linkedin` (protéger position 3 actuelle)
7. **Schemas complets** : Article + FAQPage + Breadcrumb + speakable + DefinedTerm/HowTo si pertinent
8. **Sources externes** : LinkedIn Sales Solutions, HubSpot, CNIL (selon sujet), données internes Setting
9. **Sitemap update** + dateModified bumpé à chaque publication

---

## Procédure post-publication

À chaque article publié :

1. Soumettre URL dans GSC (URL Inspection → Request Indexing)
2. Resoumettre `sitemap.xml` dans GSC Sitemaps
3. Mettre à jour ce fichier (statut → 🟡 GSC submitted)
4. À J+7 : vérifier dans GSC Pages que l'URL est indexée (🔵 Indexed)
5. À J+28 : mesurer position dans GSC, comparer baseline (📊 Measured)
6. Si position < 30 : envisager refresh / linkbuilding ciblé

---

## Historique deploys

- 2026-05-24 — Phase 0 cleanup ChallengersLab + sameAs + mentions légales
- 2026-05-24 — Phase 1 titres/metas + 2 nouvelles pages (setting-definition + script-linkedin)
- 2026-05-24 — Phase 2 bylines + speakable + sources externes + HowTo
- 2026-05-24 — Article #1 publié (refonte 5 phases + Phase 0 liste)
- 2026-05-24 — Article #2 publié (liste outbound)
- 2026-05-24 — Cleanup tics IA itération 1-7
