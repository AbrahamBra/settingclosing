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

### 3. Pilier "Setting commercial B2B" (2026-03-26)

**URL survivante :** `/ressources/setting-commercial-b2b`
**Titre :** Setting commercial B2B : définition, méthode et programme complet
**Keywords ciblés :**

| Keyword | Volume | Position cible |
|---------|--------|---------------|
| setter definition | 50/mo | Top 3 |
| setting linkedin | 40/mo | Top 3 |
| setting commercial | 0 (early mover) | Top 1 |

**Articles fusionnés (301 → URL survivante) :**
- `/ressources/setting-linkedin-definition` — Setting LinkedIn : définition
- `/ressources/setter-b2b-definition` — C'est quoi un setter en B2B ?
- `/ressources/difference-setting-closing` — Différence entre setting et closing
- `/ressources/setting-commercial-linkedin` — Setting commercial LinkedIn

**Checklist consolidation :**
- [x] Article pilier réécrit (~5000 mots)
- [x] 301 redirects dans `next.config.ts`
- [x] Sitemap mis à jour (4 URLs supprimées, survivante priority 0.9)
- [x] Schema structured data : Article + FAQPage + BreadcrumbList
- [x] GEO : DefinedTerm, data-speakable, TL;DR quotable
- [x] Humanizer pass
- [x] Build Next.js : OK

---

### 4. Pilier "Closing B2B" (2026-03-26)

**URL survivante :** `/ressources/closing-b2b`
**Titre :** Closing B2B : le guide complet pour conclure en vente
**Keywords ciblés :**

| Keyword | Volume | Position cible |
|---------|--------|---------------|
| closing commercial | 210/mo | Top 5 |
| closer b2b | 170/mo | Top 5 |
| discovery call | 140/mo | Top 5 |
| gestion objections | 90/mo | Top 10 |

**Articles fusionnés (301 → URL survivante) :**
- `/ressources/closer-b2b` — Closer B2B : définition et compétences
- `/ressources/discovery-call-b2b` — Discovery call B2B
- `/ressources/gestion-objections-b2b` — Gérer les objections en vente B2B
- `/ressources/script-closing-b2b` — Scripts de closing B2B

**Checklist consolidation :**
- [x] Article pilier réécrit (~5000 mots)
- [x] 301 redirects dans `next.config.ts`
- [x] Sitemap mis à jour (4 URLs supprimées, survivante priority 0.9)
- [x] Schema structured data : Article + FAQPage + BreadcrumbList
- [x] GEO : DefinedTerm, HowTo, data-speakable, stat blocks
- [x] Humanizer pass
- [x] Build Next.js : OK

---

### 5. Pilier "Méthodes de vente B2B" (2026-03-26)

**URL survivante :** `/ressources/methodes-vente-b2b`
**Titre :** Méthodes de vente B2B : Challenger Sale, SPIN Selling, SONCAS
**Keywords ciblés :**

| Keyword | Volume | Position cible |
|---------|--------|---------------|
| methode soncas | 880/mo | Top 10 |
| spin selling | 590/mo | Top 10 |
| methode de vente | 720/mo | Top 10 |
| qualification leads | 50/mo | Top 3 |

**Articles fusionnés (301 → URL survivante) :**
- `/ressources/methode-soncas` — Méthode SONCAS en B2B
- `/ressources/methode-spin-selling` — SPIN Selling en B2B
- `/ressources/challenger-sale-definition` — Qu'est-ce que le Challenger Sale ?
- `/ressources/qualification-leads-b2b` — Qualifier un lead en B2B

**Checklist consolidation :**
- [x] Article pilier réécrit (~5000 mots)
- [x] 301 redirects dans `next.config.ts`
- [x] Sitemap mis à jour (4 URLs supprimées, survivante priority 0.9)
- [x] Schema structured data : Article + FAQPage + BreadcrumbList
- [x] GEO : DefinedTerm pour chaque méthode, HowTo, data-speakable
- [x] Humanizer pass
- [x] Build Next.js : OK

---

### 6. Pilier "Prospection LinkedIn B2B" (2026-03-26)

**URL survivante :** `/ressources/prospection-linkedin-b2b`
**Titre :** Prospection LinkedIn B2B : méthode complète en 2026
**Keywords ciblés :**

| Keyword | Volume | Position cible |
|---------|--------|---------------|
| prospection linkedin | 1300/mo | Top 10 |
| message prospection linkedin | 320/mo | Top 10 |
| relance linkedin | 110/mo | Top 5 |
| script prospection linkedin | 70/mo | Top 5 |

