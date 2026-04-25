import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/BackgroundGlow';
import { useCompare } from '../context/CompareContext';
import universitiesData, { formatUzCurrency } from '../data/universities';
import { useLanguage } from '../context/LanguageContext';

export default function ComparePage() {
  const { t, language } = useLanguage();
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  const selectedUnis = compareList.map(id => universitiesData.find(u => u.id === id)).filter(Boolean);

  const checkDormitory = (uni) => {
    const stateUnis = ['tuit', 'tsue', 'tsul', 'samdu', 'buxdu', 'ferdu', 'namdu', 'jizpi', 'tspu'];
    return stateUnis.includes(uni.id) ? t.compare.dormitoryYes : t.compare.dormitoryNo;
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 flex flex-col">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">{t.compare.title}</h1>
                <p className="text-gray-400 text-lg">{t.compare.desc}</p>
              </div>
              
              {selectedUnis.length > 0 && (
                <button 
                  onClick={clearCompare}
                  className="px-6 py-2 rounded-full border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors font-medium text-sm"
                >
                  {t.compare.clearAll}
                </button>
              )}
            </div>

            {selectedUnis.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 text-center shadow-2xl"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{t.compare.emptyTitle}</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  {t.compare.emptyDesc}
                </p>
                <Link to="/universities" className="px-8 py-3 rounded-full font-semibold bg-[#38bdf8] text-white hover:bg-blue-500 transition-colors">
                  {t.compare.goToCatalog}
                </Link>
              </motion.div>
            ) : (
              <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[800px] grid grid-cols-4 gap-6">
                  {/* Left Parameter Column */}
                  <div className="col-span-1 pt-48 flex flex-col gap-6 text-right pr-6 border-r border-white/10">
                    <div className="h-16 flex items-center justify-end font-semibold text-gray-400 uppercase tracking-widest text-xs">{t.compare.contract || "Kontrakt"}</div>
                    <div className="h-24 flex items-center justify-end font-semibold text-gray-400 uppercase tracking-widest text-xs">{language === 'uz' ? "Kirish Fanlari" : "Вступительные предметы"}</div>
                    <div className="h-24 flex items-center justify-end font-semibold text-gray-400 uppercase tracking-widest text-xs">{language === 'uz' ? "Xalqaro reyting" : "Международный рейтинг"}</div>
                    <div className="h-16 flex items-center justify-end font-semibold text-gray-400 uppercase tracking-widest text-xs">{t.compare.dormitory || "Yotoqxona"}</div>
                  </div>

                  {/* University Columns */}
                  {selectedUnis.map((uni, index) => (
                    <motion.div 
                      key={uni.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="col-span-1 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition-colors group relative shadow-lg"
                    >
                      {/* Delete Button */}
                      <button 
                        onClick={() => removeFromCompare(uni.id)}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:bg-red-500 hover:text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
                        title={t.compare.remove}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>

                      {/* Header (Image + Name) */}
                      <div className="h-44 flex flex-col mb-4">
                        <div className="w-full h-24 mb-4 rounded-xl overflow-hidden shadow-inner">
                          <img src={uni.images[0]} alt={uni.name} className="w-full h-full object-cover" />
                        </div>
                        <Link to={`/university/${uni.id}`} className="font-bold text-lg text-white leading-tight hover:text-[#38bdf8] transition-colors line-clamp-2">
                          {uni.name}
                        </Link>
                      </div>

                      {/* Tuitions */}
                      <div className="h-16 items-center flex border-b border-white/10">
                        <div>
                          <div className="font-bold text-[#10b981] text-lg">{uni.tuitionFee}</div>
                          <div className="text-xs text-gray-400">{(language === 'uz' ? 'Oyiga' : 'В месяц')}: {formatUzCurrency(uni.contract_month)}</div>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="h-24 items-center flex border-b border-white/10">
                        <div className="flex flex-wrap gap-1.5">
                          {((uni.subjects_uz && uni.subjects_ru) ? (language === 'uz' ? uni.subjects_uz : uni.subjects_ru) : []).map((subj, index) => (
                            <span key={index} className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-md text-[10px] font-medium border border-blue-800/50">
                              {subj}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* QS Ranking */}
                      <div className="h-24 items-center flex border-b border-white/10">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-xl font-bold">★ {uni.rating}</span>
                            <span className="text-gray-500 text-sm">/ 5</span>
                          </div>
                          <span className="text-gray-400 text-[11px] mt-1 uppercase tracking-wider font-semibold">QS World Ranking</span>
                        </div>
                      </div>

                      {/* Dormitory */}
                      <div className="h-16 items-center flex">
                        <span className={`font-semibold text-sm ${checkDormitory(uni).includes('Bor') || checkDormitory(uni).includes('есть') || checkDormitory(uni).includes('Yes') ? 'text-[#38bdf8]' : 'text-orange-400'}`}>
                          {checkDormitory(uni)}
                        </span>
                      </div>
                      
                      <div className="mt-8">
                        <Link 
                          to={`/university/${uni.id}`}
                          className="block w-full text-center py-3 bg-[#e81cff]/10 hover:bg-[#e81cff] text-[#e81cff] hover:text-white text-sm font-semibold rounded-xl border border-[#e81cff]/30 transition-all border-dashed hover:border-solid uppercase tracking-wider"
                        >
                          {t.compare.details}
                        </Link>
                      </div>
                    </motion.div>
                  ))}

                  {/* Empty Slot Handlers */}
                  {Array.from({ length: 3 - selectedUnis.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="col-span-1 border border-white/10 border-dashed rounded-3xl flex flex-col items-center justify-center min-h-[500px] bg-white/[0.01]">
                      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/20">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      </div>
                      <span className="text-gray-500 font-medium">{t.compare.emptySlot}</span>
                      <Link to="/universities" className="text-sm text-[#38bdf8] mt-2 underline">{t.compare.select}</Link>
                    </div>
                  ))}

                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
