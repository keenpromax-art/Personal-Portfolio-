import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const files = [
  'index.html',
  'excel.html',
  'stocks.html',
  'sheets.html',
  'style.css',
  'stocks_data.json',
  'corr_data.json',
];
for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}

fs.cpSync(path.join(root, 'assets'), path.join(out, 'assets'), {
  recursive: true,
  filter: (src) => !src.replace(/\\/g, '/').endsWith('assets/sheets/STOCKS.html'),
});

const count = (dir) => fs.readdirSync(dir, { withFileTypes: true })
  .reduce((n, e) => n + (e.isDirectory() ? count(path.join(dir, e.name)) : 1), 0);
console.log(`dist ready: ${count(out)} files (the 34 MB STOCKS export is excluded — Workers caps assets at 25 MiB)`);