**Articles fusionnés (301 → URL survivante) :**
- `/ressources/messages-linkedin-sans-reponse` — Pourquoi vos messages LinkedIn n'obtiennent pas de réponses
- `/ressources/script-setting-linkedin` — Scripts de setting LinkedIn B2B
- `/ressources/relance-linkedin-b2b` — Relance LinkedIn B2B
- `/ressources/messages-prospection-linkedin-exemples` — Messages de prospection LinkedIn : exemples

**Checklist consolidation :**
- [x] Article pilier réécrit (~5000 mots)
- [x] 301 redirects dans `next.config.ts`
- [x] Sitemap mis à jour (4 URLs supprimées, survivante priority 0.9)
- [x] Schema structured data : Article + FAQPage + BreadcrumbList
- [x] GEO : DefinedTerm, HowTo, data-speakable, stat blocks
- [x] Humanizer pass
- [x] Build Next.js : OK

---

## Cycle avril 2026 — setting linkedin + clone lite

### 7. Pilier "Setting LinkedIn" — refresh additif (2026-04-23)

**URL pilier :** `/ressources/setting-linkedin`
**Titre :** Setting LinkedIn : méthode, exemples, prix, IA — guide complet 2026
**Objectif :** maintenir la position sur "setting linkedin" (keyword pilier) et capter la longue-traîne via 3 pages filles + 1 outil.

**Keywords longue-traîne ajoutés :**

| Keyword | Volume | URL dédiée |
|---------|--------|------------|
| setting linkedin exemples | 40/mo | /ressources/setting-linkedin-exemples |
| setting linkedin prix | 30/mo | /ressources/setting-linkedin-prix |
| setting linkedin ia | 20/mo | /ressources/setting-linkedin-ia |

**Nouvelles URLs (non-consolidation, longue-traîne) :**
- `/ressources/setting-linkedin-exemples` — Exemples de messages setting LinkedIn (~2500 mots)
- `/ressources/setting-linkedin-prix` — Combien coûte le setting LinkedIn (~2500 mots)
- `/ressources/setting-linkedin-ia` — IA et setting LinkedIn (~2500 mots)
- `/outils/clone-style-linkedin` — Générateur de message LinkedIn dans ton style (outil gratuit, priority 0.8)

**Refresh pilier (additif, zéro suppression) :**
- [x] `dateModified` bumpé à 2026-04-23
- [x] Speakable cssSelector étendu (+ h2, + .tldr)
- [x] HowTo JSON-LD ajouté (alongside Article/FAQPage/Breadcrumb)
- [x] Section "Cas concret 2026" (~400 mots : prospect → signal → message → conversation → RDV → résultat)
- [x] 3 nouvelles FAQ (prix, IA, externalisation) → +3 liens sortants vers longue-traîne
- [x] 3 liens contextuels en corps d'article vers les 3 pages filles

**Outil "Clone style LinkedIn" (version lite) :**
- [x] `/api/clone-lite` — Claude Haiku 4.5, rate-limit 3/jour/IP, analyse stylométrique (TTR, longueur mot, ratio questions)
- [x] `/api/waitlist-clone` — Resend, double envoi (user + admin), best-effort avec allSettled
- [x] UI dark theme (ButtonGlow, bg-bg-secondary), 3-5 posts inputs, copy + régénération + quota
- [x] Landing `/outils/clone-style-linkedin` — ~900 mots, JSON-LD WebApplication/HowTo/FAQ
- [x] OG image edge-rendered (1200×630)

**Checklist :**
- [x] Sitemap : +4 URLs, pillar `lastModified` bumpé
- [x] Maillage interne : liens contextuels depuis `comment-prospecter-sur-linkedin` et `signal-achat-linkedin` vers l'outil
- [x] 21 tests unitaires (fidelity, rate-limit, routes API)
- [x] Build Next.js : OK

**Maillage pilier → filles :**
- → /ressources/setting-linkedin-exemples (section "Exemples")
- → /ressources/setting-linkedin-prix (section "Combien ça coûte")
- → /ressources/setting-linkedin-ia (section "IA et méthode humaine")
- → /outils/clone-style-linkedin (CTA outil)

**Schema structured data (pilier) :** Article + FAQPage + BreadcrumbList + HowTo + speakable

---

