---
name: Keen Victor — The Research Desk
description: An independent developer and finance tooling portfolio set as an institutional equity research note — masthead, coverage table, fine print.
colors:
  paper: "#f6f4ec"
  paper-2: "#efece2"
  card: "#efede3"
  ink: "#1c1a16"
  ink-2: "#3c3a34"
  ink-3: "#5c594f"
  house-red: "#a33327"
  house-red-deep: "#832a1f"
  red-wash: "#efe0d7"
  deep-green: "#214d3c"
  line: "rgba(28,26,22,.3)"
  line-soft: "rgba(28,26,22,.14)"
typography:
  display:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "clamp(56px, 10.2vw, 132px)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "clamp(26px, 3.4vw, 44px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "clamp(18px, 2vw, 25px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Spectral, Georgia, Times New Roman, serif"
    fontSize: "clamp(16px, 1.05vw, 18px)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.16em"
  data:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  section: "clamp(44px, 6vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.house-red}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
  nav-item-active:
    backgroundColor: "transparent"
    textColor: "{colors.house-red}"
  coverage-tag-live:
    backgroundColor: "{colors.house-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "3px 9px"
---

# Design System: Keen Victor — The Research Desk

## Overview

**Creative North Star: "The Research Desk"**

Keen Victor's portfolio is set as an institutional equity research note: a nameplate masthead, a house call, a coverage table of deployed work, an analyst profile, and fine print at the foot. It exists so a client or hiring manager with ninety seconds can make a hire decision on live, clickable evidence instead of adjectives.

The world is paper, ink, and one restrained signal: Research Paper ground, near-black Ink text, and House Red reserved for verdicts, tags, and rulings. Typography is a serif/grotesque pairing: Spectral carries display and prose (it reads like set type, not like a default web font), Archivo carries the apparatus — masthead plates, folio labels, buttons, table headers — in letterspaced small caps, and IBM Plex Mono is limited to tabular data and file names. Density is high but disciplined: hairline rules, double borders at section heads, no cards-within-cards, no ornament.

Rejected directions, confirmed by the user: playful collage, paper-press whimsy (the previous identity), gradient-heavy SaaS dark mode, and neon-terminal theatrics. Energy is allowed inside the note — the monumental nameplate, the BUILD verdict — but every device earns its place through the research metaphor, never beside it.

**Key Characteristics:**
- Every section is a page of the note: plate rule, section head with folio label, content, rule.
- Proof is hyperlinked: every coverage row opens the live artifact or a labeled file.
- One accent. House Red never decorates; it rules, tags, and verdicts.
- Flat at rest; shadows only under raised sheets (modal), never on the page surface.
- Type pairs Spectral (serif) with Archivo (grotesque) for apparatus.

## Colors

The palette is a printed document, not a UI theme: warm paper, black ink, one red.

### Primary
- **Research Paper** (#f6f4ec): The page ground everywhere, including cards and the modal body. Slightly warm, slightly desaturated; the one "designed" tone in the neutral set.
- **House Red** (#a33327): The only accent. Live tags, the BUILD verdict, rulings, focus outlines, the selection color, active filter chips. Never used for body text except the red rubricated labels.
- **House Red Deep** (#832a1f): The pressed/hover red for links and CTA hover states.

### Secondary
- **Red Wash** (#efe0d7): The only tinted surface — full-bleed hover wash on sector rows and pale callout backgrounds. Use is deliberate and rare.

### Tertiary
- **Deep Green** (#214d3c): Legacy role kept only inside excel.html's workbook controls (scenario switch, editing-mode state, save hint). Not used on index.html.

### Neutral
- **Ink** (#1c1a16): Body text, the inverted endnote section ground, primary button fill.
- **Ink 2** (#3c3a34): Secondary prose on paper (lede paragraphs, row theses).
- **Ink 3** (#5c594f): Tertiary text on paper — folios, captions, no less than 11px.
- **Paper 2 / Card** (#efece2 / #efede3): Sunken panels inside the masthead zone (model cards, image plates) — a tonal step down from Paper, not a color.
- **Line** (rgba(28,26,22,.3)) / **Line Soft** (rgba(28,26,22,.14)): Hairlines for section heads and row rules; double (3px) rules carry section tops.

### Named Rules
**The One Voice Rule.** House Red appears on ≤10% of any viewport. Its rarity is the signal; a screen that reaches for it to decorate has lost the note.
**The Paper Rule.** Surfaces never go whiter than Paper 2. The system has no pure-white anywhere except inside the Excel grid, where cells are white because workbooks are.

## Typography

**Display Font:** Spectral (with Georgia, Times New Roman)
**Body Font:** Spectral (with Georgia, Times New Roman)
**Label/Data Fonts:** Archivo (apparatus), IBM Plex Mono (tabular data)

**Character:** Spectral gives the note set-type gravity with low contrast strokes; Archivo supplies the hard grotesque letterforms for plate text, so the pair reads "research house", not "magazine".

### Hierarchy
- **Display** (Spectral 600, clamp(56px, 10.2vw, 132px), line-height 0.92, tracking -0.04em): The nameplate "Keen Victor." Only.
- **Headline** (Spectral 600, clamp(26px, 3.4vw, 44px), line-height 1.05, tracking -0.02em): Section heads ("Selected coverage", "The analyst", endnote headline up to clamp(38px, 7vw, 96px)).
- **Title** (Spectral 600, clamp(18px, 2vw, 25px)): Coverage row names, service names.
- **Body** (Spectral 400, clamp(16px, 1.05vw, 18px), line-height 1.65): Prose. Max line length ≈ 60–75ch; lede paragraphs cap at 58–62ch.
- **Label** (Archivo 600/700, 11–12px, tracking 0.12–0.2em, uppercase): Plate rows, folio labels, table headers, buttons, tags, captions.
- **Data** (IBM Plex Mono 400/500, 11–12px): Model file names, cell references, formula counts, timestamps.

### Named Rules
**The Apparatus Rule.** Anything typeset like print (rules, folios, rubrics, plate rows, colophon) is set in Archivo small caps; anything spoken or argued (lede, bio, descriptions) is set in Spectral; anything measured (files, formulas, cells) is set in Plex Mono. The register never crosses: a Spectral display line never wears caps tracking, and a mono string never carries an argument.

## Layout

Single-column note flow with full-bleed section bands. `--gutter` (clamp(18px, 4vw, 56px)) is the only inline measure; the content column caps at 1240px. Section rhythm: `clamp(44px, 6vw, 88px)` block padding, more space above a section head than below it (16px padding-top on the ruled head vs. 22–38px below before content). Heads sit on a 2px rule with a folio label at the right baseline. The coverage table is a ruled ledger (56px index column, name, thesis, action), not a card grid. Two- and three-column grids appear only inside sections (analyst profile, tools, endnote legs) and collapse at 1000px and 640px. No max-width containers inside containers.

## Elevation & Depth

Flat at rest. Depth is conveyed by double rules (3px), 1px hairlines, tonal steps (Paper → Paper 2 → Card), and Ink inversion (the endnote). The only shadow in the system is `--shadow: 0 14px 34px rgba(28,26,22,.14)` on the raised project-file modal and `--shadow-sm: 0 4px 14px rgba(28,26,22,.10)` on pressed tiles. Never by decoration, never on section bands.

### Shadow Vocabulary
- **raised-sheet** (`0 14px 34px rgba(28,26,22,.14)`): The modal project file and the model card in pressed state.
- **resting-sheet** (`0 4px 14px rgba(28,26,22,.10)`): Selected tiles only.

### Named Rules
**The Flat-Desk Rule.** The page lies flat; paper does not hover. Shadows signal a sheet lifted for focus (the modal), nothing else.

## Shapes

Radius strategy is "ruled, not rounded": 2px (`rounded.sm`) on the rare soft control (status pill, badge containers, mode toggle), 0 (`rounded.none`) everywhere else — buttons, filters, tags, chips, inputs, the modal. Borders are 1px line / 2px ink / 3px double ink. No large radii, no pill-shaped CTAs, no organic/geometric masks, no clip-paths. Recurring silhouette: the ruled ledger row and the double-ruled section head.

## Components

### Buttons
- **Shape:** Square (0 radius), 1px ink border, Archivo 600 12px caps with 0.14em tracking, min-height 48px.
- **Primary:** Ink fill (#1c1a16), Paper text; hover → House Red fill.
- **Ghost:** Transparent fill, Ink border/text; hover → Ink fill, Paper text.
- **Focus:** 2px House Red outline, 3px offset, always visible.
- **Endnote primary:** Paper fill on Ink ground; hover → House Red fill.

### Ledger rows (coverage + capabilities)
- **Shape:** Full-width ruled rows, 1px line-soft separators, no cards. Index numeral in mono, name in Spectral 600, thesis in Spectral at 15px Ink 2, action in Archivo caps with a red LIVE tag or ghost FILE tag.
- **Hover:** Paper 2 wash; action arrow translates 3px; live tags stay red.

### Tags / chips
- **Style:** House Red fill, Paper text, Archivo 700 11px caps (LIVE); ghost variant (transparent, 1px line, Ink 2 text) for FILE/repo entries. Radius 0.

### Containers / plates
- **Model card & project images:** Card (#efede3) or Paper 2 background, 1px ink border, mono caption bar in Ink with red badge; hover lifts with raised-sheet shadow. No nesting of cards.
- **Modal ("Project File"):** Raised sheet: Paper ground, 1px ink border, 3px double rule bar carrying `PROJECT FILE — NO. xx`, Close in the plate. Focus-trapped, Esc closes, backdrop dims without blur.
- **Endnote:** Ink ground; Paper text; legs in a 1px ruled ledger; fine print colophon in mono.

### Navigation
- **Header:** Sticky 3px double-rule masthead plate; wordmark Archivo 700 with red full stop; links Archivo 600 caps with 2px red underline on hover/active; CTA is a boxed ghost button. Mobile: hamburger toggles a stacked paper panel under the bar.

### Inputs
- No freeform inputs on index.html. excel.html keeps the workbook's mono formula bar on Paper 2 with an Ink underline caret; invalid state gets a 2px red bottom rule.

## Do's and Don'ts

### Do:
- **Do** rule sections with a 2px Ink top rule and a right-aligned Archivo folio label; more space above heads than below.
- **Do** hyperlink every claim of work — a coverage row either opens the live artifact, opens `excel.html`, or is explicitly tagged FILE.
- **Do** reserve House Red for rulings, verdicts, LIVE tags, and action states; nothing else.
- **Do** keep prose in Spectral and apparatus in Archivo; data in Plex Mono, always tabular-nums where figures are compared.
- **Do** ship Paper, Ink, and one red; tonal steps Paper → Paper 2 → Card for sunken surfaces.

### Don't:
- **Don't** round corners past 2px, or introduce pill CTAs, icon circles, or avatar bubbles.
- **Don't** add gradients, collage, photo cutouts, star glyphs, marquees, or orbit/constellation diagrams — the previous identity's devices are retired.
- **Don't** raise House Red past ~10% of any viewport, or let it carry body text.
- **Don't** put cards inside cards, or nest bordered panels — ledger rows need no container.
- **Don't** fabricate testimonials, client names, metrics, or credentials; every row is evidence or it is cut.
- **Don't** adopt cream-plus-serif-plus-terracotta defaults (Fraunces, Playfair, Newsreader) — the world's serif is Spectral and its red is House Red, by committed direction.
