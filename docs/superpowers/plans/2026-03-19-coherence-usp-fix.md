# Coherence USP & Value Proposition Fix — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all coherence contradictions identified in the USP audit: purge closing references from service pages, rewrite timeline to lead with week-1 results, implement new 500/1000€ pricing model with <5 RDV guarantee, rewrite Hero copy, create FAQ section, and update structured data.

**Architecture:** Pure copy/data changes across existing components. One new component (FAQ.tsx). No new dependencies. No API changes. All changes are in French copy and JSX.

**Tech Stack:** Next.js, React, Tailwind CSS, JSON-LD structured data

**Spec:** `docs/superpowers/specs/2026-03-19-coherence-usp-fix.md`

---

## Chunk 1: Closing Purge (Tasks 1-5)

### Task 1: Purge closing from TeamBanner

**Files:**
- Modify: `components/TeamBanner.tsx:13-15`

- [ ] **Step 1: Edit Abdelhay's role and description**

In `components/TeamBanner.tsx`, replace:
```tsx
  {
    name: 'Abdelhay',
    role: 'Closing & Performance',
    desc: 'Négociation, closing, conversion. Il signe les deals.',
  },
```
With:
```tsx
  {
    name: 'Abdelhay',
    role: 'Stratégie commerciale',
    desc: 'Négociation, conversion, stratégie. Il structure les deals.',
  },
```

- [ ] **Step 2: Verify no closing references remain**

Run: `grep -i "closing" components/TeamBanner.tsx`
Expected: 0 matches

- [ ] **Step 3: Commit**

```bash
git add components/TeamBanner.tsx
git commit -m "fix(copy): purge closing from TeamBanner — Abdelhay role updated"
```

---

### Task 2: Purge closing from MethodBlock + fix timeline + fix headlines

**Files:**
- Modify: `components/MethodBlock.tsx:8-63,78-84`

- [ ] **Step 1: Fix feedback loop step 3 — remove "closing"**

In `components/MethodBlock.tsx`, replace:
```tsx
  { label: 'Humain décide', detail: 'Validation, ton, closing', color: 'border-semantic-humain/20 bg-semantic-humain/10 text-semantic-humain' },
```
With:
```tsx
  { label: 'Humain décide', detail: 'Validation, ton, ajustement', color: 'border-semantic-humain/20 bg-semantic-humain/10 text-semantic-humain' },
```

- [ ] **Step 2: Rewrite Phase 1 — "Calibrage" → "Lancement & premiers RDV"**

Replace the entire first phase object:
```tsx
  {
    title: 'Mois 1',
    subtitle: 'Calibrage',
    borderColor: 'border-semantic-methode/[0.12]',
    titleColor: 'text-semantic-methode',
    description:
      "L\u2019humain explore votre march\u00e9, teste les angles, pose les fondations. Chaque ajustement est pris en compte et enrichit la base de connaissance.",
    details: [
      'Le setter apprend votre ICP',
      "L\u2019IA cartographie les signaux",
      'Premiers messages test\u00e9s et ajust\u00e9s',
    ],
  },
```
With:
```tsx
  {
    title: 'Mois 1',
    subtitle: 'Lancement & premiers RDV',
    borderColor: 'border-semantic-methode/[0.12]',
    titleColor: 'text-semantic-methode',
    description:
      "On ne commence pas par un audit de 30 jours. D\u00e8s la premi\u00e8re semaine, votre setter envoie des messages, g\u00e9n\u00e8re des conversations et pose des RDV. En parall\u00e8le, chaque interaction enrichit la connaissance de votre march\u00e9.",
    details: [
      'Premiers messages envoy\u00e9s d\u00e8s la semaine 1',
      'Le setter apprend votre ICP en conditions r\u00e9elles',
      'Chaque retour affine le ciblage pour la suite',
    ],
  },
```

- [ ] **Step 3: Rewrite Phase 2 subtitle**

Replace:
```tsx
    subtitle: 'Acc\u00e9l\u00e9ration',
```
With:
```tsx
    subtitle: 'Mont\u00e9e en puissance',
```

- [ ] **Step 4: Rewrite Phase 3 — remove closing references**

