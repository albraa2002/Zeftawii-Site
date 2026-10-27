# يولّد public/sitemap.xml و قايمة الصفحات في public/llms.txt من dist. التشغيل: astro build ثم python3 scripts/gen-seo.py ثم astro build تاني.
import os, re, datetime
BASE = re.search(r"site: '([^']+)'", open('src/config.ts').read()).group(1).rstrip('/')
today = datetime.date.today().isoformat()
paths = []
for d, _, fs in os.walk('dist'):
    if 'index.html' in fs:
        rel = os.path.relpath(d, 'dist'); rel = '' if rel == '.' else rel
        if rel in ('404', 'links', 'en/links', 'eg', 'sa'): continue
        if 'http-equiv="refresh"' in open(os.path.join(d,'index.html'),encoding='utf8').read(2000): continue
        paths.append('/' + rel + ('/' if rel else ''))
ar = sorted(p for p in paths if not p.startswith('/en'))
def en(p): return '/en' + (p if p != '/' else '/')
x = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
def pr(p): return '1.0' if p == '/' else '0.8' if p.count('/') == 2 and p != '/' else '0.6'
for p in ar:
    e = en(p)
    for loc in (p, e):
        x.append(f'  <url>\n    <loc>{BASE}{loc}</loc>\n    <lastmod>{today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>{pr(p)}</priority>')
        x.append(f'    <xhtml:link rel="alternate" hreflang="ar" href="{BASE}{p}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="{BASE}{e}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE}{p}"/>\n  </url>')
x.append('</urlset>')
open('public/sitemap.xml', 'w').write('\n'.join(x) + '\n')
t = open('public/llms.txt').read().split('## Pages')[0].rstrip()
extra = '\n\n## Free tools and learning\n- ROAS, CPA and LTV, margin and break-even calculators, a project brief generator and a business health check\n- A bilingual marketing and data glossary (ROAS, CPA, LTV, RFM, KPI, SOW and more)\n- Store analytics for Salla, Shopify and WooCommerce, and for the Egyptian and Saudi markets\n- Blog RSS: ' + BASE + '/rss.xml (Arabic), ' + BASE + '/en/rss.xml (English)'
if 'Free tools and learning' in t: t = t.split('\n\n## Free tools and learning')[0]
pages = '\n\n## Pages\n' + '\n'.join(f'- {BASE}{en(p)}' for p in ar)
open('public/llms.txt', 'w').write(t + extra + pages + '\n')
print(len(ar) * 2, 'urls')
