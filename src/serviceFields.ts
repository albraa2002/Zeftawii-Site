// أسئلة خاصة بكل خدمة في الفورم. كل خدمة ليها أسئلتها وسؤال الرسالة بتاعها.
// الفهرس بيطابق contact.serviceOpts: 0 BI, 1 تسويق, 2 أتمتة, 3 أداة ذكية, 4 حسابات, 5 مشاريع, 6 مش متأكد
import type { Lang } from './i18n';

export type SField = { name: string; label: string; o: string[] };
export type SSvc = { prep: string[]; get: string[]; hint: string; msgLabel: string; msgPh: string; fields: SField[] };

const ar: SSvc[] = [
  { prep: ['عينة من ملفاتك أو أسماء المصادر (Excel، متجر، إعلانات)', 'الأسئلة اللي عاوز اللوحة تجاوب عليها', 'مين هيشوف اللوحة وكل قد إيه'], get: ['اقتراح مؤشرات KPIs مناسبة لهدفك', 'تصور مبدئي لصفحات اللوحة', 'تقدير واضح للمصادر والمجهود'], hint: 'لوحة تحكم / BI: جاوب على كام سؤال سريع عشان أجهزلك رد أدق.', msgLabel: 'إيه القرارات اللي عاوز اللوحة تساعدك فيها؟', msgPh: 'مثال: عاوز أعرف أنهي منتج وأنهي حملة بيكسبوا، وأتابع المبيعات يومياً.', fields: [
    { name: 'sources', label: 'مصدر البيانات', o: ['Excel أو Google Sheets', 'منصات إعلانات ومتجر', 'CRM أو قاعدة بيانات', 'مصادر متفرقة'] },
    { name: 'users', label: 'مين هيستخدم اللوحة؟', o: ['الإدارة', 'الفريق يومياً', 'عملاء خارج الشركة'] },
    { name: 'refresh', label: 'سرعة تحديث البيانات', o: ['شهري', 'أسبوعي', 'يومي', 'لحظي'] },
  ] },
  { prep: ['صرفك الشهري التقريبي ومنصاتك', 'أرقام آخر شهر: مبيعات، أوردرات، مرتجعات', 'نسبة تكلفة المنتج والشحن'], get: ['تشخيص أولي: فين الميزانية بتضيع', 'أولويات واضحة لتحسين التتبع والحملات', 'طريقة لقياس الربح الفعلي مش الظاهري'], hint: 'تحليلات تسويقية: كام سؤال عن حملاتك وتتبعك.', msgLabel: 'إيه أكبر مشكلة في إعلاناتك دلوقتي؟', msgPh: 'مثال: بصرف كتير ومش عارف أنهي حملة بتكسب، أو المرتجعات بتاكل الربح.', fields: [
    { name: 'channels', label: 'عدد المنصات الإعلانية', o: ['منصة واحدة', '2 إلى 3', 'أكتر من 3'] },
    { name: 'spend', label: 'الصرف الشهري التقريبي على الإعلانات', o: ['أقل من 500$', '500$ - 2000$', 'أكتر من 2000$', 'لسه بادئ'] },
    { name: 'tracking', label: 'التتبع (Pixel و UTMs)', o: ['مظبوط', 'جزئي', 'مش متأكد'] },
  ] },
  { prep: ['اسم التقرير وشكله الحالي (لو متاح)', 'عدد الملفات والمصادر اللي بيتجمع منها', 'كام ساعة بتروح عليه كل مرة'], get: ['تحديد أنسب أداة (Sheets أو Python أو SQL)', 'خطة أتمتة على مراحل تبدأ بالأكتر توفيراً', 'فحوصات جودة تمنع الأخطاء'], hint: 'أتمتة التقارير: عرّفني التقرير اللي بياكل وقتك.', msgLabel: 'إيه التقرير اللي عاوز تأتمته؟', msgPh: 'مثال: تقرير المبيعات الأسبوعي بيتجمع من 3 ملفات Excel ويتبعت للإدارة.', fields: [
    { name: 'freq', label: 'التقرير بيتعمل كل قد إيه؟', o: ['يومي', 'أسبوعي', 'شهري'] },
    { name: 'hours', label: 'بياخد وقت قد إيه كل مرة؟', o: ['أقل من ساعتين', '2 إلى 6 ساعات', 'أكتر من 6 ساعات'] },
    { name: 'src', label: 'البيانات جاية منين؟', o: ['ملفات Excel', 'Google Sheets', 'منصات (ملفات تصدير)', 'قاعدة بيانات'] },
  ] },
  { prep: ['وصف القرار اللي عاوز الأداة تدعمه', 'نوع البيانات التاريخية المتاحة ومدتها', 'مين هيستخدم الأداة'], get: ['رأي صريح: هل البيانات كفاية ولا لأ', 'فكرة تجربة صغيرة (Pilot) تثبت القيمة', 'وضوح في حدود الدقة المتوقعة'], hint: 'أداة ذكية / نموذج تنبؤي: عرّفني الفكرة وحجم البيانات.', msgLabel: 'إيه المشكلة اللي عاوز الأداة تحلها؟', msgPh: 'مثال: عاوز أعرف الأوردرات اللي هترجع قبل الشحن.', fields: [
    { name: 'goal', label: 'الأداة المطلوبة', o: ['توقّع المرتجعات', 'عملاء معرّضين للفقد', 'توقّع الطلب والمخزون', 'كشف شذوذ في التكلفة أو المبيعات', 'لسه مش محدد'] },
    { name: 'history', label: 'حجم البيانات التاريخية', o: ['أقل من 3 شهور', '3 إلى 12 شهر', 'سنة أو أكتر', 'مفيش بيانات منظمة'] },
    { name: 'users', label: 'مين هيستخدمها؟', o: ['الفريق يومياً', 'الإدارة', 'مدمجة في نظامنا'] },
  ] },
  { prep: ['عدد العملاء النشطين وأنواع الخدمات', 'أكتر مشكلة بتتكرر معاك مع العملاء', 'طريقة التواصل الحالية (واتساب، إيميل...)'], get: ['نظام بسيط لتسجيل الطلبات والموافقات', 'خطة للتعامل مع التعديلات خارج النطاق', 'شكل تقرير أسبوعي مناسب لعملائك'], hint: 'إدارة حسابات العملاء: كام سؤال عن شغلك مع العملاء.', msgLabel: 'احكيلي عن وضع حسابات العملاء عندك', msgPh: 'مثال: عندي 8 عملاء والتعديلات مفتوحة وبتتأخر في التسليم.', fields: [
    { name: 'clients', label: 'عدد العملاء النشطين', o: ['1 إلى 5', '6 إلى 15', 'أكتر من 15'] },
    { name: 'pain', label: 'أكبر مشكلة مع العملاء', o: ['تعديلات مفتوحة بلا نهاية', 'تأخير التسليم', 'العميل مش فاهم طلبه', 'فقدان عملاء'] },
    { name: 'mode', label: 'شكل التعاون المطلوب', o: ['دوام جزئي مستمر', 'لمشروع محدد', 'لسه مش محدد'] },
  ] },
  { prep: ['نوع المشروع والتسليمات المطلوبة', 'تاريخ مستهدف لو في موعد', 'حجم الفريق وأدوار الأفراد'], get: ['خطة بمراحل وتسليمات ومسؤوليات', 'قائمة بالمخاطر والاعتماديات المتوقعة', 'شكل تقرير حالة أسبوعي'], hint: 'إدارة المشاريع: كام سؤال عن مشروعك وفريقك.', msgLabel: 'احكيلي عن المشروع وإيه المطلوب', msgPh: 'مثال: متجر على سلة محتاج إدارة من البداية للتسليم.', fields: [
    { name: 'type', label: 'نوع المشروع', o: ['موقع أو متجر', 'حملات إعلانية وسوشيال', 'SEO', 'خليط'] },
    { name: 'team', label: 'حجم الفريق', o: ['1 إلى 2', '3 إلى 8', 'أكتر من 8'] },
    { name: 'pain', label: 'أكبر مشكلة في مشاريعك', o: ['تأخير من العميل', 'تغيير الطلبات', 'المهام مش واضحة', 'مفيش رؤية للتقدم'] },
  ] },
  { prep: ['جملة واحدة عن هدفك أو مشكلتك', 'أي أرقام أو ملفات عندك حالياً', 'مين هياخد القرار'], get: ['ترشيح الخدمة الأنسب لحالتك', 'أول خطوة عملية تقدر تبدأ بيها فوراً', 'توضيح لو احتجت مني حاجة تانية'], hint: 'مش متأكد؟ تمام، جاوب على سؤالين وأنا أرشحلك البداية.', msgLabel: 'احكيلي عن وضعك وإيه اللي عاوز توصله', msgPh: 'مثال: عندي متجر وعاوز أفهم ليه المبيعات واقفة.', fields: [
    { name: 'goal', label: 'هدفك الرئيسي', o: ['زيادة المبيعات', 'توفير وقت وتقليل الأخطاء', 'فهم العملاء', 'تنظيم الشغل والتسليم'] },
    { name: 'data', label: 'عندك بيانات حالياً؟', o: ['أيوه منظمة', 'أيوه متفرقة', 'لا'] },
  ] },
];

