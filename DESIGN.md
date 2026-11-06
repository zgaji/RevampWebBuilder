---
name: Marci Metzger Homes
description: An editorial property magazine in The Ridge Realty Group's navy and gold, set in a Didone with a sparing italic, on white and warm stone.
colors:
  ridge-navy: "#0f2a44"
  navy-deep: "#0a1e31"
  ridge-gold: "#b08d3c"
  gold-soft: "#d6bb7a"
  gold-ink: "#85661f"
  white: "#ffffff"
  stone: "#f5f3ef"
  line: "#e4e0d8"
  field-stroke: "#858b95"
  ink: "#14202e"
  slate: "#5a6472"
  on-navy: "#f4f1ea"
  on-navy-soft: "rgba(244, 241, 234, .78)"
  navy-line: "rgba(244, 241, 234, .18)"
  error: "#a3341b"
typography:
  display-xl:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3.5rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  pull-quote:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.25rem, 5.6vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.6vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.4rem, 2vw, 1.65rem)"
    fontWeight: 400
    lineHeight: 1.15
  subtitle:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.14em"
  label-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.16em"
rounded:
  none: "0"
spacing:
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4.5rem"
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  measure: "76rem"
  section: "clamp(4.5rem, 10vw, 8.5rem)"
components:
  button-navy:
    backgroundColor: "{colors.ridge-navy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.6rem"
    height: "3.25rem"
  button-navy-hover:
    backgroundColor: "{colors.navy-deep}"
  button-white:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ridge-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.6rem"
    height: "3.25rem"
  button-white-hover:
    backgroundColor: "{colors.stone}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ridge-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.6rem"
    height: "3.25rem"
  button-outline-hover:
    backgroundColor: "{colors.ridge-navy}"
    textColor: "{colors.white}"
  button-sm:
    typography: "{typography.label-sm}"
    padding: "0.55rem 1.1rem"
    height: "2.6rem"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0"
    height: "2.75rem"
  input-serif:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.subtitle}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0"
    height: "3.25rem"
  nav-link:
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    padding: "0.5rem 0"
  nav-link-active:
    textColor: "{colors.ridge-navy}"
  message-panel:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.none}"
    padding: "clamp(1.75rem, 4vw, 2.75rem)"
---

# Design System: Marci Metzger Homes

## Overview

**Creative North Star: "The Brokerage Edition"**

The homepage reads like an issue of a property magazine published under The Ridge Realty Group's masthead. It opens on a split cover: Marci's name stacked large in navy on white, with the valley photograph bleeding off the right edge. After that it runs as a sequence of spreads: an oversized headline over a hairline, a portrait on an offset plate beside a large serif lede, a staggered photo spread with captions, a centered pull quote, ruled service rows on navy, and a giant serif phone number to close. The grounds stay white and warm stone, the brand stays navy and gold, and the polish stays at luxury-brokerage level.

The editorial voice comes from type and composition, not ornament. Bodoni Moda carries every name, heading, lede and caption at weight 400. Its italic is held back for the words that carry meaning, and section headings stay upright. Square corners, 1px hairlines, underline fields, drop-cap prose and asymmetric 12-column placement replace cards, boxes and badges. Gold stays a hairline on light grounds. A deeper gold ink exists only for large italic display words.

The user picked this direction on 2026-11-06 over the earlier category-standard brokerage page, which felt "a bit more common and simple". The standing preference still applies: clean and elegant, no themed or costume worlds, no heavy dark page grounds.

**Key Characteristics:**
- A split cover: a stacked serif name on white (6fr) beside a photograph that bleeds to the right edge (7fr), with an italic caption underneath.
- Spreads on a 12-column grid, with offset placement, staggered photos and generous white space.
- Bodoni Moda at 400 for display, ledes, captions and the phone number, with italic as an accent. Archivo at normal width for text and labels.
- Section headings upright. Italic marks the emphasized word, the serif sub-line and the caption.
- Gold as 1px rules and underlines. Gold Ink for large italic display words on white. Soft Gold for italic accents on navy.
- Square corners, no cards, no eyebrows, no section numbers.
- One authored entrance: the cover photo unveils, the gold rule draws in, and the text rises.

