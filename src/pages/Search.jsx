import {
  Search as SearchIcon,
  Filter,
  ChevronDown,
  Bookmark,
  Smartphone,
  Monitor,
  X,
} from "lucide-react";
import { useState } from "react";
import broken_image from "../assets/broken_image.png";
import DigitalMisr from "../assets/Digital-Misr1.png";
import weinn from "../assets/weinn.png";
import iti from "../assets/iti1.png";
import nti from "../assets/nti.png";
import digi from "../assets/digilians.png";

const Checkbox = ({ label }) => (
  <label className="flex items-center gap-3 cursor-pointer group mb-3">
    <div className="relative flex items-center justify-center w-5 h-5 border border-gray-300 rounded bg-white group-hover:border-[#1b2a47] transition-colors">
      <input
        type="checkbox"
        className="opacity-0 absolute w-full h-full cursor-pointer"
      />
    </div>
    <span className="text-sm font-medium text-gray-700 group-hover:text-[#1b2a47] transition-colors">
      {label}
    </span>
  </label>
);

const FilterPanel = () => (
  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
    <div className="flex items-center gap-3 mb-8 text-[#1b2a47] border-b border-gray-100 pb-5">
      <Filter className="w-5 h-5" />
      <h3 className="font-black text-xl">تصفية النتائج</h3>
    </div>

    {/* Filter Group: Content Type */}
    <div className="mb-8">
      <h4 className="font-bold text-gray-800 mb-4 text-base">نوع المحتوى</h4>
      <div className="pl-2">
        <Checkbox label="الكل" />
        <Checkbox label="خدمات" />
        <Checkbox label="مبادرات" />
        <Checkbox label="برامج تدريبية" />
        <Checkbox label="وظائف" />
        <Checkbox label="أخبار" />
        <Checkbox label="فعاليات" />
      </div>
    </div>

    {/* Filter Group: Ministry */}
    <div className="mb-8">
      <h4 className="font-bold text-gray-800 mb-4 text-base">الوزارة</h4>
      <div className="flex items-center justify-between border-2 border-gray-100 rounded-xl p-3.5 text-sm font-bold text-gray-600 cursor-pointer hover:border-[#1b2a47] transition-colors bg-gray-50">
        <span>جميع الوزارات</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>

    {/* Filter Group: Governorate */}
    <div className="mb-8">
      <h4 className="font-bold text-gray-800 mb-4 text-base">المحافظة</h4>
      <div className="flex items-center justify-between border-2 border-gray-100 rounded-xl p-3.5 text-sm font-bold text-gray-600 cursor-pointer hover:border-[#1b2a47] transition-colors bg-gray-50">
        <span>القاهرة</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>

    {/* Filter Group: Age */}
    <div className="mb-8">
      <h4 className="font-bold text-gray-800 mb-4 text-base">الفئة العمرية</h4>
      <div className="pl-2">
        <Checkbox label="الكل" />
        <Checkbox label="18 - 24 سنة" />
        <Checkbox label="25 - 35 سنة" />
        <Checkbox label="41 سنة فأكثر" />
      </div>
    </div>

    {/* Filter Group: Target Audience */}
    <div className="mb-4">
      <h4 className="font-bold text-gray-800 mb-4 text-base">الفئة المستهدفة</h4>
      <div className="pl-2">
        <Checkbox label="الكل" />
        <Checkbox label="طلاب" />
        <Checkbox label="خريجون" />
        <Checkbox label="الباحثون عن عمل" />
        <Checkbox label="رواد الأعمال" />
        <Checkbox label="أصحاب المشروعات" />
        <Checkbox label="الموظفون" />
      </div>
      <div className="mt-4 text-[#1b2a47] text-xs font-bold cursor-pointer hover:underline border-t border-gray-100 pt-4 text-center">
        المزيد من التصنيفات
      </div>
    </div>
  </div>
);

const ResultCard = ({ result }) => (
  <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative group">
    <div className="p-6 flex-1 flex flex-col items-center relative">
      {/* Top Bar inside card */}
      <div className="flex w-full justify-between items-start mb-6 z-10">
        <div className="text-gray-400 hover:text-[#1b2a47] transition-colors cursor-pointer p-2">
          <Bookmark className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 shadow-sm">
          <span className="text-[10px] font-bold text-gray-500">
            {result.age}
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span className="text-[10px] font-bold text-gray-500">
            {result.location}
          </span>
          {result.type === "mobile" ? (
            <Smartphone className="w-3.5 h-3.5 text-gray-400 ml-1" />
          ) : (
            <Monitor className="w-3.5 h-3.5 text-gray-400 ml-1" />
          )}
        </div>
      </div>

      {/* Logo/Image Area */}
      <div className="w-40 h-40 mb-6 flex items-center justify-center -mt-6">
        <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center text-white font-black text-2xl shadow-md p-4 text-center leading-tight border-4 border-white">
          {result.logoText}
        </div>
      </div>

      <div className="text-center w-full mt-2">
        <p className="text-[10px] font-bold text-gray-400 mb-2">
          {result.ministry}
        </p>
        <h3 className="font-black text-xl text-[#1b2a47] mb-3">
          {result.title}
        </h3>
        <p className="text-sm font-medium text-gray-500 line-clamp-3 leading-relaxed">
          {result.desc}
        </p>
      </div>
    </div>

    <div className="p-6 pt-0 mt-auto w-full">
      <button className="w-full py-3 rounded-full border-2 border-[#1b2a47] text-[#1b2a47] font-bold hover:bg-[#1b2a47] hover:text-white transition-all shadow-sm">
        المزيد
      </button>
    </div>
  </div>
);

const SearchPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const results = [
    {
      logoText: <img src={broken_image} alt="broken_image" />,
      title: "بكرة ديجيتال",
      ministry: "وزارة الاتصالات وتكنولوجيا المعلومات",
      desc: "مبادرة وطنية لتنمية المهارات الرقمية لدى الشباب ورفع جاهزيتهم لمتطلبات سوق العمل.",
      location: "القاهرة",
      age: "18 - 30 سنة",
      type: "mobile",
    },
    {
      logoText: <img src={digi} alt="digi" />,
      title: "مبادرة الرواد الرقميون",
      ministry: "وزارة الاتصالات وتكنولوجيا المعلومات",
      desc: "مبادرة لتوجيه وتطوير مهارات الشباب في مجالات التكنولوجيا الحديثة وبناء قدراتهم.",
      location: "القاهرة",
      age: "18 - 30 سنة",
      type: "desktop",
    },
    {
      logoText: <img src={DigitalMisr} alt="Digital-Misr1" />,
      title: "رواد مصر الرقمية",
      ministry: "وزارة الاتصالات وتكنولوجيا المعلومات",
      desc: "مبادرة لتأهيل الطلاب والخريجين وتنمية مهاراتهم الرقمية والتكنولوجية لمواكبة التطور.",
      location: "القاهرة",
      age: "18 - 30 سنة",
      type: "mobile",
    },
    {
      logoText: <img src={weinn} alt="we" />,
      title: "نحن نبتكر",
      ministry: "وزارة الاتصالات وتكنولوجيا المعلومات",
      desc: "مبادرة متخصصة في الابتكار وريادة الأعمال لإعداد كوادر وطنية في مجال الأمن السيبراني.",
      location: "القاهرة",
      age: "18 - 30 سنة",
      type: "desktop",
    },
    {
      logoText: <img src={iti} alt="iti" />,
      title: "معهد تكنولوجيا المعلومات (iTi)",
      ministry: "وزارة الاتصالات وتكنولوجيا المعلومات",
      desc: "معهد متخصص في تنمية القدرات البشرية في مجالات تكنولوجيا المعلومات وتقديم برامج احترافية.",
      location: "القاهرة",
      age: "18 - 30 سنة",
      type: "desktop",
    },
    {
      logoText: <img src={nti} alt="nti" />,
      title: "المبادرة الوطنية لتأهيل قادة مصر",
      ministry: "الأكاديمية الوطنية للتدريب",
      desc: "مبادرة لتأهيل الكفاءات الحكومية وتنمية مهاراتهم الإدارية والقيادية لتطوير العمل العام.",
      location: "القاهرة",
      age: "18 - 30 سنة",
      type: "mobile",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fa] py-8 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Search Bar */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="relative flex items-center bg-white rounded-full shadow-md border border-gray-100 overflow-hidden pl-4 pr-3 py-3">
            <div className="bg-[#1b2a47] p-2.5 rounded-full text-white cursor-pointer hover:bg-blue-900 transition-colors shadow-sm shrink-0">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="ابحث عن المبادرات، الخدمات..."
              className="flex-1 bg-transparent border-none outline-none px-4 sm:px-6 text-base sm:text-xl font-medium text-gray-800 min-w-0"
              defaultValue="مبادرات"
            />
          </div>

          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-6">
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 sm:px-5 py-2 shadow-sm text-sm font-bold text-gray-600">
              <span>القاهرة</span>
              <button className="text-gray-400 hover:text-red-500 font-normal">×</button>
            </div>
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-4 sm:px-5 py-2 shadow-sm text-sm font-bold text-gray-600">
              <span>18 - 24 سنة</span>
              <button className="text-gray-400 hover:text-red-500 font-normal">×</button>
            </div>
            <div className="flex items-center gap-3 bg-white border-2 border-[#1b2a47] text-[#1b2a47] rounded-full px-4 sm:px-5 py-2 shadow-sm text-sm font-bold">
              <span>برامج تدريبية</span>
              <button className="hover:text-red-500 font-normal">×</button>
            </div>
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-[#1b2a47] shadow-sm"
          >
            <Filter className="w-4 h-4" />
            تصفية النتائج
          </button>
        </div>

        {/* Mobile Filter Drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowMobileFilters(false)}
            />
            {/* Panel */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#f5f7fa] rounded-t-3xl max-h-[85vh] overflow-y-auto p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black text-[#1b2a47]">التصفية</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterPanel />
              <button
                onClick={() => setShowMobileFilters(false)}
                className="mt-4 w-full py-3 bg-[#1b2a47] text-white rounded-full font-bold"
              >
                عرض النتائج
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Sidebar Filters — desktop only */}
          <div className="hidden md:block w-full md:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-6 md:mb-8 flex items-end justify-between border-b border-gray-200 pb-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#1b2a47]">
                نتائج البحث
              </h2>
              <p className="text-gray-500 text-sm font-bold bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
                تم العثور على 14 نتيجة
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {results.map((res, idx) => (
                <ResultCard key={idx} result={res} />
              ))}
            </div>

            <div className="mt-12 sm:mt-16 flex justify-center">
              <button className="text-[#1b2a47] font-black text-sm border-2 border-[#1b2a47] rounded-full px-10 sm:px-12 py-3 hover:bg-[#1b2a47] hover:text-white transition-all shadow-md">
                عرض المزيد من النتائج
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
