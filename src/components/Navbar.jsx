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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-7xl flex-row flex-wrap sm:flex-nowrap items-center justify-between gap-4 sm:gap-10 rounded-[2rem] sm:rounded-full border px-5 py-3 backdrop-blur-2xl sm:px-7"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          boxShadow: isDark
            ? '0 20px 60px rgba(2, 6, 23, 0.26)'
            : '0 20px 60px rgba(148, 163, 184, 0.18)',
        }}
      >
        <Link to="/" className="flex flex-shrink-0 items-center group w-full sm:w-auto" style={{ minWidth: '200px' }}>
          <svg viewBox="0 0 280 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
            <defs>
              {/* Theme-based Gradient */}
              <linearGradient id="neonGlowLogo" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isDark ? "#6200EA" : "#1A237E"} />
                <stop offset="100%" stopColor={isDark ? "#00E5FF" : "#40C4FF"} />
              </linearGradient>
            </defs>

            {/* Abstract Icon: Book / Bird */}
            <g transform="translate(5, 5)">
              <path d="M 25 35 C 15 25, 5 15, 0 5 C 10 10, 20 20, 25 30" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[#00E5FF]"/>
              <path d="M 25 45 C 10 35, 0 25, -5 15 C 5 20, 15 30, 25 40" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[#6200EA]"/>
              
              <path d="M 25 35 C 35 25, 45 15, 50 5 C 40 10, 30 20, 25 30" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[#00E5FF]"/>
              <path d="M 25 45 C 40 35, 50 25, 55 15 C 45 20, 35 30, 25 40" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" className="transition-all duration-500 group-hover:stroke-[#6200EA]"/>
              
              <line x1="25" y1="20" x2="25" y2="45" stroke="url(#neonGlowLogo)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="25" cy="10" r="3" fill={isDark ? "#00E5FF" : "#40C4FF"} className="transition-transform duration-500 group-hover:scale-150" />
            </g>

            {/* Typography */}
            <text x="75" y="32" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="22" letterSpacing="0.08em" className="fill-slate-900 dark:fill-white transition-colors duration-300">
              UNIVERSITY<tspan fill={isDark ? "#00E5FF" : "#40C4FF"}>.UZ</tspan>
            </text>
            <text x="77" y="48" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="9" letterSpacing="0.25em" className="fill-slate-500 dark:fill-gray-400" textTransform="uppercase">
              Premium Education Hub
            </text>
          </svg>
        </Link>

        <div
          className="hidden items-center gap-2 rounded-full border px-2 py-2 md:flex"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg-elevated)',
          }}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || location.pathname === item.match;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={twMerge(
                  'group relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                  isActive ? 'text-[#38bdf8] bg-slate-100 dark:bg-white/5' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                )}
              >
                <span className="relative z-10">{item.label}</span>
                <span 
                  className={twMerge(
                    "absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#38bdf8] transition-all duration-300 ease-out group-hover:w-[70%] group-hover:shadow-[0_0_12px_2px_#38bdf8]",
                    isActive && "w-[70%] shadow-[0_0_12px_2px_#38bdf8]"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-2 flex-wrap">
          {compareList.length > 0 && (
            <Link
              to="/compare"
              className="hidden sm:flex items-center gap-2 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2 min-h-11 text-xs font-semibold text-[#38bdf8] transition-all hover:bg-[#38bdf8]/20 mr-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              {t.navbar.compare} ({compareList.length})
            </Link>
          )}
          
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border px-3 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 text-slate-900 dark:text-white"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
            }}
            aria-label={t.navbar.languageLabel}
          >
            <span className={language === 'uz' ? 'text-[#38bdf8]' : ''}>UZ</span>
            <span className="text-[10px]" style={{ color: 'var(--color-text-muted)' }}>/</span>
            <span className={language === 'ru' ? 'text-[#38bdf8]' : ''}>RU</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="relative inline-flex h-11 w-[5.5rem] items-center rounded-full border px-1.5"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
            }}
            aria-label={t.navbar.themeLabel}
          >
            <motion.span
              animate={{ x: theme === 'dark' ? 0 : 48 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="absolute left-1.5 top-1.5 h-8 w-8 rounded-full bg-[linear-gradient(135deg,#79F7FF_0%,#2764FF_100%)] shadow-[0_10px_30px_rgba(39,100,255,0.28)]"
            />
            <span className="relative z-10 flex w-full items-center justify-between px-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
              <span className={isDark ? 'text-slate-900' : 'text-slate-400'}>D</span>
              <span className={!isDark ? 'text-slate-900' : 'text-slate-400'}>L</span>
            </span>
          </button>

          {user ? (
            <Link
              to="/profile"
              className="hidden min-h-11 items-center gap-2 rounded-full border border-[#38bdf8]/35 bg-[#38bdf8]/10 px-5 text-sm font-semibold text-[#38bdf8] transition duration-300 hover:border-[#38bdf8]/70 hover:bg-[#38bdf8]/20 sm:inline-flex"
            >
              <div className="w-6 h-6 rounded-full bg-[#38bdf8] text-black flex items-center justify-center text-xs font-bold uppercase">
                {user.name?.charAt(0)}
              </div>
              {user.name}
            </Link>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link
                to="/login"
                className="min-h-11 flex items-center rounded-full px-4 text-sm font-medium transition duration-300 hover:text-[#38bdf8] text-slate-600 dark:text-gray-400"
              >
                {t.navbar.login}
              </Link>
              <Link
                to="/register"
                className="min-h-11 flex items-center rounded-full border border-[#7bf7ff]/35 bg-[#7bf7ff]/10 px-5 text-sm font-semibold text-[#0f172a] transition duration-300 hover:border-[#7bf7ff]/70 hover:bg-[#7bf7ff]/15 dark:text-white"
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
