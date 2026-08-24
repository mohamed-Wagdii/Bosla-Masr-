import { Link } from 'react-router-dom';
// import logo2 from '../../assets/logo2'
import logoo from '../../assets/logo2.png'
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
            <img src={logoo} alt="logo2" />   
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