## Colors

A light, two-brand-color palette: the brokerage's navy and gold on white and warm stone, with a deep gold ink for display emphasis.

### Primary
- **Ridge Navy** (ridge-navy): the brand color from The Ridge logo. Used for the cover name, display headings, the lede, the pull quote, the giant phone number and the drop cap. It also fills primary buttons, the services band, the finder's top rule, the skip link and text selection, and it is the focus ring on light grounds.
- **Night Navy** (navy-deep): the navy-button hover and the footer ground.

### Secondary
- **Ridge Gold** (ridge-gold): the logo's gold, used for hairlines and small marks only. That covers the cover's tenure rule, the pitch top rules, the pull-quote rule, nav underlines, link underlines and the cover's separator dot.
- **Gold Ink** (gold-ink): a darker gold (about 5:1 on white) for large italic display words on white grounds: "sold." in the headline, "28.5 million" in the lede and "community." in the pull quote.
- **Soft Gold** (gold-soft): gold for navy grounds. It sets the italic second line of each service title, and it is the focus ring on navy.

### Neutral
- **White** (white): the page ground, the cover's text column, and the header at 97% opacity.
- **Warm Stone** (stone): the search section tint, the message panel, the portrait's offset plate, image placeholders and the white-button hover.
- **Hairline Sand** (line): 1px dividers. Used for the header rule, the "Get it sold." head rule, the badges rule, the pull-quote top rule, the contact head rule and mobile nav rows.
- **Field Stroke** (field-stroke): the rest underline of form fields and the composed-message textarea border, chosen to hold 3:1 on white and stone. It is a literal in the stylesheet, not a custom property.
- **Navy Ink** (ink): body text and the italic tenure line.
- **Slate** (slate): secondary text, the cover firm line, nav links at rest, field labels, italic captions and sub-lines, and pitch copy.
- **Linen on Navy** (on-navy) and **Soft Linen** (on-navy-soft): text and secondary text on navy.
- **Navy Hairline** (navy-line): the rules between service rows.
- **Brick** (error): validation messages, the required marker and the invalid-field underline.

### Named Rules
**The Hairline Gold Rule.** Ridge Gold is for 1px rules, underlines and small marks only. It is never set as text on white and never used as a fill. When gold has to be read as letters on a light ground, use Gold Ink, and only at display size in italic.

**The Logo Palette Rule.** The brand hues are the navy and gold from The Ridge Realty Group's logo. Do not add a third brand hue. The only extra color is the small functional green chip for the "open now" office status.

**The Light Ground Rule.** The page is white and stone. Navy fills bounded bands (services, footer) and buttons. It is never the overall page ground.

## Typography

**Display Font:** Bodoni Moda (with Didot, Georgia, serif), self-hosted variable woff2 in roman (400–900) and italic (400–700).
**Body Font:** Archivo (with system-ui, sans-serif), self-hosted variable woff2, used at normal width.

**Character:** a high-contrast Didone that echoes the lettering of Marci's logo, with an italic that reads like a magazine's emphasis, paired with a plain, sturdy grotesque for everything practical.

