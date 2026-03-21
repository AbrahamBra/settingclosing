# Schema & Structured Data Audit: setting.live

**Date:** 2026-03-21
**Domain:** https://www.setting.live
**Framework:** Next.js (App Router, server-rendered)
**Audit Scope:** All pages in production sitemap

---

## Schema Score: 38/100 — Poor

| Component | Points Available | Points Earned | Details |
|-----------|-----------------|---------------|---------|
| Organization/LocalBusiness | 20 | 8 | Present as ProfessionalService (8). sameAs has only 1 platform, uses old brand URL (0 of 12) |
| Article/content schema | 15 | 12 | Present on 22+ articles (8), author as Person object (4), dateModified present (0 — see note below) |
| Person schema for author | 15 | 3 | Present on /a-propos only (3). No sameAs (0), no knowsAbout (0), no @id linking (0) |
| sameAs completeness | 15 | 2 | 1 platform linked (2). Only LinkedIn company page, and it points to /challengerslab not /setting (0 bonus) |
| speakable property | 10 | 0 | Completely absent across all pages (0) |
| BreadcrumbList | 5 | 4 | Present on most subpages (4). Missing on homepage and /methode/* has it now but inconsistent (1 deducted) |
| WebSite + SearchAction | 5 | 1 | WebSite present (1). No SearchAction / potentialAction (0) |
| No deprecated schemas | 5 | 2 | FAQPage restricted since Aug 2023 but still used on 6+ pages (2). Not harmful, but no rich result value |
| JSON-LD format | 5 | 5 | All schemas use JSON-LD exclusively (5) |
| Validation (no errors) | 5 | 1 | Multiple issues: brand confusion, duplicated global schema, unitText typo, review author names invalid (1) |
| **TOTAL** | **100** | **38** | |

**Rating:** Poor. The site has above-average schema coverage in terms of quantity (many schema blocks across many pages), but critical GEO-specific properties are missing or misconfigured. The schema tells search engines about page content but fails to establish a coherent entity identity that AI systems can use for entity resolution and citation.

---

## Detected Structured Data

**Total Unique Schema Types Found:** 12
**Format Used:** JSON-LD exclusively (correct)
**Delivery Method:** Server-rendered via Next.js `dangerouslySetInnerHTML` (correct -- visible to AI crawlers)

### Schema Type Inventory

| # | Type | Pages Found On | Format | Valid | Rich Result Eligible |
|---|------|----------------|--------|-------|---------------------|
| 1 | WebSite | ALL pages (via layout.tsx) | JSON-LD | Partial | No (missing SearchAction) |
| 2 | ProfessionalService | ALL pages (via layout.tsx) | JSON-LD | Partial | N/A (no Google rich result) |
| 3 | FAQPage | 6+ pages (homepage, /tarifs, /externaliser..., articles) | JSON-LD | Yes | RESTRICTED since Aug 2023 |
| 4 | Article | 22+ /ressources/* pages | JSON-LD | Yes | Partial (image present but author weak) |
| 5 | BreadcrumbList | /tarifs, /resultats, /methode/*, /glossaire, /ressources/* | JSON-LD | Yes | Yes |
| 6 | WebPage | /tarifs, /resultats, /methode/* | JSON-LD | Yes | N/A |
| 7 | AboutPage | /a-propos | JSON-LD | Yes | N/A |
| 8 | Organization | /a-propos | JSON-LD | Partial | No (missing logo, sameAs) |
| 9 | Service | /resultats, /externaliser-prospection-linkedin | JSON-LD | Yes | N/A |
| 10 | AggregateRating + Review | /resultats | JSON-LD | Partial | No (review author issues) |
| 11 | DefinedTerm (x18) | /glossaire | JSON-LD | Yes | N/A |
| 12 | ItemList + Offer | /tarifs | JSON-LD | Yes | N/A |

---

## Validation Results

### Global Schema Block (layout.tsx -- appears on EVERY page)

**Status:** Multiple Issues Found

| Property | Status | Issue |
|----------|--------|-------|
| @context | OK | "https://schema.org" |
| @graph | OK | Contains WebSite + ProfessionalService |
| WebSite.@id | OK | "https://www.setting.live/#website" |
| WebSite.name | WARNING | "Setting" -- acceptable but inconsistent with brand usage elsewhere |
| WebSite.alternateName | ERROR | "ChallengersLab" -- old brand name. AI models will associate this entity with ChallengersLab, creating confusion |
| WebSite.inLanguage | OK | "fr-FR" |
| WebSite.potentialAction | MISSING | No SearchAction. Required for Sitelinks Search Box rich result |
| ProfessionalService.@id | OK | "https://www.setting.live/#business" |
| ProfessionalService.name | OK | "Setting" |
| ProfessionalService.alternateName | ERROR | "ChallengersLab" -- same brand confusion issue |
| ProfessionalService.logo | MISSING | No logo property. Critical for entity identity |
| ProfessionalService.sameAs | PARTIAL | Only 1 URL: LinkedIn /company/challengerslab (old brand slug) |
| ProfessionalService.address | MISSING | No PostalAddress. Recommended for local B2B service |
| ProfessionalService.foundingDate | MISSING | Not declared |
| ProfessionalService.telephone | MISSING | No phone number in schema |
| ProfessionalService.priceRange | MISSING | Recommended for service businesses |
| OfferCatalog.itemListElement | OK | 4 offers with complete PriceSpecification |
| Offer[2].unitText | WARNING | "HUR" is not a standard UN/CEFACT code. Google accepts it but may not parse correctly. Prefer "HOUR" or describe in description |
| ContactPoint.telephone | MISSING | Only email, no phone |

**Critical Issue: Schema Duplication.** This entire block (WebSite + ProfessionalService + 4 Offers) is injected on EVERY page via layout.tsx. Per Google's guidelines, the WebSite schema should appear on the homepage only. The ProfessionalService with full OfferCatalog on every page creates unnecessary bloat (~3KB per page) and may confuse crawlers about which page is the canonical source for business entity data.

---

### Article Schema (22+ /ressources/* pages)

**Status:** Good with gaps

| Property | Status | Value/Issue |
|----------|--------|-------------|
| @context | OK | "https://schema.org" |
| @type | OK | "Article" |
| @id | OK | Full canonical URL |
| headline | OK | Descriptive, under 110 chars |
| description | OK | Present, accurate |
| author | PARTIAL | Person with name + url. Missing: sameAs, jobTitle, image, @id |
| author.name | WARNING | "Abraham" -- first name only, no family name. Weakens E-E-A-T signal |
| publisher | PARTIAL | Organization with name + url. Missing: logo (required by Google for Article rich result) |
| publisher.logo | MISSING | Required by Google for Article rich result eligibility |
| datePublished | OK | ISO 8601 format |
| dateModified | OK | Present, later than datePublished |
| inLanguage | OK | "fr-FR" |
| image | OK | Present, pointing to opengraph-image route |
| mainEntityOfPage | OK | WebPage with @id |
| articleSection | MISSING | No topic/category classification |
| wordCount | MISSING | Not declared |
| speakable | MISSING | No speakable property for AI assistant readability |

**Rich Result Eligibility (Article):** PARTIAL -- Google requires publisher.logo to be present. Without it, the Article will not generate rich results in search even though all other required properties are present.

---

### FAQPage Schema (6+ pages)

**Status:** Valid but RESTRICTED

| Property | Status | Issue |
|----------|--------|-------|
| @context | OK | "https://schema.org" |
| @type | OK | "FAQPage" |
| mainEntity | OK | Array of Question objects |
| Question.name | OK | Well-formed questions |
| Question.acceptedAnswer | OK | Answer objects with text |

**Rich Result Eligibility:** NO. Since August 2023, Google only shows FAQ rich results for well-known government and health authority websites. Setting.live will NOT receive FAQ rich results. However, the schema is NOT harmful -- it provides semantic structure that AI models can use to understand Q&A content.

**Recommendation:** Keep existing FAQPage schemas for AI semantic value. Do not prioritize adding new ones for rich result purposes.

---

### AggregateRating + Review Schema (/resultats)

**Status:** Issues Found

| Property | Status | Issue |
|----------|--------|-------|
| Service.name | OK | "Setting commercial LinkedIn externalise" |
| Service.provider | OK | Organization with name + url |
| AggregateRating.ratingValue | OK | "4.8" |
| AggregateRating.bestRating | OK | "5" |
| AggregateRating.ratingCount | WARNING | "20" -- but only 3 reviews are provided. The gap between ratingCount (20) and reviewCount (3) is large. Google may flag this |
| Review[].author.name | WARNING | Generic titles used as names ("Consultant strategie IT", "Fondateur agence marketing digital", "Coach business B2B"). Google prefers real person names for review authors |
| Review[].datePublished | MISSING | No date on any review. Recommended by Google |
| Review[].publisher | MISSING | No publisher for reviews |

**Rich Result Eligibility:** PARTIAL. The schema is structurally valid but the generic author names weaken trust signals. Google may choose not to display review rich results with anonymous/generic authors.

---

### Organization Schema (/a-propos)

**Status:** Incomplete for GEO

| Property | Status | Issue |
|----------|--------|-------|
| @type | OK | "Organization" |
| name | OK | "Setting" |
| url | OK | "https://www.setting.live" |
| description | OK | Present |
| logo | MISSING | Not declared. Critical for entity identity |
| sameAs | MISSING | Not present on this schema (only on ProfessionalService in layout) |
| foundingDate | MISSING | Not declared |
| employee | OK | 3 Person objects with name, jobTitle, description |
| employee[].sameAs | MISSING | No LinkedIn/social profiles for team members |
| employee[].url | MISSING | No individual URL for employees |
| employee[].image | MISSING | No headshots in schema |
| employee[].@id | MISSING | No persistent identifier for cross-referencing |

---

### DefinedTerm Schema (/glossaire)

**Status:** Well-implemented

| Property | Status | Issue |
|----------|--------|-------|
| @type | OK | "DefinedTerm" |
| @id | OK | Fragment IDs for each term |
| name | OK | 18 terms defined |
| description | OK | Detailed definitions |
| inDefinedTermSet | OK | Proper back-reference to DefinedTermSet |

**Note:** This is above-average implementation. DefinedTerm schemas help AI models understand domain terminology, which is valuable for entity recognition in a niche topic like "setting commercial B2B."

---

### BreadcrumbList Schema

**Status:** Good coverage

Present on: /tarifs, /resultats, /methode/setting-linkedin, /glossaire, /ressources/*, /a-propos
Missing on: Homepage (not needed), /externaliser-prospection-linkedin

All BreadcrumbList schemas are properly structured with position, name, and item URL. URLs correctly use www.setting.live.

**Rich Result Eligibility:** YES. All detected BreadcrumbList schemas qualify for Google breadcrumb rich results.

---

## GEO-Critical Schema Assessment

| Schema | Status | GEO Impact | Assessment |
|--------|--------|------------|------------|
| Organization + sameAs | PARTIAL | **Critical** | ProfessionalService exists globally but has only 1 sameAs (LinkedIn with old brand slug). No Wikipedia, Wikidata, YouTube, Crunchbase, Twitter links. Organization on /a-propos has zero sameAs. AI models cannot build a cross-platform entity graph. |
| Person (author) | WEAK | **High** | Author "Abraham" on articles has only name + url. No sameAs, no jobTitle, no image, no knowsAbout, no @id. AI models cannot verify author expertise or link to external profiles. |
| Article + dateModified | GOOD | **High** | Present on all 22+ articles with proper ISO dates. This is the strongest GEO signal on the site. |
| speakable | ABSENT | **Medium** | Zero speakable properties on any page. The site has excellent definition-style content perfect for voice/AI assistant extraction but does not signal this to crawlers. |
| BreadcrumbList | GOOD | **Low** | Present on most subpages. Well-structured. |
| WebSite + SearchAction | WEAK | **Low** | WebSite exists but has no SearchAction for sitelinks search box. Low priority given the site's current indexation status. |

---

## sameAs Entity Linking

**Current sameAs links found:** 1

| Platform | Linked | URL | Assessment |
|----------|--------|-----|------------|
| Wikipedia | No | Not linked | CRITICAL gap. Strongest entity signal for AI. Not applicable until Wikipedia article exists. |
| Wikidata | No | Not linked | Would strengthen entity graph. Requires creating Wikidata entry. |
| LinkedIn (Company) | Yes | https://www.linkedin.com/company/challengerslab | WRONG SLUG -- uses old brand name "challengerslab" |
| LinkedIn (Personal) | No | Not linked | Abraham and team have no personal LinkedIn sameAs |
| YouTube | No | Not linked | No YouTube presence detected |
| Crunchbase | No | Not linked | No Crunchbase profile detected |
| Twitter/X | No | Not linked | No Twitter presence detected |
| GitHub | No | Not linked | No public GitHub presence |
| Facebook | No | Not linked | No Facebook page detected |

**Assessment:** Critically weak. A single sameAs link pointing to an old brand slug is worse than having none, because it reinforces entity confusion between "Setting" and "ChallengersLab." AI models performing entity resolution will either fail to link or link to the wrong entity.

---

## Deprecated/Restricted Schemas

| Schema | Status | Pages | Recommendation |
|--------|--------|-------|----------------|
| FAQPage | **RESTRICTED** (Aug 2023) | 6+ pages | KEEP. No rich result value for non-authority sites, but still provides semantic structure for AI models. Already implemented, removal gains nothing. |
| HowTo | **REMOVED** (Sep 2023) | Referenced in original audit as present on 6 pages | VERIFY and REMOVE if still present. Zero search benefit since Sep 2023. Adds page weight for no gain. |

No other deprecated schemas found.

---

## JavaScript Rendering Risk

**Schema Delivery Method:** Server-Rendered (SSR via Next.js)

**Risk Level: LOW**

All JSON-LD structured data is defined as static constants in Next.js page components and rendered server-side via `dangerouslySetInnerHTML`. The JSON-LD appears in the initial HTML response, not injected after client-side JavaScript execution.

This means:
- Google processes these schemas immediately (no delayed indexing risk)
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot) will see all schemas even without JavaScript execution
- Verified by inspecting source code: all schemas are defined as top-level `const` objects and rendered in the component JSX

**One concern:** The global schema in layout.tsx uses `dangerouslySetInnerHTML` which Next.js renders server-side. Verified: this is correctly SSR'd.

---

## Recommended JSON-LD Templates

### Template 1: Organization (Replace global ProfessionalService in layout.tsx)

This template replaces the existing ProfessionalService block with a comprehensive Organization schema that enables proper AI entity resolution.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.setting.live/#website",
      "url": "https://www.setting.live",
      "name": "Setting",
      "description": "Setting commercial LinkedIn externalise pour fondateurs, freelances et solopreneurs B2B.",
      "inLanguage": "fr-FR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.setting.live/glossaire?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.setting.live/#business",
      "name": "Setting",
      "url": "https://www.setting.live",
      "description": "Setting commercial LinkedIn externalise : setter dedie, ciblage IA par signaux d'achat, RDV qualifies des la premiere semaine.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.setting.live/logo-setting.png",
        "width": 512,
        "height": 512
      },
      "image": "https://www.setting.live/opengraph-image",
      "sameAs": [
        "https://www.linkedin.com/company/[REPLACE: new-setting-linkedin-slug]",
        "[REPLACE: https://twitter.com/setting_live if created]",
        "[REPLACE: https://www.youtube.com/@setting-live if created]",
        "[REPLACE: https://www.crunchbase.com/organization/setting-live if created]"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@setting.live",
        "contactType": "sales",
        "availableLanguage": ["French"],
        "areaServed": {
          "@type": "Country",
          "name": "France"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "[REPLACE: City name]"
      },
      "foundingDate": "[REPLACE: YYYY-MM-DD]",
      "priceRange": "490-5000 EUR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Offres Setting",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Setting LinkedIn — Setup",
            "description": "Cadrage ICP, setup outils, redaction des sequences de prospection.",
            "url": "https://www.setting.live/methode/setting-linkedin",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": 490,
              "priceCurrency": "EUR",
              "valueAddedTaxIncluded": false
            }
          },
          {
            "@type": "Offer",
            "name": "Setting LinkedIn — Abonnement",
            "description": "Pipeline LinkedIn cle en main : setter dedie, IA signal-based, reporting hebdomadaire, RDV qualifies.",
            "url": "https://www.setting.live/methode/setting-linkedin",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 500,
              "priceCurrency": "EUR",
              "unitText": "MONTH",
              "referenceQuantity": {
                "@type": "QuantitativeValue",
                "value": 1,
                "unitCode": "MON"
              },
              "valueAddedTaxIncluded": false
            }
          },
          {
            "@type": "Offer",
            "name": "Setting telephonique — Qualification de leads",
            "description": "Qualification telephonique de vos leads entrants : chaque lead est appele, score et route.",
            "url": "https://www.setting.live/methode/setting-telephonique",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": 500,
              "priceCurrency": "EUR",
              "unitText": "HOUR",
              "valueAddedTaxIncluded": false
            }
          },
          {
            "@type": "Offer",
            "name": "Setup Nurturing",
            "description": "Construction sur-mesure du workflow de scoring, nurturing et routing.",
            "url": "https://www.setting.live/methode/nurturing",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": 1990,
              "priceCurrency": "EUR",
              "valueAddedTaxIncluded": false
            }
          }
        ]
      }
    }
  ]
}
```

**Implementation:** Replace the existing `jsonLd` constant in `app/layout.tsx`. Remove `alternateName: "ChallengersLab"` entirely. Add the logo file to `/public/`.

---

### Template 2: Enhanced Article Schema (for all /ressources/* pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.setting.live/ressources/[REPLACE: slug]",
  "headline": "[REPLACE: Article title, max 110 chars]",
  "description": "[REPLACE: Article meta description]",
  "author": {
    "@type": "Person",
    "@id": "https://www.setting.live/#author-abraham",
    "name": "Abraham [REPLACE: Family name]",
    "url": "https://www.setting.live/a-propos",
    "jobTitle": "IA & Automatisation",
    "worksFor": {
      "@type": "Organization",
      "@id": "https://www.setting.live/#business"
    },
    "sameAs": [
      "[REPLACE: https://www.linkedin.com/in/abraham-profile]"
    ],
    "knowsAbout": [
      "Setting commercial B2B",
      "Prospection LinkedIn",
      "Automatisation commerciale",
      "Signaux d'achat LinkedIn"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.setting.live/#business",
    "name": "Setting",
    "url": "https://www.setting.live",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.setting.live/logo-setting.png"
    }
  },
  "datePublished": "[REPLACE: YYYY-MM-DD]",
  "dateModified": "[REPLACE: YYYY-MM-DD]",
  "inLanguage": "fr-FR",
  "url": "https://www.setting.live/ressources/[REPLACE: slug]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.setting.live/ressources/[REPLACE: slug]"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://www.setting.live/ressources/[REPLACE: slug]/opengraph-image",
    "width": 1200,
    "height": 630
  },
  "articleSection": "[REPLACE: Setting | Methodes de vente | Prospection]",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["article h1", "article > p:first-of-type", ".definition-block"]
  }
}
```

**Implementation:** Update the `articleSchema` constant in each `/ressources/*/page.tsx`. The key additions are: publisher.logo, author with @id + sameAs + jobTitle + knowsAbout, articleSection, and speakable.

---

### Template 3: Enhanced Person Schema (for /a-propos Organization.employee)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.setting.live/#organization",
  "name": "Setting",
  "url": "https://www.setting.live",
  "description": "Service de prospection LinkedIn externalisee pour fondateurs, freelances et solopreneurs B2B.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.setting.live/logo-setting.png"
  },
  "sameAs": [
    "https://www.linkedin.com/company/[REPLACE: new-setting-slug]"
  ],
  "employee": [
    {
      "@type": "Person",
      "@id": "https://www.setting.live/#person-brahim",
      "name": "Brahim [REPLACE: Family name]",
      "jobTitle": "Setter LinkedIn B2B",
      "description": "Envoie les messages, qualifie les prospects et decroche les RDV.",
      "worksFor": { "@id": "https://www.setting.live/#organization" },
      "sameAs": ["[REPLACE: https://www.linkedin.com/in/brahim-profile]"]
    },
    {
      "@type": "Person",
      "@id": "https://www.setting.live/#author-abraham",
      "name": "Abraham [REPLACE: Family name]",
      "jobTitle": "IA & Automatisation",
      "description": "Construit les outils de ciblage et les automatisations.",
      "worksFor": { "@id": "https://www.setting.live/#organization" },
      "sameAs": ["[REPLACE: https://www.linkedin.com/in/abraham-profile]"],
      "knowsAbout": [
        "Setting commercial B2B",
        "Automatisation LinkedIn",
        "Intelligence artificielle appliquee a la prospection"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.setting.live/#person-abdelhay",
      "name": "Abdelhay [REPLACE: Family name]",
      "jobTitle": "Strategie commerciale",
      "description": "Definit l'angle commercial, les scripts et la strategie de conversion.",
      "worksFor": { "@id": "https://www.setting.live/#organization" },
      "sameAs": ["[REPLACE: https://www.linkedin.com/in/abdelhay-profile]"]
    }
  ]
}
```

