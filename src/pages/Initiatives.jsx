import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, LayoutGrid, MonitorPlay, Users, ShieldCheck, Globe, Lightbulb } from 'lucide-react';

const initiativesData = [
  {
    id: "deg",
    title: "أجيال مصر الرقمية (DEG)",
    icon: <Users className="w-5 h-5" />,
    url: "https://deg.gov.eg/",
    description: `تندرج مبادرة أجيال مصر الرقمية ضمن محور "بناء الإنسان المصري" الذي يمثل أحد المحاور الرئيسية في استراتيجية الدولة المصرية لتنمية الكوادر البشرية وتأهيل جيل من المتخصصين في مجالات الاتصالات وتكنولوجيا المعلومات والتقنيات الحديثة. وتهدف المبادرة إلى إعداد كوادر مؤهلة تمتلك المعارف والمهارات الرقمية اللازمة للمنافسة على المستويات المحلية والإقليمية والدولية، بما يمكنها من الإسهام بفاعلية في دعم مسيرة التحول الرقمي وبناء مصر الرقمية.\n\nوتستهدف مبادرة أجيال مصر الرقمية مختلف الفئات العمرية من أبناء الجيل القادم، بدءًا من طلاب المرحلة الابتدائية، مرورًا بالشباب، وصولًا إلى خريجي الجامعات المصرية، وذلك من خلال توفير مسارات وبرامج تدريبية تتناسب مع المراحل العمرية والاحتياجات المهارية المختلفة. وتسعى المبادرة من خلال هذا النهج إلى بناء قاعدة واسعة من الكفاءات الرقمية، وتنمية قدرات المشاركين بما يؤهلهم ليصبحوا كوادر وقادة قادرين على مواكبة التطورات المتسارعة في مجال التكنولوجيا، والمشاركة في تنفيذ ودعم الرؤية الرقمية لمصر.`,
    subInitiatives: [
      {
        id: "demi",
        title: "براعم مصر الرقمية DEMI",
        url: "https://demi.gov.eg",
        content: `تُعد مبادرة براعم مصر الرقمية أحد البرامج التدريبية الممولة بالكامل، والتي تستهدف تعريف طلاب المرحلة الابتدائية بمفاهيم تكنولوجيا المعلومات وتنمية مهاراتهم الرقمية في سن مبكرة. وتستهدف المبادرة طلاب الصفوف الرابع والخامس والسادس الابتدائي.\n\nشروط الالتحاق:\n• أن يكون المتقدم مصري الجنسية، وأن يتراوح عمره بين 9 و11 عامًا.\n• أن يكون مقيدًا بالصف الرابع أو الخامس أو السادس الابتدائي.\n• أن يمتلك حسابًا على منصة Office 365.`
      },
      {
        id: "deci",
        title: "أشبال مصر الرقمية DECI",
        url: "https://deci.gov.eg/",
        content: `مبادرة تعليمية مجانية تستهدف طلاب المدارس (من الأول الإعدادي للثاني الثانوي)، تهدف إلى تطوير قدراتهم الرقمية والتكنولوجية. تجمع بين التدريب التقني وتنمية المهارات الشخصية.\n\nأنماط التدريب:\n• البرنامج الأساسي (أثناء العام الدراسي).\n• البرنامج الصيفي (مكثف).\n• برنامج التعلم الذاتي (عبر الإنترنت).\n\nتشترط المبادرة الحصول على 90% في الرياضيات والعلوم واللغة الإنجليزية.`
      },
      {
        id: "debi",
        title: "بُناة مصر الرقمية DEBI",
        url: "https://debi.gov.eg",
        content: `برنامج تدريبي احترافي ممول بالكامل يمتد لثمانية أشهر، يهدف لتنمية قدرات الشباب وتأهيلهم في أحدث مجالات تكنولوجيا المعلومات. لا يُشترط التفرغ الكامل للبرنامج.\n\nمسارات التدريب:\n• الفنون الرقمية.\n• الأمن السيبراني.\n• تحليل الأعمال.\n• تطوير البرمجيات.\n• الذكاء الاصطناعي وعلوم البيانات.`
      },
      {
        id: "depi",
        title: "رواد مصر الرقمية DEPI",
        url: "https://depi.gov.eg/content/home",
        content: `تدعم الطلاب والخريجين لمواكبة المتغيرات بسوق العمل عبر برامج تدريبية متكاملة بالشراكة مع شركات تكنولوجية رائدة.\n\nينقسم لبرنامج أساسي (ذكاء اصطناعي، بنية تحتية، تسويق، تطوير ألعاب) وبرنامج للمحترفين يركز على تطبيقات الذكاء الاصطناعي في مجالات كالتعليم والقانون والطب.`
      }
    ]
  },
  {
    id: "digilians",
    title: "مبادرة الرواد الرقميون",
    icon: <Globe className="w-5 h-5" />,
    url: "https://www.digilians.gov.eg/track",
    description: `تُمثل منحة "الرواد الرقميون" مشروعًا تدريبيًا مجانيًا أقرته وزارة الاتصالات وتكنولوجيا المعلومات عام 2025 استجابةً للتوجيهات الرئاسية، بهدف تطوير قدرات الكوادر الشابة، وتعزيز فرص دمجهم في سوق العمل، ودعم نمو قطاع الاتصالات. تُستهدف المبادرة الفئة العمرية بين 18 و32 عامًا من مختلف التخصصات والأنحاء الجغرافية.\n\nالمسارات الرئيسية:\n• الدبلوم المكثف (4 أشهر): يركز على التطبيق العملي والتعلم التفاعلي.\n• الدبلوم المتخصص (9 أشهر): يدمج بين التعلم المباشر والتدريب الإلكتروني.\n• الماجستير المهني (12 شهرًا): برنامج أكاديمي وتطبيقي يهدف لإعداد قيادات رقمية بالشراكة مع جامعات دولية.\n\nتعتمد المنحة نموذجًا شاملاً للتدريب يجمع بين المهارات التقنية واللغوية والمهارات الشخصية، إلى جانب التطبيق الميداني لدى أكثر من 30 شركة عالمية.`
  },
  {
    id: "bokra",
    title: "مبادرة بكرة ديجيتال",
    icon: <MonitorPlay className="w-5 h-5" />,
    url: "https://www.basicict.gov.eg/registerBokra.aspx",
    description: `أطلقت وزارة الشباب والرياضة، بالتعاون مع وزارة الاتصالات وتكنولوجيا المعلومات، مبادرة قومية لتنمية القدرات الرقمية لدى الشباب في مختلف محافظات الجمهورية تحت اسم «بكرة ديجيتال». وتستهدف المبادرة الشباب الذين تتراوح أعمارهم بين 14 و40 عامًا، بهدف إتاحة فرص متكافئة لتطوير المهارات الرقمية ورفع جاهزية الشباب لمتطلبات سوق العمل المتغيرة.\n\nتتكون المبادرة من ثلاثة محاور رئيسية:\n• أولًا: اللقاءات التعريفية وورش العمل للتوعية بأهمية التحول الرقمي وتقديم مقدمة حول الذكاء الاصطناعي.\n• ثانيًا: الندوات والتدريبات الافتراضية باستخدام منصة Microsoft Teams وتتناول التخطيط الوظيفي والعمل.\n• ثالثًا: التأهيل للحصول على شهادة Microsoft Office Specialist (MOS) من خلال تدريبات افتراضية تمتد إلى 10 أيام تدريبية.`
  },
  {
    id: "weinnovate",
    title: "مبادرة نحن نبتكر WE INNOVATE",
    icon: <Lightbulb className="w-5 h-5" />,
    url: "https://weinnovate.te.eg/en",
    description: `تُعد مبادرة نحن نبتكر منصة متخصصة في مجالي الابتكار وريادة الأعمال، وتهدف إلى إعداد كوادر وطنية مؤهلة وتطوير مشروعات وشركات ناشئة متخصصة في مجال الأمن السيبراني. وتُنفذ المبادرة بالتعاون بين الشركة المصرية للاتصالات والمركز الوطني للاستعداد لطوارئ الحاسبات والشبكات.\n\nمحاور المبادرة:\n• المعسكرات التدريبية والأكاديمية: تغطي تخصصات في الأمن الهجومي والدفاعي وإدارة المخاطر.\n• الهاكاثون الوطني: مسابقة تهدف إلى تحفيز الشباب على تطوير حلول مبتكرة وفعالة للتحديات الواقعية في مجال الأمن السيبراني.\n• مسرّعة الأعمال الناشئة: دعم المشروعات والشركات في مراحلها التأسيسية الأولى وتوفير الإرشاد التقني والدعم المادي.`
  },
  {
    id: "nta",
    title: "المبادرة الوطنية لتأهيل قادة مصر الرقمية",
    icon: <ShieldCheck className="w-5 h-5" />,
    url: "https://nta.eg/ar-state-leadership-school.html",
    description: `تنفذ وزارة الاتصالات وتكنولوجيا المعلومات، بالتعاون مع الأكاديمية الوطنية للتدريب، مبادرة «قادة مصر الرقمية» بهدف تأهيل قيادات الجهاز الإداري للدولة، وتنمية مهاراتهم الرقمية والقيادية بما يساعدهم على قيادة التحول الرقمي وتطوير العمل الحكومي.\n\nتستهدف المبادرة القيادات الحكومية من غير المتخصصين في تكنولوجيا المعلومات، مثل مساعدي ومستشاري الوزراء، ونواب المحافظين.\n\nويشمل التدريب مهارات رقمية وشخصية، مثل التواصل والعمل الجماعي، بالإضافة إلى موضوعات التحول الرقمي، والقيادة الرقمية، وإدارة التغيير والأزمات، والأمن السيبراني، وإدارة المشروعات الرقمية. وتستمر المبادرة لمدة 54 ساعة موزعة على 9 أيام تدريبية.`
  }
];

