# Spec: Refonte page /methode — Navigation fluide

**Date:** 2026-03-19
**Scope:** `app/methode/page.tsx`, `components/PipelineStep.tsx`, nouveau `components/ui/PhaseNav.tsx`, `app/globals.css`

## Contexte

La page /methode est le coeur du produit ChallengersLab. Les visiteurs veulent tout lire (9 étapes + closing). Le problème actuel : page longue sans repère de navigation, étapes visuellement monotones, rendu statique. L'objectif est une refonte fraîche qui facilite l'orientation sans raccourcir le contenu.

## Décisions de design

### 1. Sticky Phase Tabs (PhaseNav)

**Composant :** `components/ui/PhaseNav.tsx` (client component)

Barre horizontale avec 3 onglets correspondant aux phases :
- **Détection** (text-semantic-ia / violet)
- **Qualification** (text-semantic-methode / amber)
- **Conversion** (text-semantic-humain / vert)

Comportement :
- Invisible dans le hero. Apparaît en sticky sous la navbar (`top: 80px` environ, sous la navbar fixe) dès que le hero sort du viewport
- IntersectionObserver sur chaque `<section id="detection|qualification|conversion">` pour détecter la phase active et highlight l'onglet correspondant
- Clic sur un onglet = `scrollIntoView({ behavior: 'smooth' })` vers la section
- Progress bar fine (2px) sous les tabs, couleur accent, largeur proportionnelle au scroll entre le premier et dernier step

**Mobile :** La barre reste horizontale, tabs compacts (texte abrégé si nécessaire). Pas de sidebar, pas de drawer.

**Z-index :** Sous la navbar (z-40 vs navbar z-50).

**Transition d'apparition :** Translate-y négatif + opacity quand elle entre en sticky, transition 300ms.

### 2. Rythme visuel — PipelineStep amélioré

**Step markers :**
- Passer de `w-14 h-14` à `w-16 h-16` (64px)
- Ajouter un ring glow : `box-shadow: 0 0 16px {semantic-color}/15` sur le marker
- Les étapes "tête de phase" (01, 04, 07) reçoivent un marker légèrement plus grand (`w-18 h-18`) pour marquer le rythme

**Connecteurs :**
- Remplacer le caractère `↓` par une ligne verticale SVG/div (2px de large, 24px de haut)
- Couleur : gradient de la couleur sémantique de l'étape courante vers celle de l'étape suivante (ou même couleur si même phase)
- Opacité subtile : 30%

**Séparateurs inter-phases :**
- Entre les 3 sections de phases, ajouter un séparateur visuel : ligne horizontale fine avec le label de la phase suivante centré dessus (style `──── Phase 2 : Qualification ────`)
- Ce séparateur est déjà couvert par les headers de phase existants — on les rend juste plus proéminents avec plus d'espacement (mb-12 au lieu de mb-10)

### 3. Pedagogy blocks allégés

Changer le style des blocs erreur/arbitrage :
- **Avant :** Full border + background coloré (red-400/[0.04] bg + border red-400/10)
- **Après :** Border-left only (3px), background quasi-transparent (red-400/[0.02]), pas de border sur les autres côtés
- Typographie : passer de `text-sm` à `text-xs` pour les deux blocs
- Garder les icônes ✕ et → telles quelles

Résultat : les blocs pédagogiques sont toujours lisibles mais ne rivalisent plus visuellement avec le contenu principal de l'étape.

### 4. Micro-interactions

- **ScrollReveal :** Réduire le delay inter-step de 80ms à 60ms pour un rythme plus rapide
- **Tool pills :** Ajouter `transition-transform duration-200` + `hover:scale-105` + border brightens au hover
- **Step markers :** Le glow ring s'intensifie au hover (opacity 15% → 30%)
- **Phase tabs :** Transition de couleur 200ms sur le changement d'onglet actif

### 5. Hero épuré

Retirer le paragraphe en italique "Pedagogy intro" (`Vous avez les outils...`). Il est redondant — chaque étape démontre déjà le principe dans son bloc pédagogique.

Résultat : Hero = eyebrow + h1 + sous-titre + layer legend → scroll directement dans le contenu.

### 6. Closing & CTA

Pas de changement structurel. Seuls les ajustements visuels globaux s'appliquent (pedagogy-style borders si applicable, hover states sur les tool pills).

## Ce qui ne change PAS

- `lib/pipeline-data.ts` — Aucune modification des données
- Contenu texte des étapes, descriptions, pedagogy
- Ordre des sections
- CTA final
- Metadata / SEO / structured data

## Fichiers impactés

| Fichier | Action |
|---------|--------|
| `components/ui/PhaseNav.tsx` | **Créer** — composant client, sticky tabs + progress bar |
| `app/methode/page.tsx` | **Modifier** — intégrer PhaseNav, ajouter ids aux sections, retirer pedagogy intro, ajuster espacement |
| `components/PipelineStep.tsx` | **Modifier** — markers agrandis + glow, connecteur SVG, pedagogy border-left |
| `app/globals.css` | **Modifier** — keyframe pulse optionnel pour connecteurs |
