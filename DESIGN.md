---
name: Marci Metzger Homes
description: Clean, light, photo-led brokerage polish in The Ridge Realty Group's navy and gold, with a Didone nameplate.
colors:
  ridge-navy: "#0f2a44"
  navy-deep: "#0a1e31"
  ridge-gold: "#b08d3c"
  gold-soft: "#d6bb7a"
  white: "#ffffff"
  stone: "#f5f3ef"
  line: "#e4e0d8"
  ink: "#14202e"
  slate: "#5a6472"
  on-navy: "#f4f1ea"
  on-navy-soft: "rgba(244, 241, 234, .76)"
  navy-line: "rgba(255, 255, 255, .16)"
  error: "#a3341b"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.45rem, 2.4vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.3
  title:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)"
    fontWeight: 400
    lineHeight: 1.15
  subtitle:
    fontFamily: "Bodoni Moda, Didot, Georgia, serif"
    fontSize: "1.15rem"
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
  section: "clamp(4.5rem, 10vw, 8rem)"
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
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.6rem"
    height: "3.25rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ridge-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1.1rem"
    height: "2.6rem"
  button-outline-hover:
    backgroundColor: "{colors.ridge-navy}"
    textColor: "{colors.white}"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0"
    height: "2.75rem"
  nav-link:
    textColor: "{colors.slate}"
    typography: "{typography.label}"
    padding: "0.5rem 0"
  nav-link-active:
    textColor: "{colors.ridge-navy}"
  finder-card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "clamp(1.75rem, 4vw, 3rem)"
  message-panel:
    backgroundColor: "{colors.stone}"
    rounded: "{rounded.none}"
    padding: "clamp(1.75rem, 4vw, 2.75rem)"
---

# Design System: Marci Metzger Homes

## Overview

**Creative North Star: "The Brokerage Nameplate"**

The category standard played straight, at luxury-brokerage craft. The page is light and calm: a white ground, a warm stone tint for working sections, and the Pahrump Valley's own photography carrying the mood. The brand is The Ridge Realty Group's navy and gold, taken from the brokerage logo, and Marci's name is set in a Didone the way a brokerage sets a nameplate.

Restraint does the work. Square corners, 1px hairlines, underline-style form fields and generous section spacing replace ornament. Gold appears only as thin rules and small marks, never as a fill or as text on white. Navy is used for brand bands (services, footer) and primary buttons, so the page stays light overall. Motion is limited to one entrance on load.

The user rejected themed or costume worlds and heavy dark grounds as not elegant. This system is the replacement: clean, elegant and photo-led.

**Key Characteristics:**
- White and warm-stone grounds; navy reserved for brand bands and primary actions.
- Gold as hairline only: rules, link underlines, the hero rule, nav underlines.
- Bodoni Moda at weight 400 for every display and heading role; Archivo at normal width for all text and labels.
- Square corners everywhere; 1px hairlines; underline-only form fields.
- One full-bleed photograph (the hero); every other image sits inside the container.
- One authored motion: the gold rule draws in and the hero text rises once.

## Colors

A light, two-brand-color palette: the brokerage's navy and gold on white and warm stone, with near-black navy ink.

### Primary
- **Ridge Navy** (ridge-navy): the brand color from The Ridge logo. Fills primary buttons, the services band, the skip link and text selection, and sets display headings on light grounds. It is also the focus ring color on light grounds.
- **Night Navy** (navy-deep): the hover state of navy buttons, and the footer ground.

### Secondary
- **Ridge Gold** (ridge-gold): the logo's gold. Used for 1px rules (pitch tops), the nav hover and active underline, social link underlines, and the link underline color in facts. Never used as text on white, because it reaches only about 3:1 there.
- **Soft Gold** (gold-soft): gold for navy and photographic grounds. Used for the hero rule, the service-card top rules on navy, the hero separator dot, and the focus ring on navy and on the hero.

### Neutral
- **White** (white): the page ground, the search card, and the header (at 96% opacity).
- **Warm Stone** (stone): the section tint (search), the message panel, image placeholders, and the white button's hover.
- **Hairline Sand** (line): 1px dividers such as the header border, lede underline, badge rule, facts rule and mobile nav rows.
- **Navy Ink** (ink): body text and the lede.
- **Slate** (slate): secondary text, nav links at rest, field labels, captions and notes.
- **Linen on Navy** (on-navy) and **Soft Linen** (on-navy-soft): body text and secondary text on navy bands.
- **Navy Hairline** (navy-line): dividers on navy.
- **Brick** (error): validation messages, the required-field marker, and the invalid-field underline.

### Named Rules
**The Hairline Gold Rule.** Gold is for hairlines, rules and small marks only. Never set text in gold on white, and never use gold as a fill.

**The Logo Palette Rule.** The brand hues are the navy and gold from The Ridge Realty Group's logo. Do not add a third brand hue. The only extra color is a small functional green chip for the "open now" office status.

