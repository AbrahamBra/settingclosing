# Platform Readiness Analysis -- setting.live

**Analysis Date:** 2026-03-21
**Target URL:** https://www.setting.live
**Domain Age:** ~1 day (SSL issued March 20, 2026)
**Pages Indexed:** 36 in sitemap
**Stack:** Next.js SSR, French language (fr-FR), hreflang implemented
**Platform Readiness Average: 50/100**

---

## Platform Scores Overview

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 62/100 | Fair |
| ChatGPT Web Search | 51/100 | Poor |
| Perplexity AI | 44/100 | Poor |
| Google Gemini | 45/100 | Poor |
| Bing Copilot | 48/100 | Poor |

**Strongest Platform:** Google AI Overviews (62/100) -- The site's content structure (FAQ schemas, definition patterns, answer-target headings, HowTo markup) is well-designed for AIO extraction. The 18-term glossary with DefinedTerm schema and 20+ articles with FAQPage schema create strong snippet candidates once the domain earns authority.

**Weakest Platform:** Perplexity AI (44/100) -- Zero community validation signals (no Reddit, no forums, no third-party reviews), combined with a brand-new domain and no external citations, severely limits Perplexity's ability to validate this source. Perplexity's heavy reliance on Reddit and community-validated content makes this the hardest platform to crack for a new brand.

---

## Google AI Overviews

**Score: 62/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Content Structure | 32/40 | Strong FAQ schemas on 3+ pages, DefinedTerm glossary (18 terms), HowTo schema on process articles, question-based H1/H2 headings, answer-target definition patterns. Missing comparison tables on key pages. |
| Source Authority | 10/30 | Domain is 1 day old with zero backlinks and no SERP presence. Two external citations (Marketing Donut, HubSpot) in articles. Cannot rank in top 10 yet. |
| Technical Signals | 20/30 | Clean heading hierarchy, proper HTML semantics with Next.js SSR, comprehensive schema markup (Article, FAQPage, BreadcrumbList, ProfessionalService, OfferCatalog, DefinedTerm, AggregateRating, HowTo). Hreflang present. |

### Content Structure Details

**FAQ Schema Coverage (Excellent):**
- Homepage: 5 Q&A pairs in FAQPage JSON-LD
- /tarifs: 6 Q&A pairs matching pricing queries ("Combien coute le Setting LinkedIn?")
- /externaliser-prospection-linkedin: 5 Q&A pairs
- Multiple article pages: 5 Q&A pairs each
- FAQ questions mirror natural French search queries precisely

**Definition Patterns (Excellent):**
- 18-term glossary uses consistent "X est..." and "X designe..." patterns
- Highlighted yellow definition blocks on article pages serve as extraction targets
- Each glossary term has DefinedTerm schema with name, description, and inDefinedTermSet

**HowTo Schema (Good but Incomplete):**
- Present on /ressources/script-setting-linkedin with 6 HowToStep entries
- MISSING on /methode/setting-linkedin (9-step process -- the most natural HowTo candidate)
- MISSING on /ressources/prospection-linkedin-b2b, /ressources/qualification-leads-b2b, /ressources/discovery-call-b2b, /ressources/comment-devenir-setter-b2b (all process-oriented articles)

**Comparison Tables (Weak):**
- /resultats has one comparison table (traditional vs. Setting approach)
- /tarifs presents pricing in card format but no HTML `<table>` element
- /ressources/sdr-interne-vs-externalise and /ressources/difference-setting-closing are comparison topics but use prose format instead of tables
- AIO can extract `<table>` elements directly into overview panels -- this is a missed opportunity

**Answer-Target Patterns (Strong):**
- Question-based H1 headings: "C'est quoi un setter en B2B?", "Externaliser sa prospection LinkedIn : pour qui, quand, comment"
- Direct answer paragraphs immediately after headings follow the 40-60 word concise answer pattern
- Guarantee statements are clearly formatted ("Moins de 5 RDV qualifies? Le mois suivant est offert")

### Source Authority Assessment

**Critical Blocker: AIO overwhelmingly cites pages already ranking in organic positions 1-10.** A 1-day-old domain with zero backlinks cannot enter AIO results regardless of content quality. The structural work is excellent but dormant until the domain earns authority.

Partial mitigation: two articles cite external sources (Marketing Donut statistics, HubSpot State of Marketing Report). This is a good signal but insufficient volume. Most performance claims (">20% response rate," "2-4 RDV/week") are self-attributed without methodology.

