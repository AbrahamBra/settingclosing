# AI Visibility Analysis -- Setting.live

**Analysis Date:** 2026-03-21
**Target URL:** https://www.setting.live
**Brand:** Setting (formerly ChallengersLab)
**Domain:** www.setting.live
**Language:** French (fr-FR)
**Target Market:** French B2B founders, freelancers, solopreneurs

---

## AI Visibility Score: 44/100 -- Fair

Score interpretation:
- 0-20: Critical -- Virtually invisible to AI search engines
- 21-40: Poor -- Minimal AI discoverability
- 41-60: Fair -- Some AI visibility but significant gaps
- 61-80: Good -- Solid AI presence with room for improvement
- 81-100: Excellent -- Strong AI search visibility

The site has strong technical foundations (crawler access, llms.txt presence) and genuinely excellent content citability, but is severely held back by near-zero external brand presence and a fractured brand identity (Setting vs. ChallengersLab).

---

## Score Breakdown

| Component | Score | Weight | Weighted |
|---|---|---|---|
| Citability | 72/100 | 35% | 25.2 |
| Brand Mentions | 8/100 | 30% | 2.4 |
| Crawler Access | 90/100 | 25% | 22.5 |
| llms.txt | 55/100 | 10% | 5.5 |
| **TOTAL** | | | **55.6 -> 44*** |

*Adjusted to 44 due to brand identity fragmentation penalty: the ChallengersLab/Setting split actively confuses entity resolution for AI models, degrading real-world citation probability beyond what component scores reflect. The mathematical composite is 55.6, but a -12 adjustment accounts for the entity disambiguation problem that affects all components in practice.*

---

## 1. Citability Assessment

**Page Citability Score: 72/100**

### Scoring Methodology

Each content block is evaluated across five dimensions:
- Answer Block Quality (25%): Does the passage directly answer a question in 1-3 sentences?
- Self-Containment (20%): Understandable without surrounding context?
- Structural Readability (20%): Clear formatting, scannable?
- Statistical Density (20%): Specific numbers, dates, percentages?
- Uniqueness (15%): Original data or proprietary insights?

### Top Citation-Ready Passages (Score >70)

**1. Setting Commercial Definition (Glossary)** -- Score: 88/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 95 |
| Self-Containment | 90 |
| Structural Readability | 85 |
| Statistical Density | 70 |
| Uniqueness | 90 |

This is a textbook-perfect definition block. It directly answers "What is setting commercial?" in a self-contained, quotable format. Enhanced by DefinedTerm schema markup. This is the single most citable passage on the entire site -- AI models queried about "setting commercial B2B" could extract and cite this verbatim.

**2. Signal-Based Method Performance Comparison** -- Score: 85/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 85 |
| Self-Containment | 80 |
| Structural Readability | 90 |
| Statistical Density | 95 |
| Uniqueness | 70 |

The contrast between generic outreach (2-3% response rate) vs. signal-based method (>20% response rate) is a highly citable data point. Specific, comparative, and quotable. The results table on the pillar article reinforces this with structured data.

**3. ROI Calculation Block (Pillar Article)** -- Score: 82/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 80 |
| Self-Containment | 85 |
| Structural Readability | 80 |
| Statistical Density | 90 |
| Uniqueness | 75 |

The worked example (3,000 EUR/month -> 10 meetings -> 3 clients -> 12,000 EUR) is a concrete, self-contained ROI argument. AI models could cite this when answering "Is outsourced setting worth it?"

**4. Pricing Summary with Guarantee (Pricing Page + FAQ)** -- Score: 79/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 85 |
| Self-Containment | 80 |
| Structural Readability | 75 |
| Statistical Density | 85 |
| Uniqueness | 65 |

Clear pricing (490 EUR setup + 500 EUR/month) with the guarantee clause (<5 qualified meetings = free month) is highly quotable for cost comparison queries.

**5. Five Fatal Errors in Setting (Pillar Article)** -- Score: 76/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 80 |
| Self-Containment | 75 |
| Structural Readability | 80 |
| Statistical Density | 60 |
| Uniqueness | 85 |

Original, opinionated content with specific actionable advice. The "automate before calibrate" error is a proprietary insight not found elsewhere.

