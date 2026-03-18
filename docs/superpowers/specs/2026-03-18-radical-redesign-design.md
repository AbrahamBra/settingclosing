# ChallengersLab — Radical Redesign Spec

**Date:** 2026-03-18
**Status:** Draft
**Scope:** Full visual redesign — homepage, blog index, blog articles, design system

---

## 1. Design Direction

**Concept:** "Dark Pipeline" — dark cosmique aesthetic (inspired by OpenClaw.ai) combined with an interactive pipeline visualization showing the real 10-step methodology.

**Core principle:** The site SHOWS the methodology instead of describing it. Screenshots, videos, and proof points replace abstract descriptions.

### What changes vs current

| Aspect | Current | New |
|--------|---------|-----|
| Background | Cream #FAF9F6 | Dark #06080F |
| Accent | Blue #3B82F6 | Coral #F87171 (CTA) + semantic palette |
| Typography | Instrument Serif + IBM Plex Sans | Inter (800/700/600/500/400) + JetBrains Mono |
| Cards | Glassmorphism (white glass) | Dark surface cards with subtle borders |
| Homepage sections | 9 sections | 5-6 sections (Hero, Pipeline, Preuves, Pricing, Blog teaser, CTA) |
| Pipeline display | Abstract triptyque (3 layers) | Concrete 10-step pipeline with real tool names |
| Blog index | Flat link list | Editorial layout with featured article, category filters, card grid with images |
| Blog articles | Plain prose max-w-3xl | Rich content: screenshot callouts, insight boxes, code/prompt blocks, inline stats, CTAs |
| Proof | Text testimonials | Screenshots, short videos, conversation captures, result dashboards |
| Pricing | Buried in Setting/Closing sections | Dedicated section after pipeline, side-by-side comparison |
| Animations | ScrollReveal + CursorGlow | Preserved but adapted to dark theme |

---

## 2. Design System

### 2.1 Color Palette

```
Background:      #06080F   (page bg)
Surface:         #0B0E18   (cards, sections)
Surface hover:   #111627   (interactive states)
Border:          rgba(255,255,255,0.06)
Border hover:    rgba(255,255,255,0.12)

Text primary:    #E2E8F0
Text secondary:  #94A3B8
Text muted:      #64748B
Text white:      #FFFFFF   (headlines only)

Accent/CTA:      #F87171   (coral — primary action)
Accent hover:    #EF4444
Accent glow:     rgba(248,113,113,0.3)

Semantic colors:
  IA/Setting:    #818CF8   (indigo)
  Méthode:       #FBBF24   (amber)
  Humain:        #34D399   (emerald)
  Mixed IA+Méth: #C084FC   (violet)
  Info/Cyan:     #38BDF8   (stats, data highlights)

Each semantic color has 3 tints:
  Text:          color itself (e.g. #818CF8)
  Background:    color at 10% opacity (e.g. rgba(99,102,241,0.1))
  Border:        color at 20% opacity (e.g. rgba(99,102,241,0.2))
```

### 2.2 Typography

```
Font stack:
  Display/Body:  Inter (variable, weights 400-800)
  Mono/Data:     JetBrains Mono (weights 400-500)

Scale:
  Display (H1):  32-40px, weight 800, tracking -1.5px, line-height 1.1
  H2:            22-28px, weight 700, tracking -0.5px, line-height 1.2
  H3:            16-18px, weight 600, line-height 1.3
  Body:          14-16px, weight 400, line-height 1.7
  Small:         12-13px, weight 400-500
  Label:         9-11px, weight 600, uppercase, tracking 2-3px
  Mono data:     14-24px, weight 500-800 (for stats, numbers)
```

### 2.3 Spacing

```
Section vertical:  80px mobile, 120px desktop (keep existing section/section-sm)
Container:         max-w-6xl (1152px) — keep existing
Padding:           px-6 / md:px-12 / lg:px-20 — keep existing
Card padding:      16-20px
Card radius:       12px (down from 16px — tighter feel)
Button radius:     10px
```

### 2.4 Effects

