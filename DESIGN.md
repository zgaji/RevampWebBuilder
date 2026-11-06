---
name: Marci Metzger Homes
description: Ranch Gate & Brand. A Pahrump ranch gate in weathered corten steel, sky through the cut lettering, one lit amber signal.
colors:
  amber: "#f2a43a"
  amber-hi: "#ffbb57"
  steel: "#5a2a17"
  steel-deep: "#3a1d10"
  rust: "#8a4422"
  rust-hi: "#b0603a"
  iron: "#1c1612"
  iron-2: "#261b15"
  bone: "#ecdfc6"
  bone-lit: "#fff3dc"
  bone-ink: "#e9dcc4"
  bone-dim: "#cdb999"
  sage: "#aab595"
  ink: "#1c1612"
  ink-soft: "#4a3a2e"
  error-rust: "#9a3b12"
  sky: "#1d6fd6"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 11.2vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 4rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 112"
  numeral:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 125"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 750
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 125"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 125"
rounded:
  hairline: "2px"
spacing:
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
components:
  button-call:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-call-hover:
    backgroundColor: "{colors.amber-hi}"
  button-bone:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-bone-hover:
    backgroundColor: "{colors.bone-lit}"
  button-iron:
    backgroundColor: "{colors.iron}"
    textColor: "{colors.bone}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 1.5rem"
    height: "3rem"
  button-iron-hover:
    backgroundColor: "{colors.steel-deep}"
  plate-bone:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    padding: "2rem 2rem 1.5rem"
  plate-steel:
    backgroundColor: "{colors.steel-deep}"
    textColor: "{colors.bone}"
    padding: "clamp(1.5rem, 3vw, 2.5rem)"
  field-instrument:
    backgroundColor: "{colors.iron}"
    textColor: "{colors.bone}"
    padding: "0.75rem 1rem"
  field-message:
    backgroundColor: "{colors.bone-lit}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.7rem 0.8rem"
  nav-link:
    textColor: "{colors.bone-dim}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.bone}"
  tile-tag:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.35rem 0.7rem 0.35rem 0.75rem"
---

# Design System: Marci Metzger Homes

## Overview

**Creative North Star: "Ranch Gate & Brand"**

The page is the entrance gate a Pahrump ranch gives its land. The ground is one material, oxidized corten steel, and everything else is defined by what is cut out of it or bolted onto it: the name is cut through the beam so the Spring Mountains show through the letters, the arch below opens onto the same view, and reading surfaces are plates riveted at four corners or hung from two chains. Sections are sheets of the same steel joined at seams. Quieter reading sections use the same sheet heat-darkened to blackened steel.

Density is calm and plate-by-plate: generous section padding, a single centered column (78rem max), and asymmetric two-column grids with a sticky lead column on desktop. Type is one family, Archivo, used wide (125% width) and heavy for everything cut or stamped, and at normal width for reading text. Color is earth and metal throughout, with exactly one lit signal: desert-sun amber on the call action.

The world rejects the realtor default the build was written against: a house photo hero, a white serif name, and a floating search bar.

**Key Characteristics:**
- One material (corten) in three tempers: lit steel, blackened iron, and the deep plate.
- The name is cut through steel, showing the photograph, never painted on top of it.
- Bone plates with rivet corners carry anything that must be read closely.
- One amber signal, reserved for calling.
- Square edges (2px at most); depth comes from bevels, seams, and cast shadows, not from rounding.
- Motion is physical and plays once: sun sweeps through the cut letters, the sign settles on its chains.

## Colors

A rust-and-iron ground with bone reading surfaces, sage for secondary labels, and a single desert-sun amber.

### Primary
- **Desert-Sun Amber** (amber): the call action. Fills every call button (rail, hanging sign, services, composed message), colors the tel links in the portrait caption and the large contact phone number. It also marks keyboard focus (2px outline, 3px offset), text selection, caret, form accent, and the focused instrument field's underline. Those are interaction states, not decoration.
- **Lit Amber** (amber-hi): hover state of the call fill and the contact phone.

