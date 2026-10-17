// ===== الإعدادات الوحيدة اللي محتاج تعدّلها قبل النشر =====
export const CONFIG = {
  brand: 'Zeftawii',
  tagline: 'Decoding Data',
  // رقم واتساب بالصيغة الدولية بدون + أو أصفار (مثال مصري: 201001234567)
  whatsapp: '201007527132',
  // مفتاح Web3Forms المجاني (من web3forms.com، بيوصلك الإيميل على الفورم)
  web3formsKey: 'YOUR_WEB3FORMS_KEY',
  // رابط الحجز المجاني (Cal.com أو Calendly)
  bookingUrl: 'https://cal.com/your-username/discovery',
  email: 'albraa.alzeftawi2002@gmail.com',
  // التتبع (اختياري، الفاضي = مش شغّال). GA4 مثال: 'G-XXXXXXXXXX' | Microsoft Clarity (heatmaps مجاني) مثال: 'abcd1234ef'
  ga4Id: '',
  clarityId: '',
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
  site: 'https://zeftawii-site-bkxt.vercel.app',
};

export const hasKey = () => CONFIG.web3formsKey !== 'YOUR_WEB3FORMS_KEY';
// لو لينك الحجز لسه placeholder بنخفي الزرار بدل ما يفتح 404
export const hasBooking = () => !!CONFIG.bookingUrl && !CONFIG.bookingUrl.includes('your-username');
