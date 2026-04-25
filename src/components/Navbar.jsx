import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useCompare } from '../context/CompareContext';

export default function Navbar() {
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();
  const { isDark, theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { compareList } = useCompare();

  const navItems = [
    { label: t.navbar.home, href: '/' },
    { label: t.navbar.universities, href: '/universities' },
    { label: t.navbar.about, href: '/about' },
    { label: t.navbar.quiz, href: '/quiz' },
    { label: t.navbar.calculator, href: '/calculator' },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-10">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-[2rem] sm:rounded-full border px-4 py-3 backdrop-blur-2xl md:px-6"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          boxShadow: isDark
            ? '0 20px 60px rgba(2, 6, 23, 0.26)'
            : '0 20px 60px rgba(148, 163, 184, 0.18)',
        }}
      >
        {/* LOGO QISMI: shrink-0 orqali o'lchamini saqlab qolamiz */}
        <Link to="/" className="flex shrink-0 items-center group min-w-fit">
          <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 sm:h-10 w-auto">
            <defs>
              <linearGradient id="neonGlowLogo" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? "#6200EA" : "#1A237E"} />
                <stop offset="100%" stopColor={isDark ? "#00E5FF" : "#40C4FF"} />
              </linearGradient>
            </defs>
            <g transform="translate(5, 5)">
              <path d="M 25 35 C 15 25, 5 15, 0 5 C 10 10, 20 20, 25 30" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 25 45 C 10 35, 0 25, -5 15 C 5 20, 15 30, 25 40" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
              <path d="M 25 35 C 35 25, 45 15, 50 5 C 40 10, 30 20, 25 30" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 25 45 C 40 35, 50 25, 55 15 C 45 20, 35 30, 25 40" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
              <line x1="25" y1="20" x2="25" y2="45" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="25" cy="10" r="3" fill={isDark ? "#00E5FF" : "#40C4FF"} />
            </g>
            <text x="75" y="32" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.08em" className="fill-slate-900 dark:fill-white">
              UNIVERSITY<tspan fill={isDark ? "#00E5FF" : "#40C4FF"}>.UZ</tspan>
            </text>
          </svg>
        </Link>

        {/* MARKAZIY NAVIGATSIYA: flex-1 orqali qolgan joyni egallaydi */}
        <div className="hidden xl:flex flex-1 items-center justify-center gap-1 mx-2">
          <div 
            className="flex items-center gap-1 rounded-full border px-2 py-1.5"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={twMerge(
                  'relative rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 whitespace-nowrap',
                  location.pathname === item.href ? 'text-[#38bdf8] bg-slate-100 dark:bg-white/5' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* O'NG TOMON CONTROLLARI: min-w-max bilan siqilmasligi ta'minlangan */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 min-w-max">
          
          {/* SOLISHTIRISH */}
          {compareList.length > 0 && (
            <Link
              to="/compare"
              className="hidden lg:flex shrink-0 items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-3 py-2 text-[10px] font-bold text-[#38bdf8] transition-all hover:bg-[#38bdf8]/20 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              {t.navbar.compare} ({compareList.length})
            </Link>
          )}
          
          {/* TIL ALMASHTIRGICH */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex shrink-0 h-9 items-center gap-1 rounded-full border px-3 text-[10px] font-bold uppercase transition duration-300 text-slate-900 dark:text-white"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
            }}
          >
            <span className={language === 'uz' ? 'text-[#38bdf8]' : ''}>UZ</span>
            <span className="opacity-30">/</span>
            <span className={language === 'ru' ? 'text-[#38bdf8]' : ''}>RU</span>
          </button>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            className="relative hidden sm:flex shrink-0 h-9 w-16 items-center rounded-full border px-1"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
            }}
          >
            <motion.span
              animate={{ x: theme === 'dark' ? 0 : 28 }}
              className="absolute left-1 h-7 w-7 rounded-full bg-[linear-gradient(135deg,#79F7FF_0%,#2764FF_100%)]"
            />
            <div className="relative z-10 flex w-full items-center justify-between px-2 text-[8px] font-bold">
              <span className={isDark ? 'text-slate-900' : 'text-slate-400'}>D</span>
              <span className={!isDark ? 'text-slate-900' : 'text-slate-400'}>L</span>
            </div>
          </button>

          {/* AUTH / PROFIL */}
          {user ? (
            <Link
              to="/profile"
              className="flex shrink-0 h-9 items-center gap-2 rounded-full border border-[#38bdf8]/35 bg-[#38bdf8]/10 px-3 text-xs font-bold text-[#38bdf8] transition-all whitespace-nowrap"
            >
              <div className="w-5 h-5 rounded-full bg-[#38bdf8] text-black flex items-center justify-center text-[10px] font-black">
                {user.name?.charAt(0)}
              </div>
              <span className="hidden sm:inline truncate max-w-[80px]">{user.name}</span>
            </Link>
          ) : (
            <div className="flex items-center gap-2 shrink-0">
              <Link to="/login" className="hidden sm:block text-[11px] font-bold px-2 text-slate-600 dark:text-gray-400 whitespace-nowrap">
                {t.navbar.login}
              </Link>
              <Link
                to="/register"
                className="h-9 flex items-center rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 text-[11px] font-bold text-[#38bdf8] transition-all whitespace-nowrap"
              >
                {t.navbar.register}
              </Link>
            </div>
          )}
        </div>
      </motion.nav>
    </header>
  );
}