import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = register(username, password, name);
    if (result.success) {
      navigate('/profile'); // Redirect after successful registration
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] p-4 relative overflow-hidden">
      {/* Background blobs for Glassmorphism effect */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#4f46e5] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#db2777] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 mb-4 text-white font-bold text-xl">
            U
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-widest uppercase">Register</h2>
          <p className="text-gray-400 text-sm mt-2">Yangi akkaunt yarating.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">To'liq ismingiz</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition"
              placeholder="Ism va familiya"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition"
              placeholder="Foydalanuvchi nomi"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Parol</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition"
              placeholder="••••••••"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-[#e81cff] to-[#40c9ff] hover:from-[#d111e5] hover:to-[#22a1d6] text-white font-semibold rounded-xl shadow-lg transform transition-all active:scale-95"
          >
            Ro'yxatdan o'tish
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Akkauntingiz bormi?{' '}
          <Link to="/login" className="text-[#e81cff] hover:text-white transition-colors">
            Tizimga kiring
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
