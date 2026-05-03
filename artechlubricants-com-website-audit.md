# Website Business Audit: Artech Lubricants

**Website URL:** https://www.artechlubricants.com
**Audit Date:** 2026-05-02
**Audited By:** Claude Code
**Output File:** artechlubricants-com-website-audit.md

---

## 1. Executive Summary

Artech Lubricants (ARtech) is a small, family-run, boutique contract packager, blender, and supplier of specialty greases, lubricants, and oils based in Bethel, Connecticut. The business operates from 18 Taylor Ave, Bethel, CT 06801, has been operating for 20+ years (formerly under the R&R Packaging name), and was acquired in 2012 by current President Dan Arkins. Steve Renwick, a 30+ year industry veteran and the founder of R&R Packaging, serves as General Manager and oversees blending and technical operations. The product mix targets serious industrial buyers with NSN numbers, MIL-SPEC compliance, NATO ratings, and AGMA grades — a sign of credible technical depth in defense, mining, steel mill, rail, and heavy construction segments.

The business itself is more credible and more interesting than the website suggests. The site is a Wix template stuck in 2021 (every page in the sitemap lists `<lastmod>2021-12-03</lastmod>`), with placeholder text on at least one public page, a duplicate "New Products" page, no homepage H1, broken/stale content on multiple pages, no analytics tracking, no schema beyond a basic WebSite type, no legal pages, and no blog or content marketing layer. The site is functional enough to serve as a digital business card but is dramatically underselling the actual business — particularly to defense/government buyers who would pay attention to the MIL-SPEC and NSN catalog if they could find it via Google.

**Top issues identified:**

- **Site appears frozen since 2021-12-03.** Every URL in the Wix-generated sitemap has the same lastmod date. The most recent video on the homepage is dated 2019-10-31. The Sanitizing Products line is pandemic-era (Vira-Gel hand sanitizer) — a strong signal that meaningful content updates stopped after the COVID push.
- **Public placeholder/stub pages.** `/new-products-2` contains literal Wix template text: "Add Your Title" and "Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click." This is a finished-looking URL serving unfinished content publicly.
- **The Consulting page has no consulting content.** It loads a video gallery only. The page title is "CONSULTING" but it neither describes consulting services nor offers a way to engage one.
- **Two near-duplicate "New Products" pages** (`/new-products` and `/new-products-2`) — only one has any content, and that content is a single bottle-cleaner product.
- **The `/i-tech-info` page is a stub** ("More on I-Tech") with no real content.
- **Homepage has no H1.** The only headings rendered are H2 "All Videos" (Wix gallery widget) and H3 video titles. The page has no H1 introducing the company.
- **Title and meta description have visible quality issues.** Title: `Artech Lubricants |Grease,Oil,Silicone|Contract Packaging` — no spaces around pipes or after commas. Meta description: contains the typo `botique` (should be `boutique`).
- **Wix Analytics is explicitly disabled** (`AnalyticsEnabled=false` in the rendered Thunderbolt config) — meaning the business cannot measure inbound traffic, conversions, or even page views from Google. There is no GA4, no GTM, no Meta Pixel, no LinkedIn Insight Tag.
- **No legal pages.** `/privacy-policy`, `/terms`, and `/blog` all return 404. There is no Privacy Policy or Terms of Use.
- **Data Sheets gated behind a Wix member login.** Industrial buyers who arrive looking for a TDS or SDS hit a registration wall — a major friction point that competitors typically resolve with public PDF downloads.
- **The actual SDS page (`/sds`) lists product names twice next to each other** with no obvious download links — looks unfinished.
- **No homepage product schema, no Organization schema, no LocalBusiness schema.** Only a near-empty WebSite schema and a video ItemList. A boutique CT manufacturer with a real address and a real phone should have full LocalBusiness markup.
- **Two phone numbers, no email.** The Contact page lists (845) 858-8558 main, (845) 858-8338 fax, and (203) 733-0162 cell for Dan Arkins — but no `info@` or `sales@` email is published. The 845 area code is New York (Hudson Valley), not Connecticut — likely a kept-from-R&R-era number, but it is not explained.
- **Sanitizing Products buy flow leaks to a different brand.** "SHOP NOW" buttons send users to a Ride-Glide Shopify store (different brand) — confusing for buyers who expect to buy from Artech directly.
- **No certifications page** despite the products carrying MIL-SPEC, NSN, NATO, and AGMA ratings (which suggest the company has at least the operational discipline to produce against those standards).
- **No about-page contact info, no facility photos, no certifications, no client logos, no testimonials, no case studies.** Trust signals are minimal.

The bones of a credible business are here. The website has not been treated as a serious sales asset for at least 4 years.

---

## 2. Business Understanding

**Business name:** Artech Lubricants (also styled "ARtech")
**Industry:** Specialty industrial lubricant blending and contract packaging
**Headquarters:** 18 Taylor Ave, Bethel, Connecticut 06801, USA
**Phone:** (845) 858-8558
**Fax:** (845) 858-8338
**Owner cell:** Dan Arkins, (203) 733-0162
**Email:** Not published
**Founded:** Operating 20+ years (formerly R&R Packaging); current ownership since 2012
**Leadership:**
- Dan Arkins — President / Principal (acquired the company 2012; prior background in packaging product development for Kraft, Unilever, Mars, Nestlé, Topps)
- Steve Renwick — General Manager (30+ years in lubricants; founded R&R Packaging; oversees technical specs and blending)

**Main offering:** Specialty industrial lubricants, greases, silicones, and oils — blended to customer-specific formulations and packaged in customer-specified containers. Plus contract packaging services and custom package/label design for outside lubricant brands.

**Core product lines:**
- **I-Tech** — Industrial Technology grease/lubricant series (ARGHC1500, ARGHC1800, ARGH5, ARBL-220-2, AR20V-55000) — for steel mills, mining, construction
- **I-Tech Silicones** — Silicone Damping Fluids (Dimethicone) per MIL SPEC VV-D-1078 (viscosities 0.65 cSt to 1,000 cSt)
- **I-Tech Gear Oils** — AGMA 4 through AGMA 8/8A
- **M-Tech** — Machinery products (Petrolatum VV-P 236, Graphite Petrolatum, Molybdenum Silicone, Molybdenum Powder, Molybdenum Petrolatum) with NSNs and MIL-PRF/MIL-DTL/SAE-AMS standards
- **R-Tech** — Rail Grease and S Rail Grease
- **Vira-Gel Sanitizers** (sold via Ride-Glide Shopify store) — pandemic-era hand sanitizer line

**Adjacent services:**
- Contract packaging
- Custom package design
- Custom label design
- (Implied) Consulting — but the dedicated page has no consulting content

**Target audience:**
- Defense and government buyers (NSN catalog; MIL-SPEC compliance; NATO ratings)
- Steel mills (high-heat rolling applications)
- Mining operations (extreme low-temperature greases, e.g., -45°)
- Rail / railway operations (R-Tech rail grease)
- Heavy construction equipment OEMs and operators
- Industrial machinery operators (gear oils)
- Other lubricant brands needing contract blending or contract packaging

**Geographic market:** Primary base in Bethel, CT (US Northeast), with NSN/MIL-SPEC catalog suggesting nationwide US defense supply chain reach. No explicit mention of international shipping or markets.

**Business model:** B2B contract manufacturing/blending with a side B2C/B2B2C consumer hand-sanitizer line. Revenue likely from:
1. Contract blending of customer-specified greases and lubricants
2. Direct sale of branded I-Tech / M-Tech / R-Tech products to industrial and defense buyers
3. Contract packaging and label design services for third-party lubricant brands
4. Consulting (referenced in nav but not explained)
5. Hand sanitizer sales via the Ride-Glide partner storefront

**Trust signals on the website:**
- MIL-SPEC and NSN numbers on multiple product lines
- NATO and SAE-AMS standards referenced
- Two named principals with disclosed background and history
- Physical CT address and phone number
- Production-line video footage on homepage (real equipment)
- 20+ years of history (referenced as R&R Packaging legacy)

**Trust signals notably missing:**
- No certifications page (no ISO, no AS9100, no IATF, no ITAR, no DFARS, no DOT)
- No D-U-N-S, CAGE code, NAICS, or SAM.gov registration referenced
- No client logos, no testimonials, no case studies
- No facility photos beyond three short videos
- No team photos or LinkedIn-style bios
- No founding year on the website (only "20+ years" inferred)
- No metrics (clients served, batches per year, throughput, square footage)
- No press, awards, partnerships
- No Better Business Bureau / industry association memberships
- No published email address

---

## 3. B2B / B2C / B2G Classification

**Classification: Primarily B2B with strong B2G undercurrent and a small B2C/B2B2C side line (sanitizers).**

**Evidence:**
- NSN (National Stock Number) catalog on M-Tech and I-Tech Silicones — NSNs are exclusively a US-government / DLA supply chain construct. Their presence shows current or past defense-supply-chain participation.
- MIL-SPEC, MIL-PRF, MIL-DTL, and NATO standard numbers on multiple products — defense procurement language.
- AGMA grade language on gear oils — industrial OEM/MRO language, not consumer.
- Pricing never shown — typical for B2B custom and contract pricing.
- Contract blending and contract packaging messaging — classic B2B services.
- Vira-Gel sanitizer line is consumer-facing but is sold via the **Ride-Glide** Shopify store (a separate brand), which routes the consumer flow off-site.

**Buyer types likely targeted:**
- Defense contractors and DLA-tier suppliers needing NSN-cataloged greases and oils
- Industrial OEM procurement (steel, mining, rail, construction equipment)
- Other lubricant brands looking for contract blending/packaging
- Maintenance, repair, and operations (MRO) buyers at industrial plants

