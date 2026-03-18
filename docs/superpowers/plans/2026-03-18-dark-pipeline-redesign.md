# Dark Pipeline Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual redesign of ChallengersLab from cream/blue to dark cosmique with pipeline-centric homepage

**Architecture:** Update design system foundations first (colors, fonts, CSS), then build new components bottom-up, then assemble pages. Work in `redesign/dark-pipeline` branch. Each task produces a buildable state.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 3.4, Framer Motion 12, Inter + JetBrains Mono fonts

**Spec:** `docs/superpowers/specs/2026-03-18-radical-redesign-design.md`

---

## Chunk 1: Foundation — Design System + Branch Setup

### Task 1: Create branch and update design tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create redesign branch**

```bash
git checkout -b redesign/dark-pipeline
```

- [ ] **Step 2: Replace tailwind.config.ts colors, fonts, and fontSize**

Replace the entire `theme.extend` with the new dark palette from spec section 2.1. Replace font families: `serif` → remove, `sans` → Inter, add `mono` → JetBrains Mono. Replace fontSize with new clamp-based scale from spec section 2.2. Keep existing spacing values.

New colors:
```
accent: '#F87171'
accent-hover: '#EF4444'
bg-primary: '#06080F'
bg-secondary: '#0B0E18'
surface-hover: '#111627'
text-primary: '#E2E8F0'
text-secondary: '#94A3B8'
text-muted: '#64748B'
semantic-ia: '#818CF8'
semantic-methode: '#FBBF24'
semantic-humain: '#34D399'
semantic-hybrid: '#C084FC'
semantic-info: '#38BDF8'
```

- [ ] **Step 3: Update globals.css CSS variables**

Replace all `:root` CSS variable values to match new dark palette. Keep z-index system unchanged. Update `html` background to `#06080F`, color to `#E2E8F0`. Update `.section-padding` and `.container-max` (keep values, they work). Update `@keyframes shine` to use coral tint instead of white.

- [ ] **Step 4: Update layout.tsx fonts**

Replace `Instrument_Serif` + `IBM_Plex_Sans` imports with `Inter` + `JetBrains_Mono` from `next/font/google`. Update variable names to `--font-sans` (Inter) and `--font-mono` (JetBrains Mono). Remove serif variable. Keep JSON-LD schema. Replace grain SVG with CosmicBackground (just remove grain for now, CosmicBackground comes in Task 3).

- [ ] **Step 5: Verify build compiles**

```bash
npm run build
```

