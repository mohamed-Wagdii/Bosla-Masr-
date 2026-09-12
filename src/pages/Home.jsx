import {
  Search as SearchIcon,
  Compass,
  Globe,
  Users,
  Accessibility,
  Car,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import header from "../assets/headerPhoto.png";
import nesr from "../assets/nesr.png";
import eteestalat from "../assets/etesalatBASE.png";
import etesalat2 from "../assets/Frame2.png";

const MinistryCard = ({
  ministry,
  isActive,
  onClick,
  onMoreClick,
  position,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center w-full z-10 transition-all duration-500 ease-in-out"
      dir="rtl"
    >
      {/* SVG Connector Lines — hidden on mobile */}

      {position === "middle" && (
        <svg className="hidden lg:block absolute top-1/2 right-[-200px] w-[200px] h-[40px] overflow-visible -translate-y-1/2 z-0">
          <path
            d="M 0 20 L 200 20"
            fill="none"
            stroke="#d8bb88"
            strokeWidth="2"
            className="transition-all duration-500"
          />
          <circle
            cx="200"
            cy="20"
            r="8"
            fill="#d8bb88"
            stroke="white"
            strokeWidth="4"
            className="shadow-md"
          />
        </svg>
      )}

      {position === "top" && (
        <svg className="hidden lg:block absolute top-1/2 right-[-200px] w-[200px] h-[120px] overflow-visible -translate-y-[2px] z-0">
          <path
            d="M 0 0 L 40 0 L 200 100"
            fill="none"
            stroke="#d8bb88"
            strokeWidth="2"
            className="transition-all duration-500"
          />
          <circle
            cx="200"
            cy="100"
            r="8"
            fill="#d8bb88"
            stroke="white"
            strokeWidth="4"
            className="shadow-md"
          />
        </svg>
      )}

      {position === "bottom" && (
        <svg className="hidden lg:block absolute bottom-1/2 right-[-200px] w-[200px] h-[120px] overflow-visible translate-y-[2px] z-0">
          <path
            d="M 0 120 L 40 120 L 200 20"
            fill="none"
            stroke="#d8bb88"
            strokeWidth="2"
            className="transition-all duration-500"
          />
          <circle
            cx="200"
            cy="20"
            r="8"
            fill="#d8bb88"
            stroke="white"
            strokeWidth="4"
            className="shadow-md"
          />
        </svg>
      )}

      {/* ================= CARD ================= */}

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`relative flex items-stretch p-3 rounded-[28px] cursor-pointer transition-all duration-500 w-full z-10 min-h-[180px] sm:min-h-[220px] md:min-h-[300px] ${
          isActive
            ? "bg-[#1b2a47] text-white shadow-2xl scale-[1.02] border border-[#d8bb88]/30"
            : "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:shadow-md scale-100"
        }`}
      >
        {/* ================= IMAGE ================= */}

        <div
          className={`w-[90px] sm:w-[120px] md:w-[160px] rounded-[22px] flex flex-col items-center justify-center overflow-hidden border transition-all duration-500 flex-shrink-0 ${
            isActive
              ? "border-[#d8bb88] bg-gradient-to-b from-slate-600 to-slate-800"
              : "border-gray-100 bg-white"
          }`}
        >
          <div className="h-full flex items-center justify-center">
            <img
              src={isHovered ? etesalat2 : eteestalat}
              alt="Pharaoh"
              className={`h-full transition-all duration-300 ${
                isActive
                  ? "filter brightness-0 invert sepia saturate-200 hue-rotate-[350deg]"
                  : "filter"
              }`}
            />
          </div>
        </div>

        {/* ================= TEXT ================= */}

        <div className="flex-1 px-4 sm:px-6 md:px-10 py-4 sm:py-5 text-right flex flex-col justify-center">
          <h3
            className={`font-black text-lg sm:text-2xl md:text-3xl mb-4 ${
              isActive ? "text-white" : "text-[#1b2a47]"
            }`}
          >
            {ministry.title}
          </h3>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {[
              "12 خدمة",
              "8 مبادرات",
              "15 كورس",
              "6 فعاليات",
            ].map((label) => (
              <span
                key={label}
                className={`text-xs sm:text-sm md:text-base px-2 sm:px-4 py-2 sm:py-3 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${
                  isActive
                    ? "bg-[#334155] text-white border-transparent"
                    : "bg-gray-50 text-gray-600 border-gray-200"
                }`}
              >
                {label}
              </span>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoreClick();
            }}
            className={`w-full py-2.5 sm:py-3.5 rounded-full text-sm sm:text-base font-bold transition-colors duration-500 border ${
              isActive
                ? "border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
          >
            المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

/* ===================================================== */
/* ================= SERVICE BOX ======================= */
/* ===================================================== */

const ServiceBox = ({
  title,
  icon: Icon,
  isRight,
  onMouseEnter,
  onMouseLeave,
}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#d8bb88] transition-all cursor-pointer w-full group ${
      isRight ? "flex-row-reverse text-left" : "text-right"
    }`}
  >
    <div className="bg-[#f5f7fa] p-2.5 rounded-xl text-[#1b2a47] group-hover:bg-[#1b2a47] group-hover:text-white transition-colors duration-300 shrink-0">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
    </div>

    <span className="font-bold text-sm sm:text-base md:text-lg text-gray-800 flex-1 group-hover:text-[#1b2a47] transition-colors">
      {title}
    </span>
  </div>
);

/* ===================================================== */
/* ======================= HOME ========================= */
/* ===================================================== */

const Home = () => {
  const navigate = useNavigate();

  const [needleAngle, setNeedleAngle] = useState(15);
  const [activeMinIndex, setActiveMinIndex] = useState(1);
  const [newsStartIndex, setNewsStartIndex] = useState(0);
  const [hoveredNewsIndex, setHoveredNewsIndex] = useState(null);

  /* ================= MINISTRIES ================= */

  const ministriesList = [
    {
      id: 0,
      title: "وزارة الاتصالات و المعلومات",
    },
    {
      id: 1,
      title: "وزارة الاتصالات و المعلومات",
    },
    {
      id: 2,
      title: "وزارة الاتصالات و المعلومات",
    },
  ];

  const handleNextMin = () => {
    setActiveMinIndex((prev) => (prev + 1) % 3);
  };

  const handlePrevMin = () => {
    setActiveMinIndex((prev) => (prev - 1 + 3) % 3);
  };

  /* ================= NEWS ================= */

  const news = [
    {
      title: "إطلاق النسخة الجديدة من بوابة مصر الرقمية لخدمة المواطنين",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "وزير الاتصالات يشهد توقيع اتفاقيات في مجال الذكاء الاصطناعي",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "افتتاح مركز ابداع مصر الرقمية (Creativa) في محافظة جديدة",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: 'تفاصيل مبادرة "أشبال مصر الرقمية" للعام الجديد',
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "أحدث تطورات البنية التكنولوجية والخدمات الرقمية",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const visibleNews = [
    ...news.slice(newsStartIndex),
    ...news.slice(0, newsStartIndex),
  ];
  const showNextNews = () =>
    setNewsStartIndex((current) => (current + 1) % news.length);
  const showPreviousNews = () =>
    setNewsStartIndex((current) => (current - 1 + news.length) % news.length);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* ================================================= */}
      {/* =================== HERO ======================== */}
      {/* ================================================= */}

      <div className="relative h-[60vh] min-h-[420px] md:h-[65vh] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={header}
            alt="header"
            className="w-full h-full object-cover object-center saturate-125 contrast-110 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center mt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1b2a47] mb-4 md:mb-6 drop-shadow-md"
          >
            بوصلة مصر
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-slate-100 mb-6 md:mb-10 font-bold drop-shadow-sm leading-relaxed"
          >
            من حضارة أرشدت العالم...
            <br />
            إلى بوصلة ترشدك اليوم
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto bg-white rounded-full shadow-2xl border border-gray-100 flex items-center p-1.5 sm:p-2"
          >
            <div className="bg-[#1b2a47] p-2.5 sm:p-3.5 rounded-full text-white cursor-pointer hover:bg-blue-900 transition-colors shadow-md shrink-0">
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <input
              type="text"
              placeholder="ابحث عن..."
              className="flex-1 bg-transparent border-none outline-none px-3 sm:px-6 text-base sm:text-lg text-gray-800 placeholder-gray-400 font-medium min-w-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-5 sm:mt-8"
          >
            {[
              "بوابة الدعم القومي",
              "منح مجانية",
              "وظائف حكومية",
              "مبادرة iTi",
            ].map((tag, idx) => (
              <span
                key={tag}
                onClick={() => {
                  if (tag === "وظائف حكومية") navigate("/jobs");
                  else if (tag === "مبادرة iTi") navigate("/training-programs");
                  else navigate("/search");
                }}
                className="bg-white border-2 border-transparent px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-gray-600 cursor-pointer hover:border-[#d8bb88] hover:text-[#1b2a47] transition-all shadow-md flex items-center gap-1.5 sm:gap-2"
              >
                <Compass className="w-3 h-3 sm:w-4 sm:h-4 text-[#d8bb88]" />
                {tag}
                {idx === 0 && (
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1" />
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ============== MINISTRIES SECTION =============== */}
      {/* ================================================= */}

      <div className="w-full relative py-12 md:py-20 bg-white min-h-[600px] md:min-h-[800px] flex items-center overflow-x-clip">
        {/* Top Titles */}

        <div className="absolute top-6 md:top-10 left-0 w-full px-4 md:px-10 flex justify-between items-start z-30">
          <button
            onClick={() => navigate("/ministries")}
            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 border border-gray-200 rounded-full text-sm sm:text-base font-bold text-gray-600 bg-white hover:bg-gray-50 hover:border-[#1b2a47] hover:text-[#1b2a47] transition-all shadow-sm cursor-pointer"
          >
            جميع الوزارات
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b2a47]">
              الوزارات
            </h2>
          </div>
        </div>

        {/* Cards Stack & Wheel Wrapper */}

        <div className="relative z-10 flex flex-col items-center w-full max-w-full md:max-w-[75%] lg:max-w-[55%] mx-auto mt-20 md:mt-24 px-4 md:px-0">
          {/* Golden Wheel — hidden on mobile/tablet */}

          <motion.div
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-[18px] border-[#d8bb88] items-center justify-center z-0 pointer-events-none shadow-xl"
            style={{ right: "-960px" }}
            animate={{ rotate: activeMinIndex * -20 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 15,
            }}
          >
            {/* Egyptian Eagle */}

            <motion.div
              className="w-[600px] h-[600px] flex items-center justify-center opacity-100"
              animate={{ rotate: activeMinIndex * 20 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
              }}
            >
              <img
                src={nesr}
                alt="النسر المصري"
                className="relative right-0 h-full w-auto max-w-full object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Previous */}

          <div
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mb-6 md:mb-8 hover:bg-gray-50 cursor-pointer transition-colors z-20"
            onClick={handlePrevMin}
          >
            <ChevronUp className="w-5 h-5 text-gray-500" />
          </div>

          {/* Cards */}

          <div className="space-y-4 md:space-y-10 relative w-full flex flex-col items-center z-20">
            {ministriesList.map((min, idx) => (
              <MinistryCard
                key={min.id}
                ministry={min}
                isActive={activeMinIndex === idx}
                onClick={() => setActiveMinIndex(idx)}
                onMoreClick={() => navigate("/ministry")}
                position={
                  idx === 0
                    ? "top"
                    : idx === 1
                    ? "middle"
                    : "bottom"
                }
              />
            ))}
          </div>

          {/* Next */}

          <div
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mt-6 md:mt-8 hover:bg-gray-50 cursor-pointer transition-colors z-20"
            onClick={handleNextMin}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ============== COMPASS SERVICES ================= */}
      {/* ================================================= */}

      <div className="w-full bg-[#f8f9fa] py-16 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-[#1b2a47] mb-12 md:mb-32">
            ما الخدمة التي تحتاجها؟
          </h2>

          {/* Mobile: Simple grid. Desktop: Compass layout */}

          {/* Mobile grid (hidden on lg+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden mb-8">
            {[
              { title: "خدمات رقمية واتصالات", icon: Globe },
              { title: "خدمات المرور", icon: Car },
              { title: "خدمات الدعم المجتمعي", icon: Users },
              { title: "خدمات العمل والتوظيف", icon: Briefcase },
              { title: "خدمات ذوي الهمم", icon: Accessibility },
              { title: "منصات التعليم العالي", icon: GraduationCap },
            ].map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#d8bb88] transition-all cursor-pointer group text-right"
              >
                <div className="bg-[#f5f7fa] p-2.5 rounded-xl text-[#1b2a47] group-hover:bg-[#1b2a47] group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm text-gray-800 flex-1">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop compass layout (hidden on mobile) */}
          <div className="hidden lg:flex relative w-full mx-auto justify-between items-center h-[400px]">
            {/* Left Services */}

            <div className="flex flex-col gap-12 z-10">
              <ServiceBox
                title="خدمات رقمية واتصالات"
                icon={Globe}
                isRight={false}
                onMouseEnter={() => setNeedleAngle(-55)}
                onMouseLeave={() => setNeedleAngle(15)}
              />

              <ServiceBox
                title="خدمات الدعم المجتمعي"
                icon={Users}
                isRight={false}
                onMouseEnter={() => setNeedleAngle(-90)}
                onMouseLeave={() => setNeedleAngle(15)}
              />

              <ServiceBox
                title="خدمات ذوي الهمم"
                icon={Accessibility}
                isRight={false}
                onMouseEnter={() => setNeedleAngle(-125)}
                onMouseLeave={() => setNeedleAngle(15)}
              />
            </div>

            {/* Compass */}

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] xl:w-[380px] xl:h-[380px] z-0"
              onMouseLeave={() => setNeedleAngle(15)}
            >
              <div className="w-full h-full rounded-full border-[16px] border-[#1b2a47] relative shadow-xl bg-white flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border-[3px] border-dashed border-red-500/30" />

                <div className="absolute inset-10 rounded-full border border-gray-100 flex items-center justify-center">
                  <motion.div
                    className="relative w-12 xl:w-16 h-[220px] xl:h-[280px] flex flex-col items-center justify-center origin-center"
                    animate={{ rotate: needleAngle }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 14,
                      mass: 0.8,
                    }}
                  >
                    <div className="w-0 h-0 border-l-[24px] xl:border-l-[30px] border-l-transparent border-r-[24px] xl:border-r-[30px] border-r-transparent border-b-[110px] xl:border-b-[140px] border-b-[#e53e3e]" />

                    <div className="w-0 h-0 border-l-[24px] xl:border-l-[30px] border-l-transparent border-r-[24px] xl:border-r-[30px] border-r-transparent border-t-[110px] xl:border-t-[140px] border-t-[#1b2a47]" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 xl:w-12 h-10 xl:h-12 rounded-full bg-[#d8bb88] border-[4px] border-white shadow-md z-10 flex items-center justify-center">
                      <div className="w-3 xl:w-4 h-3 xl:h-4 rounded-full bg-[#1b2a47]" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Services */}

            <div className="flex flex-col gap-12 z-10">
              <ServiceBox
                title="خدمات المرور"
                icon={Car}
                isRight={true}
                onMouseEnter={() => setNeedleAngle(55)}
                onMouseLeave={() => setNeedleAngle(15)}
              />

              <ServiceBox
                title="خدمات العمل والتوظيف"
                icon={Briefcase}
                isRight={true}
                onMouseEnter={() => setNeedleAngle(90)}
                onMouseLeave={() => setNeedleAngle(15)}
              />

              <ServiceBox
                title="منصات التعليم العالي"
                icon={GraduationCap}
                isRight={true}
                onMouseEnter={() => setNeedleAngle(125)}
                onMouseLeave={() => setNeedleAngle(15)}
              />
            </div>
          </div>

          {/* More Services */}

          <div className="flex justify-center mt-12 md:mt-32">
            <button className="flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-base sm:text-lg font-bold text-gray-700 transition-all shadow-sm">
              <SearchIcon className="w-5 sm:w-6 h-5 sm:h-6 text-gray-500" />
              المزيد من الخدمات
            </button>
          </div>

          {/* Popular Services */}

          <div className="mt-12 md:mt-24 text-center">
            <p className="text-gray-500 font-bold mb-6 md:mb-10 text-base sm:text-xl">
              الخدمات الأكثر شيوعا
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
              {[
                "بطاقة الرقم القومي",
                "استخراج شهادة ميلاد مميكنة",
                "لا توقف السفر",
                "تراخيص المركبات",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-gray-200 px-5 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold text-gray-600 shadow-sm flex items-center gap-2 sm:gap-3 cursor-pointer hover:border-[#d8bb88] hover:text-[#1b2a47] transition-all"
                >
                  <Compass className="w-4 sm:w-5 h-4 sm:h-5 text-[#d8bb88]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ================= NEWS SECTION ================== */}
      {/* ================================================= */}

      <div className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b2a47] mb-10 md:mb-16">
            اخر الاخبار
          </h2>

          <div className="flex items-center justify-between gap-2">
            {/* السهم الأيمن */}
            <button
              onClick={showNextNews}
              aria-label="الخبر التالي"
              className="p-2.5 sm:p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-md transition-all text-gray-500 hover:text-gray-800 flex-shrink-0 z-50"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* حاوية الشرايح المتداخلة */}
            <div className="flex-1 flex justify-center items-center overflow-hidden sm:overflow-visible py-6 sm:py-10">
              <motion.div
                key={newsStartIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                onMouseLeave={() => setHoveredNewsIndex(null)}
                className="flex items-center justify-center -space-x-8 sm:-space-x-12 md:-space-x-16 space-x-reverse"
              >
                {visibleNews.map((item, idx) => (
                  <div
                    key={`${item.title}-${idx}`}
                    onMouseEnter={() => setHoveredNewsIndex(idx)}
                    style={{
                      zIndex:
                        (hoveredNewsIndex ?? 0) === idx
                          ? 50
                          : visibleNews.length - idx,
                    }}
                    className={`relative w-56 sm:w-64 md:w-72 lg:w-80 bg-white border border-gray-200 rounded-[28px] p-4 sm:p-5 transition-all duration-300 flex-shrink-0 text-right flex flex-col justify-between h-[380px] sm:h-[420px] md:h-[480px] cursor-pointer ${
                      (hoveredNewsIndex ?? 0) === idx
                        ? "scale-105 opacity-100 border-[#d8bb88] shadow-2xl"
                        : "scale-[0.93] opacity-55 blur-[0.5px] shadow-sm"
                    }`}
                  >
                    {/* صورة الخبر */}
                    <div className="relative overflow-hidden rounded-[20px] h-40 sm:h-48 md:h-56 w-full mb-4 sm:mb-5 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = header;
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* تفاصيل الخبر */}
                    <div className="flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="font-bold text-sm sm:text-base md:text-lg text-[#1b2a47] line-clamp-2 mb-2 sm:mb-3 leading-relaxed">
                          {item.title}
                        </h3>

                        {item.description && (
                          <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 mb-4 sm:mb-5 leading-normal">
                            {item.description}
                          </p>
                        )}
                      </div>

                      {/* زر اقرأ المزيد */}
                      <button className="w-full py-2 px-4 rounded-full border border-[#1b2a47] text-[#1b2a47] font-bold text-xs hover:bg-[#1b2a47] hover:text-white dark:border-[#d8bb88] dark:text-[#d8bb88] dark:hover:bg-[#d8bb88] dark:hover:text-[#1b2a47] transition-colors duration-300">
                        اقرأ المزيد
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* السهم الأيسر */}
            <button
              onClick={showPreviousNews}
              aria-label="الخبر السابق"
              className="p-2.5 sm:p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-md transition-all text-gray-500 hover:text-gray-800 flex-shrink-0 z-50"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
