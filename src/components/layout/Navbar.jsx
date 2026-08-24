import { Link } from 'react-router-dom';
import { Bell, User, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo icon as requested */}
              <div className="w-12 h-12 relative flex items-center justify-center">
                 <img src="/logo-light.png" alt="بوصلة مصر" className="w-full h-full object-contain" onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }} />
                 {/* Fallback SVG if image not found */}
                 <svg viewBox="0 0 100 100" className="w-full h-full hidden" style={{ display: 'none' }}>
                    <path d="M70,30 Q90,30 90,50 Q90,70 70,70 L40,70 L40,80 L70,80 Q100,80 100,50 Q100,20 70,20 L30,20 L30,50 L40,50 L40,30 Z" fill="#1b2a47" />
                    <path d="M20,40 L40,70 L20,90 Z" fill="#e53e3e" />
                    <circle cx="30" cy="70" r="5" fill="#fff" />
                    <circle cx="50" cy="90" r="5" fill="#1b2a47" />
                 </svg>
              </div>
              <div className="text-[#1b2a47] font-tajawal font-black text-2xl tracking-tight leading-none flex flex-col">
                <span>بوصلة مصر</span>
                <span className="text-yellow-600 text-[10px] font-normal">دليلك للخدمات الحكومية</span>
              </div>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-900 hover:text-[var(--color-gold)] font-medium transition-colors border-b-2 border-transparent hover:border-[var(--color-gold)] py-2">الصفحة الرئيسية</Link>
            <Link to="/ministry" className="text-gray-500 hover:text-gray-900 font-medium transition-colors py-2">وزارات</Link>
            <Link to="/initiative" className="text-gray-500 hover:text-gray-900 font-medium transition-colors py-2">مبادرات وبرامج تدريبية</Link>
            <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors py-2">الأخبار والفعاليات</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 font-medium transition-colors py-2">وظائف الوزارات</a>
            <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium transition-colors py-2">عن بوصلة مصر</Link>
          </div>

          {/* Left Side Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>
            <Link to="/profile" className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100 block">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/login" className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-medium transition-colors shadow-sm block">
              تسجيل الدخول
            </Link>
            <Link to="/profile" className="bg-[#1b2a47] text-white w-9 h-9 flex items-center justify-center rounded-full text-sm font-bold hover:bg-blue-900 transition-colors">
              ع
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
