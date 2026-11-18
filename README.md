# Keen Victor — Portfolio

A two-page portfolio built with plain HTML/CSS/JS — no build step. Deploys to a Cloudflare Worker.

The design language is **The Research Desk**: the site is set as an institutional equity research note — nameplate masthead, house call, coverage table of deployed work, fine print at the foot. See `PRODUCT.md` for product truth and `DESIGN.md` for the design system. Sites are meant to be served over HTTP (e.g. `python -m http.server`); the Excel model viewer fetches the `.xlsx` from disk, which `file://` blocks.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | The note — masthead, coverage table of projects (filterable, detail modal), analyst profile, capabilities, engagement endnote |
| `excel.html` | Interactive Excel models — live in-browser recalculation |

## File structure

```
index.html        # The note (single page)
excel.html        # Interactive Excel models (ExcelJS + HyperFormula)
style.css         # The Research Desk design system
PRODUCT.md        # Product truth (audience, positioning, constraints)
DESIGN.md         # Design system (tokens, rules, components)
.impeccable/
  surfaces/       # Surface briefs (direction contracts)
  mocks/          # Decision-round artifacts
  review/         # Build screenshots and detector output
assets/
  excel/          # .xlsx models served publicly (downloadable by design)
  projects/       # Project thumbnails
README.md         # This file
```

## Excel models (`excel.html`)

Interactive, in-browser financial models with full-suite editing behavior. The workbook is parsed with ExcelJS, formulas recalculate live with HyperFormula (~393 functions), and the **Editing** toggle (top right of the workbook, like desktop Office) switches the whole grid between viewing and editing: type in any cell, use the formula bar, `Ctrl+Z` / `Ctrl+Y` undo-redo, `F2` edit, `Del` clear, arrows/`Tab`/`Enter` navigate, `Ctrl+S` saves a copy with your edits applied. While a formula is being edited, click cells to insert references or drag to insert a range; the `ƒx` button opens a searchable library of 95 common functions with signatures. Literal syntax supported in cells: `15%`, `1,234`, `$500`, `"quoted text"`, booleans, scientific notation. The **Original** button downloads the pristine file with charts (saved copies don't carry charts). Yellow cells (blue text on amber) are the model drivers.

To add a model:

1. Drop the `.xlsx` into `assets/excel/`.
2. Add one entry to the `excelModels` array in `excel.html` (id, title, `file`, `desc`, `badge`).
3. The viewer handles merged cells, styles, number formats, and named ranges automatically. Charts are not embedded in the web view.

Note: the file is served from this site, so anything you put in `assets/excel/` is publicly downloadable.

## Customizing

1. **Projects** — edit the `projects` array in `index.html`. Add titles, descriptions, category (`github`, `website`, `colab`, `python`, `pyrogets`, `excel`), thumbnail paths, and live links.
2. **Contact email** — `hello@example.com` appears in `index.html` (mailto links) and `excel.html` (footer). Replace with the real address.
3. **Portrait** — the Analyst section uses ssets/portrait.jpg; replace it to change the photo (it is center-cropped from a wide original with 4:5 framing).
4. **Copy** — all facts (bio, timeline, projects, links) are the owner's to edit; nothing on the page asserts credentials that do not exist.

## Local development

Serve the folder over HTTP (the Excel viewer needs it):

```
python -m http.server 8080
```

Then open http://localhost:8080/. Deploying to GitHub Pages works as-is from the repo root.

## Deploy to the Cloudflare Worker

The live site at `https://portfolio.keenvictor.workers.dev` is a Workers static-assets deployment, not GitHub Pages — pushing to GitHub does **not** update it. From this folder:

```
npx wrangler login
npx wrangler deploy
```

`wrangler.jsonc` targets the `portfolio` worker. Its build step runs `node sync-dist.mjs`, which copies the site into `dist/` before upload; `html_handling: "auto-trailing-slash"` keeps clean URLs (`/excel` → `excel.html`). The Stock Analyzer lives on Google Sheets and is linked from the coverage table, not hosted here.

## License

MIT — feel free to use as a template for your own portfolio.
