import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/BackgroundGlow';
import { quizzes } from '../data/quizzes';
import universitiesData from '../data/universities';

export default function QuizPage() {
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [quizResult, setQuizResult] = useState(null);

  // Restart Handler
  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestionIdx(0);
    setTotalScore(0);
    setQuizResult(null);
  };

  // Answer Selection
  const handleAnswer = (points) => {
    const newScore = totalScore + points;
    setTotalScore(newScore);

    if (currentQuestionIdx + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      // Find matching result logic based on min and max flat score values
      let resultObj = activeQuiz.results.find(r => newScore >= r.min && newScore <= r.max);
      
      // Fallback in case points don't match exactly somehow
      if(!resultObj) {
        resultObj = activeQuiz.results[activeQuiz.results.length - 1]; 
      }

      const matchedUnis = universitiesData.filter(uni => 
        resultObj.matchedUniversities.includes(uni.id)
      ).slice(0, 4);

      setQuizResult({
        ...resultObj,
        finalScore: newScore,
        maxScore: activeQuiz.questions.length * 4,
        recommendations: matchedUnis
      });
    }
  };

  // 1. Render Selection Mode (5 Glassmorphism Cards)
  const renderSelectionMode = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">
          O'zingizni sinab ko'ring
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Quyidagi qiziqarli testlardan birini tanlang va o'zingizga eng mos keladigan ta'lim yo'nalishi va universitetlarni kashf eting. Har bir test 10 ta savoldan iborat.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz, idx) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onClick={() => setActiveQuiz(quiz)}
            className="group cursor-pointer relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 overflow-hidden flex flex-col items-start"
          >
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
              style={{ backgroundColor: quiz.color }}
            ></div>
            
            <div className="text-5xl mb-6 bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform shadow-inner">
              {quiz.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{quiz.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{quiz.description}</p>
            
            <div className="mt-auto mt-4 inline-flex items-center text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: quiz.color }}>
              Testni boshlash (10 savol)
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // 2. Render Active Quiz Question Mode
  const renderQuizQuestion = () => {
    const question = activeQuiz.questions[currentQuestionIdx];
    const totalQuestions = activeQuiz.questions.length;
    const progress = ((currentQuestionIdx + 1) / totalQuestions) * 100;

    return (
      <div className="max-w-3xl mx-auto w-full mt-10">
        <div className="mb-10 text-center">
          <h2 className="text-sm uppercase tracking-widest text-[#38bdf8] font-bold mb-4">
            {activeQuiz.title} 
            <span className="ml-3 text-white/50">({currentQuestionIdx + 1} / {totalQuestions})</span>
          </h2>
          
          {/* Progress Bar Container */}
          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden shadow-inner relative">
             {/* Text over progress */}
            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white/40 z-10">
               {currentQuestionIdx + 1} of {totalQuestions}
            </div>
            <motion.div 
              initial={{ width: `${(currentQuestionIdx / totalQuestions) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
              className="h-full bg-gradient-to-r from-[#38bdf8] to-[#e81cff] rounded-full absolute left-0 top-0 z-0"
            />
          </div>
        </div>

        {/* Question Animating Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIdx}
            initial={{ opacity: 0, x: 20, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-relaxed text-center">
              {question.question}
            </h3>
            
            <div className="space-y-4">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.points)}
                  className="w-full text-left p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/50 transition-all group flex items-center justify-between"
                >
                  <span className="text-gray-300 group-hover:text-white font-medium text-lg pr-4">{opt.text}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-white/20 group-hover:border-[#38bdf8] flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={resetQuiz} className="mt-8 text-sm text-gray-500 hover:text-white mx-auto block transition-colors">
          Asosiy menuga qaytish
        </button>
      </div>
    );
  };

  // 3. Render Quiz Results & Recommendations Mode
  const renderQuizResult = () => {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="text-center mb-16 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#e81cff]/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="inline-block text-6xl mb-6 animate-bounce relative z-10">🎉</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Test Natijalari</h2>
          
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
              <span className="text-gray-400 text-sm uppercase tracking-widest font-bold">Umumiy Ball:</span>
              <div className="text-4xl font-black text-[#38bdf8] mt-1">{quizResult.finalScore} <span className="text-xl text-gray-500">/ {quizResult.maxScore}</span></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#38bdf8]/10 to-[#e81cff]/10 border border-white/20 rounded-[2rem] p-8 max-w-3xl mx-auto inline-block relative z-10 shadow-2xl backdrop-blur-xl">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">{quizResult.text}</p>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-semibold text-white">Siz uchun maxsus tavsiyalar:</h3>
            <div className="h-[1px] flex-grow bg-white/10"></div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quizResult.recommendations.map((uni, idx) => (
              <motion.div 
                key={uni.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-all flex flex-col hover:-translate-y-1 shadow-lg"
              >
                <div className="h-32 overflow-hidden relative">
                  <img src={uni.images[0]} alt={uni.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-bold border border-white/10">
                    ⭐ {uni.rating}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-md font-bold text-white mb-2 line-clamp-2">{uni.name}</h4>
                  <p className="text-gray-400 text-xs mb-4 flex items-center gap-2">
                    <svg className="w-3 h-3 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {uni.tuitionFee}
                  </p>
                  
                  <Link 
                    to={`/university/${uni.id}`}
                    className="mt-auto w-full text-center py-2 bg-white/10 hover:bg-[#38bdf8] text-sm text-white font-semibold rounded-xl transition-colors border border-white/5"
                  >
                    Batafsil
                  </Link>
                </div>
              </motion.div>
            ))}
            {quizResult.recommendations.length === 0 && (
              <div className="col-span-full text-center py-10 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-gray-400">Hech qanday universitet topilmadi.</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-10">
          <button 
            onClick={resetQuiz}
            className="px-8 py-3 rounded-full font-semibold border-2 border-white/20 text-white hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            Boshqa test topshirish
          </button>
          <Link 
            to="/profile"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#e81cff] to-[#a855f7] text-white hover:shadow-[0_0_20px_rgba(232,28,255,0.5)] transition-all w-full sm:w-auto text-center"
          >
            Natijani Profilga saqlash
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500 flex flex-col">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-10 pb-20 px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center">
          {!activeQuiz && !quizResult && renderSelectionMode()}
          {activeQuiz && !quizResult && renderQuizQuestion()}
          {quizResult && renderQuizResult()}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