### Technical Assessment

- Clean heading hierarchy across all 36 pages (no skipped H-levels)
- All content server-rendered via Next.js RSC (AI crawlers see full content without JavaScript)
- JSON-LD structured data delivered inline on every page
- Hreflang tags (fr-FR + x-default) on all pages
- Sitemap at /sitemap.xml with lastmod dates and priority values
- No google-site-verification meta tag confirmed (unverifiable whether Search Console is configured)

**Optimization Actions:**
1. **Add HTML `<table>` comparison tables to /tarifs, /ressources/sdr-interne-vs-externalise, and /ressources/difference-setting-closing.** Convert prose comparisons into structured tables with columns like Cost, Time-to-Value, Flexibility, and Risk. AIO extracts tables directly and displays them in overview panels.
2. **Extend HowTo schema to 5+ additional process-oriented articles.** Priority targets: /methode/setting-linkedin (9-step process), /ressources/prospection-linkedin-b2b, /ressources/qualification-leads-b2b, /ressources/discovery-call-b2b, /ressources/comment-devenir-setter-b2b.
3. **Build organic rankings through backlink acquisition.** Pursue guest posts on BDM.fr, Maddyness, and Journal du Net. Get listed on French SaaS directories. Target a citation from LinkForce.in (they already cover the "setting commercial" concept and could link to your definition page as a primary source).

---

## ChatGPT Web Search

**Score: 51/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Entity Recognition | 8/35 | No Wikipedia, no Wikidata, no Knowledge Graph. sameAs links only to LinkedIn /company/challengerslab (old brand). Zero third-party entity confirmations. |
| Content Preferences | 28/40 | Strong factual density with specific pricing, performance metrics, and guarantees. Publication/modification dates in Article schema. Author bylines present but lack credentials and Person schema. Statistical claims partially sourced. |
| Crawler Access | 15/25 | GPTBot and ChatGPT-User explicitly allowed. OAI-SearchBot not explicitly listed. llms.txt present but uses old brand name "ChallengersLab" throughout, creating entity confusion. |

### Entity Recognition Details

**Wikipedia/Wikidata (Absent):**
- No Wikipedia article for "Setting" (the agency) or "ChallengersLab"
- No Wikidata entity
- Wikipedia is ChatGPT's strongest entity signal -- its absence means ChatGPT cannot confidently identify this brand when answering entity-level questions

**Third-Party Entity Confirmation (Absent):**
- Web search for "setting.live" and "ChallengersLab" returned zero relevant results on authoritative third-party sites
- No mentions on Crunchbase, Trustpilot, Google Reviews, G2, or any review platform
- No press coverage detected
- The brand is invisible to ChatGPT's entity resolution system

**sameAs Schema (Weak):**
- Only one sameAs entry: `https://www.linkedin.com/company/challengerslab`
- Links to old brand name URL
- Missing links to any other platform (no Crunchbase, no Trustpilot, no social profiles)
- No Person sameAs for founders/team members

### Content Preferences Details

**Factual Density (Strong):**
- Specific pricing: 490 EUR setup, 500 EUR/mois, prime 50-250 EUR/RDV
- Performance metrics: >20% response rate, 2-4 RDV/week, <7 days to first meeting
- Guarantee terms: "Moins de 5 RDV qualifies? Le mois suivant est offert"
- These are quotable, verifiable facts that ChatGPT can cite directly

**Expert Attribution (Weak):**
- Author bylines exist ("Abraham, Founder & Automation") but without:
  - Person schema with structured credentials
  - sameAs linking to personal LinkedIn profile
  - jobTitle, education, or expertise indicators
  - Author page with biography
- ChatGPT favors content from identifiable experts with verifiable credentials

**Statistical Sourcing (Mixed):**
- Two external citations found: Marketing Donut, HubSpot State of Marketing Report
- Most performance claims self-attributed ("missions en cours," no methodology)
- ChatGPT prefers claims backed by named external sources

**Publication Dates (Good):**
- All Article schemas include datePublished and dateModified
- Dates are recent (March 2026)
- Modification dates visible in structured data

### Crawler Access Details

**Explicit Bot Allowances:**
- GPTBot: `Allow: /` -- explicitly allowed
- ChatGPT-User: `Allow: /` -- explicitly allowed
- OAI-SearchBot: NOT explicitly listed (falls under wildcard `User-agent: *` which allows, but explicit is stronger)

