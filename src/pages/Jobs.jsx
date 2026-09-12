import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Search,
  Building2,
  MapPin,
  Calendar,
  Clock,
  ExternalLink,
  ChevronLeft,
  X,
  FileCheck2,
  Award,
  Filter,
  CheckCircle2,
  Sparkles,
  AlertCircle,
  GraduationCap,
  Users,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';

// Logos from assets
import nesr from '../assets/nesr.png';
import nesr1 from '../assets/nesr1.png';
import nesr2 from '../assets/nesr2.png';
import nesr3 from '../assets/nesr3.png';
import nesr4 from '../assets/nesr4.png';
import nesr5 from '../assets/nesr5.png';
import nesr6 from '../assets/nesr6.png';
import nesr7 from '../assets/nesr7.png';
import nesr8 from '../assets/nesr8.png';
import nesr9 from '../assets/nesr9.png';
import nesr10 from '../assets/nesr10.png';
import eteestalat from '../assets/etesalatBASE.png';

// Job types
const jobTypes = [
  { id: 'all', label: 'جميع أنواع العقود' },
  { id: 'permanent', label: 'تعيين دائم (تثبيت)' },
  { id: 'contract', label: 'تعاقد سنوي حكومي' },
  { id: 'leadership', label: 'وظائف قيادية وإشرافية' },
  { id: 'graduates', label: 'برامج الخريجين وتدريب' }
];

// Locations
const locations = [
  'جميع المحافظات',
  'العاصمة الإدارية الجديدة',
  'القاهرة الكبرى',
  'الجيزة',
  'الإسكندرية',
  'محافظات الصعيد',
  'محافظات الدلتا والقناة'
];

