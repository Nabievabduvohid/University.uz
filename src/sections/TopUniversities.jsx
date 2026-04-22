import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import UniversityCard from '../components/cards/UniversityCard';
import universities from '../data/universities';
import { useLanguage } from '../context/LanguageContext';

export default function TopUniversities() {
  const { t, language } = useLanguage();

  // Sort by rating descending and take top 5
  const topUniversities = [...universities]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-10 overflow-hidden text-slate-900 dark:text-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38bdf8] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            >
              {t.topUniversities.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#818cf8]">{t.topUniversities.title2}</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-700 dark:text-gray-400 max-w-2xl text-lg"
            >
              {t.topUniversities.desc}
            </motion.p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-16">
          {topUniversities.map((uni, idx) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link to={`/university/${uni.id}`} className="block h-full relative">
                <UniversityCard
                  universityId={uni.id}
                  title={uni[`name_${language}`]}
                  location={uni[`location_${language}`]}
                  image={uni.images[0]}
                  description={uni[`fullDescription_${language}`]}
                  tags={uni[`faculties_${language}`].slice(0, 3)}
                  contractYear={uni.contract_year}
                  contractMonth={uni.contract_month}
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-[#fbbf24]/50 rounded-full px-3 py-1 flex items-center gap-1.5 z-20 shadow-lg">
                  <svg className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white font-semibold text-sm">{uni.rating}</span>
                </div>
                
                {/* Hover Batafsil overlay (optional enhancement, since cards might just be clickable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 dark:from-[#0f172a] dark:via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[var(--card-radius,_1.5rem)] flex items-end p-6 z-10">
                  <span className="text-[#38bdf8] font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {t.topUniversities.moreInfo} 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Neon Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            to="/universities"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-slate-900 dark:text-white transition-all duration-300 ease-in-out bg-transparent border border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#38bdf8]"></span>
            <span className="absolute inset-0 w-full h-full border-2 border-transparent rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)] group-hover:shadow-[0_0_40px_rgba(56,189,248,0.8)] transition-shadow duration-300"></span>
            
            <span className="relative z-10 flex items-center gap-2">
              {t.topUniversities.viewAll}
              <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