**llms.txt Brand Confusion (Critical):**
- llms.txt header: "# ChallengersLab"
- llms.txt body references "ChallengersLab" 3 times
- llms-full.txt header: "# ChallengersLab -- Contenu complet"
- llms-full.txt introduction uses "ChallengersLab"
- Both files link to `linkedin.com/company/challengerslab`
- When ChatGPT's search bot reads these files, it registers the entity as "ChallengersLab," NOT "Setting"
- Queries about "Setting prospection LinkedIn" will not connect to the ChallengersLab entity and vice versa

**Optimization Actions:**
1. **CRITICAL: Update llms.txt and llms-full.txt to use "Setting" as the brand name.** Replace all instances of "ChallengersLab" with "Setting." Update header to "# Setting -- Prospection LinkedIn B2B externalisee." Add a transitional line: "Anciennement ChallengersLab." Update LinkedIn URL once migrated. This fixes entity fragmentation across all LLM-powered platforms.
2. **Add OAI-SearchBot to robots.txt explicitly.** Add two lines: `User-agent: OAI-SearchBot` / `Allow: /`. While the wildcard covers it, explicit inclusion is detected by OpenAI's crawler configuration system and signals intent.
3. **Add Person schema for article authors with LinkedIn sameAs links.** For every Article schema, add: `"author": {"@type": "Person", "name": "Abraham", "jobTitle": "Fondateur & Automation Lead", "url": "https://www.setting.live/a-propos", "sameAs": ["https://www.linkedin.com/in/[actual-profile]"]}`. This strengthens expert attribution.

---

## Perplexity AI

**Score: 44/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Community Validation | 2/30 | Zero Reddit presence. Zero forum discussions. Zero third-party reviews. Zero Quora mentions. Complete community vacuum. |
| Source Directness | 18/30 | Original methodology, original glossary definitions, specific pricing data, case study results. All primary source content. Performance claims self-attributed without third-party validation. |
| Content Freshness | 14/20 | All pages dated March 2026. datePublished/dateModified in schemas. No update cadence evaluable (domain is 1 day old). |
| Technical Access | 10/20 | PerplexityBot explicitly allowed. SSR content (critical -- Perplexity does limited JS). No IndexNow, no proactive crawler notification. Domain likely not yet discovered by PerplexityBot. |

### Community Validation Details

**Reddit (Zero):**
- Searched: "setting commercial," "setting linkedin," "challengerslab," "setting.live" on Reddit
- Zero results returned
- Perplexity heavily indexes Reddit for community-validated information
- For a query like "c'est quoi le setting commercial B2B," Perplexity would first look for Reddit discussions before citing a commercial site
- This is the single largest gap for Perplexity readiness

**Forums and Q&A (Zero):**
- No Stack Overflow mentions (not relevant for this domain)
- No Quora discussions about the brand or its methodology
- No French-language forum discussions detected (no Journal du Net forums, no Comment Ca Marche, no French B2B communities)

**Third-Party Reviews (Zero):**
- No Trustpilot profile
- No Google Reviews
- No G2 or Capterra listing
- No client testimonials on external platforms
- The only reviews exist on setting.live itself (3 reviews on /resultats page)

**Web Search Competition:**
- For "setting commercial," one competing definition exists at LinkForce.in
- For "prospection LinkedIn B2B," well-established competitors dominate: LaGrowthMachine, Waalaxy, Evaboot, IdeaAgency
- Setting.live is not yet cited by any of these competitors or industry overview articles

### Source Directness Details

**Primary Source Strengths:**
- The 18-term glossary provides original definitions for niche French B2B terms
- The "setting commercial" concept is relatively new -- setting.live could become THE primary source
- Original methodology (signal-based prospection) is proprietary and not available elsewhere
- Pricing data is specific and verifiable
- Case study results (12 RDV first month, 4 RDV/week in cruising speed) are original data

**Primary Source Weaknesses:**
- All performance claims lack independent verification
- Case studies use job titles only ("Consultant strategie IT") without company names
- No methodology documentation for claimed metrics
- Perplexity assigns lower citation confidence to self-reported claims

### Content Freshness Details

- All pages show lastmod dates of March 16-20, 2026
- Article schema includes datePublished and dateModified
- Content references "2026" explicitly
- Domain is too new to evaluate update cadence
- Perplexity values regularly updated content over static pages