**B2G readiness:** The catalog suggests B2G eligibility, but the **website does not actively support a B2G journey**:
- No CAGE / DUNS / SAM.gov registration disclosed
- No "Government Sales" page or section
- No GSA contract holder status
- No DFARS / ITAR / Buy American Act mentions
- No procurement officer–oriented landing page
- The contact form is generic (no government RFP intake)

**B2C readiness:** Limited to the Sanitizing Products page, which directs purchase off-site to the Ride-Glide Shopify store. The brand transfer is not explained — visitors don't know why they're being sent to Ride-Glide.

**CTA flow alignment:** Mostly B2B-aligned (every product page has an "Inquire" button → /contact form), but the lack of a phone-prominence on product pages, missing email, and absent quote workflow weakens commercial intent.

---

## 4. Commercial Intent Review

**Likely Main Revenue Drivers:**
1. Specialty industrial grease and oil products (I-Tech series) — highest visible product count and NSN-cataloged
2. Contract packaging and contract blending services (Packaging page)
3. M-Tech machinery lubricants (Petrolatum, Molybdenum products)
4. R-Tech rail grease (concentrated, single-application revenue stream)

**High-Value Services/Products:**
- Defense / NSN-cataloged greases and oils (premium, low-substitutability)
- I-Tech AR20V-55000 (extreme cold mining grease — niche, high margin)
- Contract blending for outside brands (recurring revenue potential)
- Custom package and label design (sticky service)

**Weak or Unclear Offers:**
- **Consulting** — listed in the sitemap (`/consulting`) but the page contains a video gallery only, with no description of consulting services, no engagement model, no rate card, no examples
- **Sanitizing Products** — pandemic-era line that sends buyers to Ride-Glide; relevance in 2026 is unclear and the brand split is confusing
- **New Products page** — `/new-products` contains a single product (Bottle Cleaner Tablet) and `/new-products-2` is a Wix placeholder stub
- **Packaging page** — lists 5 container types (Plastic Bottles, Totes, Cartridges, Steel Drums, Cartons & Cases) but no sizes, no MOQs, no lead times, no equipment specs, no example labels

**Lead Quality Assessment:**
- The contact form fields are not fully discoverable in the rendered HTML (Wix lazy-loads; WebFetch reported a single Send button with implicit name/email/message)
- No field for company, role, industry, volume, product category, or required certifications
- No file upload for spec sheets / drawings
- No segmentation between "I want to buy a quart" and "I want to contract-blend 50,000 gallons"

**CTA Alignment:**
- Every product is followed by "Inquire" → /contact (single funnel)
- Phone number prominent only on the Packaging page CTA ("Contact us at (845) 858 8558 to discuss pricing")
- No "Request a Sample," "Request a TDS," "Request a Quote," or "Request a Spec Sheet" CTAs
- No call tracking / unique numbers per source

**Commercial Gaps:**
- Pricing transparency: zero (acceptable for custom blending; problematic for cataloged NSN items)
- No path for B2G procurement (no DUNS/CAGE, no government sales page)
- No ecommerce (despite a clean SKU + size + NSN catalog that would translate to WooCommerce/Shopify directly)
- No way to download a TDS or SDS without registering a Wix member account
- No "Why ARtech" page differentiating from larger blenders (Lubrication Engineers, Royal Purple, Castrol Industrial, Petro-Canada Lubricants, etc.)

**Recommendations:**
- Add segmented CTAs: "Buy from our Catalog" (for cataloged SKUs), "Request a Custom Quote" (for contract blending), and "Request a Sample" (for evaluation)
- Add a "Government Sales / NSN Catalog" page with CAGE/DUNS, ITAR statement, and full NSN list cross-referenced to product
- Make the TDS and SDS public (at minimum the SDS — gating SDS behind a login is not industry-standard)
- Build out the `/consulting/` page or remove it from navigation
- Either fold sanitizers into Artech's own commerce or remove the line entirely if it is no longer active

---

## 5. Customer Objection Analysis

| Customer Objection | Is It Answered? | Website Evidence | Gap | Recommendation |
|---|---|---|---|---|
| Is Artech a real company? | Partially | About page names principals, mentions 20+ years, R&R legacy | No founding date, no D-U-N-S, no entity status, no certifications | Add a Company Profile section with EIN-equivalent disclosures (CT registration, founding year, entity type) |
| Are they certified to industry/defense standards? | Partially | NSN, MIL-SPEC, NATO numbers shown on products | No ISO 9001 statement, no DFARS compliance statement, no ITAR registration disclosed | Add a Quality & Compliance page describing actual certifications and standards adherence |
| Have they worked with companies like mine? | No | No client logos, no testimonials, no case studies | Buyers cannot validate fit | Add 5-10 anonymized or named case studies organized by industry (steel mill, mining, rail, defense) |
| What is the contract-blending process? | No | Packaging page lists containers only | Buyers don't know how to engage | Add a "How We Blend" / "Custom Blending Process" page with NDA → formulation → sample → batch → delivery steps |
| What is the lead time? | No | Never mentioned | Buyers cannot plan | State typical lead times for samples, small batches, and full production |
| What is the minimum order quantity? | No | Never mentioned | Buyers cannot self-qualify | State MOQs per service (custom blend vs. catalog) |
| What does it cost? | No | "Call for pricing and availability" | Acceptable for B2B but not for cataloged NSN consumables | Provide ranges or "starts at" indicators on cataloged items |
| What sizes does each product come in? | Yes | Sizes are listed per product | Strong on this dimension |
| Where can I get the TDS/SDS? | No | TDS gated behind member login; SDS page is bare | Friction for engineers evaluating products | Publish TDS and SDS as public PDFs |
| Can I order online? | No | "Inquire" links only; sanitizer line goes off-site | Lost transactions on small consumable orders | Build a small public ecommerce layer for the catalog SKUs |
| Where is the company located? | Yes | Bethel, CT address | Strong |
| What is the area code 845 doing on a CT business? | No | No explanation | Trust friction (mismatched area code) | Add note: "Office: 845 area code; CT facility" or migrate to a CT (203/860) main line |
| Do they support government / DOD procurement? | No (despite NSN catalog) | NSNs visible but no procurement-readiness content | Buyers cannot route the order through government procurement | Add Government Sales page with CAGE/DUNS/SAM.gov details |
| What happens after I submit the inquiry? | No | "Success! Message received." confirmation only | Buyers don't know expected response time | Add: "We respond within 1 business day" |
| What makes them better than larger blenders? | No | No differentiation copy | Buyers default to scale players | Add "Why ARtech" page emphasizing small-batch, family-run, exacting standards, US-made |
| Are they reliable? Will they be around? | Partially | "20+ years" claim | No revenue, team size, financial stability cues | Add metrics (employees, square footage, batches per year) |
| Can they handle international orders? | No | Never mentioned | Loss of international leads | Add an Export / International section if relevant |
| Is there post-sale support? | No | Never mentioned | Industrial buyers expect application support | Add an "Application Engineering / Support" page |

---

## 6. Offer Clarity Review

| Offer / Service | What It Is | Who It Is For | Problem Solved | Outcome Promised | Clarity Level | Conversion Strength | Recommendation |
|---|---|---|---|---|---|---|---|
| I-Tech industrial greases | NLGI-grade greases for high-speed couplers, steel mill rolling, low-temp mining, HD construction | Steel mills, mining ops, construction OEMs | Lubrication for extreme conditions | Reliable performance under heat / load / cold | Moderate | Moderate | Add full TDS data (drop point, base oil, additives, temperature range) on each product |
| I-Tech Silicones | Dimethicone fluids 0.65–1,000 cSt, MIL-SPEC VV-D-1078 | Defense / DOD; precision damping applications | Compliant silicone damping fluid | MIL-SPEC compliance | Strong | Moderate | Add a defense-buyer landing page; expose CAGE/DUNS/NSN searchable list |
| I-Tech Gear Oils | AGMA 4–8/8A | Industrial gear / MRO buyers | Industrial gear lubrication | AGMA-graded performance | Weak | Weak | Add viscosity (cSt @ 40°C/100°C), base oil, EP additive presence, OEM approvals |
| M-Tech Machinery | Petrolatum + molybdenum-based products w/ MIL/SAE specs | Defense, machinery MRO | Anti-seize, machinery lubrication, conductive/thermal | Spec-compliant lubrication | Moderate | Moderate | Add applications, temperature range, compatibility tables |
| R-Tech Rail Grease | Rail grease + S Rail variant (35lb pail / 400lb drum / 2313lb tote) | Rail / railway operators | Rail-specific lubrication | Reliable rail grease supply | Weak | Weak | Add cold-flow data, friction modifier content, application method |
| Sanitizing (Vira-Gel) | 69%+ alcohol gel; 8oz, 2oz, 2oz spray, touchless dispenser | Consumers / facilities | Hand sanitization | TTB / USF&DA compliant | Moderate | Weak (off-site purchase) | Decide: keep & integrate, or sunset — current presentation confuses the brand |
| Packaging (custom) | Bottles / totes / cartridges / drums / cartons; package & label design | Lubricant brands needing fill-and-pack | Outsourced filling and labeling | Branded finished goods | Weak | Weak | Add sizes, MOQs, lead times, equipment, label specs, example artwork |
| Consulting | Referenced in nav; page is empty | Unclear | Unclear | Unclear | Very Weak | Very Weak | Either build the page (process audits, formulation help, lubrication program reviews) or remove |
| New Products | One product (Bottle Cleaner) | Unclear | Unclear | Unclear | Very Weak | Very Weak | Sunset or rebuild as a real "What's New" feed |

---

## 7. Messaging and Positioning Review

