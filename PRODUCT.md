# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: plain static HTML, CSS, and vanilla JS, with no framework or build step. The brief asks for "basic CSS, HTML and JS". Plain files keep every line easy to explain in a follow-up interview and deploy as-is to a free static host (Netlify, Vercel, or GitHub Pages).

## Users

Two audiences:

- **Assessors (primary for this deliverable):** the hiring team for a Junior Website Builder role. They judge comprehension, resourcefulness, creativity, and design judgment. Their standard is "simple yet elegant", built to a client's vision.
- **The client's site visitors (the surface's real audience):** people buying, selling, or investing in property in Pahrump, Nevada, and the surrounding Nye County area. They include home sellers who want top dollar, buyers who want a local guide, and investors. Many arrive ready to call. The page's main action is a phone call to (206) 919-6886.

## Product Purpose

A single-page revamp of the Home page of https://marcimetzger.com (only the Home page, not the whole site). The client is **Marci Metzger, a Realtor with The Ridge Realty Group** in Pahrump, Nevada. She has been a Realtor for nearly three decades and handles residential and commercial sales. Success means:

- clearly better design than the reference, not a copy-paste
- all of the original content and images kept
- fully responsive and verified on mobile, tablet, and desktop
- hosted at a public URL the assessors can open

## Positioning

For the client: a hyper-local, long-tenured agent ("We live, work, and play in this community") with a concrete track record. In 2021 she helped nearly 90 clients and closed $28.5 million in sales. Her offer covers both sides: sellers ("Don't just list it… Get it SOLD!") and buyers (market analysis, upgrade lists, contractors on speed dial, and lender referrals).

For the assignment: the revamp has to show the candidate's own design judgment. Changing only colors, fonts, or names fails the brief, and so does submitting AI output as-is. Layout and content must be adapted to the brief, and every decision must be explainable.

## Operating Context

- Job-application assignment. Possible follow-up interview where the candidate explains decisions and makes live changes to the code.
- Submission is by email, with:
  - the live website URL (no GitHub links)
  - an updated resume with an active mobile number
  - implementation notes in the email body covering tools/frameworks used, one specific design decision and how it improved the reference homepage, and AI usage
- Hosting: a free web host with a live link.

## Capabilities and Constraints

- Single page only.
- Use **all** content from the reference Home page, including its images. Images must be downloaded directly from the live site; no hi-res originals will be supplied.
- Additional researched content is allowed.
- Responsive across mobile, tablet, and desktop, each tested for:
  - readable text
  - correctly scaled images
  - usable navigation and buttons
  - no overlapping content
  - no unintended horizontal scroll
- Image quality is capped at whatever resolution the source site serves. Future work must design around low-res assets rather than upscale them past legibility.
- The original Listings search widget (Location, Type, Sort By, Bedrooms, Baths, Min/Max Price, Search Now) is backed by GoDaddy's IDX service, which a static site can't call. The revamp keeps every field. *Open: whether Search Now links out to the client's Listings page or stays a non-submitting demo. It must not fake results either way.*
- The contact form on the original uses GoDaddy's backend and reCAPTCHA. A static rebuild needs a free form endpoint, or a mailto/tel fallback. *Open.*
- Nav items Listings, Let's Move, and About Us are other pages and out of scope. They can link to the live site's pages or to sections on this page.
- Gallery photos are 1024px wide at most, and Marci's portrait is 1632×2449. Don't display gallery images larger than about 1024px.

## Brand Commitments

- Names: "Marci Metzger" and "The Ridge Realty Group". Descriptor: "Pahrump Realtor".
- Logo: `assets/img/logo.png`, 2560×798 PNG.
- Phone (206) 919-6886. It is the primary call to action.
- Address: 3190 HW-160, Suite F, Pahrump, NV 89048. Open daily 8am–7pm, with appointments outside those hours on request.
- Voice: warm, plain-spoken, confident, and local, with exclamation points and "we/our team". Keep the client's copy intact. Fix only clear typos ("put you hard-earned" → "your"; "get at the price" stays unless confirmed).
- Social links: Facebook, Instagram, LinkedIn, and Yelp (URLs in `docs/reference-content.md`).
- Equal Housing Opportunity mark: a real-estate compliance mark. Keep it visible.
- **Standing visual preference (user, 2026-11-06):** clean and elegant, light and airy, at the polish level of luxury brokerages (Sotheby's International Realty, Compass, The Agency). The user rejected a themed direction (corten "ranch gate") as costume-y, too dark and heavy, and not elegant. Avoid themed or costume worlds and heavy dark grounds. The Ridge Realty Group's own navy and gold (from its logo) are the brand colors to draw from. **Follow-up (user, 2026-11-06):** the category-standard version read as "a bit more common and simple"; the user chose an **editorial magazine** direction (oversized Bodoni with purposeful italics, asymmetric photo spreads, a pull quote, large typographic moments) while keeping the clean, light navy-and-gold world.

## Evidence on Hand

- **All reference text, verbatim:** `docs/reference-content.md`.
- **Images,** downloaded from the live site to `assets/img/`:
  - Marci's portrait: `marci.jpg`
  - logo: `logo.png`
  - landscape background: `mtn-falls-pond.jpg`, 2560×1700
  - 7 listing gallery photos from 4460 Roseworthy, 4787 E Beacon Ridge, and 5570 Ailanto: `gallery-*.jpg`, 1024px
  - 4 affiliation badges (big circle, Chamber of Commerce, Realtor pin, Equal Housing): `badge-*`
- **Real stats:** nearly 90 clients in 2021, $28.5M closed in 2021, and nearly 3 decades as a Realtor.
- **Absent:** testimonials, reviews, license number, current listings data, and sold prices. Do not invent any of them. Researched additions (for example, facts about Pahrump) must be real and sourced.

## Product Principles

1. **Content fidelity, design freedom.** Keep everything the client says, and change how it is presented.
2. **Simple yet elegant.** Restraint and precision over spectacle. The job title sets the bar.
3. **Explainable choices.** Every layout and styling decision should be one the candidate can defend and change live.
4. **Works everywhere it is viewed.** Responsiveness on all three breakpoints is a hard requirement, not polish.

## Accessibility & Inclusion

Not stated in the brief. Treat readable text, usable tap targets, and no horizontal scroll at every breakpoint as the minimum.