### Technical Access Details

- PerplexityBot explicitly allowed in robots.txt (strong signal)
- Next.js SSR means full content available without JavaScript execution (critical -- PerplexityBot has limited JS capabilities)
- Sitemap at /sitemap.xml with 36 URLs
- No IndexNow or proactive crawl notification mechanism
- As a 1-day-old domain, PerplexityBot may not have discovered the site yet

**Optimization Actions:**
1. **Create genuine Reddit presence for the "setting commercial" topic.** Post helpful, non-promotional content on r/France, r/vosfinances, r/EntrepreneurFrance, or r/freelance about B2B sales methodology, LinkedIn prospecting challenges, and the setting/closing distinction. Provide value first; let the brand be discoverable through post history and profile links. This is the single highest-impact action for Perplexity.
2. **Get published on third-party platforms that Perplexity already cites.** Write guest articles on BDM.fr, Maddyness, Journal du CM, or Independant.io about the "setting commercial" methodology. When Perplexity sees the concept discussed on trusted sources citing setting.live as the origin, it elevates the domain's citation priority.
3. **Create a Trustpilot or Google Reviews profile and collect 5+ client reviews.** Perplexity cross-references review platforms to validate businesses. Even a small number of reviews on an external platform significantly improves trust signals compared to reviews only on your own site.

---

## Google Gemini

**Score: 45/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Google Ecosystem | 5/35 | No YouTube channel. No Google Business Profile. No Google Scholar. No Google News. No Google Books. Zero presence in Google's ancillary properties. |
| Knowledge Graph | 8/30 | No Knowledge Panel. sameAs only links to one LinkedIn URL (old brand). No Wikipedia, no Wikidata. "Setting" is a generic English word creating entity ambiguity. |
| Content Quality | 32/35 | Excellent: 21 long-form articles, strong topical clustering (setting/closing/methodology), extensive internal linking, comprehensive glossary. Text-only format (no images, video, or infographics in articles). |

### Google Ecosystem Details

**YouTube (Absent):**
- No YouTube channel for Setting or ChallengersLab
- No YouTube videos about the brand or its methodology
- YouTube is Gemini's strongest multimedia signal
- For queries about B2B prospecting methodology, Gemini would surface YouTube tutorials alongside web results
- French-language B2B content on YouTube is underserved, creating an uncontested opportunity

**Google Business Profile (Absent):**
- No google-site-verification meta tag detected in codebase
- No Google Business Profile detected for "Setting" or "ChallengersLab"
- For a service business targeting French entrepreneurs, a GBP would establish entity presence even without a physical office (Service Area Business model)

**Google Scholar/News/Books (Absent):**
- Not applicable for this type of business, but their absence means zero signals in these Google properties

### Knowledge Graph Details

**Entity Ambiguity (Critical):**
- "Setting" is a common English word with millions of competing meanings
- Google's Knowledge Graph cannot disambiguate "Setting" (the agency) from the generic word without strong entity signals
- "ChallengersLab" is more distinctive but is being phased out
- No Wikipedia article to anchor the entity
- No Wikidata entry with structured properties
- sameAs schema only links to one LinkedIn URL under the old brand name

**Knowledge Panel Indicators (Zero):**
- No Knowledge Panel would appear for brand searches
- No structured entity data in Google's Knowledge Graph
- Without a Knowledge Panel, Gemini cannot provide entity-level answers about the business

### Content Quality Details

**Topical Authority (Excellent):**
- 21 articles covering setting, closing, and B2B methodology in depth
- 18 glossary terms with cross-references and DefinedTerm schema
- 3 dedicated method pages (LinkedIn setting, phone setting, nurturing)
- Strong topical clustering: articles interlink extensively within topic groups
- Internal linking: 10-15 cross-links per article, glossary terms link to articles, articles link to method pages

**Content Depth (Excellent):**
- Articles are long-form (8-15 minute read estimates)
- Cover topics from definition through methodology to pricing
- Include FAQ sections, case studies, comparison frameworks
- Original content not duplicated from other sources

**Content Diversity (Weak):**
- All articles are text-only
- No embedded images, diagrams, infographics, or video
- No data visualizations
- Gemini is a multimodal model that values diverse content formats
- Methodology diagrams, process flowcharts, and comparison infographics would strengthen Gemini's content quality assessment