```
Background:
  Cosmic particles: subtle radial-gradient dots (like OpenClaw stars)
  Section glow: radial-gradient(ellipse at 50% 0%, accent-color at 6% opacity, transparent 60%)

Cards:
  Background: rgba(255,255,255,0.03)
  Border: 1px solid rgba(255,255,255,0.06)
  Hover: border rgba(255,255,255,0.12), slight translateY(-2px)

Buttons (primary CTA):
  Background: #F87171
  Shadow: 0 4px 20px rgba(248,113,113,0.3)
  Hover: #EF4444, shadow intensifies
  Keep existing shine animation adapted to coral

ScrollReveal: keep as-is, works in dark
CursorGlow: adapt halo color to coral at low opacity
Lenis smooth scroll: keep as-is
```

---

## 3. Homepage Structure

Current: Hero → Problème → Philosophie → Triptyque → Setting → Closing → Complémentarité → Preuves → CTA
**New: Hero → Pipeline → Preuves → Pricing → Blog Teaser → CTA**

### 3.1 Navbar

Keep structure (logo left, links center, CTA right). Changes:
- Background: transparent → scrolled: #06080F/95 backdrop-blur
- Logo: Inter 800 instead of serif
- CTA button: coral #F87171 instead of blue
- Links: text-muted → hover:text-primary
- Same mobile drawer behavior

### 3.2 Hero

**Keep existing copy:**
- Eyebrow: "Setting & Closing B2B"
- Headline: "Vous avez déjà l'offre. Nous avons la machine."
- Subheading: "Premiers rendez-vous qualifiés dès la première semaine. Pipeline complet : setting délégué, closing coaché."
- Dynamic text: "Pour les [fondateurs/freelances/solopreneurs] qui veulent plus de clients."
- CTA: "Réserver un appel gratuit" (coral) + "Découvrir l'offre ↓" (ghost)

**Visual changes:**
- Radial glow at top: coral instead of blue
- Eyebrow label color: cyan #38BDF8
- Dynamic text swap: keep Framer Motion AnimatePresence

**Stats bar below hero** (new addition):
- Pull key stats into a visible bar
- "5+ RDV/mois garantis" · "500€/mois" · "Résultats dès 14j"
- JetBrains Mono for numbers, cyan color
- Subtle top/bottom border

### 3.3 Pipeline Section (replaces Problème + Philosophie + Triptyque)

**This is the centerpiece.** The existing 10-step pipeline from SectionTriptyque becomes a visual, scrollable pipeline.

**Section header:**
- Title: keep "Ce que nous automatisons. Ce que nous encodons. Ce qui reste humain." (from Triptyque)
- Or use Philosophie's "Une machine, quatre étapes." — user decides

**Structure:**
Two zones clearly labeled:

**⚡ Pipeline Setting** (steps 1-9)
Each step shows:
- Step number (colored marker with semantic color)
- Tags: which layers are involved (IA, Méthode, Humain — as colored pills)
- Title (from existing copy)
- Description (from existing copy, shortened if needed)
- Tool pills: real tool names (Sales Navigator, Claude, Reactin, Spyer, Google Sheet)
- **Screenshot/video placeholder** for each step (user will add real assets)

Steps from existing SectionTriptyque copy:
1. Stratégie & ciblage (IA + Méthode) — Sales Navigator filters
2. Signaux inbound (IA) — Reactin monitoring
3. Signaux outbound (IA) — Spyer + Sales Navigator signals
4. Profil analysé (IA + Méthode) — Claude analysis → Google Sheet
5. Scoring & ajustement (Méthode) — 5 maturity levels
6. Skill maison (IA + Méthode) — Custom Claude skill
7. Message co-rédigé (IA + Méthode) — Claude draft with rules
8. Validé et envoyé (Humain) — Phone test, human validation
9. RDV qualifié (Humain) — Setter converts to meeting

**🤝 Pipeline Closing** (step 10)
10. Closing structuré (Humain) — Challenger Sale, no AI

Connector line between steps with gradient (indigo → amber → emerald).

**Interaction:** On desktop, steps could be expandable (click to see full description + screenshot). On mobile, all expanded vertically.

**Bottom note:** "Ce pipeline se calibre en deux mois. Après ça, vous vous concentrez sur les appels — pas sur la prospection."

