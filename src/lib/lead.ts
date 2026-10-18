// نظام استقبال الطلبات الموحّد: الفورم + الشات بوت + واتساب
// (كله بيعدّي من هنا عشان نفس التحقق ونفس البيانات ونفس رقم المرجع)

export type Lang = 'ar' | 'en';
export type Lead = {
  name: string; phone: string; email: string;
  service: string; budget: string; message: string;
  source: 'form' | 'chatbot';
  details?: [string, string][];
};
type Ctx = { utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_term?: string; utm_content?: string; referrer?: string; landing?: string; first_seen?: string };

const safe = <T>(fn: () => T, d: T): T => { try { return fn(); } catch { return d; } };

// ---------- سياق الزيارة (UTM + مصدر الزيارة) ----------
export const getCtx = (): Ctx => safe(() => {
  const k = 'zf_ctx';
  const saved = JSON.parse(sessionStorage.getItem(k) || 'null') as Ctx | null;
  const q = new URLSearchParams(location.search);
  const has = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].some((x) => q.get(x));
  if (saved && !has) return saved;
  const c: Ctx = saved || {};
  for (const x of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const) { const v = q.get(x); if (v) c[x] = v.slice(0, 80); }
  if (!saved) {
    c.referrer = (document.referrer && !document.referrer.includes(location.host)) ? document.referrer.slice(0, 160) : 'direct';
    c.landing = location.pathname; c.first_seen = new Date().toISOString();
  }
  sessionStorage.setItem(k, JSON.stringify(c));
  return c;
}, {} as Ctx);

// ---------- رقم مرجع قصير لكل طلب ----------
export const makeRef = () => 'ZF-' + Date.now().toString(36).slice(-4).toUpperCase() + Math.random().toString(36).slice(2, 4).toUpperCase();

// ---------- تنظيف وتحقق ----------
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩', FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
export const toLatinDigits = (s: string) => s.replace(/[٠-٩۰-۹]/g, (d) => String(AR_DIGITS.includes(d) ? AR_DIGITS.indexOf(d) : FA_DIGITS.indexOf(d)));
export const cleanPhone = (s: string) => {
  let p = toLatinDigits(s).replace(/[^\d+]/g, '');
  if (p.startsWith('00')) p = '+' + p.slice(2);
  return p;
};
export const validPhone = (s: string) => { const d = cleanPhone(s).replace(/\D/g, ''); return d.length >= 8 && d.length <= 15; };
export const validEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim());
export const stripHtml = (s: string) => s.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim();

export type Errs = Partial<Record<'name' | 'contact' | 'phone' | 'email' | 'message', true>>;
export const validate = (l: Pick<Lead, 'name' | 'phone' | 'email' | 'message'>, needMsg = true): Errs => {
  const e: Errs = {};
  if (stripHtml(l.name).length < 2) e.name = true;
  if (!l.phone && !l.email) e.contact = true;
  if (l.phone && !validPhone(l.phone)) e.phone = true;
  if (l.email && !validEmail(l.email)) e.email = true;
  if (needMsg && stripHtml(l.message).length < 5) e.message = true;
  return e;
};

// ---------- رسالة واتساب منظمة ----------
const L = {
  ar: { hi: 'السلام عليكم أستاذ البراء،', intro: (n: string) => `أنا *${n}*، وحابب أطلب استشارة مجانية بخصوص:`, svc: 'الخدمة', det: 'تفاصيل الطلب', bud: 'الميزانية التقريبية', desc: 'وصف الطلب', con: 'وسيلة التواصل', ref: 'رقم المرجع', src: 'المصدر', bye: 'شكراً لحضرتك، وفي انتظار ردك.', plain: 'أهلاً، حابب أستفسر عن خدماتك.', form: 'نموذج الموقع', chat: 'مساعد الموقع' },
  en: { hi: 'Hello Albaraa,', intro: (n: string) => `I am *${n}*, and I would like to request a free consultation about:`, svc: 'Service', det: 'Request details', bud: 'Approximate budget', desc: 'Description', con: 'Contact', ref: 'Reference', src: 'Source', bye: 'Thank you, I look forward to your reply.', plain: 'Hi, I would like to ask about your services.', form: 'Website form', chat: 'Website assistant' },
};
export const waText = (lang: Lang, l: Lead, ref: string) => {
  const t = L[lang]; const c = getCtx();
  const contact = [l.phone, l.email].filter(Boolean).join(' / ');
  const det = [...(l.details || []), ...(l.budget ? [[t.bud, l.budget] as [string, string]] : [])];
  return [
    t.hi,
    t.intro(l.name),
    `\n*${t.svc}:* ${l.service}`,
    det.length ? `\n*${t.det}:*\n` + det.map(([k, v]) => `• ${k}: ${v}`).join('\n') : '',
    l.message ? `\n*${t.desc}:*\n${l.message}` : '',
    contact ? `\n*${t.con}:* ${contact}` : '',
    `\n${t.bye}`,
    '——',
    `${t.ref}: ${ref} · ${t.src}: ${l.source === 'form' ? t.form : t.chat}${c.utm_source ? ' · ' + c.utm_source : ''}`,
  ].filter((x) => x !== '').join('\n');
};
export const waLink = (number: string, text: string) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