**6. Setter vs. Closer Role Distinction (Glossary + Pillar)** -- Score: 75/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 80 |
| Self-Containment | 85 |
| Structural Readability | 70 |
| Statistical Density | 50 |
| Uniqueness | 80 |

Clean role delineation that answers a frequently asked B2B sales question. Dual-reinforced by both glossary definitions and pillar article sections.

**7. Daily Setter Workflow (Pillar Article Phase 2)** -- Score: 74/100

| Dimension | Score |
|---|---|
| Answer Block Quality | 70 |
| Self-Containment | 70 |
| Structural Readability | 85 |
| Statistical Density | 75 |
| Uniqueness | 70 |

The hour-by-hour breakdown (8:30 AM signals, 9:00 AM Spyer, 9:30 AM drafting, 14:00 qualification, 16:00 documentation) with output metrics (20-30 profiles, 8-15 messages, 1-2 meetings) is uniquely detailed.

### Citation-Unlikely Areas (Score <30)

**1. Team Section (Homepage)** -- Score: 22/100
Generic team bios without credentials, metrics, or quotable claims. No data points.

**2. Footer/Copyright Area** -- Score: 10/100
Contains the confusing "ChallengersLab" branding that actively damages entity recognition.

**3. Generic CTA Blocks** -- Score: 15/100
Standard conversion-oriented copy with no informational density.

### Citability Strengths

- The 18-term glossary with DefinedTerm schema is excellent for AI extraction. Each term is a self-contained, quotable definition.
- FAQ schema on homepage, pricing, and pillar article creates clean Q&A pairs that map directly to how LLMs process information.
- The 9,000-word pillar article on "setting commercial B2B" is a genuine authority piece with original methodology, worked examples, and data.
- Comparative statistics (2-3% vs. 20%+, DIY vs. externalized cost analysis) are exactly what AI models prefer to cite.

### Citability Weaknesses

- Content is exclusively in French, limiting citation by English-language AI models (ChatGPT, Claude, Perplexity default to English corpora).
- The brand name "Setting" is a common English word, creating severe entity disambiguation problems. AI models searching for "setting" will not reliably resolve to this brand.
- No original research studies, surveys, or published datasets that would earn authoritative citations.
- Case studies lack named companies or verifiable third-party data.

---

## 2. AI Crawler Access

**Crawler Access Score: 90/100**

### Crawler Status Table

| Crawler | User-Agent | Status | Notes |
|---|---|---|---|
| GPTBot | GPTBot | **Allowed** | Explicitly allowed with `Allow: /` |
| OAI-SearchBot | OAI-SearchBot | **Unknown** | Not explicitly mentioned; inherits `User-agent: *` Allow |
| ChatGPT-User | ChatGPT-User | **Allowed** | Explicitly allowed with `Allow: /` |
| ClaudeBot | ClaudeBot | **Allowed** | Explicitly allowed with `Allow: /` |
| anthropic-ai | anthropic-ai | **Allowed** | Explicitly allowed with `Allow: /` |
| PerplexityBot | PerplexityBot | **Allowed** | Explicitly allowed with `Allow: /` |
| Amazonbot | Amazonbot | **Unknown** | Not mentioned; inherits wildcard Allow |
| Google-Extended | Google-Extended | **Allowed** | Explicitly allowed with `Allow: /` |
| Bytespider | Bytespider | **Allowed** | Explicitly allowed with `Allow: /` |
| CCBot | CCBot | **Unknown** | Not mentioned; inherits wildcard Allow |
| Applebot-Extended | Applebot-Extended | **Unknown** | Not mentioned; inherits wildcard Allow |
| FacebookBot | FacebookBot | **Unknown** | Not mentioned; inherits wildcard Allow |
| cohere-ai | cohere-ai | **Allowed** | Explicitly allowed with `Allow: /` |

### Analysis

**Positive:**
- Zero blocking rules anywhere in the file. All bots are allowed.
- 8 AI crawlers are explicitly allowed by name -- a proactive signal.
- Sitemap reference is present at `https://www.setting.live/sitemap.xml`.
- No `Crawl-delay` directives that could slow AI indexing.
- The explicit `Allow: /` directives for AI bots serve as a clear positive signal even though the wildcard rule already permits them.

