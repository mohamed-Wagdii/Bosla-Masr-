import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, GraduationCap, MonitorPlay, Users, Building2, CheckCircle2, Bookmark } from 'lucide-react';

const trainingData = [
  {
    id: "basic-digital-skills",
    title: "برامج تنمية المهارات الرقمية الأساسية",
    icon: <MonitorPlay className="w-5 h-5" />,
    description: `تهدف هذه البرامج إلى تطوير المهارات الرقمية الأساسية للمواطنين، سواء الطلاب أو الخريجين أو مستخدمي الإنترنت بشكل عام، ومساعدتهم على استخدام التكنولوجيا والإنترنت بطريقة آمنة وفعالة.`,
    initiatives: [
      {
        title: "مبادرة «مجتمع رقمي آمن»",
        description: "مبادرة تعليمية مجانية مقدمة من وزارة الاتصالات وتكنولوجيا المعلومات بالتعاون مع شركة Cisco، تهدف إلى تعليم أساسيات عن بُعد في مجالات الأمن السيبراني ومبادئ الشبكات، وتكنولوجيا المعلومات، والبرمجة، وإنترنت الأشياء.",
        sections: [
          {
            subtitle: "أهداف المبادرة",
            items: [
              "نشر الوعي الرقمي وتشجيع الاستخدام الآمن للإنترنت.",
              "تعلم أساسيات فحص الشبكات واكتشاف الأعطال وإصلاحها والاتصال بالإنترنت.",
              "تعلم كيفية إعداد أجهزة الكمبيوتر والأجهزة المحمولة واكتشاف المشكلات وحلها.",
              "التعرف على أساسيات البرمجة وتطوير البرامج باستخدام Python.",
              "التعرف على مفهوم إنترنت الأشياء (IoT)."
            ]
          },
          {
            subtitle: "الفئات المستهدفة",
            items: [
              "طلاب المدارس والجامعات.",
              "حديثو التخرج والباحثون عن فرص عمل.",
              "المهتمون بالبرامج والتخصصات الفنية.",
              "العاملون بالجهاز الإداري للدولة وقطاع الاتصالات.",
              "المهتمون بالشبكات والمدن الذكية.",
              "طلاب كليات الحاسبات ونظم المعلومات والهندسة وطلاب الدراسات العليا.",
              "مستخدمو مواقع التواصل الاجتماعي والمهتمون بالتعلم عن بُعد."
            ]
          },
          {
            subtitle: "المميزات والشهادات",
            items: [
              "تدريب مجاني بالكامل أونلاين.",
              "الحصول على شهادة معتمدة من وزارة الاتصالات وCisco Networking Academy.",
              "إمكانية دراسة أكثر من مقرر معًا والحصول على شهادة مجمعة.",
              "شهادات فردية متوفرة: Introduction to Cybersecurity, Networking Essentials, IT Essentials 8, Python Essentials 1, Introduction to IoT."
            ]
          },
          {
            subtitle: "البرامج التدريبية الـ 6 المتاحة",
            items: [
              "Introduction to Cybersecurity – مقدمة في الأمن السيبراني.",
              "Cybersecurity Essentials – أساسيات الأمن السيبراني.",
              "Networking Essentials – أساسيات الشبكات.",
              "IT Essentials 8 – أساسيات تكنولوجيا المعلومات.",
              "Python Essentials 1 – أساسيات البرمجة بلغة Python.",
              "Introduction to IoT – مقدمة في إنترنت الأشياء."
            ]
          },
          {
            subtitle: "خطوات التسجيل والتعلم",
            items: [
              "التسجيل على الموقع الرسمي للمبادرة واختيار البرنامج المطلوب.",
              "استلام رسالة تأكيد وموعد الفصل التدريبي المناسب عبر البريد.",
              "الانضمام إلى مجموعة دعم للتواصل مع المدربين والمنسقين.",
              "إنشاء حساب على المنصة التعليمية ودراسة المحتوى أونلاين.",
              "أداء الاختبارات المطلوبة في نهاية التدريب والحصول على الشهادة إلكترونيًا."
            ],
            ordered: true
          }
        ]
      }
    ]
  },
  {
    id: "admin-staff-skills",
    title: "تنمية القدرات الرقمية للجهاز الإداري",
    icon: <Users className="w-5 h-5" />,
    description: `يهدف البرنامج بشكل عام إلى تنمية المهارات والقدرات الرقمية للعاملين بالجهاز الإداري للدولة، سواء المنتقلين إلى العاصمة الإدارية الجديدة أو غير المنتقلين، لمساعدتهم على مواكبة التحول الرقمي وتطوير أساليب العمل الحكومي.`,
    subCategories: [
      {
        title: "أ. تنمية الثقافة الرقمية",
        description: "تهدف إلى نشر الوعي بالتحول الرقمي وتشجيع العاملين على استخدام التكنولوجيا الحديثة في العمل الحكومي.",
        programs: [
          {
            name: "التحول الرقمي للقيادات التنفيذية والإشرافية",
            desc: "تعريف القيادات بمفاهيم التحول الرقمي مثل الذكاء الاصطناعي، والبيانات الضخمة، وإنترنت الأشياء، وتنفذه «إيتيدا» عن بُعد."
          },
          {
            name: "أساسيات الابتكار والتفكير الإبداعي للقادة الحكوميين",
            desc: "نشر ثقافة الابتكار والتفكير الإبداعي وتطوير الخدمات الحكومية، وتنفذه «إيتيدا» عن بُعد."
          },
          {
            name: "التحول الرقمي لمكافحة الفساد",
            desc: "تعزيز مكافحة الفساد من خلال التحول الرقمي والحوكمة، وتنفذه الأكاديمية الوطنية لمكافحة الفساد."
          },
          {
            name: "أساسيات التحول الرقمي",
            desc: "تطوير المهارات الرقمية للعاملين لتحقيق أهداف «رؤية مصر الرقمية»، وينفذه المعهد القومي للاتصالات."
          }
        ]
      },
      {
        title: "ب. تنمية المهارات الرقمية",
        description: "تهدف إلى تمكين العاملين من استخدام تكنولوجيا المعلومات والاتصالات بشكل فعال.",
        programs: [
          {
            name: "برنامج أساسيات المهارات الرقمية",
            desc: "نشر الثقافة الرقمية وتمكين العاملين من الاستخدام الفعال للتكنولوجيا، وتنفذه مؤسسة «ICDL Arabia»."
          },
          {
            name: "مهارات الحاسب الآلي المتقدمة",
            desc: "تطوير مهارات استخدام الحاسب الآلي بشهادات معتمدة، تنفذها Microsoft وCisco وCertiport."
          }
        ]
      },
      {
        title: "ج. تنمية مهارات بوحدات نظم المعلومات",
        description: "تطوير المهارات الفنية والإدارية للعاملين في وحدات نظم المعلومات والتحول الرقمي.",
        programs: [
          { name: "تنمية المهارات القيادية والتخصصية لمديري وحدات التحول الرقمي." },
          { name: "تطوير مهارات العاملين في دعم البنية التحتية ودعم الأعمال." },
          { name: "تطوير مهارات العاملين في تكامل التطبيقات." }
        ]
      }
    ]
  },
  {
    id: "governorates-skills",
    title: "تنمية القدرات للمحافظات والمديريات التابعة",
    icon: <Building2 className="w-5 h-5" />,
    description: `تهدف هذه البرامج إلى تطوير المهارات الرقمية والإدارية للعاملين بالمحافظات والمديريات التابعة، سواء مقدمي الخدمات للمواطنين أو العاملين في مراكز الخدمات الحكومية.`,
    initiatives: [
      {
        title: "المبادرة القومية المسؤول الحكومي المحترف",
        description: "تهدف إلى تطوير مهارات مقدمي الخدمات الجماهيرية، خاصة العاملين في الصفوف الأمامية. وتنفذها الأكاديمية الوطنية للتدريب عبر التعلم عن بُعد والتفاعل المباشر."
      },
      {
        title: "تنمية وبناء قدرات مراكز الخدمات الحكومية",
        description: "تطوير المهارات الرقمية والشخصية والإدارية للعاملين في مراكز الخدمات الحكومية وأصحاب المراكز. وتنفذها الأكاديمية الوطنية لمكافحة الفساد."
      }
    ]
  }
];

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState(trainingData[0].id);

  const activeCategory = trainingData.find(item => item.id === activeTab);

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-20 font-sans" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-[#1b2a47] py-24 px-4 overflow-hidden shadow-lg border-b-4 border-[#d8bb88]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-gradient-to-l from-blue-400 to-transparent rotate-12 transform blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[120%] bg-gradient-to-r from-[#d8bb88] to-transparent rotate-12 transform blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-md border border-white/20">
               <GraduationCap className="w-8 h-8 text-[#d8bb88]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              البرامج <span className="text-[#d8bb88]">التدريبية</span>
            </h1>
            <p className="text-gray-300 font-medium text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              تعرف على برامج تنمية القدرات الرقمية الموجهة للمواطنين والطلاب والعاملين بالدولة لبناء مستقبل رقمي مستدام.
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
              <h2 className="text-xl font-black text-[#1b2a47] mb-6 px-2">التصنيفات التدريبية</h2>
              <div className="flex flex-col gap-2">
                {trainingData.map((item) => {
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
                key={activeCategory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header of the detail card */}
                <div className="border-b border-gray-100 p-8 md:p-10 bg-gray-50/50">
                  <h2 className="text-3xl font-black text-[#1b2a47] mb-4">{activeCategory.title}</h2>
                  <div className="w-16 h-1 bg-[#d8bb88] rounded-full mb-6"></div>
                  <p className="text-gray-600 font-medium leading-relaxed max-w-4xl">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-10">
                  
                  {/* Handle Direct Initiatives (e.g., Basic Skills & Governorates) */}
                  {activeCategory.initiatives && activeCategory.initiatives.map((initiative, initIdx) => (
                    <div key={initIdx} className="mb-12 last:mb-0">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-[#1b2a47]/10 flex items-center justify-center text-[#1b2a47]">
                          <Bookmark className="w-4 h-4" />
                        </div>
                        <h3 className="text-2xl font-black text-[#1b2a47]">{initiative.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-8 font-medium bg-gray-50 p-6 rounded-2xl border border-gray-100 border-r-4 border-r-[#d8bb88]">
                        {initiative.description}
                      </p>

                      {initiative.sections && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {initiative.sections.map((section, secIdx) => (
                            <div key={secIdx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                              <h4 className="text-lg font-bold text-[#1b2a47] mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#d8bb88]"></span>
                                {section.subtitle}
                              </h4>
                              <ul className={`space-y-3 ${section.ordered ? 'list-decimal list-inside' : ''}`}>
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx} className={`text-gray-600 text-sm leading-relaxed ${!section.ordered ? 'flex items-start gap-2' : 'pr-2'}`}>
                                    {!section.ordered && <CheckCircle2 className="w-4 h-4 text-[#d8bb88] shrink-0 mt-0.5" />}
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Handle Sub-categories (e.g., Admin Staff) */}
                  {activeCategory.subCategories && (
                    <div className="space-y-12">
                      {activeCategory.subCategories.map((sub, subIdx) => (
                        <div key={subIdx} className="relative">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="text-[#d8bb88] font-black text-2xl">{subIdx + 1}.</span>
                            <h3 className="text-xl md:text-2xl font-black text-[#1b2a47]">{sub.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed mb-8">{sub.description}</p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {sub.programs.map((prog, progIdx) => (
                              <div key={progIdx} className="group p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#1b2a47]/30 hover:bg-white hover:shadow-lg transition-all duration-300">
                                <h4 className="font-bold text-[#1b2a47] mb-2 group-hover:text-[#a81a1d] transition-colors">
                                  {prog.name}
                                </h4>
                                {prog.desc && (
                                  <p className="text-gray-500 text-sm leading-relaxed">
                                    {prog.desc}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
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

export default TrainingPrograms;
