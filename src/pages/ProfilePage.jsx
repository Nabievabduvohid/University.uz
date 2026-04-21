import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import universitiesData from '../data/universities';

export default function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const [docProgress, setDocProgress] = useState([]);
  const [savedUniversities, setSavedUniversities] = useState([]);

  useEffect(() => {
    const docsArr = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('doc_checklist_')) {
            const uniId = key.replace('doc_checklist_', '');
            try {
              const completedIds = JSON.parse(localStorage.getItem(key));
              if (Array.isArray(completedIds) && completedIds.length > 0) {
                   const uni = universitiesData.find(u => u.id === uniId);
                   if (uni) {
                       docsArr.push({ uni, count: completedIds.length });
                   }
              }
            } catch(e) {}
        }
    }
    setDocProgress(docsArr);

    try {
      const savedIds = JSON.parse(localStorage.getItem('university_saved_list') || '[]');
      if (Array.isArray(savedIds)) {
        setSavedUniversities(
          savedIds.map((id) => universitiesData.find((uni) => uni.id === id)).filter(Boolean),
        );
      }
    } catch {
      setSavedUniversities([]);
    }
  }, []);

  if (loading) return null;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/30">
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar Placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-1 shadow-lg">
              <div className="w-full h-full bg-black/80 rounded-full flex items-center justify-center text-4xl font-bold uppercase">
                {user.name?.charAt(0)}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">{user.name}</h1>
                <p className="text-gray-400 text-lg">@{user.username}</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <button 
                  onClick={logout}
                  className="px-6 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition"
                >
                  Tizimdan chiqish
                </button>
                <Link to="/universities" className="px-6 py-2 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 hover:bg-[#38bdf8]/20 transition">
                  Universitetlarni ko'rish
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-10 border-white/10" />

          {/* Favorites List section */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              Tanlanganlar (Favorites)
            </h2>
            
            {savedUniversities.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedUniversities.map((fav) => (
                  <Link
                    key={fav.id}
                    to={`/university/${fav.id}`}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#38bdf8]/50 transition-all group"
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-xl">
                      <img src={fav.images[0]} alt={fav.name} className="h-full w-full object-cover" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium group-hover:text-[#38bdf8] transition-colors">{fav.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{fav.tuitionFee}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 px-4 bg-black/20 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-400">Hali hech qanday universitetni saqlamadingiz.</p>
                <Link to="/universities" className="text-[#38bdf8] hover:underline mt-2 inline-block">
                  Universitetlar ro'yxatiga o'tish
                </Link>
              </div>
            )}
          </div>

          <hr className="my-10 border-white/10" />

          {/* Docs Checklist Status */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-[#e81cff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Mening hujjatlarim (Yig'ish jarayoni)
            </h2>
            
            {docProgress.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docProgress.map((item, index) => (
                  <Link to={`/university/${item.uni.id}`} key={index} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#e81cff]/50 transition-all group flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
                       <img src={item.uni.images[0]} alt={item.uni.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-[#e81cff] transition-colors line-clamp-1">{item.uni.name}</h3>
                      <p className="text-xs text-gray-400 mt-1">{item.count} ta hujjat tayyorlandi</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 px-4 bg-black/20 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-400">Hech qanday universitet uchun hujjat yig'ishni boshlamadingiz.</p>
              </div>
            )}
          </div>

        </motion.div>
      </main>
    </div>
  );
}
