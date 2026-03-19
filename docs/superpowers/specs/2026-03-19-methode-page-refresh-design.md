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
- Invisible dans le hero. Apparaît en sticky sous la navbar dès que le hero sort du viewport (IntersectionObserver sur le hero section, threshold 0 — la barre apparaît dès que le hero est complètement sorti)
- Position sticky à `top: 4rem` (64px = hauteur réelle de la navbar `h-16`). Utiliser la CSS variable `--navbar-height: 4rem` partagée entre Navbar et PhaseNav
- IntersectionObserver sur chaque `<section id="detection|qualification|conversion">` pour détecter la phase active et highlight l'onglet correspondant
- Clic sur un onglet = `scrollIntoView({ behavior: 'smooth' })` vers la section
- Progress bar fine (2px) sous les tabs, couleur accent. Calculée via un `scroll` event listener throttlé (requestAnimationFrame) qui mesure `scrollY` entre le top de la première section phase et le bottom de la dernière. La barre avance de manière fluide (pas par saut de section)

**Mobile :** La barre reste horizontale. Labels abrégés sous `md` breakpoint : "Détect." / "Qualif." / "Convers.". Taille minimum des tabs : 44px de hauteur (conformité WCAG touch target).

**Z-index :** `--z-phase-nav: 40` ajouté au système de z-index dans globals.css. La PhaseNav utilise cette variable. Quand le drawer mobile de la Navbar est ouvert, la PhaseNav est naturellement recouverte par le backdrop (z-49) et le drawer (z-50).

**Transition d'apparition :** `translate-y: -100%` + `opacity: 0` → `translate-y: 0` + `opacity: 1`, transition 300ms ease-out.

**Accessibilité :**
- `<nav aria-label="Phases de la méthode" role="tablist">`
- Chaque onglet : `role="tab"`, `aria-selected="true|false"`, `tabindex="0|-1"`
- Navigation clavier : flèches gauche/droite entre onglets, Enter/Space pour activer
- Progress bar : `role="progressbar"` avec `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`

### 2. Rythme visuel — PipelineStep amélioré

**PipelineStep reste un server component.** Toutes les interactions (hover glow, hover scale) sont réalisées en pur CSS via les variantes `hover:` de Tailwind — aucun état React nécessaire.

**Step markers :**
- Passer de `w-14 h-14` à `w-16 h-16` sur desktop (`md:w-16 md:h-16`), garder `w-14 h-14` sur mobile pour préserver l'espace de contenu
- Ajouter un ring glow via inline `style` : `boxShadow: '0 0 16px rgba(color, 0.15)'` (les couleurs sémantiques ne sont pas disponibles dans les utilitaires shadow de Tailwind). Au hover CSS, l'opacity passe de 0.15 à 0.30 via une classe utilitaire
- Pas de taille différenciée pour les têtes de phase (01, 04, 07) — le rythme est déjà assuré par les headers de phase et le changement de fond. Évite la complexité du `w-[4.5rem]` custom

**Connecteurs :**
- Remplacer le caractère `↓` par un `<div>` de 2px de large × 24px de haut
- Couleur uniforme dans la phase (la couleur sémantique de l'étape courante à 30% d'opacité). Pas de gradient cross-step — cela évite de passer un `nextStepColor` prop et garde PipelineStep auto-contenu
- Le connecteur est rendu par PipelineStep lui-même (remplace le span `↓` existant)

**Séparateurs inter-phases :**
- Augmenter l'espacement des headers de phase de `mb-10` à `mb-12` pour une meilleure respiration
- Pas de nouveau composant séparateur — les headers existants (Phase label + titre + ligne horizontale) remplissent déjà ce rôle

### 3. Pedagogy blocks allégés

Changer le style des blocs erreur/arbitrage :
- **Avant :** Full border + background coloré (red-400/[0.04] bg + border red-400/10)
- **Après :** Border-left only (3px via `border-l-[3px]`), background quasi-transparent (`bg-red-400/[0.02]`), pas de border sur les autres côtés (`border-0 border-l-[3px]`)
- Typographie : passer de `text-sm` à `text-xs` pour les deux blocs
- Garder les icônes ✕ et → telles quelles

Résultat : les blocs pédagogiques sont toujours lisibles mais ne rivalisent plus visuellement avec le contenu principal de l'étape.

### 4. Micro-interactions

- **ScrollReveal :** Réduire le delay inter-step de `i * 80` à `i * 60` **dans `app/methode/page.tsx` uniquement** (pas dans le composant ScrollReveal lui-même, qui est partagé avec d'autres pages)
- **Tool pills :** Ajouter `transition-transform duration-200` + `hover:scale-105` + border brightens au hover (pur CSS)
- **Step markers :** Le glow ring s'intensifie au hover (CSS `hover:` — pas besoin de state React)
- **Phase tabs :** Transition de couleur 200ms sur le changement d'onglet actif

### 5. Hero épuré

Retirer le paragraphe en italique "Pedagogy intro" (`Vous avez les outils...`). Il est redondant — chaque étape démontre déjà le principe dans son bloc pédagogique.

Résultat : Hero = eyebrow + h1 + sous-titre + layer legend → scroll directement dans le contenu.

### 6. Closing & CTA

Pas de changement structurel. Seuls les ajustements visuels globaux s'appliquent (hover states sur les tool pills).

## Ce qui ne change PAS

- `lib/pipeline-data.ts` — Aucune modification des données
- Contenu texte des étapes, descriptions, pedagogy
- Ordre des sections
- CTA final
- Metadata / SEO / structured data

## Notes d'implémentation

- **iOS Safari :** Le comportement sticky peut être affecté par l'elastic overscroll. Si cela pose problème, considérer `overscroll-behavior-y: none` sur le body quand PhaseNav est visible
- **Box-shadow glow :** Utiliser des inline styles (cohérent avec le pattern existant dans PipelineSection.tsx) car les utilitaires shadow de Tailwind ne supportent pas les couleurs sémantiques avec opacité arbitraire

## Fichiers impactés

| Fichier | Action |
|---------|--------|
| `components/ui/PhaseNav.tsx` | **Créer** — composant client, sticky tabs + progress bar + a11y |
| `app/methode/page.tsx` | **Modifier** — intégrer PhaseNav, ajouter ids aux sections, retirer pedagogy intro, ajuster espacement et delays |
| `components/PipelineStep.tsx` | **Modifier** — markers agrandis responsive + glow inline, connecteur div, pedagogy border-left |
| `app/globals.css` | **Modifier** — ajouter `--navbar-height: 4rem`, `--z-phase-nav: 40` |
