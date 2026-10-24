// شهادات حقيقية (أسماء الدورات والجهة فقط، من غير أرقام التحقق). عدّل هنا بس.
export type C = { n: string; by?: string };
export const certsAll: { id: string; ar: string; en: string; items: C[] }[] = [
  { id: 'data', ar: 'تحليل البيانات وBI', en: 'Data analytics and BI', items: [
    { n: 'Power BI DAX', by: 'Udemy' }, { n: 'Learn Microsoft Power BI in Microsoft Fabric', by: 'Udemy' }, { n: 'SQL', by: 'Udemy' },
    { n: 'Python Data Analysis and Visualization', by: 'Udemy' }, { n: 'Python for Data Science: NumPy + Pandas', by: 'Udemy' }, { n: 'Python Data Analysis Full Bootcamp', by: 'Udemy' },
    { n: 'Python', by: 'Udemy' }, { n: 'Visualization', by: 'Udemy' }, { n: 'R Programming Language', by: 'Udemy' }, { n: 'Mastering Python and R for Scientific Data Analysis', by: 'Udemy' },
    { n: 'SAP S/4HANA Embedded Analytics', by: 'Udemy' }, { n: 'Microsoft Excel: Formulas, Charts, Pivot Tables', by: 'Udemy' }, { n: 'Microsoft Excel', by: 'Udemy' },
    { n: 'Exploratory Data Analysis in Python', by: 'DataCamp' }, { n: 'Introduction to Python', by: 'DataCamp' }, { n: 'Data Analysis in Excel', by: 'DataCamp' }, { n: 'Data Analysis in Google Sheets', by: 'DataCamp' },
    { n: 'Learning Data Analytics 1: Foundations', by: 'LinkedIn Learning' }, { n: 'Foundations of Data Science' }, { n: 'Get Started with Python' }, { n: 'Presenting Data', by: 'hp LIFE' } ] },
  { id: 'pm', ar: 'إدارة المشاريع والتسويق', en: 'Project management and marketing', items: [
    { n: 'Professional Diploma of Marketing Manager Business Partner', by: 'MTF Institute' }, { n: 'Professional Certification AVPC', by: 'MTF Institute' },
    { n: 'Certified Professional in Project Management (CPPM)', by: 'Udemy' }, { n: 'Certified Project Manager (CPM-IAPM)', by: 'Udemy' }, { n: 'Agile Project Management' },
    { n: 'Economics and Management', by: 'Udemy' }, { n: 'Excellence in Problem Solving and Critical Thinking', by: 'Udemy' },
    { n: 'Social Media Marketing', by: 'hp LIFE' }, { n: 'Customer Relationship Management', by: 'hp LIFE' }, { n: 'Fundamentals of Selling' }, { n: 'Selling Online', by: 'hp LIFE' }, { n: 'Effective Business Websites', by: 'hp LIFE' }, { n: 'Business Email', by: 'hp LIFE' } ] },
  { id: 'biz', ar: 'أساسيات الأعمال والمالية', en: 'Business and finance basics', items: [
    { n: 'Basics of Finance', by: 'hp LIFE' }, { n: 'Profit and Loss', by: 'hp LIFE' }, { n: 'Cash Flow', by: 'hp LIFE' }, { n: 'Sales Forecasting', by: 'hp LIFE' }, { n: 'Setting Prices', by: 'hp LIFE' },
    { n: 'Unique Value Proposition', by: 'hp LIFE' }, { n: 'Your Target Audience', by: 'hp LIFE' }, { n: 'Marketing: Benefits vs. Features', by: 'hp LIFE' }, { n: 'Finding Funding', by: 'hp LIFE' }, { n: 'Effective Presentations', by: 'hp LIFE' }, { n: 'AI for Beginners', by: 'hp LIFE' }, { n: 'TOEFL Preparation', by: 'Udemy' } ] },
];
export const certCount = certsAll.reduce((a, g) => a + g.items.length, 0);