Fix any Tailwind class references that break from color name changes (e.g. `bg-bg-primary` still works since we kept the key names).

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: update design system to dark pipeline theme"
```

---

### Task 2: Update base UI components (ButtonGlow, DarkCard, CursorGlow)

**Files:**
- Modify: `components/ui/ButtonGlow.tsx`
- Modify: `components/ui/GlassCard.tsx` → rename to `components/ui/DarkCard.tsx`
- Modify: `components/ui/CursorGlow.tsx`
- No changes: `components/ui/ScrollReveal.tsx` (works as-is in dark)

- [ ] **Step 1: Update ButtonGlow to coral gradient**

Change `background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)` → `linear-gradient(135deg, #F87171 0%, #EF4444 100%)`. Update all `rgba(59,130,246,...)` shadow/glow values to `rgba(248,113,113,...)`. Keep shine animation, update shine tint from white to `rgba(255,255,255,0.06)`.

- [ ] **Step 2: Convert GlassCard to DarkCard**

Rename file. Change background from `rgba(255,255,255,0.88)` to `rgba(255,255,255,0.03)`. Change border from `rgba(28,25,23,0.1)` to `rgba(255,255,255,0.06)`. Accent border: `rgba(248,113,113,0.4)`. Remove glass sheen overlay. Add hover prop for border brighten + translateY(-2px). Update imports across codebase.

- [ ] **Step 3: Update CursorGlow to coral**

Change halo gradient from `rgba(59,130,246,0.08)` to `rgba(248,113,113,0.06)`. Change dot from `rgba(59,130,246,0.6)` to `rgba(248,113,113,0.5)`.

- [ ] **Step 4: Update all GlassCard imports to DarkCard**

Search all files importing GlassCard and update to DarkCard.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: update UI components for dark theme"
```

---

### Task 3: CosmicBackground component

**Files:**
- Create: `components/ui/CosmicBackground.tsx`
- Modify: `app/layout.tsx` (replace grain SVG)

- [ ] **Step 1: Create CosmicBackground**

Pure CSS implementation using multiple radial-gradient dots on a fixed full-screen div. Subtle star-like dots at various positions with varying opacity (0.08-0.15). Also include a subtle warm glow at top center. Pointer-events none, z-index 0. No canvas/JS — pure CSS for performance.

- [ ] **Step 2: Replace grain SVG in layout.tsx**

Remove the `<svg>` grain filter element. Import and render `<CosmicBackground />` before `{children}`.

- [ ] **Step 3: Verify build + visual check**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: add cosmic background, remove grain overlay"
```

---

## Chunk 2: Homepage Components

### Task 4: Navbar dark theme + new links

**Files:**
- Modify: `components/Navbar.tsx`

- [ ] **Step 1: Update Navbar colors and links**

- Scrolled bg: `bg-bg-primary/95` stays (now dark since bg-primary changed)
- Border: `border-white/6` instead of `border-black/8`
- Logo: remove `font-serif`, add `font-sans font-extrabold`
- Links update: `navLinks` array → "Méthode" (#pipeline), "Offres" (#pricing), "Blog" (/blog), "Ressources" (/ressources/devenir-business-developer)
- Text colors: `text-text-primary` for logo, `text-text-muted hover:text-text-primary` for links
- Mobile drawer: `bg-bg-secondary` stays (now dark), border → `border-white/6`
- Hamburger spans: `bg-text-primary` (now light)

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: navbar dark theme with updated links"
```

---

### Task 5: Footer dark theme

**Files:**
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Update Footer colors**

- `border-t border-white/6` instead of `border-black/8`
- `bg-bg-secondary` instead of `bg-bg-primary`
- Logo: `font-sans font-extrabold text-white`
- Section headings: `text-white font-semibold`
- Links: `text-text-muted hover:text-text-primary`
- Copyright: `text-text-muted text-xs`
- Bottom divider: `border-white/6`

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: footer dark theme"
```

---

### Task 6: Hero dark theme + stats bar

**Files:**
- Modify: `components/Hero.tsx`

- [ ] **Step 1: Update Hero visual treatment**

- Radial glow: `rgba(248,113,113,0.09)` (coral) instead of blue
- Eyebrow badge: `border-[#38BDF8]/20 bg-[#38BDF8]/10 text-[#38BDF8]` (cyan)
- Eyebrow dot: `bg-[#38BDF8]`
- H1: remove `font-serif`, add `font-sans font-extrabold tracking-tight`. Text color: `text-white`
- Subheading: `text-text-secondary`
- Persona swap accent: `text-accent` (now coral)
- CTA "Découvrir l'offre ↓" href: change `#setting` → `#pipeline`

- [ ] **Step 2: Add stats bar below CTAs**

After the CTA buttons div, add a stats bar:

```tsx
<div className="flex justify-center gap-12 mt-16 pt-6 border-t border-white/6">
  {[
    { num: '5+', label: 'RDV/mois garantis' },
    { num: '500€', label: '/mois' },
    { num: '14j', label: 'premiers résultats' },
  ].map((s) => (
    <div key={s.label} className="text-center">
      <div className="font-mono text-2xl font-extrabold text-[#38BDF8]">{s.num}</div>
      <div className="text-text-muted text-xs uppercase tracking-wider mt-1">{s.label}</div>
    </div>
  ))}
</div>
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: hero dark theme with stats bar"
```

---

### Task 7: PipelineSection + PipelineStep components

**Files:**
- Create: `components/PipelineSection.tsx`
- Create: `components/PipelineStep.tsx`

- [ ] **Step 1: Create PipelineStep component**

Props: `{ num, label, layers, desc, tools, isLast? }`. Layers is array of `'ia' | 'methode' | 'hybrid' | 'humain'`. Tools is array of strings.

Renders:
- Left: colored step marker (56x56 rounded-xl, semantic bg + border based on primary layer)
- Right: tag pills (semantic colored), title, description, tool pills (monospace)
- Connector line between steps (unless isLast)

Use layerConfig from existing SectionTriptyque (but with new hex colors from spec).

- [ ] **Step 2: Create PipelineSection component**

Import all 10 steps data from existing SectionTriptyque (copy the steps array with all French copy). Organize into two zones:

Zone 1: "Pipeline Setting" (steps 1-9) with indigo zone label
Zone 2: "Pipeline Closing" (step 10) with emerald zone label

Section header: existing Triptyque copy "Ce que nous automatisons. Ce que nous encodons. Ce qui reste humain."

Bottom note: "Ce pipeline se calibre en deux mois..."

Wrap each step in ScrollReveal with staggered delays.

- [ ] **Step 3: Verify component renders**

Add temporarily to page.tsx to check rendering.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: pipeline section with 10-step methodology"
```

---

### Task 8: ProofGrid component

**Files:**
- Create: `components/ProofGrid.tsx`

- [ ] **Step 1: Create ProofGrid**

Section title: "Ça ressemble à quoi concrètement ?"

Grid of 4 proof cards (2x2 desktop, 1-col mobile). Each card is a DarkCard with:
- Placeholder area (dashed border, icon, text describing what screenshot/video goes here)
- Title and caption below

Cards:
1. 📸 Screenshot Sales Navigator — "Ciblage chirurgical" — "Vos filtres en action sur une vraie liste"
2. 🎥 Vidéo Claude Cowork — "Scoring en temps réel" — "L'IA qui analyse et priorise vos leads"
3. 💬 Capture conversation — "Messages qui convertissent" — "Exemples de séquences LinkedIn réelles"
4. 📊 Dashboard résultats — "Résultats mesurables" — "Métriques d'une campagne type"

Wrap in ScrollReveal.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: proof grid section with placeholders"
```

---

### Task 9: PricingComparison component

**Files:**
- Create: `components/PricingComparison.tsx`

- [ ] **Step 1: Create PricingComparison**

Side-by-side layout (2-col desktop, 1-col mobile).

Carry over ALL copy verbatim from existing `SectionSetting.tsx` and `SectionClosing.tsx`:
- Setting card: indigo border-top, all phases, pricing, guarantee, CTA
- Closing card: emerald border-top, all phases, pricing, coaching details, CTA

Each card is a DarkCard with:
- Accent border-top (4px, rounded)
- Eyebrow label (SETTING / CLOSING)
- Headline
- 3-phase timeline (use existing structure)
- Pricing block
- CTA ButtonGlow

Wrap in ScrollReveal.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: pricing comparison section"
```

---

### Task 10: BlogTeaser component

**Files:**
- Create: `components/BlogTeaser.tsx`

- [ ] **Step 1: Create BlogTeaser**

Section title: "Derniers articles" with "Tout voir →" link to /blog.

1 featured article card (large, split layout) + 2 small article cards.

Hardcode 3 articles from existing blog content:
- Featured: "Pourquoi vos messages LinkedIn restent sans réponse" (or first article from blog)
- Small 1: Setting category article
- Small 2: Closing category article

Each card: DarkCard with category tag (colored), title, meta (reading time). Image placeholder area with category-tinted background.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: blog teaser homepage section"
```

---

### Task 11: CTAFinale dark theme

**Files:**
- Modify: `components/CTAFinale.tsx`

- [ ] **Step 1: Update CTAFinale colors**

Keep ALL form logic, fields, validation, Calendly integration. Only change visual:
- Section bg: remove bg-secondary references, use dark
- Form inputs: `bg-[#111627] border border-white/[0.06] text-text-primary placeholder:text-text-muted rounded-lg focus:border-accent focus:ring-1 focus:ring-accent/30`
- Labels: `text-text-secondary`
- Select: same input styling
- Success message: `text-[#34D399]`
- Headings: `text-white`
- Subtext: `text-text-secondary`

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: CTA section dark theme"
```

---

### Task 12: Assemble new homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace homepage section imports and structure**

Remove imports: Probleme, Philosophie, SectionTriptyque, SectionSetting, SectionClosing, SectionComplementarite, Preuves.

Add imports: PipelineSection, ProofGrid, PricingComparison, BlogTeaser.

New render order:
```tsx
<CursorGlowClient />
<Navbar />
<main>
  <Hero />
  <PipelineSection />
  <ProofGrid />
  <PricingComparison />
  <BlogTeaser />
  <CTAFinale />
</main>
<Footer />
```

- [ ] **Step 2: Build and verify**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "feat: assemble new homepage with dark pipeline design"
```

---

## Chunk 3: Blog Redesign

### Task 13: Blog index editorial redesign

**Files:**
- Modify: `app/blog/page.tsx`

- [ ] **Step 1: Redesign blog index page**

Replace current flat link list with editorial layout:

1. Page header: display title + subtitle
2. Pillar guides row: 3 large cards for Setting/Closing/Méthodes pillar guides with accent border-left
3. Category filter pills (client-side, useState): Tous | Setting | Closing | Méthode | IA + Outils
4. Article grid (3-col desktop, 2-col tablet, 1-col mobile): DarkCard for each article with category-tinted image placeholder area, title, reading time

Use NavbarBlog (to be merged with Navbar — for now keep NavbarBlog, just update its colors).

- [ ] **Step 2: Update NavbarBlog colors to dark theme**

Same treatment as main Navbar: dark backgrounds, light text, coral CTA.

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: blog index editorial redesign"
```

---

### Task 14: Blog article rich content components

**Files:**
- Create: `components/blog/ScreenshotCallout.tsx`
- Create: `components/blog/InsightCallout.tsx`
- Create: `components/blog/StatsBlock.tsx`
- Create: `components/blog/InlineCTA.tsx`

- [ ] **Step 1: Create ScreenshotCallout**

Props: `{ imageSrc?, caption, variant: 'ia' | 'methode' | 'humain' | 'hybrid' }`. DarkCard with semantic border color, image area (or placeholder), caption below in semantic color.

- [ ] **Step 2: Create InsightCallout**

Props: `{ title?, children }`. Left-border card (3px coral), coral icon label "💡 Insight", content below.

- [ ] **Step 3: Create StatsBlock**

Props: `{ stats: { value: string, label: string }[], connector?: string }`. Horizontal row of numbers (emerald, mono font) with optional arrow connectors.

- [ ] **Step 4: Create InlineCTA**

Props: `{ title, subtitle, buttonText, href }`. Coral-bordered DarkCard, centered text, ButtonGlow.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: blog rich content components"
```

---

### Task 15: Update AuthorBlock for dark theme

**Files:**
- Modify: `components/AuthorBlock.tsx`

- [ ] **Step 1: Update AuthorBlock colors**

Adapt all text and background colors to dark theme. Keep structured data (Person schema). Update border, background colors.

- [ ] **Step 2: Commit**

```bash
git add -A && git commit -m "feat: author block dark theme"
```

---

## Chunk 4: Secondary Pages + Cleanup

### Task 16: Adapt secondary pages to dark theme

**Files:**
- Modify: `app/mentions-legales/page.tsx`
- Modify: `app/politique-confidentialite/page.tsx`
- Modify: `app/not-found.tsx`
- Modify: `app/ressources/devenir-business-developer/page.tsx`

- [ ] **Step 1: Update each page's hardcoded colors**

For each page: replace `text-text-primary` references that relied on dark-on-light (now they'll be light-on-dark which is correct). Replace any `bg-bg-primary`, `bg-bg-secondary`, `bg-white` backgrounds. Replace `border-black/X` with `border-white/X`. Replace `text-gray-X00` references with semantic tokens. Replace `text-[#1C1917]` with `text-white` for headings.

This is mostly search-and-replace within each file since the Tailwind tokens (text-text-primary etc.) will already resolve to dark-theme colors. Only hardcoded hex values and border opacity references need manual updates.

- [ ] **Step 2: Check /a-propos and /glossaire exist and adapt**

If these pages exist, apply same dark theme treatment. If they don't exist yet, skip.

- [ ] **Step 3: Build and verify**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: secondary pages dark theme adaptation"
```

---

### Task 17: Cleanup deprecated components

**Files:**
- Delete: `components/Probleme.tsx`
- Delete: `components/Philosophie.tsx`
- Delete: `components/SectionTriptyque.tsx`
- Delete: `components/SectionSetting.tsx`
- Delete: `components/SectionClosing.tsx`
- Delete: `components/SectionComplementarite.tsx`
- Delete: `components/Preuves.tsx`
- Delete: `components/ui/GlassCard.tsx` (if not already renamed)

- [ ] **Step 1: Verify no remaining imports**

```bash
grep -r "Probleme\|Philosophie\|SectionTriptyque\|SectionSetting\|SectionClosing\|SectionComplementarite\|Preuves\b\|GlassCard" --include="*.tsx" --include="*.ts" app/ components/
```

Should return zero results (only the files to be deleted).

- [ ] **Step 2: Delete deprecated files**

- [ ] **Step 3: Build to confirm nothing breaks**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: remove deprecated components from pre-redesign"
```

---

### Task 18: Final build verification + visual check

- [ ] **Step 1: Full production build**

```bash
npm run build
```

- [ ] **Step 2: Run dev server and verify all pages**

Check: homepage, /blog, individual articles, /mentions-legales, /politique-confidentialite, /not-found, /ressources/devenir-business-developer

- [ ] **Step 3: Commit any final fixes**

```bash
git add -A && git commit -m "fix: final adjustments after full verification"
```

---

## Task Dependencies

```
Task 1 (design system) → all other tasks
Task 2 (UI components) → Tasks 7-12
Task 3 (cosmic bg) → Task 12

Tasks 4, 5, 6, 7, 8, 9, 10, 11 can run in parallel after Tasks 1-2

Task 12 (homepage assembly) → after Tasks 4-11
Task 13 (blog index) → after Tasks 1-2
Task 14 (blog components) → after Tasks 1-2
Task 15 (author block) → after Tasks 1-2
Task 16 (secondary pages) → after Tasks 1-2
Task 17 (cleanup) → after Task 12
Task 18 (verification) → after all
```
