import { motion } from "framer-motion";
import {
  Search,
  Compass,
  Rocket,
  Shield,
  BookOpen,
  Briefcase,
  Eye,
  ChevronLeft,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import bosla from "../assets/bosla.png";
import nesr6 from "../assets/nesr6.png";
import nesr7 from "../assets/nesr7.png";
import nesr8 from "../assets/nesr8.png";
import nesr9 from "../assets/nesr9.png";
import nesr10 from "../assets/nesr10.png";
import akademi from "../assets/akademi.png";
import ro2ytrna from "../assets/ro2ytrna.png";
import alllll from "../assets/alllll.png";
const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-[#f8f9fa] font-sans overflow-x-hidden text-[#1b2a47]"
      dir="rtl"
    >
      {/* 1. Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text side (Left in the image, so we put it second in RTL or use flex order) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-right order-2 md:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1b2a47] mb-4">
                بوصلة مصر
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
                دليلك لاكتشاف الفرص والخدمات الحكومية
              </h2>
              <p className="text-gray-500 font-medium leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                منصة رقمية موحدة تجمع كافة خدمات، مبادرات، برامج، وفرص الوزارات
                المصرية في مكان واحد لتسهيل الوصول إليها والاستفادة منها، لبناء
                مجتمع إلكتروني واقتصاد رقمي متكامل.
              </p>
              <button className="bg-[#a81a1d] text-white px-10 py-4 rounded-full font-bold hover:bg-[#8a1417] transition-all shadow-lg shadow-red-900/20">
                اكتشف البوابة
              </button>
            </motion.div>

            {/* Image side (Right in the image, so order 1 in RTL) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 order-1 md:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={bosla} alt="bosal" className="w-full h-auto object-contain" />
                {/* Graphics Overlay */}
                <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-[#d8bb88]/20 rounded-full flex items-center justify-center border border-[#d8bb88]/50"
                      >
                        <div className="w-2 h-2 bg-[#d8bb88] rounded-full"></div>
                      </div>
                    ))}
                    {/* Center Pyramid/Eye piece */}
                    <div className="col-start-2 row-start-2 w-10 h-10 bg-[#1b2a47] rounded-full flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 shadow-lg border-2 border-[#d8bb88]">
                      <Navigation className="w-6 h-6 text-[#d8bb88]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. What is Bosla Masr */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-black text-[#1b2a47] mb-6">
          ما هي بوصلة مصر؟
        </h2>
        <p className="text-gray-600 font-medium leading-relaxed mb-12 max-w-4xl mx-auto text-lg">
          بوصلة مصر هي المرجع الأول للمواطن المصري للوصول إلى كافة الفرص
          الحكومية. نهدف إلى سد الفجوة بين طموحات الشباب والخدمات التي تقدمها
          الدولة من خلال منصة تفاعلية ذكية تساعد المستخدم على الوصول لما يبحث
          عنه في أسرع وقت ممكن.
        </p>

        {/* Horizontal Stats Pills */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[
            { num: "26", text: "وزارة" },
            { num: "18+", text: "مبادرات وبرامج" },
            { num: "14+", text: "فرص تدريب وعمل" },
            { num: "32+", text: "خدمات متنوعة" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 text-[#1b2a47] px-6 py-3 rounded-full font-bold shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="w-6 h-6 rounded-full bg-[#1b2a47] text-white flex items-center justify-center text-xs">
                <CheckCircle2 size={14} />
              </div>
              <div className="flex gap-1.5">
                <span className="text-[#1b2a47] font-black">{stat.num}</span>
                <span>{stat.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Why Bosla Masr? */}
      <div className="bg-white py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-[#1b2a47] mb-10">
            لماذا بوصلة مصر؟
          </h2>
          <div className="space-y-4">
            {[
              { text: "الوصول بسهولة", active: true },
              { text: "معلومات منظمة", active: false },
              { text: "اكتشاف الفرص", active: false },
              { text: "كل الوزارات في مكان واحد", active: false },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between py-4 px-6 rounded-2xl border transition-all ${feature.active ? "bg-[#1b2a47] text-white border-[#1b2a47] shadow-lg shadow-blue-900/20" : "bg-white text-[#1b2a47] border-gray-200 hover:border-gray-300"}`}
              >
                <span className="font-bold">{feature.text}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${feature.active ? "bg-[#d8bb88]/20 text-[#d8bb88]" : "bg-gray-100 text-gray-500"}`}
                >
                  <Compass size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. What can you explore? */}
      <div className="max-w-7xl mx-auto px-4 py-20 bg-[#f8f9fa]">
        <h2 className="text-3xl font-black text-center text-[#1b2a47] mb-12">
          ما الذي يمكنك استكشافه؟
        </h2>
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2"
          dir="ltr"
        >
          <div
            className="flex min-h-[216px] flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
            dir="rtl"
          >
            <div className="mb-4 flex  items-center justify-center">
              <img
                src={nesr7}
                alt="المبادرات وبرامج التدريب"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-3 text-lg font-black text-[#1b2a47]">
              المبادرات وبرامج التدريب
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              أهم المبادرات القومية لتطوير مهارات مختلف الفئات
            </p>
          </div>

          <div
            className="flex min-h-[216px] flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
            dir="rtl"
          >
            <div className="mb-4 flex  items-center justify-center">
              <img
                src={nesr9}
                alt="الخدمات الحكومية"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-3 text-lg font-black text-[#1b2a47]">
              الخدمات الحكومية
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              أحدث ما تقدمه كل وزارة بما يفيد المبادرات والمشاريع
            </p>
          </div>

          <div
            className="min-h-[216px] overflow-hidden rounded-[24px] border border-gray-200 bg-gray-100 shadow-sm"
            dir="rtl"
          >
            <img
              src={akademi}
              alt="مبنى حكومي"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="min-h-[216px] overflow-hidden rounded-[24px] border border-gray-200 bg-gray-100 shadow-sm"
            dir="rtl"
          >
            <img
              src={nesr10}
              alt="أعمدة أثرية"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="flex min-h-[216px] flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
            dir="rtl"
          >
            <div className="mb-4 flex  items-center justify-center">
              <img
                src={nesr6}
                alt="وظائف الوزارة"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-3 text-lg font-black text-[#1b2a47]">
              وظائف الوزارة
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              أهم الفرص الوظيفية في مختلف الوزارات والجهات التابعة
            </p>
          </div>

          <div
            className="flex min-h-[216px] flex-col items-center justify-center rounded-[24px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-xl"
            dir="rtl"
          >
            <div className="mb-4 flex  items-center justify-center">
              <img
                src={nesr8}
                alt="الأخبار والفعاليات"
                className="h-full w-full object-contain"
              />
            </div>
            <h3 className="mb-3 text-lg font-black text-[#1b2a47]">
              الأخبار والفعاليات
            </h3>
            <p className="text-sm leading-relaxed text-gray-500">
              تتبع أحدث الأخبار والفعاليات والمستجدات من وزارات وهيئات الحكومة
              في مكان واحد
            </p>
          </div>
        </div>
      </div>

      {/* 5. How does it work? */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12 text-[#1b2a47]">
            كيف نعمل؟
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Step 1 */}
            <div className="bg-[#1b2a47] text-white rounded-3xl p-6 flex-1 w-full text-right flex items-center justify-between shadow-lg">
              <div>
                <h3 className="font-black text-xl mb-1">ابحث</h3>
                <p className="text-gray-300 text-sm">
                  ابحث عن الخدمة أو المبادرة التي تحتاجها
                </p>
              </div>
              <div className="text-5xl font-black text-white/20">1</div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#d8bb88] text-[#1b2a47] rounded-3xl p-6 flex-1 w-full text-right flex items-center justify-between shadow-lg transform md:-translate-y-4">
              <div>
                <h3 className="font-black text-xl mb-1">اكتشف</h3>
                <p className="text-[#1b2a47]/80 text-sm">
                  استكشف التفاصيل، المتطلبات، وكيفية التقديم
                </p>
              </div>
              <div className="text-5xl font-black text-[#1b2a47]/20">2</div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#1b2a47] text-white rounded-3xl p-6 flex-1 w-full text-right flex items-center justify-between shadow-lg">
              <div>
                <h3 className="font-black text-xl mb-1">ابدأ</h3>
                <p className="text-gray-300 text-sm">
                  انتقل مباشرة إلى المنصة الرسمية وابدأ
                </p>
              </div>
              <div className="text-5xl font-black text-white/20">3</div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Our Vision */}
      <div className="py-20 bg-[#f8f9fa] text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b2a47] mb-10">رؤيتنا</h2>
          <div className="rounded-[32px] overflow-hidden shadow-2xl mb-10">
            {/* <img
              src="https://images.unsplash.com/photo-1541888087618-20fac48f44d1?auto=format&fit=crop&q=80&w=1200"
              alt="Vision"
              className="w-full h-[300px] md:h-[400px] object-cover"
            /> */}
            <img src={ro2ytrna} alt="ro2ytrna" className="w-full h-auto object-contain" />
          </div>
          <p className="text-lg md:text-xl text-gray-700 font-bold max-w-4xl mx-auto leading-relaxed">
            أن نكون نقطة الوصول الأولى للشباب المصري، لاكتشاف الخدمات والفرص
            والمعلومات الحكومية، من خلال تجربة رقمية بسيطة وموثوقة تساعد على
            بناء مجتمع أكثر وعيًا واتصالاً بالفرص المتاحة.
          </p>
        </div>
      </div>

      {/* 7. Footer Hero */}
      <div className="relative h-[400px] overflow-hidden md:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
            alt="Architecture Background"
            className="w-full h-full object-cover filter brightness-[0.3]"
          /> */}
          <img
            src={alllll}
            alt="alllll"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b2a47]/80 via-[#1b2a47]/30 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            ابدأ رحلتك مع بوصلة مصر
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
            اكتشف الخدمات، المبادرات، وبرامج التدريب والعمل...
          </p>
          <button className="bg-[#a81a1d] text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-[#8a1417] transition-all shadow-xl shadow-red-900/50">
            اكتشف البوابة
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