### Secondary
- **Corten Steel** (steel): base of the lit sheets (the gate beam, "Get it sold", services, footer), always under the corten photo texture with a translucent brown wash.
- **Deep Plate Rust** (steel-deep): base of dark riveted plates (portrait, gauges, search panel), the gallery tile ground, and the iron button's hover.
- **Rust** (rust): structural lines: footer top edge (3px), mobile nav bottom edge, scrollbar thumb.
- **Lit Rust** (rust-hi): the accent line: gauge top rule (3px), active nav underline, the "sold" underline, link underlines in contact facts, rail bottom hairline (at 35%).

### Tertiary
- **Sage** (sage): secondary labels only: field labels, the panel title, contact fact terms, gauge notes, the "open now" state. Measured about 6.8:1 on steel.

### Neutral
- **Blackened Iron** (iron): page ground, rail (at 92% with blur), lightbox image ground, iron button.
- **Iron Sheet** (iron-2): base of the blackened-steel sections under a dense dark wash.
- **Bone** (bone): headings on steel and iron, bone plates, bone button, tile tags, lightbox controls.
- **Lit Bone** (bone-lit): hover of bone controls; the message inputs sit on it at 70%.
- **Bone Ink** (bone-ink): default body text color on dark ground.
- **Dim Bone** (bone-dim): supporting paragraphs, captions, inactive nav, panel notes, footer text.
- **Ink** (ink): text on bone and amber.
- **Soft Ink** (ink-soft): secondary text on bone (tenure line, message labels and notes).
- **Error Rust** (error-rust): the required marker and the invalid field border on the bone message plate.
- **Sky** (sky): fallback fill for the cut name only, visible if `background-clip: text` fails.

### Named Rules
**The One Lit Signal Rule.** Amber fills only call actions (tel links and call buttons) and the interaction states focus, selection, and caret. Search submits on bone; message send is iron. If something amber can't be pressed to reach Marci by phone, it is wrong.

**The Blackened Steel Rule.** Blackened steel is not a second material. It is the same corten sheet and the same texture under a heavier dark wash (86% versus 42%), used for the quieter reading sections (search, gallery, contact). Alternate lit steel and blackened steel down the page; don't introduce a flat dark panel.

## Typography

**Display Font:** Archivo variable, self-hosted (weights 100–900, width 62–125%), with system-ui fallback
**Body Font:** Archivo at normal width

**Character:** One grotesk in two tempers. Wide and heavy for stamped and cut things (the name, section heads, buttons, labels, numerals), and normal width for reading text, so the cut letters and the plain-spoken copy come from the same steel.

### Hierarchy
- **Display** (900, 125% width, clamp(3rem, 11.2vw, 11rem); 12.8vw under 600px, line-height 0.86, uppercase): the cut name in the gate beam only.
- **Headline** (850, 125% width, clamp(2.1rem, 5vw, 4rem), 1.05, uppercase): section heads in bone. The lead section ("Get it sold") runs larger, at clamp(3rem, 9vw, 6rem) with line-height 0.9.
- **Title** (800, 112% width, clamp(1.4rem, 2.6vw, 2rem)): ledger entries and record heads. Smaller h3s run at 1.3rem, weight 780. The sign's firm line is 800, 112% width, 1.4rem, uppercase.
- **Numeral** (850, 125% width, clamp(2rem, 3.6vw, 3rem), tabular): gauge values, with units set at 0.5em in dim bone. Phone numbers are always tabular.
- **Lede** (500, clamp(1.2rem, 1.8vw, 1.45rem), 1.4): the one sentence that states the record.
- **Body** (400, 1.0625rem, 1rem under 600px, 1.6): reading text, held to 52–62ch.
- **Button** (750, 125% width, 0.9rem, 0.06em, uppercase).
- **Label** (700, 125% width, 0.72–0.82rem, 0.1–0.16em, uppercase): field labels, fact terms, panel titles, tags, nav (650 weight, 0.8rem).

