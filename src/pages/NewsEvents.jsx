import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Tag,
  Share2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Flame,
  Radio,
  Building2,
  CheckCircle2,
  X,
  Eye,
  SlidersHorizontal,
  Bookmark,
  BellRing,
  ArrowUpRight,
  Newspaper,
  Layers
} from 'lucide-react';

// Assets
import headerPhoto from '../assets/headerPhoto.png';
import akademi from '../assets/akademi.png';
import frame1 from '../assets/Frame1.png';
import ro2ytrna from '../assets/ro2ytrna.png';
import alllll from '../assets/alllll.png';
import bosla from '../assets/bosla.png';
import eteestalat from '../assets/etesalatBASE.png';
import nesr from '../assets/nesr.png';
import nesr1 from '../assets/nesr1.png';
import nesr2 from '../assets/nesr2.png';
import nesr3 from '../assets/nesr3.png';
import nesr4 from '../assets/nesr4.png';
import nesr7 from '../assets/nesr7.png';
import nesr9 from '../assets/nesr9.png';

// Categories
const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'news', label: 'أحدث الأخبار والقرارات' },
  { id: 'events', label: 'الفعاليات والمؤتمرات' },
  { id: 'digital', label: 'التحول الرقمي وتكنولوجيا' },
  { id: 'national', label: 'المشروعات القومية' },
  { id: 'workshops', label: 'ورش العمل والهاكاثون' },
];

// Breaking news ticker data
const breakingNewsTicker = [
  'رئيس مجلس الوزراء يشهد إطلاق 15 خدمة حكومية جديدة على منصة مصر الرقمية',
  'وزارة الاتصالات تعلن فتح باب التقدم لمنحة الرواد الرقميون 2025 لشباب المحافظات',
  'وزارة النقل تدشن أولى رحلات القطار الكهربائي السريع تجريبياً بالعاصمة الإدارية',
  'انطلاق قمة ومعرض القاهرة الدولي للاتصالات وتكنولوجيا المعلومات Cairo ICT قريباً'
];

