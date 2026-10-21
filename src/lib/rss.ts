import { posts } from '../content/posts';
import { CONFIG } from '../config';
import type { Lang } from '../i18n';
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function rss(lang: Lang): Response {
  const base = CONFIG.site.replace(/\/$/, ''); const pre = lang === 'ar' ? '' : '/en';
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const items = sorted.map((p) => {
    const c = p[lang]; const url = `${base}${pre}/blog/${p.slug}/`;
    const html = c.body.map((b) => b.h ? `<h2>${esc(b.h)}</h2>` : b.p ? `<p>${esc(b.p)}</p>` : b.ul ? `<ul>${b.ul.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '').join('');
    return `<item><title>${esc(c.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(p.date + 'T09:00:00Z').toUTCString()}</pubDate><description>${esc(c.desc)}</description><content:encoded><![CDATA[<p><strong>${esc(c.tldr)}</strong></p>${html}]]></content:encoded></item>`;
  }).join('');
  const title = lang === 'ar' ? 'مدونة زفتاوي | تحليل بيانات وتسويق وإدارة مشاريع' : 'Zeftawii Blog | Data analytics, marketing and project management';
  const desc = lang === 'ar' ? 'مقالات عملية عن تحليل البيانات والتسويق الرقمي وإدارة الحسابات والمشاريع.' : 'Practical articles on data analytics, digital marketing, account and project management.';
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/"><channel><title>${esc(title)}</title><link>${base}${pre}/blog/</link><description>${esc(desc)}</description><language>${lang}</language><lastBuildDate>${new Date(sorted[0].date + 'T09:00:00Z').toUTCString()}</lastBuildDate><atom:link href="${base}${pre}/rss.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
