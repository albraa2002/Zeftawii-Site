// يولّد صورة مشاركة (1200x630) لكل صفحة من dist. التشغيل: astro build ثم node scripts/make-og.mjs ثم astro build تاني.
// محتاج playwright + chromium. الصور الناتجة في public/og وبتتحط في الريبو (Vercel مش محتاج يشغّله).
import fs from 'node:fs';
import path from 'node:path';
const PW = process.env.PW_MODULE || 'playwright';
const { chromium } = await import(PW);
const dist = 'dist', out = 'public/og';
fs.mkdirSync(out, { recursive: true });
const pages = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else if (f === 'index.html') pages.push(p); } })(dist);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const b = await chromium.launch({ executablePath: process.env.CHROME || '/opt/pw-browsers/chromium' });
const pg = await b.newPage({ viewport: { width: 1200, height: 630 } });
let n = 0;
for (const f of pages) {
  const rel = path.relative(dist, path.dirname(f)).split(path.sep).join('/');
  if (!rel || rel === 'en' || rel === '404') continue; // الرئيسية بتستخدم og-image.png
  const html = fs.readFileSync(f, 'utf8');
  const lang = /<html[^>]*lang="(\w+)"/.exec(html)?.[1] || 'ar';
  const h1 = dec((/<h1[^>]*>([\s\S]*?)<\/h1>/.exec(html)?.[1] || '').replace(/<[^>]+>/g, '').trim());
  const kick = dec((/<span class="kicker">([\s\S]*?)<\/span>/.exec(html)?.[1] || '').replace(/<[^>]+>/g, '').trim());
  if (!h1) continue;
  const key = rel.replace(/\//g, '-');
  const rtl = lang === 'ar';
  const size = h1.length > 70 ? 54 : h1.length > 45 ? 62 : 72;
  await pg.setContent(`<html lang="${lang}" dir="${rtl ? 'rtl' : 'ltr'}"><body style="margin:0;width:1200px;height:630px;box-sizing:border-box;padding:70px 80px;background:#f6f1e7;color:#1d1a16;font-family:'IBM Plex Sans Arabic','Noto Naskh Arabic',Georgia,serif;display:flex;flex-direction:column;justify-content:space-between;position:relative;border-top:14px solid #a9411d">
  <div style="font-size:26px;font-weight:700;color:#a9411d;direction:ltr;text-align:${rtl ? 'right' : 'left'}">— ${esc(kick.slice(0, 40) || 'Zeftawii')}</div>
  <div style="font-size:${size}px;line-height:1.35;font-weight:700">${esc(h1)}</div>
  <div style="display:flex;justify-content:space-between;align-items:center;direction:ltr;border-top:2px solid #1d1a16;padding-top:22px"><div style="font-size:40px;font-weight:700;font-family:Georgia,serif">Zeftawii <span style="color:#a9411d">|</span> <span style="font-size:24px;font-weight:400">Decoding Data</span></div></div>
  </body></html>`);
  await pg.screenshot({ path: path.join(out, key + '.jpg'), type: 'jpeg', quality: 78 });
  n++;
}
await b.close();
console.log('og images:', n);