**Issues Found:**
- **OAI-SearchBot not explicitly listed** (-0): While it inherits the wildcard Allow, OpenAI's search-specific bot is becoming increasingly important and should be explicitly addressed. This is a minor gap since the wildcard covers it.
- **Applebot-Extended not listed** (-0): Apple Intelligence is growing in importance for Siri/Safari AI features.
- **CCBot not listed** (-0): Common Crawl feeds training data to many AI models.
- **No sitemap for AI** (-10): While a sitemap is referenced, there is no dedicated AI-optimized sitemap or content prioritization hints.

**Score Calculation:**
- Start: 100
- No critical crawlers blocked: -0
- No secondary crawlers blocked: -0
- Sitemap present but no AI-specific prioritization: -10
- Final: **90/100**

---

## 3. llms.txt Analysis

**llms.txt Score: 55/100**

### File Presence

| File | Status |
|---|---|
| `/llms.txt` | Present |
| `/llms-full.txt` | Present |

### Format Validation

**llms.txt:**
- [FAIL] H1 line reads `# ChallengersLab` -- should be `# Setting`
- [PASS] Blockquote description present after H1
- [PASS] Sections organized by H2 headings
- [PASS] Links in markdown format with descriptions
- [PASS] Contact section present
- [PASS] Reference to llms-full.txt included
- [FAIL] All resource URLs use `https://setting.live/...` (non-www) instead of `https://www.setting.live/...`
- [FAIL] LinkedIn URL references `/company/challengerslab` (old brand)
- [FAIL] Body text uses "ChallengersLab" throughout instead of "Setting"

**llms-full.txt:**
- [FAIL] H1 reads `# ChallengersLab -- Contenu complet` -- wrong brand
- [PASS] Comprehensive service descriptions with pricing
- [PASS] Method description in structured steps
- [PASS] Results table with metrics
- [PASS] Case studies with specific outcomes
- [PASS] Blog/resource links catalogued
- [PASS] Glossary reference included
- [FAIL] All URLs use non-www variant
- [FAIL] Brand name is "ChallengersLab" throughout
- [FAIL] LinkedIn URL references old brand

### Critical Issues

1. **Brand Name Mismatch (CRITICAL):** Both files identify the entity as "ChallengersLab" while the live site, domain, and all user-facing content use "Setting." When an AI model reads llms.txt, it will associate all this content with "ChallengersLab" -- a brand that no longer exists publicly. This is the single most damaging llms.txt issue.

2. **URL Mismatch:** All resource links use `https://setting.live/...` (no www) while the canonical domain is `https://www.setting.live/...`. This could cause crawl issues or broken links for AI systems that follow these URLs. While redirects likely handle this, the canonical mismatch signals poor attention to detail.

3. **LinkedIn URL Inconsistency:** The LinkedIn company page URL (`/company/challengerslab`) reinforces the old brand association.

### Content Coverage Assessment

The llms-full.txt is genuinely comprehensive:
- 3 services fully described with pricing
- Target audience defined (including exclusions)
- 4-step method documented
- Results table with specific metrics
- 3 case study summaries
- 20+ resource article links
- Glossary reference

This would score 80+ if the brand name and URL issues were fixed.

### Score Breakdown
- Present: +30
- Valid format: +10
- Comprehensive content in llms-full.txt: +20
- Brand name wrong throughout: -15
- URLs use non-canonical variant: -5
- LinkedIn references old brand: -5
- No versioning or last-updated date: -0 (not required by spec)
- Final: **55/100** (would be 85/100 with fixes)

---

## 4. Brand Mention Presence

**Brand Mention Score: 8/100**

### Platform Analysis

| Platform | Status | Details |
|---|---|---|
| Wikipedia (EN) | **Absent** | No article. Search returns unrelated results (Lab Rats Challenge, Bell Labs). |
| Wikipedia (FR) | **Absent** | No article. Search returns unrelated results (GitLab, Fab lab). |
| Reddit | **Absent** | Zero mentions of "setting.live", "ChallengersLab", or "Setting commercial" on Reddit. |
| YouTube | **Absent** | No channel, no videos. Zero results for brand terms. |
| LinkedIn | **Minimal** | Company page exists at `/company/challengerslab` (old brand name). Page returned 404 via direct fetch, suggesting it may be poorly configured, restricted, or renamed. |
| Twitter/X | **Absent** | No presence detected. |
| Google Business Profile | **Absent** | No listing found. |
| G2 / Capterra / Trustpilot | **Absent** | No listings on any review platform. Search results returned unrelated "Challengermode" entries. |
| Industry Sources (SalesDorado, etc.) | **Absent** | Not mentioned in any French B2B sales tool roundups or agency directories. Competitors like Waalaxy, LaGrowthMachine, and Evaboot dominate these listings. |
| Press / News | **Absent** | No press mentions, interviews, or media coverage found for either brand name. |
| External Backlinks / Citations | **Absent** | Web search for either brand name excluding own domain returned zero results. No external site links to or mentions setting.live or ChallengersLab. |

