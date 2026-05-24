# SEO Action Plan — ChallengersLab

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix SEO blind spots identified in the keyword audit — plug transactional gaps, fix cannibalization, improve E-E-A-T, and add missing pages that capture high-intent traffic.

**Architecture:** Quick wins first (code edits only), then new pages in order of conversion impact. Each chunk is independently deployable. All new pages follow existing Next.js App Router patterns, reuse existing components (Navbar, Footer, ButtonGlow, ScrollReveal, DarkCard), and include schema.org structured data.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, schema.org JSON-LD

---

## Chunk 1: Quick Wins SEO (code edits only)

### Task 1: Fix homepage H1 for SEO

The current H1 is `"Vous avez déjà l'offre. Nous avons la machine."` — zero keywords. Google can't understand the page.

**Files:**
- Modify: `components/Hero.tsx:43-52`

- [ ] **Step 1: Rewrite H1 to include primary keyword**

Replace the current H1 with a version that includes "setting commercial LinkedIn" while staying natural:

```tsx
<motion.h1
  ...
  className="font-sans font-extrabold tracking-tight text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.15] text-text-primary mb-6"
>
  Setting commercial LinkedIn{' '}
  <br className="hidden sm:block" />
  <span className="text-accent">externalisé.</span>
</motion.h1>
```

Update the subtitle below to carry the value prop that the old H1 had:

```tsx
<motion.p ...>
  Vous avez l'offre, on a la machine. Premiers RDV qualifiés dès la première semaine.
</motion.p>
```

- [ ] **Step 2: Verify build**

Run: `npm run build` — no errors expected.

- [ ] **Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "seo: add primary keyword to homepage H1"
```

---

### Task 2: Fix cannibalization homepage vs pillar article

Homepage and `/ressources/setting-commercial-b2b` both target "setting commercial". Differentiate them: homepage = transactional ("externalisé"), article = informational ("définition méthode").

**Files:**
- Modify: `app/page.tsx:15-22` (metadata)
- Modify: `app/layout.tsx:19-24` (default metadata + OG)

- [ ] **Step 1: Sharpen homepage metadata toward transactional intent**

In `app/page.tsx`, update metadata:

```typescript
export const metadata: Metadata = {
  title: 'Setting commercial LinkedIn externalisé | ChallengersLab',
  description:
    'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. 500 € le premier mois.',
  alternates: {
    canonical: 'https://challengerslab.fr',
  },
}
```

In `app/layout.tsx`, update default metadata description to match:

```typescript
description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage par signaux d\'achat, RDV qualifiés dès la première semaine. 500 € le premier mois.',
```

And OpenGraph description:

```typescript
description: 'Externalisez votre prospection LinkedIn B2B : setter dédié, ciblage IA, RDV qualifiés dès la première semaine.',
```

- [ ] **Step 2: Commit**

```bash
git add app/page.tsx app/layout.tsx
git commit -m "seo: differentiate homepage metadata from pillar article (transactional vs informational)"
```

---

### Task 3: Fix /ressources title — remove "closing" reference

The site has pivoted away from closing. The `/ressources` title still says "Setting et closing LinkedIn".

**Files:**
- Modify: `app/ressources/page.tsx:6-28`

- [ ] **Step 1: Update title and descriptions**

```typescript
export const metadata: Metadata = {
  title: 'Ressources — Prospection et setting LinkedIn B2B | ChallengersLab',
  description:
    'Méthodes, scripts et stratégies de prospection LinkedIn B2B. Guides pour fondateurs, freelances et solopreneurs qui veulent des RDV qualifiés.',
  openGraph: {
    title: 'Ressources — Prospection et setting LinkedIn B2B | ChallengersLab',
    description:
      'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://challengerslab.fr/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ressources ChallengersLab — Prospection LinkedIn B2B',
      },
    ],
  },
  alternates: {
    canonical: 'https://challengerslab.fr/ressources',
  },
}
```

Also update the schema:

```typescript
const resourcesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://challengerslab.fr/ressources',
  name: 'Ressources — Prospection et setting LinkedIn B2B',
  description:
    'Méthodes, scripts et stratégies de prospection LinkedIn B2B pour fondateurs et freelances.',
  url: 'https://challengerslab.fr/ressources',
  isPartOf: { '@id': 'https://challengerslab.fr/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://challengerslab.fr' },
      { '@type': 'ListItem', position: 2, name: 'Ressources', item: 'https://challengerslab.fr/ressources' },
    ],
  },
}
```

- [ ] **Step 2: Commit**

```bash
git add app/ressources/page.tsx
git commit -m "seo: remove closing from /ressources metadata, refocus on prospection LinkedIn"
```

---

### Task 4: Remove target="_blank" from glossary internal links

Internal links in the glossary open in new tabs (`target="_blank"`) — this breaks link juice flow and is bad UX for internal navigation.

**Files:**
- Modify: `app/glossaire/page.tsx:303-309`

- [ ] **Step 1: Remove target and rel from article links**

Replace:
```tsx
<a
  href={t.articleHref}
  className="font-sans text-xs text-accent hover:text-text-primary transition-colors ml-auto"
  target="_blank"
  rel="noopener noreferrer"
