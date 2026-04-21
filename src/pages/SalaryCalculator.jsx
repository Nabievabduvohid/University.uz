import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/BackgroundGlow';
import { salaryData, englishLevels, additionalSkills } from '../data/salaryData';
import universitiesData from '../data/universities';
import UniversityCard from '../components/cards/UniversityCard';
import { useLanguage } from '../context/LanguageContext';

export default function SalaryCalculator() {
  const { t } = useLanguage();
  const [field, setField] = useState(salaryData[0].id);
  const [experience, setExperience] = useState('junior'); // 'junior' or 'senior'
  const [englishLevel, setEnglishLevel] = useState(englishLevels[0].id);
  const [skills, setSkills] = useState([]);

  const toggleSkill = (skillId) => {
    setSkills(prev => 
      prev.includes(skillId) ? prev.filter(s => s !== skillId) : [...prev, skillId]
    );
  };

  // Calculate projected range
  const projectedRange = useMemo(() => {
    const selectedField = salaryData.find(d => d.id === field);
    const baseArray = experience === 'senior' ? selectedField.seniorSalary : selectedField.baseSalary;
    
    let minSalary = baseArray[0];
    let maxSalary = baseArray[1];
    
    // Apply English Multiplier
    const eng = englishLevels.find(e => e.id === englishLevel);
    minSalary *= eng.multiplier;
    maxSalary *= eng.multiplier;
    
    // Apply skills multipliers cumulatively
    skills.forEach(skillId => {
      const s = additionalSkills.find(x => x.id === skillId);
      minSalary *= s.bonus;
      maxSalary *= s.bonus;
    });

    return [Math.round(minSalary), Math.round(maxSalary)];
  }, [field, experience, englishLevel, skills]);

  const selectedFieldData = salaryData.find(d => d.id === field);
  const matchedUnis = selectedFieldData.matchedUnis.map(id => 
    universitiesData.find(u => u.id === id)
  ).filter(Boolean);

  // Maximum arbitrary value for the progress rendering (e.g. 150 mln)
  const maxScaleValue = 150; 
  const percentage = Math.min((projectedRange[1] / maxScaleValue) * 100, 100);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 flex flex-col">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{t.calculator.title}</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t.calculator.desc}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">{t.calculator.selectField}</label>
                <select 
                  value={field}
                  onChange={e => setField(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 text-white rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#e81cff] transition-all appearance-none cursor-pointer"
                >
                  {salaryData.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">{t.calculator.experience}</label>
                <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 relative">
                  <motion.div 
                    layout
                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#38bdf8]/20 border border-[#38bdf8]/50 rounded-lg shadow-sm"
                    initial={false}
                    animate={{ left: experience === 'junior' ? '4px' : 'calc(50%)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  <button 
                    onClick={() => setExperience('junior')}
                    className={`flex-1 py-3 text-sm font-semibold z-10 transition-colors ${experience === 'junior' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                  >
                    {t.calculator.junior}
                  </button>
                  <button 
                    onClick={() => setExperience('senior')}
                    className={`flex-1 py-3 text-sm font-semibold z-10 transition-colors ${experience === 'senior' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                  >
                    {t.calculator.senior}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">{t.calculator.englishLabel}</label>
                <select 
                  value={englishLevel}
                  onChange={e => setEnglishLevel(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 text-white rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all appearance-none cursor-pointer"
                >
                  {englishLevels.map(e => (
                    <option key={e.id} value={e.id}>{e.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">{t.calculator.additionalSkills}</label>
                <div className="space-y-3">
                  {additionalSkills.map(skill => (
                    <label key={skill.id} className="flex items-center gap-4 cursor-pointer group p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${skills.includes(skill.id) ? 'bg-[#10b981] border-[#10b981]' : 'border-gray-500 group-hover:border-gray-300'}`}>
                        {skills.includes(skill.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        )}
                      </div>
                      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">{skill.label}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Visuals */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e1e2f] border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
               
               {/* Background abstract spheres */}
               <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#e81cff]/20 rounded-full blur-[80px]"></div>
               <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-[#38bdf8]/20 rounded-full blur-[80px]"></div>

               <h2 className="text-xl text-gray-400 font-semibold mb-2 relative z-10">{t.calculator.potentialIncome}</h2>
               
               {/* Animated Counter Display */}
               <div className="flex items-end gap-2 mb-10 relative z-10">
                 <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#38bdf8] via-[#8b5cf6] to-[#e81cff] drop-shadow-lg">
                    {projectedRange[0]} - {projectedRange[1]}
                 </div>
                 <span className="text-2xl text-gray-400 font-bold mb-2">{t.calculator.perMonth}</span>
               </div>

               {/* Gauge / Bar display */}
               <div className="w-full max-w-lg mb-8 relative z-10">
                 <div className="flex justify-between text-xs text-gray-500 font-bold mb-2 uppercase tracking-widest">
                   <span>{t.calculator.zeroMln}</span>
                   <span>{t.calculator.maxSector}</span>
                 </div>
                 <div className="h-6 bg-black/50 border border-white/10 rounded-full overflow-hidden shadow-inner p-1 relative">
                    {/* Animated Bar */}
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#38bdf8] to-[#e81cff] rounded-full relative overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ type: "spring", bounce: 0.2, duration: 1.5 }}
                    >
                      {/* Shine effect passing over the bar */}
                      <motion.div 
                        className="w-20 h-full bg-white/30 transform -skew-x-12 absolute top-0"
                        animate={{ left: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      />
                    </motion.div>
                 </div>
                 <div className="mt-4 text-center px-4">
                    <p className="text-sm text-gray-400 font-medium">{t.calculator.disclaimer}</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Recommended Universities */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">{t.calculator.recommendationsTitle}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">{t.calculator.recommendationsDesc}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <AnimatePresence>
                {matchedUnis.map((uni, idx) => (
                   <motion.div
                    key={uni.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1 }}
                    className="h-full"
                   >
                     <Link to={`/university/${uni.id}`} className="block h-full group/card">
                       <UniversityCard
                          universityId={uni.id}
                          title={uni.name}
                          location={uni.location}
                          image={uni.images[0]}
                          description={uni.fullDescription}
                          tags={uni.faculties.slice(0, 2)}
                          contractYear={uni.contract_year}
                          contractMonth={uni.contract_month}
                       />
                     </Link>
                   </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {matchedUnis.length === 0 && (
              <div className="text-center p-10 bg-white/5 border border-white/10 rounded-2xl">
                 {t.calculator.notFound}
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