**Homepage tagline (recurring):** "Premium lubricants and quality service"
**Homepage title tag:** `Artech Lubricants |Grease,Oil,Silicone|Contract Packaging`
**Meta description:** `ARtech is a family run botique lubricant company based in Bethel CT. We blend and supply a wide variety of industrial products designed to keep your equipment running smoothly. ARtech also specializes in custom packaging, Have a product that you need packaged? Give us a call and we will be happy to help.`

**5-second clarity test:** Failed at the homepage. The visible homepage content is dominated by a video gallery ("All Videos: Production Line Filling, Gear Oil Mixing, Accumulation Table") with no introductory H1 and only a tagline ("Premium lubricants and quality service") and a "LEARN MORE" button. A new visitor cannot tell within 5 seconds:
- That this is a CT-based contract blender
- That they serve defense and industrial markets
- That they have NSN-cataloged products
- What problem they solve

The meta description is much better than the on-page hero — but the meta description has the typo "botique."

**Tone:** Modest, family-business, understated. This is on-brand for a 20+ year boutique blender — but the website over-corrects into anonymity.

**Differentiation:** Almost none on-page. The strongest differentiator the business has — that it is a small, family-run, US-Northeast contract blender that meets MIL-SPEC and produces NSN-cataloged products — is mentioned only on the About page.

**Repeated phrases (overused):**
- "Premium lubricants and quality service" — appears on every single page tested as a sub-tagline
- "Customer specific and exacting standards" — repeated across product pages
- "Inquire" as the universal CTA

**Voice consistency:** Consistent in its sparseness. Every page is templated similarly: tagline → product list with inquire button.

**Customer language vs. internal language:** Heavily internal/catalog-style. Pages list product codes (ARGHC1500, AR20V-55000) and military specs (MIL-PRF 83483, NATO S-1735) without translating them to buyer outcomes. A defense-procurement officer will read fluently; an industrial MRO manager looking for "high-heat steel mill grease" must dig.

**Outcome focus:** Weak. Pages list features (NLGI grade, viscosity, NSN) without explaining outcomes (uptime, equipment life, regulatory compliance, cost savings).

---

## 8. Website Structure and Sitemap

URLs discovered from `https://www.artechlubricants.com/pages-sitemap.xml` (16 URLs total, all `<lastmod>2021-12-03</lastmod>`):

- Home (`/`)
- About (`/about`)
- I-Tech (`/i-tech`)
- I-Tech Info (`/i-tech-info`) — stub
- I-Tech Silicones (`/i-tech-silicones`)
- I-Tech Gear Oils (`/i-tech-gear-oils`)
- M-Tech (`/m-tech`)
- R-Tech (`/r-tech`)
- Packaging (`/packaging`)
- Sanitizing Products (`/sanitizing-products`)
- Consulting (`/consulting`) — empty content
- Data Sheets (`/data-sheets`) — gated landing
- SDS (`/sds`) — bare list
- Contact (`/contact`)
- New Products (`/new-products`) — single product
- New Products 2 (`/new-products-2`) — Wix placeholder

**Inferred but not in sitemap:** `/tds-sds` (referenced by Data Sheets page as the document portal). Also referenced: external Ride-Glide Shopify store for sanitizers.

**Suggested simplified sitemap:**
- Home
- About
  - Company
  - Leadership
  - Quality & Compliance
  - Facility
- Products
  - Industrial Greases (I-Tech)
  - Silicones (I-Tech Silicones)
  - Gear Oils (I-Tech Gear Oils)
  - Machinery Lubricants (M-Tech)
  - Rail Grease (R-Tech)
- Industries
  - Defense / Government (NSN catalog)
  - Steel & Heavy Industry
  - Mining
  - Rail
  - Construction
- Services
  - Custom Blending
  - Contract Packaging
  - Package & Label Design
  - Application Engineering
- Resources
  - Technical Data Sheets (TDS) — public PDFs
  - Safety Data Sheets (SDS) — public PDFs
  - FAQ
  - Blog / News
- Contact
  - Sales Inquiry
  - Government Procurement
  - Sample Request
- Footer
  - Privacy Policy
  - Terms of Use
  - Cookie Policy

---

## 9. Navigation Review

**Header navigation (current):**
- HOME
- ABOUT
- LUBRICANTS (dropdown: I-Tech, I-Tech Silicones, I-Tech Gear Oils, M-Tech, R-Tech)
- PACKAGING
- SANITIZING PRODUCTS
- DATA SHEETS
- CONTACT
- "More" (overflow item — likely contains Consulting, New Products, SDS)

**Issues:**
- "More" overflow conceals Consulting, SDS, and New Products — pages users may want to find directly
- "Sanitizing Products" sits as a top-level item next to industrial lubricant categories — incongruent and dilutes the industrial focus
- No "Industries" navigation despite the catalog clearly speaking to specific verticals
- No "Government / Defense" entry despite the NSN catalog
- No "Resources" parent grouping for TDS / SDS / FAQ / Blog
- No phone number rendered in the header (industrial buyers often call rather than fill forms)
- No top-right "Get a Quote" CTA button

**Footer:**
- Two social icons (LinkedIn, Facebook) — no email link, no address, no copyright year visible in the captured HTML. Wix footer is sparse.

**Mobile navigation:** Not directly tested with browser automation in this audit.

---

## 10. Content Inventory

| Page | URL | Page Type | Main Topic | Target Audience | CTA | Content Quality | SEO Strength |
|---|---|---|---|---|---|---|---|
| Home | / | Homepage | Brand intro + video gallery | All buyers | "Learn More" / "Inquire" | Thin (video-led, no H1) | Weak |
| About | /about | About | Company history, leadership | All buyers | None visible | Moderate | Weak |
| I-Tech | /i-tech | Product line | Industrial greases | Steel/mining/construction | Inquire | Moderate | Weak |
| I-Tech Info | /i-tech-info | Stub | Empty | None | None | Thin | Poor |
| I-Tech Silicones | /i-tech-silicones | Product line | MIL-SPEC silicones | Defense | Inquire | Moderate | Moderate |
| I-Tech Gear Oils | /i-tech-gear-oils | Product line | AGMA gear oils | Industrial | Inquire | Thin | Weak |
| M-Tech | /m-tech | Product line | Petrolatum/Moly products | Defense/MRO | Inquire | Moderate | Moderate |
| R-Tech | /r-tech | Product line | Rail grease | Rail | Inquire | Thin | Weak |
| Packaging | /packaging | Service | Container types | Brands | Phone CTA | Weak | Weak |
| Sanitizing Products | /sanitizing-products | Product (consumer) | Vira-Gel | Consumers | Shop Now (off-site) | Moderate | Moderate |
| Data Sheets | /data-sheets | Resource | TDS portal | All | Member login | Gated | Weak |
| SDS | /sds | Resource | SDS list | All | Implicit | Thin | Weak |
| Consulting | /consulting | Service | Empty (videos only) | Unclear | None | Very thin | Poor |
| New Products | /new-products | New product | Bottle cleaner | Unclear | None | Thin | Weak |
| New Products 2 | /new-products-2 | Stub/placeholder | Wix template | None | None | Placeholder | Poor |
| Contact | /contact | Contact | Form + phone | All | Send | Moderate | Weak |

---

## 11. Page-by-Page Analysis

### Page: Home

**URL:** https://www.artechlubricants.com/
**Purpose:** Entry point — introduce the company and route to product lines
**Business Information Found:** Tagline "Premium lubricants and quality service"; product-line links via top nav; "Our Goal" section (referenced in extraction but not deeply parsed); video gallery
**Target Audience:** All buyer types
**Main CTA:** "LEARN MORE" → /about
**Content Summary:** Hero with tagline → "Our Goal" (mission) → video gallery (Production Line Filling, Gear Oil Mixing, Accumulation Table — all 2019-recorded)
**SEO Observations:**
- Title: `Artech Lubricants |Grease,Oil,Silicone|Contract Packaging` — formatting issue (no spaces)
- Meta description: clear but contains typo "botique" instead of "boutique"
- **No H1 on the homepage** — only an H2 from the Wix video widget ("All Videos") and three H3s for video titles
- Schema: WebSite + ItemList of videos only — no Organization, no LocalBusiness
- Sitemap shows `<lastmod>2021-12-03</lastmod>` for homepage
**Design/UX Observations:** Wix-template look; videos are 6+ years old (2019 upload date in the schema); sparse design
**Conversion Observations:** Single low-friction "LEARN MORE" CTA; no phone-prominence; no quote CTA
**Trust/Credibility Observations:** Three production videos serve as authentic trust signals — but they are aging
**Issues Found:** No H1; outdated videos; placeholder feel; no dynamic content
**Missing Information:** Founding year, certifications, named industries, primary value prop in the hero
**Recommended Improvements:** Add a clear H1 ("Specialty Industrial Lubricant Blender Based in Bethel, CT — MIL-SPEC, NSN-Cataloged, Made-to-Order"); update or refresh the video gallery; add a logo/trust strip; expose phone in the header

---

### Page: About

**URL:** https://www.artechlubricants.com/about
**Purpose:** Company background and leadership
**Strengths:** Names the President (Dan Arkins) and General Manager (Steve Renwick) with credible bios; cites the R&R Packaging legacy; references 2012 ownership change
**Weaknesses:** No founding year (only "20+ years"); no certifications; no facility description; no team photos; no contact information embedded; no mission/values beyond a generic phrase
**Recommended Improvements:** Add headshots, founding year, facility square footage, equipment list, certifications, and an embedded "Get in touch with Dan" CTA

---

### Page: Contact

**URL:** https://www.artechlubricants.com/contact
**Purpose:** Lead capture
**Strengths:** Phone (845) 858-8558, fax (845) 858-8338, owner cell (203) 733-0162, address 18 Taylor Ave, Bethel, CT 06801, social icons
**Weaknesses:**
- No email address published
- No business hours
- No embedded map
- The Wix contact form fields are not directly extractable from server-side HTML (likely standard Name/Email/Message but no qualifying fields)
- 845 area code (NY) on a CT business is not explained — buyers may pause
- No expected response time
**Recommended Improvements:** Publish a sales email (sales@artechlubricants.com or info@), embed a Google Map, state hours, add segmentation fields (industry, NSN need, MOQ), add expected response time to the success message