### Hierarchy
- **Display XL** (400, clamp(3.5rem, 10vw, 6rem), 0.92, -0.03em): the "Get it sold." headline. The cover name is a close sibling (clamp(3.5rem, 7vw, 6rem), 0.9, -0.035em), stacked on two lines with the italic surname indented 0.55em. The contact phone number uses the same scale (clamp(2.6rem, 8.4vw, 6rem), 1, -0.03em, lining figures).
- **Display** (400, clamp(2.5rem, 5.4vw, 4.5rem), 1, -0.02em): section headings, upright, navy on light grounds and white on navy.
- **Pull Quote** (400, clamp(2.25rem, 5.6vw, 4.75rem), 1.04, -0.025em, max 17ch): the centered community quote.
- **Lede** (400, clamp(1.9rem, 3.6vw, 3.1rem), 1.1, -0.02em): the proof sentence beside the portrait, with its figure in Gold Ink italic.
- **Title** (400, clamp(1.9rem, 3.4vw, 2.75rem), 1.02, -0.02em): service row titles, with the second line in Soft Gold italic. The message panel heading uses a fixed 2rem, upright.
- **Title Small** (400 italic, clamp(1.4rem, 2vw, 1.65rem), 1.15): pitch titles under their gold rules.
- **Subtitle** (400 italic, clamp(1.15rem, 1.8vw, 1.4rem), 1.25): the serif secondary voice. Used for the "Top Residential Sales" sub-head, the cover tenure line (clamp(1.2rem, 1.7vw, 1.45rem)), the portrait name (1.25rem), gallery descriptions (1rem) and the cover photo caption (0.9rem).
- **Body** (Archivo 400, 1.0625rem, 1.65; 1rem under 600px): running text, 36–58ch. The team paragraph opens with a 4.1em navy serif drop cap spanning about three lines.
- **Label** (Archivo 600, 0.8rem, 0.14em, uppercase): buttons, nav links (at 500) and social links. The cover firm line is a variant at 500, 0.75rem, 0.2em.
- **Label Small** (Archivo 600, 0.72rem, 0.16em, uppercase): field labels, fact terms, small buttons, and gallery place names (0.7rem, navy).

Phone numbers use tabular figures in the header and portrait caption, and lining figures in the giant contact number.

### Named Rules
**The Meaningful Italic Rule.** Italic marks meaning, never decoration on every heading. It sets the emphasized word in a display line ("Metzger", "sold.", "28.5 million", "community."), the second line of a service title, and the serif secondary voice (sub-heads, tenure, captions, pitch titles). Routine section headings (Find Your Dream Home, Photo Gallery, Our Services, Call or Visit, Send Message) stay upright. One italic accent per display line at most.

**The Didone Voice Rule.** Bodoni Moda sets names, headings, ledes, quotes, captions, the location field and the giant phone number, always at weight 400. It never sets labels or buttons. Archivo stays at normal width; do not use its width axis.

**The No Kicker Rule.** No eyebrow, kicker label or section number sits above a heading. Spaced capitals belong to buttons, nav, form labels, fact terms, the cover firm line (below the name) and gallery place names (below the photo).

## Layout

The content container is min(100% minus clamp(1.25rem, 5vw, 4rem) per side, 76rem), centered, and the header row shares it. Sections are padded clamp(4.5rem, 10vw, 8.5rem) top and bottom, and the pull quote clamp(4rem, 9vw, 7.5rem), on a 4px-based scale (s1–s8, 0.25rem to 4.5rem).

The page is built from spreads:
- **Cover:** a 6fr:7fr split filling calc(100svh minus header), capped at 64rem. The text column's left edge aligns with the container and its content is vertically centered. The photo runs to the viewport's right edge, with an italic caption right-aligned beneath it at the container edge.
- **"Get it sold.":** the oversized headline and the italic sub-head sit on one line above a sand hairline. Below is a 12-column spread with the portrait in columns 1–5, on a stone plate offset down and to the right, and the lede, drop-cap paragraph and two gold-ruled pitches in columns 7–12.
- **Search:** a 5:7 two-column spread. The heading and note on the left are sticky below the header. On the right, the underline form under a navy top rule has a full-width serif location field and a two-column field grid.
- **Gallery:** a 12-column staggered spread of seven photos at varied spans (7, 4, 4, 6, 6, 5, 8 columns), offsets and vertical drops, mixing 3:2, 4:5 and 2:1 crops. Each photo carries a caps place name and an italic description.
- **Pull quote:** centered, under a 4rem gold rule.
- **Services:** on navy, the heading and a white button above ruled rows, each with the title on the left and copy on the right at 5:7.
- **Contact:** the heading, the giant phone number and the firm line above a sand hairline, then facts and social links beside the message panel at 6:5.

