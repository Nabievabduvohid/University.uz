import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { formatUzCurrency } from '../../data/universities';

const SAVED_UNIVERSITIES_KEY = 'university_saved_list';

const readSavedUniversities = () => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = window.localStorage.getItem(SAVED_UNIVERSITIES_KEY);
    const parsed = JSON.parse(stored ?? '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeSavedUniversities = (items) => {
  window.localStorage.setItem(SAVED_UNIVERSITIES_KEY, JSON.stringify(items));
};

const formatCompactMillions = (amount) => {
  if (typeof amount !== 'number') return null;
  const value = amount / 1000000;
  return `${Number.isInteger(value) ? value : value.toFixed(1)} mln`;
};

const UniversityCard = ({
  universityId,
  title = 'Inha Xalqaro Universiteti',
  location = 'Toshkent',
  image = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  tags,
  description,
  contractYear,
  contractMonth,
  className,
}) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!universityId) return;
    setIsSaved(readSavedUniversities().includes(universityId));
  }, [universityId]);

  const toggleSaved = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!universityId) return;

    const savedItems = readSavedUniversities();
    const nextItems = savedItems.includes(universityId)
      ? savedItems.filter((item) => item !== universityId)
      : [...savedItems, universityId];

    writeSavedUniversities(nextItems);
    setIsSaved(nextItems.includes(universityId));
  };

  const yearlyContract = typeof contractYear === 'number' ? formatUzCurrency(contractYear) : null;
  const monthlyContract = typeof contractMonth === 'number' ? formatUzCurrency(contractMonth) : null;
  const yearlyCompact = formatCompactMillions(contractYear);
  const monthlyCompact = formatCompactMillions(contractMonth);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={twMerge(
        'relative group flex h-full min-h-[33rem] w-full cursor-pointer overflow-hidden rounded-[24px] p-[2px] transition-all duration-300',
        className,
      )}
    >
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#2D4DF2] via-purple-500 to-[#DA33BF] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-br from-[#2D4DF2] to-[#DA33BF] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

      <div
        className="relative z-10 flex h-full w-full max-h-[33rem] flex-col rounded-[22px] border p-5 backdrop-blur-xl transition-all duration-300 group-hover:border-transparent"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: isDark ? 'rgba(18,18,22,0.95)' : 'rgba(255,255,255,0.76)',
        }}
      >
        <div className="relative mb-5 overflow-hidden rounded-[16px]">
          <div className="aspect-video w-full overflow-hidden rounded-[16px]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
          </div>

          <button
            type="button"
            onClick={toggleSaved}
            className="absolute left-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition hover:scale-105"
            style={{
              borderColor: isSaved ? 'rgba(123, 247, 255, 0.45)' : 'var(--color-border)',
              backgroundColor: isSaved ? 'rgba(45,77,242,0.24)' : isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.72)',
              color: isSaved ? '#7bf7ff' : 'var(--color-text)',
            }}
            aria-label={isSaved ? 'Saqlangan universitetni olib tashlash' : 'Universitetni saqlash'}
            title={isSaved ? 'Saqlangan' : 'Saqlash'}
          >
            <svg className="h-4 w-4" fill={isSaved ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z" />
            </svg>
          </button>

          <div
            className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.72)',
              color: 'var(--color-text)',
            }}
          >
            <svg className="h-3.5 w-3.5 text-[#DA33BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <h3 className="text-xl font-bold leading-snug tracking-wide" style={{ color: 'var(--color-text)' }}>
            {title}
          </h3>

          {(yearlyContract || monthlyContract) && (
            <div className="mt-3 flex flex-wrap gap-2">
              {yearlyContract && (
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                  Yiliga: {yearlyCompact ?? yearlyContract}
                </span>
              )}
              {monthlyContract && (
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold text-sky-300">
                  Oyiga: {monthlyCompact ?? monthlyContract}
                </span>
              )}
            </div>
          )}

          <p className="mb-5 mt-4 line-clamp-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {description ?? t.card.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {tags ? tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full border px-3 py-1 text-[11px] font-medium"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-elevated)',
                  color: 'var(--color-text-soft)',
                }}
              >
                {tag}
              </span>
            )) : (
              <>
                <span className="rounded-full border border-[#2D4DF2]/20 bg-[#2D4DF2]/10 px-3 py-1 text-[11px] font-medium text-[#2D4DF2]">Dasturlash</span>
                <span className="rounded-full border border-[#DA33BF]/20 bg-[#DA33BF]/10 px-3 py-1 text-[11px] font-medium text-[#DA33BF]">Menejment</span>
              </>
            )}
          </div>

          <div
            className={twMerge(
              'group/btn mt-auto flex w-full items-center justify-center gap-2 rounded-xl border py-3.5 font-medium transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#2D4DF2] group-hover:to-[#DA33BF] group-hover:shadow-[0_4px_15px_rgba(218,51,191,0.3)]',
            )}
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
              color: 'var(--color-text)',
            }}
          >
            {t.card.action}
            <svg className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UniversityCard;