---

### Page: Packaging

**URL:** https://www.artechlubricants.com/packaging
**Purpose:** Sell contract packaging services
**Strengths:** Lists 5 container categories; phone CTA prominent
**Weaknesses:** No sizes, MOQs, lead times, equipment specs, or example labels; no explanation of where customer ends and Artech begins (formulation? packaging only? both?)
**Recommended Improvements:** Add a "Capabilities" matrix with sizes per container, batch sizes, equipment, label/printing capability, and typical lead times. Show 3-6 anonymized example projects.

---

### Page: I-Tech

**URL:** https://www.artechlubricants.com/i-tech
**Strengths:** 5 named products with descriptive applications (steel mill rolling, mining, construction); size ranges included; clear performance positioning
**Weaknesses:** No drop point, base oil, NLGI thickener type, additives, temperature range; no actual TDS link inline; "Inquire" is the only CTA
**Recommended Improvements:** Embed a TDS PDF link per product; add a comparison table; add "Order Sample" CTA

---

### Page: I-Tech Silicones

**URL:** https://www.artechlubricants.com/i-tech-silicones
**Strengths:** 7 viscosity grades clearly listed; CAS Number (631748.62.9 — note: this CAS appears mistyped, the standard CAS for PDMS is 63148-62-9); MIL-SPEC VV-D-1078 referenced; NSN numbers cited per size
**Weaknesses:** CAS number formatting looks wrong (decimals in a CAS number); no NSN numbers actually listed beneath each size in extraction (referenced as "with NSN numbers" — verify they are actually rendered); no defense buyer landing pathway
**Recommended Improvements:** Audit and fix the CAS number; surface NSNs explicitly for each size; add a Government Sales callout

---

### Page: I-Tech Gear Oils

**Strengths:** AGMA grade taxonomy
**Weaknesses:** No viscosity in cSt, no base oil, no EP/anti-wear additive disclosure, no application examples
**Recommended Improvements:** Add an AGMA → cSt conversion table, application matrix, and OEM approvals if any

---

### Page: M-Tech

**Strengths:** 5 products with MIL-PRF/MIL-DTL/SAE-AMS standards; CAS numbers; NSN reference
**Weaknesses:** No application examples; no temperature ranges; no compatibility data
**Recommended Improvements:** Add application matrix and a Government Sales touchpoint

---

### Page: R-Tech

**Strengths:** Sizes (35lb pail, 400lb drum, 2313lb tote) — accommodates rail-fleet scale
**Weaknesses:** No application detail; no cold-flow data; no rail association references (AAR, etc.)
**Recommended Improvements:** Add a Rail Industry landing page describing typical applications, AAR/UIC standards, and example deployments

---

### Page: Sanitizing Products

**Strengths:** Specific product specs (USP grade, 69% alcohol, TTB/USF&DA compliant); 5 SKUs; clear feature list
**Weaknesses:** "SHOP NOW" routes to **Ride-Glide** Shopify store — different brand. Buyers don't know why they're being sent away. The line is also pandemic-era and may be inactive.
**Recommended Improvements:** Decide whether to (a) integrate sanitizers into Artech's own commerce (move SKUs to a unified store), (b) explicitly explain the Ride-Glide partnership, or (c) sunset the page if the line is no longer active

---

### Page: Data Sheets

**URL:** https://www.artechlubricants.com/data-sheets
**Issue:** Page is a gateway to a Wix member portal at `/tds-sds`. Industrial buyers are required to register a Wix account to download a TDS — a major friction point not standard in industry practice (most blenders publish TDS PDFs directly).
**Recommendation:** Publish TDS as public PDFs, organized by product line; gate only the SDS if needed (and even SDS gating is unusual — most regulated SDS are public).

---

### Page: SDS

**URL:** https://www.artechlubricants.com/sds
**Issue:** Page lists product names twice next to each other (e.g., "ARGHC - 1500" then "ARGHC - 1500 SDS") with unclear download paths. Looks unfinished.
**Recommendation:** Replace with a clear, public SDS PDF list grouped by product line, each with a download link

---

### Page: Consulting

**URL:** https://www.artechlubricants.com/consulting
**Critical Issue:** The page title is "CONSULTING" but the page contains a video gallery only. There is no description of consulting services, no engagement model, no rates, no typical deliverables, no consultant credentials.
**Recommendation:** Either (a) build out the page properly — process audits, lubrication program reviews, application engineering, formulation development, with named consultants and rates — or (b) remove from navigation to avoid disappointing visitors

---

### Page: New Products

**URL:** https://www.artechlubricants.com/new-products
**Issue:** Single product (Bottle Cleaner Tablet — citric acid) with messaging about hydration. Disconnected from the industrial lubricant brand. No date markers.
**Recommendation:** Either rebuild as a real "What's New" feed (releases, line extensions, certifications) or remove

---

### Page: New Products 2

**URL:** https://www.artechlubricants.com/new-products-2
**Critical Issue:** The page contains literal Wix template placeholder text: "Add Your Title" and "Tell customers more about you. Add a few words and a stunning pic to grab their attention and get them to click." It also has an H1 that reads only "Premium lubricants and quality service" (the site tagline reused) and "Add Your Title."
**Recommendation:** Delete this page immediately. It is a public URL serving Wix template placeholder content and is in the sitemap.

---

### Page: I-Tech Info

**URL:** https://www.artechlubricants.com/i-tech-info
**Issue:** Stub page titled "More on I-Tech" with no real content. Has no H1.
**Recommendation:** Delete or merge into `/i-tech`

---

## 12. Products, Services, and Offerings

| Product/Service | URL | Target Customer | Problem Solved | Business Value | Explanation Quality | Missing Information |
|---|---|---|---|---|---|---|
| ARGHC1500 (NLGI Grade I high-speed coupler grease) | /i-tech | Steel mills, industrial | High-speed lubrication | Specialty grease | Moderate | TDS, drop point, base oil |
| ARGHC1800 (ultra-high-speed coupler grease) | /i-tech | Steel mills | Ultra-high-speed lubrication | Specialty grease | Moderate | TDS, additives |
| ARGH5 (low-speed/high-load Moly grease) | /i-tech | Steel mills (rolling) | High-load rolling | Specialty grease | Moderate | TDS, OEM approvals |
| ARBL-220-2 (HD Construction Static guard) | /i-tech | Heavy construction | Static guard | Niche product | Weak | Application detail |
| AR20V-55000 (extreme cold mining grease, -45°) | /i-tech | Mining (cold-region) | Extreme cold lubrication | Niche/high-margin | Moderate | TDS, temperature ranges |
| I-Tech Silicones (Dimethicone, 7 viscosities) | /i-tech-silicones | Defense / DOD | MIL-SPEC silicone supply | Defense supply | Strong (specs) | NSN visibility; CAS formatting |
| I-Tech Gear Oils (AGMA 4-8/8A) | /i-tech-gear-oils | Industrial gear/MRO | Gear lubrication | Standard product | Weak | cSt, base oil |
| M-Tech Petrolatum VV-P 236 | /m-tech | Defense, machinery MRO | Petrolatum lubrication | Defense supply | Moderate | Application detail |
| M-Tech Graphite Petrolatum (anti-seize) | /m-tech | Defense (MIL-T-5544C) | Anti-seize | Defense supply | Moderate | Compatibility data |
| M-Tech Molybdenum Silicone | /m-tech | Defense (MIL-DTL 25681E, NATO S-1735) | Moly silicone | Defense supply | Moderate | Application detail |
| M-Tech Molybdenum Powder | /m-tech | Defense (SAE AMS 7866) | Additive supply | Specialty | Moderate | Particle size detail |
| M-Tech Molybdenum Petrolatum | /m-tech | Defense (MIL-PRF 83483) | Specialty lubrication | Defense supply | Moderate | Application detail |
| R-Tech Rail Grease + S Rail Grease | /r-tech | Rail / railway | Rail-specific lubrication | Niche | Weak | Specs, AAR/UIC |
| Vira-Gel Sanitizers (5 SKUs) | /sanitizing-products | Consumers / facilities | Hand sanitization | Pandemic-era line | Moderate (off-site sale) | Brand split with Ride-Glide |
| Custom Packaging (5 container types) | /packaging | Lubricant brands | Outsourced fill/pack | Recurring revenue | Weak | MOQs, lead times, equipment |
| Custom Package & Label Design | /packaging | Lubricant brands | Brand identity | Service add-on | Weak | Examples, process |
| Consulting | /consulting | Unclear | Unclear | Unclear | Very weak (empty page) | Everything |
| Bottle Cleaner Tablet | /new-products | Consumers | Bottle cleaning | Off-brand consumer product | Weak | Brand fit |

---

## 13. Target Audience and Customer Segments

**Primary audiences:**
1. **Defense / DOD procurement** — strongest signal in the catalog (NSN, MIL-SPEC, NATO, SAE-AMS)
2. **Industrial OEM and MRO buyers** — steel mills, mining, construction, rail
3. **Other lubricant brands** — looking for contract blending or contract packaging
4. **Gear / industrial machinery operators** (gear oils)

**Secondary audiences:**
5. **Consumer / retail** for sanitizers (low priority)

**Decision makers:**
- Procurement officers (industrial and DOD)
- Maintenance and operations engineers
- Contract managers at lubricant brands
- Government acquisition specialists (DLA-related)

**Influencers:**
- Application engineers, tribologists, R&D chemists

