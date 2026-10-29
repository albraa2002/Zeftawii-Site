// ===== الإعدادات الوحيدة اللي محتاج تعدّلها قبل النشر =====
// القيم الحساسة/المتغيرة بتتحط من Vercel > Settings > Environment Variables (بأسماء PUBLIC_*) من غير ما تعدّل الكود. لو مش موجودة بيستخدم القيمة الافتراضية.
const env = ((import.meta as any).env || {}) as Record<string, string | undefined>;
export const CONFIG = {
  brand: 'Zeftawii',
  tagline: 'Decoding Data',
  // رقم واتساب بالصيغة الدولية بدون + أو أصفار (مثال مصري: 201001234567)
  whatsapp: '201007527132',
  // مفتاح Web3Forms المجاني (من web3forms.com، بيوصلك الإيميل على الفورم)
  web3formsKey: env.PUBLIC_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_KEY',
  // رابط الحجز المجاني (Cal.com أو Calendly)
  bookingUrl: env.PUBLIC_BOOKING_URL || 'https://cal.com/your-username/discovery',
  // رابط Google Apps Script (Web App) اللي بيسجّل أسئلة الشات في شيت مجاني. الفاضي = التسجيل مقفول. الشرح في docs/chat-log.md
  chatLogUrl: env.PUBLIC_CHAT_LOG_URL || '',
  email: 'albraa.alzeftawi2002@gmail.com',
  // التتبع (اختياري، الفاضي = مش شغّال). GA4 مثال: 'G-XXXXXXXXXX' | Microsoft Clarity (heatmaps مجاني) مثال: 'abcd1234ef'
  // Vercel Web Analytics (مجاني على Hobby): شغّله من Vercel > Project > Analytics > Enable، وبعدها خلّي ده true
  vercelAnalytics: true,
  ga4Id: env.PUBLIC_GA4_ID || 'G-DZC2J11B4G',
  clarityId: env.PUBLIC_CLARITY_ID || '',
  // ضيف رابط كل حساب بين الفاصلتين. الفاضي بيتخفي تلقائياً من الفوتر.
  links: {
    linkedin: 'https://www.linkedin.com/in/albaraa-ehab-elzeftawy',
    instagram: 'https://www.instagram.com/baraae.hamed',
    facebook: 'https://www.facebook.com/baraae.hamed',
    tiktok: 'https://www.tiktok.com/@albaraa2002ehab',
    x: 'https://x.com/albaraa_ehab',
    threads: 'https://www.threads.com/@baraae.hamed',
    github: 'https://github.com/albraa2002',
    portfolio: 'https://albaraa-ehab.vercel.app/',
    whatsapp: 'https://api.whatsapp.com/send?phone=201007527132',
    youtube: '',
    mostaql: '',
  },
  // غيّره لدومينك الخاص لما تربطه (ومعاه robots.txt و sitemap.xml)
  site: 'https://zeftawii-site-46vp.vercel.app',
};

export const hasKey = () => CONFIG.web3formsKey !== 'YOUR_WEB3FORMS_KEY';
// لو لينك الحجز لسه placeholder بنخفي الزرار بدل ما يفتح 404
export const hasBooking = () => !!CONFIG.bookingUrl && !CONFIG.bookingUrl.includes('your-username');

export const hasLog = () => /^https:\/\/script\.google\.com\//.test(CONFIG.chatLogUrl);