### 3.4 Preuves Section (new)

**Title:** "Ça ressemble à quoi concrètement ?"

Grid of proof cards (2x2 on desktop, 1 column mobile):
- Screenshot Sales Navigator (user provides)
- Video Claude Cowork scoring (user provides)
- Capture conversation LinkedIn (user provides)
- Dashboard résultats campagne (user provides)

Each card: dark surface card with image/video + title + caption.

Until user provides assets, show clear placeholders indicating what's needed.

### 3.5 Pricing Section (restructured)

**Title:** from existing — no new copy needed

Side-by-side comparison layout:

**Setting card:**
- All copy from existing SectionSetting
- 500€/mois + 25-150€/RDV
- 3-month program (Mois 1/2/3)
- Guarantee: min 5 RDV/mois
- CTA: "Déléguer mon setting →"

**Closing card:**
- All copy from existing SectionClosing
- 1000€/mois × 3 mois
- 3-month program (Mois 1/2/3)
- Includes 2h coaching/semaine
- CTA: "Améliorer mon closing →"

Visual treatment: dark cards with accent border-top (indigo for Setting, emerald for Closing). Keep existing detailed timeline/phase descriptions inside each card.

### 3.6 Blog Teaser (new section on homepage)

**Title:** "Derniers articles"

Show 1 featured article (large card with image placeholder) + 2 small article cards. Category color-coded (Setting=indigo, Closing=emerald, Méthode=amber, IA=violet).

Link: "Tout voir →" to /blog

### 3.7 CTA Finale

**Keep all existing copy and form fields.** Visual adaptation:
- Dark card background
- Form inputs: dark surface with border
- Submit button: coral
- Calendly section: keep as-is, adapt colors

---

## 4. Blog Index Page (/blog)

### Current
Flat categorized link list (Setting, Closing, Méthode sections). Each article = text link with arrow.

### New Design

**Header:**
- Page title in display size
- Subtitle about the blog's purpose

**Featured article:**
- Large card spanning full width or 60% width
- Image placeholder (user provides)
- Category tag (colored)
- Title, excerpt, author, reading time
- Visual: split layout (text left, image right on desktop)

**Category filter pills:**
- Tous (coral) | Setting (indigo) | Closing (emerald) | Méthode (amber) | IA + Outils (violet)
- Click to filter — client-side filtering

**Article grid:**
- 3 columns desktop, 2 tablet, 1 mobile
- Each card: image placeholder area (top, color-tinted by category) + title + meta
- Dark surface cards with subtle borders
- Hover: border brightens, slight lift

**All existing articles mapped to categories:**
Keep current article assignments. Each article gets an image placeholder that user will fill.

---

## 5. Blog Article Layout

### Current
Plain prose in max-w-3xl container. NavbarBlog + text + AuthorBlock.

### New Design

**Article header:**
- Category tags (colored pills)
- Title (display size, 28-32px)
- Excerpt/description
- Author block (avatar + name + date + reading time)
- Divider

**Article body — new content blocks available:**

1. **Screenshot callout** — bordered card with image + caption. Color-coded by semantic (IA=indigo border, Méthode=amber, etc.)

2. **Insight callout** — left-border accent card (coral). Icon + bold label + text. For key takeaways.

3. **Code/prompt block** — dark code block with JetBrains Mono. For prompts, scripts, templates that readers can copy.

4. **Stats block** — horizontal row of numbers with labels. Emerald colored. For showing results (200 → 45 → 12 type funnels).

5. **Inline CTA** — coral-bordered card at natural break points in the article. "Vous voulez ce pipeline ?" + button. Not just at the end.

6. **Video embed** — dark card with embedded video player.

7. **Before/After** — split comparison card.

**Sidebar (desktop only, optional):**
- Table of contents (sticky)
- Related articles
- CTA card

**Article footer:**
- AuthorBlock (keep existing, adapt styling)
- Related articles grid
- CTA to book call

---

## 6. Content Gaps — What User Needs to Create

### Required for launch (homepage):
- [ ] Screenshot: Sales Navigator with configured filters
- [ ] Screenshot: Claude Cowork analyzing LinkedIn profiles
- [ ] Screenshot: Google Sheet with scoring columns
- [ ] Screenshot: Example LinkedIn conversation (anonymized)
- [ ] Screenshot or mockup: Campaign results dashboard