**Audience-specific gaps:**
- **No Defense / Government landing page** — biggest miss given the NSN catalog
- **No industry-specific landing pages** (Steel, Mining, Rail, Construction) — the products are clearly built for these but the website doesn't say so prominently
- **No engineer-facing content** — TDS gated, no application notes, no compatibility tables
- **No procurement-officer content** — no "How to order via NSN," no DLA / GSA references

---

## 14. Brand, Design, Color Theme, and Aesthetics

**Primary Color:** Predominantly white background with blue accents (typical Wix industrial template — exact HEX not extracted in this audit, would require visual inspection)
**Secondary Color:** Black/dark grey for text
**Accent Color:** Blue for links/CTAs
**Background Colors:** White
**Typography:** Wix-default (likely Open Sans / system sans-serif)
**Button Style:** Wix-default rectangular buttons
**Card Style:** Wix gallery / grid cards
**Layout Style:** Wix template — top nav, hero block, content sections stacked
**Image/Icon Style:** Stock industrial photography + 3 production-floor videos
**Animation/Motion:** Minimal; videos play on click
**Overall Aesthetic:** Generic small-business Wix template. Does not project the technical depth or family-craftsmanship narrative the company actually has.
**Design Consistency:** Consistent in being templated — but the templated sameness is the problem
**Brand Impression:** Modest; underwhelming relative to the actual capability
**Mobile Responsiveness:** Wix templates are responsive by default, but not directly tested
**Visual Hierarchy:** Weak — no homepage H1, repeated tagline, video gallery dominates
**Readability:** Acceptable
**Use of Whitespace:** Adequate
**Brand Trust Impression:** Below the actual business's credibility

**Design Issues:**
- Templated Wix look that does not differentiate Artech from any other small-business Wix site
- Three videos from 2019 are the most prominent visual content
- No facility photography, no team photos, no equipment close-ups
- No client logos or trust strip
- Footer is sparse

**Recommendations:**
- Either commit to a thoughtful Wix theme rebuild or migrate to a more credible CMS / static site (Webflow, WordPress, Astro, Next.js)
- Commission a small photo shoot of the Bethel facility, equipment, and team
- Add a logo/trust strip with major industries served (Steel, Mining, Rail, Defense, Construction)
- Add an animated stat band: "20+ Years," "X NSNs," "Y MIL-SPEC Compliant Products," "Z Industries Served"
- Replace the 2019 videos with current footage (or modernize them with new b-roll)

---

## 15. Brand Voice and Writing Quality

**Tone:** Modest, brief, family-business
**Grammar/Spelling:** **One visible typo: "botique" in the meta description (should be "boutique").** Title-tag formatting is unprofessional (no spaces around pipes or after commas).
**Clarity:** Mixed — strong on cataloged spec language (MIL-SPEC, NSN, AGMA), weak on outcomes and application
**Professionalism:** Adequate but understated
**Persuasiveness:** Low — no differentiation copy, no testimonials, no case studies
**Use of generic phrases:** "Premium lubricants and quality service" repeated everywhere
**Repetition:** High — same tagline on every page
**Human vs. AI feel:** Reads human (slightly old-school, slightly informal — not AI-generated)
**Customer match:** Uneven — fluent for defense procurement officers, opaque for industrial MRO managers
**Outcome focus:** Weak

---

## 16. Content Quality Review

**Content depth:** Thin to moderate. Product pages are catalog-style listings with limited technical depth.
**Business clarity:** Weak at homepage; better at About page; weak at Packaging and Consulting.
**Service clarity:** Mixed — strong at I-Tech and M-Tech (despite thin tech depth), very weak at Consulting and Packaging
**Uniqueness:** Low — repeated tagline; templated Wix layout
**Usefulness:** Limited — TDS gated, SDS unfinished, no application notes
**Readability:** Adequate
**Repetition:** High (same tagline)
**Missing explanations:** Lead times, MOQs, certifications, how to engage, sample policy, post-sale support
**Weak/thin pages:** /new-products-2, /i-tech-info, /consulting, /sds, /r-tech, /i-tech-gear-oils
**Duplicate content risk:** /new-products vs /new-products-2; /i-tech vs /i-tech-info; /data-sheets vs /sds
**Outdated content:** Sitemap lastmod 2021-12-03 across all URLs; videos from 2019; sanitizer line tied to pandemic
**Generic marketing language:** Heavy
**Decision support:** Weak — buyers cannot evaluate without contacting sales

---

## 17. SEO Audit

#### Overall SEO Condition

**Weak.** Wix-default SEO with several quality issues, no schema beyond basic, no analytics, gated documentation, an entire site that has not been updated since 2021, and a homepage with no H1.

#### Main SEO Issues

- Sitemap shows all URLs frozen at lastmod 2021-12-03 — Google treats stale lastmod as low-priority
- Homepage has no H1; only Wix video widget H2/H3s
- Title formatting issue (no spaces around pipes / commas)
- Meta description has a typo ("botique")
- No analytics installed (`AnalyticsEnabled=false`) — cannot measure impact of any changes
- No GTM, no GA4, no Meta Pixel, no LinkedIn Insight Tag
- Gated TDS portal blocks valuable engineer-facing PDFs from being indexed
- No blog or resource content for top-of-funnel keywords
- Public stub page (`/new-products-2`) with placeholder text
- Duplicate-page risk: `/i-tech` vs `/i-tech-info`, `/data-sheets` vs `/sds`, `/new-products` vs `/new-products-2`
- Schema is minimal — no Organization, no LocalBusiness, no Product
- robots.txt blocks PetalBot (Huawei) — fine — but no crawl-budget priority hints; auto-generated by Wix
- No backlinks or external authority signals visible from the site itself (no press, no partner pages)

#### Page-Level SEO Notes

| Page | Title Tag | Meta Description | H1 | URL Quality | SEO Issues |
|---|---|---|---|---|---|
| Home | "Artech Lubricants \|Grease,Oil,Silicone\|Contract Packaging" (formatting issue) | Has typo "botique" | **None** | Good | No H1; title formatting |
| About | Not extracted | Not extracted | "ABOUT US" | Good | OK |
| I-Tech | Not extracted | Not extracted | Implicit | Good | Thin |
| I-Tech Info | Not extracted | Not extracted | None | OK | Stub page |
| I-Tech Silicones | Not extracted | Not extracted | Implicit | Good | OK |
| I-Tech Gear Oils | Not extracted | Not extracted | Implicit | Good | Thin |
| M-Tech | Not extracted | Not extracted | "M-Tech" | Good | OK |
| R-Tech | Not extracted | Not extracted | "R-Tech" | Good | Thin |
| Packaging | Not extracted | Not extracted | "PACKAGING" | Good | Thin |
| Sanitizing Products | Not extracted | Not extracted | "Vira Gel Sanitizers" | Good | OK; off-site CTA |
| Data Sheets | Not extracted | Not extracted | "TECHNICAL DATA SHEETS" | Good | Gated |
| SDS | Not extracted | Not extracted | "Safety Data Sheets/ Technical data sheets" | Good | Bare/unfinished |
| Consulting | Not extracted | Not extracted | "CONSULTING" | Good | Empty |
| New Products | Not extracted | Not extracted | "Gear Up" | Weird | Disconnected |
| **New Products 2** | Not extracted | Not extracted | "Add Your Title" | Bad | **Placeholder text** |
| Contact | Not extracted | Not extracted | "CONTACT US" | Good | OK |

#### Keyword Opportunities

- "MIL-SPEC silicone fluid supplier"
- "NSN dimethicone supplier"
- "MIL-PRF 83483 supplier"
- "MIL-DTL 25681E supplier"
- "AGMA 4 / AGMA 5 / AGMA 6 / AGMA 7 / AGMA 8 gear oil"
- "NLGI grade I high-speed coupler grease"
- "extreme cold mining grease -45"
- "rail grease 400lb drum"
- "contract grease packaging Connecticut"
- "contract lubricant blender Northeast"
- "graphite petrolatum MIL-T-5544C"
- "molybdenum disulfide grease NATO S-1735"
- "boutique lubricant blender US"
- "small batch grease blender"

#### Technical SEO Notes

