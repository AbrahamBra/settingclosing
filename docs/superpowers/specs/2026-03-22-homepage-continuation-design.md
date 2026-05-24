# Homepage Continuation Redesign

**Date:** 2026-03-22
**Scope:** Everything after the Pipeline Visual + CTA 790€ on the homepage
**What stays unchanged:** Hero, PipelineVisual (full variant), CTA 790€ block

---

## Problem

After the strong top section (Hero → Pipeline → CTA), the homepage falls flat. Sections are visually monotone (same card grid pattern repeated), GrowthJourney dilutes the LinkedIn message by showing 3 offers, and there's nothing memorable or original in the animations/interactions.

## Design

### Section order (after CTA 790€)

```
CTA 790€ (existing, stays)
    │
    ▼
1. BANDEAU OUTILS (new — marquee)
    │
    ▼
2. STORY SCROLL (new — replaces OnboardingTimeline + SocialProof)
   Sticky counter J1/S1/S2/M2+ with sliding content panels
    │
    ▼
3. EQUIPE (reworked — horizontal strip, not card grid)
    │
    ▼
4. FAQ (existing component, keep as-is)
    │
    ▼
5. TEASER CROSS-SELL (new — "Trop de RDV ?")
    │
    ▼
6. CTA FINAL + RARETE (merged — form + scarcity in one block)
```

### Removed from homepage

- **GrowthJourney** — the pipeline visual already showcases the LinkedIn offer. Showing 3 offers here dilutes the message. Complementary offers live on /tarifs only.
- **SocialProof** (standalone) — metrics are embedded in the story scroll steps instead.
- **OnboardingTimeline** — absorbed into the story scroll narrative.

---

### 1. Bandeau Outils (Tool Marquee)

**Purpose:** Show the tech stack to build credibility. Make the methodology tangible.

**Design:**
- Full-width horizontal marquee, auto-scrolling left
- Tool names with subtle colored dots: Claude Code, Claude Cowork, Sales Navigator, Google Sheets, Reactin, Breakcold, Make, Calendly
- Dark background with very subtle border top/bottom (white/[0.04])
- Speed: slow, continuous, no pause
- Duplicated content for seamless loop
- On hover: marquee pauses (CSS `animation-play-state: paused`)