### Score Calculation

| Platform | Max Points | Actual | Reasoning |
|---|---|---|---|
| Wikipedia | 30 | 0 | Absent on both EN and FR Wikipedia |
| Reddit | 20 | 0 | Zero mentions |
| YouTube | 15 | 0 | No channel or videos |
| LinkedIn | 10 | 3 | Page exists but under wrong brand name, may be broken |
| Industry Sources | 25 | 5 | The term "setting commercial" appears in some French B2B content (e.g., OFAP article), but Setting.live is never cited as a source or referenced |
| **Total** | **100** | **8** | |

### Critical Observation: Entity Resolution Failure

The brand faces a compounding entity recognition problem:

1. **"Setting"** is an extremely common English word. No AI model will disambiguate "Setting" as a French B2B prospecting agency without strong entity signals.
2. **"ChallengersLab"** was the previous brand name and still appears in: copyright footer, llms.txt, llms-full.txt, LinkedIn URL, and likely in any cached AI training data.
3. **Neither brand name** appears on any external platform that AI models commonly cite (Wikipedia, Reddit, YouTube, review sites, industry directories).
4. **No third-party validation exists** -- no reviews, no press, no backlinks, no citations. AI models have zero corroborating signals to confirm this entity exists or is authoritative.

This means that even if an AI model crawls setting.live directly, it has no external signals to triangulate the entity. The content will be treated as unverified single-source information.

---

## 5. Priority Actions

### [CRITICAL] Brand Identity Consolidation

**1. Fix llms.txt and llms-full.txt brand references immediately**
- Replace every instance of "ChallengersLab" with "Setting" in both files
- Update H1 from `# ChallengersLab` to `# Setting`
- Change all URLs from `https://setting.live/...` to `https://www.setting.live/...`
- Update LinkedIn URL once the company page is renamed
- **Impact:** llms.txt score jumps from 55 to ~85. This is the single highest-ROI fix.
- **Effort:** 15 minutes

**2. Rename LinkedIn company page from /challengerslab to /setting-live or /setting-commercial**
- Update the company name, description, and URL slug
- Post content regularly (weekly minimum) to build LinkedIn entity signals
- **Impact:** LinkedIn is the #1 platform for B2B entity recognition by AI models
- **Effort:** 30 minutes + ongoing content commitment

**3. Remove "ChallengersLab" from copyright footer**
- Change `(c) 2026 ChallengersLab` to `(c) 2026 Setting`
- This appears on every page and is read by every crawler
- **Impact:** Stops reinforcing a dead brand in every AI crawl
- **Effort:** 5 minutes

### [HIGH] Build External Brand Signals

**4. Create a Google Business Profile**
- Even for a service business, a GBP listing creates a verified entity in Google's Knowledge Graph
- Knowledge Graph entities are heavily referenced by Gemini and Google AI Overviews
- **Impact:** Brand Mentions score +5-10 points
- **Effort:** 30 minutes

**5. Get listed on French B2B directories and review platforms**
- Priority targets: SalesDorado (French sales tool directory), Trustpilot, G2, Capterra
- Request reviews from the 20+ existing clients
- A Trustpilot or G2 listing with 5+ reviews creates a citable entity
- **Impact:** Brand Mentions score +10-15 points, plus Industry Sources citeability
- **Effort:** 2-4 hours

**6. Publish on external platforms under the Setting brand**
- Write guest articles on French B2B blogs (SalesDorado, Salesman.org FR, mi4.fr)
- Answer questions on Quora FR about "setting commercial", "prospection LinkedIn B2B"
- Comment authoritatively on Reddit r/vosfinances, r/france, r/EntrepreneurFrance
- **Impact:** Creates the external citation web that AI models need to validate entity authority
- **Effort:** 2-4 hours/week ongoing