- Wix hosting with Cloudflare-backed CDN (via Pepyaka — Wix's edge)
- HSTS enabled (max-age 31556952)
- robots.txt allows all pages except `?lightbox=` query strings; sets crawl-delay for AhrefsBot/dotbot; blocks PetalBot
- Sitemap is auto-generated by Wix; only contains 16 URLs; all lastmod 2021-12-03
- Strict-Transport-Security present
- HTTP/2 enabled
- Canonicals via Wix default (not audited per page)
- No XMLRPC concern (Wix isn't WordPress)
- Sites in Ireland Wix datacenter

#### Content SEO Recommendations

1. Delete `/new-products-2`, `/i-tech-info`, and either delete or rebuild `/consulting` and `/new-products`
2. Add an H1 to the homepage with primary keyword cluster
3. Fix title-tag formatting and the meta-description typo
4. Publish all TDS and SDS as ungated PDFs and let Google index them
5. Add Organization, LocalBusiness, and Product schema (Wix has built-in support)
6. Build out 5-8 industry pages (Defense, Steel, Mining, Rail, Construction, Industrial Gear, Custom Blending, Government Sales)
7. Create a small blog / news section to ship at least 1 page per month so Google sees freshness
8. Internal-link product pages to their relevant industry pages
9. Migrate to a more SEO-flexible platform if Wix continues to constrain (Webflow, WordPress, Astro)

---

## 18. Technical and UX Issues

- **No analytics:** `AnalyticsEnabled=false` in the Thunderbolt config means the business is operating without a measurement layer
- **Wix lazy-loading:** Forms and dynamic content are rendered client-side; content visible to users may differ from what crawlers see
- **External Shopify dependency:** Sanitizer purchases route to Ride-Glide — adds a domain hop and a brand split
- **Member login required for TDS:** unusual industry friction
- **Unfinished public pages** (`/new-products-2`, `/i-tech-info`, `/consulting`)
- **Stale sitemap lastmod (2021-12-03)** signals neglect to crawlers
- **Title and meta-description formatting/typo issues**
- **Two different "New Products" URLs**
- **Two different documentation URLs** (`/data-sheets` vs `/sds`) without clear differentiation
- Old videos (2019 upload date) on the homepage

Mobile responsiveness was not directly tested.

---

## 19. Broken, Weak, or Problematic Sections

| Severity | Issue | Location | Why It Matters | Recommendation |
|---|---|---|---|---|
| Critical | Public placeholder page with literal Wix template text "Add Your Title" | /new-products-2 | Broken-looking; harms brand and SEO | Delete the page immediately |
| Critical | Consulting page has no consulting content (only a video gallery) | /consulting | Visitors expecting consulting services find nothing; brand-trust damage | Build out the page or remove from nav |
| Critical | TDS gated behind Wix member login | /data-sheets | Industrial buyers/engineers can't get data sheets without registering | Publish TDS PDFs publicly |
| Critical | No Privacy Policy / Terms / Cookie Policy | / (footer) | Legal/compliance gap, especially with any EU traffic | Publish the basics |
| Critical | No analytics installed | Site-wide | Cannot measure traffic or conversions | Install GA4 + GTM (Wix supports both natively) |
| High | Homepage has no H1 | / | SEO and accessibility | Add an H1 with primary value prop |
| High | Title-tag formatting issue and meta description typo | / | Direct CTR / brand impact | Fix immediately |
| High | All URLs in sitemap show lastmod 2021-12-03 | sitemap.xml | Crawl-priority signal of neglect | Edit at least one page per month |
| High | SDS page is bare and looks unfinished | /sds | Compliance-related friction | Rebuild as a proper SDS PDF list |
| High | No legal pages (Privacy, Terms, Cookie) | Footer | Compliance risk | Publish |
| High | No certifications page despite MIL-SPEC/NSN catalog | Site-wide | Defense buyers cannot verify compliance posture | Publish a Quality & Compliance page |
| High | I-Tech Info page is a stub | /i-tech-info | Looks unfinished; cannibalizes /i-tech | Delete or merge |
| High | "New Products" page lists a single off-brand item | /new-products | Confusing | Rebuild or remove |
| High | Sanitizer "SHOP NOW" routes to a different brand (Ride-Glide) without explanation | /sanitizing-products | Trust friction | Explain the partnership or move SKUs into Artech's own commerce |
| Medium | No email address published | /contact | Buyers default to phone or form; lost email leads | Publish sales@ or info@ |
| Medium | 845 area code (NY) on a CT business not explained | /contact | Trust friction | Add a small note or migrate to a CT main number |
| Medium | Footer is sparse (2 social icons; no NAP, no legal, no copyright) | Site-wide | Trust/credibility loss | Rebuild footer with NAP, legal, social, hours |
| Medium | Homepage videos are 6+ years old (2019) | / | Looks dated | Refresh or replace |
| Medium | "Premium lubricants and quality service" repeated as tagline on every page | Site-wide | Boilerplate | Add page-specific value props |
| Medium | CAS number formatting on silicones may be wrong (`631748.62.9`) | /i-tech-silicones | Technical accuracy | Verify and fix to `63148-62-9` if PDMS |
| Medium | No phone number in header | Header | Industrial buyers prefer phone | Add to header |
| Medium | Wix Velo / Wix code is disabled (`isWixCodeOnSite=false`) | Site-wide | Limits dynamic behaviors and integrations | Acceptable but constrains future capability |
| Medium | No schema beyond WebSite + video ItemList | Site-wide | SERP / AI visibility loss | Add Organization, LocalBusiness, Product schema |
| Low | "More" overflow item in nav | Header | Hides Consulting / SDS / New Products | Restructure nav |
| Low | No copyright year visible | Footer | Date staleness | Add dynamic year |
| Low | Wix template aesthetic is generic | Site-wide | Brand differentiation loss | Theme refresh |

---

## 20. Forms and Lead Capture Review

| Lead Capture Point | Location | Fields / Action | Strength | Weakness | Recommendation |
|---|---|---|---|---|---|
| Wix contact form | /contact | Implicit Name/Email/Message + Send button + "Success! Message received." confirmation | Simple | Tiny field set; no qualifying fields; no SLA messaging | Add Company, Industry, Volume, Product Interest, Required Standards (NSN/MIL/AGMA), Timeline; add expected response time |
| Phone CTA | /contact, /packaging | (845) 858-8558 | Always present on those pages | Not on every product page or in header | Add to header and every product page |
| Owner cell | /contact | (203) 733-0162 (Dan Arkins) | Personal touch | Burns the principal's cell as the customer-service line | Acceptable for boutique; consider a 203/860 main line as well |
| Fax | /contact | (845) 858-8338 | Defense buyers occasionally still fax orders | Otherwise dated | Keep for defense compliance |
| LinkedIn | Footer | Social link | OK | Minimal use | Activate the LinkedIn page; post regularly |
| Facebook | Footer | Social link | OK | Less B2B-relevant | Lower priority |
| "Inquire" buttons on product pages | All product pages | Routes to /contact | Universal | Same generic form for every product | Pre-fill product / SKU into the form |
| Sanitizer "SHOP NOW" | /sanitizing-products | Off-site to Ride-Glide Shopify | Functional | Brand-split confusion | Either explain or sunset |
| TDS member registration | /data-sheets | Registration → access portal | Captures email | Gates valuable engineer-facing PDFs from search engines and casual buyers | Publish TDS publicly |

**No newsletter signup, no sample request, no quote-request form, no callback request.**

---

## 21. Conversion Journey Review

**Main conversion goal:** Inbound inquiry via the contact form or a phone call.

**Current journey:**
1. Visitor arrives (likely via direct, referral, or low-volume organic)
2. Lands on homepage (no H1, video gallery)
3. Reads tagline; possibly clicks LEARN MORE → /about
4. Or browses Lubricants dropdown → product line page
5. Sees product list with "Inquire" buttons → /contact
6. Fills out a minimal form
7. Receives "Success! Message received."
8. Waits — no expected response time given

**Friction points:**
- Homepage doesn't pass the 5-second test
- TDS gated (engineers leave to look elsewhere)
- No certifications or trust signals
- Product specs are thin (engineers can't pre-evaluate)
- Single contact form for radically different inquiry types
- No sample-request flow
- No "Buy from catalog" path despite a clean SKU/size catalog
- Sanitizer flow leaks to a different brand

**Missing journey stages:**
- **Awareness:** No blog, no resource articles, no top-of-funnel content
- **Evaluation:** TDS gated; no comparisons; no certifications visible; no case studies
- **Decision:** No sample policy; no MOQ; no lead times; no pricing tiers
- **Onboarding:** No description of NDA / first-batch / sample workflow

**Recommendations:**
- Add a clear homepage H1 and 3-4 trust signals above the fold
- Publish TDS publicly
- Add segmented CTAs: "Defense / NSN Catalog," "Industrial Buyers," "Contract Blending Inquiry," "Sample Request"
- Add expected response time to form confirmation
- Add a logo strip with industries served
- Add a stat band ("20+ Years," "X NSNs in Stock," "Y MIL-SPEC Products," "Z Customer Industries")

---

## 22. Trust Signals and Credibility

**Trust Signals Found:**
- Phone (845) 858-8558, fax, owner cell
- Physical address: 18 Taylor Ave, Bethel, CT 06801
- Two named principals with credible bios (Dan Arkins; Steve Renwick)
- 20+ years operating history (R&R Packaging legacy)
- 2012 ownership transition disclosed
- Three production-line videos
- MIL-SPEC, MIL-PRF, MIL-DTL, NATO, SAE-AMS standard references
- NSN numbers
- AGMA grades
- LinkedIn and Facebook social icons
- Wix-hosted (HTTPS, HSTS — basic)

**Strongest Credibility Elements:**
- Named leadership with substantive bios
- MIL-SPEC and NSN catalog
- 20+ year operating history
- Production-floor videos showing real equipment

**Weak or Missing Proof:**
- No certifications page (no ISO 9001, no DFARS, no ITAR, no AS9100)
- No D-U-N-S, CAGE code, NAICS, SAM.gov registration disclosed
- No client logos
- No testimonials
- No case studies
- No team photos
- No facility photo gallery (only 3 videos)
- No press, awards, partnerships
- No industry-association memberships (NLGI, STLE, ILMA, etc.)
- No revenue, employee count, or scale metrics
- No leadership LinkedIn links
- No Better Business Bureau / industry rating

**Impact on Conversion:**
A defense procurement officer needs to see DFARS / ITAR / DUNS / CAGE before they can route a purchase order. An industrial MRO manager needs to see ISO 9001 and probably an industry-recognized certification (NLGI member, STLE Certified Lubrication Specialist on staff, etc.). The current website provides neither — meaning serious buyers must phone in to do compliance vetting that should be self-serve on the website.

**Recommendations:**
- Build a Quality & Compliance page disclosing:
  - ISO certifications (or stating "ISO 9001 certified" or "in process" if applicable)
  - DUNS number, CAGE code, SAM.gov registration
  - DFARS / ITAR statement
  - Industry memberships (NLGI, STLE, ILMA)
  - Standards adherence (MIL-PRF, MIL-DTL, NATO, AGMA)
- Add a logo strip on the homepage with major industries / customers (anonymized if needed)
- Add 5-10 case studies organized by industry
- Add at least 3-5 testimonials from named contacts (with permission)
- Add team photos and LinkedIn links for both Dan and Steve

---

## 23. Missing Business Information

The website does not explain or include:
- Founding year (only "20+ years")
- Original founding date of R&R Packaging
- Complete leadership team beyond two names
- Number of employees
- Facility square footage
- Equipment list (mixers, fillers, ovens, packaging lines)
- Annual production / batch volume
- Lead times (sample / production)
- MOQs (minimum order quantities)
- Sample policy
- NDA / IP protection process
- Onboarding / new-customer process
- Industry compliance (DFARS, ITAR, ISO)
- D-U-N-S / CAGE / NAICS / SAM.gov status
- Insurance / bonding
- Quality assurance / QC process
- Shipping carriers / international shipping
- Hours of operation
- Email address
- Privacy Policy / Terms / Cookie Policy
- FAQ
- Datasheets / SDS (publicly accessible)
- Case studies
- Testimonials
- Press / awards

---

## 24. Legal and Compliance Review

| Item | Found? | URL / Location | Notes | Recommendation |
|---|---|---|---|---|
| Privacy Policy | **No** | /privacy-policy → 404 | Site captures email via contact form without a posted privacy policy | Publish a real Privacy Policy |
| Terms & Conditions | **No** | /terms → 404 | No site terms or sales terms | Publish |
| Cookie Policy | **No** | None found | Wix sets cookies by default; no banner or policy | Add cookie banner and policy |
| Refund / Return Policy | **N/A on main site** | Sanitizers handled by Ride-Glide Shopify | Verify Ride-Glide has its own | Confirm |
| Shipping Policy | None | — | — | Add if shipping cataloged products |
| Accessibility Statement | None | — | — | Add for ADA / WCAG awareness |
| ITAR / DFARS Statement | None | — | Critical for defense buyers | Add a Compliance page |
| DUNS / CAGE / NAICS / SAM | None | — | Critical for B2G | Disclose if applicable |
| EIN / CT business registration | None | — | Lower priority | Optional |
| GDPR / CCPA notices | None | — | Required if any EU/CA traffic | Add |
| Industry-specific compliance content | None | — | NLGI, STLE, ILMA membership disclosure | Add |

---

## 25. Analytics and Tracking Review

**Tracking Detected:**
- **None.** The Thunderbolt (Wix runtime) config explicitly carries `AnalyticsEnabled=false` and `isWixCodeOnSite=false`.
- No GA4 ID found in the homepage HTML
- No GTM container found
- No Meta Pixel
- No LinkedIn Insight Tag
- No Hotjar / Microsoft Clarity

**Conversion Tracking Evidence:** None
**Cookie Consent:** None observed (Wix default sets functional cookies but no consent UI was visible)
**Schema Markup:**
- WebSite schema (basic — only `name` and `url`)
- ItemList of three video objects (auto-generated by Wix video gallery)
- **No Organization, LocalBusiness, Product, or Service schema**
**Limitations:** Without browser automation we cannot confirm GA loading via Wix's enabled-by-default analytics (which itself is server-side and limited)
**Recommendations:**
- Install GA4 in Wix admin → Marketing → Analytics
- Install GTM via the Wix Marketing Integrations panel
- Add LinkedIn Insight Tag (B2B remarketing)
- Add Microsoft Clarity for free heatmaps and session recordings
- Add a cookie consent banner (Wix Cookie Consent app or third-party)
- Set up GA4 conversion events for: form submit, phone-link click, mailto click, TDS download (if made public)
- Add Organization, LocalBusiness, and Product schema (via Wix SEO Tools)

---

## 26. Accessibility Review

Without browser-based accessibility scanning, preliminary observations:

| Severity | Accessibility Issue | Location | Why It Matters | Recommendation |
|---|---|---|---|---|
| High | Homepage has no H1 | / | Screen readers and SEO | Add an H1 |
| High | Page-title formatting (no spaces) | / | Screen readers verbalize awkwardly | Fix formatting |
| Medium | Image alt text not verified | All pages | Visually impaired users can't interpret images | Audit alt text in Wix Media Manager |
| Medium | Color contrast not verified | Site-wide | Could fail WCAG AA | Run a contrast audit |
| Medium | Form labels not verified | /contact | Screen readers need labeled inputs | Verify in Wix form editor |
| Medium | Heading order on stub pages | /new-products-2, /i-tech-info | "Add Your Title" / "More on I-Tech" used as headings | Rebuild or remove |
| Low | No skip-to-content link confirmed | — | Helps keyboard users | Verify |

**Recommendation:** Run a Lighthouse accessibility audit and address high-impact items.

---

## 27. Performance and Technical Health

**Overall Technical Condition:** Adequate. Wix + global CDN provides a reasonable performance baseline, but the Thunderbolt runtime is heavy and the page weight (~627KB for the rendered HTML alone) is on the heavier side for a marketing site of this scale.

**Performance Concerns:**
- Heavy Thunderbolt JS runtime (Wix's framework)
- Multiple third-party static assets from `static.parastorage.com` and `static.wixstatic.com`
- Three videos auto-loaded on the homepage (lazy-loaded by Wix but adds page weight)
- LCP / INP / CLS not measured directly here

**Mobile Concerns:** Wix is responsive by default but not directly tested

**Security/SSL Notes:**
- HTTPS via Wix edge (Pepyaka)
- HSTS enabled (max-age 31556952 — about 1 year)
- `x-content-type-options: nosniff`
- No CSP, X-Frame-Options, or Permissions-Policy headers visible

**Broken Technical Elements:**
- Stub page (`/new-products-2`)
- Empty Consulting page
- Inactive Wix Velo (`isWixCodeOnSite=false`) — fine but limits future dynamic features
- Wix analytics disabled

**Recommendations:**
- Run PageSpeed Insights against the homepage and top product pages; review LCP/CLS/INP
- Enable Wix Analytics or install GA4
- Trim or modernize the homepage video gallery
- Add CSP / X-Frame-Options / Permissions-Policy via Wix custom code if available

---

## 28. Market and Competitor Context

**Likely direct competitors:**
- Lubrication Engineers (LE)
- Royal Purple Industrial
- Petro-Canada Lubricants (HollyFrontier)
- Castrol Industrial
- Mobil Industrial / ExxonMobil Specialty
- Kluber Lubrication
- Dow Corning / Molykote (silicones)
- Specialty defense suppliers (Crowne Industries, etc.)
- Regional contract blenders (numerous; many privately held; many with weak websites)

**Inferred positioning vs competitors:**
- Strong: family-run boutique with named principals, MIL-SPEC catalog, NSN inventory, real production footage, US-Northeast based
- Weak: smaller scale than national competitors; the website does not communicate the strengths well; no certifications visible; no case studies

**Competitor-style content missing on Artech:**
- Capability brochure PDF
- Quality / certifications page with downloadable certificates
- Product comparison tables
- Application notes and white papers
- Datasheets accessible publicly
- Industry-specific landing pages
- News / blog / resource library

**Positioning opportunity:** "Boutique, family-run US-Northeast contract blender — small batches, MIL-SPEC capable, NSN-cataloged, hands-on engineering, US-made." That positioning is defensible against scale players but needs the website to actually say it.

(Section is **inference only** — competitor research was not performed via direct site visits in this audit.)

---

## 29. Screenshot Evidence

Screenshots were not captured (no browser automation in this audit). All findings are based on HTTP fetches, HTML inspection, sitemap and schema analysis, and the rendered Wix HTML.

**Recommended next step:** Run a Playwright or Puppeteer pass to capture:
- Homepage hero (desktop + mobile)
- Header navigation expanded
- Each product line page
- The placeholder `/new-products-2` content
- The empty `/consulting` page
- The contact form
- The footer
- Any visible Wix branding or template artifacts

---

## 30. Redesign and Rebuild Notes

#### Pages to Keep

- Home (rework hero and add H1)
- About (expand with photos, founding year, certifications)
- I-Tech (deepen specs)
- I-Tech Silicones (strong as defense product page)
- I-Tech Gear Oils (deepen)
- M-Tech (deepen)
- R-Tech (deepen)
- Packaging (rebuild with capabilities matrix)
- Sanitizing Products (decide: keep, integrate, or sunset)
- Data Sheets (rebuild as public TDS PDFs)
- SDS (rebuild as public SDS PDFs)
- Contact

#### Pages to Merge

- `/i-tech-info` → merge into `/i-tech`
- `/data-sheets` + `/sds` → unify under `/resources/datasheets/` with TDS and SDS subsections

#### Pages to Remove

- `/new-products-2` — delete (placeholder)
- `/new-products` — delete or rebuild as a real announcements feed
- `/consulting` — either build out properly or remove from nav

#### Pages to Add

- About → Quality & Compliance (ISO, DFARS, ITAR, DUNS, CAGE, industry memberships)
- About → Facility (photos, sq ft, equipment)
- About → Leadership (full bios, headshots, LinkedIn)
- Industries → Defense / Government Sales (NSN catalog, CAGE/DUNS, procurement guidance)
- Industries → Steel & Heavy Industry
- Industries → Mining
- Industries → Rail
- Industries → Construction
- Industries → Custom Blending (B2B brand customers)
- Resources → Blog / News
- Resources → FAQ
- Resources → Case Studies
- Resources → Application Notes / White Papers
- Legal → Privacy Policy
- Legal → Terms of Use
- Legal → Cookie Policy

#### Suggested Improved Sitemap

- Home
- About
  - Company
  - Leadership
  - Quality & Compliance
  - Facility
- Products
  - I-Tech (Industrial Greases)
  - I-Tech Silicones
  - I-Tech Gear Oils
  - M-Tech (Machinery Lubricants)
  - R-Tech (Rail Grease)
- Services
  - Custom Blending
  - Contract Packaging
  - Package & Label Design
  - Application Engineering / Consulting
- Industries
  - Defense / Government
  - Steel & Heavy Industry
  - Mining
  - Rail
  - Construction
- Resources
  - Technical Data Sheets (public)
  - Safety Data Sheets (public)
  - Blog / News
  - FAQ
  - Case Studies
- Contact
  - Sales Inquiry
  - Custom Blend Quote
  - Sample Request
  - Government Procurement
- Footer
  - Privacy Policy
  - Terms of Use
  - Cookie Policy
  - Accessibility

#### Suggested Homepage Structure

1. Hero — concrete H1 and value prop ("Specialty Industrial Lubricant Blender Based in Bethel, CT — MIL-SPEC, NSN-Cataloged, Made-to-Order"), supporting bullets, primary CTA "Get a Quote" / secondary "Request a Sample"
2. Trust strip — industry logos (Steel, Mining, Rail, Defense, Construction)
3. Stat band — 20+ Years, X NSNs, Y MIL-SPEC Products, Z Industries
4. Product line overview — 5 cards
5. How We Work — Custom Blending Process diagram
6. Quality & Compliance — certifications row
7. Featured case study (or testimonial carousel)
8. Resources teaser (latest TDS / blog)
9. Contact / Get a Quote
10. Footer with NAP, legal, social, hours

#### Suggested Design Direction

- Replace the templated Wix look with a cleaner industrial layout
- Commission custom photography of the Bethel facility and equipment
- Consider migrating off Wix to Webflow or WordPress for more flexibility and better SEO controls (acknowledging migration cost)
- Use type and color to emphasize the family-craftsmanship narrative — not corporate-anonymous

#### Suggested CTA Strategy

- Primary: "Get a Quote" (segmented per product line)
- Secondary: "Request a Sample"
- Tertiary: "Download TDS" / "Download SDS" (ungated)
- Industry-specific: "Government Procurement" → /industries/defense
- Always present: phone in header, mailto link in footer

---

## 31. Recommendations

Specific, page-tied recommendations are integrated throughout sections 5-30. The single most important moves, in priority order:

1. **Delete `/new-products-2`** — it serves Wix template placeholder text publicly
2. **Either rebuild or remove `/consulting`** — empty page mismatched with its title
3. **Fix the meta-description typo** ("botique" → "boutique") and the title-tag formatting
4. **Add an H1 to the homepage**
5. **Publish TDS and SDS as public PDFs** — remove the Wix member-login gate
6. **Install GA4 + GTM** — currently no analytics is running
7. **Publish Privacy Policy, Terms, Cookie Policy** — Wix supports a cookie banner natively
8. **Build a Quality & Compliance page** with ISO / DFARS / ITAR / DUNS / CAGE
9. **Build a Government / Defense Sales landing page** linked to the NSN catalog
10. **Rebuild the SDS page** to be a clean, public, browseable PDF list
11. **Merge `/i-tech-info` into `/i-tech`** and delete the stub
12. **Decide on the sanitizer line** — integrate into Artech commerce or sunset
13. **Add Organization, LocalBusiness, and Product schema** via Wix SEO Tools
14. **Add 5-10 case studies organized by industry**
15. **Publish a sales email** (sales@artechlubricants.com or info@)
16. **Refresh or replace the 2019 production videos**
17. **Restructure the navigation** — remove the "More" overflow; add Industries; expose Resources

---

## 32. Priority Action Plan

#### Immediate Fixes (this week)

- Delete `/new-products-2`
- Either rebuild or remove `/consulting` from navigation
- Delete or merge `/i-tech-info` into `/i-tech`
- Fix the meta-description typo
- Fix the title-tag formatting (add spaces)
- Add an H1 to the homepage
- Install GA4 and GTM via Wix Marketing
- Publish a sales / info email address on the Contact page
- Add a copyright-year footer block (dynamic year)

#### Short-Term Improvements (this month)

- Publish Privacy Policy, Terms of Use, Cookie Policy; add cookie banner
- Publish all TDS as ungated PDFs; rebuild `/data-sheets` and `/sds` as public document libraries
- Build a Quality & Compliance page (ISO / DFARS / ITAR / DUNS / CAGE / industry memberships)
- Build a Government Sales / NSN Catalog page
- Rewrite the homepage hero with a clear value prop
- Rebuild the Packaging page with capability matrix (sizes, MOQs, lead times, equipment)
- Add Organization + LocalBusiness + Product schema (Wix SEO Tools)
- Refresh the homepage video gallery
- Add a logo / industry trust strip
- Sunset or integrate the sanitizer line; explain the Ride-Glide partnership if kept

#### Strategic Improvements (this quarter and next)

- Commission new facility, equipment, and team photography
- Build 5 industry pages: Defense, Steel & Heavy Industry, Mining, Rail, Construction
- Build a Custom Blending Process page
- Build a Resources section with FAQ, Case Studies, and a quarterly blog cadence
- Add 5-10 case studies (anonymized or named)
- Add 3-5 testimonials with named contacts (with permission)
- Consider migrating off Wix to Webflow / WordPress / Astro for better SEO control and richer schema
- Add LinkedIn Insight Tag and a real LinkedIn company posting cadence
- Build a small ecommerce layer for cataloged SKUs (or a "Buy from our Catalog" Shopify integration if Wix Stores is too constrained)
- Set up call tracking (CallRail) for the (845) and (203) numbers
- Pursue ISO 9001 (if not already) and disclose it; publish certificates as PDFs

---

## 33. Crawl Log

**Total Internal Pages Discovered:** 16 URLs in `pages-sitemap.xml`
**Total Pages Reviewed:** 14 pages (Home, About, Contact, Packaging, I-Tech, I-Tech Info, I-Tech Silicones, I-Tech Gear Oils, M-Tech, R-Tech, Sanitizing Products, Data Sheets, SDS, Consulting, New Products, New Products 2)
**Pages Skipped:** None within the sitemap
**Broken URLs Found:**
- /privacy-policy → 404
- /terms → 404
- /blog → 404
- (/new-products-2 — technically returns 200 but is a placeholder)
**External Links Checked:**
- Ride-Glide Shopify store (sanitizer purchase flow) — not deeply audited
- LinkedIn / Facebook social profiles — not audited
- Wix `static.wixstatic.com` and `static.parastorage.com` CDNs — system-level, not audited
**Sitemap Status:** Auto-generated by Wix; reachable at /sitemap.xml and /pages-sitemap.xml; all URLs lastmod 2021-12-03
**Robots.txt Status:** Auto-generated by Wix; allows all except `?lightbox=` query strings; sets crawl delays for Ahrefs/Dotbot; blocks PetalBot
**Crawl Limitations:**
- No browser automation used (no JavaScript rendering, no screenshots, no mobile simulation)
- Wix lazy-loads content client-side; some form fields and video player details were inferred rather than verified pixel-by-pixel
- Did not run Lighthouse / Core Web Vitals / axe accessibility scans
- Did not test the contact form by submitting
- Did not capture image alt-text comprehensively
- Did not crawl the Ride-Glide Shopify store
- Did not enumerate documents in the gated /tds-sds member portal
**Screenshots Captured:** None
**Notes:** All findings are based on HTTP fetches, HTML inspection, sitemap analysis, and schema review. Wix Thunderbolt config was extracted from the rendered homepage HTML.

---

## 34. Final Business Understanding

This website represents a small, family-run, boutique contract lubricant blender and packager based in Bethel, Connecticut, with a 20+ year operating history (under the predecessor R&R Packaging name and current ARtech Lubricants ownership since 2012). The business serves industrial and defense buyers across steel mills, mining, rail, construction, gear/MRO, and other industrial OEM segments through five product lines (I-Tech industrial greases, I-Tech Silicones with MIL-SPEC compliance, I-Tech Gear Oils in AGMA grades, M-Tech machinery lubricants, R-Tech rail grease) plus contract packaging, custom package and label design, and a pandemic-era hand sanitizer line (Vira-Gel) sold through a partner Shopify store (Ride-Glide). The business operates primarily as a B2B and B2G contract manufacturer with strong undercurrents of US-Defense supply chain participation (NSN catalog, MIL-SPEC, MIL-PRF, MIL-DTL, NATO, SAE-AMS standards visible across product pages). Its main value proposition is small-batch, exacting-standards, US-made specialty lubricant blending and packaging, with named principals (Dan Arkins, President; Steve Renwick, GM) bringing combined ~50+ years of relevant experience.

The website currently communicates **the existence of the company** at a basic level, with named leadership, an address, a phone number, a product catalog organized by line, and three production-floor videos. However, the website materially under-communicates the depth of the business: it has been frozen since 2021-12-03 (per its sitemap), has no homepage H1, has no analytics, has no legal pages, has placeholder Wix template text on a public URL, has an empty "Consulting" page, gates technical data sheets behind a member login, has no certifications page despite a defense-grade product catalog, has no case studies, no client logos, no testimonials, no email address, and uses a single generic contact form for radically different buyer intents. The combination of strong product credibility (NSN, MIL-SPEC, NATO) and a weak digital presence is the core gap.

To improve business clarity, SEO, and conversions, the website should focus on three blocks of work in order: (1) **cleanup and credibility** — delete the placeholder page, fix the typos and missing H1, install analytics, publish legal pages, publish TDS/SDS publicly, build a Quality & Compliance page, build a Government Sales page; (2) **content depth** — build out Industries pages (Defense, Steel, Mining, Rail, Construction), publish 5-10 case studies, refresh photography and videos, add a Resources / FAQ / Blog section; (3) **conversion** — segment CTAs by buyer intent, publish a sales email, add sample-request and quote-request forms, add a small ecommerce layer for cataloged SKUs, and reduce friction at every step of the inquiry journey. Done well, ARtech can credibly position as the boutique US-Northeast specialty lubricant partner — but the current website does not surface that story.
