# Growth Ladder Repositioning — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposition the entire site for solopreneur/AI-first audience with a Growth Ladder pricing structure (Lancer → Qualifier → Scaler).

**Architecture:** Update data layer first (offers-data, simulator-configs), then build new components (GrowthJourney, GrowthLadder, PipelineVisual), then rewire pages (homepage, tarifs), then update SEO/schema.

**Tech Stack:** Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion

**Spec:** `docs/superpowers/specs/2026-03-21-growth-ladder-repositioning-design.md`

**Skills to use:** @design-signature @expertise-web @copywriting @frontend-design for each new visual component. Always build a preview maquette before finalizing.

**Global copy note:** All user-facing copy shifts from "vous" to "tu" (tutoiement) across the entire site. This is a deliberate positioning choice for the solopreneur target. Apply consistently in all tasks.

---

## Chunk 1: Data Layer Updates

### Task 1: Update offers-data.ts — Add phase fields & new pricing

**Files:**
- Modify: `lib/offers-data.ts`

- [ ] **Step 1: Add phase fields to Offer interface**

Add `phase`, `phaseLabel`, `phaseSituation` to the `Offer` interface:

```typescript
export interface Offer {
  id: string
  slug: string
  eyebrow: string
  color: string
  phase: 1 | 2 | 3
  phaseLabel: string
  phaseSituation: string
  situation: string
  description: string
  features: OfferFeature[]
  methodeLink: string
  pricing: OfferPricing
  guarantee?: string
  noCommitment?: boolean
  cta: { label: string; href: string }
}
```

- [ ] **Step 2: Update LinkedIn offer data**

```typescript
{
  id: 'setting-linkedin',
  slug: 'setting-linkedin',
  eyebrow: 'Setting LinkedIn',
  color: '#A78BFA',
  phase: 1,
  phaseLabel: 'Lancer',
  phaseSituation: 'Tu as une offre mais zéro pipeline',
  situation: 'Tu n\u2019as pas de leads',
  description:
    'On prospecte pour toi sur LinkedIn avec un ciblage par signaux d\u2019achat. Tu te concentres sur le closing.',
  features: [
    { title: 'Ciblage signal-based', detail: 'Intent, timing, changement de poste' },
    { title: '±3 RDV / semaine', detail: 'Avec les mêmes 100 invitations LinkedIn' },
    { title: 'Skill IA sur-mesure', detail: 'Messages calibrés sur ton marché' },
    { title: 'Base de connaissance dédiée', detail: 'L\u2019IA apprend ton offre, ton marché, ton ton' },
  ],
  methodeLink: '/methode/setting-linkedin',
  pricing: {
    type: 'fixed',
    setup: { amount: 0, label: 'Setup offert', detail: 'Cadrage ICP, setup outils, rédaction des séquences.' },
    subscription: { amount: 790, period: '/ mois', detail: '790\u00a0€/mois. Sans engagement.' },
    bonus: 'Prime par RDV : 50\u00a0€ (ticket <\u00a05k), 150\u00a0€ (5–15k), 250\u00a0€ (>\u00a015k)',
  },
  guarantee: 'Moins de 5 RDV qualifiés livrés dans le mois\u00a0? Le mois suivant est offert.',
  noCommitment: true,
  cta: { label: 'Démarrer\u00a0→', href: '#contact' },
}
```

- [ ] **Step 3: Update Telephone offer data**

```typescript
{
  id: 'setting-telephonique',
  slug: 'setting-telephonique',
  eyebrow: 'Setting téléphonique',
  color: '#FBBF24',
  phase: 2,
  phaseLabel: 'Qualifier',
  phaseSituation: 'Tu as des leads mais pas le temps de qualifier',
  situation: 'Tu as des leads mais personne pour les qualifier',
  description:
    'Tes lead magnets performent, ton contenu génère de l\u2019engagement. On qualifie par téléphone et on route vers le closing.',
  // features unchanged
  pricing: {
    type: 'fixed',
    setup: { amount: 490, label: 'Setup', detail: 'Script, formation, configuration CRM et routing.' },
    subscription: { amount: 175, period: '/ demi-journée', detail: '175\u00a0€/demi-journée. 2-4 demi-journées/mois en moyenne.' },
    bonus: 'Prime par RDV : 25\u00a0€ (ticket <\u00a05k), 100\u00a0€ (5–15k), 200\u00a0€ (>\u00a015k)',
  },
  cta: { label: 'Ajouter\u00a0→', href: '#contact' },
}
```

