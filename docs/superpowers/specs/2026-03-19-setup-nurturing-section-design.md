# Setup Nurturing — Section Pricing Add-on

**Date:** 2026-03-19
**Status:** Approved

## Problem

ChallengersLab's pricing page has a single Setting card (500 €/mois + prime/RDV). There is no offering for prospects who already have a large lead base but lack a system to exploit it. The site currently mentions that having "lead magnets actifs" lowers the variable fee, but doesn't offer to build that infrastructure.

## Solution

Add a "Setup Nurturing" section below the existing Setting card in `PricingComparison.tsx`. This is a visually subordinate block (not a full DarkCard) that presents the workflow build as a natural extension of the setting service.

## Target audience

Prospects who have accumulated hundreds or thousands of contacts (newsletter subscribers, event attendees, LinkedIn connections, CRM contacts) but have zero system to score, nurture, and convert them into qualified meetings.

## Positioning

- **Not a standalone product** — it's an acceleration layer for the setting service
- **Built with the client, on their existing tools** — sur-mesure, not a SaaS
- **Cyclical and iterative** — the system is not a one-shot delivery. It refines continuously: scoring rules sharpen with real engagement data, nurturing sequences adapt based on conversion feedback, routing logic improves as patterns emerge. Each cycle produces better leads.

## Visual design

- **Style:** Lightweight block following the InsightCallout pattern: `border-l-[3px] border-[#C87533]` with subtle background fill `bg-[#C87533]/[0.04]` and `rounded-r-lg`. NOT a DarkCard — visually subordinate to the Setting card above. Uses brand copper accent (`#C87533`) to differentiate from the Setting card's purple (`#A78BFA`).
- **Position:** Below the Setting card, inside the existing `max-w-2xl mx-auto` container, above the closing mention ("Besoin d'un accompagnement sur le closing ?")
- **Animation:** Wrap in `<ScrollReveal>` for staggered entrance after the Setting card.
- **Responsive:** Inherits the `max-w-2xl mx-auto` constraint from the parent container. No special mobile treatment needed beyond standard padding.

## Content

### Eyebrow
`Setup Nurturing`

### Headline
`Votre base de leads dort. On la réveille.`

### Description
Pour ceux qui ont une audience, des contacts, des inscrits — mais zéro système pour scorer, nourrir et convertir. On construit avec vous, sur vos outils, le workflow qui transforme vos leads en RDV qualifiés.

### Cyclical messaging (italic paragraph below description)
*Un système qui s'affine à chaque cycle : les règles de scoring se précisent avec les données réelles, les séquences s'adaptent aux retours de conversion, le routing s'optimise. Plus le temps passe, plus la machine est efficace.*

### Livrables
- Scoring des leads selon signaux d'engagement
- Séquences de nurturing personnalisées
- Routing automatique vers appel commercial
- Construit sur-mesure sur votre stack existante

### Pricing
- **1 500 €** — mise en place du système avec le client
- **Prime par RDV livré** pendant toute la durée de l'accompagnement

### CTA
- **Label:** `Construire mon système →`
- **Target:** `href="#contact"` (same as Setting card)

## Technical scope

### Files modified
- `components/PricingComparison.tsx` — add Setup Nurturing block below the Setting card
- `app/layout.tsx` — add Setup Nurturing to JSON-LD OfferCatalog

### Files NOT modified
- No new components — the block lives inline in PricingComparison
- No API changes — no new form fields or contact route changes
- No navbar changes — no new navigation link

## JSON-LD addition

Add a second Offer to the existing OfferCatalog:

```json
{
  "@type": "Offer",
  "name": "Setup Nurturing",
  "description": "Construction sur-mesure du workflow de scoring, nurturing et routing pour transformer une base de leads existante en RDV qualifiés.",
  "priceSpecification": {
    "@type": "PriceSpecification",
    "price": 1500,
    "priceCurrency": "EUR",
    "valueAddedTaxIncluded": false
  }
}
```

> **Note:** The "prime par RDV" variable component is intentionally omitted from JSON-LD, consistent with how the Setting offer handles its variable component (only the base 500€ is declared). The nurturing offer uses `price` (fixed) instead of `minPrice` (used by Setting) since 1 500 € is the full setup fee, not a minimum.
