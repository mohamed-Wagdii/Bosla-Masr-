import { Search as SearchIcon, Compass, Globe, Users, Accessibility, Car, Briefcase, GraduationCap, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MinistryCard = ({ ministry, isActive, onClick, onMoreClick, position }) => {
  return (
    <div className="relative flex justify-center w-full max-w-[450px] z-10 transition-all duration-500 ease-in-out" dir="rtl">
      
      {/* SVG Connector Lines */}
      {position === 'middle' && (
        <svg className="absolute top-1/2 right-[-140px] w-[140px] h-[40px] overflow-visible -translate-y-1/2 z-0">
          <path d="M 0 20 L 140 20" fill="none" stroke="#d8bb88" strokeWidth="2" className="transition-all duration-500" />
          <circle cx="140" cy="20" r="8" fill="#d8bb88" stroke="white" strokeWidth="4" className="shadow-md" />
        </svg>
      )}
      
      {position === 'top' && (
        <svg className="absolute top-1/2 right-[-140px] w-[140px] h-[120px] overflow-visible -translate-y-[2px] z-0">
          <path d="M 0 0 L 40 0 L 140 100" fill="none" stroke="#d8bb88" strokeWidth="2" className="transition-all duration-500" />
          <circle cx="140" cy="100" r="8" fill="#d8bb88" stroke="white" strokeWidth="4" className="shadow-md" />
        </svg>
      )}

      {position === 'bottom' && (
        <svg className="absolute bottom-1/2 right-[-140px] w-[140px] h-[120px] overflow-visible translate-y-[2px] z-0">
          <path d="M 0 120 L 40 120 L 140 20" fill="none" stroke="#d8bb88" strokeWidth="2" className="transition-all duration-500" />
          <circle cx="140" cy="20" r="8" fill="#d8bb88" stroke="white" strokeWidth="4" className="shadow-md" />
        </svg>
      )}

      <div 
        onClick={onClick}
        className={`relative flex items-stretch p-1.5 rounded-[24px] cursor-pointer transition-all duration-500 w-full z-10 min-h-[140px] ${
          isActive 
            ? 'bg-[#1b2a47] text-white shadow-2xl scale-[1.02] border border-[#d8bb88]/30' 
            : 'bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:shadow-md scale-100'
        }`}
      >
        {/* Right Side Image Block (Vertical) */}
        <div className={`w-[130px] rounded-[18px] flex flex-col items-center justify-center overflow-hidden border p-3 transition-colors duration-500 flex-shrink-0 ${isActive ? 'border-[#d8bb88] bg-gradient-to-b from-slate-600 to-slate-800' : 'border-gray-100 bg-white'}`}>
          <div className={`font-black text-[10px] leading-snug mb-3 text-center ${isActive ? 'text-white' : 'text-[#1b2a47]'}`}>وزارة الاتصالات<br/>وتكنولوجيا المعلومات</div>
          {/* Pharaonic character placeholder */}
          <div className="flex-1 flex items-end justify-center">
             <img src="https://cdn-icons-png.flaticon.com/512/3034/3034267.png" alt="Pharaoh" className={`w-10 h-auto object-contain ${isActive ? 'filter brightness-0 invert sepia saturate-200 hue-rotate-[350deg]' : 'filter brightness-0 opacity-70'}`} />
          </div>
        </div>

        {/* Left Side Text Block */}
        <div className="flex-1 px-4 py-2 text-right flex flex-col justify-center">
          <h3 className={`font-black text-base mb-4 ${isActive ? 'text-white' : 'text-[#1b2a47]'}`}>{ministry.title}</h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <span className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${isActive ? 'bg-[#334155] text-white border-transparent' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>12 خدمة</span>
            <span className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${isActive ? 'bg-[#334155] text-white border-transparent' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>8 مبادرات</span>
            <span className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${isActive ? 'bg-[#334155] text-white border-transparent' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>15 كورس</span>
            <span className={`text-[10px] px-2 py-2 rounded-full font-bold border text-center transition-colors duration-500 shadow-sm ${isActive ? 'bg-[#334155] text-white border-transparent' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>6 فعاليات</span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onMoreClick(); }}
            className={`w-full py-2 rounded-full text-xs font-bold transition-colors duration-500 border ${isActive ? 'border-gray-500 text-gray-300 hover:bg-white/10 hover:text-white' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
          >
            المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

const ServiceBox = ({ title, icon: Icon, isRight, onMouseEnter, onMouseLeave }) => (
  <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#d8bb88] transition-all cursor-pointer w-[280px] group ${isRight ? 'flex-row-reverse text-left' : 'text-right'}`}
  >
    <div className="bg-[#f5f7fa] p-2 rounded-xl text-[#1b2a47] group-hover:bg-[#1b2a47] group-hover:text-white transition-colors duration-300">
      <Icon className="w-5 h-5" />
    </div>
    <span className="font-bold text-sm text-gray-800 flex-1 group-hover:text-[#1b2a47] transition-colors">{title}</span>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [needleAngle, setNeedleAngle] = useState(15); 
  const [activeMinIndex, setActiveMinIndex] = useState(1);

  const ministriesList = [
    { id: 0, title: 'وزارة الاتصالات و المعلومات' },
    { id: 1, title: 'وزارة الاتصالات و المعلومات' },
    { id: 2, title: 'وزارة الاتصالات و المعلومات' },
  ];

  const handleNextMin = () => setActiveMinIndex(prev => (prev + 1) % 3);
  const handlePrevMin = () => setActiveMinIndex(prev => (prev - 1 + 3) % 3);

  const news = [
    { title: 'إطلاق النسخة الجديدة من بوابة مصر الرقمية لخدمة المواطنين', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400' },
    { title: 'وزير الاتصالات يشهد توقيع اتفاقيات في مجال الذكاء الاصطناعي', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
    { title: 'افتتاح مركز ابداع مصر الرقمية (Creativa) في محافظة جديدة', image: 'https://images.unsplash.com/photo-1541888087618-20fac48f44d1?auto=format&fit=crop&q=80&w=400' },
    { title: 'تفاصيل مبادرة "أشبال مصر الرقمية" للعام الجديد', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920" 
            alt="Futuristic Abstract" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
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
            className="text-xl text-gray-800 mb-10 font-bold drop-shadow-sm"
          >
            كل خدمات وفرص الوزارات المصرية في مكان واحد
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
            {['بوابة الدعم القومي', 'منح مجانية', 'وظائف حكومية', 'مبادرة iTi'].map((tag, idx) => (
              <span key={tag} className="bg-white border-2 border-transparent px-5 py-2.5 rounded-full text-sm font-bold text-gray-600 cursor-pointer hover:border-[#d8bb88] hover:text-[#1b2a47] transition-all shadow-md flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#d8bb88]" />
                {tag}
                {idx === 0 && <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Ministries Timeline Section (White Background) */}
      <div className="w-full relative py-20 bg-white min-h-[800px] flex items-center overflow-x-clip">
        
        {/* Top Titles */}
        <div className="absolute top-10 left-0 w-full px-10 flex justify-between items-start z-30">
          <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-full text-sm font-bold text-gray-600 bg-white hover:bg-gray-50 transition-all shadow-sm">
             جميع الوزارات
             <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 top-0">
             <h2 className="text-3xl font-black text-[#1b2a47]">الوزارات</h2>
          </div>
        </div>

        {/* Cards Stack & Wheel Wrapper */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-[450px] mx-auto mt-16">
          
          {/* Golden Wheel - Locked to the cards container */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-[10px] border-[#d8bb88] flex items-center justify-center z-0 pointer-events-none shadow-xl"
            style={{ right: '-840px' }} // Exactly 140px from the card right edge to the wheel left edge
            animate={{ rotate: activeMinIndex * -20 }} 
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
          >
            {/* Authentic Egyptian Eagle SVG Watermark - Fully visible golden eagle inside the circle! */}
            <motion.div 
               className="w-[450px] h-[450px] flex items-center justify-center opacity-100"
               animate={{ rotate: activeMinIndex * 20 }} 
               transition={{ type: "spring", stiffness: 40, damping: 15 }}
            >
               <img 
                 src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Coat_of_arms_of_Egypt_%28Official%29.svg" 
                 alt="Egyptian Eagle" 
                 className="w-full h-full object-contain filter brightness-0 invert-[.8] sepia saturate-[4] hue-rotate-[350deg] drop-shadow-xl" 
               />
            </motion.div>
          </motion.div>

          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mb-8 hover:bg-gray-50 cursor-pointer transition-colors z-20" onClick={handlePrevMin}>
            <ChevronUp className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-10 relative w-full flex flex-col items-center z-20">
             {ministriesList.map((min, idx) => (
                <MinistryCard 
                  key={min.id} 
                  ministry={min}
                  isActive={activeMinIndex === idx} 
                  onClick={() => setActiveMinIndex(idx)} 
                  onMoreClick={() => navigate('/ministry')}
                  position={idx === 0 ? 'top' : idx === 1 ? 'middle' : 'bottom'}
                />
             ))}
          </div>

          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mt-8 hover:bg-gray-50 cursor-pointer transition-colors z-20" onClick={handleNextMin}>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Compass Services Section */}
      <div className="w-full bg-[#f8f9fa] py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-[#1b2a47] mb-24">
            ما الخدمة التي تحتاجها؟
          </h2>
          
          <div className="relative w-full mx-auto flex justify-between items-center h-[400px]">
            
            {/* Left Services */}
            <div className="flex flex-col gap-12 z-10">
              <ServiceBox title="خدمات رقمية واتصالات" icon={Globe} isRight={false} onMouseEnter={() => setNeedleAngle(-55)} onMouseLeave={() => setNeedleAngle(15)} />
              <ServiceBox title="خدمات الدعم المجتمعي" icon={Users} isRight={false} onMouseEnter={() => setNeedleAngle(-90)} onMouseLeave={() => setNeedleAngle(15)} />
              <ServiceBox title="خدمات ذوي الهمم" icon={Accessibility} isRight={false} onMouseEnter={() => setNeedleAngle(-125)} onMouseLeave={() => setNeedleAngle(15)} />
            </div>

            {/* Compass Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] z-0" onMouseLeave={() => setNeedleAngle(15)}>
               <div className="w-full h-full rounded-full border-[14px] border-[#1b2a47] relative shadow-xl bg-white flex items-center justify-center">
                  <div className="absolute inset-3 rounded-full border-[4px] border-dashed border-red-500/30"></div>
                  <div className="absolute inset-8 rounded-full border border-gray-100 flex items-center justify-center">
                    <motion.div 
                      className="relative w-16 h-64 flex flex-col items-center justify-center origin-center"
                      animate={{ rotate: needleAngle }}
                      transition={{ type: "spring", stiffness: 100, damping: 14, mass: 0.8 }}
                    >
                       <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[120px] border-b-[#e53e3e]"></div>
                       <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[120px] border-t-[#1b2a47]"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#d8bb88] border-[4px] border-white shadow-md z-10 flex items-center justify-center">
                         <div className="w-4 h-4 rounded-full bg-[#1b2a47]"></div>
                       </div>
                    </motion.div>
                  </div>
               </div>
            </div>

            {/* Right Services */}
            <div className="flex flex-col gap-12 z-10">
              <ServiceBox title="خدمات المرور" icon={Car} isRight={true} onMouseEnter={() => setNeedleAngle(55)} onMouseLeave={() => setNeedleAngle(15)} />
              <ServiceBox title="خدمات العمل والتوظيف" icon={Briefcase} isRight={true} onMouseEnter={() => setNeedleAngle(90)} onMouseLeave={() => setNeedleAngle(15)} />
              <ServiceBox title="منصات التعليم العالي" icon={GraduationCap} isRight={true} onMouseEnter={() => setNeedleAngle(125)} onMouseLeave={() => setNeedleAngle(15)} />
            </div>
          </div>

          <div className="flex justify-center mt-24">
            <button className="flex items-center gap-2 px-10 py-4 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-base font-bold text-gray-700 transition-all shadow-sm">
              <SearchIcon className="w-5 h-5 text-gray-500" />
              المزيد من الخدمات
            </button>
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 font-bold mb-8 text-base">الخدمات الأكثر شيوعا</p>
            <div className="flex flex-wrap justify-center gap-4">
               {['بطاقة الرقم القومي', 'استخراج شهادة ميلاد مميكنة', 'لا توقف السفر', 'تراخيص المركبات'].map((tag) => (
                  <span key={tag} className="bg-white border border-gray-200 px-6 py-3 rounded-full text-sm font-bold text-gray-600 shadow-sm flex items-center gap-3 cursor-pointer hover:border-[#d8bb88] hover:text-[#1b2a47] transition-all">
                    <Compass className="w-4 h-4 text-[#d8bb88]" />
                    {tag} 
                  </span>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="w-full bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#1b2a47] mb-16">اخر الاخبار</h2>
          <div className="flex items-center justify-between gap-6">
            <button className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-colors text-gray-400 hover:text-gray-700 flex-shrink-0">
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
              {news.map((item, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden h-48">
                    <img src={item.image} alt="news" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col h-[160px]">
                    <h3 className="font-bold text-sm text-gray-800 line-clamp-3 mb-4 leading-relaxed flex-1 text-right">{item.title}</h3>
                    <button className="text-xs text-gray-500 font-bold w-full border border-gray-200 rounded-full py-2 hover:bg-gray-50 hover:text-[#1b2a47] hover:border-[#1b2a47] transition-all">اقرأ المزيد</button>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="p-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-colors text-gray-400 hover:text-gray-700 flex-shrink-0">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