**Implementation:** Replace the existing `organizationSchema` in `app/a-propos/page.tsx`. Critical additions: @id on all Person entities (enables cross-referencing with Article author), sameAs for LinkedIn profiles, logo on Organization.

---

### Template 4: speakable on Homepage FAQ

Add `speakable` to the homepage FAQPage schema to signal AI assistant readability.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.setting.live/#faq",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".faq-section h2",
      ".faq-section [data-faq-answer]"
    ]
  },
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[existing questions]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[existing answers]"
      }
    }
  ]
}
```

**Implementation:** Add `speakable` to the existing `homeFaqSchema` in `app/page.tsx`. Also add corresponding CSS selectors or `data-*` attributes to the FAQ component HTML.

---

### Template 5: Enhanced Review Schema (/resultats)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Setting commercial LinkedIn externalise",
  "provider": {
    "@type": "Organization",
    "@id": "https://www.setting.live/#business",
    "name": "Setting",
    "url": "https://www.setting.live"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  "serviceType": "Prospection LinkedIn B2B",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "ratingCount": "20",
    "reviewCount": "3"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "[REPLACE: Real client first name + last initial, e.g. 'Marc D.']"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "datePublished": "[REPLACE: YYYY-MM-DD]",
      "reviewBody": "[REPLACE: Actual client testimonial]"
    }
  ]
}
```

