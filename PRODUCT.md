# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clients and hiring managers evaluating Keen Victor for freelance and full-time opportunities. They arrive cold (links from GitHub, applications, or word of mouth) and need to decide quickly whether to reach out.

## Product Purpose

Personal portfolio for Keen Victor. Demonstrates that he can design and build real, working software — not just mockups — and converts a skeptical visitor into an inbound conversation (email enquiry or project start).

Success means a client or hiring manager lands, understands within seconds what he does and why it matters, trusts the evidence on the page, and contacts him.

## Positioning

Finance + code hybrid: a developer who builds live, working finance tooling (scenario-driven DCF/SOTP equity models in the browser, a Bloomberg-style NSE terminal scanning 209 F&O names, SAR equity-research web app with PDF/XLS export) alongside conventional web and Python work. The work itself is the proof — every flagship project is deployed and clickable, not a screenshot of a concept.

## Operating Context

Static single-page site (index.html) plus a full interactive Excel-model page (excel.html) where models recalculate live in the browser. Deployed via GitHub Pages. Visited on desktop and mobile. No backend; contact happens via mailto links.

## Capabilities and Constraints

- Confirmed functionality to preserve: project grid with filters and detail modal; excel.html with live recalculation (ExcelJS + HyperFormula), editing toggle, formula bar, undo/redo, scenario switching, download of original model; real live links (bullion-board.vercel.app, SAR Cloud Run app, nexus-chat-473.pages.dev); APOLLOHOSP.NS financial model served as a public asset.
- Stack: plain static HTML/CSS/JS, no build step, no frameworks.
- Copy and facts remain the owner's to edit — no invented credentials, clients, testimonials, or metrics may be fabricated in any redesign.
- Assets referenced from `assets/projects/` and `assets/excel/` must keep working; files under assets/excel/ are publicly downloadable by design.

## Brand Commitments

- Name: Keen Victor. Voice: direct, competent, no hype.
- Open decision: the incumbent visual world (paper/editorial "press" style, playful collage hero, marquee, orbit constellation, warm paper palette with orange/yellow accents) is being retired in favor of a professional register at the owner's request. Replacement world to be decided in new-work.

## Evidence on Hand

- Live deployed projects: Bullion-Board (https://bullion-board.vercel.app/), SAR — Equity Research (https://sar-378070319461.asia-south1.run.app/), Nexus-Chat (https://nexus-chat-473.pages.dev/).
- In-browser Apollo Hospitals (APOLLOHOSP.NS) financial model at excel.html (assets/excel/APOLLOHOSP.NS_financial_model.xlsx).
- Project screenshots in assets/projects/ (bullion-board.png, sar-research.png, nexus-chat.png).
- Service and thought imagery are still placeholders. The portrait is real photography (assets/portrait.jpg).
- No testimonials, client logos, or credentials exist on hand — none may be invented.

## Product Principles

1. The work is the argument — lead with deployed, clickable proof, not claims.
2. Finance credibility and engineering credibility reinforce each other; never present one without the other.
3. Professional register over personality: restraint, precision, and clarity beat decoration and whimsy.
4. Static, fast, honest — no frameworks, no fake content, no fabricated proof.
5. Every claim on the page is either evidenced by a live link or cut.

## Accessibility & Inclusion

No product-specific requirement established; standard good practice applies (semantic HTML, keyboard-operable modal and nav, sufficient contrast, prefers-reduced-motion respect — the incumbent CSS already includes a reduced-motion block and should keep it).