const en: SSvc[] = [
  { prep: ['A sample of your files or names of sources (Excel, store, ads)', 'The questions you want the dashboard to answer', 'Who will view it and how often'], get: ['Suggested KPIs for your goal', 'A first sketch of the dashboard pages', 'A clear estimate of sources and effort'], hint: 'Dashboard / BI: a few quick questions so I can reply more precisely.', msgLabel: 'Which decisions should the dashboard help you make?', msgPh: 'e.g. Which products and campaigns earn, and daily sales tracking.', fields: [
    { name: 'sources', label: 'Data sources', o: ['Excel or Google Sheets', 'Ad platforms and a store', 'CRM or database', 'Mixed sources'] },
    { name: 'users', label: 'Who will use it?', o: ['Management', 'The team daily', 'Clients outside the company'] },
    { name: 'refresh', label: 'Refresh frequency', o: ['Monthly', 'Weekly', 'Daily', 'Real time'] },
  ] },
  { prep: ['Approximate monthly spend and platforms', 'Last month numbers: sales, orders, returns', 'Product cost and shipping share'], get: ['A first diagnosis of where budget leaks', 'Clear priorities for tracking and campaigns', 'A way to measure real profit, not apparent profit'], hint: 'Marketing analytics: a few questions about your campaigns and tracking.', msgLabel: 'What is your biggest advertising problem right now?', msgPh: 'e.g. I spend a lot and do not know which campaign earns, or returns eat my profit.', fields: [
    { name: 'channels', label: 'Number of ad platforms', o: ['One', '2 to 3', 'More than 3'] },
    { name: 'spend', label: 'Approximate monthly ad spend', o: ['Under $500', '$500 - $2,000', 'Over $2,000', 'Just starting'] },
    { name: 'tracking', label: 'Tracking (Pixel and UTMs)', o: ['Solid', 'Partial', 'Not sure'] },
  ] },
  { prep: ['The report name and its current format (if any)', 'Number of files and sources it combines', 'Hours it takes each time'], get: ['The right tool (Sheets, Python or SQL)', 'A staged automation plan starting with the biggest time saver', 'Quality checks that prevent mistakes'], hint: 'Report automation: tell me which report eats your time.', msgLabel: 'Which report do you want to automate?', msgPh: 'e.g. A weekly sales report built from 3 Excel files and emailed to management.', fields: [
    { name: 'freq', label: 'How often is it made?', o: ['Daily', 'Weekly', 'Monthly'] },
    { name: 'hours', label: 'How long does it take each time?', o: ['Under 2 hours', '2 to 6 hours', 'More than 6 hours'] },
    { name: 'src', label: 'Where does the data come from?', o: ['Excel files', 'Google Sheets', 'Platforms (exports)', 'A database'] },
  ] },
  { prep: ['The decision you want the tool to support', 'What historical data you have and how long', 'Who will use the tool'], get: ['A candid view: is the data enough or not', 'A small pilot idea that proves value', 'Clarity on expected accuracy limits'], hint: 'Smart tool / predictive model: tell me the idea and the data you have.', msgLabel: 'What problem should the tool solve?', msgPh: 'e.g. Flag orders likely to be returned before shipping.', fields: [
    { name: 'goal', label: 'Tool needed', o: ['Predict returns', 'Customers at risk of leaving', 'Forecast demand and stock', 'Detect cost or sales anomalies', 'Not decided yet'] },
    { name: 'history', label: 'Historical data available', o: ['Under 3 months', '3 to 12 months', 'A year or more', 'No organized data'] },
    { name: 'users', label: 'Who will use it?', o: ['The team daily', 'Management', 'Built into our system'] },
  ] },
  { prep: ['Number of active clients and service types', 'The problem that repeats most with clients', 'How you communicate today (WhatsApp, email...)'], get: ['A simple system to log requests and approvals', 'A plan for out-of-scope changes', 'A weekly report format for your clients'], hint: 'Account management: a few questions about your client work.', msgLabel: 'Tell me about your client accounts today', msgPh: 'e.g. 8 clients, endless revisions and late deliveries.', fields: [
    { name: 'clients', label: 'Active clients', o: ['1 to 5', '6 to 15', 'More than 15'] },
    { name: 'pain', label: 'Biggest issue with clients', o: ['Endless open-ended revisions', 'Late delivery', 'Client does not understand the request', 'Clients leaving'] },
    { name: 'mode', label: 'Type of engagement', o: ['Ongoing part-time', 'A specific project', 'Not decided yet'] },
  ] },
  { prep: ['Project type and required deliverables', 'A target date if there is a deadline', 'Team size and roles'], get: ['A phased plan with deliverables and owners', 'A list of expected risks and dependencies', 'A weekly status report format'], hint: 'Project management: a few questions about your project and team.', msgLabel: 'Tell me about the project and what you need', msgPh: 'e.g. A Salla store that needs management from kickoff to handover.', fields: [
    { name: 'type', label: 'Project type', o: ['Website or store', 'Ad and social campaigns', 'SEO', 'A mix'] },
    { name: 'team', label: 'Team size', o: ['1 to 2', '3 to 8', 'More than 8'] },
    { name: 'pain', label: 'Biggest problem in your projects', o: ['Delays from the client', 'Changing requests', 'Unclear tasks', 'No visibility of progress'] },
  ] },
  { prep: ['One sentence about your goal or problem', 'Any numbers or files you have now', 'Who makes the decision'], get: ['A recommendation of the best-fit service', 'A first practical step you can start now', 'Clarity on anything else I need from you'], hint: 'Not sure? Fine. Answer two questions and I will suggest where to start.', msgLabel: 'Tell me your situation and what you want to achieve', msgPh: 'e.g. I own a store and want to understand why sales are flat.', fields: [
    { name: 'goal', label: 'Main goal', o: ['Increase sales', 'Save time, cut errors', 'Understand customers', 'Organize work and delivery'] },
    { name: 'data', label: 'Do you have data today?', o: ['Yes, organized', 'Yes, scattered', 'No'] },
  ] },
];

export const SF: Record<Lang, SSvc[]> = { ar, en };
