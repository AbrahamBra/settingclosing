# Offer Ladder — Section unifiée par niveau de maturité

**Date** : 2026-03-19
**Statut** : Approuvé (brainstorming)

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

### Page `/methode` (hub)

La page actuelle `/methode` est transformée en hub léger :

- **Hero** : intro positionnant les 3 niveaux de maturité
- **3 cartes** : chaque carte résume une offre avec lien vers la sous-page dédiée
- **CTA** : appel découverte

### Sous-pages méthodologiques

**`/methode/setting-linkedin`** (nouveau)
- Reprend les 9 étapes actuelles de `/methode` (pipeline-data.ts)
- 3 phases : Détection → Qualification → Conversion
- Légende des layers (IA / Méthode / Humain)
- Pédagogie erreur/arbitrage par étape

**`/methode/setting-telephonique`** (nouveau)
- Process plus court (3-4 étapes)
- Grille de scoring qualification
- Méthode Challenger Sale, formation par Abdelhay
- Routing : chaud → RDV, tiède → newsletter, froid → nurturing

**`/methode/nurturing`** (nouveau)
- Funnel de conversion par niveau de maturité
- Scoring comportemental
- Séquences de nurturing personnalisées
- Upsell vers Skool ou offre low ticket
- Routing automatique vers appel commercial

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

Le fichier `lib/pipeline-data.ts` reste inchangé pour les 9 étapes LinkedIn. Les données des blocs `OfferLadder` peuvent vivre dans le composant ou dans un fichier `lib/offers-data.ts` si la réutilisation le justifie.

## Design visuel

- Respecte le design system existant (DarkCard, ScrollReveal, ButtonGlow, couleurs sémantiques)
- La ligne verticale de maturité utilise un pseudo-element ou un div positionné
- Les points colorés aux nœuds reprennent les couleurs d'offre existantes
- La zone pricing dans chaque bloc est visuellement distincte (border subtile, background légèrement différent)
- Mobile : les blocs s'empilent naturellement, la ligne verticale reste visible