// Jobs Dataset across Egyptian Ministries
const jobsData = [
  {
    id: 'job-1',
    title: 'مهندس برمجيات ونظم معلومات رقمية',
    ministryId: 'mcit',
    ministryName: 'وزارة الاتصالات وتكنولوجيا المعلومات',
    logo: eteestalat,
    department: 'قطاع البنية التحتية والتحول الرقمي',
    location: 'العاصمة الإدارية الجديدة',
    type: 'contract',
    typeLabel: 'تعاقد سنوي حكومي',
    grade: 'الدرجة الثالثة التخصصية',
    deadline: '2025-04-15',
    daysRemaining: 12,
    vacancies: 15,
    qualification: 'بكالوريوس هندسة حاسبات / حاسبات ومعلومات بتقدير جيد على الأقل',
    experience: 'سنتان في تطوير البرمجيات السحابية وأنظمة الويب الموزعة',
    ageLimit: 'ألا يزيد السن عن 35 عاماً في تاريخ نشر الإعلان',
    description: 'المشاركة في تصميم وتطوير المنظومات الرقمية الوطنية، والربط الشبكي لقواعد البيانات الحكومية وتأمين واجهات برمجة التطبيقات APIs لمنصة مصر الرقمية.',
    requirements: [
      'إجادة لغات البرمجة (Node.js, Python, or Go) وأطر العمل الحديثة.',
      'خبرة في قواعد البيانات PostgreSQL وMongoDB وأنظمة الحاويات Docker.',
      'معرفة جيدة بمبادئ هندسة البرمجيات والـ Microservices.',
      'إجادة اللغة الإنجليزية الفنية كتابة ومحادثة.'
    ],
    documents: [
      'أصل المؤهل الدراسي وشهادة التخرج وبيان الدرجات',
      'صورة بطاقة الرقم القومي سارية المفعول (وجهين)',
      'الموقف من التجنيد للذكور أو الخدمة العامة للإناث',
      'صحيفة الحالة الجنائية حديثة موجهة لوزارة الاتصالات',
      'شهادة القيد بنقابة المهندسين'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-2',
    title: 'أخصائي أمن سيبراني واختبار اختراق',
    ministryId: 'mcit',
    ministryName: 'وزارة الاتصالات وتكنولوجيا المعلومات',
    logo: eteestalat,
    department: 'المركز الوطني للاستعداد لطوارئ الحاسبات (EG-CERT)',
    location: 'القرية الذكية، الجيزة',
    type: 'contract',
    typeLabel: 'تعاقد سنوي حكومي',
    grade: 'أخصائي أمن تكنولوجيا معلومات',
    deadline: '2025-04-20',
    daysRemaining: 17,
    vacancies: 8,
    qualification: 'مؤهل عالٍ متخصص في الأمن السيبراني أو هندسة الاتصالات والحاسبات',
    experience: '3 سنوات في مراكز العمليات الأمنية SOC واختبار الاختراق',
    ageLimit: 'ألا يزيد السن عن 35 عاماً',
    description: 'رصد الهجمات والتهديدات السيبرانية على الشبكات الحكومية الحيوية، وإجراء الفحوصات الدورية للثغرات واختبارات الاختراق لأنظمة الدولة.',
    requirements: [
      'شهادات مهنية مفضلة (CEH, OSCP, CISSP).',
      'خبرة عملية في أدوات التحليل الأمني مثل SIEM وWireshark وBurp Suite.',
      'القدرة على التعامل مع حوادث الاختراق والاستجابة الفورية للمخاطر.'
    ],
    documents: [
      'شهادة التخرج الأصلية موثقة',
      'بطاقة الرقم القومي سارية',
      'شهادة القيد بالنقابة المختصة',
      'السيرة الذاتية المفصلة والشهادات المهنية المعتمدة'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-3',
    title: 'معلم مساعد لغة إنجليزية (مسابقة 30 ألف معلم)',
    ministryId: 'education',
    ministryName: 'وزارة التربية والتعليم والتعليم الفني',
    logo: nesr5,
    department: 'مديريات التربية والتعليم بالمحافظات',
    location: 'جميع المحافظات',
    type: 'permanent',
    typeLabel: 'تعيين دائم (تثبيت)',
    grade: 'معلم مساعد - الدرجة الثالثة التخصصية',
    deadline: '2025-04-10',
    daysRemaining: 7,
    vacancies: 120,
    qualification: 'كليات التربية (لغة إنجليزية) أو كليات الألسن/الآداب مع دبلوم تربوي',
    experience: 'خريج دفعات حديثة (2018 حتى 2024)',
    ageLimit: 'ألا يزيد عمر المتقدم عن 40 عاماً',
    description: 'التدريس بمدارس التعليم الأساسي والرسمية لغات، وتطبيق استراتيجيات التعلم التفاعلي والمنظومة التعليمية الرقمية الجديدة.',
    requirements: [
      'اجتياز الاختبارات الإلكترونية بمركز تقييم القدرات والمسابقات التابع للتنظيم والإدارة.',
      'اجتياز التدريب البدني والذهني المعتمد والمقابلة الشخصية.',
      'أن يكون المتقدم مقيماً بالمحافظة طبقاً لما هو مدون ببطاقة الرقم القومي.'
    ],
    documents: [
      'المؤهل الدراسي الأعلى وشهادة الدبلوم التربوي',
      'بطاقة الرقم القومي سارية',
      'الموقف من الخدمة العسكرية / العامة',
      'إيصال سداد الرسوم المقررة بحساب الجهاز المركزي للتنظيم والإدارة'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-4',
    title: 'طبيب مقيم (رعاية مركزة وطوارئ)',
    ministryId: 'health',
    ministryName: 'وزارة الصحة والسكان',
    logo: nesr7,
    department: 'الهيئة العامة للمستشفيات والمعاهد التعليمية',
    location: 'القاهرة الكبرى',
    type: 'permanent',
    typeLabel: 'تعيين دائم (تثبيت)',
    grade: 'طبيب بشري مقيم',
    deadline: '2025-04-25',
    daysRemaining: 22,
    vacancies: 40,
    qualification: 'بكالوريوس الطب والجراحة وقضاء فترة التدريب الإجباري (الامتياز)',
    experience: 'حاصل على ترخيص مزاولة المهنة من نقابة الأطباء ووزارة الصحة',
    ageLimit: 'ألا يزيد السن عن 35 عاماً',
    description: 'تقديم الرعاية الطبية الفائقة للمرضى بأقسام الطوارئ والرعايات المركزة بالمستشفيات التعليمية ومراكز الأورام والقلب.',
    requirements: [
      'شهادة مزاولة المهنة صادرة من وزارة الصحة.',
      'كارنيه نقابة الأطباء ساري المفعول.',
      'شهادات الإنعاش القلبي المتقدم ACLS وATLS تمثل ميزة تفضيلية.'
    ],
    documents: [
      'أصل شهادة التخرج وشهادة الامتياز',
      'ترخيص مزاولة المهنة وكارنيه النقابة',
      'بطاقة الرقم القومي وفيش جنائي موجه للهيئة'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-5',
    title: 'مهندس مشروعات بنية تحتية وإشراف مدني',
    ministryId: 'housing',
    ministryName: 'وزارة الإسكان والمرافق والمجتمعات العمرانية',
    logo: nesr8,
    department: 'هيئة المجتمعات العمرانية الجديدة',
    location: 'العاصمة الإدارية الجديدة',
    type: 'contract',
    typeLabel: 'تعاقد سنوي حكومي',
    grade: 'الدرجة الثالثة التخصصية - هندسة',
    deadline: '2025-04-18',
    daysRemaining: 15,
    vacancies: 18,
    qualification: 'بكالوريوس هندسة مدنية من إحدى الجامعات المصرية المعتمدة',
    experience: 'خبرة من 3 إلى 5 سنوات في الإشراف على مشاريع المرافق وشبكات المياه والخرسانات',
    ageLimit: 'ألا يزيد السن عن 36 عاماً',
    description: 'متابعة تنفيذ مشروعات الإسكان وسكن مصر والمحاور بالمدن الذكية الجديدة، ومراجعة المواصفات القياسية وضمان الجودة الميدانية.',
    requirements: [
      'إجادة العمل على برامج التصميم والإشراف الهندسي (AutoCAD, Civil 3D, Primavera).',
      'معرفة شاملة بكودات البناء المصرية ومواصفات المرافق العامة.',
      'القدرة على العمل الميداني وإعداد التقارير الفنية الدورية.'
    ],
    documents: [
      'شهادة التخرج وكارنيه نقابة المهندسين',
      'شهادات الخبرة السابقة موثقة',
      'بطاقة الرقم القومي والموقف التجنيدي'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-6',
    title: 'مهندس إشارات وتحكم آلي بالسكك الحديدية',
    ministryId: 'transport',
    ministryName: 'وزارة النقل',
    logo: nesr9,
    department: 'الهيئة القومية لسكك حديد مصر',
    location: 'الإسكندرية',
    type: 'permanent',
    typeLabel: 'تعيين دائم (تثبيت)',
    grade: 'مهندس ثالث إلكترونيات وتحكم',
    deadline: '2025-04-12',
    daysRemaining: 9,
    vacancies: 25,
    qualification: 'بكالوريوس هندسة (كهرباء / إلكترونيات واتصالات / تحكم آلي)',
    experience: 'حديث تخرج أو خبرة حتى عامين في أنظمة التحكم PLC وSCADA',
    ageLimit: 'ألا يزيد السن عن 30 عاماً',
    description: 'صيانة وتشغيل أبراج الإشارات الإلكترونية الحديثة ومتابعة سلامة مسارات القطارات السريعة ومترو الأنفاق وفق أحدث المعايير الدولية.',
    requirements: [
      'اجتياز الكشف الطبي الشامل وتوافق اللياقة البدنية والبصرية.',
      'اجتياز الاختبارات النفسية والسمات المعتمدة من الهيئة.',
      'الاستعداد للعمل بنظام النوبتجات الليلية ومواقع الخطوط الحديدية.'
    ],
    documents: [
      'المؤهل الدراسي والقيد بنقابة المهندسين',
      'شهادة أداء الخدمة العسكرية قدوة حسنة',
      'صحيفة الحالة الجنائية سارية'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-7',
    title: 'محاسب مالي ومراجع ضرائب مميكنة',
    ministryId: 'finance',
    ministryName: 'وزارة المالية',
    logo: nesr4,
    department: 'مصلحة الضرائب المصرية',
    location: 'الجيزة',
    type: 'permanent',
    typeLabel: 'تعيين دائم (تثبيت)',
    grade: 'مأمور ضرائب فاحص - الدرجة الثالثة',
    deadline: '2025-04-22',
    daysRemaining: 19,
    vacancies: 50,
    qualification: 'بكالوريوس تجارة (شعبة محاسبة) بتقدير عام جيد جداً على الأقل',
    experience: 'معرفة قوية بالمنظومات الضريبية الرقمية ومعايير المحاسبة المصرية',
    ageLimit: 'ألا يزيد السن عن 32 عاماً',
    description: 'فحص الإقرارات الضريبية الرقمية ومطابقة الفواتير والإيصالات الإلكترونية عبر المنظومات المركزية الذكية لمصلحة الضرائب.',
    requirements: [
      'إجادة استخدام برامج التحليل المالي وجداول البيانات المتقدمة Excel.',
      'الإلمام بقوانين الضرائب العامة وضريبة القيمة المضافة والإجراءات الضريبية الموحدة.',
      'اجتياز اختبارات الحاسب الآلي واللغة والمقابلة التخصصية.'
    ],
    documents: [
      'شهادة المؤهل وشهادة التقديرات التراكمية',
      'بطاقة الرقم القومي سارية',
      'الموقف من التجنيد / الخدمة العامة',
      'فيش وتشبيه موجه لوزارة المالية'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-8',
    title: 'باحث شؤون قانونية وتوثيق مميكن',
    ministryId: 'justice',
    ministryName: 'وزارة العدل',
    logo: nesr3,
    department: 'مصلحة الشهر العقاري والتوثيق',
    location: 'محافظات الصعيد',
    type: 'permanent',
    typeLabel: 'تعيين دائم (تثبيت)',
    grade: 'باحث ثالث قانون',
    deadline: '2025-04-30',
    daysRemaining: 27,
    vacancies: 35,
    qualification: 'ليسانس حقوق أو شريعة وقانون بتقدير جيد على الأقل',
    experience: 'لا يُشترط وجود خبرة سابقة (تدريب مكثف بأكاديمية العدالة)',
    ageLimit: 'ألا يزيد السن عن 35 عاماً',
    description: 'مراجعة وتوثيق العقود والمعاملات الرسمية بمكاتب الشهر العقاري والتوثيق المميكنة وتقديم الخدمات الإلكترونية للمواطنين.',
    requirements: [
      'إجادة التعامل مع تطبيقات الحاسب الآلي والأنظمة الرقمية لمصلحة التوثيق.',
      'معرفة متعمقة بالقانون المدني وقوانين التسجيل العقاري والملكية.',
      'حسن السيرة والسمعة واجتياز المقابلة الشخصية المقررة.'
    ],
    documents: [
      'شهادة الليسانس الأصلية',
      'صورة بطاقة الرقم القومي',
      'شهادة الميلاد المميكنة',
      'الموقف التجنيدي للذكور'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-9',
    title: 'مدير عام الإدارة العامة للمشروعات الخضراء',
    ministryId: 'environment',
    ministryName: 'وزارة البيئة',
    logo: nesr1,
    department: 'جهاز شئون البيئة',
    location: 'العاصمة الإدارية الجديدة',
    type: 'leadership',
    typeLabel: 'وظائف قيادية وإشرافية',
    grade: 'مدير عام (درجة وظيفية قيادية)',
    deadline: '2025-04-08',
    daysRemaining: 5,
    vacancies: 2,
    qualification: 'مؤهل عالٍ مناسب يتواءم مع طبيعة العمل البيئي والإداري',
    experience: 'قضاء سنة على الأقل في وظيفة من المستوى الأدنى مباشرة (الدرجة الأولى)',
    ageLimit: 'وفقاً لقانون الخدمة المدنية رقم 81 لسنة 2016',
    description: 'الإشراف على إعداد وتنفيذ السياسات والمشروعات القومية المتعلقة بالحد من التلوث والتحول للاقتصاد الأخضر ومتابعة ملفات المناخ.',
    requirements: [
      'القدرة العالية على القيادة والتوجيه وإدارة فرق العمل والمشروعات الكبرى.',
      'إجادة اللغة الإنجليزية وإعداد التقارير الدبلوماسية والبيئية مع الشركاء الدوليين.',
      'تقديم مقترح تطويري وافٍ للإدارة العامة للمشروعات الخضراء.'
    ],
    documents: [
      'بيان حالة وظيفية معتمد يوضح تقارير الكفاية والخبرات القيادية',
      'المقترح التطويري طبقاً للنموذج المعتمد من الجهاز المركزي للتنظيم والإدارة',
      'شهادات الدورات التدريبية المعتمدة في الإدارة واللغات والحاسب',
      'عدد 6 صور شخصية حديثة'
    ],
    applicationUrl: 'https://jobs.caoa.gov.eg/'
  },
  {
    id: 'job-10',
    title: 'برنامج تدريب وتشغيل شباب الخريجين بالذكاء الاصطناعي',
    ministryId: 'mcit',
    ministryName: 'وزارة الاتصالات وتكنولوجيا المعلومات',
    logo: eteestalat,
    department: 'معهد تكنولوجيا المعلومات (ITI) بالشراكة مع الشركات الدولية',
    location: 'جميع المحافظات',
    type: 'graduates',
    typeLabel: 'برامج الخريجين وتدريب',
    grade: 'منحة تدريبية وتوظيف ممولة بالكامل مع مكافأة شهرية',
    deadline: '2025-05-05',
    daysRemaining: 32,
    vacancies: 250,
    qualification: 'خريجو جميع الجامعات المصرية (دفعات 2020 إلى 2024)',
    experience: 'لا يُشترط وجود خبرة سابقة (يتم اجتياز اختبار الذكاء واللغة)',
    ageLimit: 'ألا يزيد السن عن 28 عاماً',
    description: 'برنامج تدريبي مكثف لمدة 6 أشهر يؤهل للعمل الفوري في تخصصات الذكاء الاصطناعي وعلوم البيانات وتطوير الواجهات مع كبرى الشركات التكنولوجية.',
    requirements: [
      'التفرغ الكامل طوال فترة المنحة والبرنامج التدريبي.',
      'اجتياز اختبارات الذكاء IQ واختبار إتقان اللغة الإنجليزية.',
      'الالتزام بمعايير الحضور والمشاريع التطبيقية.'
    ],
    documents: [
      'شهادة التخرج الأصلية',
      'صورة بطاقة الرقم القومي',
      'الموقف من الخدمة العسكرية / الخدمة العامة',
      'سيرة ذاتية حديثة'
    ],
    applicationUrl: 'https://iti.gov.eg'
  }
];

const Jobs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMinistry, setSelectedMinistry] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('جميع المحافظات');
  const [activeJobModal, setActiveJobModal] = useState(null);

  // Extract unique ministries from the jobs list for filter
  const uniqueMinistries = useMemo(() => {
    const list = [{ id: 'all', name: 'جميع الوزارات والجهات' }];
    const seen = new Set();
    jobsData.forEach(j => {
      if (!seen.has(j.ministryName)) {
        seen.add(j.ministryName);
        list.push({ id: j.ministryName, name: j.ministryName });
      }
    });
    return list;
  }, []);

  // Filter jobs logic
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.qualification.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.ministryName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesMinistry =
        selectedMinistry === 'all' || job.ministryName === selectedMinistry;

      const matchesType =
        selectedType === 'all' || job.type === selectedType;

      const matchesLocation =
        selectedLocation === 'جميع المحافظات' ||
        job.location === selectedLocation ||
        job.location === 'جميع المحافظات';

      return matchesSearch && matchesMinistry && matchesType && matchesLocation;
    });
  }, [searchTerm, selectedMinistry, selectedType, selectedLocation]);

  return (
    <div className="min-h-screen bg-[#f5f7fa] dark:bg-slate-950 pb-24 transition-colors duration-200" dir="rtl">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b2a47] via-[#1b2a47] to-[#142036] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#d8bb88]">
        {/* Background Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#d8bb88]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d8bb88] font-bold text-xs sm:text-sm mb-6 shadow-sm">
              <Briefcase className="w-4 h-4 text-[#d8bb88]" />
              <span>بوابة وظائف الوزارات والجهاز الإداري للدولة</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              وظائف <span className="text-[#d8bb88]">الوزارات المصرية</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              تصفح أحدث الوظائف الحكومية الشاغرة بمختلف الوزارات والهيئات العامة، واطلع على الشروط والمستندات وطرق التقديم الرسمية المعتمدة.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                { number: '148+', label: 'وظيفة حكومية شاغرة' },
                { number: '18', label: 'وزارة وهيئة معلنة' },
                { number: '100%', label: 'تقديم إلكتروني رسمي' },
                { number: '35+', label: 'فرصة عمل جديدة هذا الأسبوع' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#d8bb88] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SEARCH & ADVANCED FILTERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-30">
        <div className="bg-white dark:bg-slate-900 rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 shadow-xl border border-gray-100 dark:border-slate-800 space-y-4">
          {/* Search bar + Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Search Input */}
            <div className="relative md:col-span-6">
              <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="ابحث بالمسمى الوظيفي، التخصص، أو المؤهل المطلوب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3.5 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#1b2a47] dark:focus:ring-[#d8bb88] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Ministry Filter Select */}
            <div className="md:col-span-3">
              <select
                value={selectedMinistry}
                onChange={(e) => setSelectedMinistry(e.target.value)}
                className="w-full py-3.5 px-4 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b2a47] dark:focus:ring-[#d8bb88] cursor-pointer"
              >
                {uniqueMinistries.map(min => (
                  <option key={min.id} value={min.id}>
                    {min.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Select */}
            <div className="md:col-span-3">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full py-3.5 px-4 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1b2a47] dark:focus:ring-[#d8bb88] cursor-pointer"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Job Type Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 scrollbar-none border-t border-gray-100 dark:border-slate-800">
            <span className="text-xs font-bold text-gray-400 shrink-0 ml-2 hidden sm:inline-flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              نوع الوظيفة:
            </span>
            {jobTypes.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1b2a47] text-white shadow-md dark:bg-[#d8bb88] dark:text-[#1b2a47]'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= JOBS CARDS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#1b2a47] dark:text-white">
            فرص العمل الحكومية المتاحة
          </h2>
          <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">
            تم العثور على <strong className="text-[#1b2a47] dark:text-[#d8bb88] font-black">{filteredJobs.length}</strong> وظيفة
          </span>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-[28px] p-12 text-center border border-gray-200 dark:border-slate-800 shadow-sm my-8">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1b2a47] dark:text-white mb-2">
              لم نجد وظائف مطابقة لمعايير البحث الحالية
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              جرب تغيير كلمات البحث، أو تصفية نوع العقد أو اختيار جميع المحافظات لعرض كافة الإعلانات الشاغرة.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedMinistry('all');
                setSelectedType('all');
                setSelectedLocation('جميع المحافظات');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1b2a47] text-white text-sm font-bold hover:bg-blue-900 transition-colors cursor-pointer"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
                className="bg-white dark:bg-slate-900 rounded-[28px] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div className="p-4 sm:p-7">
                  {/* Ministry Header & Badges */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-2 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                        <img
                          src={job.logo}
                          alt={job.ministryName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-0.5">
                          {job.ministryName}
                        </span>
                        <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500">
                          {job.department}
                        </span>
                      </div>
                    </div>

                    {/* Deadline Badge */}
                    <div className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-[11px] sm:text-xs font-black border border-amber-200/50 dark:border-amber-800/40 shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      <span>متبقي {job.daysRemaining} يوم</span>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-base sm:text-xl font-black text-[#1b2a47] dark:text-white leading-snug mb-3 group-hover:text-blue-900 dark:group-hover:text-[#d8bb88] transition-colors">
                    {job.title}
                  </h3>

                  {/* Summary / Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed font-normal">
                    {job.description}
                  </p>

                  {/* Chips: Location, Type, Qualification */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-[#d8bb88]" />
                      {job.location}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50">
                      <Award className="w-3.5 h-3.5" />
                      {job.typeLabel}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/50">
                      <Users className="w-3.5 h-3.5" />
                      {job.vacancies} وظائف
                    </span>
                  </div>

                  {/* Key Requirement Preview */}
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-800/60 p-3 rounded-xl border border-gray-100 dark:border-slate-800 flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-[#d8bb88] shrink-0 mt-0.5" />
                    <span className="line-clamp-1"><strong>المؤهل المطلوب:</strong> {job.qualification}</span>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 sm:p-6 pt-3 border-t border-gray-50 dark:border-slate-800/60 flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setActiveJobModal(job)}
                    className="flex-1 py-3 px-4 rounded-full bg-[#1b2a47] hover:bg-blue-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-[#d8bb88] text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>شروط الإعلان والمستندات</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <a
                    href={job.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-full border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <span>تقديم</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ================= JOB DETAILS MODAL ================= */}
      <AnimatePresence>
        {activeJobModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-[32px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-slate-800 relative text-right"
              dir="rtl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveJobModal(null)}
                className="absolute top-6 left-6 p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Ministry & Job Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-2 flex items-center justify-center shrink-0">
                  <img
                    src={activeJobModal.logo}
                    alt={activeJobModal.ministryName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 block mb-1">
                    {activeJobModal.ministryName} — {activeJobModal.department}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1b2a47] dark:text-white leading-tight">
                    {activeJobModal.title}
                  </h2>
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/70 border border-gray-100 dark:border-slate-800 mb-6 text-center">
                <div>
                  <div className="text-[11px] font-bold text-gray-400">نوع التعاقد</div>
                  <div className="text-xs sm:text-sm font-black text-[#1b2a47] dark:text-white mt-0.5">{activeJobModal.typeLabel}</div>
                </div>
                <div className="border-r border-gray-200 dark:border-slate-700">
                  <div className="text-[11px] font-bold text-gray-400">الدرجة الوظيفية</div>
                  <div className="text-xs sm:text-sm font-black text-[#1b2a47] dark:text-white mt-0.5">{activeJobModal.grade}</div>
                </div>
                <div className="border-r border-gray-200 dark:border-slate-700">
                  <div className="text-[11px] font-bold text-gray-400">العدد المطلوب</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400 mt-0.5">{activeJobModal.vacancies} وظائف</div>
                </div>
                <div className="border-r border-gray-200 dark:border-slate-700">
                  <div className="text-[11px] font-bold text-gray-400">تاريخ الإغلاق</div>
                  <div className="text-xs sm:text-sm font-black text-amber-600 dark:text-amber-400 mt-0.5">{activeJobModal.deadline}</div>
                </div>
              </div>

              {/* Duties / Scope */}
              <div className="mb-6">
                <h4 className="text-sm font-black text-[#1b2a47] dark:text-white mb-2">وصف ومهام الوظيفة:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {activeJobModal.description}
                </p>
              </div>

              {/* General Eligibility */}
              <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <GraduationCap className="w-4 h-4 text-[#d8bb88] shrink-0 mt-0.5" />
                  <span><strong>المؤهل المطلوب:</strong> {activeJobModal.qualification}</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Award className="w-4 h-4 text-[#d8bb88] shrink-0 mt-0.5" />
                  <span><strong>سنوات الخبرة:</strong> {activeJobModal.experience}</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                  <Clock className="w-4 h-4 text-[#d8bb88] shrink-0 mt-0.5" />
                  <span><strong>شرط السن:</strong> {activeJobModal.ageLimit}</span>
                </div>
              </div>

              {/* Requirements list */}
              <div className="mb-6">
                <h4 className="text-sm font-black text-[#1b2a47] dark:text-white mb-2.5">
                  المهارات والشروط التخصصية:
                </h4>
                <div className="space-y-2">
                  {activeJobModal.requirements.map((req, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents needed */}
              <div className="mb-8">
                <h4 className="text-sm font-black text-[#1b2a47] dark:text-white mb-2.5">
                  المستندات والأوراق المطلوبة لرفعها إلكترونياً:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeJobModal.documents.map((doc, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800 text-xs font-medium text-gray-700 dark:text-gray-300"
                    >
                      <FileCheck2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official notice alert */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 mb-6 text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                <span>
                  <strong>تنبيه هام:</strong> التقديم يتم حصرياً وبشكل مجاني عبر بوابة الوظائف الحكومية التابعة للجهاز المركزي للتنظيم والإدارة. يرجى التأكد من رفع أصول المستندات ملونة بصيغة PDF.
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={activeJobModal.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#1b2a47] hover:bg-blue-900 dark:bg-[#d8bb88] dark:hover:bg-yellow-500 text-white dark:text-[#1b2a47] text-sm font-bold text-center transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>التقديم الفوري عبر بوابة الوظائف الحكومية</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setActiveJobModal(null)}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 text-sm font-bold transition-all cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Jobs;
