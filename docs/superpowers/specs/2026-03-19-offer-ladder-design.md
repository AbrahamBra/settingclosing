# Offer Ladder — Section unifiée par niveau de maturité

**Date** : 2026-03-19
**Statut** : Approuvé (brainstorming)

## Supersedes

Ce spec remplace et annule les specs suivants :
- `2026-03-19-homepage-setting-only-refocus.md` — OfferLadder absorbe le refocus PipelineSection
- `2026-03-19-pipeline-section-refonte-design.md` — PipelineSection est supprimé entièrement
- `2026-03-19-method-block-homepage-design.md` — MethodBlock est absorbé dans OfferLadder
- `2026-03-19-setup-nurturing-section-design.md` — la carte nurturing est intégrée dans OfferLadder

## Problème

La homepage présente les 3 offres (Setting LinkedIn, Setting téléphonique, Nurturing) dans 3 sections distinctes qui se répètent :

- `MethodBlock` : diagnostic "Vous en êtes où ?" → 3 situations numérotées 1-2-3
- `PipelineSection` : 3 colonnes avec features par offre
- `PricingComparison` : 3 cartes pricing

**Problèmes identifiés :**
1. La numérotation 1-2-3 implique une séquence chronologique alors que les offres sont des réponses parallèles à des situations différentes
2. Le clic depuis MethodBlock vers PipelineSection est redondant (même info reformulée 200px plus bas)
3. La page `/methode` ne décrit que le pipeline LinkedIn (9 étapes), pas les 2 autres offres
4. Trois sections séparées pour dire la même chose sous 3 angles = fatigue et confusion

## Solution

### Composant `OfferLadder` (homepage)

Un seul composant remplace MethodBlock + PipelineSection + PricingComparison. 3 blocs empilés verticalement, reliés par une ligne de maturité.

**Section ID** : `id="offres"` — le lien Navbar "Offres" (`/#pricing`) sera mis à jour vers `/#offres`.

#### Header

- **Eyebrow** : "Notre approche"
- **Titre** : "Vous en êtes où ?"
- **Sous-titre** : "Trois niveaux de maturité, trois réponses. Trouvez la vôtre."

#### Ligne verticale de maturité

Une ligne verticale fine (`white/[0.06]`) relie les 3 blocs. À chaque nœud, un point coloré dans la couleur de l'offre. Pas de numéros. La ligne matérialise un spectre de maturité (pas de leads → leads non qualifiés → base à activer) sans imposer un ordre chronologique.

#### Structure de chaque bloc

```
● ──── [EYEBROW coloré]                          (nom de l'offre)

  "[Situation]"                                   (titre - la phrase du visiteur)
  [Description courte]                            (2-3 lignes max)

  → [Feature 1]                                   (3 features compactes)
  → [Feature 2]
  → [Feature 3]

  Voir la méthode en détail →                    (lien vers /methode/[offre])

  ┌─────────────────────────────────┐
  │ [Pricing]                       │             (zone pricing intégrée)
  │ [Garantie ou conditions]        │
  │ [ CTA → ]                       │
  └─────────────────────────────────┘
```

#### Contenu des 3 blocs

**Bloc 1 — Setting LinkedIn** (violet `#A78BFA`)
- Situation : "Je n'ai pas de leads"
- Description : Pas d'audience, pas de pipe. On prospecte sur LinkedIn avec un ciblage par signaux d'achat.
- Features : Ciblage signal-based / ≈3 RDV/semaine / Skill IA sur-mesure
- Lien : `/methode/setting-linkedin`
- Pricing : Mois 1 : 500 € forfait | Mois 2+ : 1 000 €/mois
- Garantie : < 5 RDV qualifiés = mois suivant offert. Sans engagement.
- CTA : "Déléguer mon setting →"

**Bloc 2 — Setting téléphonique** (jaune `#FBBF24`)
- Situation : "J'ai des leads mais personne pour les qualifier"
- Description : Les lead magnets performent, les formulaires se remplissent. Mais personne ne décroche pour qualifier et router.
- Features : Qualification téléphonique / Tri intelligent (chaud → RDV, tiède → newsletter, froid → nurturing) / Zéro lead perdu
- Lien : `/methode/setting-telephonique`
- Pricing : Sur devis, adapté au volume de leads entrants
- CTA : "Discuter de mon volume →"

**Bloc 3 — Nurturing** (cuivre `#C87533`)
- Situation : "J'ai une base énorme"
- Description : Des milliers de contacts, actifs ou dormants. Zéro système pour scorer, nourrir et convertir.
- Features : Scoring comportemental / Séquences personnalisées / Routing vers appel
- Lien : `/methode/nurturing`
- Pricing : 1 500 € mise en place + prime par RDV livré
- CTA : "Construire mon système →"

#### Lien hub en bas de section

> "Découvrir notre méthode →" → `/methode`

### Composition homepage complète

```
Hero → SocialProof → OfferLadder → FAQ → TeamBanner → CTAFinale → BlogTeaser
```

Les sections `SocialProof`, `FAQ`, `TeamBanner`, `BlogTeaser` restent inchangées. Seuls `MethodBlock`, `PipelineSection` et `PricingComparison` sont remplacés par `OfferLadder`.

### Navbar

- "Méthode" → `/methode` (inchangé)
- "Offres" → `/#offres` (actuellement `/#pricing`, à mettre à jour)

### Page `/methode` (hub)

La page actuelle `/methode` est transformée en hub léger :

- **Hero** : intro positionnant les 3 niveaux de maturité
- **3 cartes** : chaque carte résume une offre avec lien vers la sous-page dédiée
- **CTA** : appel découverte

### Sous-pages méthodologiques

