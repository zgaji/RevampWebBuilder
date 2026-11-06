---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Home (index.html)

**Scope:** single-page revamp of marcimetzger.com's Home page. **Mode:** Persuade.

**Audience and action:** home sellers in Pahrump and Nye County come first, then buyers and investors. The primary action is a phone call to (206) 919-6886. The secondary actions are the listing search, which opens marcimetzger.com/listings with the chosen filters, and the message form. The form sends an SMS on phones; on desktop it composes the message with copy and call buttons. A mailto switch is ready once the client supplies an email address.

**Proof:** nearly 3 decades as a Realtor, nearly 90 clients and $28.5M closed in 2021, four affiliation badges, and seven real listing photos. Nothing invented.

**Constraints:** all reference copy is used (see docs/reference-content.md). Images are the site's own; gallery images display at 1024px or less. Responsive at 390, 768, and 1440.

**Memorable moment:** her name cut out of a steel gate arch, with the Spring Mountains showing through the letters.

## Direction contract

THESIS: Marci's homepage as the entrance gate a Pahrump ranch gives its land: her name cut through weathered steel against the mountain sky. It refuses the realtor default of a house photo, a white serif name, and a floating search bar.

OWN-WORLD: The ground is oxidized corten steel, deep rust-brown (#3a1d10 to #8a4422), with brushed sheet texture built from layered CSS gradients and grain. Sky and bone (#e9dcc4) show through the cut-outs and serve as the reading panels. Sage (#6f7a5b) handles secondary labels. One lit signal, a desert-sun amber (#f2a43a), is reserved for the call action. Type is a wide, flat-cut grotesk for the cut lettering and a precise workhorse sans for text. Component language: bolted plates with rivet corners, square edges, hanging signs on two chain links, branding-iron monograms (MM) as section marks. Stats are identical gauge plates side by side. The search is a tight, tabular instrument plate.

STORY: Visitors see a serious local who has sold this valley for three decades. They believe the numbers ($28.5M, ~90 clients), so sellers call and buyers search or browse the properties.

FIRST VIEWPORT: Slim top rail with the logo plate, nav, and a small amber CALL NOW. Below it, a full-width steel arch band about 55vh tall, with MARCI METZGER cut out at about 14vw across it. The mtn-falls-pond photo is visible only through the letters and the arch's sky opening. Hanging from the arch on two chains is a bone plate reading "REALTOR FOR NEARLY 3 DECADES · THE RIDGE REALTY GROUP · PAHRUMP", with the amber call plate showing 206-919-6886. The start of "GET IT SOLD" shows below the fold line.

FORM: Ranch gate and brand, #5 of 7 on my ordered list. seed:939d28c60fe99e01. Signature interaction: on load, the cut letters "light" as if the sun moves behind the gate (a background-position drift through the cut-outs). Then the hanging sign settles with a short pendulum swing. Under reduced motion, everything is static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- No public email address for the client exists, so the form uses an SMS or compose fallback. The EMAIL constant in main.js turns on mailto.