**Optimization Actions:**
1. **Create a YouTube channel with 5-10 French-language explainer videos.** Priority topics: "C'est quoi le setting commercial?" (definition -- target the featured snippet), "Setting vs. Closing : la difference" (comparison), "Prospection LinkedIn signal-based : comment ca marche" (methodology), "Combien coute un setter B2B?" (pricing). Upload with French subtitles and link descriptions to setting.live articles. This addresses the #1 Gemini gap and also benefits AIO and Perplexity.
2. **Create a Google Business Profile as a Service Area Business.** Use brand name "Setting -- Prospection LinkedIn B2B." Set service area to France. Add setting.live as website. Include service categories matching your offerings. This establishes entity presence in Google's ecosystem without requiring a physical office.
3. **Add original images and diagrams to article pages.** Create: a methodology diagram for the 9-step LinkedIn prospecting process, a comparison infographic for SDR interne vs. externalise, a qualification routing flowchart, and pricing comparison visuals. Embed with proper alt text and ImageObject schema markup.

---

## Bing Copilot

**Score: 48/100**

| Signal Category | Score | Key Findings |
|---|---|---|
| Bing Index Signals | 8/30 | No IndexNow support. No msvalidate.01 meta tag. No BingSiteAuth.xml. Bingbot not explicitly listed in robots.txt. Domain too new for Bing index. |
| Content Preferences | 22/30 | Professional, structured content suitable for enterprise queries. FAQ sections with direct answers. Specific pricing. French language limits global matching. |
| Microsoft Ecosystem | 8/20 | LinkedIn company page exists under old brand URL (/company/challengerslab). No GitHub presence. No Microsoft integrations. Brand mismatch weakens LinkedIn signal. |
| Technical Signals | 10/20 | Schema.org JSON-LD present. SSR content. Mobile-optimized. Clean HTML. No AMP. No IndexNow. Page speed unverifiable for new domain. |

### Bing Index Signals Details

**IndexNow (Absent -- Major Gap):**
- No IndexNow API key file detected in codebase
- No IndexNow meta tag in HTML
- IndexNow is Bing's protocol for instant content indexing
- For a brand-new domain publishing 36 pages, IndexNow would dramatically accelerate discovery
- Without it, Bing relies on organic sitemap crawling which can take 2-4 weeks for new domains
- IndexNow is also supported by Yandex, Naver, and Seznam -- one implementation benefits multiple engines

**Bing Webmaster Tools (Unverifiable):**
- No msvalidate.01 meta tag detected in codebase
- Cannot confirm whether Bing Webmaster Tools verification is configured
- Bing Webmaster Tools allows manual sitemap submission and crawl prioritization

**Bingbot in Robots.txt (Implicit Only):**
- Bingbot is not explicitly listed in robots.txt
- Falls under `User-agent: *` with `Allow: /` which grants access
- Explicit listing signals intent and is a minor positive signal

### Content Preferences Details

**Enterprise Query Alignment (Strong):**
- Bing Copilot is heavily used in Microsoft 365 context
- Professional tone throughout the site
- Structured content answering business questions directly
- Pricing information with specific figures (ideal for procurement queries)
- FAQ sections mirror workplace research queries

**Content Format (Good):**
- Clear heading hierarchy
- Direct answer paragraphs after question headings
- Pricing cards with structured data
- Case studies with quantified results

**Language Limitation:**
- French-language content limits Bing Copilot's matching for English queries
- Bing's French-language index is smaller than Google's
- For French queries, Copilot may prefer French-language Wikipedia and established media before niche B2B sites

### Microsoft Ecosystem Details

**LinkedIn (Weakened by Brand Mismatch):**
- LinkedIn company page exists at `linkedin.com/company/challengerslab`
- Company name is "ChallengersLab" not "Setting"
- Bing Copilot can surface LinkedIn company data
- The brand mismatch means a query about "Setting prospection LinkedIn" would not connect to the ChallengersLab LinkedIn page
- This is a Microsoft-owned property -- proper alignment is especially important for Copilot

**GitHub (Absent):**
- No GitHub presence detected
- Less relevant for a B2B sales agency, but GitHub Pages or open-source tools could strengthen Microsoft ecosystem presence

### Technical Signals Details

- Schema.org JSON-LD on all pages (Bing compatible)
- Next.js SSR (Bing renders JavaScript but SSR is faster and more reliable)
- Mobile-optimized with Tailwind responsive design
- Clean HTML semantics with proper heading hierarchy
- No AMP pages (Bing supports AMP but does not require it)
- No Page Experience signals verifiable for a 1-day-old domain

