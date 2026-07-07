// render_component_png.js — screenshot a single HTML element to a transparent PNG at high DPI.
// Used to turn a crafted hero data-viz (e.g. component-barchart.html) into an image
// that gets dropped into an html2pptx placeholder slot via slide.addImage(...).
//
// Usage:
//   node scripts/render_component_png.js --html <file.html> --sel "#box" --out images/barchart.png [--scale 3]
//
// Requires playwright + a chromium install (both resolve from the nearest node_modules
// up the tree; the deck workspace under the user home inherits the home node_modules).
const path = require('path');
const { chromium } = require('playwright');

function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 ? process.argv[i + 1] : def;
}

(async () => {
  const html = arg('html');
  const sel = arg('sel', '#box');
  const out = arg('out', 'component.png');
  const scale = parseFloat(arg('scale', '3'));
  if (!html) { console.error('need --html <file>'); process.exit(2); }

  const browser = await chromium.launch();
  const page = await browser.newPage({ deviceScaleFactor: scale });
  await page.goto('file:///' + path.resolve(html).replace(/\\/g, '/'));
  await page.waitForTimeout(300);                 // let @font-face webfonts load
  const el = await page.$(sel);
  if (!el) { console.error('selector not found:', sel); await browser.close(); process.exit(1); }
  await el.screenshot({ path: path.resolve(out), omitBackground: true });
  await browser.close();
  console.log('WROTE', out);
})().catch(e => { console.error(e); process.exit(1); });
