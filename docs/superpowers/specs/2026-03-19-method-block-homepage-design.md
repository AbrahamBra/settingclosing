# Bloc Méthode Homepage — "Le Curseur"

## Résumé

Nouveau composant homepage placé entre `SocialProof` et `PipelineSection`. Montre la philosophie IA/Humain de ChallengersLab à travers des curseurs qui évoluent sur 3 mois — illustrant comment la machine de setting s'affine jusqu'à tourner seule.

## Positionnement page

Sections `<main>` uniquement (Navbar et CursorGlow omis) :

```
Hero
SocialProof
→ MethodBlock (nouveau, id="methode")
PipelineSection
PricingComparison
CTAFinale
BlogTeaser
Footer
```

## Concept

**Headline :** "On sait où placer le curseur."
**Sous-titre :** "Vous ne branchez pas un outil. Vous branchez une machine de setting qui s'affine jusqu'à tourner seule."

3 colonnes représentant 3 phases temporelles. Chaque colonne contient :
- Un label de phase (Mois 1 / Mois 2 / Mois 3+)
- Un mot-clé (Calibrage / La machine se rode / La machine tourne)
- Un texte pédagogique court (1-2 phrases)
- 4 barres de progression (Détection, Qualification, Rédaction, Closing)

Les barres s'allongent de colonne en colonne (sauf Closing, qui reste fixe à ~5-8% — toujours humain).

## Contenu par colonne

### Mois 1 — Calibrage
- **Pédagogie :** "On apprend votre marché, votre ICP, votre ton. Beaucoup d'humain partout — c'est normal."
- **Bordure :** ambre (`#FBBF24` à 12% opacité)
- **Barres :**
  - Détection → ~70% (IA)
  - Qualification → ~25% (Humain)
  - Rédaction → ~15% (Humain)
  - Closing → ~5% (Humain)

### Mois 2 — La machine se rode
- **Pédagogie :** "Notre savoir-faire est encodé. La détection et la qualification tournent. Le setting devient régulier."
- **Bordure :** neutre (`white/0.06`)
- **Barres :**
  - Détection → ~88% (IA)
  - Qualification → ~60% (Méthode)
  - Rédaction → ~40% (IA + Humain)
  - Closing → ~8% (Humain)

### Mois 3+ — La machine tourne
- **Pédagogie :** "Le setting est quasi-autonome. L'humain est concentré là où il compte : le closing et la relation."
- **Bordure :** verte (`#34D399` à 15% opacité)
- **Barres :**
  - Détection → ~95% (IA)
  - Qualification → ~85% (IA + Méthode)
  - Rédaction → ~65% (IA + Méthode)
  - Closing → ~8% (Humain)

## Éléments visuels

### Structure
- Eyebrow : `font-mono text-xs`, `#FBBF24`, uppercase, tracking-widest
- Headline : `24px`, `font-weight: 700`, `#F0ECE4`
- Sous-titre : `14px`, `#888`, centré, max-width ~560px
- Grid : `grid-template-columns: 1fr 1fr 1fr`, gap 16px
- Responsive mobile : stack en colonne (1fr)

### Colonnes
- Background : `rgba(255,255,255,0.02)`
- Border : 1px solid, couleur selon phase
- Border-radius : 12px
- Padding : 20px

### Barres de progression
- Track : `#1a1a1a`, hauteur 4px, border-radius 2px
- Remplissage : gradient selon layer dominante
  - IA seule : `#A78BFA`
  - IA + Méthode : gradient `#A78BFA` → `#FBBF24`
  - Méthode + Humain : gradient `#FBBF24` → `#34D399`
  - Humain seul : `#34D399`
- Label droit : layer dominante en couleur, `text-xs font-mono`

### Callout skill
- Background : `rgba(251,191,36,0.04)`, border `rgba(251,191,36,0.1)`
- Texte : "Chaque apprentissage est encodé en **skill**. Le savoir-faire s'accumule — la machine accélère."
- Centré, border-radius 8px

### CTA
- Lien texte vers `/methode` : "Voir les 9 étapes en détail →"
- Couleur : `#C87533` (accent principal)

## Animations

- `ScrollReveal` sur le bloc entier (fade-in au scroll)
- Staggered reveal sur les 3 colonnes (délai 80ms entre chaque)
- Barres de progression : chaque barre utilise un `ref` + `IntersectionObserver` interne pour animer `width` de 0 à valeur finale (CSS transition, ~800ms ease-out). L'observer se déclenche une seule fois (`{ once: true }`).

## Composant

### Fichier : `components/MethodBlock.tsx`

- Composant React fonctionnel
- Données des 3 phases en constante locale (pas de fichier data séparé — le contenu est spécifique à ce bloc)
- Chaque phase : `{ month: "Mois 1", keyword: "Calibrage", description: string, borderColor: string, bars: [{ name, percent, gradient, layerLabel, layerColor }] }`
- Responsive : grid 3 colonnes desktop → stack mobile
- Utilise `ScrollReveal` existant pour les animations d'entrée

### Intégration : `app/page.tsx`

- Import `MethodBlock`
- Placer entre `<SocialProof />` et `<PipelineSection />`

## Ce que ce bloc ne fait PAS

- Ne duplique pas le détail des 9 étapes (c'est le rôle de `/methode`)
- Ne montre pas de chiffres before/after (c'est le rôle de `PipelineSection`)
- Ne parle pas de pricing (c'est le rôle de `PricingComparison`)
- Pas d'interactivité (pas de tabs, pas de toggle) — les 3 colonnes sont visibles d'un coup

## Chevauchement avec PipelineSection

`PipelineSection` contient déjà une légende 3-layers (IA/Méthode/Humain) et un lien "Voir les 9 étapes". Avec `MethodBlock` en amont, cette légende devient redondante. À l'implémentation : supprimer le bloc légende + CTA `/methode` de `PipelineSection` puisque `MethodBlock` couvre ce rôle en amont.

## Mockup de référence

`.superpowers/brainstorm/420-1773939703/curseur-final.html`