**Optimization Actions:**
1. **Implement IndexNow immediately.** Generate an IndexNow API key at indexnow.org. Create the key file at `https://www.setting.live/{key}.txt`. Submit all 36 URLs via the IndexNow API: `POST https://api.indexnow.org/indexnow`. Set up automatic IndexNow pings on every content publish/update in your Next.js build pipeline. This is the fastest path to Bing Copilot visibility.
2. **Register in Bing Webmaster Tools and submit sitemap.** Go to bing.com/webmasters, add setting.live, verify ownership (add msvalidate.01 meta tag to layout.tsx), and submit sitemap.xml. Enable automatic crawl notification.
3. **Update LinkedIn company page to "Setting" brand.** Change the LinkedIn company name to "Setting" (or "Setting | Prospection LinkedIn B2B"). Update the company page URL slug to /company/setting if available. Add setting.live as the website URL. Ensure the company description prominently mentions "Setting" and "setting.live." This strengthens the Microsoft ecosystem signal directly.

---

## Cross-Platform Synergies

Actions that improve multiple platforms simultaneously:

1. **Fix brand name in llms.txt, llms-full.txt, sameAs schema, and LinkedIn company page** -- Impacts: ChatGPT, Perplexity, Bing Copilot, Gemini, Google AIO. Every AI platform that reads these files or cross-references LinkedIn sees "ChallengersLab" instead of "Setting," fragmenting the entity signal across all five platforms.

2. **Create YouTube channel with French-language setting commercial videos** -- Impacts: Google Gemini, Google AI Overviews, Perplexity. YouTube videos rank in Google search, feed Gemini's multimodal understanding, and can be cited by Perplexity as multimedia sources.

3. **Build community presence on Reddit and French B2B forums** -- Impacts: Perplexity, ChatGPT, Google AI Overviews. Community validation is Perplexity's primary signal, a secondary signal for ChatGPT entity recognition, and an indirect signal for Google's understanding of brand authority.

4. **Publish guest articles on French business media (BDM, Maddyness, Journal du Net)** -- Impacts: All five platforms. Third-party mentions with backlinks strengthen domain authority (AIO), entity recognition (ChatGPT, Gemini), community validation (Perplexity), and Bing's authority assessment (Copilot).

5. **Add HTML comparison tables to pricing and comparison articles** -- Impacts: Google AI Overviews, Bing Copilot, Gemini. All three platforms extract and display tables. /tarifs, /ressources/sdr-interne-vs-externalise, and /ressources/difference-setting-closing are prime candidates.

6. **Add Person schema for article authors** -- Impacts: ChatGPT, Google AI Overviews, Gemini. Expert attribution signals strengthen content credibility across all platforms that evaluate author authority.

---

## Priority Actions (All Platforms)

1. **[CRITICAL] Fix brand name inconsistency in llms.txt, llms-full.txt, sameAs schema, and LinkedIn company page.** Replace "ChallengersLab" with "Setting" across all machine-readable files. Update LinkedIn company page name and URL. -- Affects: All 5 platforms -- Effort: Low (30 minutes)

2. **[CRITICAL] Implement IndexNow protocol for Bing.** Generate API key, create key file, submit all 36 URLs. Set up automatic pings on content updates. -- Affects: Bing Copilot (also benefits Yandex, Naver) -- Effort: Low (1 hour)

3. **[HIGH] Add OAI-SearchBot and Bingbot to robots.txt explicitly.** Two additional User-agent blocks with `Allow: /`. -- Affects: ChatGPT, Bing Copilot -- Effort: Low (5 minutes)

4. **[HIGH] Extend HowTo schema to process-oriented articles and the 9-step method page.** Currently only 1 article has HowTo markup; at least 5 more are candidates (methode/setting-linkedin, prospection-linkedin-b2b, qualification-leads-b2b, discovery-call-b2b, comment-devenir-setter-b2b). -- Affects: Google AI Overviews, Gemini -- Effort: Medium (2-3 hours)

5. **[HIGH] Add HTML comparison tables to /tarifs, /ressources/sdr-interne-vs-externalise, and /ressources/difference-setting-closing.** Convert prose comparisons into structured `<table>` elements with meaningful column headers. -- Affects: Google AI Overviews, Bing Copilot, Gemini -- Effort: Medium (2-3 hours)