**The Light Ground Rule.** The page is white and stone. Navy fills bounded brand bands (services, footer) and buttons. It is never the overall page ground.

## Typography

**Display Font:** Bodoni Moda (with Didot, Georgia, serif), self-hosted variable woff2.
**Body Font:** Archivo (with system-ui, sans-serif), self-hosted variable woff2, used at normal width.

**Character:** a high-contrast Didone that echoes the Didone lettering of Marci's logo, paired with a plain, sturdy grotesque. The serif carries names and headings at weight 400; the sans does all the work.

### Hierarchy
- **Display** (400, clamp(3rem, 8vw, 6rem), 0.98, -0.015em): Marci's name in the hero only, white on the photo.
- **Headline** (400, clamp(2.25rem, 4.6vw, 3.75rem), 1.05, -0.01em): section headings, navy on light and white on navy.
- **Lede** (400, clamp(1.45rem, 2.4vw, 1.9rem), 1.3, max 30ch): the proof sentence, with its figure in weight 600 navy.
- **Title** (400, clamp(1.5rem, 2.2vw, 1.85rem), 1.15): card headings in pitches, services and the message panel (fixed at 1.5–1.75rem in light sections).
- **Subtitle** (400, 1.15rem, 1.25): serif sub-lines such as the sales subtitle, the portrait name and the hero tenure line (scaled to clamp(1.15rem, 1.8vw, 1.45rem) there).
- **Body** (Archivo 400, 1.0625rem, 1.65; 1rem under 600px): running text, kept to 42–62ch.
- **Label** (Archivo 600, 0.8rem, 0.14em, uppercase): buttons, nav links (at weight 500), social links, and the hero firm line (500, 0.22em).
- **Label Small** (Archivo 600, 0.72rem, 0.16em, uppercase): field labels, fact terms and gallery captions (at weight 500).

Phone numbers use tabular figures in the header and portrait, and lining figures in the large serif contact number.

### Named Rules
**The Didone Voice Rule.** Bodoni Moda is for names, headings, the lede and serif sub-lines, always at weight 400. It never sets labels, buttons or small text. Archivo stays at normal width; do not use its width axis.

**The No Kicker Rule.** No eyebrow or kicker label sits above a heading. Spaced capitals belong to buttons, nav, form labels, captions and the hero firm line, which sits below the name.

## Layout

The content container is min(100% minus clamp(1.25rem, 5vw, 4rem) per side, 76rem), centered. The header row is wider (90rem) with tighter side margins. Sections are padded clamp(4.5rem, 10vw, 8rem) top and bottom on a 4px-based scale (s1–s8, 0.25rem to 4.5rem).

Compositions are asymmetric two-column splits: portrait and story at 5:7 (the portrait sticky beside the copy), contact info and the message form at 6:5, and section heads with the heading left and a short note right-aligned at the bottom. Cards use three-column grids (services, the search finder) and two-column grids (pitches, facts). The gallery is a four-column tile grid with one 2×2 feature tile and two wide tiles.

The hero fills calc(92svh − header), or 86svh on phones, with content anchored bottom-left over a scrim weighted to that corner.

Responsive steps: 1100px hides the header phone text; 960px stacks contact and services (services become a 2:3 heading/text row); 860px switches to the menu button with a clip-path drop panel, a 4rem header, and two-column finder and gallery; 600px goes single-column, stacks the hero buttons full width, and hides the header Call label to leave an icon button.

### Named Rules
**The One Full-Bleed Rule.** The hero is the only full-bleed photograph. Gallery sources are only 1024px wide, so every other image stays inside the container at 1024px or smaller.

**The No Metric Row Rule.** Proof is stated in sentences (the lede), never as a row of stats or metric tiles.

## Elevation & Depth

The system is flat. Depth comes from ground changes (white, stone, navy) and 1px hairlines. Two soft, navy-tinted, negative-spread shadows exist, both under surfaces that float over other content.

### Shadow Vocabulary
- **Finder lift** (`box-shadow: 0 24px 48px -32px rgba(15, 42, 68, .35)`): the white search card on the stone section.
- **Panel drop** (`box-shadow: 0 20px 30px -20px rgba(15, 42, 68, .3)`): the mobile nav panel below the header.

The hero uses a photographic scrim (bottom and left navy-black gradients), not a shadow, to hold white text.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. A shadow appears only beneath a surface that floats over other content, and it is always soft and navy-tinted. No hard or offset shadows.

## Shapes

Square corners throughout (0 radius): buttons, cards, inputs, the menu button, lightbox controls and photos. Lines are 1px: header and divider hairlines in sand, card-top rules in gold, button outlines in navy or translucent white. Photos are plain rectangles with no frames, cropped by aspect ratio (3:2 tiles, 4:5 portrait). Icons are 24px-grid line SVGs with a 1.8 stroke and round caps.

