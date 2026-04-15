import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const stats = t.stats.items;

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((element, index) => {
        const stat = stats[index];
        const counter = { value: 0 };

        gsap.to(counter, {
          value: stat.value,
          duration: 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            once: true,
          },
          onUpdate: () => {
            const nextValue = stat.value >= 100 ? Math.round(counter.value) : Number(counter.value.toFixed(0));
            element.textContent = `${nextValue}${stat.suffix}`;
          },
        });
      });

      gsap.fromTo(
        '.stats-card',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <section id="stats" ref={sectionRef} className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-sm uppercase tracking-[0.32em] text-[#7bf7ff]">{t.stats.eyebrow}</span>
            <h2
              className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              style={{ color: 'var(--color-text)' }}
            >
              {t.stats.title}
            </h2>
            <p className="mt-5 text-base leading-8 sm:text-lg" style={{ color: 'var(--color-text-muted)' }}>
              {t.stats.description}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {t.stats.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-xl"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-elevated)',
                  color: 'var(--color-text-soft)',
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={twMerge('stats-card group relative overflow-hidden rounded-[2rem] border p-7 opacity-0 backdrop-blur-2xl')}
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-elevated)',
                boxShadow: isDark
                  ? '0 24px 60px rgba(2, 6, 23, 0.22)'
                  : '0 24px 60px rgba(148, 163, 184, 0.16)',
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,247,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(39,100,255,0.18),transparent_38%)] opacity-80 transition duration-500 group-hover:opacity-100" />
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border" style={{ borderColor: 'var(--color-border)' }} />
              <div className="relative z-10">
                <div
                  ref={(element) => {
                    numberRefs.current[index] = element;
                  }}
                  className="min-h-[4.5rem] text-5xl font-semibold tracking-[-0.05em]"
                  style={{ color: 'var(--color-text)' }}
                >
                  0{stat.suffix}
                </div>
                <h3 className="mt-5 text-lg font-medium" style={{ color: 'var(--color-text)' }}>
                  {`${stat.value}${stat.suffix} ${stat.label}`}
                </h3>
                <p className="mt-3 text-sm leading-7" style={{ color: 'var(--color-text-muted)' }}>
                  {stat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
