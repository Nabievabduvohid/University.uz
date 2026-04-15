import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const UniversityCard = ({
  title = 'Inha Xalqaro Universiteti',
  location = 'Toshkent',
  image = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  tags,
}) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group w-full cursor-pointer overflow-hidden rounded-[24px] p-[2px] transition-all duration-300 sm:w-[350px]"
    >
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#2D4DF2] via-purple-500 to-[#DA33BF] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-br from-[#2D4DF2] to-[#DA33BF] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

      <div
        className="relative z-10 flex h-full flex-col rounded-[22px] border p-5 backdrop-blur-xl transition-all duration-300 group-hover:border-transparent"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: isDark ? 'rgba(18,18,22,0.95)' : 'rgba(255,255,255,0.76)',
        }}
      >
        <div className="relative mb-5 h-48 w-full overflow-hidden rounded-[16px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div
            className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md"
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
            {location}
          </div>
        </div>

        <h3 className="mb-2 text-xl font-bold leading-snug tracking-wide" style={{ color: 'var(--color-text)' }}>
          {title}
        </h3>
        <p className="mb-5 line-clamp-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
          {t.card.description}
        </p>

        <div className="mb-6 mt-auto flex flex-wrap gap-2">
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
            'group/btn flex w-full items-center justify-center gap-2 rounded-xl border py-3.5 font-medium transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#2D4DF2] group-hover:to-[#DA33BF] group-hover:shadow-[0_4px_15px_rgba(218,51,191,0.3)]',
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
    </motion.div>
  );
};

export default UniversityCard;
