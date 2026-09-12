import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Building2,
  ExternalLink,
  ChevronLeft,
  PhoneCall,
  Globe,
  SlidersHorizontal,
  ArrowUpRight,
  Shield,
  Briefcase,
  Layers,
  GraduationCap,
  HeartPulse,
  Landmark,
  FileText,
  X,
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';

// Logos from assets
import nesr from '../assets/nesr.png';
import nesr1 from '../assets/nesr1.png';
import nesr2 from '../assets/nesr2.png';
import nesr3 from '../assets/nesr3.png';
import nesr4 from '../assets/nesr4.png';
import nesr5 from '../assets/nesr5.png';
import nesr6 from '../assets/nesr6.png';
import nesr7 from '../assets/nesr7.png';
import nesr8 from '../assets/nesr8.png';
import nesr9 from '../assets/nesr9.png';
import nesr10 from '../assets/nesr10.png';
import eteestalat from '../assets/etesalatBASE.png';

// Categories
const categories = [
  { id: 'all', label: 'جميع الوزارات' },
  { id: 'sovereign', label: 'وزارات سيادية' },
  { id: 'services', label: 'خدمات وبنية تحتية' },
  { id: 'economy', label: 'اقتصاد وتجارة واستثمار' },
  { id: 'education', label: 'تعليم وبحث علمي وثقافة' },
  { id: 'social', label: 'صحة ومجتمع وعمل' },
];

