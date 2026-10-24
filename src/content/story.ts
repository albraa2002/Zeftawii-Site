// قصة البراء. مصدرها شهادة التخرج وبيان التقديرات (كنص فقط، من غير أي رقم قومي أو تاريخ ميلاد أو صور وثائق) وبيانات المستخدم. عدّل هنا بس.
import type { Lang } from '../i18n';
export type Story = { title: string; desc: string; h1: string; lead: string; factsT: string; facts: { v: string; l: string }[]; tlT: string; tl: { t: string; h: string; p: string }[]; courseT: string; courseP: string; courses: string[]; whyT: string; why: string[]; ctaT: string; ctaP: string };
export const story: Record<Lang, Story> = {
  ar: { title: 'قصتي: من الدقهلية للمعلوماتية الطبية لتحليل البيانات | Zeftawii', desc: 'قصة البراء إيهاب الزفتاوي: من دراسة المعلوماتية الطبية في جامعة المنصورة لشغل تحليل البيانات وإدارة الحسابات والمشاريع مع عملاء في مصر والسعودية.',
    h1: 'أنا مين، وجاي منين؟', lead: 'من الدقهلية، اتخرجت من كلية الحاسبات والمعلومات بجامعة المنصورة في تخصص المعلوماتية الطبية، وبشتغل من 2023 في تحليل البيانات وإدارة حسابات ومشاريع التسويق الرقمي. هنا الحكاية بدون تجميل.',
    factsT: 'بإيجاز',
    facts: [{ v: 'جامعة المنصورة', l: 'كلية الحاسبات والمعلومات' }, { v: 'المعلوماتية الطبية', l: 'بكالوريوس الحاسبات والمعلومات' }, { v: 'يناير 2026', l: 'تاريخ التخرج' }, { v: '135 ساعة', l: 'معتمدة في الدراسة' }, { v: 'A+', l: 'مشروع التخرج: Smart Oxygen Mold' }, { v: '2023', l: 'بداية الشغل العملي' }],
    tlT: 'المحطات',
    tl: [
      { t: 'البداية', h: 'من الدقهلية', p: 'بدأت من الدقهلية، ودخلت كلية الحاسبات والمعلومات في جامعة المنصورة بتخصص المعلوماتية الطبية، وهو تخصص بيجمع البرمجة والبيانات والقرار في سياق صحي.' },
      { t: 'خلال الدراسة', h: 'أساس البيانات', p: 'درست قواعد البيانات والطرق الإحصائية والتنقيب في البيانات ونظم دعم القرار والذكاء الاصطناعي. وده كان الأساس اللي بنيت عليه شغلي بعد كده.' },
      { t: '2023', h: 'أول شغل فعلي', p: 'دخلت السوق في أوائل 2023 داخل وكالات تسويق رقمي وتجارة إلكترونية. اتعلمت إن الرقم لوحده مش كفاية: لازم يتحول لقرار والعميل يفهمه.' },
      { t: 'التعلّم المستمر', h: 'دورات وشهادات', p: 'كملت بدورات في Power BI وPython وSQL وExcel وإدارة المشاريع والتسويق، وبرنامج DEPI. الشهادات في صفحة مخصصة.' },
      { t: '2026', h: 'تسليم وتخرج', p: 'أدرت تسليم وإقفال 23 مشروع موقع ومتجر، وفي يناير 2026 اتخرجت. ومشروع التخرج كان Smart Oxygen Mold وخد تقدير A+.' },
      { t: 'دلوقتي', h: 'Zeftawii | Decoding Data', p: 'بقدم خدماتي باسم Zeftawii: لوحات تحكم وتحليلات تسويق وأتمتة تقارير وإدارة حسابات ومشاريع لشركات في مصر والسعودية.' } ],
    courseT: 'اللي درسته وبيظهر في شغلي', courseP: 'من بيان تقديراتي، مواد بتدخل في شغلي اليومي:',
    courses: ['قواعد البيانات', 'طرق إحصائية', 'التنقيب في البيانات', 'نظم دعم القرار', 'الذكاء الاصطناعي', 'النمذجة والمحاكاة', 'تحليل الخوارزميات وهياكل البيانات', 'برمجة هيكلية', 'المعلوماتية الحيوية والطبية'],
    whyT: 'إزاي ده بيفيدك كعميل', why: ['بفهم البيانات بعمق تقني، ولسه بتعامل مع العميل بلغة بسيطة.', 'اتعودت أشتغل بنطاق عمل واضح وتسليمات أسبوعية.', 'بقول اللي البيانات بتثبته واللي هو افتراض، وده من خلفية بحثية.'],
    ctaT: 'خلينا نتكلم عن شغلك', ctaP: 'الاستشارة الأولى مجانية بدون التزام.' },
  en: { title: 'My story: from Dakahlia to medical informatics to data analytics | Zeftawii', desc: 'The story of Albaraa Ehab Elzeftawy: from studying medical informatics at Mansoura University to data analytics, account and project management with clients in Egypt and Saudi Arabia.',
    h1: 'Who I am and where I come from', lead: 'I am from Dakahlia, Egypt. I graduated from the Faculty of Computers and Information at Mansoura University in Medical Informatics, and since 2023 I have worked in data analytics and in digital marketing account and project management. This is the plain story.',
    factsT: 'At a glance',
    facts: [{ v: 'Mansoura University', l: 'Faculty of Computers and Information' }, { v: 'Medical Informatics', l: 'B.Sc. Computers and Information' }, { v: 'January 2026', l: 'Graduation' }, { v: '135 hours', l: 'Credit hours completed' }, { v: 'A+', l: 'Graduation project: Smart Oxygen Mold' }, { v: '2023', l: 'Started hands-on work' }],
    tlT: 'Milestones',
    tl: [
      { t: 'The start', h: 'From Dakahlia', p: 'I started in Dakahlia and joined the Faculty of Computers and Information at Mansoura University, specialising in Medical Informatics, which blends programming, data and decision-making in a health context.' },
      { t: 'During university', h: 'The data foundation', p: 'I studied databases, statistical methods, data mining, decision support systems and artificial intelligence. That is the base my work was built on.' },
      { t: '2023', h: 'First real work', p: 'I entered the market in early 2023 inside digital marketing and e-commerce agencies. I learned that a number is not enough: it must become a decision the client understands.' },
      { t: 'Ongoing learning', h: 'Courses and certificates', p: 'I kept learning through courses in Power BI, Python, SQL, Excel, project management and marketing, plus the DEPI programme. The certificates have their own page.' },
      { t: '2026', h: 'Delivery and graduation', p: 'I managed delivery and close-out of 23 website and store projects, and graduated in January 2026. My graduation project, Smart Oxygen Mold, earned an A+.' },
      { t: 'Today', h: 'Zeftawii | Decoding Data', p: 'I offer my services as Zeftawii: dashboards, marketing analytics, report automation, and account and project management for businesses in Egypt and Saudi Arabia.' } ],
    courseT: 'What I studied that shows up in my work', courseP: 'From my transcript, subjects that feed into my daily work:',
    courses: ['Databases', 'Statistical methods', 'Data mining', 'Decision support systems', 'Artificial intelligence', 'Modelling and simulation', 'Algorithms and data structures', 'Structured programming', 'Bioinformatics and medical informatics'],
    whyT: 'What this means for you as a client', why: ['I understand data with technical depth and still talk to clients in plain language.', 'I am used to working with a clear scope and weekly deliverables.', 'I say what the data proves and what is an assumption, a habit from academic training.'],
    ctaT: 'Let us talk about your business', ctaP: 'The first consultation is free with no commitment.' },
};