Responsive steps:
- **1100px** hides the header phone text.
- **960px** stacks the cover photo first (16:9) above the text, and stacks search and contact to one column; the search heading stops being sticky.
- **860px** switches to the menu button and a 4rem header. The sold spread tightens to 5:7 columns, pitches and service rows go to one column, and the gallery becomes two columns with the feature tiles (first, fourth and last) full width at 3:2.
- **600px** sets body to 1rem and the cover photo to 4:3. The hero buttons go full width and the firm line breaks instead of using its dot. The sold spread becomes one column with a portrait of at most 20rem. The finder and facts become one column, gallery captions stack, and the header Call becomes an icon button.

### Named Rules
**The Asymmetric Spread Rule.** Compose on the 12-column grid with offsets and unequal spans, not centered stacks or equal card grids. Symmetry is kept for the pull quote alone.

**The One Bleed Rule.** The cover photograph is the only image that bleeds to the viewport edge. Gallery sources are only 1024px wide, so every other image stays inside the container and is never shown above about 1024px.

**The No Metric Row Rule.** Proof is stated in sentences (the lede), never as a row of stats or metric tiles.

## Elevation & Depth

The system is flat. Depth comes from ground changes (white, stone, navy), 1px hairlines and one layout device: the portrait set on an offset stone plate behind it. There is one shadow, under the mobile nav panel, which floats over content.

### Shadow Vocabulary
- **Panel drop** (`box-shadow: 0 20px 30px -20px rgba(15, 42, 68, .3)`): the mobile nav panel below the header.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. A shadow appears only beneath a surface that floats over other content, and it is always soft and navy-tinted. No hard or offset shadows. The offset plate is a flat tint, not a shadow.

## Shapes

Square corners throughout (0 radius): buttons, inputs, the message panel, the menu button, lightbox controls and photos. Lines are 1px: sand hairlines between parts of a spread, gold rules above pitches and the pull quote, a navy rule above the search form, and navy hairlines between service rows. Photos are plain rectangles with no frames, cropped by aspect ratio (3:2, 4:5, 2:1, 16:9 or 4:3 on small screens). Icons are 24px-grid line SVGs with a 1.8 stroke and round caps.

### Named Rules
**The Square Corner Rule.** Nothing is rounded. Form comes from 1px lines and white space.

**The No Card Rule.** Content groups are separated by rules and space, never boxed. The message panel's stone fill is the only container.

## Components

### Buttons
Quiet and assured: uppercase spaced Archivo in square blocks.
- **Shape:** square (0), 3.25rem minimum height, 0.8rem × 1.6rem padding. The small size is 2.6rem with 0.72rem type. An optional 1.05rem line icon sits 0.65rem from the label, and a trailing arrow nudges 3px right on hover.
- **Navy (primary):** navy fill and white label; hover goes to Night Navy.
- **White:** white fill and navy label, used on the navy band; hover goes to stone.
- **Outline:** a 1px navy border and navy label, used as the cover's second action and in the composed message; hover fills navy with a white label.
- **Transitions:** background, color and border over 0.25s on the shared ease.

### Pitch and Service Rows
- **Pitch:** no box. A 1px gold top rule, 1.5rem of space, an italic serif title in navy, then slate copy with its lead phrase in 600 ink.
- **Service row:** a navy hairline above each row. The white serif title sits on the left, with its second line breaking to Soft Gold italic, and soft linen copy (max 56ch) sits on the right.

### Inputs / Fields
- **Style:** underline only. No box, a transparent fill, square corners, a 1px Field Stroke bottom line, 2.75rem minimum height, and ink text at 1rem. Labels sit above in Label Small, slate. Selects use a slate line chevron.
- **Serif field:** the full-width location field sets its value in Bodoni Moda at clamp(1.25rem, 2vw, 1.6rem), 3.25rem tall.
- **Focus:** the underline turns navy and doubles to 2px with a 1px navy under-shadow, with no outline ring.
- **Error:** the underline turns Brick and doubles, with a 0.85rem Brick message below. The required marker is a Brick asterisk.
- **Composed-message textarea:** the only boxed field, with a 1px Field Stroke border on white.

