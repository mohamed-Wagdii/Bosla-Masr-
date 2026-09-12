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
      className="relative flex justify-center w-full max-w-[450px] z-10 transition-all duration-500 ease-in-out"
      dir="rtl"
    >
      {/* SVG Connector Lines */}

      {position === "middle" && (
        <svg className="absolute top-1/2 right-[-260px] w-[260px] h-[40px] overflow-visible -translate-y-1/2 z-0">
          <path
            d="M 0 20 L 260 20"
            fill="none"
            stroke="#d8bb88"
            strokeWidth="2"
            className="transition-all duration-500"
          />

          <circle
            cx="260"
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
        <svg className="absolute top-1/2 right-[-260px] w-[260px] h-[120px] overflow-visible -translate-y-[2px] z-0">
          <path
            d="M 0 0 L 40 0 L 260 100"
            fill="none"
            stroke="#d8bb88"
            strokeWidth="2"
            className="transition-all duration-500"
          />

          <circle
            cx="260"
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
        <svg className="absolute bottom-1/2 right-[-260px] w-[260px] h-[120px] overflow-visible translate-y-[2px] z-0">
          <path
            d="M 0 120 L 40 120 L 260 20"
            fill="none"
            stroke="#d8bb88"
            strokeWidth="2"
            className="transition-all duration-500"
          />

          <circle
            cx="260"
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
        className={`relative flex items-stretch p-1.5 rounded-[24px] cursor-pointer transition-all duration-500 w-full z-10 min-h-[140px] ${
          isActive
            ? "bg-[#1b2a47] text-white shadow-2xl scale-[1.02] border border-[#d8bb88]/30"
            : "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:shadow-md scale-100"
        }`}
      >
        {/* ================= IMAGE ================= */}

        <div
          className={`w-[130px] rounded-[18px] flex flex-col items-center justify-center overflow-hidden border transition-all duration-500 flex-shrink-0 ${
            isActive
              ? "border-[#d8bb88] bg-gradient-to-b from-slate-600 to-slate-800"
              : "border-gray-100 bg-white"
          }`}
        >
          <div className=" h-full flex items-center justify-center">
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

        <div className="flex-1 px-4 py-2 text-right flex flex-col justify-center">
          <h3
            className={`font-black text-base mb-4 ${
              isActive ? "text-white" : "text-[#1b2a47]"
            }`}
          >
            {ministry.title}
          </h3>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <span
              className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${
                isActive
                  ? "bg-[#334155] text-white border-transparent"
                  : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              12 خدمة
            </span>

            <span
              className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${
                isActive
                  ? "bg-[#334155] text-white border-transparent"
                  : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              8 مبادرات
            </span>

            <span
              className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${
                isActive
                  ? "bg-[#334155] text-white border-transparent"
                  : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              15 كورس
            </span>

            <span
              className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${
                isActive
                  ? "bg-[#334155] text-white border-transparent"
                  : "bg-gray-50 text-gray-600 border-gray-200"
              }`}
            >
              6 فعاليات
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoreClick();
            }}
            className={`w-full py-2 rounded-full text-xs font-bold transition-colors duration-500 border ${
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
    className={`flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#d8bb88] transition-all cursor-pointer w-[280px] group ${
      isRight ? "flex-row-reverse text-left" : "text-right"
    }`}
  >
    <div className="bg-[#f5f7fa] p-2 rounded-xl text-[#1b2a47] group-hover:bg-[#1b2a47] group-hover:text-white transition-colors duration-300">
      <Icon className="w-5 h-5" />
    </div>

    <span className="font-bold text-sm text-gray-800 flex-1 group-hover:text-[#1b2a47] transition-colors">
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

      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
            className="text-5xl md:text-6xl font-black text-[#1b2a47] mb-6 drop-shadow-md"
          >
            بوصلة مصر
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-800 dark:text-slate-100 mb-10 font-bold drop-shadow-sm leading-relaxed"
          >
            من حضارة أرشدت العالم...
            <br />
            إلى بوصلة ترشدك اليوم
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto bg-white rounded-full shadow-2xl border border-gray-100 flex items-center p-2"
          >
            <div className="bg-[#1b2a47] p-3.5 rounded-full text-white cursor-pointer hover:bg-blue-900 transition-colors shadow-md">
              <SearchIcon className="w-6 h-6" />
            </div>

            <input
              type="text"
              placeholder="ابحث عن..."
              className="flex-1 bg-transparent border-none outline-none px-6 text-lg text-gray-800 placeholder-gray-400 font-medium"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              "بوابة الدعم القومي",
              "منح مجانية",
              "وظائف حكومية",
              "مبادرة iTi",
            ].map((tag, idx) => (
              <span
                key={tag}
                className="bg-white border-2 border-transparent px-5 py-2.5 rounded-full text-sm font-bold text-gray-600 cursor-pointer hover:border-[#d8bb88] hover:text-[#1b2a47] transition-all shadow-md flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#d8bb88]" />

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

      <div className="w-full relative py-20 bg-white min-h-[800px] flex items-center overflow-x-clip">
        {/* Top Titles */}

        <div className="absolute top-10 left-0 w-full px-10 flex justify-between items-start z-30">
          <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-full text-sm font-bold text-gray-600 bg-white hover:bg-gray-50 transition-all shadow-sm">
            جميع الوزارات

            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 top-0">
            <h2 className="text-3xl font-black text-[#1b2a47]">
              الوزارات
            </h2>
          </div>
        </div>

        {/* Cards Stack & Wheel Wrapper */}

        <div className="relative z-10 flex flex-col items-center w-full max-w-[450px] mx-auto mt-16">
          {/* Golden Wheel */}

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-[14px] border-[#d8bb88] flex items-center justify-center z-0 pointer-events-none shadow-xl"
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
              className="w-[450px] h-[450px] flex items-center justify-center opacity-100"
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
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mb-8 hover:bg-gray-50 cursor-pointer transition-colors z-20"
            onClick={handlePrevMin}
          >
            <ChevronUp className="w-5 h-5 text-gray-500" />
          </div>

          {/* Cards */}

          <div className="space-y-10 relative w-full flex flex-col items-center z-20">
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
            className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mt-8 hover:bg-gray-50 cursor-pointer transition-colors z-20"
            onClick={handleNextMin}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* ============== COMPASS SERVICES ================= */}
      {/* ================================================= */}

      <div className="w-full bg-[#f8f9fa] py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-[#1b2a47] mb-24">
            ما الخدمة التي تحتاجها؟
          </h2>

          <div className="relative w-full mx-auto flex justify-between items-center h-[400px]">
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] z-0"
              onMouseLeave={() => setNeedleAngle(15)}
            >
              <div className="w-full h-full rounded-full border-[14px] border-[#1b2a47] relative shadow-xl bg-white flex items-center justify-center">
                <div className="absolute inset-3 rounded-full border-[4px] border-dashed border-red-500/30" />

                <div className="absolute inset-8 rounded-full border border-gray-100 flex items-center justify-center">
                  <motion.div
                    className="relative w-16 h-64 flex flex-col items-center justify-center origin-center"
                    animate={{ rotate: needleAngle }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 14,
                      mass: 0.8,
                    }}
                  >
                    <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[120px] border-b-[#e53e3e]" />

                    <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[120px] border-t-[#1b2a47]" />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#d8bb88] border-[4px] border-white shadow-md z-10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#1b2a47]" />
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

          <div className="flex justify-center mt-24">
            <button className="flex items-center gap-2 px-10 py-4 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-base font-bold text-gray-700 transition-all shadow-sm">
              <SearchIcon className="w-5 h-5 text-gray-500" />
              المزيد من الخدمات
            </button>
          </div>

          {/* Popular Services */}

          <div className="mt-20 text-center">
            <p className="text-gray-500 font-bold mb-8 text-base">
              الخدمات الأكثر شيوعا
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "بطاقة الرقم القومي",
                "استخراج شهادة ميلاد مميكنة",
                "لا توقف السفر",
                "تراخيص المركبات",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-gray-200 px-6 py-3 rounded-full text-sm font-bold text-gray-600 shadow-sm flex items-center gap-3 cursor-pointer hover:border-[#d8bb88] hover:text-[#1b2a47] transition-all"
                >
                  <Compass className="w-4 h-4 text-[#d8bb88]" />
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

  <div className="w-full bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-black text-[#1b2a47] mb-12">
      اخر الاخبار
    </h2>

    <div className="flex items-center justify-between gap-2">
      {/* السهم الأيمن */}
      <button
        onClick={showNextNews}
        aria-label="الخبر التالي"
        className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-md transition-all text-gray-500 hover:text-gray-800 flex-shrink-0 z-50"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* حاوية الشرايح المتداخلة */}
      <div className="flex-1 flex justify-center items-center overflow-visible py-10">
        <motion.div
          key={newsStartIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onMouseLeave={() => setHoveredNewsIndex(null)}
          className="flex items-center justify-center -space-x-12 sm:-space-x-16 space-x-reverse"
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
              className={`relative w-64 sm:w-72 bg-white border border-gray-200 rounded-[28px] p-4 transition-all duration-300 flex-shrink-0 text-right flex flex-col justify-between h-[430px] cursor-pointer ${
                (hoveredNewsIndex ?? 0) === idx
                    ? "scale-105 opacity-100 border-[#d8bb88] shadow-2xl"
                    : "scale-[0.93] opacity-55 blur-[0.5px] shadow-sm"
              }`}
            >
              {/* صورة الخبر */}
              <div className="relative overflow-hidden rounded-[20px] h-48 w-full mb-4 flex-shrink-0">
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
                  <h3 className="font-bold text-sm text-[#1b2a47] line-clamp-2 mb-2 leading-relaxed">
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p className="text-[11px] text-gray-400 line-clamp-2 mb-4 leading-normal">
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
        className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-md transition-all text-gray-500 hover:text-gray-800 flex-shrink-0 z-50"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Home;
