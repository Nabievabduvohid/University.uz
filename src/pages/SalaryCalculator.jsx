import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/BackgroundGlow';
import { salaryData, englishLevels, additionalSkills } from '../data/salaryData';
import universitiesData from '../data/universities';
import UniversityCard from '../components/cards/UniversityCard';
import { useLanguage } from '../context/LanguageContext';

const experienceBaseSalary = {
  junior: 500,
  middle: 1200,
  senior: 2500,
};

const calculatorCopy = {
  uz: {
    experienceLevels: {
      junior: 'Junior',
      middle: 'Middle',
      senior: 'Senior',
    },
    calculate: 'Hisoblash',
    salaryRange: "Bozor oralig'i",
    estimatedSalary: 'Hisoblangan maosh',
    usdPerMonth: '$ / oy',
    maxSector: '$4000+',
    zero: '$0',
    skillsHint: "Har bir skill real bozordagi ustama sifatida qo'shiladi.",
  },
  ru: {
    experienceLevels: {
      junior: 'Junior',
      middle: 'Middle',
      senior: 'Senior',
    },
    calculate: 'Рассчитать',
    salaryRange: 'Рыночный диапазон',
    estimatedSalary: 'Расчетная зарплата',
    usdPerMonth: '$ / месяц',
    maxSector: '$4000+',
    zero: '$0',
    skillsHint: 'Каждый навык добавляет реальную рыночную надбавку.',
  },
};

function calculateSalary({ field, experience, englishLevel, skills }) {
  const baseSalary = experienceBaseSalary[experience];
  const marketAdjustedBase = baseSalary * field.multiplier * englishLevel.multiplier;

  let salary = marketAdjustedBase;
  skills.forEach((skill) => {
    salary += skill.flatBonus;
    salary *= 1 + skill.percentBonus;
  });

  const spread = experience === 'junior' ? 0.12 : experience === 'middle' ? 0.15 : 0.18;

  return {
    estimate: Math.round(salary),
    range: [
      Math.round(salary * (1 - spread)),
      Math.round(salary * (1 + spread)),
    ],
  };
}