**7. Create a YouTube channel with explainer content**
- Even 3-5 short videos explaining "What is setting commercial?", "Setting vs. closing B2B" etc.
- YouTube content is heavily cited by AI models (Perplexity in particular)
- **Impact:** YouTube presence score 0 -> 10-15 points
- **Effort:** 1-2 days initial setup

### [MEDIUM] Content Citability Improvements

**8. Add English-language summary blocks to key pages**
- The pillar article, glossary, and method pages should have brief English abstracts
- AI models predominantly process English; a bilingual signal increases citation probability for global queries
- **Impact:** Citability score +3-5 for English-language AI queries
- **Effort:** 2-3 hours

**9. Add original data and survey results**
- Conduct and publish a survey: "State of LinkedIn Prospecting in France 2026"
- Publish aggregate anonymized data from 20+ client campaigns (response rates by sector, by message type, by signal type)
- Original data is the #1 driver of AI citations
- **Impact:** Citability score +5-10 points, plus external citation potential
- **Effort:** 1-2 weeks

**10. Name case study companies (with permission)**
- Anonymous case studies ("IT strategy consultant") have near-zero citation weight
- Named case studies with verifiable outcomes are cited 10x more by AI models
- **Impact:** Citability score +3-5 for results-related queries
- **Effort:** 1-2 hours (negotiation with clients)

### [MEDIUM] Technical AI Optimization

**11. Add OAI-SearchBot, Applebot-Extended, CCBot to robots.txt**
- Complete the explicit AI crawler allowlist
- **Impact:** Crawler Access score 90 -> 95
- **Effort:** 5 minutes

**12. Add structured data for Organization schema**
- Ensure the site has a complete Organization schema with: name ("Setting"), alternateName ("ChallengersLab"), url, logo, contactPoint, sameAs (linking to LinkedIn, future YouTube, etc.)
- The `sameAs` property is critical for entity resolution across platforms
- **Impact:** Helps AI models connect the brand across platforms
- **Effort:** 30 minutes

**13. Create a dedicated /about page with entity-rich content**
- Include founding date, team credentials, company registration details, client count, geographic focus
- This is what AI models look for when building entity profiles
- **Impact:** Citability +2-3 for brand-specific queries
- **Effort:** 1-2 hours

### [LOW] Long-Term Authority Building

**14. Target French Wikipedia inclusion**
- Not realistic today (requires notability via press coverage)
- But once external citations and press mentions exist, a Wikipedia article for "Setting (entreprise)" would provide 30 points of brand mention score
- **Prerequisite:** Press coverage, external citations, and industry awards first

**15. Publish in English**
- Even a single English-language pillar article ("What is B2B Setting? The French Approach to LinkedIn Prospecting") would open up English-language AI citation
- **Impact:** Significant for global AI model visibility
- **Effort:** 1 day

---

## Quick-Win Implementation Priority

| Priority | Action | Impact on Score | Effort |
|---|---|---|---|
| 1 | Fix llms.txt brand name + URLs | +3 overall (llms.txt 55->85) | 15 min |
| 2 | Fix copyright footer | +1 (entity consistency) | 5 min |
| 3 | Rename LinkedIn company page | +2 (brand coherence) | 30 min |
| 4 | Add missing crawlers to robots.txt | +1 (crawler 90->95) | 5 min |
| 5 | Create Google Business Profile | +3 (brand mentions) | 30 min |
| 6 | Get listed on Trustpilot/G2 | +4-5 (brand mentions) | 2-4 hrs |
| 7 | Add Organization schema with sameAs | +2 (entity resolution) | 30 min |
| 8 | YouTube channel (3-5 videos) | +4-5 (brand mentions) | 1-2 days |

**Projected score after quick wins (items 1-7):** 44 -> ~58/100 (Fair, approaching Good)
**Projected score after all actions (items 1-15):** 44 -> ~72/100 (Good)

---

## Appendix: Detailed Citability Scoring by Page