Replace the entire third phase object:
```tsx
  {
    title: 'Mois 3+',
    subtitle: 'La machine tourne',
    borderColor: 'border-semantic-humain/[0.15]',
    titleColor: 'text-semantic-humain',
    description:
      "La machinerie est rod\u00e9e. Le setter se concentre sur le closing et les pivots strat\u00e9giques.",
    details: [
      'Setting quasi-autonome',
      'Pivot de march\u00e9 en 3 jours',
      'Closing = 100\u00a0% humain, toujours',
    ],
  },
```
With:
```tsx
  {
    title: 'Mois 3+',
    subtitle: 'R\u00e9gime de croisi\u00e8re',
    borderColor: 'border-semantic-humain/[0.15]',
    titleColor: 'text-semantic-humain',
    description:
      "Le pipeline est rod\u00e9. Le setter se concentre sur l\u2019optimisation et les pivots strat\u00e9giques.",
    details: [
      'Setting quasi-autonome',
      'Pivot de march\u00e9 en 3 jours',
      'Le setter optimise en continu',
    ],
  },
```

- [ ] **Step 5: Fix section headline**

Replace:
```tsx
              Chaque semaine, la machine s&apos;affine.
```
With:
```tsx
              R&eacute;sultats d&egrave;s la semaine 1. Chaque semaine, &ccedil;a s&apos;acc&eacute;l&egrave;re.
```

- [ ] **Step 6: Fix subheading**

Replace:
```tsx
              L&apos;IA d&eacute;tecte, la m&eacute;thode structure, l&apos;humain d&eacute;cide.
              Chaque d&eacute;cision enrichit le tour suivant.
```
With:
```tsx
              L&apos;IA d&eacute;tecte et pr&eacute;pare. L&apos;humain valide et envoie.
              Chaque semaine, le syst&egrave;me apprend de vos r&eacute;sultats.
```

- [ ] **Step 7: Verify no closing references remain**

Run: `grep -i "closing" components/MethodBlock.tsx`
Expected: 0 matches

- [ ] **Step 8: Commit**

```bash
git add components/MethodBlock.tsx
git commit -m "fix(copy): rewrite MethodBlock — timeline leads with week-1 results, purge closing"
```

---

### Task 3: Remove closing footnote from PricingComparison

**Files:**
- Modify: `components/PricingComparison.tsx:174-177`

- [ ] **Step 1: Delete closing footnote**

Remove these lines entirely from `components/PricingComparison.tsx`:
```tsx
        {/* Closing mention */}
        <p className="text-center text-text-muted text-sm mt-8">
          Besoin d&apos;un accompagnement sur le closing&nbsp;? On en parle en call.
        </p>
```

- [ ] **Step 2: Verify no closing references remain**

Run: `grep -i "closing" components/PricingComparison.tsx`
Expected: 0 matches

- [ ] **Step 3: Commit**

```bash
git add components/PricingComparison.tsx
git commit -m "fix(copy): remove closing footnote from pricing"
```

---

### Task 4: Replace closing article in BlogTeaser

**Files:**
- Modify: `components/BlogTeaser.tsx:19-24`

- [ ] **Step 1: Replace closing article with setting article**

In `components/BlogTeaser.tsx`, replace:
```tsx
  {
    category: 'Closing',
    categoryColor: '#34D399',
    title: 'Closer avec la méthode Challenger Sale',
    meta: '10 min',
  },
```
With:
```tsx
  {
    category: 'Setting',
    categoryColor: '#A78BFA',
    title: 'Comment qualifier un prospect LinkedIn en 3 messages',
    meta: '9 min',
  },
```

- [ ] **Step 2: Verify no closing references remain**

Run: `grep -i "closing\|closer" components/BlogTeaser.tsx`
Expected: 0 matches

- [ ] **Step 3: Commit**

```bash
git add components/BlogTeaser.tsx
git commit -m "fix(copy): replace closing article with method article in blog teaser"
```

---

### Task 5: Remove closing from BlogContent filters and pillar guides

**Files:**
- Modify: `components/BlogContent.tsx:9,31,40,56-63`

- [ ] **Step 1: Remove 'closing' from Category type**

Replace:
```tsx
type Category = 'setting' | 'closing' | 'methode'
```
With:
```tsx
type Category = 'setting' | 'methode'
```

- [ ] **Step 2: Remove closing from categoryConfig**

Replace:
```tsx
const categoryConfig: Record<Category, { label: string; color: string; bgTint: string }> = {
  setting: { label: 'Setting', color: '#A78BFA', bgTint: 'rgba(129, 140, 248, 0.04)' },
  closing: { label: 'Closing', color: '#34D399', bgTint: 'rgba(52, 211, 153, 0.04)' },
  methode: { label: 'Méthode', color: '#FBBF24', bgTint: 'rgba(251, 191, 36, 0.04)' },
}
```
With:
```tsx
const categoryConfig: Record<Category, { label: string; color: string; bgTint: string }> = {
  setting: { label: 'Setting', color: '#A78BFA', bgTint: 'rgba(129, 140, 248, 0.04)' },
  methode: { label: 'Méthode', color: '#FBBF24', bgTint: 'rgba(251, 191, 36, 0.04)' },
}
```

