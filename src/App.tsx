import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Building2,
  Clock,
  Award,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  MessageCircle,
  Camera,
  FileText
} from 'lucide-react';
import { AGENCIES } from './constants';
import { translations, Language } from './translations';

// --- Components ---

const Navbar = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.about, href: '#about' },
    { name: lang === 'fr' ? 'Réalisations' : 'إنجازاتنا', href: '#gallery' },
    { name: t.nav.agencies, href: '#agencies' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'ar' : 'fr');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/d/1cJUmsHHIS1rGGfSiHqs38cfIOXP8MeNk"
                alt="Tuile Baraka Logo"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-clay-900' : 'text-white'}`}>
                Tuile <span className="text-terracotta-600">Baraka</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-terracotta-600 ${isScrolled ? 'text-clay-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleLang}
              className={`flex items-center gap-2 text-sm font-bold px-3 py-1 rounded-full border transition-all ${isScrolled ? 'border-clay-200 text-clay-700 hover:bg-clay-50' : 'border-white/20 text-white hover:bg-white/10'}`}
            >
              <Globe size={16} />
              {lang === 'fr' ? 'العربية' : 'Français'}
            </button>

            <a
              href="#contact"
              className="bg-terracotta-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-terracotta-700 transition-all transform hover:scale-105"
            >
              {t.nav.quote}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLang}
              className={`text-sm font-bold ${isScrolled ? 'text-clay-900' : 'text-white'}`}
            >
              {lang === 'fr' ? 'AR' : 'FR'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-clay-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full inset-x-0 bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const target = document.querySelector(link.href);
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="block px-3 py-4 text-base font-medium text-clay-700 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const target = document.querySelector('#contact');
                    if (target) {
                      setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className="block w-full text-center bg-terracotta-600 text-white px-5 py-3 rounded-lg font-semibold"
                >
                  {t.nav.quote}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ t }: { t: any }) => {
  const slides = [
    {
      image: 'https://lh3.googleusercontent.com/d/1MtKDuL0pjJqsOLZCKdwewd20mcxTZ37j',
      title: t.hero.title,
      accent: t.hero.titleAccent
    },
    {
      image: 'https://lh3.googleusercontent.com/d/168nS1KEPvHE9LxVMkPnWgq-T1F5QgJP5',
      title: t.hero.title,
      accent: t.hero.titleAccent
    },
    {
      image: 'https://lh3.googleusercontent.com/d/1DfdGhB4M3xpnTectYCB_SDvHCGIWdGBo',
      title: t.hero.title,
      accent: t.hero.titleAccent
    },
    {
      image: 'https://lh3.googleusercontent.com/d/1lGLyByPpi64GIsZ_i-KcpkdOnDrQGYZ6',
      title: t.hero.title,
      accent: t.hero.titleAccent
    },
    {
      image: 'https://lh3.googleusercontent.com/d/1wzWrJx8Z-1ZDLSAJulOtiVLs5sUcogrH',
      title: t.hero.title,
      accent: t.hero.titleAccent
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrentSlide((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
      transition: {
        opacity: { duration: 1.2, ease: "easeInOut" },
      }
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      transition: {
        opacity: { duration: 1.2, ease: "easeInOut" },
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-clay-900">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="Toit en tuiles"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-clay-900/80 via-clay-900/40 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-terracotta-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              {t.hero.title} <span className="text-terracotta-400">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="flex items-center justify-center gap-2 bg-terracotta-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-terracotta-700 transition-all group"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation & Controls */}
      <div className="absolute bottom-6 md:bottom-10 inset-x-0 px-4 sm:px-6 lg:px-8 z-30 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex gap-4 pointer-events-auto">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all group"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-180 rtl:rotate-0 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all group"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </button>
          </div>
          <div className="flex gap-2 pointer-events-auto items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-8 bg-terracotta-600' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Products = ({ lang, t }: { lang: Language, t: any }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productItems = [
    {
      id: 'TUILE KLINKER NOVA',
      images: [
        'https://i.imgur.com/BzeVKGS.png',
        'https://i.imgur.com/2nyVC8F.png',
        'https://i.imgur.com/JmAH3Ru.png',
        'https://i.imgur.com/dBiDqAQ.png',
        'https://i.imgur.com/OmXuOtd.jpeg',

      ],
      category: t.products.categories.classique,
      ...t.products.items.nova
    },
    {
      id: 'Tuile Klinker Marseillaise',
      images: [
        'https://i.imgur.com/vCLf912.png',
        'https://i.imgur.com/o2eXPIZ.png',
        'https://i.imgur.com/vpTSEG0.png',     
        'https://i.imgur.com/OmXuOtd.jpeg',
      ],
      category: t.products.categories.contemporain,
      ...t.products.items.marseillaise
    },
    {
      id: 'TUILE KLINKER 11 (MIXTA)',
      images: [
        'https://i.imgur.com/ajL9ECb.png',
        'https://i.imgur.com/yK0SsWY.png',
        'https://i.imgur.com/MC7goSp.jpeg',
        'https://i.imgur.com/CR24iOE.jpeg',
        'https://i.imgur.com/0kp61ep.jpeg',
        'https://i.imgur.com/Inq8LAW.jpeg'
      ],
      category: t.products.categories.tradition,
      ...t.products.items.mixta
    },
    {
      id: 'TUILE KLINKER PLATE',
      images: [
        'https://i.imgur.com/kSyYkDw.png',
        'https://i.imgur.com/jcDqisT.png',
        'https://i.imgur.com/8xvtFsx.png',
        'https://i.imgur.com/OmXuOtd.jpeg',
      ],
      category: t.products.categories.authentique,
      ...t.products.items.plate
    },
    {
      id: 'ardoise',
      images: [
        'https://i.imgur.com/dPYhhRS.png',
      ],
      category: t.products.categories.premium,
      ...t.products.items.ardoise
    },
    {
      id: 'accessoires',
      images: [
        'https://i.imgur.com/SxUG0Dd.png',
        'https://i.imgur.com/1vTrjbz.png',
        'https://i.imgur.com/SIBALEI.png',
        'https://i.imgur.com/MXo1Asr.png',
        'https://i.imgur.com/PcICR99.png',
        'https://i.imgur.com/njkEmpe.png'
      ],
      category: t.products.categories.finition,
      ...t.products.items.accessoires
    },
  ];

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-clay-900 mb-4"
          >
            {t.products.title}
          </motion.h2>
          <div className="w-20 h-1.5 bg-terracotta-600 mx-auto rounded-full mb-6"></div>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            {t.products.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productItems.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-terracotta-50 rounded-2xl overflow-hidden border border-terracotta-100 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => openModal(product)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-terracotta-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-clay-900 mb-3">{product.name}</h3>
                <p className="text-clay-600 mb-6 line-clamp-2">
                  {product.desc}
                </p>
                <button className="flex items-center gap-2 text-terracotta-600 font-bold group-hover:gap-3 transition-all">
                  {t.products.viewDetails} <ChevronRight size={18} className="rtl:rotate-180" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-clay-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full text-clay-900 hover:bg-white transition-all shadow-md"
              >
                <X size={24} />
              </button>

              {/* Image Gallery Side */}
              <div className="md:w-3/5 flex flex-col bg-gray-50">
                <div className="flex-1 relative overflow-hidden h-64 md:h-auto">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      src={selectedProduct.images[activeImageIndex]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                </div>
                {/* Thumbnails */}
                <div className="p-4 flex gap-2 overflow-x-auto bg-white border-t border-gray-100">
                  {selectedProduct.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${activeImageIndex === idx ? 'border-terracotta-600 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-2/5 p-8 md:p-10 flex flex-col overflow-y-auto">
                <span className="text-terracotta-600 text-sm font-bold uppercase tracking-widest mb-2">
                  {selectedProduct.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-clay-900 mb-6">
                  {selectedProduct.name}
                </h3>
                <p className="text-lg text-clay-600 mb-8 leading-relaxed">
                  {selectedProduct.desc}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {selectedProduct.features?.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 text-clay-700 bg-terracotta-50/50 p-3 rounded-xl border border-terracotta-100/50">
                      <ShieldCheck className="text-terracotta-600 shrink-0" size={18} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Specs - Improved Layout */}
                {selectedProduct.specs && (
                  <div className="mb-10">
                    <h4 className="text-sm font-bold text-clay-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                      <div className="w-1.5 h-4 bg-terracotta-600 rounded-full"></div>
                      {t.products.labels.specs}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => {
                        const label = (t.products.labels as any)[key];
                        if (!label || !value) return null;
                        return (
                          <div key={key} className="flex justify-between items-center p-3 rounded-xl bg-clay-50 border border-clay-100 transition-colors hover:bg-white hover:shadow-sm">
                            <span className="text-xs text-clay-500 font-bold uppercase">{label}</span>
                            <span className="text-sm font-extrabold text-clay-900">{value as string}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <a
                  href={`https://wa.me/212707155553?text=${encodeURIComponent(lang === 'fr' ? `Bonjour, je suis intéressé par le produit: ${selectedProduct.name}` : `مرحباً، أنا مهتم بمنتج: ${selectedProduct.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20ba5a] transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle size={24} />
                  {t.contact.form.whatsapp}
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const IntegratedSystems = ({ lang, t }: { lang: Language, t: any }) => {
  const [showFullGuide, setShowFullGuide] = useState(false);
  
  const guidePages = [
    'https://i.imgur.com/MjxjlOO.jpeg', // Page 1
    'https://i.imgur.com/N5Nt2Jj.png', // Page 2
    'https://i.imgur.com/FdYf206.png', // Page 3
    'https://i.imgur.com/SIBALEI.png', // Page 4
    'https://i.imgur.com/mFTN7Es.png', // Page 5
    'https://i.imgur.com/BopbmoH.png', // Page 6
    'https://i.imgur.com/1vTrjbz.png', // Page 7
    'https://i.imgur.com/MXo1Asr.png', // Page 8
    'https://i.imgur.com/bewkNvh.png', // Page 9
    'https://i.imgur.com/njkEmpe.png', // Page 10
    'https://i.imgur.com/D2Rres5.png', // Page 11
    'https://i.imgur.com/PcICR99.png', // Page 12
    'https://i.imgur.com/FhX34Di.png', // Page 13
    'https://i.imgur.com/CET1UIg.png'  // Page 14
  ];

  return (
    <section id="integrated-systems" className="py-24 bg-clay-50 border-y border-clay-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block bg-terracotta-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-wider uppercase"
          >
            {t.integratedSystems.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-clay-900 mb-4"
          >
            {t.integratedSystems.title}
          </motion.h2>
          <div className="w-20 h-1.5 bg-terracotta-600 mx-auto rounded-full mb-6"></div>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            {t.integratedSystems.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFullGuide(true)}
            className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-white border border-clay-200"
          >
            <div className="aspect-[16/9] md:aspect-[3/2] relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1MtKDuL0pjJqsOLZCKdwewd20mcxTZ37j" 
                alt="Guide Technique"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-clay-900/40 group-hover:bg-clay-900/50 transition-all flex items-center justify-center p-6 text-center">
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl flex flex-col items-center gap-6 shadow-2xl border border-white/20 transform group-hover:translate-y-[-8px] transition-transform">
                  <div className="w-20 h-20 bg-terracotta-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-terracotta-200">
                    <FileText size={40} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-clay-900 font-bold text-2xl md:text-3xl">
                      {lang === 'fr' ? 'Consulter le Guide Technique' : 'عرض الدليل التقني الكامل'}
                    </h4>
                    <p className="text-clay-500 text-sm md:text-base max-w-xs mx-auto">
                      {lang === 'fr' ? 'Découvrez toutes nos solutions d\'intégration et spécifications architecturales.' : 'اكتشف جميع حلول التكامل والمواصفات المعمارية الخاصة بنا.'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-terracotta-600 font-bold group-hover:gap-4 transition-all">
                    <span>{lang === 'fr' ? 'Ouvrir le guide (14 pages)' : 'فتح الدليل (14 صفحة)'}</span>
                    <ArrowRight size={20} className="rtl:rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showFullGuide && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFullGuide(false)}
              className="absolute inset-0 bg-clay-900/90 backdrop-blur-lg"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full h-full md:h-[95vh] max-w-5xl bg-clay-800 md:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-4 bg-clay-900/50 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-terracotta-600 rounded-lg flex items-center justify-center text-white">
                    <Building2 size={18} />
                  </div>
                  <span className="text-white font-bold">{t.integratedSystems.title}</span>
                </div>
                <button 
                  onClick={() => setShowFullGuide(false)}
                  className="p-2 text-white/60 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-8 scrollbar-hide">
                {guidePages.map((page, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute top-4 left-4 bg-clay-900/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 z-10">
                      PAGE {index + 1} / 14
                    </div>
                    <img 
                      src={page} 
                      alt={`Guide Page ${index + 1}`} 
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const About = ({ lang, t }: { lang: Language, t: any }) => {
  const [showHistory, setShowHistory] = useState(false);
  const features = [
    { icon: ShieldCheck, title: t.about.features.durability.title, desc: t.about.features.durability.desc },
    { icon: Clock, title: t.about.features.tradition.title, desc: t.about.features.tradition.desc },
    { icon: Award, title: t.about.features.guarantee.title, desc: t.about.features.guarantee.desc },
  ];

  return (
    <section id="about" className="py-24 bg-terracotta-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://i.imgur.com/JJqSgfj.jpeg"
                alt="Usine Tuile Baraka"
                className="rounded-3xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-terracotta-600 rounded-3xl -z-0 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-terracotta-200 rounded-3xl -z-0 hidden md:block"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-display font-bold text-clay-900 mb-6">
              {t.about.title} <span className="text-terracotta-600">{t.about.titleAccent}</span>
            </h2>
            <p className="text-lg text-clay-600 mb-8 leading-relaxed">
              {t.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-terracotta-600 shadow-sm mb-4">
                    <f.icon size={24} />
                  </div>
                  <h4 className="font-bold text-clay-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-clay-500">{f.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowHistory(true)}
              className="bg-clay-900 text-white px-8 py-4 rounded-full font-bold hover:bg-clay-800 transition-all"
            >
              {t.about.cta}
            </button>
          </motion.div>
        </div>
      </div>

      {/* History Modal */}
      <AnimatePresence>
        {showHistory && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHistory(false)}
              className="absolute inset-0 bg-clay-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12"
            >
              <button
                onClick={() => setShowHistory(false)}
                className="absolute top-4 right-4 p-2 text-clay-400 hover:text-clay-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-terracotta-50 rounded-2xl flex items-center justify-center text-terracotta-600 mx-auto mb-6">
                  <Building2 size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold text-clay-900 mb-4">
                  {t.about.history.title}
                </h3>
                <div className="w-12 h-1 bg-terracotta-600 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-8">
                <p className="text-lg text-clay-600 leading-relaxed text-center italic">
                  "{t.about.history.content}"
                </p>
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowHistory(false)}
                  className="text-clay-900 font-bold hover:text-terracotta-600 transition-colors"
                >
                  {lang === 'fr' ? 'Fermer' : 'إغلاق'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Agencies = ({ lang, t }: { lang: Language, t: any }) => {
  return (
    <section id="agencies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-clay-900 mb-4">{t.agencies.title}</h2>
          <div className="w-20 h-1.5 bg-terracotta-600 mx-auto rounded-full mb-6"></div>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            {t.agencies.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AGENCIES.map((agency, i) => (
            <motion.div
              key={agency.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col bg-terracotta-50 rounded-3xl overflow-hidden border border-terracotta-100 hover:shadow-xl transition-all group"
            >
              {/* Map Container */}
              <div className="h-64 relative overflow-hidden bg-terracotta-100">
                <iframe
                  src={agency.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-terracotta-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {lang === 'ar' ? (agency as any).arCity : agency.city}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-terracotta-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-clay-900">{lang === 'ar' ? (agency as any).arCity : agency.city}</h3>
                </div>

                <p className="text-clay-600 text-sm mb-6 flex-1">
                  {lang === 'ar' ? (agency as any).arAddress : agency.address}
                </p>

                <div className="space-y-3 pt-6 border-t border-terracotta-100">
                  <a href={`tel:${agency.phone}`} className="flex items-center gap-3 text-clay-700 hover:text-terracotta-600 transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-clay-400 group-hover/link:text-terracotta-600 transition-colors">
                      <Phone size={14} />
                    </div>
                    <span className="text-sm font-medium">{agency.phone}</span>
                  </a>
                  <a href={`mailto:${agency.email}`} className="flex items-center gap-3 text-clay-700 hover:text-terracotta-600 transition-colors group/link">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-clay-400 group-hover/link:text-terracotta-600 transition-colors">
                      <Mail size={14} />
                    </div>
                    <span className="text-sm font-medium">{agency.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = ({ lang, t }: { lang: Language, t: any }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      image: 'https://i.imgur.com/mGCp8TX.jpeg',
      title: lang === 'fr' ? 'Villa Moderne à Casablanca' : 'فيلا عصرية بالدار البيضاء',
      desc: lang === 'fr' ? 'Utilisation de tuiles modernes grises pour un look épuré.' : 'استخدام القرميد العصري الرمادي لإطلالة أنيقة.'
    },
    {
      id: 2,
      image: 'https://i.imgur.com/j8FhsTS.png',
      title: lang === 'fr' ? 'Résidence Traditionnelle à Rabat' : 'إقامة تقليدية بالرباط',
      desc: lang === 'fr' ? 'Tuiles romanes classiques pour une protection optimale.' : 'قرميد روماني كلاسيكي لحماية مثالية.'
    },
    {
      id: 3,
      image: 'https://i.imgur.com/CAXF29p.png',
      title: lang === 'fr' ? 'Maison de Campagne à Benslimane' : 'منزل ريفي ببنسليمان',
      desc: lang === 'fr' ? 'Tuiles canal authentiques respectant le style local.' : 'قرميد القناة الأصيل الذي يحترم الأسلوب المحلي.'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-clay-900 mb-4">
            {lang === 'fr' ? 'Nos Réalisations' : 'إنجازاتنا'}
          </h2>
          <div className="w-20 h-1.5 bg-terracotta-600 mx-auto rounded-full mb-6"></div>
          <p className="text-clay-600 max-w-2xl mx-auto text-lg">
            {lang === 'fr' ? 'Découvrez quelques-uns de nos projets terminés à travers le Royaume.' : 'اكتشف بعض مشاريعنا المكتملة عبر المملكة.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg h-80 cursor-pointer hover:-translate-y-2 transition-all duration-300"
              onClick={() => setSelectedProject(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-900/90 via-clay-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-white/80 text-sm">{item.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-terracotta-400 font-bold text-sm">
                  {lang === 'fr' ? 'Voir le projet' : 'عرض المشروع'} <ArrowRight size={16} className="rtl:rotate-180" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-clay-900/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-clay-900 hover:bg-white transition-all shadow-md"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col">
                <div className="h-[50vh] md:h-[60vh] overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-10 bg-white">
                  <h3 className="text-3xl font-display font-bold text-clay-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-clay-600 leading-relaxed">
                    {selectedProject.desc}
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-terracotta-50 rounded-full flex items-center justify-center text-terracotta-600">
                        <Camera size={20} />
                      </div>
                      <span className="text-clay-500 text-sm font-medium">
                        {lang === 'fr' ? 'Projet certifié Tuile Baraka' : 'مشروع معتمد من تيل بركة'}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-clay-900 font-bold hover:text-terracotta-600 transition-colors"
                    >
                      {lang === 'fr' ? 'Fermer' : 'إغلاق'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
const Contact = ({ t, lang }: { t: any, lang: string }) => {
  const handleWhatsAppSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    let text = "";
    if (lang === 'fr') {
      text = `Bonjour,\n\nNouvelle demande de devis/contact depuis le site web:\n\n*Nom:* ${name}\n*Email:* ${email}\n*Sujet:* ${subject}\n*Message:* ${message}`;
    } else {
      text = `مرحباً،\n\nطلب عرض سعر/تواصل جديد من الموقع:\n\n*الاسم:* ${name}\n*البريد الإلكتروني:* ${email}\n*الموضوع:* ${subject}\n*الرسالة:* ${message}`;
    }
    
    window.open(`https://wa.me/212707155553?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-clay-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">{t.contact.title}</h2>
            <p className="text-white/60 mb-10 text-lg">
              {t.contact.description}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta-600/20 rounded-xl flex items-center justify-center text-terracotta-500 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.contact.info.phone}</h4>
                  <p className="text-white/60">{t.contact.info.phoneValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta-600/20 rounded-xl flex items-center justify-center text-terracotta-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.contact.info.email}</h4>
                  <p className="text-white/60">{t.contact.info.emailValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-terracotta-600/20 rounded-xl flex items-center justify-center text-terracotta-500 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.contact.info.address}</h4>
                  <p className="text-white/60">{t.contact.info.addressValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-terracotta-600 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-clay-700">{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-clay-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600/20 focus:border-terracotta-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-clay-700">{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-clay-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600/20 focus:border-terracotta-600 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-clay-700">{t.contact.form.subject}</label>
                <select name="subject" required className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-clay-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600/20 focus:border-terracotta-600 transition-all">
                  {t.contact.form.subjects.map((s: string) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-clay-700">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-clay-900 focus:outline-none focus:ring-2 focus:ring-terracotta-600/20 focus:border-terracotta-600 transition-all"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-terracotta-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-terracotta-700 transition-all shadow-lg shadow-terracotta-600/20">
                {t.contact.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }: { t: any }) => {
  return (
    <footer className="bg-clay-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://lh3.googleusercontent.com/d/1cJUmsHHIS1rGGfSiHqs38cfIOXP8MeNk"
              alt="Tuile Baraka Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-display font-bold text-white">
              Tuile <span className="text-terracotta-600">Baraka</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
            {t.footer.links.map((link: string) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>

          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Tuile Baraka. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Products lang={lang} t={t} />
      <IntegratedSystems lang={lang} t={t} />
      <About lang={lang} t={t} />
      <Gallery lang={lang} t={t} />
      <Agencies lang={lang} t={t} />
      <Contact t={t} lang={lang} />
      <Footer t={t} />
    </div>
  );
}