>
```

With:
```tsx
<a
  href={t.articleHref}
  className="font-sans text-xs text-accent hover:text-text-primary transition-colors ml-auto"
>
```

- [ ] **Step 2: Commit**

```bash
git add app/glossaire/page.tsx
git commit -m "seo: remove target=_blank from glossary internal links"
```

---

### Task 5: Fix sitemap — remove /a-propos (404) until page exists

The sitemap references `/a-propos` but the page doesn't exist yet. This causes crawl errors.

**Files:**
- Modify: `app/sitemap.ts:126-130`

- [ ] **Step 1: Remove /a-propos entry**

Delete this block from the sitemap array:
```typescript
{
  url: 'https://challengerslab.fr/a-propos',
  lastModified: new Date('2026-03-18'),
  changeFrequency: 'monthly',
  priority: 0.7,
},
```

(Will be re-added in Chunk 2 when the page is created.)

- [ ] **Step 2: Commit**

```bash
git add app/sitemap.ts
git commit -m "seo: remove /a-propos from sitemap (page does not exist yet)"
```

---

## Chunk 2: Create /a-propos page (E-E-A-T)

### Task 6: Create /a-propos page

Missing about page hurts E-E-A-T. Google wants to know who is behind the business. Reuse TeamBanner member data.

**Files:**
- Create: `app/a-propos/page.tsx`
- Modify: `app/sitemap.ts` (re-add entry)
- Modify: `components/Footer.tsx` (add link)

- [ ] **Step 1: Create the page**

Create `app/a-propos/page.tsx` with:
- Metadata targeting "ChallengersLab equipe setting LinkedIn"
- Schema: `AboutPage` + `Organization`
- H1: "Qui est ChallengersLab ?"
- Team section (reuse member data from TeamBanner pattern)
- Story section: why the team built this, what problem they solve
- CTA linking to `/#contact`
- Breadcrumb

- [ ] **Step 2: Re-add /a-propos to sitemap**

- [ ] **Step 3: Add "À propos" link in Footer**

Add in the first column after "L'équipe":
```tsx
<a href="/a-propos" className="hover:text-text-primary transition-colors">À propos</a>
```

- [ ] **Step 4: Verify build + commit**

```bash
git add app/a-propos/page.tsx app/sitemap.ts components/Footer.tsx
git commit -m "feat: create /a-propos page for E-E-A-T"
```

---

## Chunk 3: Create /tarifs standalone page (transactional)

### Task 7: Create /tarifs pricing page

Pricing pages are among the highest-converting SEO pages. Currently pricing only exists as a homepage component. A standalone page targets "tarif setting linkedin", "prix prospection linkedin externalisée", "cout externalisation prospection".

**Files:**
- Create: `app/tarifs/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `components/Navbar.tsx:26` (change Offres link)
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Create the page**

Create `app/tarifs/page.tsx` with:
- Metadata: title "Tarifs setting LinkedIn externalisé | ChallengersLab", description targeting "prix prospection linkedin", "tarif setting externalisé"
- Schema: `PriceSpecification` within `Offer` entities
- H1: "Nos tarifs"
- Reuse PricingComparison data/structure but as a full page with more detail
- Add FAQ section specific to pricing (schema FAQPage)
- CTA to `/#contact`

- [ ] **Step 2: Update Navbar — change "Offres" to link to /tarifs**

In `components/Navbar.tsx:27`:
```typescript
{ label: 'Tarifs', href: '/tarifs' },
```

- [ ] **Step 3: Add to sitemap + Footer**

- [ ] **Step 4: Verify build + commit**

```bash
git add app/tarifs/page.tsx app/sitemap.ts components/Navbar.tsx components/Footer.tsx
git commit -m "feat: create standalone /tarifs page for transactional SEO"
```

---

## Chunk 4: Create /externaliser-prospection-linkedin (transactional keyword #1)

### Task 8: Create landing page for "externaliser prospection linkedin"

This is the highest-value missing keyword. People searching this are ready to buy.

**Files:**
- Create: `app/externaliser-prospection-linkedin/page.tsx`
- Modify: `app/sitemap.ts`

- [ ] **Step 1: Create the page**

Create `app/externaliser-prospection-linkedin/page.tsx` with:
- Title: "Externaliser sa prospection LinkedIn B2B | ChallengersLab"
- Description: "Externalisez votre prospection LinkedIn à une équipe dédiée : setter humain, IA signal-based, RDV qualifiés. Le guide pour décider si c'est le bon moment."
- H1: "Externaliser sa prospection LinkedIn : pour qui, quand, comment"
- Content structure:
  1. Pourquoi externaliser (vs recruter un SDR, vs automatiser)
  2. Pour qui c'est fait (personas: fondateur, consultant, solopreneur)
  3. Comment ça marche (résumé de la méthode en 3 étapes)
  4. Résultats attendus (stats, timeline)
  5. CTA: "Réserver un appel découverte"
