import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Globe2, Lightbulb, Rocket, BookOpen, Calendar, MapPin } from 'lucide-react';

const eventsData = [
  {
    id: 'international',
    title: 'الفعاليات الدولية',
    icon: <Globe2 className="w-5 h-5" />,
    description: 'مشاركة مصر وحضورها في النقاشات والفعاليات الدولية المتعلقة بمستقبل التكنولوجيا والاتصالات والتحول الرقمي.',
    events: [
      {
        title: 'القمة العالمية للبنية التحتية الرقمية',
        date: '3–4 أكتوبر 2024',
        description: 'شهدت القمة مباحثات مصرية مع مبعوث الأمين العام للأمم المتحدة للتكنولوجيا ومسؤولي البنك الدولي، إلى جانب اجتماعات مع برنامج الأمم المتحدة الإنمائي والاتحاد الدولي للاتصالات وشركة إنفوسيس حول قضايا البنية التحتية والتحول الرقمي.'
      },
      {
        title: 'الجمعية العالمية لتقييس الاتصالات 2024',
        date: '15 أكتوبر 2024',
        description: 'تمثل مساحة دولية لمناقشة معايير الاتصالات وتطورها، وتأتي مشاركة مصر ضمن جهودها في دعم التعاون الدولي والمساهمة في صياغة مستقبل قطاع الاتصالات.'
      },
      {
        title: 'مؤتمر المناخ COP29',
        date: '21–26 نوفمبر 2024',
        description: 'سلّطت مشاركة وزارة الاتصالات الضوء على دور تكنولوجيا المعلومات والاتصالات في دعم التنمية المستدامة ومواجهة التحديات المرتبطة بالمناخ.'
      },
      {
        title: 'اجتماع مجلس الاتحاد الدولي للاتصالات',
        date: '17 و29 يونيو 2025',
        description: 'متابعة القضايا الدولية المنظمة لقطاع الاتصالات وتعزيز الحضور المصري داخل المنظومة الدولية للاتصالات.'
      },
      {
        title: 'زيارة فيتنام – البعثة الوزارية',
        date: '24–28 أكتوبر 2025',
        description: 'مناقشة ملفات الأمن السيبراني والعدالة الرقمية وبناء القدرات، إلى جانب بحث فرص التعاون والاستثمار مع الشركات العالمية.'
      },
      {
        title: 'منتدى لشبونة 2025',
        date: '28–30 أكتوبر 2025',
        description: 'مشاركة مصر في فعاليات دولية مرتبطة بالتكنولوجيا والاتصالات، مع إبراز دور مصر في الحوار حول مستقبل القطاع الرقمي.'
      },
      {
        title: 'أسبوع جنيف الرقمي 2026',
        date: '19 يوليو 2026',
        description: 'محطة دولية تجمع أبرز الملفات المرتبطة بالتكنولوجيا والاتصالات والتحول الرقمي، يعكس حضور مصر في النقاشات المتعلقة بمستقبل القطاع.'
      }
    ]
  },
  {
    id: 'national',
    title: 'مبادرات وبرامج وطنية',
    icon: <Lightbulb className="w-5 h-5" />,
    description: 'المبادرات والمؤتمرات الوطنية التي تهدف لدعم التحول الرقمي والذكاء الاصطناعي والتنمية المستدامة محلياً.',
    events: [
      {
        title: 'اليوم الدولي للفتيات في مجال تكنولوجيا المعلومات',
        date: '30 مارس – 24 أبريل 2025',
        description: 'امتدت الفعاليات بهدف دعم مشاركة الفتيات في التكنولوجيا والمساهمة في بناء تحول رقمي أكثر شمولًا.'
      },
      {
        title: 'المؤتمر الإقليمي لحماية البيانات الشخصية',
        date: '15–17 أبريل 2025',
        description: 'ناقش المؤتمر قضايا الخصوصية وحماية البيانات، وتضمن ورشة تدريب المدربين المرتبطة ببرنامج التدريب في مجال حقوق الإنسان.'
      },
      {
        title: 'قمة FDC 2025',
        date: '28–30 أبريل 2025',
        description: 'شملت مناقشات حول تأثير الذكاء الاصطناعي على المجتمع والاقتصاد وتقديم مساحة للحوار حول التقنيات الجديدة وتأثيرها على مستقبل الأعمال.'
      },
      {
        title: 'مبادرة Build with AI – النسخة المصرية',
        date: '29 مارس – 7 يونيو 2026',
        description: 'تجربة تجمع بين الذكاء الاصطناعي وتنمية مهارات المطورين، بالتعاون بين معهد تكنولوجيا المعلومات وجوجل للمطورين.'
      },
      {
        title: 'المبادرة الوطنية للمشروعات الخضراء الذكية – الدورة 4',
        date: '23 أبريل – 10 يونيو 2026',
        description: 'بدأت الدورة الرابعة بفعاليات تستهدف دعم الأفكار والمشروعات التي تجمع بين الابتكار والاستدامة لتقديم حلول للتحديات البيئية.'
      },
      {
        title: 'مؤتمر أفريقيا الدامجة 2026',
        date: '19–30 مايو 2026',
        description: 'ندوة تناولت تطبيقات الذكاء الاصطناعي في التكنولوجيات المساعدة وتسليط الضوء على دور التكنولوجيا في تعزيز الشمول وإتاحة الفرص.'
      }
    ]
  },
  {
    id: 'startups',
    title: 'دعم ريادة الأعمال والشركات الناشئة',
    icon: <Rocket className="w-5 h-5" />,
    description: 'فعاليات وبرامج مخصصة لدعم منظومة الابتكار، مساعدة رواد الأعمال، وتطوير الشركات الناشئة.',
    events: [
      {
        title: 'معسكر الشركات الناشئة',
        date: '19 ديسمبر 2024',
        description: 'شهدت الدورة الخامسة توفير بيئة تساعد رواد الأعمال على تطوير مشروعاتهم والاستفادة من منظومة الابتكار.'
      },
      {
        title: 'Scale Up',
        date: '16 فبراير 2025',
        description: 'انطلقت الدورة الثالثة بالتعاون بين 500 Global وإيتيدا، ضمن جهود دعم الشركات ذات إمكانات النمو للانتقال إلى مراحل أكثر تقدمًا.'
      },
      {
        title: 'برنامج Invest IT',
        date: '24 مارس 2025',
        description: 'أعلن مركز الإبداع التكنولوجي عن الشركات الناشئة المنضمة بدعم من Flat6Labs، لربط الشركات بفرص الاستثمار وتطوير أعمالها.'
      },
      {
        title: 'IT Start',
        date: '22 أبريل 2025',
        description: 'تأتي مبادرة الرواد الرقميون ضمن جهود بناء جيل جديد من الشباب القادر على دخول مجالات التكنولوجيا وريادة الأعمال.'
      },
      {
        title: 'Future The Hack',
        date: '29 يوليو 2025',
        description: 'اختتم مركز إبداع مصر الرقمية ببورسعيد هاكاثون Hack The Future، تجربة تجمع بين التحديات التقنية والعمل الجماعي.'
      },
      {
        title: 'Agrimakers Hackathon',
        date: '21 أغسطس 2025',
        description: 'رحلة ركزت على تطوير أفكار وحلول مبتكرة في مجال التكنولوجيا والزراعة، ودعم الشباب أصحاب الأفكار في أسوان.'
      },
      {
        title: 'قمة ومعرض عالم الذكاء الاصطناعي',
        date: '23 أغسطس – 10 سبتمبر 2025',
        description: 'استضافة مصر للنسخة الأولى في الشرق الأوسط وأفريقيا، يعكس وضع الذكاء الاصطناعي في قلب الحوار الإقليمي حول الابتكار.'
      },
      {
        title: 'قمة تكني الإسكندرية 2025',
        date: '5 أكتوبر 2025',
        description: 'مساحة تجمع رواد الأعمال والشركات الناشئة والمجتمع التكنولوجي حول فرص الابتكار والنمو بمشاركة وزير الاتصالات.'
      },
      {
        title: 'Stage Founders Creativa',
        date: '12 يناير 2026',
        description: 'إطلاق برنامج بالشراكة مع الوكالة الألمانية للتعاون الدولي وFlat6Labs، لدعم رواد الأعمال والاستعداد لمراحل النمو.'
      },
      {
        title: 'Gate Invest Creativa',
        date: '20 يناير 2026',
        description: 'برنامج لفتح مسارات أقرب إلى الاستثمار ونمو الشركات الناشئة، كجزء من منظومة دعم ريادة الأعمال.'
      },
      {
        title: 'ملتقى كرياتيفا السنوي 2026',
        date: '16 فبراير 2026',
        description: 'جمع مجتمع الشركات الناشئة ورواد الأعمال مع التركيز على دعم النظام البيئي للابتكار وتعزيز فرص التواصل.'
      }
    ]
  },
  {
    id: 'training',
    title: 'برامج التدريب وبناء القدرات',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'خطط التدريب والتأهيل المستمر للشباب والكوادر لتلبية احتياجات سوق العمل الرقمي المتطور.',
    events: [
      {
        title: 'برنامج تدريب المدربين',
        date: '14 يوليو 2024',
        description: 'نظم معهد تكنولوجيا المعلومات بالتعاون مع الهند برنامجًا لدعم نقل المعرفة وبناء قدرات المدربين.'
      },
      {
        title: 'تكنولوجيا المعلومات لممارسي القانون',
        date: '31 يوليو 2024',
        description: 'برنامج متخصص يربط المعرفة القانونية بالمهارات والتطبيقات التكنولوجية الحديثة.'
      },
      {
        title: 'التدريب الاحترافي ITI',
        date: '8 أغسطس 2024',
        description: 'إطلاق خمس دورات تدريبية بالتعاون مع فيكتور العالمية عبر مهارة-تك، لتطوير مهارات تقنية مرتبطة بالصناعة.'
      },
      {
        title: 'أكاديمية الأمن السيبراني',
        date: '21 أغسطس 2024',
        description: 'تأهيل الشباب وتطوير مهاراتهم في مجال الأمن السيبراني لدعم جاهزيتهم للتعامل مع سوق العمل الرقمي.'
      },
      {
        title: 'مبادرة أجيال مصر الرقمية',
        date: '13 ديسمبر 2024',
        description: 'اختتام الفعاليات بحفل تخرج وتكريم المتميزين في رحلة تستهدف تطوير مهارات الشباب الرقمية.'
      },
      {
        title: 'التدريب الصيفي NTI',
        date: '30 يوليو 2025',
        description: 'معسكر صيفي لتزويد الطلاب بالمهارات التي يحتاجها سوق العمل والانتقال من المعرفة الأكاديمية للمهارات العملية.'
      },
      {
        title: 'المهارات الرقمية الأساسية والمتقدمة',
        date: '2024–2026',
        description: 'منظومة مبادرات لبناء المهارات الرقمية بمستويات مختلفة تدعم التعلم المستمر والاستعداد لسوق العمل.'
      }
    ]
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState(eventsData[0].id);

  const activeRoadmap = eventsData.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-20 font-sans" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-[#1b2a47] py-24 px-4 overflow-hidden shadow-lg border-b-4 border-[#d8bb88]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-gradient-to-l from-green-400 to-transparent rotate-12 transform blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[120%] bg-gradient-to-r from-[#d8bb88] to-transparent rotate-12 transform blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-md border border-white/20">
               <Calendar className="w-8 h-8 text-[#d8bb88]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              الأحداث و <span className="text-[#d8bb88]">الفعاليات</span>
            </h1>
            <p className="text-gray-300 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              تتبع مسار الأحداث والمبادرات والفعاليات المرتبطة بالتكنولوجيا والتحول الرقمي من خلال التسلسل الزمني (Roadmaps).
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
              <h2 className="text-xl font-black text-[#1b2a47] mb-6 px-2">التصنيفات (Roadmaps)</h2>
              <div className="flex flex-col gap-2">
                {eventsData.map((item) => {
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

          {/* Timeline Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoadmap.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header of the detail card */}
                <div className="border-b border-gray-100 p-8 md:p-10 bg-gray-50/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-[#1b2a47]">
                      {activeRoadmap.icon}
                    </div>
                    <h2 className="text-3xl font-black text-[#1b2a47]">{activeRoadmap.title}</h2>
                  </div>
                  <div className="w-16 h-1 bg-[#d8bb88] rounded-full mb-6"></div>
                  <p className="text-gray-600 font-medium leading-relaxed max-w-3xl">
                    {activeRoadmap.description}
                  </p>
                </div>

                {/* Vertical Timeline Body */}
                <div className="p-8 md:p-10 relative">
                  
                  {/* The Vertical Line */}
                  <div className="absolute right-[43px] md:right-[53px] top-[40px] bottom-[40px] w-0.5 bg-gradient-to-b from-[#d8bb88] via-gray-200 to-transparent"></div>

                  <div className="space-y-12">
                    {activeRoadmap.events.map((event, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        key={idx} 
                        className="relative flex items-start group"
                      >
                        {/* Timeline Node */}
                        <div className="relative z-10 shrink-0 w-6 h-6 rounded-full bg-white border-4 border-[#d8bb88] shadow-sm mt-1.5 group-hover:scale-125 group-hover:bg-[#d8bb88] transition-all duration-300"></div>
                        
                        {/* Timeline Content */}
                        <div className="pr-8 md:pr-12 w-full">
                          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 group-hover:border-[#d8bb88]/30 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-2 h-full bg-[#d8bb88] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                              <h3 className="text-xl font-bold text-[#1b2a47] group-hover:text-[#a81a1d] transition-colors">{event.title}</h3>
                              <div className="flex items-center gap-2 text-sm font-bold text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm whitespace-nowrap w-fit">
                                <Calendar className="w-4 h-4 text-[#d8bb88]" />
                                {event.date}
                              </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Events;