### Navigation
- **Desktop:** a sticky white header at 97% opacity with a 1px sand bottom rule and a 5rem row. It holds the logo, Label-style links in slate, the phone number in navy (tabular) and a small navy Call button. Hover and current links turn navy, and a 1px gold underline scales in from the left over 0.35s.
- **Mobile (860px and below):** a 4rem header with a 2.75rem square menu button (1px sand border). The panel drops from the header by clip-path, with full-width rows divided by sand hairlines and the current link in navy at 600. Escape and outside clicks close it.

### Focus
**The Focus Ground Rule.** The focus ring is a 2px solid navy outline at 3px offset on light grounds, and soft gold on navy bands.

### Cover (signature)
The name is stacked in navy on white. "Marci" sits upright and "Metzger" is italic, indented 0.55em. Below it, a 3.25rem gold rule leads into the italic tenure line, then the slate firm line in spaced caps with a gold dot, both indented 4.5rem to hang from the rule. Then come a navy Call button and an outline Search button. The photograph (saturate 0.82, contrast 0.98) fills the right column to the viewport edge, with its italic caption beneath.

### Photo Spread and Lightbox
Gallery tiles are buttons on a stone placeholder with a zoom-in cursor. On hover or focus the photo scales to 1.04 over 1s. Beneath each sits a caption line: the place name in navy Label Small caps, then an italic serif description in slate. The lightbox is a native dialog on a 92% navy-black backdrop, with square white 3rem prev, next and close controls.

### Drop Cap and Pull Quote
The first paragraph after the lede opens with a floated navy Bodoni drop cap (4.1em, line-height 0.78). The pull quote is centered navy display type under a 4rem gold rule, with one Gold Ink italic word.

### Motion
**The Single Entrance Rule.** There is one authored motion, on the cover. The photo unveils with a clip-path wipe from the right edge (1.5s). The gold tenure rule draws in from the left (scaleX, 1.1s after a 0.5s delay). The name, tenure, firm line and actions rise 14px and fade in, staggered 0, 0.12, 0.2 and 0.3s over 1s. Everything else is state feedback: hovers, the nav underline, the arrow nudge, the tile zoom, the menu panel and the lightbox fade. All motion uses cubic-bezier(.16, 1, .3, 1). Under prefers-reduced-motion, all animation and transitions are removed and scrolling is instant.

## Do's and Don'ts

### Do:
- **Do** keep grounds white and warm stone, with navy only on bounded bands and buttons.
- **Do** use Ridge Gold only as 1px rules, underlines and small marks, Gold Ink only for large italic display words on white, and Soft Gold for accents on navy.
- **Do** keep section headings upright and spend italic on the one word or line that carries meaning, plus the serif sub-lines and captions.
- **Do** compose spreads on the 12-column grid with offsets, unequal spans and hairlines between parts.
- **Do** set names, headings, ledes and captions in Bodoni Moda at 400, and everything else in Archivo at normal width.
- **Do** keep every corner square and every line 1px.
- **Do** use underline-only fields with labels above, turning navy on focus and Brick on error, with the rest-state underline at 3:1 or better against its ground.
- **Do** use a navy focus ring on light grounds and soft gold on navy.
- **Do** state proof in sentences, using the reference figures as given.

### Don't:
- **Don't** set Ridge Gold text on white, set Gold Ink below display size, or use gold as a fill.
- **Don't** italicize every heading, or put more than one italic accent in a display line.
- **Don't** put eyebrow labels, kickers or section numbers above headings.
- **Don't** box content into cards, or build stats or metric rows.
- **Don't** bleed any photo to the viewport edge except the cover, and don't show gallery sources above about 1024px.
- **Don't** add rounded corners, boxed form fields (except the composed-message textarea), hard or offset shadows, or framed photos.
- **Don't** add a second authored animation or scroll-triggered reveals, and don't leave anything moving under reduced motion.
- **Don't** reintroduce themed or costume materials or dark full-page grounds.
