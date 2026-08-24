import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import digilians from "../assets/digilians.png";

const InitiativePage = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    {
      id: "about",
      label: "عن المبادرة",
      contentTitle: "عن مبادرة الرواد الرقميون",
    },
    {
      id: "conditions",
      label: "شروط القبول",
      contentTitle: "شروط القبول",
    },
    {
      id: "diploma12",
      label: "الدبلوم المتخصص 12 شهراً",
      contentTitle: "الدبلوم المتخصص 12 شهراً",
    },
    {
      id: "intensive6",
      label: "البرنامج المكثف 4 أشهر",
      contentTitle: "البرنامج المكثف 4 أشهر",
    },
    {
      id: "community3",
      label: "المجتمع الرقمي 9 أشهر",
      contentTitle: "المجتمع الرقمي 9 أشهر",
    },
    {
      id: "career",
      label: "التوجيه المهني",
      contentTitle: "التوجيه المهني",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans" dir="rtl">
      {/* ================= HERO ================= */}

      <div className="relative bg-[#1b2a47] py-20 px-4 flex justify-center items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Card */}
        <div className="relative z-10 bg-white rounded-3xl p-10 max-w-2xl w-full text-center shadow-2xl">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <div className="flex justify-center mb-6">
            <img src={digilians} alt="Digilians" className="max-w-[180px]" />
          </div>

          <h1 className="text-3xl font-black text-[#1b2a47] mb-2">
            مبادرة الرواد الرقميون
          </h1>

          <p className="text-[#00A4EF] font-bold text-xl mb-6">DiGiLiANS</p>

          <p className="text-gray-500 font-medium mb-8 max-w-md mx-auto leading-relaxed">
            منحة تدريبية لتطوير مهارات الشباب في مجالات التكنولوجيا الحديثة
            وتأهيلهم لسوق العمل العالمي من خلال برامج متخصصة ومكثفة.
          </p>

          <button className="bg-[#a81a1d] hover:bg-[#8a1417] text-white px-12 py-3.5 rounded-full font-bold shadow-lg shadow-red-900/20 transition-all">
            قدم الآن
          </button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Current Title */}
        <motion.h2
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-2xl font-black text-center text-[#1b2a47] mb-12"
        >
          {tabs.find((tab) => tab.id === activeTab)?.contentTitle}
        </motion.h2>

        {/* ================= TABS CAROUSEL ================= */}

        <TabsCarousel
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* ================= DYNAMIC CONTENT ================= */}

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* ================= CONDITIONS ================= */}

              {activeTab === "conditions" && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <h3 className="text-xl font-black text-[#1b2a47] mb-6">
                    شروط القبول الأساسية:
                  </h3>

                  <ul className="space-y-4">
                    {[
                      "أن يكون المتقدم مصري الجنسية.",
                      "أن يكون من خريجي الجامعات المصرية (حكومية أو خاصة) أو المعاهد العليا.",
                      "التفرغ الكامل للبرنامج التدريبي.",
                      "اجتياز اختبارات القبول المحددة لكل مسار تدريبي.",
                      "إجادة اللغة الإنجليزية (مستوى متوسط على الأقل).",
                      "موقف محدد من التجنيد للذكور.",
                    ].map((condition, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#1b2a47] flex items-center justify-center shrink-0">
                          <Check size={14} className="text-[#d8bb88]" />
                        </div>

                        <span className="text-gray-700 font-medium leading-relaxed">
                          {condition}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 text-center">
                    <button className="bg-[#a81a1d] text-white px-10 py-3 rounded-full font-bold hover:bg-[#8a1417] transition-all shadow-md">
                      ابدأ التقديم
                    </button>
                  </div>
                </div>
              )}

              {/* about */}
              {activeTab === "about" && (
                <div className="max-w-4xl mx-auto p-10 text-right space-y-6 dir-rtl  antialiased subpixel-antialiased">
                  <h2 className="text-3xl text-center font-extrabold text-slate-900 p-5 mb-6 tracking-tight">
                    عن مبادرة الرواد الرقميون
                  </h2>

                  <p className="text-slate-900 text-lg  font-medium leading-relaxed text-justify">
                    تُمثل منحة "الرواد الرقميون" مشروعًا تدريبيًا مجانيًا أقرته
                    وزارة الاتصالات وتكنولوجيا المعلومات عام 2025 استجابةً
                    للتوجيهات الرئاسية، بهدف تطوير قدرات الكوادر الشابة، وتعزيز
                    فرص دمجهم في سوق العمل، ودعم نمو قطاع الاتصالات. تُستهدف
                    المبادرة الفئة العمرية بين 18 و32 عامًا من مختلف التخصصات
                    والأرجاء الجغرافية، وتغطي مجالات تقنية عالية الطلب مثل
                    الذكاء الاصطناعي، البرمجة، الأمن السيبراني، علوم البيانات،
                    والتصميم الرقمي. تُنفذ المنحة بالشراكة مع الأكاديمية
                    العسكرية المصرية ومجموعة من الرؤساء التنفيذيين للتكنولوجيا
                    عالميًا (مثل Google, AWS, Cisco, Microsoft, IBM, Huawei,
                    Oracle وغيرها)، وتتوزع على ثلاثة مسارات رئيسية: الدبلوم
                    المكثف (4 أشهر)، الدبلوم المكثف (4 أشهر)، الماجستير المهني
                    (12 شهرًا).
                  </p>

                  <p className="text-slate-900 text-lg font-medium leading-relaxed text-justify">
                    تعتمد المنحة نموذجًا شاملاً للتدريب يجمع بين المهارات
                    التقنية واللغوية والمهارات الشخصية، إلى جانب التطبيق
                    الميداني لدى أكثر من 30 شركة عالمية. كما تتضمن المبادرة
                    إقامة كاملة للمشاركين داخل مقر الأكاديمية العسكرية المصرية،
                    مع الإشراف على برنامج للإعداد البدني والرياضي طوال فترة
                    الدراسة.
                  </p>

                  {/* الأزرار */}
                  <div className="flex flex-col items-center gap-3 pt-6 font-semibold">
                    <button className="px-8 py-2 border-2 border-slate-700 rounded-full text-slate-900 hover:bg-slate-100 transition">
                      أقرأ المزيد
                    </button>

                    <button className="px-10 py-3 bg-[#8B1D1D] text-white font-bold rounded-full hover:bg-[#701717] transition shadow-md">
                      قدم الان
                    </button>
                  </div>
                </div>
              )}
              {activeTab === "intensive6" && (
                <div className="max-w-4xl mx-auto p-6 text-center space-y-6 dir-rtl antialiased subpixel-antialiased">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    الدبلوم المكثف (4 أشهر)
                  </h2>

                  <p className="text-slate-900 text-lg font-medium leading-relaxed text-center max-w-3xl mx-auto">
                    يركز على التطبيق العملي والتعلم التفاعلي ويُنفذ بالتعاون مع
                    شركاء الصناعة بقطاع الاتصالات وتكنولوجيا المعلومات ، ويغطي
                    مسارات تطوير البرمجيات، والذكاء الاصطناعي وعلوم البيانات،
                    وتحليل البيانات، والبنية التحتية والأمن السيبراني،
                    والتكنولوجيا التطبيقية، والفنون الرقمية.
                  </p>

                  {/* الأزرار */}
                  <div className="flex flex-col items-center gap-3 pt-4 font-semibold">
                    <button className="px-8 py-2 border-2 border-slate-700 rounded-full text-slate-900 hover:bg-slate-100 transition">
                      أقرأ المزيد
                    </button>

                    <button className="px-10 py-3 bg-[#8B1D1D] text-white font-bold rounded-full hover:bg-[#701717] transition shadow-md">
                      قدم الان
                    </button>

                
                  </div>
                </div>
              )}
              {/* ================= DIPLOMA ================= */}

              {activeTab === "diploma12" && (
                <div className="max-w-4xl mx-auto">
                  <div className="mb-10 text-center">
                    <div className="inline-flex gap-2 mb-6 flex-wrap justify-center">
                      <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200">
                        12 شهر
                      </span>

                      <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200">
                        مسار تخصصي
                      </span>

                      <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200">
                        عملي
                      </span>
                    </div>

                    <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
                      برنامج تدريبي متكامل يجمع بين التدريب الأكاديمي والعملي
                      لتمكينك من إتقان أحدث التقنيات وبناء مسار مهني قوي في
                      مجالات التكنولوجيا.
                    </p>
                  </div>

                  <h3 className="text-xl font-black text-[#1b2a47] mb-6 text-center">
                    نظرة عامة على البرنامج
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden mb-12">
                    <div className="p-6 text-center border-b md:border-b-0 md:border-l border-gray-200 bg-gray-50">
                      <p className="text-gray-500 text-sm font-bold mb-2">
                        مدة البرنامج
                      </p>

                      <p className="text-[#1b2a47] font-black text-2xl">
                        12 شهر
                      </p>
                    </div>

                    <div className="p-6 text-center border-b md:border-b-0 md:border-l border-gray-200 bg-gray-50">
                      <p className="text-gray-500 text-sm font-bold mb-2">
                        مسارات تخصصية
                      </p>

                      <p className="text-[#1b2a47] font-black text-2xl">4</p>
                    </div>

                    <div className="p-6 text-center bg-gray-50">
                      <p className="text-gray-500 text-sm font-bold mb-2">
                        الخبرة العملية
                      </p>

                      <p className="text-[#1b2a47] font-black text-2xl">
                        6 أسابيع
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#1b2a47] mb-6 text-center">
                    المسارات التخصصية
                  </h3>

                  <p className="text-gray-600 text-center font-medium leading-relaxed mb-8">
                    يتيح لك التعلم المباشر والتدريب العملي في مجالات الذكاء
                    الاصطناعي، علوم البيانات، الأمن السيبراني.
                  </p>

                  <div className="text-center">
                    <button className="border-2 border-gray-300 text-gray-600 px-8 py-2.5 rounded-full font-bold hover:bg-gray-50 transition-colors">
                      اقرأ المزيد
                    </button>
                  </div>
                </div>
              )}

              {/* ================= OTHER TABS ================= */}

              {["community3", "career"].includes(activeTab) && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                    <Check size={32} />
                  </div>

                  <h3 className="text-2xl font-black text-[#1b2a47] mb-4">
                    محتوى {tabs.find((tab) => tab.id === activeTab)?.label}
                  </h3>

                  <p className="text-gray-500 max-w-md mx-auto">
                    هذا المحتوى قيد التطوير وسيتم إضافته قريباً بناءً على
                    التصميم النهائي.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   TABS CAROUSEL
========================================================= */

const TabsCarousel = ({ tabs, activeTab, setActiveTab }) => {
  // نجيب الـ index الحقيقي للـ active tab
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  // ================= NEXT =================

  const nextTab = () => {
    const nextIndex = (activeIndex + 1) % tabs.length;

    setActiveTab(tabs[nextIndex].id);
  };

  // ================= PREVIOUS =================

  const prevTab = () => {
    const prevIndex = (activeIndex - 1 + tabs.length) % tabs.length;

    setActiveTab(tabs[prevIndex].id);
  };

  // ================= VISIBLE TABS =================

  const visibleTabs = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeIndex + offset + tabs.length) % tabs.length;

    return {
      ...tabs[index],
      offset,
      realIndex: index,
    };
  });

  return (
    <div className="relative mb-16 flex justify-center items-center">
      <div className="relative w-full h-[190px] flex items-center justify-center overflow-hidden">
        {/* ================= LEFT ARROW ================= */}

        <button
          onClick={prevTab}
          className="
            absolute
            left-2
            md:left-6
            z-30
            w-9
            h-9
            rounded-full
            border
            border-gray-200
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
            hover:bg-gray-50
            hover:border-[#1b2a47]
            transition-all
          "
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        {/* ================= CARDS ================= */}

        <div className="relative w-full max-w-[850px] h-full flex items-center justify-center">
          {visibleTabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                initial={false}
                animate={{
                  x: tab.offset * 165,

                  scale: isActive ? 1 : 0.88,

                  opacity: Math.abs(tab.offset) === 2 ? 0.65 : 1,

                  zIndex: isActive ? 20 : 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                }}
                className={`
                  absolute
                  w-[130px]
                  md:w-[150px]
                  h-[145px]
                  rounded-2xl
                  px-4
                  py-5
                  flex
                  items-center
                  justify-center
                  text-center
                  font-bold
                  border
                  overflow-hidden
                  cursor-pointer
                  transition-colors

                  ${
                    isActive
                      ? `
                        bg-[#1b2a47]
                        text-white
                        border-[#1b2a47]
                        shadow-2xl
                      `
                      : `
                        bg-white
                        text-gray-500
                        border-gray-200
                        shadow-sm
                        hover:border-[#d8bb88]
                      `
                  }
                `}
              >
                <span
                  className="
                    w-full
                    break-words
                    whitespace-normal
                    leading-relaxed
                    line-clamp-4
                  "
                >
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ================= RIGHT ARROW ================= */}

        <button
          onClick={nextTab}
          className="
            absolute
            right-2
            md:right-6
            z-30
            w-9
            h-9
            rounded-full
            border
            border-gray-200
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
            hover:bg-gray-50
            hover:border-[#1b2a47]
            transition-all
          "
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default InitiativePage;
