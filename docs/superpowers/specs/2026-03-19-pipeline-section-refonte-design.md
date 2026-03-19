# PipelineSection Refonte — Design Spec

**Date:** 2026-03-19
**Status:** Approved
**Scope:** `components/PipelineSection.tsx` on the landing page

## Problem

The current "Notre Approche" section on the LP is too long (12 cards), redundant with `/methode`, and includes 6 placeholder screenshots that hurt credibility. Tool pills are noise for LP visitors who haven't committed to understanding the method yet.

## Design

### Structure (5 blocs)

1. **Section Header** — eyebrow + h2 + punchy subtitle
2. **Before/After Setting** — two side-by-side cards comparing results
3. **Layer Legend + /methode link** — 3 colored pills + CTA link
4. **Compact Closing** — horizontal 3-step progression
5. **Unified CTA** — conclusion + ButtonGlow

### Bloc 1 — Section Header

- Eyebrow: "Notre approche"
- H2: "On combine IA, méthode structurée et validation humaine."
- Subtitle: "Même quota LinkedIn. Résultats x10."

### Bloc 2 — Before/After

Two cards side by side (`max-w-4xl`, `grid-cols-1 md:grid-cols-2`):

**Left card — "Sans méthode":**
- Neutral styling: `border-white/[0.06]`, `bg-white/[0.03]`
- Badge: "Sans méthode" in `text-text-muted`
- 4 metric lines:
  - `100 invitations / semaine` (grayed — LinkedIn constraint)
  - `Ciblage au feeling`
  - `~3% de réponses`
  - `≈ 1 RDV / mois`
- Example message in italic muted: "Bonjour, j'ai vu votre profil et..."

**Right card — "Avec notre pipeline":**
- Accent styling: `border-accent/30`, subtle accent glow shadow
- Badge: "Avec pipeline" in `text-accent`
- Same 4 metric lines with improved numbers:
  - `100 invitations / semaine` (same grayed constraint)
  - `Ciblage par signaux d'achat`
  - `~25% de réponses`
  - `≈ 3 RDV / semaine`
- Example message: "J'ai vu votre post sur [sujet]. On a eu le même défi chez..."

**Below both cards:**
Note in `text-text-secondary`: "Ces résultats, c'est l'outbound seul. Avec une stratégie de contenu et des lead magnets, on les dépasse."

### Bloc 3 — Layer Legend + Link

Horizontal row with 3 pills:
- `🟣 IA détecte` (semantic-ia)
- `🟡 Méthode qualifie` (semantic-methode)
- `🟢 Humain valide` (semantic-humain)

Followed by styled link: "Voir les 9 étapes en détail →" → `/methode`

### Bloc 4 — Compact Closing

Header: "Pipeline Closing" badge (same style as current).

3 compact cards in a horizontal row connected by arrow/chevron separators:
- **Niveau 1** — "Closer la discovery" — 2k – 5k€
- **Niveau 2** — "Challenger le pricing" — 5k – 10k€
- **Niveau 3** — "Déléguer le closing" — 10k€+

All cards use `semantic-humain` (green) accent. No descriptions, no tool pills. Just title + deal range.

### Bloc 5 — Unified CTA

- Text: "Ce pipeline se calibre en deux mois. Après : vous closez, on prospecte."
- ButtonGlow: "Réserver un appel découverte" → links to Calendly/CTA

## What Gets Removed

- 6 showcase cards ("Concrètement, ça ressemble à quoi ?")
- Tool pills on LP (remain on /methode)
- Long phase descriptions/summaries
- Long closing tier descriptions
- `settingPhases` local data array (replaced by static before/after content)

## What Gets Kept

- `closingTiers` import from `pipeline-data.ts` (used for titles/thresholds)
- ScrollReveal animations
- Semantic color system
- Link to /methode
- /methode page unchanged

## Card count: 12 → 5 elements