// 32 Egyptian Ministries Dataset
const ministriesData = [
  {
    id: 'mcit',
    name: 'وزارة الاتصالات وتكنولوجيا المعلومات',
    shortName: 'الاتصالات وتكنولوجيا المعلومات',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: eteestalat,
    isCustomImage: true,
    accentColor: '#1b2a47',
    tagline: 'نحو بناء مصر الرقمية وتطوير منظومة الاتصالات الوطنية',
    description: 'الجهة المسؤولة عن تخطيط وتطوير قطاع الاتصالات وتكنولوجيا المعلومات وبناء البنية التحتية لمصر الرقمية، ورعاية مبادرات الابتكار والتدريب الرقمي.',
    servicesCount: 28,
    initiativesCount: 14,
    jobsCount: 12,
    hasDetailPage: true,
    detailRoute: '/ministry',
    website: 'https://mcit.gov.eg',
    hotline: '16528',
    headquarters: 'القرية الذكية / العاصمة الإدارية الجديدة',
    popularServices: [
      'مبادرة أجيال مصر الرقمية (DEG)',
      'منصة مصر الرقمية للخدمات الحكومية',
      'منح معهد تكنولوجيا المعلومات ITI',
      'مدارس WE للتكنولوجيا التطبيقية'
    ]
  },
  {
    id: 'defense',
    name: 'وزارة الدفاع والإنتاج الحربي',
    shortName: 'الدفاع والإنتاج الحربي',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr,
    accentColor: '#4b5563',
    tagline: 'حماية الأمن القومي وتأمين حدود الوطن والمساهمة التنموية',
    description: 'حماية الأمن القومي لجمهورية مصر العربية، والذود عن حدود الوطن واستقلاله، ودعم المشروعات القومية والتنموية بالدولة.',
    servicesCount: 15,
    initiativesCount: 8,
    jobsCount: 5,
    website: 'https://www.mod.gov.eg',
    hotline: '19468',
    headquarters: 'مقر القيادة الاستراتيجية، العاصمة الإدارية الجديدة',
    popularServices: [
      'خدمات التجنيد والتعبئة الإلكترونية',
      'استخراج تصاريح السفر الإلكترونية',
      'خدمات مستشفيات القوات المسلحة',
      'التقديم للوظائف والتدريب بالمصانع الحربية'
    ]
  },
  {
    id: 'interior',
    name: 'وزارة الداخلية',
    shortName: 'الداخلية',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr1,
    accentColor: '#0369a1',
    tagline: 'حفظ الأمن الداخلي وتقديم الخدمات الجماهيرية المميكنة',
    description: 'صون النظام والأمن العام، وتقديم حزمة واسعة من الخدمات المدنية والجماهيرية المميكنة للمواطنين في شتى أنحاء الجمهورية.',
    servicesCount: 42,
    initiativesCount: 6,
    jobsCount: 8,
    website: 'https://moi.gov.eg',
    hotline: '15340',
    headquarters: 'التجمع الخامس، القاهرة الجديدة',
    popularServices: [
      'استخراج بطاقة الرقم القومي وشهادات الميلاد مميكنة',
      'تجديد رخص القيادة وتسيير المركبات أونلاين',
      'استخراج وتجديد جوازات السفر وتصاريح العمل',
      'صحيفة الحالة الجنائية (الفيش والتشبيه الرقمي)'
    ]
  },
  {
    id: 'foreign',
    name: 'وزارة الخارجية والهجرة وشئون المصريين بالخارج',
    shortName: 'الخارجية والهجرة',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr2,
    accentColor: '#0f766e',
    tagline: 'تمثيل مصر الدبلوماسي ورعاية الجاليات والمصالح بالخارج',
    description: 'إدارة العلاقات الدبلوماسية والقنصلية لجمهورية مصر العربية حول العالم، وحماية مصالح الوطن والجاليات المصرية بالخارج وتيسير شؤونهم.',
    servicesCount: 22,
    initiativesCount: 7,
    jobsCount: 4,
    website: 'https://www.mfa.gov.eg',
    hotline: '19654',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'التصديق على المحررات والشهادات الرسمية',
      'مبادرات تيسير سيارات المغتربين والتسوية التجنيدية',
      'حجز المواعيد بالقنصليات والسفارات بالخارج',
      'إصدار وتجديد التوكيلات والمعاملات القنصلية'
    ]
  },
  {
    id: 'justice',
    name: 'وزارة العدل',
    shortName: 'العدل',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr3,
    accentColor: '#854d0e',
    tagline: 'ترسيخ العدالة وتطوير المنظومة القضائية والتوثيق المميكن',
    description: 'الإشراف على منظومة العدالة وتطوير المحاكم ومكاتب الشهر العقاري والتوثيق والطب الشرعي، والتحول الرقمي القضائي الكامل.',
    servicesCount: 35,
    initiativesCount: 5,
    jobsCount: 9,
    website: 'https://jp.gov.eg',
    hotline: '15999',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'خدمات الشهر العقاري والتوثيق المميكنة',
      'الاستعلام عن القضايا وتداولات الجلسات إلكترونياً',
      'حجز مواعيد مكاتب التوثيق عبر تطبيق أرغب في عمل توكيل',
      'إيداع صحف الدعاوى عن بعد'
    ]
  },
  {
    id: 'finance',
    name: 'وزارة المالية',
    shortName: 'المالية',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr4,
    accentColor: '#b45309',
    tagline: 'إدارة السياسات المالية والضرائب والجمارك ودعم الاستقرار الاقتصادي',
    description: 'رسم السياسات المالية العامة للدولة، وتطوير المنظومة الضريبية والجمركية المميكنة، وتحفيز الاستثمار والنمو الاقتصادي المستدام.',
    servicesCount: 31,
    initiativesCount: 9,
    jobsCount: 11,
    website: 'https://mof.gov.eg',
    hotline: '16395',
    headquarters: 'أبراج المالية، العاصمة الإدارية الجديدة',
    popularServices: [
      'منظومة الفاتورة والإيصال الإلكتروني',
      'منصة نافذة الجمركية للإفراج المسبق (ACI)',
      'تقديم الإقرارات الضريبية الرقمية',
      'حساب ضريبة المرتبات ومستحقات العاملين'
    ]
  },
  {
    id: 'education',
    name: 'وزارة التربية والتعليم والتعليم الفني',
    shortName: 'التربية والتعليم',
    category: 'education',
    categoryLabel: 'تعليم وبحث علمي وثقافة',
    logo: nesr5,
    accentColor: '#15803d',
    tagline: 'بناء أجيال المستقبل وتطوير المنظومة التعليمية والتعليم التكنولوجي',
    description: 'قيادة منظومة التعليم ما قبل الجامعي في مصر، وتطوير المناهج الرقمية وتوسيع مدارس التكنولوجيا التطبيقية ورعاية الموهوبين.',
    servicesCount: 38,
    initiativesCount: 16,
    jobsCount: 25,
    website: 'https://moe.gov.eg',
    hotline: '19126',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'التقديم الإلكتروني لرياض الأطفال والصف الأول الابتدائي',
      'بوابة نتائج الامتحانات والثانوية العامة',
      'مسابقات تعيين المعلمين المساعدين (30 ألف معلم)',
      'التقديم في مدارس المتفوقين STEM والتكنولوجيا التطبيقية'
    ]
  },
  {
    id: 'higher_edu',
    name: 'وزارة التعليم العالي والبحث العلمي',
    shortName: 'التعليم العالي',
    category: 'education',
    categoryLabel: 'تعليم وبحث علمي وثقافة',
    logo: nesr6,
    accentColor: '#1d4ed8',
    tagline: 'الارتقاء بالجامعات المصرية والبحث العلمي والجامعات التكنولوجية',
    description: 'تنظيم شؤون الجامعات والمعاهد العليا ومراكز البحوث، ودعم الابتكار والتعاون الدولي وتأسيس الجامعات التكنولوجية والأهلية.',
    servicesCount: 29,
    initiativesCount: 12,
    jobsCount: 14,
    website: 'https://mohesr.gov.eg',
    hotline: '19375',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'بوابة التنسيق الإلكتروني للقبول بالجامعات والمعاهد',
      'معادلة الشهادات والدرجات العلمية الأجنبية',
      'منح أكاديمية البحث العلمي وبنك المعرفة المصري',
      'التقديم للمنح والبعثات الخارجية للدارسين'
    ]
  },
  {
    id: 'health',
    name: 'وزارة الصحة والسكان',
    shortName: 'الصحة والسكان',
    category: 'social',
    categoryLabel: 'صحة ومجتمع وعمل',
    logo: nesr7,
    accentColor: '#dc2626',
    tagline: 'رعاية صحة المواطن وتطبيق منظومة التأمين الصحي الشامل',
    description: 'توفير الرعاية الصحية الشاملة لجميع المواطنين، وإطلاق المبادرات الرئاسية الصحية الكبرى، وتنفيذ التأمين الصحي الشامل.',
    servicesCount: 45,
    initiativesCount: 18,
    jobsCount: 20,
    website: 'https://mohp.gov.eg',
    hotline: '105',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'مبادرة 100 مليون صحة للكشف المبكر والعلاج',
      'استخراج قرارات العلاج على نفقة الدولة إلكترونياً',
      'التسجيل في منظومة التأمين الصحي الشامل',
      'حجز لقاحات السفر والتحاليل الطبية المركزية'
    ]
  },
  {
    id: 'housing',
    name: 'وزارة الإسكان والمرافق والمجتمعات العمرانية',
    shortName: 'الإسكان والمرافق',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr8,
    accentColor: '#ea580c',
    tagline: 'إنشاء المدن الجديدة وتوفير السكن الملائم وتطوير المرافق',
    description: 'تخطيط وتشييد المدن الجديدة والمجتمعات العمرانية، وتوفير مشروعات الإسكان الاجتماعي والمتوسط، وتطوير شبكات مياه الشرب والصرف.',
    servicesCount: 26,
    initiativesCount: 10,
    jobsCount: 9,
    website: 'https://mhuc.gov.eg',
    hotline: '1188',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'حجز وحدات الإسكان الاجتماعي وسكن مصر وجنة',
      'استخراج تراخيص البناء والمطابقة بالمدن الجديدة',
      'حجز وتخصيص قطع الأراضي الاستثمارية والسكنية',
      'سداد أقساط وحدات هيئة المجتمعات العمرانية'
    ]
  },
  {
    id: 'transport',
    name: 'وزارة النقل',
    shortName: 'النقل والمواصلات',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr9,
    accentColor: '#475569',
    tagline: 'تطوير شبكة الطرق والمحاور والموانئ والسكك الحديدية والمونوريل',
    description: 'تحديث منظومة النقل والمواصلات في مصر، وإطلاق شبكات القطار الكهربائي السريع والمونوريل والمترو والموانئ الجافة والبحرية الحديثة.',
    servicesCount: 24,
    initiativesCount: 9,
    jobsCount: 15,
    website: 'https://mot.gov.eg',
    hotline: '15047',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'حجز تذاكر واشتراكات سكك حديد مصر والمترو أونلاين',
      'إصدار تراخيص الملاحة النهرية والبحرية',
      'استعلام وتتبع الشحنات بالموانئ المصرية',
      'فرص التوظيف بالهيئة القومية للأنفاق والسكك الحديدية'
    ]
  },
  {
    id: 'electricity',
    name: 'وزارة الكهرباء والطاقة المتجددة',
    shortName: 'الكهرباء والطاقة',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr10,
    accentColor: '#ca8a04',
    tagline: 'تأمين الإمداد الكهربائي والريادة في مشاريع الطاقة الخضراء والنووية',
    description: 'توفير التغذية الكهربائية الآمنة، والتحول نحو الطاقة المتجددة من الرياح والشمس والهيدروجين الأخضر ومحطة الضبعة النووية.',
    servicesCount: 27,
    initiativesCount: 8,
    jobsCount: 7,
    website: 'https://moee.gov.eg',
    hotline: '121',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'شحن كارت العداد مسبق الدفع وسداد الفواتير إلكترونياً',
      'التقديم على تركيب عداد كودي أو استبدال العداد',
      'المنصة الموحدة لخدمات الكهرباء الذكية',
      'الإبلاغ عن أعطال شبكات الكهرباء والانقطاعات'
    ]
  },
  {
    id: 'petroleum',
    name: 'وزارة البترول والثروة المعدنية',
    shortName: 'البترول والثروة المعدنية',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr,
    accentColor: '#047857',
    tagline: 'تعظيم الاستفادة من الثروات الطبيعية وتحويل مصر لمركز إقليمي للطاقة',
    description: 'إدارة وتنمية الثروات البترولية والغازية والتعدينية، وجذب الاستثمارات العالمية، وتوسيع شبكة توصيل الغاز الطبيعي للمنازل والسيارات.',
    servicesCount: 20,
    initiativesCount: 6,
    jobsCount: 8,
    website: 'https://petroleum.gov.eg',
    hotline: '19074',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'طلب توصيل الغاز الطبيعي للوحدات السكنية والمنشآت',
      'التقديم لمبادرة تحويل السيارات للعمل بالغاز الطبيعي',
      'بوابة مصر للاستكشاف والإنتاج الرقمية (EUG)',
      'فرص التدريب والتوظيف بقطاع البترول والشركات التابعة'
    ]
  },
  {
    id: 'solidarity',
    name: 'وزارة التضامن الاجتماعي',
    shortName: 'التضامن الاجتماعي',
    category: 'social',
    categoryLabel: 'صحة ومجتمع وعمل',
    logo: nesr1,
    accentColor: '#be185d',
    tagline: 'شبكات الأمان الاجتماعي ودعم الأسر الأولى بالرعاية وذوي الإعاقة',
    description: 'توفير الحماية والرعاية الاجتماعية المتكاملة للفئات الأكثر احتياجاً، ورعاية الأشخاص ذوي الإعاقة والأيتام ودعم الجمعيات الأهلية.',
    servicesCount: 33,
    initiativesCount: 15,
    jobsCount: 10,
    website: 'https://moss.gov.eg',
    hotline: '19680',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'برنامج الدعم النقدي المشروط (تكافل وكرامة)',
      'استخراج بطاقة الخدمات المتكاملة لذوي الإعاقة',
      'مشروعات التمكين الاقتصادي وقروض مستورة',
      'التقديم لحج الجمعيات الأهلية ورعاية الأيتام'
    ]
  },
  {
    id: 'supply',
    name: 'وزارة التموين والتجارة الداخلية',
    shortName: 'التموين والتجارة الداخلية',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr2,
    accentColor: '#9333ea',
    tagline: 'تأمين المخزون الاستراتيجي للسلع وضبط الأسواق ومنظومة الخبز',
    description: 'توفير السلع الأساسية والمقررات التموينية للمواطنين، وإدارة الاحتياطي الاستراتيجي للدولة، وتطوير منظومة التجارة الداخلية والصوامع.',
    servicesCount: 25,
    initiativesCount: 7,
    jobsCount: 6,
    website: 'https://msit.gov.eg',
    hotline: '19959',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'خدمات بطاقات التموين (بدل تالف/فاقد، فصل اجتماعي)',
      'إضافة أفراد الأسرة إلى البطاقة التموينية',
      'خدمات السجل التجاري والعلامات التجارية إلكترونياً',
      'الشكاوى التموينية وحماية المستهلك'
    ]
  },
  {
    id: 'tourism',
    name: 'وزارة السياحة والآثار',
    shortName: 'السياحة والآثار',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr3,
    accentColor: '#d97706',
    tagline: 'صون تراث مصر الحضاري والترويج السياحي العالمي للمقاصد المصرية',
    description: 'حماية وتوثيق وترميم الآثار المصرية، وتنشيط حركة السياحة الدولية والداخلية، وتطوير المتاحف والمواقع الأثرية المتفردة.',
    servicesCount: 22,
    initiativesCount: 11,
    jobsCount: 8,
    website: 'https://mota.gov.eg',
    hotline: '19654',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'حجز تذاكر المتاحف والمواقع الأثرية إلكترونياً',
      'تراخيص المنشآت الفندقية والسياحية وشركات السياحة',
      'تصاريح التصوير والتنقيب والفعاليات الأثرية',
      'بوابة التأشيرة الإلكترونية السياحية لمصر'
    ]
  },
  {
    id: 'agriculture',
    name: 'وزارة الزراعة واستصلاح الأراضي',
    shortName: 'الزراعة واستصلاح الأراضي',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr4,
    accentColor: '#16a34a',
    tagline: 'تحقيق الأمن الغذائي واستصلاح الأراضي وتحديث نظم الري',
    description: 'دعم الفلاح المصري وتطوير الثروة الزراعية والحيوانية والداجنة، وتنفيذ المشروعات القومية الكبرى لاستصلاح الأراضي مثل الدلتا الجديدة وتوشكى.',
    servicesCount: 30,
    initiativesCount: 10,
    jobsCount: 9,
    website: 'https://agr-egypt.gov.eg',
    hotline: '19561',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'منظومة كارت الفلاح الذكي لصرف الأسمدة والدعم',
      'تراخيص المشاتل والمزارع الحيوانية والداجنة',
      'الحجر الزراعي وشهادات التصدير والفحص المعملي',
      'الخدمات البيطرية والتحصينات القومية للماشية'
    ]
  },
  {
    id: 'irrigation',
    name: 'وزارة الموارد المائية والري',
    shortName: 'الموارد المائية والري',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr5,
    accentColor: '#0284c7',
    tagline: 'إدارة الموارد المائية وحماية نهر النيل وتأهيل الترع',
    description: 'إدارة وتوزيع الحصة المائية القومية بكفاءة، وتنفيذ مشروعات تبطين الترع، وحماية الشواطئ الساحلية، والتصدي للتعديات على نهر النيل.',
    servicesCount: 19,
    initiativesCount: 7,
    jobsCount: 7,
    website: 'https://mwri.gov.eg',
    hotline: '15890',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'تراخيص الآبار الجوفية ومآخذ المياه',
      'تراخيص الإشغالات ومجري نهر النيل',
      'تراخيص الصرف وتعديل مسارات شبكات الري',
      'المشروع القومي لتأهيل وتبطين الترع'
    ]
  },
  {
    id: 'industry',
    name: 'وزارة الصناعة',
    shortName: 'الصناعة',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr6,
    accentColor: '#475569',
    tagline: 'توطين الصناعة المحلية وزيادة الصادرات والنهوض بالمجمعات الصناعية',
    description: 'دعم القطاع الصناعي، وتوفير الأراضي الصناعية المرفقة، وتيسير استخراج الرخص الذهبية، وتعميق التصنيع المحلي وسلاسل الإمداد.',
    servicesCount: 28,
    initiativesCount: 12,
    jobsCount: 10,
    website: 'https://mti.gov.eg',
    hotline: '19548',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'منصة مصر الصناعية الرقمية لتخصيص الأراضي',
      'استخراج السجل الصناعي ورخص التشغيل الموحدة',
      'تيسيرات الحصول على الرخصة الذهبية للمشروعات',
      'برامج دعم وتطوير الصادرات الصناعية'
    ]
  },
  {
    id: 'investment',
    name: 'وزارة الاستثمار والتجارة الخارجية',
    shortName: 'الاستثمار والتجارة الخارجية',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr7,
    accentColor: '#0f766e',
    tagline: 'جذب الاستثمارات الأجنبية المباشرة وفتح أسواق تجارية عالمية جديدة',
    description: 'تهيئة المناخ الاستثماري، وتقديم الحوافز الاستثمارية للشركات العالمية والمحلية، ودعم نمو حجم الصادرات غير البترولية المصرية.',
    servicesCount: 23,
    initiativesCount: 9,
    jobsCount: 8,
    website: 'https://gafi.gov.eg',
    hotline: '16035',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'تأسيس الشركات إلكترونياً عبر بوابة الاستثمار GAFI',
      'الحصول على الحوافز والفرص الاستثمارية بخريطة مصر',
      'خدمات مركز خدمات المستثمرين الإلكتروني',
      'حل وتسوية منازعات الاستثمار والمستثمرين'
    ]
  },
  {
    id: 'labour',
    name: 'وزارة العمل',
    shortName: 'العمل',
    category: 'social',
    categoryLabel: 'صحة ومجتمع وعمل',
    logo: nesr8,
    accentColor: '#2563eb',
    tagline: 'حماية حقوق العمال وتوفير فرص العمل بالداخل والخارج والتأهيل المهني',
    description: 'تنظيم سوق العمل وحماية حقوق العمال، ورعاية العمالة غير المنتظمة، وتوفير التدريب المهني المجاني، وتنسيق فرص العمل بالداخل والخارج.',
    servicesCount: 26,
    initiativesCount: 14,
    jobsCount: 18,
    website: 'https://manpower.gov.eg',
    hotline: '19468',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'النشرة القومية الدورية للتشغيل وفرص العمل',
      'تسجيل ورعاية العمالة غير المنتظمة وصرف المنح',
      'التقديم بمراكز التدريب المهني المتنقلة والثابتة',
      'استخراج شهادات قياس مستوى المهارة وكعب العمل'
    ]
  },
  {
    id: 'awqaf',
    name: 'وزارة الأوقاف',
    shortName: 'الأوقاف',
    category: 'education',
    categoryLabel: 'تعليم وبحث علمي وثقافة',
    logo: nesr9,
    accentColor: '#15803d',
    tagline: 'نشر الفكر الوسطي المستنير وتنمية مال الوقف وخدمة المجتمع',
    description: 'إدارة المساجد وتطوير الخطاب الديني الوسطي، واستثمار أموال الوقف الخيري لخدمة المجتمع، وتنظيم المسابقات القرآنية العالمية.',
    servicesCount: 18,
    initiativesCount: 8,
    jobsCount: 12,
    website: 'https://awqaf.gov.eg',
    hotline: '15432',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'مسابقات تعيين الأئمة والعمال ومقيمي الشعائر',
      'منح أكاديمية الأوقاف الدولية لتدريب الأئمة',
      'حجز وتأجير أراضي ووحدات هيئة الأوقاف المصرية',
      'صكوك الأضاحي والإطعام للأسر الأولى بالرعاية'
    ]
  },
  {
    id: 'culture',
    name: 'وزارة الثقافة',
    shortName: 'الثقافة',
    category: 'education',
    categoryLabel: 'تعليم وبحث علمي وثقافة',
    logo: nesr10,
    accentColor: '#7c3aed',
    tagline: 'إثراء الإبداع وصون الهوية المصرية والعدالة الثقافية بالمحافظات',
    description: 'نشر الثقافة والفنون في ربوع الوطن، ورعاية المبدعين والموهوبين، وإقامة المهرجانات الدولية كمعرض القاهرة للكتاب ومهرجان السينما.',
    servicesCount: 21,
    initiativesCount: 13,
    jobsCount: 6,
    website: 'https://moc.gov.eg',
    hotline: '19765',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'التقديم لجوائز الدولة التقديرية والتشجيعية والنيل',
      'حجز تذاكر حفلات دار الأوبرا المصرية إلكترونياً',
      'المشاركة والتقديم بمعرض القاهرة الدولي للكتاب',
      'الالتحاق بورش المبادرات الفنية ومسرح المواجهة والتجوال'
    ]
  },
  {
    id: 'youth',
    name: 'وزارة الشباب والرياضة',
    shortName: 'الشباب والرياضة',
    category: 'social',
    categoryLabel: 'صحة ومجتمع وعمل',
    logo: nesr,
    accentColor: '#e11d48',
    tagline: 'تمكين الشباب وتطوير مراكز الشباب والرياضة والبطولات القومية',
    description: 'رعاية النشء والشباب، وتطوير المنشآت الرياضية ومراكز الشباب، ودعم الأبطال الأولمبيين، وتنظيم ملتقيات التوظيف ومبادرات اللياقة.',
    servicesCount: 32,
    initiativesCount: 20,
    jobsCount: 14,
    website: 'https://emys.gov.eg',
    hotline: '19133',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'مبادرة دراجتك صحتك ودراجتك دخلك',
      'حجز المدن الشبابية والإقامات في المحافظات',
      'ملتقيات توظيف مصر ومشروعات ريادة الأعمال الشبابية',
      'الاشتراك في مراكز التخاطب والأنشطة الرياضية لذوي الهمم'
    ]
  },
  {
    id: 'environment',
    name: 'وزارة البيئة',
    shortName: 'البيئة',
    category: 'social',
    categoryLabel: 'صحة ومجتمع وعمل',
    logo: nesr1,
    accentColor: '#059669',
    tagline: 'حماية الموارد الطبيعية والمحميات والتحول نحو الاقتصاد الأخضر',
    description: 'الحفاظ على البيئة الطبيعية والمحميات، والحد من التلوث، وإدارة منظومة المخلفات، ومواجهة آثار التغيرات المناخية.',
    servicesCount: 19,
    initiativesCount: 9,
    jobsCount: 5,
    website: 'https://eeaa.gov.eg',
    hotline: '19808',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'استخراج الموافقات البيئية للمشروعات والمنشآت',
      'تصاريح زيارة وتخييم المحميات الطبيعية المصرية',
      'مبادرة إيكو إيجيبت Eco Egypt للسياحة البيئية',
      'منظومة إدارة المخلفات وإعادة التدوير'
    ]
  },
  {
    id: 'civil_aviation',
    name: 'وزارة الطيران المدني',
    shortName: 'الطيران المدني',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr2,
    accentColor: '#0284c7',
    tagline: 'تطوير المطارات المصرية وتحديث أسطول الطيران الوطني',
    description: 'الإشراف على منظومة الطيران المدني والمطارات والملاحة الجوية، والارتقاء بشركة مصر للطيران، ورفع معايير السلامة والأمن الدوليين.',
    servicesCount: 21,
    initiativesCount: 6,
    jobsCount: 8,
    website: 'https://civilaviation.gov.eg',
    hotline: '19904',
    headquarters: 'طريق المطار، النزهة، القاهرة',
    popularServices: [
      'استخراج وتجديد إجازات الطيران والضيافة الجوية',
      'تصاريح الرحلات الجوية وعبور الأجواء المصرية',
      'خدمات مصر للطيران وحجز التذاكر والشحن الجوي',
      'الالتحاق بالأكاديمية المصرية لعلوم الطيران'
    ]
  },
  {
    id: 'local_dev',
    name: 'وزارة التنمية المحلية',
    shortName: 'التنمية المحلية',
    category: 'services',
    categoryLabel: 'خدمات وبنية تحتية',
    logo: nesr3,
    accentColor: '#b45309',
    tagline: 'تطوير الإدارة المحلية والمحافظات ومشروعات حياة كريمة بالقرى',
    description: 'التنسيق بين المحافظات والأجهزة المحلية، وتحسين جودة الخدمات بالمدن والأحياء، وتنفيذ المبادرة الرئاسية الكبرى حياة كريمة.',
    servicesCount: 30,
    initiativesCount: 11,
    jobsCount: 9,
    website: 'https://mld.gov.eg',
    hotline: '15330',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'مبادرة مشروعك لتمويل المشروعات الصغيرة بالمحافظات',
      'مبادرة صوتك مسموع لتلقي شكاوى المواطنين بالمحليات',
      'طلبات التصالح في مخالفات البناء وتقنين الأوضاع',
      'تراخيص المحال العامة والمواقف والأسواق النموذجية'
    ]
  },
  {
    id: 'planning',
    name: 'وزارة التخطيط والتنمية الاقتصادية والتعاون الدولي',
    shortName: 'التخطيط والتعاون الدولي',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr4,
    accentColor: '#0369a1',
    tagline: 'قيادة رؤية مصر 2030 وتنسيق الخطط الاستثمارية والشراكات الدولية',
    description: 'تنسيق خطط التنمية المستدامة، وتوجيه الاستثمارات العامة للدولة، وتنسيق التعاون التمويلي مع المؤسسات والشركاء الدوليين.',
    servicesCount: 20,
    initiativesCount: 10,
    jobsCount: 7,
    website: 'https://mped.gov.eg',
    hotline: '19555',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'متابعة مستهدفات استراتيجية رؤية مصر 2030',
      'جائزة مصر للتميز الحكومي للمؤسسات والأفراد',
      'منصة التمويل الإنمائي والشراكات الدولية نُوَفّي (NWFE)',
      'المنظومة القومية لإعداد ومتابعة الخطة الاستثمارية للدولة'
    ]
  },
  {
    id: 'public_business',
    name: 'وزارة قطاع الأعمال العام',
    shortName: 'قطاع الأعمال العام',
    category: 'economy',
    categoryLabel: 'اقتصاد وتجارة واستثمار',
    logo: nesr5,
    accentColor: '#64748b',
    tagline: 'إعادة هيكلة وتطوير الشركات القابضة والمصانع التابعة للدولة',
    description: 'إدارة وتطوير المحفظة الاستثمارية للشركات القابضة العامة، وتحديث مصانع الغزل والنسيج والأدوية والكيماويات والصلب.',
    servicesCount: 16,
    initiativesCount: 5,
    jobsCount: 6,
    website: 'https://mpbs.gov.eg',
    hotline: '19876',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'المشروع القومي لتطوير صناعة الغزل والنسيج (غزل المحلة)',
      'توطين صناعة الأتوبيسات والسيارات الكهربائية',
      'فرص الاستثمار والشراكة مع القطاع الخاص بالشركات التابعة',
      'تأجير واستغلال الأصول العقارية غير المستغلة'
    ]
  },
  {
    id: 'military_prod',
    name: 'وزارة الدولة للإنتاج الحربي',
    shortName: 'الإنتاج الحربي',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr6,
    accentColor: '#334155',
    tagline: 'تلبية احتياجات القوات المسلحة وتصنيع المعدات والمنتجات المدنية',
    description: 'تصنيع الذخائر والمعدات الدفاعية، واستغلال فائض الطاقات الإنتاجية في تصنيع منتجات صناعية وأجهزة ومعدات مدنية عالية الجودة.',
    servicesCount: 17,
    initiativesCount: 5,
    jobsCount: 7,
    website: 'https://momp.gov.eg',
    hotline: '19827',
    headquarters: 'شارع إسماعيل أباظة، القصر العيني، القاهرة',
    popularServices: [
      'منافذ ومعارض بيع المنتجات والأجهزة المنزلية للمصانع الحربية',
      'الالتحاق بالأكاديمية المصرية للهندسة والتكنولوجيا المتقدمة',
      'تصنيع عدادات الكهرباء والمياه الذكية ومحطات المعالجة',
      'فرص التدريب الصيفي والتوظيف بالمصانع التابعة'
    ]
  },
  {
    id: 'parliament',
    name: 'وزارة الشئون النيابية والقانونية والتواصل السياسي',
    shortName: 'الشئون النيابية والتواصل السياسي',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr7,
    accentColor: '#6b7280',
    tagline: 'التنسيق بين الحكومة والبرلمان وتوسيع قنوات التواصل السياسي',
    description: 'التنسيق الفعال بين مجلس الوزراء ومجلسي النواب والشيوخ، ومتابعة التشريعات والقوانين، وإدارة الحوار والتواصل السياسي المجتمعي.',
    servicesCount: 12,
    initiativesCount: 4,
    jobsCount: 3,
    website: 'https://parliament.gov.eg',
    hotline: '19702',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'متابعة مشروعات القوانين المطروحة بالبرلمان',
      'جلسات الحوار الوطني والتواصل مع الأحزاب والمجتمع',
      'الاستعلام عن طلبات الإحاطة والأسئلة البرلمانية',
      'أرشيف القوانين والتشريعات المعتمدة'
    ]
  },
  {
    id: 'cabinet',
    name: 'رئاسة مجلس الوزراء المصري',
    shortName: 'مجلس الوزراء',
    category: 'sovereign',
    categoryLabel: 'وزارات سيادية',
    logo: nesr8,
    accentColor: '#1b2a47',
    tagline: 'الهيئة التنفيذية العليا لإدارة الدولة وتنسيق العمل الحكومي المشترك',
    description: 'إدارة السياسات العامة للدولة، وتنسيق عمل كافة الوزارات والهيئات، ومتابعة تنفيذ المشروعات القومية والتواصل المباشر مع المواطنين.',
    servicesCount: 25,
    initiativesCount: 15,
    jobsCount: 10,
    website: 'https://cabinet.gov.eg',
    hotline: '16528',
    headquarters: 'الحي الحكومي، العاصمة الإدارية الجديدة',
    popularServices: [
      'منظومة الشكاوى الحكومية الموحدة (16528)',
      'مركز المعلومات ودعم اتخاذ القرار (IDSC)',
      'نشر قرارات مجلس الوزراء والبيانات الرسمية اليومية',
      'بوابة البيانات الحكومية المفتوحة ومتابعة الأداء'
    ]
  }
];