Les 3 sous-pages suivent un layout commun : Hero → Étapes → CTA. Chacune réutilise le composant `PipelineStep` existant avec les layers (IA / Méthode / Humain). Le niveau de détail varie selon la complexité de l'offre.

**`/methode/setting-linkedin`** (nouveau)
- **Layout** : identique à l'actuel `/methode` — hero, PhaseNav, 3 phases, CTA
- **Contenu** : reprend les 9 étapes actuelles de `/methode` (pipeline-data.ts `settingSteps`)
- 3 phases : Détection → Qualification → Conversion
- Légende des layers (IA / Méthode / Humain)
- Pédagogie erreur/arbitrage par étape
- **Metadata** : `title: "Setting LinkedIn — Méthode en 9 étapes | ChallengersLab"`, canonical `/methode/setting-linkedin`

**`/methode/setting-telephonique`** (nouveau)
- **Layout** : hero + 3-4 étapes empilées + CTA (pas de PhaseNav, trop court)
- **Contenu** :
  - Étape 1 : Réception du lead (layers: IA) — le lead entre via formulaire/lead magnet, est routé automatiquement
  - Étape 2 : Appel de qualification (layers: humain) — sales dédié, grille de scoring Challenger Sale, formé par Abdelhay
  - Étape 3 : Routing (layers: méthode) — chaud → RDV direct, tiède → newsletter, froid → séquence nurturing
  - Étape 4 : Feedback loop (layers: hybrid) — les données terrain recalibrent le scoring
- **Metadata** : `title: "Setting téléphonique — Qualification et routing | ChallengersLab"`, canonical `/methode/setting-telephonique`

**`/methode/nurturing`** (nouveau)
- **Layout** : hero + 3-4 étapes empilées + CTA
- **Contenu** :
  - Étape 1 : Scoring comportemental (layers: IA) — engagement, récence, intent sur la base existante
  - Étape 2 : Segmentation (layers: méthode) — découpage par niveau de maturité du funnel
  - Étape 3 : Séquences personnalisées (layers: hybrid) — contenu adapté, upsell vers Skool ou offre low ticket
  - Étape 4 : Routing vers appel (layers: humain) — leads chauds arrivent dans l'agenda commercial
- **Metadata** : `title: "Nurturing — Funnel de conversion par maturité | ChallengersLab"`, canonical `/methode/nurturing`

## Changements par composant

| Composant actuel | Action |
|---|---|
| `MethodBlock` | Supprimé — absorbé dans `OfferLadder` |
| `PipelineSection` | Supprimé — features intégrées dans `OfferLadder` |
| `PricingComparison` | Supprimé — pricing intégré dans `OfferLadder` |
| `OfferLadder` | **Nouveau** — composant unique sur homepage |

## Changements par page

| Page | Action |
|---|---|
| Homepage | `OfferLadder` remplace 3 sections. Flow : Hero → OfferLadder → CTA |
| `/methode` | Transformé en hub : intro + 3 cartes → sous-pages |
| `/methode/setting-linkedin` | Nouveau — 9 étapes (contenu actuel de `/methode`) |
| `/methode/setting-telephonique` | Nouveau — process qualif court |
| `/methode/nurturing` | Nouveau — funnel maturité |

## Données

- `lib/pipeline-data.ts` : `settingSteps` et `layerConfig` restent inchangés, utilisés par `/methode/setting-linkedin`
- `lib/pipeline-data.ts` : `closingTiers` — **à supprimer**. N'est importé par aucun composant actif. Le modèle closing a été abandonné au profit des 3 offres.
- `lib/offers-data.ts` : **nouveau fichier**. Les données des 3 offres (situation, description, features, pricing, couleur, slug, CTA) vivent ici car elles sont réutilisées par `OfferLadder` (homepage) et le hub `/methode`.

## SEO

### Redirections
- `/methode` reste à son URL canonique. Son contenu change (hub) mais l'URL est conservée.
- Les ancres `#detection`, `#qualification`, `#conversion` n'existent plus sur `/methode`. Les liens internes pointant vers ces ancres doivent être mis à jour vers `/methode/setting-linkedin#detection` etc.
- `PhaseNav` migre vers `/methode/setting-linkedin`.

### Sitemap
Les 3 nouvelles routes doivent être ajoutées dans `app/sitemap.ts` :
- `/methode/setting-linkedin`
- `/methode/setting-telephonique`
- `/methode/nurturing`

### Structured data
Les 3 offres dans le `OfferCatalog` JSON-LD (`layout.tsx`) doivent inclure un `url` pointant vers leur sous-page respective.

### Slug
Le slug téléphonique est `setting-telephonique` partout (routes, ancres, données). Les anciennes ancres `#setting-telephone` dans le code actuel seront supprimées avec les composants qu'elles habitent.

## Design visuel

- Respecte le design system existant (DarkCard, ScrollReveal, ButtonGlow, couleurs sémantiques)
- La ligne verticale de maturité utilise un pseudo-element ou un div positionné
- Les points colorés aux nœuds reprennent les couleurs d'offre existantes
- La zone pricing dans chaque bloc est visuellement distincte (border subtile, background légèrement différent)
- Mobile : les blocs s'empilent naturellement, la ligne verticale reste visible mais peut être réduite (trait plus court, sans point intermédiaire) sous `md` breakpoint

## Accessibilité

- Chaque bloc a un `<h3>` sémantique avec la situation (pas seulement un label coloré)
- Les couleurs d'offre ne sont jamais le seul moyen de distinguer les blocs — chaque bloc a un eyebrow texte + heading distinct
- Les points colorés sur la ligne sont décoratifs (`aria-hidden="true"`)
