import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, BookOpen, Eye, UserCircle, GraduationCap, Building2, Laptop, ChevronLeft, ArrowUpLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatBox = ({ number, label }) => (
  <div className="text-center py-4">
    <div className="text-white font-black text-sm md:text-base flex items-center justify-center gap-2">
      <span>{label}</span>
      <span className="text-lg">{number}</span>
    </div>
  </div>
);

const SectionCard = ({ item, isHovered, onHover, onLeave, isSpecial }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer flex flex-col h-full relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Icon top right arrow placeholder */}
      <div className="absolute top-4 right-4 bg-[var(--color-royal)] text-white rounded-md p-1 shadow-sm opacity-80">
         <ArrowUpLeft className="w-4 h-4" />
      </div>

      <motion.div 
        layout="position"
        className="p-8 flex flex-col items-center justify-center min-h-[160px] gap-6"
      >
        <div className="text-[#1b2a47]">
          {item.icon}
        </div>
        <h3 className="font-black text-lg text-[#1b2a47] text-center">{item.title}</h3>
      </motion.div>

      <AnimatePresence>
        {isHovered && item.hoverContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-8 pb-8 text-center"
          >
            <div className="w-full h-px bg-gray-100 mb-6"></div>
            
            <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed">{item.hoverContent}</p>
            
            {item.subItems && (
              <div className="flex justify-center gap-3 flex-wrap mb-6">
                {item.subItems.map((sub, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => navigate('/search')}
                    className="bg-white border border-gray-200 hover:border-[#1b2a47] hover:text-[#1b2a47] rounded-full px-5 py-2.5 text-xs font-bold flex items-center gap-2 transition-all shadow-sm group text-gray-700"
                  >
                    {sub} <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-[#1b2a47]" />
                  </button>
                ))}
              </div>
            )}

            <button 
              onClick={() => navigate('/search')}
              className="mt-2 text-xs border border-gray-200 px-8 py-2.5 rounded-full font-bold text-gray-600 hover:bg-gray-50 transition-colors mx-auto inline-block"
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

  const mainSections = [
    {
      id: 'initiatives',
      title: 'المبادرات و برامج التدريب',
      icon: <BookOpen className="w-16 h-16 text-[#d8bb88]" strokeWidth={1.5} />,
      hoverContent: 'اكتشف المبادرات والبرامج التدريبية التي تقدمها الوزارة للشباب وتطوير مهاراتهم التكنولوجية وبناء مجتمع المعرفة.',
      subItems: ['مبادرات', 'برامج التدريب']
    },
    {
      id: 'services',
      title: 'الخدمات',
      icon: <Shield className="w-16 h-16 text-[#1b2a47]" strokeWidth={1.5} />,
      hoverContent: 'اكتشف جميع الخدمات الرقمية التي تقدمها الوزارة لقطاعات الأعمال والجهات الحكومية لبناء مجتمع المعلومات.'
    },
    {
      id: 'news',
      title: 'الاخبار و الفعاليات',
      icon: <Eye className="w-16 h-16 text-[#d8bb88]" strokeWidth={1.5} />,
      hoverContent: 'تابع أحدث الأخبار والفعاليات الخاصة بوزارة الاتصالات والمؤتمرات التقنية.'
    },
    {
      id: 'jobs',
      title: 'وظائف الوزارة',
      icon: <UserCircle className="w-16 h-16 text-[#1b2a47]" strokeWidth={1.5} />,
      hoverContent: 'تصفح أحدث الوظائف المتاحة في الوزارة والجهات التابعة لها.'
    }
  ];

  const specialSections = [
    {
      id: 'schools',
      title: 'مدارس WE للتكنولوجيا التطبيقية',
      icon: <Laptop className="w-16 h-16 text-[#6b21a8]" strokeWidth={1.5} />,
      hoverContent: 'تعرف على التقديم في مدارس WE المشتركة للتكنولوجيا التطبيقية.'
    },
    {
      id: 'institutes',
      title: 'المعاهد',
      icon: <Building2 className="w-16 h-16 text-[#3b82f6]" strokeWidth={1.5} />,
      hoverContent: 'تعرف على أبرز المعاهد المتخصصة في تكنولوجيا المعلومات التي تؤهل للعمل التقني.',
      subItems: ['معهد تكنولوجيا المعلومات (ITI)', 'المعهد القومي للاتصالات (NTI)']
    },
    {
      id: 'university',
      title: 'جامعة مصر المعلوماتية',
      icon: <GraduationCap className="w-16 h-16 text-[#0891b2]" strokeWidth={1.5} />,
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
              <div className="w-full max-w-[450px] aspect-square bg-gradient-to-b from-[#69cbf0] to-[#55bef2] rounded-[32px] shadow-2xl flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                <div className="font-black text-[#1b2a47] text-4xl mb-6">وزارة الاتصالات<br/>وتكنولوجيا المعلومات</div>
                <div className="text-[#1b2a47] opacity-80">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                     <rect x="11" y="3" width="2" height="18" />
                     <path d="M7 9 L12 9 L12 6 L7 6 Z" />
                     <path d="M17 9 L12 9 L12 6 L17 6 Z" />
                     <circle cx="12" cy="15" r="2" fill="white" opacity="0.5"/>
                  </svg>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#1b2a47] shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
