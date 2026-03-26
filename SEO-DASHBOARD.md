# SEO Dashboard — setting.live

> Suivi des consolidations SEO et de la structure de contenu.

---

## Consolidations effectuées

### 1. Pilier "Devenir setter ou closer B2B" (2026-03-26)

**URL survivante :** `/ressources/comment-devenir-setter-b2b`
**Titre :** Devenir setter ou closer B2B en 2026 : le guide complet
**Keywords ciblés :**

| Keyword | Volume | Position cible |
|---------|--------|---------------|
| devenir closer | 260/mo | Top 5 |
| formation closer | 140/mo | Top 5 |
| comment devenir setter | 30/mo | Top 3 |

**Articles fusionnés (301 → URL survivante) :**
- `/ressources/cout-setter-b2b-prix` — Coût d'un setter B2B
- `/ressources/comment-choisir-setter-linkedin` — Comment choisir son setter LinkedIn
- `/ressources/combien-coute-setting-linkedin` — Combien coûte le setting LinkedIn

**Checklist consolidation :**
- [x] Article pilier réécrit (~5000 mots, 9 sections, 10 FAQ)
- [x] 301 redirects dans `next.config.ts`
- [x] Sitemap mis à jour (3 URLs supprimées, survivante priority 0.8)
- [x] `llms.txt` + `llms-full.txt` mis à jour
- [x] Références croisées mises à jour (13 fichiers)
- [x] Anciens dossiers supprimés
- [x] OG image entries nettoyées dans `[slug]/opengraph-image.tsx`
- [x] `BlogContent.tsx` nettoyé (3 entrées supprimées)
- [x] Build Next.js : OK

**Maillage interne du pilier :**
- → /ressources/closing-b2b
- → /ressources/closer-b2b
- → /ressources/setter-b2b-definition
- → /ressources/gestion-objections-b2b
- → /ressources/discovery-call-b2b
- → /ressources/setting-humain-vs-automatisation-linkedin
- → /ressources/sdr-interne-vs-externalise
- → /tarifs
- → /setting

**Schema structured data :** Article + FAQPage + BreadcrumbList

---

### 2. Pilier "Externaliser sa prospection" (2026-03-26)

**Page pilier :** `/externaliser-prospection-linkedin`

**Keywords cibles :**
| Keyword | Volume/mois | Position actuelle |
|---------|------------|-------------------|
| externaliser prospection commerciale | 170 | a tracker |
| agence prospection b2b | 140 | a tracker |
| sdr commercial | 70 | a tracker |

**Articles fusionnes (301 → pilier) :**
| URL absorbee | Contenu recupere | Ancre sur pilier |
|-------------|------------------|-----------------|
| /ressources/agence-setting-linkedin-vs-freelance | Comparatif agence vs freelance, tableau, decision criteria, FAQ | #agence-vs-freelance |
| /ressources/sdr-interne-vs-externalise | Cout reel SDR (salaire, charges, ramp-up, turnover), piege du moins cher, FAQ | #sdr-commercial |
| /ressources/outils-setting-linkedin | Stack Reactin + Make + BreakCold, flux 4 etapes, couts | #outils |

**Actions :**
- [x] Page pilier reecrite avec contenu fusionne (3 nouvelles sections)
- [x] 301 redirects dans next.config.ts
- [x] Sitemap mis a jour (3 URLs retirees, date pilier → 2026-03-26)
- [x] Liens internes mis a jour (11 fichiers, ~20 liens)
- [x] BlogContent.tsx : 3 articles retires de la liste blog
- [x] FAQ schema enrichi (10 questions, couvrant les 3 keywords)
- [x] Humanizer pass
- [x] Build OK

**Liens internes vers le pilier (maillage) :**
- /equipe/abraham-brakha → #sdr-commercial
- /setting → #sdr-commercial
- /ressources/combien-coute-setting-linkedin → #sdr-commercial
- /ressources/automatisation-prospection-linkedin → #outils
- /ressources/comment-prospecter-sur-linkedin → #outils
- /ressources/agence-prospection-linkedin → #sdr-commercial, #agence-vs-freelance
- /ressources/cout-setter-b2b-prix → #sdr-commercial
- /ressources/comment-choisir-setter-linkedin → #sdr-commercial
- /ressources/setting-linkedin-definition → #outils, #agence-vs-freelance
- /ressources/setting-humain-vs-automatisation-linkedin → #sdr-commercial

---

## Structure de contenu actuelle

### Piliers principaux
| URL | Titre | Priority | Dernière MAJ |
|-----|-------|----------|-------------|
| /ressources/setting-commercial-b2b | Setting commercial B2B | 0.8 | 2026-03-17 |
| /ressources/closing-b2b | Closing B2B | 0.8 | 2026-03-18 |
| /ressources/comment-devenir-setter-b2b | Devenir setter ou closer B2B | 0.8 | 2026-03-26 |
| /ressources/setting-linkedin-definition | Setting LinkedIn : définition | 0.8 | 2026-03-25 |
| /ressources/setting-commercial-linkedin | Setting commercial LinkedIn | 0.8 | 2026-03-25 |
| /ressources/comment-prospecter-sur-linkedin | Comment prospecter sur LinkedIn | 0.8 | 2026-03-25 |
| /ressources/agence-prospection-linkedin | Agence prospection LinkedIn | 0.8 | 2026-03-25 |
| /ressources/methodes-vente-b2b | Méthodes de vente B2B | 0.7 | 2026-03-18 |

### Redirections actives
| Source | Destination | Type |
|--------|-------------|------|
| /blog | /ressources | 301 |
| /blog/:slug | /ressources/:slug | 301 |
| /setting | /ressources/setting-commercial-b2b | 301 |
| /methode/nurturing | /methode/setting-linkedin | 301 |
| /methode | /methode/setting-linkedin | 302 |
| /ressources/cout-setter-b2b-prix | /ressources/comment-devenir-setter-b2b | 301 |
| /ressources/comment-choisir-setter-linkedin | /ressources/comment-devenir-setter-b2b | 301 |
| /ressources/combien-coute-setting-linkedin | /ressources/comment-devenir-setter-b2b | 301 |
| /ressources/agence-setting-linkedin-vs-freelance | /externaliser-prospection-linkedin | 301 |
| /ressources/sdr-interne-vs-externalise | /externaliser-prospection-linkedin | 301 |
| /ressources/outils-setting-linkedin | /externaliser-prospection-linkedin | 301 |
