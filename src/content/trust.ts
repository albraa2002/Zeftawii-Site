// شهادات (من ملفات حقيقية عند صاحب الموقع) وأسعار تقديرية "تبدأ من". عدّل هنا بس.
export type Cert = { name: string; by?: string };
export const certGroups: { ar: string; en: string; items: Cert[] }[] = [
  { ar: 'تحليل البيانات وBI', en: 'Data analytics and BI', items: [
    { name: 'Power BI DAX', by: 'Udemy' }, { name: 'Learn Microsoft Power BI in Microsoft Fabric', by: 'Udemy' },
    { name: 'SQL', by: 'Udemy' }, { name: 'Python Data Analysis and Visualization', by: 'Udemy' },
    { name: 'Python for Data Science: NumPy + Pandas', by: 'Udemy' }, { name: 'Python Data Analysis Full Bootcamp', by: 'Udemy' },
    { name: 'Exploratory Data Analysis in Python', by: 'DataCamp' }, { name: 'Data Analysis in Excel', by: 'DataCamp' },
    { name: 'Data Analysis in Google Sheets', by: 'DataCamp' }, { name: 'Microsoft Excel: Formulas, Charts, Pivot Tables', by: 'Udemy' },
    { name: 'Foundations of Data Science' }, { name: 'Get Started with Python' },
  ] },
  { ar: 'إدارة المشاريع والتسويق', en: 'Project management and marketing', items: [
    { name: 'Professional Diploma of Marketing Manager Business Partner', by: 'MTF Institute' },
    { name: 'Certified Professional in Project Management (CPPM)', by: 'Udemy' },
    { name: 'Certified Project Manager (CPM-IAPM)', by: 'Udemy' }, { name: 'Agile Project Management' },
    { name: 'Social Media Marketing', by: 'hp LIFE' }, { name: 'Customer Relationship Management', by: 'hp LIFE' },
  ] },
];

export type Pack = { id: string; ar: { n: string; d: string; inc: string[]; time: string }; en: { n: string; d: string; inc: string[]; time: string }; from: number; per?: 'month' };
// أسعار تقديرية بالدولار "تبدأ من". غيّر الأرقام هنا وهتتحدّث في الصفحة.
export const packs: Pack[] = [
  { id: 'audit', from: 80,
    ar: { n: 'مراجعة وتحليل', d: 'لو عايز تعرف المشكلة فين قبل ما تصرف أكتر.', inc: ['مراجعة بيانات حملاتك أو متجرك', 'تقرير بالنتائج والأرقام اللي تهم القرار', 'توصيات مرتبة بالأولوية'], time: 'عادةً 3 إلى 5 أيام عمل' },
    en: { n: 'Review and analysis', d: 'When you want to find the problem before spending more.', inc: ['A review of your campaign or store data', 'A report with the numbers that matter for the decision', 'Recommendations ranked by priority'], time: 'Usually 3 to 5 working days' } },
  { id: 'starter', from: 200,
    ar: { n: 'لوحة تحكم Starter', d: 'لوحة واضحة لمصدر بيانات واحد.', inc: ['مصدر بيانات واحد (Excel أو Sheets أو ملف)', 'من 5 إلى 8 مؤشرات مرتبطة بقراراتك', 'تسليم بشرح بسيط'], time: 'عادةً 5 إلى 10 أيام عمل' },
    en: { n: 'Starter dashboard', d: 'A clear dashboard for one data source.', inc: ['One data source (Excel, Sheets or a file)', '5 to 8 KPIs tied to your decisions', 'Handover with a simple walkthrough'], time: 'Usually 5 to 10 working days' } },
  { id: 'business', from: 450,
    ar: { n: 'لوحة تحكم Business', d: 'لوحة لعدة مصادر بتتحدّث لوحدها.', inc: ['عدة مصادر بيانات في لوحة واحدة', 'تحديث تلقائي', 'تدريب فريقك على الاستخدام', 'فترة دعم بعد التسليم'], time: 'عادةً 2 إلى 3 أسابيع' },
    en: { n: 'Business dashboard', d: 'A multi-source dashboard that refreshes by itself.', inc: ['Several data sources in one dashboard', 'Automatic refresh', 'Training for your team', 'A support period after delivery'], time: 'Usually 2 to 3 weeks' } },
  { id: 'auto', from: 120, per: 'month',
    ar: { n: 'أتمتة التقارير الشهرية', d: 'تقاريرك تتجهز لوحدها بدل ساعات يدوي.', inc: ['تجهيز تقرير دوري بصيغة ثابتة', 'تنضيف البيانات قبل كل تقرير', 'ملخص مكتوب بالنتائج'], time: 'اشتراك شهري' },
    en: { n: 'Monthly report automation', d: 'Reports that prepare themselves instead of hours by hand.', inc: ['A recurring report in a fixed format', 'Data cleaning before every report', 'A written summary of the results'], time: 'Monthly' } },
  { id: 'pm', from: 300, per: 'month',
    ar: { n: 'إدارة مشاريع وحسابات تسويق', d: 'حد منظّم بيمسك التسليمات والعملاء.', inc: ['نطاق عمل مكتوب وتسليمات أسبوعية', 'تقرير حالة أسبوعي من صفحة واحدة', 'متابعة العملاء والمواعيد'], time: 'اشتراك شهري، حسب عدد المشاريع' },
    en: { n: 'Marketing project and account management', d: 'An organized person who owns deliverables and clients.', inc: ['A written scope and weekly deliverables', 'A one-page weekly status report', 'Client and deadline follow-up'], time: 'Monthly, depending on the number of projects' } },
];
