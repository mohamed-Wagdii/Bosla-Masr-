import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const InitiativePage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'عن المبادرة', contentTitle: 'عن مبادرة الرواد الرقميون' },
    { id: 'conditions', label: 'شروط القبول', contentTitle: 'شروط القبول' },
    { id: 'diploma12', label: 'الدبلوم المتخصص 12 شهراً', contentTitle: 'الدبلوم المتخصص 12 شهراً' },
    { id: 'intensive6', label: 'البرنامج المكثف 6 أشهر', contentTitle: 'البرنامج المكثف 6 أشهر' },
    { id: 'community3', label: 'المجتمع الرقمي 3 أشهر', contentTitle: 'المجتمع الرقمي 3 أشهر' },
    { id: 'career', label: 'التوجيه المهني', contentTitle: 'التوجيه المهني' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans" dir="rtl">
      
      {/* 1. Hero Header Section */}
      <div className="relative bg-[#1b2a47] py-20 px-4 flex justify-center items-center overflow-hidden">
        {/* Background Image/Pattern */}
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
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
           </button>
           
           <div className="flex justify-center mb-6">
             <div className="text-[#00A4EF] font-black text-5xl">
                {/* Logo Placeholder */}
                <div className="w-24 h-24 mx-auto bg-[#00A4EF]/10 rounded-2xl border-4 border-[#00A4EF] rotate-45 flex items-center justify-center mb-6">
                   <div className="w-12 h-12 bg-[#00A4EF] rounded-lg -rotate-45"></div>
                </div>
             </div>
           </div>

           <h1 className="text-3xl font-black text-[#1b2a47] mb-2">مبادرة الرواد الرقميون</h1>
           <p className="text-[#00A4EF] font-bold text-xl mb-6">DiGiLiANS</p>
           <p className="text-gray-500 font-medium mb-8 max-w-md mx-auto leading-relaxed">
             منحة تدريبية لتطوير مهارات الشباب في مجالات التكنولوجيا الحديثة وتأهيلهم لسوق العمل العالمي من خلال برامج متخصصة ومكثفة.
           </p>

           <button className="bg-[#a81a1d] hover:bg-[#8a1417] text-white px-12 py-3.5 rounded-full font-bold shadow-lg shadow-red-900/20 transition-all">
             قدم الآن
           </button>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-black text-center text-[#1b2a47] mb-12">
          {tabs.find(t => t.id === activeTab)?.contentTitle}
        </h2>

        {/* Tabs Carousel */}
        <div className="relative mb-16 flex justify-center items-center">
          <button className="hidden md:flex w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:text-[#1b2a47] shadow-sm ml-4 shrink-0">
            <ChevronRight size={20} />
          </button>
          
          <div className="flex overflow-x-auto gap-4 py-2 px-2 scrollbar-hide snap-x w-full justify-start md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`snap-center whitespace-nowrap px-6 py-8 rounded-2xl font-bold transition-all border shrink-0 flex-1 min-w-[140px] max-w-[180px] flex items-center justify-center text-center
                  ${activeTab === tab.id 
                    ? 'bg-[#1b2a47] text-white border-[#1b2a47] shadow-lg shadow-blue-900/20 scale-105' 
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button className="hidden md:flex w-10 h-10 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:text-[#1b2a47] shadow-sm mr-4 shrink-0">
            <ChevronLeft size={20} />
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              
              {/* Conditional Content Rendering */}
              {activeTab === 'conditions' && (
                <div className="space-y-6 max-w-4xl mx-auto">
                  <h3 className="text-xl font-black text-[#1b2a47] mb-6">شروط القبول الأساسية:</h3>
                  <ul className="space-y-4">
                    {[
                      'أن يكون المتقدم مصري الجنسية.',
                      'أن يكون من خريجي الجامعات المصرية (حكومية أو خاصة) أو المعاهد العليا.',
                      'التفرغ الكامل للبرنامج التدريبي.',
                      'اجتياز اختبارات القبول المحددة لكل مسار تدريبي.',
                      'إجادة اللغة الإنجليزية (مستوى متوسط على الأقل).',
                      'موقف محدد من التجنيد للذكور.'
                    ].map((condition, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-[#1b2a47] flex items-center justify-center shrink-0">
                          <Check size={14} className="text-[#d8bb88]" />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">{condition}</span>
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

              {activeTab === 'diploma12' && (
                <div className="max-w-4xl mx-auto">
                   <div className="mb-10 text-center">
                     <div className="inline-flex gap-2 mb-6">
                       <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200">12 شهر</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200">مسار تخصصي</span>
                       <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full text-sm font-bold border border-gray-200">عملي</span>
                     </div>
                     <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium">
                       برنامج تدريبي متكامل يجمع بين التدريب الأكاديمي والعملي لتمكينك من إتقان أحدث التقنيات وبناء مسار مهني قوي في مجالات التكنولوجيا.
                     </p>
                   </div>
                   
                   <h3 className="text-xl font-black text-[#1b2a47] mb-6 text-center">نظرة عامة على البرنامج</h3>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden mb-12">
                     <div className="p-6 text-center border-b md:border-b-0 md:border-l border-gray-200 bg-gray-50">
                       <p className="text-gray-500 text-sm font-bold mb-2">مدة البرنامج</p>
                       <p className="text-[#1b2a47] font-black text-2xl">12 شهر</p>
                     </div>
                     <div className="p-6 text-center border-b md:border-b-0 md:border-l border-gray-200 bg-gray-50">
                       <p className="text-gray-500 text-sm font-bold mb-2">مسارات تخصصية</p>
                       <p className="text-[#1b2a47] font-black text-2xl">4</p>
                     </div>
                     <div className="p-6 text-center bg-gray-50">
                       <p className="text-gray-500 text-sm font-bold mb-2">الخبرة العملية</p>
                       <p className="text-[#1b2a47] font-black text-2xl">6 أسابيع</p>
                     </div>
                   </div>

                   <h3 className="text-xl font-black text-[#1b2a47] mb-6 text-center">المسارات التخصصية</h3>
                   <p className="text-gray-600 text-center font-medium leading-relaxed mb-8">
                      يتيح لك التعلم المباشر والتدريب العملي في مجالات الذكاء الاصطناعي، علوم البيانات، الأمن السيبراني.
                   </p>
                   <div className="text-center">
                     <button className="border-2 border-gray-300 text-gray-600 px-8 py-2.5 rounded-full font-bold hover:bg-gray-50 transition-colors">
                       اقرأ المزيد
                     </button>
                   </div>
                </div>
              )}

              {/* Placeholder for other tabs */}
              {['about', 'intensive6', 'community3', 'career'].includes(activeTab) && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1b2a47] mb-4">محتوى {tabs.find(t => t.id === activeTab)?.label}</h3>
                  <p className="text-gray-500 max-w-md mx-auto">هذا المحتوى قيد التطوير وسيتم إضافته قريباً بناءً على التصميم النهائي.</p>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default InitiativePage;