export default function SalaryCalculator() {
  const { t, language } = useLanguage();
  const ui = calculatorCopy[language] || calculatorCopy.uz;

  const [field, setField] = useState(salaryData[0].id);
  const [experience, setExperience] = useState('junior');
  const [englishLevel, setEnglishLevel] = useState(englishLevels[0].id);
  const [skills, setSkills] = useState([]);
  const [calculatedSalary, setCalculatedSalary] = useState(() =>
    calculateSalary({
      field: salaryData[0],
      experience: 'junior',
      englishLevel: englishLevels[0],
      skills: [],
    }),
  );

  const selectedFieldData = useMemo(
    () => salaryData.find((item) => item.id === field) ?? salaryData[0],
    [field],
  );

  const matchedUnis = useMemo(
    () =>
      selectedFieldData.matchedUnis
        .map((id) => universitiesData.find((university) => university.id === id))
        .filter(Boolean),
    [selectedFieldData],
  );

  const percentage = Math.min((calculatedSalary.estimate / 4000) * 100, 100);

  const handleCalculate = () => {
    const selectedEnglish = englishLevels.find((item) => item.id === englishLevel) ?? englishLevels[0];
    const selectedSkills = additionalSkills.filter((item) => skills.includes(item.id));

    setCalculatedSalary(
      calculateSalary({
        field: selectedFieldData,
        experience,
        englishLevel: selectedEnglish,
        skills: selectedSkills,
      }),
    );
  };

  const toggleSkill = (skillId) => {
    setSkills((prev) =>
      prev.includes(skillId) ? prev.filter((item) => item !== skillId) : [...prev, skillId],
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 flex flex-col">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">{t.calculator.title}</h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">{t.calculator.desc}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 space-y-8 bg-slate-50/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  {t.calculator.selectField}
                </label>
                <select
                  value={field}
                  onChange={(event) => setField(event.target.value)}
                  className="w-full bg-slate-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#e81cff] transition-all appearance-none cursor-pointer"
                >
                  {salaryData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.names?.[language] || item.names?.uz}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  {t.calculator.experience}
                </label>
                <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 p-2">
                  {Object.keys(experienceBaseSalary).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setExperience(level)}
                      className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        experience === level
                          ? 'bg-[#38bdf8]/20 border border-[#38bdf8]/50 text-sky-700 dark:text-white'
                          : 'border border-transparent text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'
                      }`}
                    >
                      {ui.experienceLevels[level]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  {t.calculator.englishLabel}
                </label>
                <select
                  value={englishLevel}
                  onChange={(event) => setEnglishLevel(event.target.value)}
                  className="w-full bg-slate-100 dark:bg-black/40 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-[#38bdf8] transition-all appearance-none cursor-pointer"
                >
                  {englishLevels.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.labels?.[language] || item.labels?.uz}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
                  {t.calculator.additionalSkills}
                </label>
                <div className="space-y-3">
                  {additionalSkills.map((skill) => {
                    const selected = skills.includes(skill.id);

                    return (
                      <button
                        key={skill.id}
                        type="button"
                        onClick={() => toggleSkill(skill.id)}
                        className={`w-full flex items-center gap-4 p-3 rounded-xl text-left border transition-colors ${
                          selected
                            ? 'bg-emerald-500/10 border-emerald-400/40'
                            : 'bg-slate-50 dark:bg-white/5 border-gray-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                            selected ? 'bg-[#10b981] border-[#10b981]' : 'border-gray-500'
                          }`}
                        >
                          {selected && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="text-slate-900 dark:text-gray-200 font-medium text-sm">
                            {skill.labels?.[language] || skill.labels?.uz}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-gray-500">
                            +{Math.round(skill.percentBonus * 100)}% {skill.flatBonus ? `+ $${skill.flatBonus}` : ''}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <p className="mt-3 text-xs text-slate-600 dark:text-gray-500">{ui.skillsHint}</p>
              </div>

              <button
                type="button"
                onClick={handleCalculate}
                className="w-full rounded-2xl bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] px-5 py-4 font-bold text-white shadow-lg shadow-sky-500/20 transition-transform hover:-translate-y-0.5"
              >
                {ui.calculate}
              </button>
            </div>

            <div className="lg:col-span-7 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0f172a] dark:to-[#1e1e2f] border border-gray-300 dark:border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#e81cff]/20 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-[#38bdf8]/20 rounded-full blur-[80px]"></div>

              <h2 className="text-xl text-slate-600 dark:text-gray-400 font-semibold mb-2 relative z-10">{ui.estimatedSalary}</h2>

              <div className="flex items-end gap-2 mb-4 relative z-10 flex-wrap justify-center">
                <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#0284c7] via-[#7c3aed] to-[#c026d3] dark:from-[#38bdf8] dark:via-[#8b5cf6] dark:to-[#e81cff] drop-shadow-lg">
                  ${calculatedSalary.estimate}
                </div>
                <span className="text-2xl text-slate-700 dark:text-gray-400 font-bold mb-2">{ui.usdPerMonth}</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-gray-400 mb-10 relative z-10">
                {ui.salaryRange}: ${calculatedSalary.range[0]} - ${calculatedSalary.range[1]}
              </p>

              <div className="w-full max-w-lg mb-8 relative z-10">
                <div className="flex justify-between text-xs text-slate-500 font-bold mb-2 uppercase tracking-widest">
                  <span>{ui.zero}</span>
                  <span>{ui.maxSector}</span>
                </div>
                <div className="h-6 bg-slate-300/50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-full overflow-hidden shadow-inner p-1 relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#38bdf8] to-[#e81cff] rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 1.5 }}
                  >
                    <motion.div
                      className="w-20 h-full bg-white/30 transform -skew-x-12 absolute top-0"
                      animate={{ left: ['-100%', '200%'] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
                <div className="mt-4 text-center px-4">
                  <p className="text-sm text-slate-600 dark:text-gray-400 font-medium">{t.calculator.disclaimer}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{t.calculator.recommendationsTitle}</h2>
              <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">{t.calculator.recommendationsDesc}</p>
            </div>

            <div className="grid gap-6 auto-rows-fr md:grid-cols-2 lg:grid-cols-4">
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
                        title={uni[`name_${language}`]}
                        location={uni[`location_${language}`]}
                        image={uni.images[0]}
                        description={uni[`fullDescription_${language}`]}
                        tags={uni[`faculties_${language}`].slice(0, 2)}
                        contractYear={uni.contract_year}
                        contractMonth={uni.contract_month}
                        subjectsUz={uni.subjects_uz}
                        subjectsRu={uni.subjects_ru}
                      />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {matchedUnis.length === 0 && (
              <div className="text-center p-10 bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl text-slate-800 dark:text-white">
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