### Named Rules
**The Square Corner Rule.** Nothing is rounded. Form comes from 1px lines and white space.

## Components

### Buttons
Quiet and assured: uppercase spaced Archivo in square blocks.
- **Shape:** square (0), 3.25rem minimum height, 0.8rem × 1.6rem padding; the small size is 2.6rem with 0.72rem type. An optional 1.05rem leading line icon sits 0.6rem from the label.
- **Navy (primary):** navy fill, white label; hover goes to Night Navy.
- **White:** white fill, navy label, used on the hero and navy bands; hover goes to stone.
- **Ghost:** transparent with a 1px white border at 75%, used on the hero; hover adds a 12% white fill and a solid white border.
- **Outline:** 1px navy border and navy label; hover fills navy with a white label.
- **Transitions:** background, color and border over 0.25s on the shared ease.

### Cards / Containers
- **Corner Style:** square (0).
- **Pitch and service cards:** no fill or border box, only a 1px top rule (gold on white, soft gold on navy) with 1.5rem above the serif title.
- **Search finder:** white card, finder lift shadow, clamp(1.75rem, 4vw, 3rem) padding, three-column field grid.
- **Message panel:** stone fill, no border or shadow, clamp(1.75rem, 4vw, 2.75rem) padding.

### Inputs / Fields
- **Style:** underline only: no box, transparent fill, square, a 1px bottom stroke, 2.75rem minimum height, text in ink at 1rem. Labels sit above in Label Small, slate. Selects use a slate chevron drawn as a line SVG.
- **Focus:** the underline turns navy and doubles to 2px with a 1px navy under-shadow. There is no outline ring on fields.
- **Error:** the underline and its double turn Brick, with a 0.85rem Brick message below. The required marker is a Brick asterisk.
- **Composed-message textarea:** the only boxed field, with a 1px border on white.

### Navigation
- **Desktop:** a sticky white header (96% opacity) with a 1px sand bottom rule and a 5rem row: the logo left, then Label-style links in slate, the phone number as navy text, and a small navy Call button. Hover and current links turn navy, and a 1px gold underline scales in from the left over 0.35s.
- **Mobile (≤860px):** a 4rem header with a 2.75rem square menu button (1px sand border). The panel drops by clip-path from the header, with full-width rows divided by sand hairlines and the current link in navy at 600. Escape and outside clicks close it.

### Focus
**The Focus Ground Rule.** The focus ring is a 2px solid navy outline at 3px offset on light grounds, and soft gold on navy bands and on the hero.

### Hero Nameplate (signature)
A full-bleed valley photograph with a bottom-left scrim. Marci's name is set in Display, white. A 5.5rem, 1px soft-gold rule sits above it. Below come the serif tenure line, then the firm line in spaced capitals with a soft-gold separator dot, then a white button and a ghost button.

### Gallery Tile and Lightbox
Tiles are buttons on a stone placeholder with a zoom-in cursor. On hover or focus the photo scales to 1.035 over 0.9s, and an uppercase slate caption sits below. The lightbox is a native dialog on a 92% navy-black backdrop, with square white 3rem prev, next and close controls.

### Motion
**The Single Entrance Rule.** There is one authored motion. On load, the hero gold rule draws in from the left (scaleX, 1.2s after a 0.2s delay), and the name, tenure, firm line and actions rise 12px and fade in, staggered 0, 0.1, 0.18 and 0.28s over 1s. Everything else is state feedback: hovers, the nav underline, the tile zoom, the menu panel and the lightbox fade. All motion uses cubic-bezier(.16, 1, .3, 1). Under prefers-reduced-motion, all animation and transitions are removed and scrolling is instant.

## Do's and Don'ts

### Do:
- **Do** keep grounds white and warm stone, with navy only on bounded brand bands and buttons.
- **Do** use gold only as 1px rules, underlines and small marks: Ridge Gold on light grounds, Soft Gold on navy and on photos.
- **Do** set names and headings in Bodoni Moda at 400, and everything else in Archivo at normal width.
- **Do** keep every corner square and every line 1px.
- **Do** use underline-only fields with labels above, turning navy on focus and Brick on error.
- **Do** use a navy focus ring on light grounds and soft gold on navy and on the hero.
- **Do** state proof in sentences, using the reference figures as given.
- **Do** keep a field's rest-state underline at 3:1 or better against its ground.

### Don't:
- **Don't** set gold text on white, or use gold as a fill.
- **Don't** put eyebrow or kicker labels above headings.
- **Don't** build stats or metric rows.
- **Don't** run any photo full-bleed except the hero, and don't upscale gallery sources past 1024px.
- **Don't** add rounded corners, boxed form fields (except the composed-message textarea), hard or offset shadows, or framed photos.
- **Don't** add a second authored animation or scroll-triggered reveals, and don't leave anything moving under reduced motion.
- **Don't** reintroduce themed or costume materials or dark full-page grounds.
