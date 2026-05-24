# Design — SEO « setting linkedin » + intégration VoiceClone lite

**Date:** 2026-04-23
**Branche:** `claude/epic-hypatia-26962a`
**Auteur:** Claude + Abraham Brakha

## 1. Contexte et objectif

Le site `setting.live` possède déjà un écosystème SEO riche autour du mot-clé « setting linkedin » (pilier de 4 800 mots, 9 articles satellites, schemas Article/FAQ/Breadcrumb, consolidations 301 historiques). Le trafic stagne et la position sur la requête principale « setting linkedin » doit progresser. En parallèle, un SaaS VoiceClone (dossier externe `C:/Users/abrah/AhmetA`) clone le style d'écriture LinkedIn via un pipeline Claude + Voyage + Supabase ; il n'est pas encore en production publique.

**Objectifs mesurables :**

- Gagner de la longue-traîne sur « setting linkedin » avec 3 nouvelles pages ciblées.
- Refresh du pilier pour signaler de la fraîcheur à Google et étendre l'éligibilité aux rich results (HowTo).
- Lancer un outil gratuit public inspiré de VoiceClone (version lite) qui serve de lead magnet et prépare le terrain au futur lancement SaaS d'AhmetA.

**Hors scope explicite :**

- Refonte design globale.
- Intégration du pipeline AhmetA complet (checks déterministes, rewrite, graphe de connaissances, RAG Voyage+pgvector, consolidation).
- Authentification, comptes utilisateur, billing.
- Dashboard admin / back-office pour la waitlist.
- Migration des pages existantes, A/B testing.

## 2. Décisions validées avec l'utilisateur