const Initiatives = () => {
  const [activeTab, setActiveTab] = useState(initiativesData[0].id);

  const activeInitiative = initiativesData.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-20 font-sans" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-[#1b2a47] py-24 px-4 overflow-hidden shadow-lg border-b-4 border-[#d8bb88]">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-gradient-to-r from-blue-400 to-transparent rotate-12 transform blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] bg-gradient-to-l from-[#d8bb88] to-transparent rotate-12 transform blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-md border border-white/20">
               <LayoutGrid className="w-8 h-8 text-[#d8bb88]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              المبادرات <span className="text-[#d8bb88]">الوطنية</span>
            </h1>
            <p className="text-gray-300 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              تعرف على أبرز المبادرات القومية التي أطلقتها الدولة لتعزيز التحول الرقمي، وتأهيل الشباب، ودعم ريادة الأعمال التكنولوجية.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/3 xl:w-1/4 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sticky top-28">
              <h2 className="text-xl font-black text-[#1b2a47] mb-6 px-2">قائمة المبادرات</h2>
              <div className="flex flex-col gap-2">
                {initiativesData.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center gap-3 w-full text-right px-4 py-3.5 rounded-xl transition-all duration-300 ${
                        isActive 
                        ? 'bg-[#1b2a47] text-white shadow-md shadow-[#1b2a47]/20 scale-[1.02]' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#1b2a47] hover:scale-[1.01]'
                      }`}
                    >
                      <div className={`shrink-0 p-1.5 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100'}`}>
                         {item.icon}
                      </div>
                      <span className="font-bold text-sm leading-tight">{item.title}</span>
                      {isActive && (
                        <ChevronLeft className="w-4 h-4 mr-auto opacity-70" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Details Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInitiative.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header of the detail card */}
                <div className="border-b border-gray-100 p-8 md:p-10 bg-gray-50/50">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                      <h2 className="text-3xl font-black text-[#1b2a47] mb-4">{activeInitiative.title}</h2>
                      <div className="w-16 h-1 bg-[#d8bb88] rounded-full"></div>
                    </div>
                    <a 
                      href={activeInitiative.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#a81a1d] hover:bg-[#8a1417] text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-red-900/20 transition-all hover:-translate-y-1 shrink-0"
                    >
                      <span>زيارة الموقع الرسمي</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-10">
                  <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-loose whitespace-pre-line text-justify marker:text-[#d8bb88]">
                    {activeInitiative.description}
                  </div>

                  {/* Sub Initiatives Grid (Specifically for DEG) */}
                  {activeInitiative.subInitiatives && (
                    <div className="mt-12">
                      <h3 className="text-2xl font-black text-[#1b2a47] mb-8 relative inline-block">
                        البرامج الفرعية للمبادرة
                        <div className="absolute -bottom-2 right-0 w-full h-0.5 bg-gray-100">
                           <div className="w-1/3 h-full bg-[#1b2a47]"></div>
                        </div>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeInitiative.subInitiatives.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="group relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-[#1b2a47] hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col h-full"
                          >
                            <div className="absolute top-0 right-0 w-1.5 h-full bg-[#d8bb88] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <h4 className="text-xl font-black text-[#1b2a47] mb-4 group-hover:text-[#a81a1d] transition-colors">
                              {sub.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line mb-8 flex-grow">
                              {sub.content}
                            </p>
                            
                            <div className="mt-auto pt-4 border-t border-gray-100">
                              <a 
                                href={sub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-bold text-[#1b2a47] hover:text-[#a81a1d] transition-colors"
                              >
                                <span>اقرأ المزيد</span>
                                <ChevronLeft className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Initiatives;
