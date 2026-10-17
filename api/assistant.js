// نقطة نهاية الشات بوت الذكي (Vercel Serverless Function).
// بتشتغل بس لو متضاف متغير البيئة ANTHROPIC_API_KEY. غير كده الموقع بيرجع تلقائياً للمساعد البسيط.
import { SYSTEM } from './_knowledge.js';

// المزودين المجانيين المدعومين (بالترتيب): Gemini ثم Groq. Anthropic اختياري (مدفوع).
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || 'claude-haiku-5-5';
const providers = () => [
  process.env.GEMINI_API_KEY && 'gemini',
  process.env.GROQ_API_KEY && 'groq',
  process.env.ANTHROPIC_API_KEY && 'anthropic',
].filter(Boolean);
const MAX_TOKENS = Number(process.env.CHAT_MAX_TOKENS || 700);
const PER_IP_LIMIT = Number(process.env.CHAT_IP_LIMIT || 25);      // رسائل لكل IP كل 10 دقايق
const DAILY_CAP = Number(process.env.CHAT_DAILY_CAP || 400);       // سقف يومي تقريبي (لكل instance)
const WINDOW_MS = 10 * 60 * 1000;

const hits = new Map();
let day = new Date().toDateString(); let dayCount = 0;

const allowedOrigin = (origin, host) => {
  if (!origin) return false;
  try {
    const o = new URL(origin);
    const extra = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
    return o.host === host || extra.includes(o.origin) || o.hostname === 'localhost';
  } catch { return false; }
};

const clean = (s, n) => String(s ?? '').replace(/\u0000/g, '').slice(0, n);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'GET') return res.status(200).json({ enabled: providers().length > 0 });
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  if (!providers().length) return res.status(503).json({ error: 'disabled' });
  if (!allowedOrigin(req.headers.origin, req.headers.host)) return res.status(403).json({ error: 'origin' });

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'x').split(',')[0].trim();
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= PER_IP_LIMIT) return res.status(429).json({ error: 'rate' });
  const today = new Date().toDateString();
  if (today !== day) { day = today; dayCount = 0; }
  if (dayCount >= DAILY_CAP) return res.status(429).json({ error: 'cap' });

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  const msgs = Array.isArray(body?.messages) ? body.messages : null;
  if (!msgs || !msgs.length) return res.status(400).json({ error: 'bad' });

  // آخر 12 رسالة، أدوار صحيحة، وأول رسالة لازم تكون user
  let history = msgs.slice(-12)
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .map((m) => ({ role: m.role, content: clean(m.content, m.role === 'user' ? 700 : 1800) }));
  while (history.length && history[0].role !== 'user') history.shift();
  const merged = [];
  for (const m of history) { const l = merged[merged.length - 1]; if (l && l.role === m.role) l.content += '\n' + m.content; else merged.push(m); }
  if (!merged.length || merged[merged.length - 1].role !== 'user') return res.status(400).json({ error: 'bad' });

  const lang = body?.lang === 'en' ? 'English' : 'Arabic (Egyptian)';
  const system = SYSTEM + `\n\n# CONTEXT\nThe visitor is browsing the ${lang} version of the site. Default to that language unless they write in another.\nThe site's booking link is ${process.env.BOOKING_AVAILABLE === '1' ? 'available' : 'NOT available yet (do not use [[BOOK]])'}.`;

  arr.push(now); hits.set(ip, arr); dayCount++;
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k);

  const callers = {
    gemini: async (signal) => {
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
        method: 'POST', signal, headers: { 'content-type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents: merged.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
          generationConfig: { maxOutputTokens: MAX_TOKENS, temperature: 0.6 },
        }),
      });
      if (!r.ok) throw new Error('gemini ' + r.status);
      const j = await r.json();
      return (j.candidates?.[0]?.content?.parts || []).map((x) => x.text || '').join('').trim();
    },
    groq: async (signal) => {
      const r = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST', signal, headers: { 'content-type': 'application/json', authorization: 'Bearer ' + process.env.GROQ_API_KEY },
        body: JSON.stringify({ model: GROQ_MODEL, max_tokens: MAX_TOKENS, temperature: 0.6, messages: [{ role: 'system', content: system }, ...merged] }),
      });
      if (!r.ok) throw new Error('groq ' + r.status);
      const j = await r.json();
      return String(j.choices?.[0]?.message?.content || '').trim();
    },
    anthropic: async (signal) => {
      const r = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST', signal,
        headers: { 'content-type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
        body: JSON.stringify({ model: ANTHROPIC_MODEL, max_tokens: MAX_TOKENS, system, messages: merged }),
      });
      if (!r.ok) throw new Error('anthropic ' + r.status);
      const j = await r.json();
      return (j.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('').trim();
    },
  };

  // جرّب المزودين بالترتيب: لو الأول وصل لحده المجاني (429) أو وقع، ننتقل للتاني
  for (const name of providers()) {
    const ac = new AbortController(); const to = setTimeout(() => ac.abort(), 22000);
    try {
      const text = await callers[name](ac.signal);
      if (text) return res.status(200).json({ reply: text });
    } catch { /* نجرّب اللي بعده */ } finally { clearTimeout(to); }
  }
  return res.status(502).json({ error: 'upstream' });
}
