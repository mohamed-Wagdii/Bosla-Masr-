import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BookOpen, Eye, UserCircle, GraduationCap, Building2, Laptop, ChevronLeft, ArrowUpLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import frameetes from '../assets/Frame1.png'
import nesr1 from '../assets/nesr1.png'
import nesr2 from '../assets/nesr2.png'
import nesr3 from '../assets/nesr3.png'
import nesr4 from '../assets/nesr4.png'
import nesr5 from '../assets/nesr5.png'
import we from '../assets/we.png'
import EUI from '../assets/EUI.png'

const StatBox = ({ number, label }) => (
  <div className="w-[calc(50vw-1.5rem)] min-w-[240px] rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center backdrop-blur-sm sm:w-[calc(25vw-1.5rem)] sm:min-w-[280px]">
    <div className="flex items-center justify-center gap-2 text-sm font-black text-white md:text-base">
      <span>{label}</span>
      <span className="text-lg">{number}</span>
    </div>
  </div>
);

const SectionCard = ({ item, isHovered, onHover, onLeave, isSpecial }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={`relative flex h-[300px] flex-col overflow-hidden rounded-2xl border bg-white cursor-pointer transition-colors duration-300 ${
        isHovered
          ? "z-20 border-[#d8bb88] ring-4 ring-[#d8bb88]/15 shadow-2xl"
          : "z-10 border-gray-100 shadow-sm"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      animate={{ scale: isHovered ? 1.06 : 1, y: isHovered ? -8 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Icon top right arrow placeholder */}
      <div className="absolute top-4 right-4 bg-[var(--color-royal)] text-white rounded-md p-1 shadow-sm opacity-80">
         <ArrowUpLeft className="w-4 h-4" />
      </div>

      <motion.div 
        animate={{ opacity: isHovered ? 0.45 : 1, y: isHovered ? -10 : 0 }}
        className="flex min-h-[160px] flex-1 flex-col items-center justify-center gap-6 overflow-hidden p-8"
      >
        <div className="text-[#1b2a47] [&>img]:max-h-16 [&>img]:w-auto [&>img]:object-contain">
          {item.icon}
        </div>
        <h3 className="line-clamp-2 max-w-full text-center text-lg font-black text-[#1b2a47]">{item.title}</h3>
      </motion.div>

      <AnimatePresence>
        {isHovered && item.hoverContent && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 bottom-0 max-h-[195px] overflow-hidden bg-white px-6 pb-6 text-center shadow-[0_-12px_24px_rgba(255,255,255,0.95)]"
          >
            <div className="mb-4 h-px w-full bg-gray-100"></div>
            
            <p className="line-clamp-3 mb-4 overflow-hidden text-sm font-medium leading-relaxed text-gray-500">{item.hoverContent}</p>
            
            {item.subItems && (
              <div className="mb-4 flex flex-wrap justify-center gap-3">
                {item.subItems.map((sub, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => {
                      if (sub === 'مبادرات') {
                        navigate('/initiatives');
                      } else if (sub === 'برامج التدريب') {
                        navigate('/training-programs');
                      } else if (sub === 'احداث مستقلة' || sub === 'احداث مرتبطه') {
                        navigate('/events');
                      } else {
                        navigate('/search');
                      }
                    }}
                    className="group flex max-w-full items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-sm transition-all hover:border-[#1b2a47] hover:text-[#1b2a47]"
                  >
                    <span className="truncate">{sub}</span>
                    <ChevronLeft className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-[#1b2a47]" />
                  </button>
                ))}
              </div>
            )}

            <button 
              onClick={() => {
                if (item.id === 'initiatives') {
                  navigate('/initiatives');
                } else if (item.id === 'news') {
                  navigate('/events');
                } else {
                  navigate('/search');
                }
              }}
              className="mx-auto inline-block rounded-full border border-gray-200 px-8 py-2 text-xs font-bold text-gray-600 transition-colors hover:bg-gray-50"
            >
              اطلع على المزيد
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Ministry = () => {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredSpecial, setHoveredSpecial] = useState(null);
  const ministryStats = [
    { number: "12", label: "خدمة" },
    { number: "8", label: "مبادرات" },
    { number: "15", label: "كورس" },
    { number: "6", label: "أحداث" },
  ];

  const mainSections = [
    {
      id: 'initiatives',
      title: 'المبادرات و برامج التدريب',
      icon: <img src={nesr1} alt='nesr1'/>,
      hoverContent: 'اكتشف المبادرات والبرامج التدريبية التي تقدمها الوزارة للشباب وتطوير مهاراتهم التكنولوجية وبناء مجتمع المعرفة.',
      subItems: ['مبادرات', 'برامج التدريب']
    },
    {
      id: 'services',
      title: 'الخدمات',
      icon: <img src={nesr4} alt='nesr1'/>,
      hoverContent: 'اكتشف جميع الخدمات الرقمية التي تقدمها الوزارة لقطاعات الأعمال والجهات الحكومية لبناء مجتمع المعلومات.'
    },
    {
      id: 'news',
      title: 'الاخبار و الفعاليات',
      icon: <img src={nesr3} alt='nesr1'/>,
      hoverContent: 'تابع أحدث الأخبار والفعاليات الخاصة بوزارة الاتصالات والمؤتمرات التقنية.',
      subItems: ['احداث مستقلة', 'احداث مرتبطه']
    },
    {
      id: 'jobs',
      title: 'وظائف الوزارة',
      icon: <img src={nesr2} alt='nesr1'/>,
      hoverContent: 'تصفح أحدث الوظائف المتاحة في الوزارة والجهات التابعة لها.'
    }
  ];

  const specialSections = [
    {
      id: 'schools',
      title: 'مدارس WE للتكنولوجيا التطبيقية',
      icon: <img src={we} alt='we'/>,
      hoverContent: 'تعرف على التقديم في مدارس WE المشتركة للتكنولوجيا التطبيقية.'
    },
    {
      id: 'institutes',
      title: 'المعاهد',
      icon: <img src={nesr5} alt='nesr5'/>,
      hoverContent: 'تعرف على أبرز المعاهد المتخصصة في تكنولوجيا المعلومات التي تؤهل للعمل التقني.',
      subItems: ['معهد تكنولوجيا المعلومات (ITI)', 'المعهد القومي للاتصالات (NTI)']
    },
    {
      id: 'university',
      title: 'جامعة مصر المعلوماتية',
      icon: <img src={EUI} alt='EUI'/>,
      hoverContent: 'اكتشف أول جامعة معلوماتية متخصصة في إفريقيا والشرق الأوسط.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] pb-20">
      
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-right"
            >
              <h1 className="text-4xl md:text-5xl font-black text-[#1b2a47] mb-6 leading-tight">
                وزارة الاتصالات وتكنولوجيا <br/> المعلومات
              </h1>
              <p className="text-gray-500 font-medium text-lg mb-10">
                كل خدمات وفرص الوزارات المصرية في مكان واحد
              </p>
              <button className="bg-transparent border border-gray-300 text-gray-700 px-10 py-3 rounded-full font-bold hover:border-[#1b2a47] hover:text-[#1b2a47] transition-all shadow-sm">
                اكتشف المزيد
              </button>
            </motion.div>

            {/* Right Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex justify-center md:justify-end"
            >
              {/* Box mimicking the blue square in the design */}
              {/* <div className="w-full max-w-[450px] aspect-square bg-gradient-to-b from-[#69cbf0] to-[#55bef2] rounded-[32px] shadow-2xl flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="font-black text-[#1b2a47] text-4xl mb-6">وزارة الاتصالات<br/>وتكنولوجيا المعلومات</div>
                <div className="text-[#1b2a47] opacity-80">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                     <rect x="11" y="3" width="2" height="18" />
                     <path d="M7 9 L12 9 L12 6 L7 6 Z" />
                     <path d="M17 9 L12 9 L12 6 L17 6 Z" />
                     <circle cx="12" cy="15" r="2" fill="white" opacity="0.5"/>
                  </svg>
                </div>
              </div> */}
<img src={frameetes} alt="kk" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 overflow-hidden bg-[#1b2a47] py-3 shadow-lg">
        <motion.div
          className="flex w-max items-center gap-4 px-4 sm:gap-6"
          animate={{ x: ["-25%", "0%"] }}
          transition={{
            duration: 16,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          }}
        >
          {[...ministryStats, ...ministryStats, ...ministryStats, ...ministryStats].map((stat, index) => (
            <StatBox key={`${stat.label}-${index}`} {...stat} />
          ))}
        </motion.div>
      </div>
      <div className="hidden">
        <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-x-reverse divide-gray-600/50">
            <StatBox number="12" label="خدمة" />
            <StatBox number="8" label="مبادرات" />
            <StatBox number="15" label="كورس" />
            <StatBox number="6" label="أحداث" />
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-2xl font-black text-center text-[#1b2a47] mb-12">
          الأقسام الرئيسة
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainSections.map((item) => (
            <SectionCard 
              key={item.id} 
              item={item} 
              isHovered={hoveredSection === item.id}
              onHover={() => setHoveredSection(item.id)}
              onLeave={() => setHoveredSection(null)}
            />
          ))}
        </div>
      </div>

      {/* Special Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <h2 className="text-2xl font-black text-center text-[#1b2a47] mb-12">
          خاص بوزارة الاتصالات
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialSections.map((item) => (
            <SectionCard 
              key={item.id} 
              item={item} 
              isHovered={hoveredSpecial === item.id}
              onHover={() => setHoveredSpecial(item.id)}
              onLeave={() => setHoveredSpecial(null)}
              isSpecial={true}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Ministry;
