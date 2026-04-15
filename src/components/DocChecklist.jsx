import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getDocumentsForUni } from '../data/documentsData';

export default function DocChecklist({ university }) {
  const [docs, setDocs] = useState([]);
  const [completed, setCompleted] = useState(() => {
    try {
       const stored = localStorage.getItem(`doc_checklist_${university.id}`);
       return stored ? JSON.parse(stored) : [];
    } catch(err) {
       return [];
    }
  });

  useEffect(() => {
    setDocs(getDocumentsForUni(university));
  }, [university]);

  useEffect(() => {
    localStorage.setItem(`doc_checklist_${university.id}`, JSON.stringify(completed));
  }, [completed, university.id]);

  const toggleDoc = (docId) => {
    setCompleted(prev => 
      prev.includes(docId) ? prev.filter(id => id !== docId) : [...prev, docId]
    );
  };

  const handleDownloadPdf = () => {
    alert(`'${university.name}' talab etadigan hujjatlar ro'yxati tayyorlanmoqda... (PDF formatida chop etish darchasi ochiladi)`);
    setTimeout(() => {
        window.print(); // Simple mock for PDF generation without extra libraries
    }, 500);
  };

  const progress = docs.length > 0 ? Math.round((completed.length / docs.length) * 100) : 0;

  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-3xl print-section print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
      
      {/* Header and Progress */}
      <div className="mb-6 relative z-10 print:mb-2">
         <div className="flex justify-between items-end mb-3">
            <span className="text-sm uppercase tracking-[0.2em] text-[#e81cff] font-semibold print:text-black">
              Hujjatlar Ro'yxati
            </span>
            <span className="text-xl font-bold text-white print:text-black">{progress}%</span>
         </div>
         <div className="text-xs text-gray-400 mb-3 print:hidden">
            Tayyorgarlik darajasi: {completed.length} / {docs.length} ta hujjat
         </div>
         <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden shadow-inner print:hidden">
            <motion.div 
               className="h-full bg-gradient-to-r from-[#38bdf8] to-[#e81cff] rounded-full"
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               transition={{ type: 'spring', bounce: 0, duration: 1 }}
            />
         </div>
      </div>

      {/* Docs List */}
      <div className="space-y-3 relative z-10">
        <AnimatePresence>
          {docs.map(doc => {
            const isChecked = completed.includes(doc.id);
            return (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`group flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                  isChecked 
                   ? 'bg-[#10b981]/10 border-[#10b981]/30 print:border-b' 
                   : 'bg-black/20 border-white/5 hover:border-[#38bdf8]/30 hover:bg-white/5 print:border-b'
                }`}
                onClick={() => toggleDoc(doc.id)}
              >
                {/* Custom Checkbox */}
                <div className={`mt-0.5 min-w-5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors shadow-sm ${
                   isChecked ? 'bg-[#10b981] border-[#10b981] print:bg-gray-300' : 'bg-transparent border-gray-500 group-hover:border-[#38bdf8] print:border-gray-800'
                }`}>
                  <AnimatePresence>
                    {isChecked && (
                       <motion.svg 
                         initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                         className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       >
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                       </motion.svg>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Doc Texts */}
                <div className="flex-grow">
                  <h4 className={`text-sm font-semibold transition-colors ${isChecked ? 'text-white print:text-black line-through print:no-underline' : 'text-gray-200 print:text-black'}`}>
                    {doc.name}
                  </h4>
                  <p className={`text-[11px] leading-relaxed mt-1 transition-colors ${isChecked ? 'text-gray-500 print:text-gray-500' : 'text-gray-400 print:text-gray-800'}`}>
                    {doc.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      <button 
        onClick={handleDownloadPdf}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-[#e81cff] border border-white/10 hover:border-transparent py-3 text-xs font-semibold text-white transition-colors print:hidden"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
        PDF Ro'yxatni Yuklash
      </button>

    </div>
  );
}