**Implementation:** Update `serviceSchema` in `app/resultats/page.tsx`. Key changes: use real client names (even first name + last initial), add datePublished to each review, use Country object for areaServed.

---

## Priority Actions

### CRITICAL (This Week)

1. **Remove `alternateName: "ChallengersLab"` from ALL schemas.** This is the single most damaging schema issue. Every page on the site tells AI models that Setting's alternate name is ChallengersLab, creating entity confusion. If the LinkedIn company page is still under /challengerslab, the sameAs URL reinforces this confusion.
   - Files: `app/layout.tsx` (lines 53, 60)
   - Impact: Fixes entity identity for ALL pages simultaneously

2. **Move WebSite + ProfessionalService schema OUT of layout.tsx.** The global schema with full OfferCatalog should only appear on the homepage. Place the WebSite schema on `app/page.tsx` only. On subpages, reference the business entity via `@id` without repeating the full definition.
   - File: `app/layout.tsx` -> `app/page.tsx`
   - Impact: Reduces schema bloat by ~3KB per page, eliminates duplicate entity signals

3. **Add `publisher.logo` to all Article schemas.** Without this, zero Article rich results are possible in Google.
   - Files: All 22+ `app/ressources/*/page.tsx`
   - Impact: Enables Article rich result eligibility

