# Keen Victor — Portfolio

A two-page portfolio built with plain HTML/CSS/JS — no build step. Deploys to GitHub Pages.

The design language is **The Research Desk**: the site is set as an institutional equity research note — nameplate masthead, house call, coverage table of deployed work, fine print at the foot. See `PRODUCT.md` for product truth and `DESIGN.md` for the design system. Sites are meant to be served over HTTP (e.g. `python -m http.server`); the Excel model viewer fetches the `.xlsx` from disk, which `file://` blocks.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | The note — masthead, coverage table of projects (filterable, detail modal), analyst profile, capabilities, engagement endnote |
| `excel.html` | Interactive Excel models — live in-browser recalculation |
| `stocks.html` | Stock Tracker — NSE coverage desk derived from a live market sheet |
| `sheets.html` | Source Sheets — the two workbook tabs as verbatim Google Sheets exports |

## File structure

```
index.html        # The note (single page)
excel.html        # Interactive Excel models (ExcelJS + HyperFormula)
stocks.html       # Stock Tracker — coverage desk, movers, correlation workbench
sheets.html       # Source Sheets — tabbed viewer for the verbatim exports
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
  sheets/         # Verbatim sheet exports + resources/ (sheet.css, chart JS)
stocks_data.json  # Extracted, de-duplicated tracker universe + derived stats
corr_data.json    # Extracted correlation series (rebased returns + prices)
README.md         # This file
```

## Stock Tracker (`stocks.html`)

Reads the public Google Sheet (`STOCKS` and `Correlation` tabs), de-duplicates 868 rows into 672 unique tickers plus three indices, and derives the narrative, overview statistics and rankings in the browser. Both datasets are embedded inline in `stocks.html` so the page works from `file://` too; the two `.json` files are the same data kept as downloadable source. The page renders a searchable, re-rankable ledger (seven-day sparklines are pure inline SVG), a movers panel and two hand-built SVG charts — no chart library or runtime data fetch.

To refresh the numbers, re-export the two tabs as CSV and re-run the parser, then replace the `const DATA = …;` and `const CORR = …;` assignments in `stocks.html` and update the two `.json` files.

## Source Sheets (`sheets.html`)

The original Google Sheets HTML exports, served unchanged from `assets/sheets/`. `STOCKS.html` is a ~33 MB single table with ~7,000 inline sparkline SVGs; `Correlation.html` renders its two canvas charts using the JavaScript in `assets/sheets/resources/`. Keep the HTML files and the `resources/` folder together — the export links to that folder by relative path. The tabbed viewer embeds both exports in iframes and offers a direct link to each raw file, so the frozen headers, colour scales and charts appear exactly as in the workbook. Expect a slow first paint on the STOCKS tab over a mobile connection.

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

## License

MIT — feel free to use as a template for your own portfolio.
