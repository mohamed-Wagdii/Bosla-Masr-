import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1b2a47] text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-start justify-center">
             <div className="w-20 h-20 mb-4 relative flex items-center justify-center">
                 <img src="/logo-dark.png" alt="بوصلة مصر" className="w-full h-full object-contain filter invert" onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }} />
                 {/* Fallback SVG */}
                 <svg viewBox="0 0 100 100" className="w-full h-full hidden" style={{ display: 'none' }}>
                    <path d="M70,30 Q90,30 90,50 Q90,70 70,70 L40,70 L40,80 L70,80 Q100,80 100,50 Q100,20 70,20 L30,20 L30,50 L40,50 L40,30 Z" fill="#fff" />
                    <path d="M20,40 L40,70 L20,90 Z" fill="#e53e3e" />
                    <circle cx="30" cy="70" r="5" fill="#1b2a47" />
                    <circle cx="50" cy="90" r="5" fill="#fff" />
                 </svg>
             </div>
             <div className="text-white font-tajawal font-black text-3xl tracking-tight leading-none flex flex-col">
                <span>بوصلة مصر</span>
                <span className="text-yellow-600 text-xs font-normal mt-1">دليلك للخدمات الحكومية</span>
             </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold mb-4">المنصة</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">الأخبار والفعاليات</a></li>
              <li><a href="#" className="hover:text-white transition-colors">عن بوصلة مصر</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold mb-4">اكتشف</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/ministry" className="hover:text-white transition-colors">الوزارات</Link></li>
              <li><Link to="/search" className="hover:text-white transition-colors">المبادرات</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">البرامج التدريبية</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">فيسبوك</a></li>
              <li><a href="#" className="hover:text-white transition-colors">إنستغرام</a></li>
              <li><a href="#" className="hover:text-white transition-colors">لينكد إن</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 بوصلة مصر</p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