### HIGH (Week 1-2)

4. **Update LinkedIn sameAs URL to current company slug.** If the LinkedIn company page has been renamed from /challengerslab to a new slug, update the URL. If it has not been renamed, rename it first.
   - File: `app/layout.tsx` (line 64)

5. **Add @id to author Person entities and use consistent cross-referencing.** The same author "Abraham" appears in 22+ Article schemas and in the /a-propos Organization schema. Currently there is no @id linking them. Add `@id: "https://www.setting.live/#author-abraham"` to both locations.
   - Files: All `app/ressources/*/page.tsx`, `app/a-propos/page.tsx`

6. **Add `sameAs` with LinkedIn personal profiles to all Person schemas.** Each team member (Brahim, Abraham, Abdelhay) should have at minimum their LinkedIn profile in sameAs.
   - File: `app/a-propos/page.tsx`

7. **Add `logo` to Organization and ProfessionalService schemas.** Create a square logo PNG (512x512 or larger) and reference it.
   - Files: `app/layout.tsx`, `app/a-propos/page.tsx`

### MEDIUM (Week 2-4)

8. **Add `speakable` to Article and FAQPage schemas.** Target introductory paragraphs and definition blocks that are suitable for AI assistant voice readout.
   - Files: All article pages, homepage

9. **Fix Review author names on /resultats.** Replace generic titles ("Consultant strategie IT") with real client names (even pseudonymized: "Marc D., Consultant IT"). Google and AI models treat generic names as weak trust signals.
   - File: `app/resultats/page.tsx`