- Schema: `Service` + `FAQPage`
- Internal links to: /methode, /tarifs, /ressources/setting-commercial-b2b

- [ ] **Step 2: Add to sitemap with priority 1.0**

- [ ] **Step 3: Verify build + commit**

```bash
git add app/externaliser-prospection-linkedin/page.tsx app/sitemap.ts
git commit -m "feat: create /externaliser-prospection-linkedin landing page"
```

---

## Chunk 5: Create /resultats page (social proof)

### Task 9: Create case studies / results page

Zero indexable social proof. All testimonials are trapped in homepage components.

**Files:**
- Create: `app/resultats/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `components/Footer.tsx`

- [ ] **Step 1: Create the page**

Create `app/resultats/page.tsx` with:
- Title: "Résultats clients — Setting LinkedIn | ChallengersLab"
- Description targeting "résultats prospection linkedin", "taux reponse linkedin B2B"
- H1: "Ce que nos clients obtiennent"
- Content:
  1. Key metrics banner (reuse SocialProof data: 20+ entrepreneurs, 400+ RDV, <7j)
  2. 3 anonymized case studies with: situation, action, result, timeline
  3. Benchmarks section: taux de réponse moyen LinkedIn vs avec ChallengersLab
  4. CTA
- Schema: `WebPage` with aggregate statistics

- [ ] **Step 2: Add to sitemap + Footer**

- [ ] **Step 3: Verify build + commit**

```bash
git add app/resultats/page.tsx app/sitemap.ts components/Footer.tsx
git commit -m "feat: create /resultats page with case studies and benchmarks"
```

---

## Chunk 6: Comparative content (2 new articles)

### Task 10: "Setting humain vs automatisation LinkedIn"

Targets: "waalaxy vs agence", "automatisation linkedin vs humain", "phantombuster vs prospection manuelle"

**Files:**
- Create: `app/ressources/setting-humain-vs-automatisation-linkedin/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `components/BlogContent.tsx` (add to articles array)

- [ ] **Step 1: Create the article**

- Title: "Setting humain vs automatisation LinkedIn : le vrai comparatif | ChallengersLab"
- H1: "Setting humain vs automatisation LinkedIn : quel choix en 2026 ?"
- Content: compare Waalaxy/PhantomBuster/Lemlist automation vs human setting on: taux de réponse, risque ban LinkedIn, personnalisation, coût réel, scalabilité
- Category: 'setting'

- [ ] **Step 2: Add to BlogContent articles array + sitemap**

- [ ] **Step 3: Commit**

---

### Task 11: "SDR interne vs SDR externalisé"

Targets: "SDR externalisé", "externaliser SDR", "SDR as a service", "recruter SDR vs externaliser"

**Files:**
- Create: `app/ressources/sdr-interne-vs-externalise/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `components/BlogContent.tsx`

- [ ] **Step 1: Create the article**

- Title: "SDR interne vs externalisé : coût réel et ROI | ChallengersLab"
- H1: "SDR interne vs SDR externalisé : le comparatif honnête"
- Content: salaire SDR + charges vs forfait externalisé, ramp-up time, turnover risk, management overhead, ROI timeline
- Category: 'setting'

- [ ] **Step 2: Add to BlogContent articles array + sitemap**

- [ ] **Step 3: Commit**

---

## Chunk 7: Navigation & maillage updates

### Task 12: Update inter-article linking

Currently articles don't link to each other systematically. The glossary links to articles, but articles don't cross-link.

**Files:**
- Modify: multiple article pages in `app/ressources/*/page.tsx`

- [ ] **Step 1: Add "Articles liés" section pattern**

At the bottom of each article, before the CTA, add a related articles section linking to 2-3 relevant articles from the same cluster. This is a manual process per article — prioritize the pillar pages first:
- `setting-commercial-b2b` → links to: script-setting-linkedin, signal-achat-linkedin, cout-setter-b2b-prix, externaliser-prospection
- `methodes-vente-b2b` → links to: challenger-sale, methode-soncas, methode-spin-selling
- `closing-b2b` → links to: discovery-call-b2b, gestion-objections-b2b, script-closing-b2b

- [ ] **Step 2: Commit**

```bash
git commit -m "seo: add inter-article cross-links on pillar pages"
```

---

## Execution order

| Priority | Chunk | Impact | Effort |
|----------|-------|--------|--------|
| 1 | Chunk 1: Quick Wins | High | 15 min |
| 2 | Chunk 2: /a-propos | Medium (E-E-A-T) | 20 min |
| 3 | Chunk 3: /tarifs | High (conversion) | 25 min |
| 4 | Chunk 4: /externaliser | Very High (keyword) | 30 min |
| 5 | Chunk 5: /resultats | High (trust) | 25 min |
| 6 | Chunk 6: Comparatifs | Medium (new traffic) | 40 min |
| 7 | Chunk 7: Maillage | Medium (authority) | 20 min |
