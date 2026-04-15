import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackgroundGlow from '../components/BackgroundGlow';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UniversityCard from '../components/cards/UniversityCard';
import universities from '../data/universities';
import { useCompare } from '../context/CompareContext';

export default function ListingPage() {
  const [sortType, setSortType] = useState('default');
  const { compareList, addToCompare, removeFromCompare, isInCompare } = useCompare();

  const sortedUniversities = useMemo(() => {
    const list = [...universities];
    
    // Helper to parse tuition fee (e.g., "28 000 000 so'm / yil" -> 28000000)
    const parsePrice = (priceStr) => {
      if (!priceStr) return 0;
      const parsed = parseInt(priceStr.replace(/\D/g, ''), 10);
      return isNaN(parsed) ? 0 : parsed;
    };

    switch (sortType) {
      case 'ratingDesc':
        return list.sort((a, b) => b.rating - a.rating);
      case 'priceAsc':
        return list.sort((a, b) => parsePrice(a.tuitionFee) - parsePrice(b.tuitionFee));
      case 'priceDesc':
        return list.sort((a, b) => parsePrice(b.tuitionFee) - parsePrice(a.tuitionFee));
      case 'alpha':
        return list.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list; // Original order
    }
  }, [sortType]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      <BackgroundGlow />

      <div className="relative z-10">
        <Navbar />

        <main className="px-6 pb-24 pt-28 sm:px-8 lg:px-12">
          <section className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.32em] text-[#7bf7ff]">
                University Catalog
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                O‘zbekiston va xalqaro universitetlar katalogi
              </h1>
              <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                Har bir universitet bo‘yicha asosiy yo‘nalishlar, joylashuv va kontrakt
                ma’lumotlarini ko‘rib chiqing. Batafsil sahifa orqali to‘liq tavsif va hujjat
                topshirish havolasiga o‘ting.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <div className="relative group">
                <select 
                  value={sortType} 
                  onChange={(e) => setSortType(e.target.value)}
                  className="appearance-none bg-white/5 border border-white/20 text-white rounded-xl px-5 py-3 pr-10 outline-none focus:ring-2 focus:ring-[#38bdf8] backdrop-blur-md cursor-pointer transition-all w-60"
                >
                  <option value="default" className="bg-gray-900 text-white">Standart</option>
                  <option value="ratingDesc" className="bg-gray-900 text-white">Reyting bo'yicha (Yuqori)</option>
                  <option value="priceAsc" className="bg-gray-900 text-white">Narx bo'yicha (Arzon ↑)</option>
                  <option value="priceDesc" className="bg-gray-900 text-white">Narx bo'yicha (Qimmat ↓)</option>
                  <option value="alpha" className="bg-gray-900 text-white">Alifbo bo'yicha (A-Z)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#38bdf8]">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0L10 10.405l2.908-2.857c.533-.481 1.141-.446 1.576 0 .436.445.408 1.197 0 1.642l-3.696 3.633a1.06 1.06 0 01-1.576 0l-3.696-3.633c-.408-.445-.436-1.197 0-1.642z"/>
                  </svg>
                </div>
              </div>
            </div>

            <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence>
                {sortedUniversities.map((university) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    key={university.id} 
                    className="relative block group/card"
                  >
                    <Link to={`/university/${university.id}`}>
                      <UniversityCard
                        title={university.name}
                        location={university.location}
                        image={university.images[0]}
                        tags={university.faculties.slice(0, 3)}
                      />
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        isInCompare(university.id) ? removeFromCompare(university.id) : addToCompare(university.id);
                      }}
                      className={`absolute top-4 right-4 z-20 flex items-center justify-center p-2.5 rounded-full backdrop-blur-md border transition-all ${
                        isInCompare(university.id) 
                          ? 'bg-[#38bdf8] border-[#38bdf8] text-white shadow-[0_0_15px_rgba(56,189,248,0.5)] scale-110' 
                          : 'bg-black/40 border-white/20 text-white/70 hover:bg-white/20 hover:text-white hover:scale-110'
                      }`}
                      title={isInCompare(university.id) ? "Solishtirishdan olib tashlash" : "Solishtirishga qo'shish"}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