10. **Add `datePublished` to all Review schemas.** Currently missing on all 3 reviews.
    - File: `app/resultats/page.tsx`

11. **Add `articleSection` and `wordCount` to Article schemas.** Helps AI models categorize content.
    - Files: All article pages

12. **Fix `unitText: "HUR"` to `"HOUR"`.** "HUR" is the correct UN/CEFACT code but "HOUR" is more widely recognized by parsers.
    - File: `app/layout.tsx` (line 109)

### LOW (Month 2+)

13. **Add WebSite SearchAction** when a functional search feature exists on the site.

14. **Create Wikidata entity** for Setting when the brand has enough external references.

15. **Add `knowsAbout`** to the author Person schema on article pages.

16. **Add `foundingDate` and `address`** to Organization schema once comfortable sharing this data.

---

## Schema Architecture Recommendation

The current architecture injects the full business entity schema on every page via `layout.tsx`. The recommended architecture:

```
layout.tsx:
  - Nothing (or minimal @id reference only)

app/page.tsx (homepage):
  - WebSite + SearchAction
  - ProfessionalService + OfferCatalog (full)
  - FAQPage

app/ressources/*/page.tsx (articles):
  - Article (with author @id reference, publisher @id reference)
  - FAQPage (where applicable)
  - BreadcrumbList

app/tarifs/page.tsx:
  - WebPage + BreadcrumbList
  - ItemList + Offers (pricing-focused)
  - FAQPage

app/resultats/page.tsx:
  - Service + AggregateRating + Reviews
  - BreadcrumbList

app/a-propos/page.tsx:
  - Organization (with employees, full sameAs)
  - AboutPage

app/glossaire/page.tsx:
  - DefinedTermSet + DefinedTerms (current -- well done)
  - BreadcrumbList
```