- [ ] **Step 3: Remove closing filter pill**

Replace:
```tsx
const filterPills: { key: FilterKey; label: string; color: string }[] = [
  { key: 'all', label: 'Tous', color: '#C87533' },
  { key: 'setting', label: 'Setting', color: '#A78BFA' },
  { key: 'closing', label: 'Closing', color: '#34D399' },
  { key: 'methode', label: 'Méthode', color: '#FBBF24' },
  { key: 'ia', label: 'IA + Outils', color: '#C084FC' },
]
```
With:
```tsx
const filterPills: { key: FilterKey; label: string; color: string }[] = [
  { key: 'all', label: 'Tous', color: '#C87533' },
  { key: 'setting', label: 'Setting', color: '#A78BFA' },
  { key: 'methode', label: 'Méthode', color: '#FBBF24' },
  { key: 'ia', label: 'IA + Outils', color: '#C084FC' },
]
```

- [ ] **Step 4: Remove closing pillar guide**

Replace:
```tsx
const pillarGuides: PillarGuide[] = [
  {
    slug: 'setting-commercial-b2b',
    title: 'Setting commercial B2B : définition et méthode',
    label: 'Guide Setting',
    readTime: '14 min',
    color: '#A78BFA',
    borderClass: 'border-l-4 border-[#A78BFA]',
  },
  {
    slug: 'closing-b2b',
    title: 'Closing B2B : définition et méthode',
    label: 'Guide Closing',
    readTime: '15 min',
    color: '#34D399',
    borderClass: 'border-l-4 border-[#34D399]',
  },
  {
    slug: 'methodes-vente-b2b',
    title: 'Méthodes de vente B2B : Challenger, SPIN, SONCAS',
    label: 'Guide Méthodes',
    readTime: '10 min',
    color: '#FBBF24',
    borderClass: 'border-l-4 border-[#FBBF24]',
  },
]
```
With:
```tsx
const pillarGuides: PillarGuide[] = [
  {
    slug: 'setting-commercial-b2b',
    title: 'Setting commercial B2B : définition et méthode',
    label: 'Guide Setting',
    readTime: '14 min',
    color: '#A78BFA',
    borderClass: 'border-l-4 border-[#A78BFA]',
  },
  {
    slug: 'methodes-vente-b2b',
    title: 'Méthodes de vente B2B : Challenger, SPIN, SONCAS',
    label: 'Guide Méthodes',
    readTime: '10 min',
    color: '#FBBF24',
    borderClass: 'border-l-4 border-[#FBBF24]',
  },
]
```

- [ ] **Step 5: Recategorize closing articles as 'methode'**

The 5 closing articles (lines 88-92) need their category changed from `'closing'` to `'methode'` so they still appear when filtering. Replace each:

```tsx
  { slug: 'discovery-call-b2b', title: 'Discovery call B2B : structure, questions et erreurs à éviter', readTime: '10 min', category: 'closing' },
  { slug: 'gestion-objections-b2b', title: 'Gérer les objections en vente B2B : méthode et exemples', readTime: '9 min', category: 'closing' },
  { slug: 'script-closing-b2b', title: 'Scripts et phrases de closing B2B : cadre et exemples', readTime: '10 min', category: 'closing' },
  { slug: 'challenger-sale-definition', title: "Qu'est-ce que le Challenger Sale ?", readTime: '9 min', category: 'closing' },
  { slug: 'closer-b2b', title: 'Closer B2B : définition, compétences et comment en recruter un', readTime: '11 min', category: 'closing' },
```
With:
```tsx
  { slug: 'discovery-call-b2b', title: 'Discovery call B2B : structure, questions et erreurs à éviter', readTime: '10 min', category: 'methode' },
  { slug: 'gestion-objections-b2b', title: 'Gérer les objections en vente B2B : méthode et exemples', readTime: '9 min', category: 'methode' },
  { slug: 'script-closing-b2b', title: 'Scripts et phrases de closing B2B : cadre et exemples', readTime: '10 min', category: 'methode' },
  { slug: 'challenger-sale-definition', title: "Qu'est-ce que le Challenger Sale ?", readTime: '9 min', category: 'methode' },
  { slug: 'closer-b2b', title: 'Closer B2B : définition, compétences et comment en recruter un', readTime: '11 min', category: 'methode' },
```