const Ministries = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMinistryModal, setSelectedMinistryModal] = useState(null);

  // Filter ministries based on search & category
  const filteredMinistries = useMemo(() => {
    return ministriesData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.popularServices.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f5f7fa] dark:bg-slate-950 pb-24 transition-colors duration-200" dir="rtl">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1b2a47] via-[#1b2a47] to-[#142036] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#d8bb88]">
        {/* Background Decorative Circles */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#d8bb88]/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d8bb88] font-bold text-xs sm:text-sm mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#d8bb88]" />
              <span>دليل الوزارات والهيئات الحكومية لجمهورية مصر العربية</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              وزارات <span className="text-[#d8bb88]">جمهورية مصر العربية</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
              بوابتك الموحدة للتعرف على جميع الوزارات المصرية، والوصول الفوري لكافة الخدمات والمبادرات والوظائف والمواقع الرسمية في مكان واحد.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                { number: '32', label: 'وزارة وهيئة سيادية' },
                { number: '+500', label: 'خدمة حكومية مميكنة' },
                { number: '+120', label: 'مبادرة وطنية وقومية' },
                { number: '+85', label: 'وظيفة شاغرة معلنة' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 backdrop-blur-md text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#d8bb88] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SEARCH & FILTERS BAR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-30">
        <div className="bg-white dark:bg-slate-900 rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 shadow-xl border border-gray-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="ابحث باسم الوزارة، الخدمة، أو الاختصاص..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3.5 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#1b2a47] dark:focus:ring-[#d8bb88] transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 shrink-0">
              عرض <span className="text-[#1b2a47] dark:text-[#d8bb88] font-black text-base">{filteredMinistries.length}</span> وزارة من أصل 32
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-4 scrollbar-none border-t border-gray-100 dark:border-slate-800 mt-4">
            <span className="text-xs font-bold text-gray-400 shrink-0 ml-2 hidden sm:inline-flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              التصنيف:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1b2a47] text-white shadow-md border-transparent dark:bg-[#d8bb88] dark:text-[#1b2a47]'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MINISTRIES CARDS GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredMinistries.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-[28px] p-12 text-center border border-gray-200 dark:border-slate-800 shadow-sm my-12">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#1b2a47] dark:text-white mb-2">
              لم يتم العثور على أي وزارة مطابقة
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              جرب تغيير كلمات البحث أو إعادة تعيين الفلتر للاطلاع على كافة الوزارات المصرية.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2.5 rounded-full bg-[#1b2a47] text-white text-sm font-bold hover:bg-blue-900 transition-colors"
            >
              عرض جميع الوزارات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredMinistries.map((ministry, index) => (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
                className="bg-white dark:bg-slate-900 rounded-[28px] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Bar: Category Pill & Hotline Badge */}
                  <div className="p-4 sm:p-6 pb-3 sm:pb-4 flex items-center justify-between border-b border-gray-50 dark:border-slate-800/60">
                    <span className="text-[11px] sm:text-xs font-black px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1b2a47] dark:text-[#d8bb88]">
                      {ministry.categoryLabel}
                    </span>

                    {ministry.hotline && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
                        <PhoneCall className="w-3.5 h-3.5 text-[#d8bb88]" />
                        <span>{ministry.hotline}</span>
                      </div>
                    )}
                  </div>

                  {/* Ministry Logo + Name Header */}
                  <div className="p-4 sm:p-6 pt-4 sm:pt-5">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Logo Container */}
                      <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/80 p-2 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 group-hover:border-[#d8bb88]/60 transition-all">
                        <img
                          src={ministry.logo}
                          alt={ministry.name}
                          className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                      </div>

                      {/* Ministry Title */}
                      <div className="flex-1">
                        <h3 className="font-black text-lg sm:text-xl text-[#1b2a47] dark:text-white leading-snug mb-1 group-hover:text-blue-900 dark:group-hover:text-[#d8bb88] transition-colors">
                          {ministry.name}
                        </h3>
                        <p className="text-xs text-gray-400 font-medium line-clamp-1">
                          {ministry.headquarters}
                        </p>
                      </div>
                    </div>

                    {/* Tagline / Brief Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-2 font-normal leading-relaxed mb-5">
                      {ministry.tagline}
                    </p>

                    {/* Stats Metrics Badges */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-2xl bg-gray-50/80 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800 text-center mb-4">
                      <div>
                        <div className="text-xs sm:text-sm font-black text-[#1b2a47] dark:text-white">
                          {ministry.servicesCount}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-400 font-bold">
                          خدمة
                        </div>
                      </div>
                      <div className="border-x border-gray-200 dark:border-slate-700">
                        <div className="text-xs sm:text-sm font-black text-[#1b2a47] dark:text-white">
                          {ministry.initiativesCount}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-400 font-bold">
                          مبادرة
                        </div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-black text-emerald-600 dark:text-emerald-400">
                          {ministry.jobsCount}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-400 font-bold">
                          وظيفة
                        </div>
                      </div>
                    </div>

                    {/* Quick Services Highlights */}
                    <div className="space-y-1.5 mb-2">
                      <div className="text-[11px] font-bold text-gray-400">
                        أبرز الخدمات المتاحة:
                      </div>
                      {ministry.popularServices.slice(0, 2).map((srv, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 sm:p-6 pt-3 border-t border-gray-50 dark:border-slate-800/60 flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (ministry.hasDetailPage) {
                        navigate(ministry.detailRoute);
                      } else {
                        setSelectedMinistryModal(ministry);
                      }
                    }}
                    className="flex-1 py-3 px-4 rounded-full bg-[#1b2a47] hover:bg-blue-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-[#d8bb88] text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>عرض الخدمات والتفاصيل</span>
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <a
                    href={ministry.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`الموقع الرسمي لـ ${ministry.name}`}
                    title="الموقع الرسمي"
                    className="p-3 rounded-full border border-gray-200 dark:border-slate-700 text-gray-500 hover:text-[#1b2a47] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ================= MODAL FOR MINISTRY DETAILS ================= */}
      <AnimatePresence>
        {selectedMinistryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-slate-900 rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-slate-800 relative text-right"
              dir="rtl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMinistryModal(null)}
                className="absolute top-6 left-6 p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-2.5 flex items-center justify-center shrink-0 shadow-inner">
                  <img
                    src={selectedMinistryModal.logo}
                    alt={selectedMinistryModal.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1b2a47] dark:text-[#d8bb88] inline-block mb-1.5">
                    {selectedMinistryModal.categoryLabel}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1b2a47] dark:text-white leading-tight">
                    {selectedMinistryModal.name}
                  </h2>
                </div>
              </div>

              {/* About Ministry */}
              <div className="mb-6">
                <h4 className="text-sm font-black text-gray-400 mb-2">عن الوزارة والمهام:</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedMinistryModal.description}
                </p>
              </div>

              {/* Contact & Location Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-slate-800/70 border border-gray-100 dark:border-slate-800 mb-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-[#d8bb88] shrink-0" />
                  <span>{selectedMinistryModal.headquarters}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <PhoneCall className="w-4 h-4 text-[#d8bb88] shrink-0" />
                  <span>الخط الساخن: <strong className="text-[#1b2a47] dark:text-white">{selectedMinistryModal.hotline}</strong></span>
                </div>
              </div>

              {/* Popular Services in Modal */}
              <div className="mb-8">
                <h4 className="text-sm font-black text-[#1b2a47] dark:text-white mb-3">
                  أهم الخدمات والمبادرات المتاحة:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedMinistryModal.popularServices.map((srv, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={selectedMinistryModal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#1b2a47] hover:bg-blue-900 dark:bg-[#d8bb88] dark:hover:bg-yellow-500 text-white dark:text-[#1b2a47] text-sm font-bold text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>زيارة الموقع الرسمي للوزارة</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setSelectedMinistryModal(null);
                    navigate('/jobs');
                  }}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 text-sm font-bold transition-all cursor-pointer"
                >
                  وظائف الوزارة الشاغرة ({selectedMinistryModal.jobsCount})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ministries;