This architecture eliminates duplication, ensures each page signals its specific purpose, and uses @id cross-references to connect entities without repeating 3KB of JSON-LD on every page load.

---

## Score Breakdown vs Previous Audit

The previous GEO audit (2026-03-20) scored Structured Data at 76/100. That score reflected schema **coverage** (many schema types, many pages). This deep-dive audit scores **GEO-specific quality** at 38/100, reflecting:

| Dimension | Previous Assessment | Deep-Dive Finding |
|-----------|-------------------|-------------------|
| Coverage | "Extensive" | Confirmed: 12 schema types across 37 pages |
| Entity Identity | "Needs sameAs" | CRITICAL: alternateName confusion, 1 sameAs with wrong slug |
| Author Authority | "Single author, weak" | Confirmed: no @id, no sameAs, first-name only |
| AI Discoverability | Not assessed | POOR: no speakable, no SearchAction, no cross-platform linking |
| Duplication | Not flagged | ISSUE: Full schema repeated on every page via layout.tsx |
| Rich Result Eligibility | "Article image missing" | Fixed for image, but publisher.logo still missing |
| Validation | Not detailed | Multiple issues: unitText, review authors, brand confusion |

**Reconciled Score:** The site's schema implementation is **quantitatively strong** (many types, good coverage) but **qualitatively weak for GEO** (poor entity identity, no cross-platform linking, no AI-specific markup).

---

*Generated 2026-03-21 by GEO Schema & Structured Data Agent*