**Visual treatment:**
- Monochrome tool names (text-text-muted) with colored dot prefix matching tool category:
  - Purple (#A78BFA): LinkedIn tools (Sales Navigator, Reactin)
  - Accent (#C87533): AI tools (Claude Code, Claude Cowork)
  - Green (#34D399): CRM/automation (Breakcold, Make)
  - Muted: data (Google Sheets)
- Separator between items: subtle `·` or `|`
- Font: mono, xs, uppercase tracking-widest

**Implementation:** Pure CSS animation with duplicated content div for seamless loop. No JS needed.

---

### 2. Story Scroll (Sticky Counter + Panels)

**Purpose:** Replace OnboardingTimeline + SocialProof with an immersive narrative showing what happens after signup, week by week.

**Design — Sticky Counter:**
- A large time indicator (J1 / S1 / S2 / M2+) that stays fixed in the center-left of the viewport
- Uses CSS `position: sticky` within a tall scroll container
- The counter transitions between values as the user scrolls past each panel's threshold
- Typography: font-sans, text-6xl or text-7xl, font-extrabold, color transitions between step colors
- Below the counter: a thin accent-colored bar (3px wide, 60px long) as a visual anchor

**DOM structure:**
```html
<section class="relative"> <!-- outer container -->
  <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
    <!-- Left: sticky counter -->
    <div class="hidden md:block">
      <div class="sticky top-[40vh]">
        <span class="text-7xl font-extrabold">S1</span>
        <div class="w-[60px] h-[3px] bg-accent mt-3"></div>
      </div>
    </div>
    <!-- Right: scrolling panels -->
    <div class="space-y-[50vh]">
      <!-- Panel 1, 2, 3, 4 here -->
      <!-- Each panel ~min-h-[60vh] for scroll pacing -->
    </div>
  </div>
</section>
<!-- On mobile: counter shows inline above each panel instead of sticky sidebar -->
```
The counter updates via framer-motion `useScroll` + `useTransform` watching each panel's scroll position.

**Design — Content Panels:**
Each panel slides in as the user scrolls. 4 panels total:

#### Panel 1: J1 — "On cartographie ton marché"
- Description: ICP, signaux d'achat, angles de message
- Tool badges: Sales Navigator (purple), Claude Cowork (accent), Google Sheets (muted)
- No metric

#### Panel 2: S1 — "Premiers messages envoyés"
- Description: 200+ profils analysés, messages personnalisés, séquences lancées
- Tool badges: Reactin (purple), Claude Code (accent), Make (green)
- Animated metric: `200+` profils analysés/semaine (counter animation on enter)

#### Panel 3: S2 — "Premier RDV dans ton agenda"
- Description: Leads qualifiés, booking automatique, tu closes
- Tool badges: Breakcold (green), Calendly (accent)
- Animated metric: `8%` taux de réponse moyen

#### Panel 4: M2+ — "Le système s'affine tout seul"
- Description: Chaque semaine, le feedback enrichit ta base de connaissance
- No tool badges — this is about the compounding effect
- Animated metrics: `400+` RDV générés · `1-4` RDV/semaine en croisière
- Visual: this panel has a slightly different treatment (accent border, brighter) to signal it's the outcome

**Panel card design:**
- `bg-bg-secondary` with `border border-white/[0.06]` and `rounded-2xl`
- Padding: `p-6 md:p-8`
- Tool badges: same style as pipeline visual (colored bg + border + text)
- Metrics: large number in step color + small label in text-muted

**Animation approach:**
- Use Intersection Observer (via framer-motion `whileInView`) for panel entrance
- Panels fade + slide from bottom (opacity 0, y: 30 → opacity 1, y: 0)
- Counter value changes via scroll position detection (useScroll + useMotionValueEvent from framer-motion)
- Metric counters animate with framer-motion `useMotionValue` + `useTransform` + `animate` for smooth count-up on enter

**Layout:**
- The sticky counter is centered in a `min-h-[300vh]` container (enough scroll distance for 4 panels)
- Panels are positioned with enough vertical spacing to feel like natural scroll stops
- On mobile: counter is smaller (text-4xl), panels stack naturally

---

### 3. Équipe (Horizontal Strip)

**Purpose:** Show who's behind the service without repeating the card grid pattern.

**Design:**
- Single horizontal row (not a grid of 3 identical cards)
- Each member: circular initial/avatar (small, 48px) + name + role on one line
- Background: transparent (no bg-bg-secondary card wrapper)
- Subtle connector line between members (like the OnboardingTimeline dots pattern but horizontal)
- Section header: "Qui fait tourner la machine" (existing copy, good)

**Visual treatment:**
- Initials in colored circles (existing colors: purple/accent/yellow)
- Name in text-primary, role in colored text (matching their circle)
- One-line description below in text-muted, text-xs
- The whole thing fits in ~120px of vertical space (compact)

---

### 4. FAQ

**No changes.** The existing accordion component works well. Keep as-is.

---

### 5. Teaser Cross-Sell ("Trop de RDV ?")

**Purpose:** Plant the seed for web·kit. Create a "desirable problem" that reinforces Setting's effectiveness.

**Design:**
- Full-width section with a distinct visual treatment (breaks the pattern)
- Background: `bg-[#1A1714]` (a step between bg-primary and bg-secondary) with subtle top border `border-t border-accent/10`
- Centered text:
  - Eyebrow: small, muted
  - Headline: "Tu as trop de RDV ? C'est le delivery qui manque ?"
  - Subtext: "Découvre comment accélérer ta capacité de delivery"
  - CTA: ghost button or text link → external link to web·kit
- Visual: subtle, not aggressive. This is a teaser, not a hard sell.

**Tone:** Congratulatory. "If you have this problem, it means Setting worked." Then pivot to the solution.

---

### 6. CTA Final + Rareté (Merged)

**Purpose:** Convert. One final push combining scarcity + action.

**Design:**
- Merge the current rarity banner and CTAFinale into one cohesive section
- Structure:
  - Scarcity line: "On accompagne 5 clients max par mois. **2 places disponibles en avril.**" (integrated at the top, not a separate banner)
  - Below: the existing two-column layout (form left, Calendly right) from CTAFinale
- Heading change: "Prêt à remplir ton agenda ?" stays, but add the scarcity context above it
- The form is the existing CTAFinale component (simpler form without offer dropdown — appropriate for the homepage general CTA). SmartContactForm with offer dropdown stays on /tarifs only.

**Visual enhancement:**
- Subtle pulsing glow on the scarcity text (accent color, very subtle)
- The section has a slightly different background treatment to signal "this is the end, act now"

---

## Technical notes

### New components to create
1. `ToolMarquee.tsx` — CSS marquee with tool list
2. `StoryScroll.tsx` — sticky counter + panels with scroll-driven animations
3. Reworked `TeamStrip.tsx` — horizontal compact team display

### Components to remove from homepage
- `GrowthJourney` import and usage (keep component for /tarifs if needed later)
- `OnboardingTimeline` import and usage
- `SocialProof` import and usage (keep component, might be used elsewhere)

### Components to modify
- `app/page.tsx` — new section order, new imports
- `CTAFinale.tsx` — integrate scarcity banner

### Dependencies
- framer-motion (already installed) for scroll-driven animations
- No new dependencies needed

### Scroll performance
- The sticky counter uses CSS `position: sticky` (GPU-accelerated)
- Intersection Observer for panel entrance (native browser API)
- Counter value changes via framer-motion's useScroll — throttled by requestAnimationFrame
- No scroll event listeners in JS (everything through framer-motion or IntersectionObserver)

---

## Out of scope (future work)

- Offer restructuring (fusion LinkedIn + Téléphone into à la carte) — separate project
- /tarifs page redesign for new offer structure
- Newsletter pricing changes
- web·kit cross-link implementation (just the teaser, not the destination)