Note: The article titles and slugs keep "closing"/"closer" because they are SEO content pages (URLs must not change). Only the internal category routing changes.

- [ ] **Step 6: Verify TypeScript compiles**

Run: `npx tsc --noEmit --pretty 2>&1 | head -20`
Expected: No errors related to BlogContent.tsx

- [ ] **Step 7: Commit**

```bash
git add components/BlogContent.tsx
git commit -m "fix(copy): remove closing category, filter pill and pillar guide from resources page"
```

---

### Task 5b: Update SocialProof stats

**Files:**
- Modify: `components/SocialProof.tsx:3-7`

- [ ] **Step 1: Clarify "<7j" and update stat labels**

Replace:
```tsx
const stats = [
  { value: '20+', label: 'entrepreneurs accompagnés' },
  { value: '400+', label: 'RDV qualifiés livrés' },
  { value: '<7j', label: 'avant les premiers résultats' },
]
```
With:
```tsx
const stats = [
  { value: '20+', label: 'entrepreneurs accompagnés' },
  { value: '400+', label: 'RDV qualifiés livrés' },
  { value: '<7j', label: 'avant votre premier RDV' },
]
```

> **Note for Abraham:** If you have more precise numbers (e.g., 34 entrepreneurs, 487 RDV), update these values. Precise numbers are more credible than rounded ones with "+".

- [ ] **Step 2: Commit**

```bash
git add components/SocialProof.tsx
git commit -m "fix(copy): clarify social proof — <7j before first RDV, not vague results"
```

---

## Chunk 2: Hero + Pricing Rewrite (Tasks 6-7)

### Task 6: Rewrite Hero copy

**Files:**
- Modify: `components/Hero.tsx:7,58-61,69-84`

- [ ] **Step 1: Update personas**

Replace:
```tsx
const personas = ['fondateurs', 'freelances', 'solopreneurs']
```
With:
```tsx
const personas = ['consultants', 'fondateurs', 'indépendants B2B']
```

- [ ] **Step 2: Rewrite sub-hero text**

Replace:
```tsx
          Votre équipe setting externalisée. Des RDV qualifiés dans votre agenda, chaque semaine.
```
With:
```tsx
          On prospecte sur LinkedIn pour vous. Premiers RDV d&egrave;s la premi&egrave;re semaine.
```

- [ ] **Step 3: Rewrite persona qualifier**

Replace:
```tsx
          <span>qui veulent plus de clients.</span>
```
With:
```tsx
          <span>qui ont une offre qui marche — et veulent remplir leur agenda.</span>
```

- [ ] **Step 4: Adjust persona container width**

"indépendants B2B" is longer than "solopreneurs". Update the width:

Replace:
```tsx
          <span className="relative inline-block w-[165px] h-6">
```
With:
```tsx
          <span className="relative inline-block w-[195px] h-6">
```

- [ ] **Step 5: Verify changes**

Run: `grep -i "closing\|équipe setting" components/Hero.tsx`
Expected: 0 matches

- [ ] **Step 6: Commit**

```bash
git add components/Hero.tsx
git commit -m "fix(copy): rewrite Hero — plain language, week-1 promise, qualified personas"
```

---

### Task 7: Rebuild PricingComparison with new pricing model

**Files:**
- Modify: `components/PricingComparison.tsx` (near-complete rewrite of content)

- [ ] **Step 1: Rewrite the section header**

Replace:
```tsx
          <h2 className="font-sans text-h2 text-text-primary mb-4">
            Notre offre. Zéro engagement long.
          </h2>
```
With:
```tsx
          <h2 className="font-sans text-h2 text-text-primary mb-4">
            Notre offre. Sans engagement.
          </h2>
```

- [ ] **Step 2: Rewrite the pricing section inside the Setting card**