- [ ] **Step 4: Update Newsletter offer data**

```typescript
{
  id: 'setting-newsletter',
  slug: 'setting-newsletter',
  eyebrow: 'Setting Newsletter',
  color: '#C87533',
  phase: 3,
  phaseLabel: 'Scaler',
  phaseSituation: 'Tu as une audience, transforme-la en clients',
  situation: 'Tu as une grosse base, zéro revenu dessus',
  description:
    'Des milliers de contacts qui ne rapportent rien. On opère ta newsletter d\u2019expert — contenu segmenté, scoring, routing automatique des leads chauds.',
  // features unchanged
  pricing: {
    type: 'fixed',
    setup: { amount: 830, label: 'Construction (830\u00a0€/mo × 3)', detail: 'Interview voix, Skill IA sur-mesure, ligne éditoriale, scoring, config outil. ~2\u00a0semaines.' },
    subscription: { amount: 990, period: '/ mois', detail: '990\u00a0€/mois à partir du mois 4. Autonomie ou poursuite après M3.' },
    bonus: 'Prime par RDV\u00a0: 50\u00a0€ (ticket\u00a0<\u00a05k), 150\u00a0€ (5–15k), 250\u00a0€ (>\u00a015k)',
  },
  guarantee: 'Minimum 10 RDV qualifiés en 3 mois, sinon M4 offert.',
  noCommitment: false,
  cta: { label: 'Passer à l\u2019échelle\u00a0→', href: '#contact' },
}
```

- [ ] **Step 5: Commit**

```bash
git add lib/offers-data.ts
git commit -m "data: update offers with phase fields and new pricing structure"
```

---

### Task 2: Update simulator-configs.ts — New formulas

**Files:**
- Modify: `lib/simulator-configs.ts`

- [ ] **Step 1: Update LinkedIn simulator — remove setup amortization**

In `linkedinConfig.compute`, remove setup amortization:

```typescript
compute(values, includeSetup) {
  const rdvParMois = values.rdvParSemaine * 4
  const prime = values.ticketMoyen < 5000 ? 50 : values.ticketMoyen <= 15000 ? 150 : 250
  const coutMensuel = 790 + prime * rdvParMois
  // Setup is now free — no amortization
  const coutTotal = coutMensuel
  const clientsGagnes = rdvParMois * (values.tauxClosing / 100)
  const revenuMensuel = clientsGagnes * values.ticketMoyen
  const roi = coutTotal > 0 ? revenuMensuel / coutTotal : 0

  return {
    items: [
      { label: 'Coût mensuel estimé', value: formatEur(coutTotal) },
      { label: 'Clients gagnés / mois', value: clientsGagnes.toFixed(1) },
      { label: 'Revenu potentiel', value: formatEur(revenuMensuel), highlight: true },
    ],
    roi,
    roiLabel: `Pour 1\u00a0€ investi, tu récupères ${roi.toFixed(1)}\u00a0€`,
  }
},
```

Also set `setupAmount: 0`.

- [ ] **Step 2: Update Telephone simulator — demi-journée input model + display**

