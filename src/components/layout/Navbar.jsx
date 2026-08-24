import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, User, X } from "lucide-react";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "الصفحة الرئيسية", to: "/" },
  { label: "الوزارات", to: "/ministry" },
  { label: "مبادرات وبرامج تدريبية", to: "/initiative" },
  { label: "الأخبار والفعاليات", to: "/#news" },
  { label: "وظائف الوزارات", to: "/#jobs" },
  { label: "عن بوصلة مصر", to: "/about" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 lg:gap-8">
          <Link to="/" className="flex shrink-0 items-center gap-2.5 sm:gap-3">
            <div className="flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
              <img
                src={logo}
                alt="بوصلة مصر"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none tracking-tight text-[#1b2a47]">
              <span className="text-xl font-black sm:text-2xl">بوصلة مصر</span>
              <span className="mt-1 hidden text-[10px] font-normal text-yellow-600 sm:block">
                دليلك للخدمات الحكومية
              </span>
            </div>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-x-6 xl:flex 2xl:gap-x-8">
            {navLinks.map((link) => {
              const isActive = link.to === pathname;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`border-b-2 py-2 text-sm font-medium transition-colors hover:border-red-700 hover:text-red-700 ${isActive ? "border-red-700 text-red-700" : "border-transparent text-gray-500"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex lg:gap-3">
            <button
              type="button"
              aria-label="الإشعارات"
              className="rounded-full p-2.5 text-gray-500 transition-colors hover:bg-slate-100 hover:text-[#1b2a47]"
            >
              <Bell className="h-5 w-5" />
            </button>
            <Link
              to="/profile"
              aria-label="الملف الشخصي"
              className="rounded-full p-2.5 text-gray-500 transition-colors hover:bg-slate-100 hover:text-[#1b2a47]"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              to="/login"
              className="rounded-full bg-red-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-800 lg:px-5"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/profile"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1b2a47] text-sm font-bold text-white transition-colors hover:bg-blue-900"
            >
              ع
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#1b2a47] transition-colors hover:bg-slate-50 xl:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-100 py-4 xl:hidden">
            <div className="grid gap-1 text-right">
              {navLinks.map((link) => {
                const isActive = link.to === pathname;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 font-medium transition-colors hover:bg-red-50 hover:text-red-700 ${isActive ? "bg-red-50 text-red-700" : "text-gray-600"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 rounded-xl bg-red-700 px-4 py-3 text-center font-bold text-white transition-colors hover:bg-red-800"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