### Named Rules
**The Cut Name Exception.** The cut name is the only type allowed past the 6rem display cap: it runs at about 11.2vw on desktop (to 11rem) and 12.8vw on phones, because the gate exists to carry a large cut name. Every other heading stays at or under 6rem.

**The Wide-For-Stamped Rule.** 125% width belongs to things stamped or cut: display, headlines, buttons, labels, numerals. Running text never goes wide.

## Layout

A single centered column, `min(100% - 2 × clamp(1.25rem, 4vw, 3.5rem), 78rem)`, holds every section. Sections pad clamp(4rem, 9vw, 7.5rem) top and bottom. Inside them, content sits in asymmetric two-column grids (5/7, 4/8, 6/5) whose lead column (heading, intro, portrait) is sticky below the rail on desktop. The spacing scale is 0.5 / 0.75 / 1 / 1.5 / 2 / 3rem, with clamp()ed gaps for column gutters.

The first viewport is a gate: two corten posts at the edges, a beam carrying the cut name, an arch opening onto the photograph, and a bone sign hung on two chains, centered and overlapping the arch. The next section's heading starts just below the fold.

Breakpoints: at 1080px the search, services, and contact grids stack and sticky columns release. At 860px the nav collapses behind a menu button into a dropdown sheet, the rail shrinks to 3.75rem, and the gallery goes to two columns. At 600px gauges and pitches stack, the rail call shows its icon only, and the gallery becomes one column.

**The One View Rule.** The cut letters and the arch opening show one photograph in shared coordinates. The script sizes and positions the photograph so the Spring Mountains ridge (43% down the photo) runs through the name's lower line, and recalculates on resize and font load. Never give the letters and the arch separate images or independent crops.

## Elevation & Depth

Depth is physical. Sheets join at seams, plates sit proud of the sheet with a soft cast shadow and a bevel, cut edges have a dark lip above and a lit lip below, and the gate posts throw shadow inward. There is no generic card shadow.

### Shadow Vocabulary
- **Seam** (`box-shadow: inset 0 3px 0 rgba(12,5,2,.7), inset 0 4px 0 rgba(255,190,140,.12)`): the top edge of every steel and blackened-steel section.
- **Plate** (`box-shadow: 0 14px 30px -14px rgba(0,0,0,.75), inset 0 1px 0 rgba(255,220,190,.12), inset 0 -1px 0 rgba(0,0,0,.4)`): every riveted plate.
- **Cut Edge** (`filter: drop-shadow(0 -2px 0 rgba(10,4,1,.75)) drop-shadow(0 2px 0 rgba(255,196,150,.3))`): the cut name's thickness.
- **Call Button** (`box-shadow: 0 8px 18px -8px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.45), inset 0 -2px 0 rgba(120,60,0,.3)`): the lit amber plate.
- **Tile** (`box-shadow: 0 12px 26px -14px rgba(0,0,0,.8)`): gallery photographs.
- **Post** (`box-shadow: ±10px 0 18px -8px rgba(0,0,0,.55)`): gate posts, cast inward.

### Named Rules
**The Seam Rule.** Sections never meet at a flat color change. Each sheet opens with a seam: a 3px dark inset line with a 1px lit lip beneath it.

## Shapes

Square sheet metal. The only radius is 2px (buttons, inputs, the menu button, lightbox controls); plates, tiles, and sections are sharp. Recurring forms: rivets (radial-gradient heads at all four plate corners, darker on bone), the elliptical arch mask, two chain links of ellipse rings, and the MM brand, drawn as square-capped mitered strokes.

**The Brand Rule.** The MM branding-iron mark appears at most once per section, beside or above the section heading, as a burned mark: a blurred scorch stroke under a dark core, darker than the steel around it. It is never a bullet, list marker, divider, or icon, and it is never lit.

