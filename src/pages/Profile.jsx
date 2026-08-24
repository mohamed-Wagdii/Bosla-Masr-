import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Bookmark, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans pb-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Title */}
        <h1 className="text-3xl font-black text-[#1b2a47] mb-8">الملف الشخصي</h1>

        {/* Profile Header Card */}
        <div className="relative bg-[#1b2a47] rounded-[32px] p-8 md:p-12 mb-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Circuit Board Background Pattern Placeholder */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d8bb88 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 Q100,100 200,50 T400,50 T600,50 T800,50 T1000,50" fill="none" stroke="#d8bb88" strokeWidth="2" />
              <path d="M0,150 Q100,200 200,150 T400,150 T600,150 T800,150 T1000,150" fill="none" stroke="#d8bb88" strokeWidth="2" />
            </svg>
          </div>

          {/* Settings Icon */}
          <button className="absolute top-6 left-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-colors z-10">
            <Settings size={20} />
          </button>

          {/* User Info */}
          <div className="flex flex-col md:flex-row items-center gap-6 z-10">
            <div className="w-32 h-32 rounded-full border-4 border-[#d8bb88] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-3xl font-black text-white mb-2">مريم عصام</h2>
              <p className="text-gray-300 font-medium mb-1">Marieme@gmail.com</p>
              <p className="text-[#d8bb88] font-bold text-sm">القاهرة</p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="z-10">
            <button className="flex items-center gap-2 bg-transparent border border-[#d8bb88] text-[#d8bb88] hover:bg-[#d8bb88] hover:text-[#1b2a47] px-6 py-3 rounded-full font-bold transition-colors">
              <Edit2 size={18} />
              <span>تعديل الملف الشخصي</span>
            </button>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-black text-[#1b2a47]">اهتماماتي</h3>
            <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#1b2a47] hover:border-[#1b2a47] shadow-sm transition-colors">
              <Edit2 size={16} />
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {[
              { text: 'البرمجة', icon: '</>' },
              { text: 'الأمن السيبراني', icon: '🛡️' },
              { text: 'الذكاء الاصطناعي', icon: '🧠' },
              { text: 'ريادة الأعمال', icon: '💼' },
              { text: 'مسابقات وفعاليات', icon: '🏆' },
              { text: 'وظائف', icon: '🏢' },
            ].map((interest, idx) => (
              <div key={idx} className="bg-white border border-gray-200 px-6 py-3 rounded-full flex items-center gap-3 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-[#1b2a47] text-white flex items-center justify-center text-sm">{interest.icon}</span>
                <span className="font-bold text-[#1b2a47]">{interest.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Items Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-[#1b2a47]">المحفوظات</h3>
            <button className="text-sm font-bold text-gray-500 hover:text-[#1b2a47] bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm transition-colors">
              عرض الجميع
            </button>
          </div>

          <div className="relative">
            {/* Carousel Navigation */}
            <button className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#1b2a47] shadow-md z-10 hidden md:flex">
              <ChevronRight size={20} />
            </button>
            <button className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-[#1b2a47] shadow-md z-10 hidden md:flex">
              <ChevronLeft size={20} />
            </button>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: ITI */}
              <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col h-full">
                <button className="absolute top-6 left-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#1b2a47] hover:bg-gray-100 transition-colors">
                  <Bookmark size={20} className="fill-current" />
                </button>
                <div className="flex gap-2 absolute top-6 right-6">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">القاهرة</span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">18-30 سنة</span>
                </div>
                
                <div className="mt-12 mb-6 flex-1 flex flex-col items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/ITI_Logo.png/800px-ITI_Logo.png" alt="ITI Logo" className="h-32 object-contain mb-4" />
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-500 font-bold mb-1">وزارة الاتصالات وتكنولوجيا المعلومات</p>
                  <h4 className="text-xl font-black text-[#1b2a47] mb-3">معهد تكنولوجيا المعلومات (ITI)</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    معهد متخصص في تنمية القدرات البشرية في مجالات تكنولوجيا المعلومات والاتصالات وتقديم برامج تدريبية متطورة.
                  </p>
                </div>
                
                <button className="w-full py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-full hover:bg-gray-50 transition-colors">
                  المزيد
                </button>
              </div>

              {/* Card 2: DiGiLiANS */}
              <div className="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow relative flex flex-col h-full">
                <button className="absolute top-6 left-6 w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#1b2a47] hover:bg-gray-100 transition-colors">
                  <Bookmark size={20} className="fill-current" />
                </button>
                <div className="flex gap-2 absolute top-6 right-6">
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">القاهرة</span>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">18-30 سنة</span>
                </div>
                
                <div className="mt-12 mb-6 flex-1 flex flex-col items-center justify-center">
                  <div className="text-[#00A4EF] mb-2 font-black text-5xl">DiGiLiANS</div>
                  {/* Just a placeholder icon since I don't have the exact logo */}
                  <div className="w-24 h-24 bg-[#00A4EF]/10 rounded-2xl border-4 border-[#00A4EF] rotate-45 flex items-center justify-center mb-4">
                     <div className="w-12 h-12 bg-[#00A4EF] rounded-lg -rotate-45"></div>
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-xs text-gray-500 font-bold mb-1">وزارة الاتصالات وتكنولوجيا المعلومات</p>
                  <h4 className="text-xl font-black text-[#1b2a47] mb-3">مبادرة الرواد الرقميون</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    منحة تدريبية لتطوير مهارات الشباب في مجالات التكنولوجيا الحديثة وتأهيلهم لسوق العمل العالمي.
                  </p>
                </div>
                
                <Link to="/initiative" className="w-full py-3 border-2 border-gray-200 text-gray-600 font-bold rounded-full hover:bg-gray-50 transition-colors block text-center">
                  المزيد
                </Link>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
