// شرح كل أداة: خطوات الاستخدام + توضيح لكل خانة (مثال وإزاي تجيب الرقم).
type B = { ar: string; en: string };
export type ToolHint = { guide: { ar: string[]; en: string[] }; f: Record<string, B> };

export const hints: Record<string, ToolHint> = {
  'roas-profitability-calculator': {
    guide: {
      ar: ['اختار فترة واحدة (مثلاً آخر 30 يوم) وخد منها الأرقام من مدير الإعلانات ومن متجرك.', 'اكتب كل الأرقام بنفس العملة.', 'النتيجة بتقولك حملتك بتكسب ولا بتخسر، وأقصى تكلفة أوردر تقدر تدفعها.'],
      en: ['Pick one period (say the last 30 days) and take the numbers from your ads manager and your store.', 'Use the same currency in every field.', 'The result tells you if the campaign earns or loses, and the maximum cost per order you can pay.'],
    },
    f: {
      spend: { ar: 'إجمالي اللي صرفته على الإعلانات في الفترة. من مدير الإعلانات (Meta أو Google).', en: 'Total ad spend in the period, from your ads manager (Meta or Google).' },
      orders: { ar: 'الأوردرات الفعلية اللي جت من الإعلانات، من المتجر مش من المنصة لو أمكن.', en: 'Real orders that came from ads. Prefer store data over platform numbers.' },
      aov: { ar: 'إجمالي مبيعات الفترة ÷ عدد الأوردرات.', en: 'Total sales in the period ÷ number of orders.' },
      cogs: { ar: 'تكلفة المنتج كنسبة من سعر البيع. منتج بـ 100 وتكلفته 40 يبقى 40.', en: 'Product cost as a share of the price. A 100 item costing 40 means 40.' },
      ship: { ar: 'الشحن والرسوم اللي بتتحملها على الأوردر الواحد (شحن، تغليف، رسوم دفع).', en: 'Shipping and fees you pay per order (delivery, packaging, payment fees).' },
      ret: { ar: 'نسبة الأوردرات اللي رجعت أو اتلغت من إجمالي الأوردرات.', en: 'Share of orders that were returned or cancelled.' },
    },
  },
  'ab-test-sample-size': {
    guide: {
      ar: ['خد معدل التحويل الحالي للصفحة من آخر 30 يوم.', 'حدد أقل تحسّن يستاهل تكتشفه، مثلاً 20% يعني من 2% لـ 2.4%.', 'النتيجة بتقولك عدد الزوار لكل نسخة والمدة. متوقفش الاختبار قبلها.'],
      en: ['Take the page conversion rate from the last 30 days.', 'Choose the smallest lift worth detecting, e.g. 20% means 2% to 2.4%.', 'The result gives visitors per variant and duration. Do not stop the test earlier.'],
    },
    f: {
      base: { ar: 'تحويلات الصفحة ÷ زوارها. لو 20 طلب من 1000 زائر يبقى 2.', en: 'Page conversions ÷ visitors. 20 orders from 1000 visitors means 2.' },
      mde: { ar: 'التحسّن النسبي، مش بالنقط. كل ما كان أصغر احتجت زوار أكتر بكتير.', en: 'The relative lift, not points. The smaller it is, the many more visitors you need.' },
      daily: { ar: 'زوار الصفحة اليوميين من Analytics، لكل النسخ مجتمعة.', en: 'Daily page visitors from Analytics, all variants combined.' },
    },
  },
  'automation-savings-calculator': {
    guide: {
      ar: ['عدّ التقارير اللي بتتعمل يدوي كل شهر (أسبوعي × 4 مثلاً).', 'قدّر الوقت الحقيقي للتقرير الواحد من أول تجميع الداتا لحد التسليم.', 'النتيجة بتوريك الساعات والتكلفة اللي ممكن توفرها في السنة.'],
      en: ['Count the reports made by hand each month (weekly × 4, for example).', 'Estimate the real time per report, from collecting data to delivery.', 'The result shows the hours and cost you could save per year.'],
    },
    f: {
      reports: { ar: 'عدد التقارير اللي بتتعمل يدوي في الشهر. التقرير الأسبوعي يتحسب 4.', en: 'Reports built by hand each month. A weekly report counts as 4.' },
      hours: { ar: 'الساعات اللي التقرير الواحد بياخدها: تجميع، تنضيف، حسابات، تنسيق.', en: 'Hours one report takes: collecting, cleaning, calculating, formatting.' },
      rate: { ar: 'تكلفة ساعة اللي بيعمل التقرير: مرتبه الشهري ÷ ساعات الشغل.', en: 'Hourly cost of whoever builds it: monthly salary ÷ working hours.' },
      save: { ar: 'نسبة الوقت المتوقع توفيرها بالأتمتة. 60% رقم متحفظ، ممكن يوصل لـ 90% لتقارير متكررة.', en: 'Share of time automation could save. 60% is conservative; repeatable reports can reach 90%.' },
    },
  },
  'cod-returns-cost-calculator': {
    guide: {
      ar: ['خد أرقام آخر شهر كامل من شركة الشحن والمتجر.', 'احسب المرتجع شامل الملغي بعد الشحن.', 'السيناريو الأخير بيوريك كام توفر لو قللت المرتجعات بعدد نقاط معين.'],
      en: ['Take last full month numbers from your courier and store.', 'Count returns including cancellations after shipping.', 'The scenario field shows what you save if you cut the return rate by some points.'],
    },
    f: {
      orders: { ar: 'إجمالي الأوردرات اللي اتشحنت في الشهر.', en: 'All orders shipped in the month.' },
      aov: { ar: 'متوسط سعر الأوردر الواحد.', en: 'Average price of one order.' },
      rate: { ar: 'المرتجع ÷ المشحون × 100. لو 20 من 100 رجعوا اكتب 20.', en: 'Returned ÷ shipped × 100. If 20 of 100 came back, enter 20.' },
      ship: { ar: 'مصاريف شحن الأوردر للعميل، بتتدفع حتى لو رجع.', en: 'Cost to ship the order out, paid even if it returns.' },
      rship: { ar: 'مصاريف رجوع الأوردر من شركة الشحن.', en: 'What the courier charges to bring it back.' },
      cogs: { ar: 'تكلفة المنتج كنسبة من سعره، علشان نحسب الربح الضايع.', en: 'Product cost as a share of price, used to work out lost profit.' },
      red: { ar: 'لو قدرت تنزّل النسبة بكام نقطة (مثلاً من 20% لـ 15% اكتب 5).', en: 'By how many points you could cut the rate (from 20% to 15%, enter 5).' },
    },
  },
  'business-quick-check': {
    guide: {
      ar: ['جاوب على 9 أسئلة بنعم أو جزئياً أو لا، بصراحة مش بالمجاملة.', 'كل منطقة بتاخد درجة من 6.', 'هتشوف أضعف منطقة وتلات نصايح تبدأ بيها.'],
      en: ['Answer 9 questions with yes, partly or no, honestly.', 'Each area scores out of 6.', 'You get the weakest area and three tips to start with.'],
    },
    f: {},
  },
  'cpa-ltv-calculator': {
    guide: {
      ar: ['خد صرف الإعلانات وعدد العملاء الجدد (مش الأوردرات) لنفس الفترة.', 'اكتب هامش الربح الحقيقي بعد تكلفة المنتج.', 'النسبة المريحة LTV ÷ CAC غالباً 3 أو أكتر.'],
      en: ['Take ad spend and new customers (not orders) for the same period.', 'Enter the real margin after product cost.', 'A comfortable LTV ÷ CAC ratio is usually 3 or more.'],
    },
    f: {
      spend: { ar: 'صرف الإعلانات (وأي تكلفة اكتساب تانية) في الفترة.', en: 'Ad spend (and any other acquisition cost) in the period.' },
      cust: { ar: 'عملاء جداد اشتروا لأول مرة في نفس الفترة. العميل المتكرر ميتحسبش.', en: 'First-time buyers in the same period. Repeat customers do not count.' },
      aov: { ar: 'متوسط قيمة الطلب الواحد.', en: 'Average value of one order.' },
      margin: { ar: 'نسبة ربح الطلب بعد تكلفة المنتج. سعر 100 وتكلفة 70 يعني 30.', en: 'Order profit after product cost. Price 100, cost 70 means 30.' },
      orders: { ar: 'العميل بيشتري كام مرة في المتوسط طول علاقته معاك. لو مش عارف اكتب 1 وده الأمان.', en: 'How many times a customer buys on average over the relationship. If unsure, enter 1 to stay safe.' },
    },
  },
  'break-even-calculator': {
    guide: {
      ar: ['ابدأ بسعر البيع وتكلفة المنتج، وكمل الباقي لو عارفه.', 'الخانات اللي سيبتها فاضية بتتحسب صفر.', 'هتعرف ربح الأوردر، ROAS التعادل، وأقصى CPA تقدر تدفعه.'],
      en: ['Start with price and cost, then add the rest if you know it.', 'Empty optional fields count as zero.', 'You get profit per order, break-even ROAS and the maximum CPA you can pay.'],
    },
    f: {
      price: { ar: 'السعر النهائي اللي العميل بيدفعه.', en: 'The final price the customer pays.' },
      cost: { ar: 'تكلفة المنتج عليك: شراء أو تصنيع وتغليف.', en: 'What the product costs you: buying or making plus packaging.' },
      ship: { ar: 'الشحن اللي بتتحمله على الأوردر لو مش بيدفعه العميل.', en: 'Shipping you cover per order if the customer does not pay it.' },
      fee: { ar: 'رسوم الدفع أو التحصيل كنسبة من السعر (بوابة دفع، تحصيل عند الاستلام).', en: 'Payment or collection fees as a share of price (gateway, cash on delivery).' },
      ret: { ar: 'نسبة الأوردرات اللي بترجع.', en: 'Share of orders that come back.' },
      rship: { ar: 'مصاريف رجوع الأوردر الواحد.', en: 'Cost of bringing one order back.' },
      fixed: { ar: 'مصاريف شهرية ثابتة (إيجار، مرتبات). بنحسب منها كام أوردر تحتاج في الشهر.', en: 'Fixed monthly costs (rent, salaries), used to work out the orders you need per month.' },
    },
  },
  'project-brief-generator': {
    guide: {
      ar: ['اكتب نشاطك وهدفك في جملة واضحة.', 'حدد اللي محتاج يتسلم والبيانات اللي معاك.', 'انسخ الملخص أو ابعته على واتساب، وهنبدأ الاستشارة من نقطة واضحة.'],
      en: ['Write your business and your goal in a clear sentence.', 'State what must be delivered and what data you have.', 'Copy the brief or send it on WhatsApp so the call starts from a clear point.'],
    },
    f: {
      name: { ar: 'اختياري، علشان نرد عليك باسمك.', en: 'Optional, so we can reply by name.' },
      biz: { ar: 'نوع النشاط والمنصة اللي بتبيع عليها.', en: 'Type of business and the platform you sell on.' },
      svc: { ar: 'اختار أقرب خدمة، ولو مش متأكد اختار مش متأكد.', en: 'Pick the closest service, or choose Not sure.' },
      goal: { ar: 'السؤال اللي عاوز البيانات تجاوب عليه، أو القرار اللي محتاجه.', en: 'The question you want data to answer, or the decision you need.' },
      deliv: { ar: 'الشكل اللي عاوزه في الآخر: لوحة تحكم، تقرير، أتمتة.', en: 'The final shape you want: dashboard, report, automation.' },
      src: { ar: 'ملفات أو حسابات متاحة: Excel، Meta Ads، متجر.', en: 'Files or accounts you have: Excel, Meta Ads, a store.' },
      dl: { ar: 'تاريخ أو مدة تقريبية.', en: 'A date or rough timeframe.' },
      bud: { ar: 'اختياري، بيساعدني أقترح نطاق مناسب.', en: 'Optional, helps me suggest a suitable scope.' },
    },
  },
};
