---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Home (index.html)

**Scope:** single-page revamp of marcimetzger.com's Home page. **Mode:** Persuade.

**Audience and action:** home sellers in Pahrump and Nye County come first, then buyers and investors. The primary action is a phone call to (206) 919-6886. The secondary actions are the listing search, which opens marcimetzger.com/listings in a new tab, and the message form. The form sends an SMS on phones; on desktop it composes the message with copy and call buttons. Setting the EMAIL constant turns on mailto.

**Proof:** nearly 3 decades as a Realtor, nearly 90 clients and $28.5M closed in 2021, four affiliation badges, and seven real listing photos. Nothing invented.

**Constraints:** all reference copy is used (see docs/reference-content.md). Images are the site's own; gallery images display at 1024px or less. Responsive at 390, 768, and 1440. The user rejected the earlier themed ranch-gate world. The standing preference, recorded in PRODUCT.md, is clean and elegant at luxury-brokerage polish.

**Memorable moment:** the valley at full bleed with her name set like a brokerage nameplate, and a quiet gold rule that draws in once.

## Direction contract

REVISION (2026-11-06): the user found the canon build "a bit more common and simple" and chose an editorial-magazine treatment of the same world: split cover (stacked name, italic Metzger, photo bleeding right with caption), oversized "Get it sold.", portrait on an offset stone plate beside a large serif lede, staggered asymmetric photo spread with italic captions, a centered pull quote, navy services as ruled rows, and a giant serif phone number. Italic marks meaning only (name, sold, 28.5 million, community, service sub-lines). Signature motion: the cover photo unveils with a clip-path wipe while the gold rule draws in.

THESIS: The category standard, played straight at luxury-brokerage craft (benchmarks: Sotheby's International Realty, Compass, The Agency). Light, calm, photo-led, with the brand carried by her brokerage's own navy and gold. It refuses themed or costume materials, heavy dark grounds, and template clutter.

OWN-WORLD: White ground (#ffffff), with a warm stone section tint (#f5f3ef). Ink is near-black navy (#14202e) with muted slate (#5a6472). The Ridge navy (#0f2a44) fills the brand bands and the primary buttons. Ridge gold (#b08d3c) is for hairlines, rules, and small marks only, never for text on white. The display face is Bodoni Moda, a Didone that echoes her logo, with a light hand and generous tracking on small caps. Text is set in Archivo at normal width. Components have square corners, 1px hairlines, underline-style form fields, and generous white space. Photos stay rectangular, with no frames.

STORY: Visitors meet the valley and Marci by name. They see a long track record stated plainly ($28.5M and ~90 clients in 2021), so sellers call and buyers search or browse.

FIRST VIEWPORT: White sticky header with the logo (original black), nav, the phone number as text, and a navy Call button. Below it, a full-bleed mtn-falls-pond photo about 86vh tall, with a soft bottom-left scrim. Bottom-left on the photo, in white: "Pahrump Realtor · The Ridge Realty Group" in small spaced caps, MARCI METZGER large in Bodoni (about 5.5rem), "Realtor for nearly 3 decades", then two actions: a solid white "Call 206-919-6886" and an outline "Search listings". A thin gold rule sits above the name.

FORM: Canon (the category standard), chosen by the user over the rolled direction. seed:939d28c60fe99e01. Signature interaction: on load, the gold rule draws in from the left and the hero text rises 12px into place. Under reduced motion, everything is static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