### Recommended (higher conversion):
- [ ] Short video (30-60s): Demo of Claude scoring process
- [ ] Short video (30-60s): Walkthrough of a message sequence
- [ ] Client testimonial video or quote with photo
- [ ] Photo of Abraham for enhanced AuthorBlock

### Per blog article:
- [ ] At least 1 relevant screenshot or illustration per article
- [ ] For tutorial articles: step-by-step screenshots
- [ ] For methodology articles: diagrams or framework visuals

### Blog content ideas (authority play):
- [ ] "Comment je score 200 leads LinkedIn en 10 min avec Claude" (tutorial with screenshots)
- [ ] "Mon setup Sales Navigator pour le B2B SaaS" (practical guide)
- [ ] Behind the scenes of the pipeline with real numbers

---

## 7. Component Changes

### Keep (adapt styling):
- `ScrollReveal` — works in dark, just adjust
- `CursorGlow` — change halo color to coral
- `LenisProvider` — no change needed
- `VideoModal` — adapt to dark theme
- `NavbarBlog` — merge with main Navbar, one component
- `AuthorBlock` — adapt colors
- `CTAFinale` — adapt colors, keep form logic

### Modify heavily:
- `ButtonGlow` — coral gradient instead of blue, keep shine animation
- `GlassCard` — becomes `DarkCard` (dark surface, no glass)
- `Hero` — new layout, dark background, keep copy + animations
- `Navbar` — dark theme, coral CTA

### Remove:
- `Probleme` — content absorbed into pipeline context
- `Philosophie` — content absorbed into pipeline section
- `SectionTriptyque` — content becomes the Pipeline section
- `SectionSetting` — content moves to Pricing section
- `SectionClosing` — content moves to Pricing section
- `SectionComplementarite` — cut (reduces section count)
- `Preuves` — replaced by new visual Preuves section

### New components:
- `PipelineSection` — the 10-step visual pipeline with Setting/Closing zones
- `PipelineStep` — individual step with marker, tags, tools, expandable content
- `ProofGrid` — grid of screenshot/video proof cards
- `PricingComparison` — side-by-side Setting vs Closing pricing
- `BlogTeaser` — homepage blog preview (featured + small cards)
- `CategoryFilter` — colored pill filters for blog
- `ArticleCard` — blog grid card with image + category + meta
- `ScreenshotCallout` — article inline screenshot with caption
- `InsightCallout` — article insight/tip box
- `StatsBlock` — article inline stats visualization
- `InlineCTA` — article mid-content CTA card
- `CosmicBackground` — particle/star background effect

---

## 8. Pages Unchanged

- `/mentions-legales` — keep, adapt to dark theme
- `/politique-confidentialite` — keep, adapt to dark theme
- `/not-found` (404) — keep, adapt to dark theme
- `/ressources/*` — keep, adapt to dark theme

These pages just need the color/typography swap. No structural changes.

---

## 9. Technical Notes

- **Tailwind config:** Replace color variables with new palette. Extend with semantic colors.
- **Fonts:** Replace Instrument Serif + IBM Plex Sans with Inter + JetBrains Mono via next/font
- **Dark mode:** This IS the default. No light/dark toggle needed (for now).
- **Images:** Use Next.js Image component with blur placeholders for screenshots
- **Videos:** Lazy-load with poster frame. Consider using VideoModal for fullscreen.
- **Mobile-first:** Pipeline stacks vertically naturally. Blog grid 1→2→3 columns.
- **Performance:** Fewer sections = less JS. Remove unused components after migration.

---

## 10. Migration Strategy

1. Update design system (colors, fonts, spacing) in tailwind.config.ts + globals.css
2. Build new components (Pipeline, ProofGrid, Pricing, etc.)
3. Rebuild homepage with new sections
4. Rebuild blog index with editorial layout
5. Add rich content blocks to article template
6. Adapt existing pages (legal, 404, resources) to dark theme
7. Remove deprecated components
8. User adds screenshots/videos to proof sections and articles