## Components

### Buttons
Stamped plates: square, heavy, wide uppercase.
- **Shape:** near-square (2px), minimum 3rem tall (2.5rem small), with an icon at 1.1em where present.
- **Call:** amber fill, ink text, Call Button shadow. On hover it lights to amber-hi. On press it moves down 1px. The sign variant spans the plate, with the label left and the tabular number right.
- **Bone:** bone fill with an inset bottom edge, for non-call submits (search). On hover it turns lit bone.
- **Iron:** iron fill, bone text, for actions on bone plates (send, copy). On hover it turns deep plate rust.
- **Focus:** the global amber outline (2px, 3px offset).

### Plates (signature)
- **Steel plate:** deep plate rust over corten at 600px with a 160° wash, Plate shadow, and four rivets. Used for the portrait, gauges, and search panel.
- **Bone plate:** bone with a faint light-to-warm gradient, ink text, and dark rivets. Used for the hanging sign, badges strip, and message form. No noise or texture.
- **Gauges:** three identical steel plates side by side, each with a 3px lit-rust top rule, a numeral, a label, and a sage note. They stack as rows under 600px.

**The Clean Bone Rule.** Bone reading plates carry no grain, noise, or corten texture. Texture belongs to the steel; the bone plate is where the eye rests.

### Inputs / Fields
- **Instrument fields (search):** a tight 3-column grid with 1px dark gutters, with no field borders and no radius. Each cell is iron at 72% with a sage label over a bone value. On focus the cell darkens to 95% and an inset amber underline (2px) appears. Selects use a sage chevron.
- **Message fields (on bone):** 1px ink border at 35%, 2px radius, lit bone at 70%. On focus the border turns ink with a 3px amber halo. When invalid, the border is error rust with an 18% error halo, and the error text appears below.

### Navigation
The sticky rail is 4.25rem tall (3.75rem at 860px and below), iron at 92% with a 10px backdrop blur and a lit-rust hairline below. The logo is inverted to bone. Nav links use wide uppercase label type in dim bone. On hover and for the current page, the link turns bone with a 2px lit-rust underline. The rail ends with a small call button. On mobile, a bordered menu button opens an iron sheet that unrolls with a clip-path wipe (0.35s) and has a rust bottom edge.

### Gallery Tiles and Lightbox
Tiles are a 4-column photo grid (2 at 860px, 1 at 600px) with one 2×2 feature tile. Photos are slightly desaturated at rest and scale to 1.04 on hover or focus. A bone tag sits flush left near the bottom. The lightbox is a native dialog over 90% iron with blur, with square bone controls (3rem).

### Ledger
Services are a numbered list without visible markers, with bone hairline rules (22%) between entries, wide titles, and dim body text.

## Do's and Don'ts

### Do:
- **Do** build every new section on lit steel or blackened steel, alternating, and open it with the Seam.
- **Do** put close reading (forms, signs, badges) on clean bone plates with four rivets.
- **Do** use amber for call actions only, plus focus, selection, and caret.
- **Do** keep the cut name and the arch on the one shared photograph, aligned so the ridge runs through the name.
- **Do** set phone numbers and figures in tabular numerals.
- **Do** keep corners at 2px or square.
- **Do** honor reduced motion: the sun sweep and the sign swing resolve to their end states and stay static.

### Don't:
- **Don't** use amber for navigation states, headings, borders, or decoration.
- **Don't** add grain, noise, or corten texture to bone plates.
- **Don't** use the MM brand as a bullet, icon, or repeated ornament, or more than once in a section.
- **Don't** set any type other than the cut name above 6rem.
- **Don't** paint the name over the photograph or give it a solid fill; it is cut through the steel.
- **Don't** introduce a second typeface or a serif display name.
- **Don't** use rounded cards or a generic floating card shadow; depth comes from plates, seams, and bevels.