Replace the entire pricing `<div className="space-y-4">` block (lines 37-68):
```tsx
                {/* Pricing */}
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Fixe mensuel</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">500&nbsp;€</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Votre setter dédié&nbsp;: listes de prospection, setup outils, rédaction des messages, invitations, suivi jusqu&apos;au RDV.
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-text-muted text-sm mb-1">Prime à la performance</p>
                    <p className="font-sans text-lg text-text-primary font-bold">Variable par RDV livré</p>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Le montant dépend de la complexité du setting&nbsp;:
                    </p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex gap-2 font-sans text-text-secondary text-xs">
                        <span style={{ color: '#A78BFA' }} className="shrink-0">→</span>
                        <span><span className="text-text-primary font-medium">Outbound pur</span> (pas de contenu, pas de lead magnet)&nbsp;: fourchette haute</span>
                      </div>
                      <div className="flex gap-2 font-sans text-text-secondary text-xs">
                        <span style={{ color: '#A78BFA' }} className="shrink-0">→</span>
                        <span><span className="text-text-primary font-medium">Inbound + outbound</span> (lead magnets actifs, audience existante)&nbsp;: fourchette basse</span>
                      </div>
                    </div>
                    <p className="font-sans text-text-muted text-xs mt-2 italic">
                      On calibre le montant exact ensemble, selon votre situation.
                    </p>
                  </div>
                </div>
```
With:
```tsx
                {/* Pricing — two tiers */}
                <div className="space-y-4">
                  {/* Mois 1 */}
                  <div className="rounded-lg border border-semantic-methode/20 bg-semantic-methode/[0.04] p-4">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-semantic-methode mb-2">Mois 1 — Lancement</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">500&nbsp;&euro;</p>
                      <span className="font-sans text-text-muted text-sm">forfait</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Tout inclus&nbsp;: setter d&eacute;di&eacute;, setup outils, ciblage, premiers messages, premiers RDV. Pas de variable.
                    </p>
                  </div>

                  {/* Mois 2+ */}
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">Mois 2+ — Abonnement</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-sans text-2xl text-text-primary font-bold">1&nbsp;000&nbsp;&euro;</p>
                      <span className="font-sans text-text-muted text-sm">/ mois</span>
                    </div>
                    <p className="font-sans text-text-secondary text-xs mt-1">
                      Pipeline &agrave; plein r&eacute;gime + prime par RDV livr&eacute; (montant d&eacute;fini ensemble selon votre situation).
                    </p>
                  </div>
                </div>
```

- [ ] **Step 3: Rewrite the engagement/guarantee section**

Replace:
```tsx
                {/* Engagement */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Engagement premier mois&nbsp;:</span> si zéro RDV qualifié livré après 30 jours de collaboration active, on prolonge la phase de calibration sans frais fixes.
                    </p>
                  </div>
                </div>
```
With:
```tsx
                {/* Garantie */}
                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex items-start gap-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Garantie&nbsp;:</span> moins de 5 RDV qualifi&eacute;s livr&eacute;s dans le mois&nbsp;? Le mois suivant est offert.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 mt-2">
                    <span className="text-[#A78BFA] shrink-0 mt-0.5">✓</span>
                    <p className="font-sans text-text-primary text-sm">
                      <span className="font-semibold">Sans engagement.</span> R&eacute;siliable &agrave; tout moment.
                    </p>
                  </div>
                </div>
```

- [ ] **Step 4: Add ROI example and comparison after the Setting card wrapper**

In `components/PricingComparison.tsx`, replace:
```tsx
        </div>

        {/* Setup Nurturing */}
```
With:
```tsx
        </div>

        {/* ROI context */}
        <div className="max-w-2xl mx-auto mt-6 space-y-3">
```
Then close the ROI block and keep Setup Nurturing. Full insertion between the Setting card closing `</div>` and Setup Nurturing comment:

```tsx
        {/* ROI context */}
        <div className="max-w-2xl mx-auto mt-6 space-y-3">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="font-sans text-text-secondary text-sm leading-relaxed">
              <span className="text-text-primary font-semibold">Exemple&nbsp;:</span> un consultant &agrave; 2&nbsp;000&nbsp;&euro;/mission qui close 1 prospect sur 5 RDV. Avec 5 RDV/mois d&egrave;s le mois 1 &rarr; 1 nouveau client &rarr; 2&nbsp;000&nbsp;&euro; de CA pour 500&nbsp;&euro; investis.
            </p>
          </div>
          <p className="font-sans text-text-muted text-xs text-center">
            Un commercial freelance co&ucirc;te 2&nbsp;000-3&nbsp;000&nbsp;&euro;/mois. Notre formule&nbsp;: r&eacute;sultats d&egrave;s la semaine 1, sans recrutement.
          </p>
        </div>
```

- [ ] **Step 5: Verify no closing references remain**

Run: `grep -i "closing" components/PricingComparison.tsx`
Expected: 0 matches

- [ ] **Step 6: Commit**