## Structure de contenu actuelle

### Piliers consolidés (priority 0.9)
| URL | Titre | Priority | Dernière MAJ |
|-----|-------|----------|-------------|
| /ressources/setting-commercial-b2b | Setting commercial B2B | 0.9 | 2026-03-26 |
| /ressources/closing-b2b | Closing B2B | 0.9 | 2026-03-26 |
| /ressources/prospection-linkedin-b2b | Prospection LinkedIn B2B | 0.9 | 2026-03-26 |
| /ressources/methodes-vente-b2b | Méthodes de vente B2B | 0.9 | 2026-03-26 |
| /ressources/comment-devenir-setter-b2b | Devenir setter ou closer B2B | 0.8 | 2026-03-26 |
| /externaliser-prospection-linkedin | Externaliser sa prospection | 0.9 | 2026-03-26 |

### Articles standalone
| URL | Titre | Priority | Dernière MAJ |
|-----|-------|----------|-------------|
| /ressources/signal-achat-linkedin | Signaux d'achat LinkedIn | 0.7 | 2026-03-17 |
| /ressources/ia-methode-humain-setting-linkedin | IA, méthode et humain | 0.7 | 2026-03-17 |
| /ressources/setting-humain-vs-automatisation-linkedin | Setting humain vs automatisation | 0.7 | 2026-03-19 |
| /ressources/devenir-business-developer | Devenir business developer | 0.7 | 2026-03-18 |
| /ressources/comment-prospecter-sur-linkedin | Comment prospecter sur LinkedIn | 0.8 | 2026-03-25 |
| /ressources/agence-prospection-linkedin | Agence prospection LinkedIn | 0.8 | 2026-03-25 |
| /ressources/social-selling-linkedin-b2b | Social selling LinkedIn | 0.7 | 2026-03-25 |
| /ressources/automatisation-prospection-linkedin | Automatisation prospection LinkedIn | 0.7 | 2026-03-25 |

### Redirections actives (22 total)
| Source | Destination | Type |
|--------|-------------|------|
| /blog | /ressources | 301 |
| /blog/:slug | /ressources/:slug | 301 |
| /setting | /ressources/setting-commercial-b2b | 301 |
| /methode/nurturing | /methode/setting-linkedin | 301 |
| /methode | /methode/setting-linkedin | 302 |
| /ressources/setting-linkedin-definition | /ressources/setting-commercial-b2b | 301 |
| /ressources/setter-b2b-definition | /ressources/setting-commercial-b2b | 301 |
| /ressources/difference-setting-closing | /ressources/setting-commercial-b2b | 301 |
| /ressources/setting-commercial-linkedin | /ressources/setting-commercial-b2b | 301 |
| /ressources/closer-b2b | /ressources/closing-b2b | 301 |
| /ressources/discovery-call-b2b | /ressources/closing-b2b | 301 |
| /ressources/gestion-objections-b2b | /ressources/closing-b2b | 301 |
| /ressources/script-closing-b2b | /ressources/closing-b2b | 301 |
| /ressources/methode-soncas | /ressources/methodes-vente-b2b | 301 |
| /ressources/methode-spin-selling | /ressources/methodes-vente-b2b | 301 |
| /ressources/challenger-sale-definition | /ressources/methodes-vente-b2b | 301 |
| /ressources/qualification-leads-b2b | /ressources/methodes-vente-b2b | 301 |
| /ressources/messages-linkedin-sans-reponse | /ressources/prospection-linkedin-b2b | 301 |
| /ressources/script-setting-linkedin | /ressources/prospection-linkedin-b2b | 301 |
| /ressources/relance-linkedin-b2b | /ressources/prospection-linkedin-b2b | 301 |
| /ressources/messages-prospection-linkedin-exemples | /ressources/prospection-linkedin-b2b | 301 |
| /ressources/cout-setter-b2b-prix | /ressources/comment-devenir-setter-b2b | 301 |
| /ressources/comment-choisir-setter-linkedin | /ressources/comment-devenir-setter-b2b | 301 |
| /ressources/combien-coute-setting-linkedin | /ressources/comment-devenir-setter-b2b | 301 |
| /ressources/agence-setting-linkedin-vs-freelance | /externaliser-prospection-linkedin | 301 |
| /ressources/sdr-interne-vs-externalise | /externaliser-prospection-linkedin | 301 |
| /ressources/outils-setting-linkedin | /externaliser-prospection-linkedin | 301 |
