import { Suspense, lazy, useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const HeroScene = lazy(() => import('../components/HeroScene'));

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const heroRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRefs = useRef([]);
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const heroTitle = t.hero.title;

  const words = useMemo(
    () =>
      heroTitle.split(' ').map((word, wordIndex) => ({
        id: `${word}-${wordIndex}`,
        letters: word.split('').map((character, characterIndex) => ({
          id: `${wordIndex}-${character}-${characterIndex}`,
          value: character,
        })),
      })),
    [heroTitle],
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRefs.current, { yPercent: 110, opacity: 0, rotateX: -90 });

      const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

      timeline
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
        )
        .to(
          titleRefs.current,
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.025,
          },
          '-=0.2',
        );
    }, heroRef);

    return () => ctx.revert();
  }, [heroTitle]);

  titleRefs.current = [];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-between gap-14 lg:flex-row lg:gap-16">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-[500px] lg:max-w-[50%]"
        >
          <div
            ref={badgeRef}
            className="mb-8 inline-flex min-h-11 items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium backdrop-blur-xl text-slate-600 dark:text-gray-400"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
            }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#7bf7ff] shadow-[0_0_18px_rgba(123,247,255,0.9)]" />
            {t.hero.badge}
          </div>

          <h1
            className="max-w-full whitespace-normal break-keep text-2xl font-semibold leading-[1.1] tracking-[-0.05em] [overflow-wrap:normal] sm:text-4xl lg:text-5xl text-slate-900 dark:text-white"
            style={{ wordBreak: 'keep-all', overflowWrap: 'normal' }}
          >
            {words.map((word) => (
              <span
                key={word.id}
                className="mr-[0.18em] inline-flex whitespace-nowrap last:mr-0"
              >
                {word.letters.map((letter) => (
                  <span
                    key={letter.id}
                    ref={(element) => {
                      if (element) {
                        titleRefs.current.push(element);
                      }
                    }}
                    className="inline-block will-change-transform"
                  >
                    {letter.value}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            variants={itemVariant}
            className="mt-6 max-w-xl text-sm leading-6 sm:text-base text-slate-600 dark:text-gray-400"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariant}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#stats"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#79F7FF_0%,#2764FF_42%,#8B5CFF_100%)] px-5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(39,100,255,0.35)] transition duration-300 hover:scale-[1.02]"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#footer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-semibold backdrop-blur-xl transition duration-300 hover:border-[#79f7ff]/50 text-slate-900 dark:text-white"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-elevated)',
              }}
            >
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariant}
            className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {t.hero.highlights.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border px-5 py-4 backdrop-blur-2xl"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-elevated)',
                }}
              >
                <div className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {value}
                </div>
                <div className="mt-1 text-sm text-slate-600 dark:text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative z-10 order-last mx-auto hidden w-full max-w-[34rem] flex-shrink-0 justify-center lg:order-none lg:flex lg:justify-end">
          <div
            className="relative z-10 mt-4 h-[28rem] w-full max-w-[30rem] rounded-[2rem] border p-3 backdrop-blur-2xl lg:mt-0"
            style={{
              borderColor: 'var(--color-border)',
              backgroundColor: 'var(--color-bg-elevated)',
              boxShadow: isDark
                ? '0 30px 120px rgba(0,0,0,0.35)'
                : '0 30px 120px rgba(148,163,184,0.2)',
            }}
          >
            <div className="absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div
              className="relative h-full overflow-hidden rounded-[1.5rem] border"
              style={{
                borderColor: 'var(--color-border)',
                background: isDark
                  ? 'radial-gradient(circle at top, rgba(121,247,255,0.16), transparent 45%), linear-gradient(180deg, rgba(8,15,27,0.88), rgba(3,7,12,0.96))'
                  : 'radial-gradient(circle at top, rgba(121,247,255,0.2), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.94), rgba(226,232,240,0.92))',
              }}
            >
              <div
                className="absolute left-6 right-6 top-6 z-20 flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.55)',
                }}
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-600 dark:text-gray-400">
                    {t.hero.liveRanking}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                    {t.hero.topDestinations}
                  </p>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/12 px-3 py-1 text-xs font-semibold text-emerald-200">
                  {t.hero.realtime}
                </div>
              </div>

              <div className="absolute inset-0">
                <Suspense fallback={<div className="h-full w-full bg-transparent" />}>
                  <HeroScene />
                </Suspense>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 grid gap-3">
                {t.hero.destinations.map(([city, track, score]) => (
                  <div
                    key={track}
                    className="flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl"
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'var(--color-bg-elevated)',
                    }}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-600 dark:text-gray-400">
                        {city}
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                        {track}
                      </p>
                    </div>
                    <div className="text-sm font-semibold text-[#7bf7ff]">{score}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