// أي لينك واتساب عام بيتزوّد بسطر سياق وقت الضغط (المصدر + الخدمة المختارة + مرجع)
export const enrichWaClick = (a: HTMLAnchorElement, lang: Lang, loc: string, service?: string) => {
  if (!a.href.includes('wa.me/')) return;
  const u = new URL(a.href); const base = u.searchParams.get('text') || L[lang].plain;
  if (base.includes(L[lang].ref + ':')) return;
  const c = getCtx(); const t = L[lang];
  const extra = `\n—\n${t.ref}: ${makeRef()} · ${t.src}: ${loc}${c.utm_source ? ' · ' + c.utm_source : ''}${service ? ' · ' + service : ''}`;
  u.searchParams.set('text', base + extra); a.href = u.toString();
};

// ---------- منع التكرار والسبام ----------
const hash = (s: string) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return String(h); };
export const throttle = (l: Lead): 'ok' | 'cooldown' | 'dup' => safe(() => {
  const now = Date.now(); const last = Number(localStorage.getItem('zf_last') || 0);
  const h = hash((l.phone || l.email) + l.message); const seen = JSON.parse(localStorage.getItem('zf_seen') || '{}') as Record<string, number>;
  if (seen[h] && now - seen[h] < 10 * 60 * 1000) return 'dup';
  if (now - last < 20 * 1000) return 'cooldown';
  return 'ok';
}, 'ok');
const markSent = (l: Lead) => safe(() => {
  const now = Date.now(); localStorage.setItem('zf_last', String(now));
  const seen = JSON.parse(localStorage.getItem('zf_seen') || '{}') as Record<string, number>;
  seen[hash((l.phone || l.email) + l.message)] = now;
  for (const k of Object.keys(seen)) if (now - seen[k] > 3600e3) delete seen[k];
  localStorage.setItem('zf_seen', JSON.stringify(seen));
}, undefined);

// ---------- الإرسال (مع timeout وإعادة محاولة مرة) ----------
export const submitLead = async (key: string, lang: Lang, l: Lead, ref: string): Promise<'ok' | 'fail'> => {
  const c = getCtx();
  const body = JSON.stringify({
    access_key: key,
    subject: `New lead [${ref}] ${l.service} — ${l.name}`,
    from_name: 'Zeftawii Website',
    replyto: l.email || undefined,
    ref, source: l.source, lang,
    name: l.name, phone: l.phone, email: l.email, service: l.service, budget: l.budget, message: l.message,
    service_details: (l.details || []).map(([k, v]) => `${k}: ${v}`).join('\n') || undefined,
    page: location.pathname, referrer: c.referrer, landing: c.landing,
    utm_source: c.utm_source, utm_medium: c.utm_medium, utm_campaign: c.utm_campaign, utm_term: c.utm_term, utm_content: c.utm_content,
    device: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    submitted_at: new Date().toISOString(),
  });
  for (let i = 0; i < 2; i++) {
    const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 12000);
    try {
      const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body, signal: ac.signal });
      const j = await r.json();
      if (j.success) { markSent(l); return 'ok'; }
      if (r.status >= 400 && r.status < 500) return 'fail'; // مفتاح غلط/سبام: مفيش فايدة من إعادة المحاولة
    } catch { /* retry */ } finally { clearTimeout(to); }
    await new Promise((r) => setTimeout(r, 800));
  }
  return 'fail';
};
export const noteSentViaWa = markSent;