The telephone simulator keeps the leads-per-month input (it's the natural way solopreneurs think about their volume) but displays costs in demi-journées. Update hypotheses, display unit, and compute:

```typescript
const telephoneConfig: SimulatorConfig = {
  offerId: 'setting-telephonique',
  color: '#FBBF24',
  presets: [
    // ... keep existing presets unchanged
  ],
  inputs: [
    // ... keep existing inputs unchanged (leadsParMois, ticketMoyen, tauxRDV, tauxClosing)
  ],
  hypotheses: [
    '10 min max par lead au téléphone',
    'Facturation par demi-journée (175\u00a0€)',
  ],
  conversionStat: 'Les taux varient selon la source : opt-in qualifié > contenu > jeu concours',
  setupAmount: 490,
  compute(values, includeSetup) {
    const tauxRDV = values.tauxRDV / 100
    const minParLead = 10
    const tauxClosing = values.tauxClosing / 100
    const halfDayRate = 175

    const rdvParMois = values.leadsParMois * tauxRDV
    const tempsHeures = (values.leadsParMois * minParLead) / 60
    const joursNecessaires = tempsHeures / 7
    const demiJournees = Math.ceil(joursNecessaires * 2)
    const prime = values.ticketMoyen < 5000 ? 25 : values.ticketMoyen <= 15000 ? 100 : 200
    const coutMensuel = (demiJournees * halfDayRate) + (prime * rdvParMois)
    const setupAmorti = includeSetup ? Math.round(490 / 3) : 0
    const coutTotal = coutMensuel + setupAmorti
    const clientsGagnes = rdvParMois * tauxClosing
    const revenuMensuel = clientsGagnes * values.ticketMoyen
    const roi = coutTotal > 0 ? revenuMensuel / coutTotal : 0

    return {
      items: [
        { label: 'Demi-journées / mois', value: `${demiJournees} (${tempsHeures.toFixed(0)}h)` },
        { label: 'RDV qualifiés générés', value: rdvParMois.toFixed(0) },
        { label: 'Coût mensuel estimé', value: formatEur(coutTotal) },
        { label: 'Revenu potentiel', value: formatEur(revenuMensuel), highlight: true },
      ],
      roi,
      roiLabel: `Pour 1\u00a0€ investi, tu récupères ${roi.toFixed(1)}\u00a0€`,
    }
  },
}
```

- [ ] **Step 3: Update Newsletter simulator — 3x setup display**

Update `setupAmount` and display:

```typescript
const newsletterConfig: SimulatorConfig = {
  // ...
  setupAmount: 830, // was 2490 — now displayed as "830€/mo × 3"
  hideSetup: true,
  compute(values) {
    const base = values.tailleBase
    const garantie = base < 3000
      ? { rdv: 3, label: '3 RDV garantis' }
      : base < 7000
        ? { rdv: 5, label: '5 RDV garantis' }
        : { rdv: 10, label: '10 RDV garantis' }

    const tauxClosingPostRDV = 0.30
    const clientsSur3Mois = garantie.rdv * tauxClosingPostRDV
    const revenuSur3Mois = clientsSur3Mois * values.ticketMoyen

    return {
      items: [
        { label: 'Construction (mois 1-3)', value: '830\u00a0€/mo' },
        { label: 'Abonnement (mois 4+)', value: '990\u00a0€/mo' },
        { label: 'RDV garantis / 3 mois', value: `${garantie.rdv} minimum` },
        { label: 'Revenu potentiel / 3 mois', value: formatEur(revenuSur3Mois), highlight: true },
      ],
      roi: 0,
      roiLabel: garantie.label + ' en 3 mois, sinon M4 offert',
    }
  },
}
```

- [ ] **Step 4: Verify build compiles**

Run: `npm run build`
Expected: No TypeScript errors

- [ ] **Step 5: Commit**

```bash
git add lib/simulator-configs.ts
git commit -m "data: update simulator configs for new pricing (free setup LinkedIn, demi-journée tel, 3x newsletter)"
```

---

## Chunk 2: New Components

### Task 3: Create GrowthJourney component (homepage)

**Files:**
- Create: `components/GrowthJourney.tsx`

**Skills:** @frontend-design @design-signature @expertise-web — use these to build the maquette first, then finalize.

- [ ] **Step 1: Build the component**

A 3-phase horizontal stepper (desktop) / vertical stack (mobile). Each phase is a card linking to `/tarifs#lancer`, `/tarifs#qualifier`, `/tarifs#scaler`.

Data comes from `offers` array in `lib/offers-data.ts`. Component reads `phase`, `phaseLabel`, `phaseSituation`, `color`, `eyebrow`.

Structure:
```
<section id="growth-journey">
  <h2>Choisis ton niveau de croissance</h2>
  <div class="flex (horizontal desktop, vertical mobile)">
    <PhaseCard phase={1} /> → <PhaseCard phase={2} /> → <PhaseCard phase={3} />
  </div>
</section>
```

Each PhaseCard: colored left border, phase number badge, phaseLabel title, phaseSituation subtitle, eyebrow (offer name), CTA link.

Phase 1 card is largest. Phases connected by arrow/line with transition text ("Quand tu reçois des leads entrants").

- [ ] **Step 2: Preview maquette in browser**

Run dev server, navigate to maquette page, verify visual. Use @frontend-design skill to ensure quality.

- [ ] **Step 3: Commit**

```bash
git add components/GrowthJourney.tsx
git commit -m "feat: add GrowthJourney component — 3-phase stepper for homepage"
```

---

### Task 4: Create PipelineVisual component

**Files:**
- Create: `components/PipelineVisual.tsx`

**Skills:** @frontend-design @design-signature — build maquette first.

- [ ] **Step 1: Build the component**

Visual diagram showing setter-driven pipeline. Accepts `compact?: boolean` prop (compact version for homepage, full for tarifs).

Structure:
```
"TON SETTER PILOTE" banner (top, spans full width)
  ↓  ↓  ↓
[Signaux IA] → [Message IA + angle setter] → [Envoi qualifié]
  ↓
[Base connaissance enrichie chaque semaine]
```

Tagline below: "L'IA exécute. Ton setter pilote. Chaque semaine, l'expertise marché s'affine, les angles s'aiguisent, les résultats s'accélèrent."

Full version includes expandable "En savoir plus" with the 9-step methodology detail.

Mobile: linear vertical flow.

- [ ] **Step 2: Preview maquette**

- [ ] **Step 3: Commit**

```bash
git add components/PipelineVisual.tsx
git commit -m "feat: add PipelineVisual component — setter-driven pipeline diagram"
```

---

### Task 5: Create GrowthLadder component (tarifs page)

**Files:**
- Create: `components/GrowthLadder.tsx`

**Skills:** @frontend-design @design-signature @expertise-web — build maquette first.

- [ ] **Step 1: Build the component**

Vertical scroll layout replacing PricingPicker tabs. 3 "steps" with decreasing visual weight.

Structure per phase:
```
<div id="lancer|qualifier|scaler">
  <phase badge> "Phase 1 — Lancer" + "Là où 80% de nos clients commencent"
  <offer card>
    Left: features list
    Right: price + MiniSimulator
    CTA button
  </offer card>
  <transition arrow with text>
</div>
```

**PhaseTransition** is built inline within GrowthLadder (not a separate component) — it's a simple styled div with an arrow icon and transition text:
- Between Phase 1 → 2: "Quand tu reçois des leads entrants"
- Between Phase 2 → 3: "Quand tu as une base à monétiser"

**MiniSimulator initial state:** Pass `defaultOpen={true}` for Phase 1, `defaultOpen={false}` for Phases 2 & 3. If MiniSimulator doesn't have a `defaultOpen` prop yet, add one (boolean, defaults to true for backward compat).

**Pack Croissance section** (after Phase 3):
```tsx
<div className="mt-16 border border-white/[0.06] rounded-2xl p-8">
  <h3>Pack Croissance</h3>
  <p>Combine deux offres et économise 10% sur le total mensuel.</p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>LinkedIn + Téléphonique</div>
    <div>LinkedIn + Newsletter</div>
  </div>
  <ButtonGlow href="#contact?offre=pack-croissance">Composer mon pack →</ButtonGlow>
</div>
```

No discount calculation logic needed — just display "-10% sur le total mensuel" as marketing text. Exact pricing discussed during sales call.

Imports: `offers` from `lib/offers-data.ts`, `MiniSimulator` from `components/MiniSimulator.tsx`, `simulatorConfigs` from `lib/simulator-configs.ts`.

- [ ] **Step 2: Preview maquette**

- [ ] **Step 3: Commit**

```bash
git add components/GrowthLadder.tsx
git commit -m "feat: add GrowthLadder component — vertical 3-phase pricing for tarifs"
```

---

### Task 6: Update PricingComparison — New columns

**Files:**
- Modify: `components/PricingComparison.tsx`

- [ ] **Step 1: Replace comparison data**

Replace `rows` and column headers:

```typescript
const rows: {
  label: string
  solo: string | boolean
  outil: string | boolean
  setting: string | boolean
}[] = [
  { label: 'Coût mensuel', solo: '0–80\u00a0€', outil: '100–200\u00a0€', setting: '790\u00a0€' },
  { label: 'Temps / semaine', solo: '8–10h', outil: '4–6h', setting: '0h' },
  { label: 'RDV générés', solo: '1–2/sem', outil: '2–3/sem', setting: '3+/sem garanti' },
  { label: 'Personnalisation', solo: 'Manuelle', outil: 'Templates', setting: 'IA + humain' },
  { label: 'Signaux d\u2019achat', solo: false, outil: 'Basiques', setting: 'IA temps réel' },
  { label: 'Garantie RDV', solo: false, outil: false, setting: true },
  { label: 'Tu fais quoi', solo: 'TOUT', outil: 'Stratégie + suivi', setting: 'Tu closes. C\u2019est tout.' },
]
```

Column headers: "Toi seul", "Toi + outil (Lemlist...)", "Toi + SettingClosing"

Section title: "Pourquoi déléguer ton setting" (replaces "Pourquoi Setting coûte 2 à 4× moins cher")

- [ ] **Step 2: Update CellContent and table headers**

Update the 3 `<th>` columns and the row rendering to use `solo`, `outil`, `setting` keys. SettingClosing column keeps the accent highlight.

- [ ] **Step 3: Verify build**

Run: `npm run build`

- [ ] **Step 4: Commit**

```bash
git add components/PricingComparison.tsx
git commit -m "feat: rewrite PricingComparison — solo vs outil vs SettingClosing"
```

---

### Task 7: Update SocialProof — Solopreneur wording

**Files:**
- Modify: `components/SocialProof.tsx`

- [ ] **Step 1: Update stats labels**

```typescript
const stats = [
  { value: '20+', label: 'solopreneurs accompagnés' },
  { value: '400+', label: 'RDV qualifiés générés' },
  { value: '<7j', label: 'avant ton premier RDV' },
]
```

- [ ] **Step 2: Commit**

```bash
git add components/SocialProof.tsx
git commit -m "copy: update SocialProof wording for solopreneur target"
```

---

## Chunk 3: Page Rewiring

### Task 8: Rewrite Homepage (app/page.tsx)

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/Hero.tsx`
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Update Hero.tsx**

Change headline, subheadline, CTAs:
- Headline: "Tu as une offre qui marche. Il te manque un pipeline."
- Subheadline: "On génère tes RDV qualifiés avec l'IA pour que tu te concentres sur ce que tu fais de mieux : closer."
- Primary CTA: "Voir comment ça marche" → smooth scroll to `#growth-journey`
- Secondary CTA: "Prendre RDV" → Calendly link

Update `personas` array: `['solopreneurs', 'fondateurs', 'indépendants B2B']`

- [ ] **Step 2: Update FAQ.tsx — Rewrite questions for solopreneurs**

Replace `faqs` array with the 7 new questions from spec Section 6:

```typescript
const faqs = [
  {
    q: '790\u00a0€/mois c\u2019est beaucoup pour un solopreneur, non\u00a0?',
    a: 'C\u2019est 8-10h/semaine que tu récupères. Si ton taux horaire dépasse 80\u00a0€, c\u2019est rentable dès le premier mois. Et avec la garantie RDV, le risque est de notre côté.',
  },
  {
    q: 'Je peux le faire moi-même avec Lemlist/LaGrowthMachine\u00a0?',
    a: 'Oui, si tu as 5-8h/semaine et l\u2019expertise IA pour personnaliser chaque message. On combine détection de signaux + rédaction IA + validation humaine. C\u2019est ça qui fait la différence entre 2\u00a0% et 8\u00a0% de taux de réponse.',
  },
  {
    q: 'C\u2019est quoi la différence avec une agence de prospection\u00a0?',
    a: 'Le prix (3-5× moins), l\u2019engagement (aucun), et la méthode (IA + humain vs. templates en masse). Et on est payés au résultat avec les bonuses RDV.',
  },
  {
    q: 'Combien de temps avant les premiers RDV\u00a0?',
    a: 'Moins de 7 jours. On commence par tes clients idéaux et on itère chaque semaine.',
  },
  {
    q: 'Je n\u2019ai pas de base email, je peux quand même\u00a0?',
    a: 'La Phase 1 (LinkedIn) ne nécessite aucune base. On cible directement les prospects via les signaux d\u2019achat. La newsletter c\u2019est pour plus tard.',
  },
  {
    q: 'Et si ça marche pas\u00a0?',
    a: 'Zéro engagement. Tu peux arrêter à tout moment. Et la garantie RDV couvre ton risque\u00a0: si on ne délivre pas, on continue gratuitement.',
  },
  {
    q: 'C\u2019est quoi les bonuses RDV\u00a0?',
    a: 'Un système de rémunération au résultat. Plus on génère de RDV, plus notre part variable augmente. Ça aligne nos intérêts\u00a0: on gagne quand tu gagnes.',
  },
]
```

- [ ] **Step 3: Rewire app/page.tsx — Replace SituationPicker with GrowthJourney + PipelineVisual**

```typescript
import { GrowthJourney } from '@/components/GrowthJourney'
import { PipelineVisual } from '@/components/PipelineVisual'
// Remove: const SituationPicker = dynamic(...)

// In JSX, replace <SituationPicker /> with:
<GrowthJourney />
<PipelineVisual compact />
```

Page order: Hero → GrowthJourney → PipelineVisual (compact) → SocialProof → TeamBanner → FAQ → CTAFinale

**Note:** PipelineVisual goes right after GrowthJourney (per spec), then SocialProof, then TeamBanner. This differs from the current order where TeamBanner was before SocialProof.

- [ ] **Step 4: Update homepage metadata**

```typescript
export const metadata: Metadata = {
  title: 'SettingClosing — Prospection LinkedIn IA pour solopreneurs',
  description:
    'Externalise ta prospection LinkedIn B2B : setter dédié, ciblage par signaux d\u2019achat IA, RDV qualifiés dès la première semaine. À partir de 790\u00a0€/mois.',
  // ...
}
```

- [ ] **Step 5: Update homepage schema — Prices & descriptions**

In `globalSchema.hasOfferCatalog.itemListElement`, update:

**LinkedIn Setup offer:** Remove entirely (setup is now free, no need for a schema offer at 0€).

**LinkedIn Subscription offer:** Keep as-is (790€/MONTH).

**Telephone Setup offer:** Keep as-is (490€).

**Telephone Journée offer:** Change to:
```typescript
{
  '@type': 'Offer',
  name: 'Setting téléphonique — Demi-journée',
  description: 'Qualification téléphonique des leads entrants. Facturé par demi-journée. Prime par RDV : 25 € (< 5k €), 100 € (5-15k €), 200 € (> 15k €).',
  url: 'https://www.setting.live/methode/setting-telephonique',
  priceSpecification: {
    '@type': 'PriceSpecification',
    price: 175,
    priceCurrency: 'EUR',
    unitText: 'HALF_DAY',
    valueAddedTaxIncluded: false,
  },
}
```

**Newsletter offer:** Change setup to:
```typescript
{
  '@type': 'PriceSpecification',
  price: 830,
  priceCurrency: 'EUR',
  unitText: 'MONTH',
  valueAddedTaxIncluded: false,
  description: 'Construction : 830 €/mois × 3 mois',
}
```

**ProfessionalService description:** Change to:
`'Prospection LinkedIn externalisée pour solopreneurs et fondateurs B2B. Méthode signal-based, setter dédié, IA + validation humaine.'`

**homeFaqSchema:** Replace entirely with the 7 new FAQ questions (same content as FAQ.tsx Step 2 above). Each question maps to a `Question` schema with `acceptedAnswer`.

- [ ] **Step 6: Verify dev server renders correctly**

Run: `npm run dev`, navigate to `/`, verify:
- Hero shows new headline
- GrowthJourney shows 3 phases
- PipelineVisual renders compact version
- FAQ shows 7 new questions
- No console errors

- [ ] **Step 7: Commit**

```bash
git add components/Hero.tsx components/FAQ.tsx app/page.tsx
git commit -m "feat: rewrite homepage — growth journey, pipeline visual, solopreneur positioning"
```

---

### Task 9: Rewrite Tarifs Page (app/tarifs/page.tsx)

**Files:**
- Modify: `app/tarifs/page.tsx`

- [ ] **Step 1: Replace PricingPicker with GrowthLadder**

```typescript
import { GrowthLadder } from '@/components/GrowthLadder'
import { PipelineVisual } from '@/components/PipelineVisual'
// Remove: import { PricingPicker } from '@/components/PricingPicker'
```

- [ ] **Step 2: Update tarifs hero**

```tsx
<h1>Choisis ton niveau de croissance</h1>
<p>Chaque phase se débloque quand ton business est prêt. Commence par LinkedIn, ajoute le reste quand tu en as besoin.</p>
```

- [ ] **Step 3: Update page layout order**

```
Breadcrumb
Hero (new copy)
GrowthLadder (replaces PricingPicker)
PipelineVisual (full version, between pricing and comparison)
PricingComparison (new columns)
"Pourquoi ce prix" (3 new DarkCards)
FAQ (same 7 questions from FAQ.tsx component)
SmartContactForm
```

- [ ] **Step 4: Update "Pourquoi ce prix" DarkCards**

```tsx
<DarkCard>
  <h3>Un système qui s'améliore</h3>
  <p>Base de connaissance dédiée, feedback setter, expertise marché enrichie chaque semaine. Mois 3 n'a rien à voir avec mois 1.</p>
</DarkCard>
<DarkCard>
  <h3>IA + humain, pas IA toute seule</h3>
  <p>L'IA détecte et rédige. Ton setter pilote par la data, choisit les angles, et itère le système chaque semaine.</p>
</DarkCard>
<DarkCard>
  <h3>Zéro engagement, zéro risque</h3>
  <p>Garantie RDV sur chaque offre. Tu peux arrêter à tout moment. On gagne quand tu gagnes.</p>
</DarkCard>
```

- [ ] **Step 5: Update tarifs FAQ data — Use same 7 questions from FAQ.tsx**

Replace the `faqs` array with the 7 solopreneur questions. Or better: import the FAQ component directly and remove the inline `faqs` array.

- [ ] **Step 6: Update SmartContactForm dropdown labels**

In `SmartContactForm.tsx`, update the offer options:

```typescript
const offerOptions = [
  { value: 'setting-linkedin', label: 'Phase 1 : Setting LinkedIn' },
  { value: 'setting-telephonique', label: 'Phase 2 : Setting Téléphonique' },
  { value: 'setting-newsletter', label: 'Phase 3 : Setting Newsletter' },
  { value: 'pack-croissance', label: 'Pack Croissance' },
]
```

- [ ] **Step 7: Update tarifs metadata**

```typescript
export const metadata: Metadata = {
  title: 'Tarifs — Prospection LinkedIn B2B à partir de 790\u00a0€/mois | SettingClosing',
  description:
    'Tarifs prospection LinkedIn externalisée pour solopreneurs : à partir de 790\u00a0€/mois, setup offert, zéro engagement. Simulez votre ROI.',
  // ...
}
```

- [ ] **Step 8: Update tarifs metadata openGraph**

```typescript
openGraph: {
  title: 'Tarifs — Prospection LinkedIn B2B à partir de 790\u00a0€/mois | SettingClosing',
  description: 'Tarifs prospection LinkedIn externalisée : setup offert, à partir de 790\u00a0€/mois, zéro engagement. Simulez votre ROI.',
  locale: 'fr_FR',
  type: 'website',
},
```

- [ ] **Step 9: Update tarifs schema (webPageSchema + faqSchema)**

**webPageSchema:** Update description and `mainEntity.itemListElement` prices:
- LinkedIn position 1: remove setup offer (was 490€), keep subscription at 790€/MONTH
- Telephone position 2: change to 175€/HALF_DAY (was 350€/DAY)
- Newsletter position 3: setup changes to 830€/MONTH × 3 (was 2490€ one-shot)
- Update `name` and `description` top-level fields to match new metadata

**faqSchema:** Replace with 7 new FAQ questions matching the FAQ.tsx content from Task 8 Step 2.

- [ ] **Step 10: Verify dev server**

Run: `npm run dev`, navigate to `/tarifs`, verify:
- Growth ladder renders 3 phases vertically
- Phase 1 has most visual weight
- Pipeline visual appears between pricing and comparison
- Comparison shows new 3-column layout
- FAQ shows 7 new questions
- No console errors
- Anchor links work (#lancer, #qualifier, #scaler)

- [ ] **Step 11: Commit**

```bash
git add app/tarifs/page.tsx components/SmartContactForm.tsx
git commit -m "feat: rewrite tarifs page — growth ladder, pipeline, new comparison, solopreneur FAQ"
```

---

## Chunk 4: Cleanup & Verification

### Task 10: Remove deprecated components

**Files:**
- Delete: `components/SituationPicker.tsx`
- Delete: `components/PricingPicker.tsx`

- [ ] **Step 1: Verify no remaining imports**

Run: `grep -r "SituationPicker\|PricingPicker" --include="*.tsx" --include="*.ts" app/ components/ lib/`
Expected: No results (all imports were replaced in Tasks 8-9).

- [ ] **Step 2: Delete dead components**

```bash
rm components/SituationPicker.tsx components/PricingPicker.tsx
```

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove deprecated SituationPicker and PricingPicker components"
```

---

### Task 11: Full build verification

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected: Clean build, no TypeScript errors, no warnings.

- [ ] **Step 2: Check all pages in browser**

Navigate to `/` and `/tarifs`. Verify:
- Homepage flow: Hero → GrowthJourney → PipelineVisual → TeamBanner → SocialProof → FAQ → CTA
- Tarifs flow: Hero → GrowthLadder → PipelineVisual → Comparison → DarkCards → FAQ → Form
- All links between homepage and tarifs work (growth journey cards → tarifs anchors)
- Mobile responsive (check 375px width)
- Form submission works with new dropdown labels

- [ ] **Step 3: Preview screenshots for user review**

Take screenshots of:
- Homepage hero + growth journey
- Tarifs page growth ladder
- Pipeline visual
- Comparison table
- Mobile views

- [ ] **Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: polish growth ladder repositioning — final adjustments"
```

---

## Dependency Graph

```
Task 1 (offers-data) ──┐
Task 2 (simulators) ───┤
                       ├──→ Task 3 (GrowthJourney) ──┐
Task 6 (Comparison)    │    Task 4 (PipelineVisual) ──┤
Task 7 (SocialProof)   │    Task 5 (GrowthLadder) ────┤
                       │                              ├──→ Task 8 (Homepage) ──┐
                       │                              ├──→ Task 9 (Tarifs)  ───┤
                       │                              │                        ├──→ Task 10 (Cleanup) → Task 11 (Build)
```

Tasks 1-2 must complete first. Tasks 3-7 can run in parallel. Tasks 8-9 depend on 3-7. Task 10-11 are sequential at the end.