6. **[HIGH] Create YouTube channel with 5+ French-language explainer videos.** Priority: definition, methodology, comparison with cold outreach, case study walkthrough. -- Affects: Gemini, Google AI Overviews, Perplexity -- Effort: High (2-4 weeks)

7. **[HIGH] Build Reddit and community presence for "setting commercial" topic.** Post genuine expertise on French subreddits and B2B forums. Non-promotional, value-first approach. -- Affects: Perplexity, ChatGPT -- Effort: Medium (ongoing, 2+ hours/week)

8. **[MEDIUM] Add Person schema for article authors with LinkedIn sameAs links.** Structured author data with jobTitle, url, and sameAs to personal LinkedIn profiles. -- Affects: ChatGPT, Google AI Overviews, Gemini -- Effort: Low (1 hour)

9. **[MEDIUM] Register Google Business Profile as Service Area Business.** Brand name "Setting -- Prospection LinkedIn B2B," service area France, website setting.live. -- Affects: Gemini, Google AI Overviews -- Effort: Low (30 minutes)

10. **[MEDIUM] Register in Bing Webmaster Tools.** Verify ownership, submit sitemap, enable crawl notifications. -- Affects: Bing Copilot -- Effort: Low (30 minutes)

11. **[MEDIUM] Pursue guest posts on BDM.fr, Maddyness, Journal du Net.** Build third-party entity mentions and backlinks. -- Affects: All 5 platforms -- Effort: High (ongoing, 4+ weeks)

12. **[MEDIUM] Create Trustpilot and/or Google Reviews profile.** Collect 5+ client reviews on external platform. -- Affects: Perplexity, ChatGPT, Gemini -- Effort: Medium (2-4 weeks to collect reviews)

---

## Summary Assessment

### What is Working Well

Setting.live has **outstanding on-page technical readiness** for AI search platforms:

- **Schema markup depth** is in the top percentile: Article, FAQPage, HowTo, DefinedTerm, AggregateRating, BreadcrumbList, ProfessionalService, OfferCatalog, Review all properly implemented
- **Content structure** follows AI extraction best practices: question-based headings, answer-target definition blocks, FAQ Q&A pairs matching natural search queries
- **Crawler access** is maximally permissive: 8 AI bots explicitly allowed, SSR content, llms.txt files present
- **Topical authority signals** are strong: 21 articles + 18 glossary terms + 3 method pages create comprehensive topic coverage with extensive internal linking
- **French B2B niche positioning** is strategic: "setting commercial" is a relatively new term with no dominant authoritative source

### What is Blocking Progress

Three fundamental issues suppress scores across all platforms:

1. **Zero domain authority (affects all 5 platforms).** The domain is 1 day old with no backlinks, no organic rankings, and no third-party citations. Every AI platform uses domain authority as a trust signal. No amount of schema markup compensates for this. Expected timeline to meaningful authority: 3-6 months with active link building.

2. **Zero ecosystem presence (affects Gemini, ChatGPT, Perplexity most severely).** No YouTube, no Wikipedia, no Reddit, no Google Business Profile, no Trustpilot, no press coverage. AI platforms cross-reference multiple sources to validate entities and claims. Setting.live exists in complete isolation. This is addressable within 2-4 weeks for YouTube and GBP, 4-8 weeks for community presence.

3. **Brand identity fragmentation (affects all 5 platforms).** The llms.txt files, LinkedIn company page, sameAs schema, and alternateName all reference "ChallengersLab" while the domain and UI use "Setting." This confuses entity resolution on every platform. This is fixable in 30 minutes.

### Projected Score Improvement

If all CRITICAL and HIGH priority actions are completed:

| Platform | Current | Projected (3 months) | Projected (6 months) |
|---|---|---|---|
| Google AI Overviews | 62 | 70-75 | 78-85 |
| ChatGPT Web Search | 51 | 60-65 | 70-78 |
| Perplexity AI | 44 | 55-60 | 65-72 |
| Google Gemini | 45 | 58-65 | 70-78 |
| Bing Copilot | 48 | 62-68 | 72-78 |
| **Average** | **50** | **61-67** | **71-78** |

The 3-month gains come primarily from technical fixes (brand name, IndexNow, schema extensions, comparison tables) and YouTube/GBP creation. The 6-month gains depend on backlink acquisition, community presence building, and organic ranking improvements.