```bash
git add components/PricingComparison.tsx
git commit -m "feat(pricing): new 500/1000€ model with <5 RDV guarantee, ROI example"
```

---

## Chunk 3: PipelineSection + FAQ + Layout (Tasks 8-12)

### Task 8: Fix PipelineSection — timeline CTA + inbound clarity

**Files:**
- Modify: `components/PipelineSection.tsx:140-141,174-175`

- [ ] **Step 1: Add "inclus" mention to accelerateur description**

In `components/PipelineSection.tsx`, replace:
```tsx
              <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                L&apos;outbound plafonne à 100 invitations par semaine. Une fois le pipeline calibré, on vous aide à attirer des leads qui viennent à vous&nbsp;: conseil sur les sujets de posts et formats de lead magnet, scoring des leads entrants, setting direct sans passer par l&apos;invitation.
              </p>
```
With:
```tsx
              <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-2xl">
                L&apos;outbound plafonne &agrave; 100 invitations par semaine. Une fois le pipeline calibr&eacute;, on vous aide &agrave; attirer des leads qui viennent &agrave; vous&nbsp;: conseil sur les sujets de posts et formats de lead magnet, scoring des leads entrants, setting direct sans passer par l&apos;invitation.
                <span className="text-semantic-methode font-medium"> Inclus dans votre abonnement.</span>
              </p>
```

- [ ] **Step 2: Fix CTA calibration text**

Replace:
```tsx
              Ce pipeline se calibre en deux mois. Après, les RDV arrivent chaque semaine.
```
With:
```tsx
              Premiers RDV d&egrave;s la premi&egrave;re semaine. Au mois 2, le pipeline tourne &agrave; plein r&eacute;gime.
```

- [ ] **Step 3: Commit**

```bash
git add components/PipelineSection.tsx
git commit -m "fix(copy): pipeline CTA leads with week-1 results, inbound marked as included"
```

---

### Task 9: Create FAQ component

**Files:**
- Create: `components/FAQ.tsx`

- [ ] **Step 1: Create the FAQ component**

Create `components/FAQ.tsx` with full accordion implementation:

```tsx
'use client'

import { useState } from 'react'
import { ScrollReveal } from './ui/ScrollReveal'

const faqs = [
  {
    q: 'Combien ça coûte au total ?',
    a: "500\u00a0€ le premier mois, 1\u00a0000\u00a0€/mois ensuite + une prime par RDV livré dont le montant est défini ensemble. Sans engagement.",
  },
  {
    q: 'Quand est-ce que je vois les premiers RDV ?',
    a: "Dès la première semaine. On ne commence pas par un audit de 30 jours. Votre setter envoie des messages dès le démarrage.",
  },
  {
    q: 'Est-ce que vous envoyez des messages sans mon accord ?',
    a: "Non. Chaque message est validé par un humain avant envoi. Aucune automatisation n\u2019envoie de messages à votre place.",
  },
  {
    q: 'Et si ça ne marche pas ?',
    a: "Moins de 5 RDV qualifiés livrés dans le mois\u00a0? Le mois suivant est offert. On continue jusqu\u2019à ce que le pipeline tourne.",
  },
  {
    q: "C'est quoi la différence avec un freelance SDR ?",
    a: "Un freelance SDR envoie des messages. Nous, on combine un setter dédié, un système IA qui détecte les signaux d\u2019achat, et une méthode qui s\u2019affine chaque semaine. Même quota LinkedIn, résultats ×10.",
  },
  {
    q: "Mon offre n'est pas encore rodée, c'est pour moi ?",
    a: "On travaille mieux avec une offre validée. Mais le setting est aussi un excellent test de marché\u00a0: en 4 semaines, vous saurez quels messages accrochent, quels profils répondent, et quels angles convertissent.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding">
      <div className="container-max max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Questions fr&eacute;quentes
            </p>
            <h2 className="font-sans text-h2 text-text-primary">
              Tout ce que vous devez savoir
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 40}>
              <div className="border border-white/[0.06] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-sans text-sm font-semibold text-text-primary">
                    {faq.q}
                  </span>
                  <span className="text-text-muted text-lg shrink-0 transition-transform duration-200" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="font-sans text-sm text-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit --pretty 2>&1 | grep -i "FAQ" | head -5`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add components/FAQ.tsx