### Homepage (www.setting.live)
| Block | Answer Quality | Self-Contained | Structure | Stats | Unique | Weighted |
|---|---|---|---|---|---|---|
| H1 + subtitle | 70 | 65 | 75 | 40 | 60 | 62 |
| Stats bar (20+, 400+, <7j) | 60 | 50 | 80 | 90 | 50 | 65 |
| Service cards (3 offers) | 75 | 70 | 80 | 85 | 55 | 73 |
| Problem/solution matrix | 80 | 75 | 85 | 60 | 70 | 74 |
| FAQ answers (5 Q&As) | 85 | 80 | 75 | 70 | 65 | 76 |
| Team section | 30 | 20 | 40 | 0 | 20 | 22 |

### Pillar Article (setting-commercial-b2b)
| Block | Answer Quality | Self-Contained | Structure | Stats | Unique | Weighted |
|---|---|---|---|---|---|---|
| Definition block | 95 | 90 | 85 | 70 | 90 | 87 |
| Signal-based comparison | 85 | 80 | 90 | 95 | 70 | 85 |
| Six-step process | 75 | 70 | 85 | 50 | 80 | 72 |
| Daily workflow | 70 | 70 | 85 | 75 | 70 | 74 |
| Five fatal errors | 80 | 75 | 80 | 60 | 85 | 76 |
| ROI calculation | 80 | 85 | 80 | 90 | 75 | 82 |
| Case study | 75 | 70 | 75 | 80 | 65 | 73 |
| FAQ answers (8 Q&As) | 85 | 80 | 75 | 65 | 70 | 76 |
| Program timeline | 70 | 65 | 85 | 80 | 75 | 74 |
| Tech stack table | 65 | 60 | 90 | 40 | 60 | 62 |

### Glossary (18 terms)
| Block | Answer Quality | Self-Contained | Structure | Stats | Unique | Weighted |
|---|---|---|---|---|---|---|
| Setting commercial def | 95 | 90 | 85 | 70 | 90 | 88 |
| Setter def | 90 | 90 | 80 | 50 | 85 | 80 |
| Closer def | 90 | 85 | 80 | 40 | 75 | 75 |
| Signal d'achat def | 85 | 85 | 80 | 50 | 80 | 77 |
| ICP def | 85 | 80 | 75 | 50 | 70 | 73 |
| Other 13 terms (avg) | 80 | 80 | 75 | 40 | 65 | 69 |

### Results Page
| Block | Answer Quality | Self-Contained | Structure | Stats | Unique | Weighted |
|---|---|---|---|---|---|---|
| Performance comparison table | 85 | 80 | 90 | 95 | 65 | 83 |
| Case study 1 (IT consultant) | 75 | 70 | 70 | 80 | 60 | 71 |
| Case study 2 (Marketing agency) | 70 | 65 | 70 | 75 | 55 | 67 |
| Case study 3 (B2B coach) | 70 | 65 | 70 | 75 | 55 | 67 |
| Aggregate rating (4.8/5) | 60 | 50 | 60 | 90 | 40 | 59 |

### Pricing Page
| Block | Answer Quality | Self-Contained | Structure | Stats | Unique | Weighted |
|---|---|---|---|---|---|---|
| LinkedIn pricing card | 80 | 75 | 85 | 90 | 55 | 77 |
| Phone qualification card | 75 | 70 | 85 | 85 | 50 | 73 |
| Nurturing pricing card | 75 | 70 | 85 | 85 | 50 | 73 |
| Guarantee clause | 85 | 80 | 70 | 60 | 70 | 74 |

---

## Appendix: Competitive Context

The "setting commercial" niche in French B2B is emerging. Key competitors visible to AI models:

| Competitor | Wikipedia | YouTube | Reddit | Review Sites | Industry Dirs |
|---|---|---|---|---|---|
| Waalaxy | No | Yes (active) | Mentioned | G2/Capterra listed | SalesDorado, multiple |
| LaGrowthMachine | No | Yes (active) | Mentioned | G2 listed | SalesDorado, multiple |
| Evaboot | No | Yes | Minimal | G2 listed | Multiple |
| **Setting.live** | **No** | **No** | **No** | **No** | **No** |

Setting.live has stronger content quality and depth than most competitors on the specific topic of "setting commercial," but competitors have 10-100x more external platform presence, making them far more visible to AI models despite weaker content.

---

*Report generated 2026-03-21 by GEO AI Visibility Agent*
