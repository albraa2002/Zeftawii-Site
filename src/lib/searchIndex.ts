import type { Lang } from '../i18n';
import { services } from '../content/services';
import { solutions } from '../content/solutions';
import { tools } from '../content/tools';
import { posts } from '../content/posts';
import { glossary } from '../content/glossary';
import { cases } from '../content/site';
import { P } from '../content/ui';
export type Item = { t: string; d: string; u: string; g: string };
export function searchIndex(lang: Lang): Item[] {
  const ar = lang === 'ar'; const g = ar ? { s: 'خدمة', so: 'حل', t: 'أداة', b: 'مقال', gl: 'مصطلح', w: 'شغل', p: 'صفحة' } : { s: 'Service', so: 'Solution', t: 'Tool', b: 'Article', gl: 'Term', w: 'Work', p: 'Page' };
  const out: Item[] = [];
  services.forEach((s) => out.push({ t: s[lang].name, d: s[lang].desc, u: P(lang, `/services/${s.slug}/`), g: g.s }));
  solutions.forEach((s) => out.push({ t: s[lang].name, d: s[lang].desc, u: P(lang, `/solutions/${s.slug}/`), g: g.so }));
  out.push({ t: ar ? 'حاسبة ربحية الإعلانات (ROAS)' : 'Ad profitability calculator (ROAS)', d: ar ? 'اعرف حملتك بتكسب ولا بتخسر.' : 'Find out if your campaign earns or loses.', u: P(lang, '/#calc'), g: g.t });
  tools.forEach((s) => out.push({ t: s[lang].name, d: s[lang].desc, u: P(lang, `/tools/${s.slug}/`), g: g.t }));
  posts.forEach((s) => out.push({ t: s[lang].title, d: s[lang].desc, u: P(lang, `/blog/${s.slug}/`), g: g.b }));
  glossary.forEach((s) => out.push({ t: `${s[lang].term} · ${s[lang].full}`, d: s[lang].short, u: P(lang, `/glossary/${s.slug}/`), g: g.gl }));
  cases.forEach((s) => out.push({ t: s[lang].title, d: s[lang].desc, u: P(lang, `/work/${s.slug}/`), g: g.w }));
  out.push({ t: ar ? 'أمثلة لوحات تحكم' : 'Dashboard examples', d: ar ? 'ست لوحات مثال لكل دور: متجر، إعلانات، وكالة، مبيعات.' : 'Six example dashboards by role: store, ads, agency, sales.', u: P(lang, '/dashboards/'), g: g.w });
  [['/about/', ar ? 'عنّي' : 'About', ar ? 'قصتي وطريقة شغلي وأدواتي' : 'My story, way of working and tools'], ['/resources/', ar ? 'قوالب مجانية' : 'Free templates', ar ? 'نطاق عمل وتقرير حالة ومتابع KPIs' : 'Scope of work, status report and KPI tracker'], ['/blog/', ar ? 'المدونة' : 'Blog', ''], ['/tools/', ar ? 'كل الأدوات' : 'All tools', ''], ['/glossary/', ar ? 'قاموس المصطلحات' : 'Glossary', ''], ['/faq/', ar ? 'الأسئلة الشائعة' : 'FAQ', ar ? 'التسعير والمدة والبيانات' : 'Pricing, timelines and data'], ['/solutions/', ar ? 'حلول للمتاجر والأسواق' : 'Store and market solutions', ''], ['/#contact', ar ? 'تواصل / احجز استشارة' : 'Contact / book a call', ar ? 'استشارة مجانية بدون التزام' : 'A free, no-commitment consultation']].forEach(([u, t, d]) => out.push({ t, d, u: P(lang, u), g: g.p }));
  return out;
}