| Décision | Choix retenu |
|---|---|
| Angle d'intégration VoiceClone | Free tool SEO magnet (option A) + SEO package complet |
| 3 nouvelles pages longue-traîne | `setting-linkedin-exemples`, `setting-linkedin-prix`, `setting-linkedin-ia` |
| CTA VoiceClone sur free tool | « Version longue bientôt dispo — réserve ta place » (waitlist, pas de lien vers l'app Svelte externe) |
| Stockage leads waitlist | Pas de DB. Resend envoie notif à `a.brakha@challengerslab.com` + confirmation à l'user |
| Rate limiting free tool | 3 générations / 24h / IP, in-memory Map côté route handler |
| LLM | Claude Haiku 4.5 (`claude-haiku-4-5-20251001`) en direct, sans pipeline AhmetA |
| Refonte visuelle du site | Non |

## 3. Architecture

### 3.1 Vue d'ensemble

Trois livrables indépendants, expédiables séparément :

1. **Contenu SEO** (3 nouvelles pages + refresh pilier + maillage) — pur travail Next.js + JSON-LD.
2. **Outil gratuit VoiceClone-lite** — 1 page Next.js + 1 composant React client + 2 routes API.
3. **Plomberie transverse** — sitemap, IndexNow, `.env.example`, linking interne.

Chaque livrable peut être mergé indépendamment. Le contenu SEO n'a aucune dépendance technique sur l'outil ; l'outil peut être lancé avant ou après les nouvelles pages.

### 3.2 Outil gratuit — architecture technique

```
Utilisateur
   │
   ▼
/outils/clone-style-linkedin (Next.js RSC + client component)
   │
   │  (fetch)
   ▼
/api/clone-lite (Next.js route handler)
   │
   ├── Rate limit check (in-memory Map, clé = IP, TTL 24h)
   ├── Appel Anthropic Claude Haiku 4.5
   └── Retour JSON { message, fidelityScore }
/api/waitlist-clone (Next.js route handler)
   │
   ├── Validation email (zod ou regex simple)
   ├── Resend.emails.send → user (confirmation)
   └── Resend.emails.send → a.brakha@challengerslab.com (notif lead)
```

**Justification des choix :**

- **Pas de Supabase** : aucun storage persistant n'est nécessaire pour le MVP. Les emails partent directement dans la boîte d'Abraham, qui copie-colle dans son CRM au rythme du volume. Si le volume explose on ajoutera une table.
- **Pas de Voyage/pgvector/graphe** : on livre un « style transfer » one-shot via few-shot prompting. Même valeur perçue utilisateur, zéro dépendance sur l'infra AhmetA.
- **In-memory rate limit** : suffisant pour le volume attendu (< 1000 générations/jour) ; les serverless Next.js sur Vercel peuvent perdre l'état entre deux cold starts, mais c'est acceptable pour un MVP. Upstash Redis à ajouter si abus détecté. **Runtime : Node.js (pas Edge)** — la Map in-memory nécessite une isolation process-level, pas compatible avec les Edge workers multi-régions.
- **Claude Haiku 4.5** : rapide, peu cher, suffisant pour du style transfer sur 50-80 mots.

**Règle rate limit explicite :** le compteur 3/24h/IP couvre toutes les générations, régénérations incluses. Le bouton « régénérer (2 max) » est une limite UX par session (empêcher le spam de clics), pas un budget séparé côté serveur.

### 3.3 Format de la réponse API `/api/clone-lite`

**Request :**

```json
{
  "posts": ["post 1 texte complet", "post 2", "post 3"],
  "targetContext": "Prospect qui a réagi au post X de [concurrent], DG d'une PME industrielle 50-200 pers"
}
```

**Response (200) :**

```json
{
  "message": "Bonjour [prénom],\n\n...",
  "fidelityScore": {
    "avgWordLength": 4.2,
    "questionRatio": 0.3,
    "ttr": 0.71
  }
}
```

**Calcul du `fidelityScore` (déterministe, côté serveur après génération) :**

- `avgWordLength` : moyenne arithmétique du nombre de caractères par mot sur le message généré (split sur `\s+`, filtrer empty)
- `questionRatio` : nombre de phrases se terminant par `?` / nombre total de phrases (split sur `[.!?]`)
- `ttr` (type-token ratio) : tokens uniques / tokens totaux après lowercasing et dépunctuation — indicateur simple de diversité lexicale

Chaque métrique comparée à la même métrique calculée sur les posts source de l'utilisateur → UI affiche un delta en pourcentage (« 92% de fidélité stylistique » vs ton corpus). Volontairement approximatif, pas l'algo complet d'AhmetA.

**Errors :**

- 400 : posts manquants (< 3) ou trop courts (< 50 caractères chacun)
- 429 : rate limit atteint
- 500 : erreur Anthropic (message générique, log côté serveur)

### 3.4 Format de la réponse API `/api/waitlist-clone`

**Request :**

```json
{
  "email": "user@example.com",
  "postsSample": "optionnel, posts collés pour contexte lead"
}
```

**Response (200) :** `{ "ok": true }`

**Errors :**

- 400 : email invalide
- 500 : Resend down (fallback : log + retour 200 pour pas bloquer l'UX ; idempotent OK)

## 4. Structure des fichiers

### Fichiers créés

```
app/
├── ressources/
│   ├── setting-linkedin-exemples/page.tsx        # Nouvelle page longue-traîne
│   ├── setting-linkedin-prix/page.tsx            # Nouvelle page longue-traîne
│   └── setting-linkedin-ia/page.tsx              # Nouvelle page longue-traîne
├── outils/
│   └── clone-style-linkedin/
│       ├── page.tsx                              # Landing + outil
│       └── opengraph-image.tsx                   # OG auto-généré
└── api/
    ├── clone-lite/route.ts                       # LLM endpoint
    └── waitlist-clone/route.ts                   # Resend endpoint

components/
└── CloneStyleForm.tsx                            # Client component outil

.env.example                                      # Ajout ANTHROPIC_API_KEY
```

### Fichiers modifiés

```
app/
├── ressources/setting-linkedin/page.tsx          # Refresh : dateModified, bloc cas concret, FAQ+3, HowTo schema, speakable
├── ressources/ia-methode-humain-setting-linkedin/page.tsx  # Lien sortant vers /outils/clone-style-linkedin
├── ressources/outils-setting-linkedin/page.tsx   # Lien sortant vers /outils/clone-style-linkedin
└── sitemap.ts                                    # Ajout 4 nouvelles URLs

package.json                                      # Ajout dépendance @anthropic-ai/sdk
```

## 5. Contenu des 3 nouvelles pages longue-traîne

Chacune suit le template existant (voir `app/ressources/setting-linkedin/page.tsx` pour référence) :

- Metadata complète (title, description, OG, Twitter, canonical, languages)
- Article + FAQPage + BreadcrumbList JSON-LD
- NavbarBlog + Footer + AuthorBlock + CtaArticle + RelatedArticles + TldrBox
- speakable cssSelector
- 2 000 à 3 000 mots, 6-8 H2, FAQ finale

**Particularités par page :**

- **`setting-linkedin-exemples`** : 5 scénarios concrets (signal réaction, changement de poste, visite profil, post viral, commentaire). Pour chaque : contexte → message exact → résultat chiffré. Cible mid-funnel.
- **`setting-linkedin-prix`** : comparatif chiffré interne vs agence vs freelance, calculateur statique (tableau), fourchettes 2026, FAQ bottom-funnel. Maillage fort vers `/tarifs` et `/externaliser-prospection-linkedin`.
- **`setting-linkedin-ia`** : équilibre humain/IA, place du clone de style, pourquoi le 100% automatisé échoue. CTA natif vers `/outils/clone-style-linkedin`.

## 6. Refresh du pilier `/ressources/setting-linkedin`

Strictement additif. Pas de réécriture des sections existantes.

1. `dateModified: '2026-04-23'`
2. Nouveau bloc H2 « Cas concret 2026 » (~400 mots) après la section méthode, avant la FAQ
3. FAQ : +3 questions (« Combien coûte le setting LinkedIn ? » → `/ressources/setting-linkedin-prix` ; « Peut-on automatiser le setting LinkedIn ? » → `/ressources/setting-linkedin-ia` ; « Setting LinkedIn vs SDR classique ? » → `/externaliser-prospection-linkedin`)
4. JSON-LD `HowTo` ajouté à côté du JSON-LD Article existant (5 étapes du setting déjà structurées dans le contenu)
5. `speakable.cssSelector` étendu : `['h1', '[data-speakable]', '.faq-answer', '.tldr', 'h2']`
6. 3 nouveaux liens sortants contextuels vers les 3 nouvelles pages longue-traîne

## 7. Outil gratuit — design UX

**Page `/outils/clone-style-linkedin` :**

```
┌─────────────────────────────────────────────┐
│ Navbar (existant)                           │
├─────────────────────────────────────────────┤
│ H1 : Générateur de message LinkedIn dans    │
│ ton style — clone IA gratuit                │
│                                             │
│ Sous-titre : Colle 3 de tes posts, décris   │
│ ton prospect, on écrit le message.          │
│                                             │
│ ┌─── <CloneStyleForm /> ─────────────────┐  │
│ │ [Textarea] Post 1                     │  │
│ │ [Textarea] Post 2                     │  │
│ │ [Textarea] Post 3                     │  │
│ │ [+ Ajouter un post (max 5)]           │  │
│ │                                       │  │
│ │ [Textarea] Contexte prospect          │  │
│ │                                       │  │
│ │ [Bouton] Générer mon message          │  │
│ └───────────────────────────────────────┘  │
│                                             │
│ [Résultat : message + fidelity score]       │
│ [Bouton : régénérer (2 max)]                │
│                                             │
│ [Bloc waitlist VoiceClone]                  │
│ Version longue avec apprentissage continu   │
│ (graphe de connaissances, RAG, etc.)        │
│ → bientôt dispo. [Input email] [Rejoindre]  │
│                                             │
├─────────────────────────────────────────────┤
│ Rich content (~800 mots) :                  │
│ - Comment ça marche (H2 + HowTo schema)     │
│ - Pourquoi un humain reste nécessaire       │
│ - Limites de cette version lite             │
│ - FAQ                                       │
│                                             │
│ Footer (existant)                           │
└─────────────────────────────────────────────┘
```

**États du formulaire :**

- `idle` → boutons actifs
- `loading` → spinner, bouton disabled
- `success` → affichage résultat + CTA régénérer
- `error` → message humain (rate limit : « Reviens demain ou dis-nous ce que tu veux améliorer »)

**Validation côté client :**

- Minimum 3 posts, chacun ≥ 50 caractères
- Contexte ≥ 20 caractères
- Email regex basique pour waitlist

## 8. Maillage interne

### Vers `/outils/clone-style-linkedin`

- `app/ressources/setting-linkedin/page.tsx` — section « outils » + CTA mid-article
- `app/ressources/setting-linkedin-exemples/page.tsx` — CTA natif après les exemples
- `app/ressources/setting-linkedin-prix/page.tsx` — CTA « teste gratuitement avant d'investir »
- `app/ressources/setting-linkedin-ia/page.tsx` — CTA dominant (sujet naturel)
- `app/ressources/ia-methode-humain-setting-linkedin/page.tsx` — lien contextuel
- `app/ressources/outils-setting-linkedin/page.tsx` — ajout dans la liste

**Non ajouté :** Navbar (réservé aux pages business), footer (idem).

### Entre les 3 nouvelles pages (triangle + hub)

Chaque nouvelle page pointe vers les 2 autres + vers le pilier `/ressources/setting-linkedin`.

## 9. Sitemap et technique

- `app/sitemap.ts` : ajout 4 URLs
  - `/ressources/setting-linkedin-exemples` — priority 0.7
  - `/ressources/setting-linkedin-prix` — priority 0.7
  - `/ressources/setting-linkedin-ia` — priority 0.7
  - `/outils/clone-style-linkedin` — priority 0.8
- IndexNow ping via `/api/indexnow` pour chaque nouvelle URL après déploiement
- `lastModified: new Date('2026-04-23')` pour le pilier et les 4 nouvelles URLs

## 10. Variables d'environnement

Ajout à `.env.example` :

```
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...           # déjà utilisé ailleurs
```

## 11. Gestion d'erreurs

### Outil `/api/clone-lite`

| Situation | Réponse |
|---|---|
| Anthropic timeout (> 30s) | 504, log côté serveur, UI « Notre IA est surchargée, réessaye » |
| Anthropic 5xx | 500, log, UI message générique |
| Input invalide (< 3 posts) | 400, UI validation client-side préventive |
| Rate limit | 429, UI « 3 générations/jour, reviens demain ou rejoins la waitlist » |

### Outil `/api/waitlist-clone`

- Si Resend down : log l'email côté serveur (`console.error` avec tag `[WAITLIST_FALLBACK]` → visible dans Vercel Logs / dashboard Functions) + retourne 200 pour ne pas bloquer l'UX. Abraham récupère manuellement. Événement rare, pas de réessai automatique pour MVP.

### Contenu SEO

- Pas d'état runtime à gérer, pages statiques. Erreur = erreur de build, détectée en CI.

## 12. Tests

Tests unitaires minimalistes (le projet utilise Vitest d'après `vitest.config.ts`) :

- `tests/clone-lite.test.ts` : validation input, format de sortie, rate limit (mock IP), **smoke test bout-en-bout avec client Anthropic mocké pour verrouiller le shape de la réponse**
- `tests/waitlist-clone.test.ts` : validation email, appel Resend mocké, fallback log quand Resend down

**Pas de test visuel / e2e** sur le MVP. Verification manuelle via preview Vercel avant merge.

Le contenu des pages SEO ne nécessite pas de tests automatisés (données statiques). Le build Next.js + typecheck suffit.

## 13. Ordre d'implémentation suggéré

Les 3 blocs sont indépendants ; l'ordre optimise la valeur business :

1. **Phase 1 (2-3 jours)** — Contenu SEO pur : les 3 nouvelles pages + refresh pilier + sitemap + maillage. Expédiable seul. Premier signal Google.
2. **Phase 2 (2-3 jours)** — Outil gratuit : `/outils/clone-style-linkedin` + 2 routes API + waitlist Resend. Peut être mergé indépendamment.
3. **Phase 3 (0.5 jour)** — Ajustements maillage : les pages phase 1 pointent vers l'outil phase 2 une fois déployé.

## 14. Métriques de succès

À tracker dans `SEO-DASHBOARD.md` (consolider après 4 semaines) :

- Position moyenne « setting linkedin » (cible : progression vs baseline actuelle)
- Position des 3 nouvelles pages sur leurs keywords cibles
- Trafic organique `/outils/clone-style-linkedin` + taux conversion waitlist
- Nombre de générations / jour (détection abus ou adoption)
- Taux de clic vers la waitlist après génération

## 15. Risques et mitigations

| Risque | Mitigation |
|---|---|
| Contenu IA détectable → pénalité Google | Passer chaque nouvelle page par skill `humanizer` avant merge |
| Coût Anthropic explose si abus | Rate limit 3/24h/IP + monitoring quotidien via Anthropic dashboard |
| Leads waitlist perdus si Resend down | Log fallback côté serveur, récupération manuelle |
| Concurrence SERP réagit | Refresh contenu trimestriel, pas d'impact immédiat sur le plan |
| Keyword cannibalization entre pilier et nouvelles pages | Canonical bien défini par page, pilier reste la cible principale pour la requête mère, longue-traîne sur les modifiers |

## 16. Prochaines étapes après merge

- Spec review subagent → corrections éventuelles
- Revue humaine du spec par Abraham
- Invocation skill `writing-plans` pour plan d'implémentation détaillé phase par phase