// News & Events Dataset
const newsEventsData = [
  {
    id: 'item-1',
    type: 'news',
    category: 'digital',
    badge: 'خبر مميز',
    badgeColor: 'bg-red-600 text-white',
    title: 'إطلاق حزمة جديدة من الخدمات الرقمية المتكاملة عبر منصة مصر الرقمية لعام 2025',
    ministry: 'وزارة الاتصالات وتكنولوجيا المعلومات',
    ministryLogo: eteestalat,
    date: '10 مارس 2025',
    readTime: '3 دقائق قراءة',
    image: headerPhoto,
    views: '14.2K',
    featured: true,
    summary: 'أعلنت وزارة الاتصالات وتكنولوجيا المعلومات عن إطلاق حزمة موسعة تشمل 15 خدمة رقمية جديدة للمواطنين تغطي التوثيق والمرور والتموين والتأمينات الاجتماعية، بهدف تقليل زمن الحصول على المعاملات الحكومية.',
    fullContent: `في إطار استراتيجية الدولة نحو بناء "مصر الرقمية"، أعلنت وزارة الاتصالات وتكنولوجيا المعلومات عن إطلاق حزمة جديدة تضم أكثر من 15 خدمة إلكترونية متطورة للمواطنين، بهدف تيسير الوصول إلى الخدمات الحكومية على مدار الساعة ومن أي مكان.

تشمل الخدمات الجديدة مجالات متعددة من أبرزها:
• خدمات التوثيق والشهر العقاري الذكية وإصدار المحررات الرسمية وتوصيلها للمنزل.
• استخراج وتجديد بطاقات التموين والفصل الاجتماعي رقمياً.
• سداد الرسوم القضائية والاستعلام عن القضايا وجلسات المحاكم.
• تجديد رخص المركبات وبدل الفاقد لرخص القيادة مع الفحص الفني المميكن.

وأكدت الوزارة أن هذه الخطوة تأتي ضمن خطة التحول الرقمي الشاملة لربط جميع قواعد البيانات القومية، ورفع جودة الخدمات المقدمة للمواطن المصري بصورة آمنة ومريحة.`,
    tags: ['مصر الرقمية', 'خدمات حكومية', 'التحول الرقمي', 'تكنولوجيا']
  },
  {
    id: 'item-2',
    type: 'events',
    category: 'events',
    badge: 'فعالية كبرى',
    badgeColor: 'bg-emerald-600 text-white',
    title: 'مؤتمر ومعرض القاهرة الدولي للتكنولوجيا والاتصالات (Cairo ICT 2025)',
    ministry: 'رعاية رئاسة الجمهورية ووزارة الاتصالات',
    ministryLogo: nesr,
    date: '18 – 21 نوفمبر 2025',
    location: 'مركز مصر للمعارض الدولية (EIEC)، التجمع الخامس، القاهرة',
    image: akademi,
    views: '28.5K',
    featured: true,
    summary: 'الملتقى التكنولوجي الأضخم في الشرق الأوسط وأفريقيا، بمشاركة أكثر من 500 شركة عالمية ومحلية لاستعراض أحدث تقنيات الذكاء الاصطناعي ومراكز البيانات والأمن السيبراني.',
    fullContent: `يعد معرض ومؤتمر Cairo ICT الحدث السنوي الرائد لقطاع الاتصالات وتكنولوجيا المعلومات في مصر والمنطقة. ويجمع المؤتمر هذا العام قادة الصناعة، والوزراء، والشركات العالمية الناشئة والعملاقة.

محاور المؤتمر الرئيسية:
1. الثورة الصناعية الرابعة وتطبيقات الذكاء الاصطناعي التوليدي في إدارة المدن الذكية.
2. حماية البنى التحتية الحرجة والأمن السيبراني القومي.
3. التكنولوجيا المالية (FinTech) ومنظومات الدفع اللاتلامسي والشمول المالي.
4. شبكات الجيل الخامس 5G ومستقبل الحوسبة السحابية ومراكز البيانات الخضراء.

يتضمن الحدث ورش عمل مجانية وجلسات حوارية ومسابقات للشركات الناشئة مع فرص تمويل استثماري.`,
    tags: ['Cairo ICT', 'معارض دولية', 'ذكاء اصطناعي', 'شبكات 5G']
  },
  {
    id: 'item-3',
    type: 'news',
    category: 'national',
    badge: 'مشروعات قومية',
    badgeColor: 'bg-blue-600 text-white',
    title: 'اكتمال ربط وتشغيل شبكة الألياف الضوئية الفائقة بكافة المدارس الثانوية والجامعات التكنولوجية',
    ministry: 'وزارة التربية والتعليم والتعليم العالي',
    ministryLogo: nesr1,
    date: '08 مارس 2025',
    readTime: '2 دقيقة قراءة',
    image: frame1,
    views: '9.8K',
    featured: false,
    summary: 'تم الانتهاء من مد كابلات الفايبر عالية السرعة لربط أكثر من 2800 مدرسة ثانوية و10 جامعات تكنولوجية، لتوفير بنية رقمية متطورة للاختبارات الإلكترونية والتعلم التفاعلي.',
    fullContent: `أعلنت وزارتا التربية والتعليم والاتصالات الانتهاء من مشروع ربط كافة المدارس الثانوية الحكومية على مستوى الجمهورية بشبكة كابلات الألياف الضوئية (الفايبر) بسرعات فائقة.

يهدف المشروع إلى:
• ضمان استقرار منصات الامتحانات الإلكترونية الموحدة لطلاب الثانوية العامة.
• توفير منصات تفاعلية وبنوك أسئلة رقمية داخل الفصول المدرسية.
• ربط المعامل التكنولوجية بالجامعات بأحدث قواعد البيانات العالمية عبر بنك المعرفة المصري.`,
    tags: ['التعليم التكنولوجي', 'ألياف ضوئية', 'بنية تحتية']
  },
  {
    id: 'item-4',
    type: 'events',
    category: 'workshops',
    badge: 'هاكاثون ومسابقة',
    badgeColor: 'bg-amber-600 text-white',
    title: 'هاكاثون الذكاء الاصطناعي للحلول الحكومية الذكية (GovAI Hackathon)',
    ministry: 'معهد تكنولوجيا المعلومات (ITI) ومركز كرياتيفا',
    ministryLogo: eteestalat,
    date: '25 – 27 مارس 2025',
    location: 'مركز إبداع مصر الرقمية (Creativa)، جامعة القاهرة والجيزة',
    image: ro2ytrna,
    views: '16.4K',
    featured: false,
    summary: 'تحدي تكنولوجي تنافسي لشباب المطورين ورواد الأعمال لتطوير نماذج ذكاء اصطناعي تحل تحديات واقعية في إدارة المرور، الرعاية الصحية، وترشيد الطاقة، بجوائز مالية تتجاوز مليون جنيه.',
    fullContent: `ينظم معهد تكنولوجيا المعلومات ITI بالتعاون مع مراكز إبداع مصر الرقمية "هاكاثون الحلول الحكومية الذكية" بمشاركة مئات الشباب من طلاب وخريجي كليات الهندسة والحاسبات.

المسارات التنافسية:
• حلول الذكاء الاصطناعي لتحليل الكثافات المرورية والحد من الحوادث.
• روبوتات الدردشة الذكية لخدمة المواطنين والرد على الاستفسارات الحكومية بلغة عربية عامية.
• نماذج التنبؤ بالاستهلاك الكهربائي وترشيد المياه والري الذكي.

سيحصل الفائزون بالمراكز الثلاثة الأولى على دعم مالي واحتضان كامل لمشروعاتهم بمسرعة الأعمال التابعة للوزارة.`,
    tags: ['هاكاثون', 'ITI', 'كرياتيفا', 'ذكاء اصطناعي']
  },
  {
    id: 'item-5',
    type: 'news',
    category: 'news',
    badge: 'بيان صحفي',
    badgeColor: 'bg-slate-700 text-white',
    title: 'افتتاح محطة قطارات صعيد مصر (بشتيل) كأحدث صرح تكنولوجي ذكي لمنظومة السكك الحديدية',
    ministry: 'وزارة النقل',
    ministryLogo: nesr9,
    date: '05 مارس 2025',
    readTime: '4 دقائق قراءة',
    image: alllll,
    views: '22.1K',
    featured: false,
    summary: 'صرح عملاق يجمع بين الطراز الفرعوني القديم والتقنيات الرقمية العالمية من ماكينات حجز إلكترونية وتتبع ذكي وتكامل مع خطوط المونوريل ومترو الأنفاق.',
    fullContent: `شهدت محافظة الجيزة الافتتاح الرسمي لمحطة قطارات صعيد مصر (بشتيل)، التي تُعد واحدة من أضخم وأحدث محطات القطارات في الشرق الأوسط وإفريقيا.

أهم مميزات المحطة الذكية:
• بوابات إلكترونية ذكية للدخول والخروج بالباركود وتذاكر الهاتف المحمول.
• منظومة تحكم ومراقبة شاملة بأكثر من 1200 كاميرا مراقبة مزودة بتقنيات الذكاء الاصطناعي.
• شاشات إرشادية وتفاعلية ومصاعد وسلالم كهربائية لخدمة ذوي الهمم وكبار السن.
• جراجات سيارات متعددة الطوابق ومجمع تجاري واستثماري متكامل لخدمة المسافرين.`,
    tags: ['وزارة النقل', 'قطارات مصر', 'بشتيل', 'بنية تحتية']
  },
  {
    id: 'item-6',
    type: 'events',
    category: 'digital',
    badge: 'ملتقى توظيف',
    badgeColor: 'bg-purple-600 text-white',
    title: 'ملتقى توظيف التكنولوجيا والعمل الحر للشباب والمبرمجين 2025',
    ministry: 'وزارة العمل ووزارة الاتصالات',
    ministryLogo: eteestalat,
    date: '15 أبريل 2025',
    location: 'القرية الذكية، الكيلو 28 طريق مصر الإسكندرية الصحراوي',
    image: bosla,
    views: '31.2K',
    featured: false,
    summary: 'يوفر الملتقى أكثر من 3000 فرصة عمل حقيقية في مجالات البرمجة، التسويق الرقمي، تحليل البيانات، والأمن السيبراني، مع استشارات لتطوير المهارات الحرة Freelancing.',
    fullContent: `تنظم وزارتا الاتصالات والعمل ملتقى التوظيف التكنولوجي السنوي، الذي يجمع أكثر من 80 شركة تكنولوجيا محلية وعالمية تبحث عن كفاءات وكوادر شابة.

الميزات للمشاركين:
• مقابلات عمل فورية مع مديري الموارد البشرية والفرق التقنية.
• ورش عمل حية حول بناء سيرة ذاتية احترافية واجتياز المقابلات التقنية.
• استشارات مجانية حول كيفية العمل عبر منصات الفريلانس العالمية وتحويل الأرباح بالعملات الأجنبية.`,
    tags: ['توظيف', 'القرية الذكية', 'فريلانس', 'مبرمجين']
  },
  {
    id: 'item-7',
    type: 'news',
    category: 'national',
    badge: 'صحة ومجتمع',
    badgeColor: 'bg-teal-600 text-white',
    title: 'بدء تطبيق المنظومة الرقمية الموحدة لصرف الأدوية وقرارات العلاج على نفقة الدولة',
    ministry: 'وزارة الصحة والسكان',
    ministryLogo: nesr7,
    date: '01 مارس 2025',
    readTime: '3 دقائق قراءة',
    image: frame1,
    views: '11.5K',
    featured: false,
    summary: 'ربط المستشفيات الحكومية والمراكز الطبية التخصصية بمنظومة رقمية واحدة تختصر وقت استخراج قرارات العلاج من أسبوعين إلى 48 ساعة فقط.',
    fullContent: `أطلقت وزارة الصحة والسكان المنظومة الرقمية الحديثة لقرارات العلاج على نفقة الدولة، التي تتيح تسجيل الحالات المرضية عبر لجان ثلاثية مميكنة داخل المستشفيات دون حاجة المواطن للسفر لمقر المجالس الطبية المركزية بالقاهرة.

أهداف المنظومة:
• تقليص الدورة المستندية وتفادي تكدس المواطنين.
• إصدار كارت مميكن وصرف الأدوية الشهرية من الصيدليات الحكومية القريبة.
• الربط المباشر مع قاعدة بيانات التأمين الصحي الشامل.`,
    tags: ['وزارة الصحة', 'علاج على نفقة الدولة', 'رقمنة']
  },
  {
    id: 'item-8',
    type: 'events',
    category: 'events',
    badge: 'قمة دولية',
    badgeColor: 'bg-indigo-600 text-white',
    title: 'أسبوع جنيف الرقمي والمشاركة المصرية في حوكمة الذكاء الاصطناعي الدولي',
    ministry: 'وزارة الخارجية والاتصالات',
    ministryLogo: nesr3,
    date: '12 – 16 يوليو 2025',
    location: 'مقر الأمم المتحدة والاتحاد الدولي للاتصالات، جنيف (سويسرا)',
    image: headerPhoto,
    views: '8.7K',
    featured: false,
    summary: 'مشاركة وفد مصري رفيع المستوى في صياغة المعايير والأطر الأخلاقية العالمية لتنظيم الذكاء الاصطناعي وحماية البيانات السيادية.',
    fullContent: `يمثل أسبوع جنيف الرقمي محطة دولية سنوية تجمع ممثلي الحكومات والمنظمات التكنولوجية الكبرى لبحث مستقبل الإنترنت والحوكمة الرقمية.

تشارك مصر بورقة عمل تتناول:
• تعزيز العدالة الرقمية للدول النامية وإتاحة البنية التحتية.
• أخلاقيات استخدام الذكاء الاصطناعي في الوظائف والخدمات المدنية.
• تعزيز الأمن السيبراني الدولي ومكافحة الجرائم العابرة للحدود.`,
    tags: ['الأمم المتحدة', 'مؤتمر دولي', 'حوكمة الذكاء الاصطناعي']
  }
];

const NewsEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'news' | 'events'
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [savedBookmarked, setSavedBookmarked] = useState({});
  const [newsTickerIndex, setNewsTickerIndex] = useState(0);

  // Toggle bookmark
  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setSavedBookmarked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered Items
  const filteredItems = useMemo(() => {
    return newsEventsData.filter(item => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ministry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTab =
        activeTab === 'all' || item.type === activeTab;

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesTab && matchesCategory;
    });
  }, [searchTerm, activeTab, selectedCategory]);

  // Featured Item (first item that is featured)
  const featuredNews = newsEventsData.find(i => i.featured && i.type === 'news') || newsEventsData[0];
  const featuredEvent = newsEventsData.find(i => i.featured && i.type === 'events') || newsEventsData[1];

  return (
    <div className="min-h-screen bg-[#f5f7fa] dark:bg-slate-950 pb-24 transition-colors duration-200" dir="rtl">
      {/* ================= TOP BREAKING NEWS TICKER ================= */}
      <div className="bg-[#111c30] text-white border-b border-white/10 py-2.5 px-4 sm:px-8 shadow-inner relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 overflow-hidden flex-1">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-black text-xs shrink-0 shadow-md animate-pulse">
              <Flame className="w-3.5 h-3.5" />
              <span>شريط الأخبار العاجلة</span>
            </div>
            <motion.p
              key={newsTickerIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-gray-100 text-xs sm:text-sm font-bold truncate cursor-pointer hover:text-[#d8bb88] transition-colors"
              onClick={() => setActiveModalItem(newsEventsData[0])}
            >
              {breakingNewsTicker[newsTickerIndex]}
            </motion.p>
          </div>

          <div className="flex items-center gap-1 shrink-0 bg-white/10 rounded-full p-0.5 border border-white/10">
            <button
              onClick={() => setNewsTickerIndex((prev) => (prev - 1 + breakingNewsTicker.length) % breakingNewsTicker.length)}
              className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="الخبر السابق"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setNewsTickerIndex((prev) => (prev + 1) % breakingNewsTicker.length)}
              className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="الخبر التالي"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b2a47] via-[#1b2a47] to-[#142036] text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#d8bb88]">
        {/* Decorative Glows */}
        <div className="absolute top-[-25%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-500/15 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d8bb88]/15 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d8bb88] font-bold text-xs sm:text-sm mb-6 shadow-sm">
              <Radio className="w-4 h-4 text-red-400 animate-pulse" />
              <span>المركز الإعلامي الموحد للأخبار والفعاليات الحكومية</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              الأخبار <span className="text-[#d8bb88]">والفعاليات</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
              تابع لحظة بلحظة أحدث القرارات الحكومية، إعلانات الوزارات، والمؤتمرات والفعاليات الوطنية والتكنولوجية الكبرى في مصر.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                { number: '+420', label: 'خبر وتصريح رسمي' },
                { number: '48', label: 'مؤتمر وفعالية هذا العام' },
                { number: '24/7', label: 'تغطية إخبارية مستمرة' },
                { number: '100%', label: 'مصادر حكومية موثقة' }
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

      {/* ================= SEARCH & TYPE SWITCHER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="bg-white dark:bg-slate-900 rounded-[28px] sm:rounded-[36px] p-4 sm:p-6 shadow-xl border border-gray-100 dark:border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="ابحث في الأخبار والفعاليات، الوزارات، أو الكلمات المفتاحية..."
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

            {/* Main Tabs: الكل | الأخبار | الفعاليات */}
            <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-slate-800 rounded-full w-full md:w-auto overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: 'كافة المحتوى', icon: Layers },
                { id: 'news', label: 'الأخبار والبيانات', icon: Newspaper },
                { id: 'events', label: 'الفعاليات والمؤتمرات', icon: Calendar }
              ].map(tab => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 whitespace-nowrap flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs md:text-sm font-black transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1b2a47] text-white shadow-md dark:bg-[#d8bb88] dark:text-[#1b2a47]'
                        : 'text-gray-600 dark:text-gray-300 hover:text-[#1b2a47] dark:hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub Categories Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 scrollbar-none border-t border-gray-100 dark:border-slate-800">
            <span className="text-xs font-bold text-gray-400 shrink-0 ml-2 hidden sm:inline-flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              الموضوع:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-200 dark:bg-slate-700 text-[#1b2a47] dark:text-white ring-1 ring-[#1b2a47]/30 dark:ring-[#d8bb88]/30'
                      : 'bg-gray-50 dark:bg-slate-800/80 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SPOTLIGHT / FEATURED DUO (Shown when no search/filters active) ================= */}
      {searchTerm === '' && selectedCategory === 'all' && activeTab === 'all' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d8bb88]" />
              <h2 className="text-xl sm:text-2xl font-black text-[#1b2a47] dark:text-white">
                أبرز وأهم الأحداث هذا الأسبوع
              </h2>
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-400">تغطية خاصة وحصرية</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Featured Big News (8 Cols) */}
            <div
              onClick={() => setActiveModalItem(featuredNews)}
              className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black shadow-md bg-red-600 text-white">
                    {featuredNews.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 text-white backdrop-blur-md">
                    {featuredNews.date}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2 text-xs text-[#d8bb88] font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{featuredNews.ministry}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black leading-snug drop-shadow-md">
                    {featuredNews.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {featuredNews.summary}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-slate-800 text-xs font-bold text-gray-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredNews.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {featuredNews.views} مشاهدة
                    </span>
                  </div>
                  <span className="text-[#1b2a47] dark:text-[#d8bb88] flex items-center gap-1 group-hover:translate-x-[-4px] transition-transform">
                    <span>قراءة الخبر كاملاً</span>
                    <ChevronLeft className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Event Card (5 Cols) */}
            <div
              onClick={() => setActiveModalItem(featuredEvent)}
              className="lg:col-span-5 bg-gradient-to-br from-[#1b2a47] to-[#111c30] text-white rounded-[32px] p-6 sm:p-8 shadow-xl border border-white/10 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
            >
              <div className="absolute top-[-20%] left-[-20%] w-64 h-64 rounded-full bg-[#d8bb88]/15 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#d8bb88] text-[#1b2a47]">
                    {featuredEvent.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>تسجيل الحضور متاح</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-300 font-bold mb-3">
                  <Calendar className="w-4 h-4 text-[#d8bb88]" />
                  <span>{featuredEvent.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black leading-snug mb-4 group-hover:text-[#d8bb88] transition-colors">
                  {featuredEvent.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {featuredEvent.summary}
                </p>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-gray-200">
                    <MapPin className="w-4 h-4 text-[#d8bb88] shrink-0" />
                    <span className="truncate">{featuredEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <Building2 className="w-4 h-4 text-[#d8bb88] shrink-0" />
                    <span className="truncate">{featuredEvent.ministry}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs font-bold">
                <span className="text-gray-400">شاهد تفاصيل الفعالية وجدول الأعمال</span>
                <span className="py-2.5 px-5 rounded-full bg-[#d8bb88] text-[#1b2a47] font-black group-hover:bg-white transition-colors flex items-center gap-1">
                  <span>تفاصيل الفعالية</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= MAIN CARDS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-black text-[#1b2a47] dark:text-white">
            {activeTab === 'news' ? 'الأخبار والبيانات الصحفية' : activeTab === 'events' ? 'جدول الفعاليات والمؤتمرات' : 'جميع الأخبار والفعاليات'}
          </h2>
          <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">
            عرض <strong className="text-[#1b2a47] dark:text-[#d8bb88] font-black">{filteredItems.length}</strong> عنصر
          </span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-[28px] p-12 text-center border border-gray-200 dark:border-slate-800 shadow-sm my-8">
            <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1b2a47] dark:text-white mb-2">
              لم نجد أي أخبار أو فعاليات مطابقة للبحث
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              يرجى تجربة كلمات بحث أخرى أو اختيار تصنيف مختلف من القائمة أعلاه.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setActiveTab('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1b2a47] text-white text-sm font-bold hover:bg-blue-900 transition-colors cursor-pointer"
            >
              عرض كافة الأخبار والفعاليات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => {
              const isEvent = item.type === 'events';
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
                  onClick={() => setActiveModalItem(item)}
                  className="bg-white dark:bg-slate-900 rounded-[28px] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 cursor-pointer"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <span className={`text-[11px] font-black px-3 py-1 rounded-full shadow-sm ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>

                      <button
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`absolute top-3 left-3 p-2 rounded-full backdrop-blur-md transition-colors ${
                          savedBookmarked[item.id]
                            ? 'bg-amber-500 text-white'
                            : 'bg-black/40 text-white hover:bg-black/60'
                        }`}
                        aria-label="حفظ في المفضلة"
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Meta Info: Ministry + Date */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-2.5">
                        <span className="font-bold text-[#1b2a47] dark:text-[#d8bb88] truncate max-w-[65%]">
                          {item.ministry}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-black text-base sm:text-lg text-[#1b2a47] dark:text-white leading-snug mb-3 line-clamp-2 group-hover:text-blue-900 dark:group-hover:text-[#d8bb88] transition-colors">
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      {/* Event Location if applicable */}
                      {isEvent && item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-slate-800/70 p-2.5 rounded-xl mb-3">
                          <MapPin className="w-3.5 h-3.5 text-[#d8bb88] shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-6 pt-3 border-t border-gray-50 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-gray-500">
                    <span className="flex items-center gap-1 text-gray-400">
                      <Eye className="w-3.5 h-3.5" />
                      {item.views}
                    </span>

                    <button className="flex items-center gap-1 text-[#1b2a47] dark:text-[#d8bb88] group-hover:translate-x-[-3px] transition-transform">
                      <span>{isEvent ? 'تفاصيل وحجز الفعالية' : 'قراءة المزيد'}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= NEWSLETTER SUBSCRIPTION BOX ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#1b2a47] via-[#24375a] to-[#1b2a47] rounded-[32px] p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl border border-white/10">
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <BellRing className="w-6 h-6 text-[#d8bb88]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              اشترك في نشرة <span className="text-[#d8bb88]">بوصلة مصر</span> الإخبارية
            </h3>

            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              ابقَ على اطلاع دائم بأحدث القرارات الوزارية، ومواعيد إطلاق الخدمات الحكومية والوظائف الشاغرة والفعاليات التكنولوجية فور الإعلان عنها.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('شكراً لاشتراكك في نشرة بوصلة مصر الإخبارية!');
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="أدخل بريدك الإلكتروني..."
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#d8bb88]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-full bg-[#d8bb88] hover:bg-yellow-500 text-[#1b2a47] font-black text-sm transition-all shadow-md cursor-pointer shrink-0"
              >
                اشتراك مجاني
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FULL ARTICLE & EVENT DETAILS MODAL ================= */}
      <AnimatePresence>
        {activeModalItem && (
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
                onClick={() => setActiveModalItem(null)}
                className="absolute top-6 left-6 p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-black px-3.5 py-1.5 rounded-full shadow-md ${activeModalItem.badgeColor}`}>
                    {activeModalItem.badge}
                  </span>
                </div>
              </div>

              {/* Meta strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#d8bb88]" />
                  <span className="font-bold text-[#1b2a47] dark:text-white">{activeModalItem.ministry}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#d8bb88]" />
                    {activeModalItem.date}
                  </span>
                  {activeModalItem.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {activeModalItem.readTime}
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-[#1b2a47] dark:text-white leading-tight mb-5">
                {activeModalItem.title}
              </h2>

              {/* Location info if event */}
              {activeModalItem.type === 'events' && activeModalItem.location && (
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-6">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                  <span><strong>موقع الفعالية:</strong> {activeModalItem.location}</span>
                </div>
              )}

              {/* Full Article Content */}
              <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-8">
                {activeModalItem.fullContent}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-gray-100 dark:border-slate-800">
                <span className="text-xs font-bold text-gray-400 self-center ml-2">الوسوم:</span>
                {activeModalItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {activeModalItem.type === 'events' ? (
                  <button
                    onClick={() => alert('تم تسجيل رغبتك بحضور الفعالية بنجاح!')}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#1b2a47] hover:bg-blue-900 dark:bg-[#d8bb88] dark:hover:bg-yellow-500 text-white dark:text-[#1b2a47] text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>تسجيل الحضور الإلكتروني للفعالية</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: activeModalItem.title, url: window.location.href });
                      } else {
                        alert('تم نسخ رابط الخبر للمشاركة!');
                      }
                    }}
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#1b2a47] hover:bg-blue-900 dark:bg-[#d8bb88] dark:hover:bg-yellow-500 text-white dark:text-[#1b2a47] text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>مشاركة الخبر</span>
                    <Share2 className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={() => setActiveModalItem(null)}
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

export default NewsEvents;