git commit -m "feat: add FAQ section with 6 key prospect objections"
```

---

### Task 10: Integrate FAQ into homepage

**Files:**
- Modify: `app/page.tsx:1-41`

- [ ] **Step 1: Add FAQ import**

After the existing imports, add:
```tsx
import { FAQ } from '@/components/FAQ'
```

- [ ] **Step 2: Add FAQ to render order — after PricingComparison, before TeamBanner**

Replace:
```tsx
        <PricingComparison />
        <TeamBanner />
```
With:
```tsx
        <PricingComparison />
        <FAQ />
        <TeamBanner />
```

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: integrate FAQ section into homepage after pricing"
```

---

### Task 11: Update layout.tsx — JSON-LD + FAQ schema

**Files:**
- Modify: `app/layout.tsx:56-87`

- [ ] **Step 1: Update Setting offer price to reflect launch pricing**

In the JSON-LD `itemListElement` array, replace the Setting offer:
```tsx
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B',
            description: 'Setting externalisé : setter dédié, méthode LinkedIn signal-based, RDV qualifiés dès la première semaine',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 500,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
```
With:
```tsx
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B — Lancement',
            description: 'Mois 1 : setter dédié, setup outils, ciblage, premiers messages et RDV. Forfait tout inclus.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 500,
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            name: 'Setting commercial B2B — Abonnement',
            description: 'Pipeline à plein régime : setter dédié, IA signal-based, reporting hebdomadaire, RDV qualifiés.',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: 1000,
              priceCurrency: 'EUR',
              unitText: 'MONTH',
              valueAddedTaxIncluded: false,
            },
          },
```

- [ ] **Step 2: Add FAQ schema to the @graph array**

In `app/layout.tsx`, replace the closing of the `@graph` array:
```tsx
    },
  ],
}
```
With:
```tsx
    },
    {
```
Then add the FAQPage object and close properly. Full replacement — find the end of the ProfessionalService object (the `},` followed by `],` then `}`) and expand it:

```tsx
    {
      '@type': 'FAQPage',
      '@id': 'https://challengerslab.fr/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien coûte le setting commercial externalisé ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '500 € le premier mois (lancement), puis 1 000 €/mois + une prime par RDV livré. Sans engagement.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quand voit-on les premiers RDV qualifiés ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dès la première semaine. Le setter envoie des messages dès le démarrage, pas après un audit de 30 jours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Les messages sont-ils envoyés sans validation ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Chaque message est validé par un humain avant envoi. Aucune automatisation ne contacte vos prospects à votre place.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que se passe-t-il si le service ne fonctionne pas ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Moins de 5 RDV qualifiés livrés dans le mois ? Le mois suivant est offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la différence avec un freelance SDR ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un freelance SDR envoie des messages. ChallengersLab combine un setter dédié, un système IA qui détecte les signaux d\'achat, et une méthode qui s\'affine chaque semaine.',
          },
        },
      ],
    },
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat(seo): update JSON-LD pricing to 500/1000€ model, add FAQPage schema"
```

---

### Task 12: Fix glossaire metadata

**Files:**
- Modify: `app/glossaire/page.tsx:6-8,10-12,20,247-253`

- [ ] **Step 1: Update page title**

Replace:
```tsx
  title: 'Glossaire Setting & Closing LinkedIn | ChallengersLab',
```
With:
```tsx
  title: 'Glossaire Setting & Prospection LinkedIn | ChallengersLab',
```

- [ ] **Step 2: Update meta description**

Replace:
```tsx
  description:
    'Définitions précises des termes clés du setting et closing LinkedIn : setter, closer, signal d\'achat, ICP, discovery, pipeline, qualification. Le lexique de référence.',
```
With:
```tsx
  description:
    'Définitions précises des termes clés du setting et de la prospection LinkedIn : setter, signal d\'achat, ICP, discovery, pipeline, qualification. Le lexique de référence.',
```

- [ ] **Step 3: Update OG title**

Replace:
```tsx
    title: 'Glossaire Setting & Closing LinkedIn | ChallengersLab',
```
With:
```tsx
    title: 'Glossaire Setting & Prospection LinkedIn | ChallengersLab',
```

- [ ] **Step 4: Update OG description**

Replace:
```tsx
      "Les définitions exactes des termes du setting et closing LinkedIn — setter, closer, signal d'achat, ICP, pipeline, qualification et plus.",
```
With:
```tsx
      "Les définitions exactes des termes du setting et de la prospection LinkedIn — setter, signal d'achat, ICP, pipeline, qualification et plus.",
```

- [ ] **Step 5: Update OG image alt**

Replace:
```tsx
        alt: 'Glossaire Setting & Closing LinkedIn — ChallengersLab',
```
With:
```tsx
        alt: 'Glossaire Setting & Prospection LinkedIn — ChallengersLab',
```

- [ ] **Step 6: Update page h1**

Replace:
```tsx
              Glossaire Setting &amp; Closing B2B
```
With:
```tsx
              Glossaire Setting &amp; Prospection B2B
```

- [ ] **Step 7: Update page description**

Replace:
```tsx
              Les définitions exactes des termes qu&apos;on utilise dans le setting et le closing B2B.
```
With:
```tsx
              Les définitions exactes des termes qu&apos;on utilise dans le setting et la prospection B2B.
```

- [ ] **Step 8: Update DefinedTermSet JSON-LD name**

In `app/glossaire/page.tsx` (around line 205), replace:
```tsx
    name: 'Glossaire Setting & Closing B2B — ChallengersLab',
```
With:
```tsx
    name: 'Glossaire Setting & Prospection B2B — ChallengersLab',
```

- [ ] **Step 9: Commit**

```bash
git add app/glossaire/page.tsx
git commit -m "fix(seo): glossaire metadata — replace closing with prospection"
```

---

### Task 12b: Fix a-propos page (worktree — deferred)

**Files:**
- Modify: `.claude/worktrees/gifted-ptolemy/app/a-propos/page.tsx` (when merged to main)

> **Deferred:** This file exists only in the worktree `gifted-ptolemy`, not in main. When this worktree is merged, apply the following changes:

- [ ] **Step 1: Update page title metadata**

Replace `"Notre équipe setting et closing"` → `"Notre équipe"` in the metadata title.

- [ ] **Step 2: Update meta description**

Remove "closing" from the description. Replace "coaching closing" with "stratégie commerciale".

- [ ] **Step 3: Update OG title/description**

Align OG fields with the updated title and description.

- [ ] **Step 4: Rewrite Abdelhay's role**

Replace any "Closing" role label with "Stratégie commerciale".

- [ ] **Step 5: Rewrite complementarity section**

The paragraph starting "Le closing, c'est ce qui se passe une fois que le prospect est qualifié..." → Replace with: "Une fois le RDV qualifié posé dans votre agenda, vous prenez la main."

- [ ] **Step 6: Commit**

```bash
git add app/a-propos/page.tsx
git commit -m "fix(copy): purge closing from about page"
```

---

## Chunk 4: Validation (Task 13)

### Task 13: Final validation

- [ ] **Step 1: Run closing grep on service pages**

```bash
grep -ri "closing" components/TeamBanner.tsx components/MethodBlock.tsx components/PricingComparison.tsx components/BlogTeaser.tsx components/Hero.tsx components/PipelineSection.tsx components/CTAFinale.tsx components/SocialProof.tsx app/page.tsx app/a-propos/page.tsx 2>/dev/null
```
Note: `app/a-propos/page.tsx` may not exist yet (worktree). The `2>/dev/null` suppresses the file-not-found error.
Expected: 0 matches

- [ ] **Step 2: Run TypeScript compile check**

```bash
npx tsc --noEmit --pretty 2>&1 | tail -5
```
Expected: No errors

- [ ] **Step 3: Run dev server and verify homepage loads**

```bash
npm run dev
```
Open http://localhost:3000 and verify:
- Hero says "On prospecte sur LinkedIn pour vous. Premiers RDV dès la première semaine."
- MethodBlock shows "Lancement & premiers RDV" for Mois 1
- Pricing shows 500€ / 1 000€ with guarantee
- FAQ section visible with 6 questions
- Abdelhay shows "Stratégie commerciale"
- No "closing" visible on homepage

- [ ] **Step 4: Verify /ressources page**

Open http://localhost:3000/ressources and verify:
- No "Closing" filter pill
- No "Guide Closing" pillar
- Closing articles still visible (categorized as Méthode)

- [ ] **Step 5: Verify /glossaire page**

Open http://localhost:3000/glossaire and verify:
- Title shows "Glossaire Setting & Prospection B2B"
- Closing entry still exists (educational content)

- [ ] **Step 6: Validate JSON-LD**

View page source at http://localhost:3000, find the JSON-LD script tag, verify:
- Two Setting offers: Lancement (500€) and Abonnement (1000€)
- FAQPage schema with 5 questions

- [ ] **Step 7: Final commit with all verification complete**

```bash
git log --oneline -10
```

Verify all commits are present. The feature is ready for deployment.
