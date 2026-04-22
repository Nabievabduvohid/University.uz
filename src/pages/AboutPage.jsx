import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGlow from '../components/BackgroundGlow';

const localTexts = {
  uz: {
    heroTitle: 'University.uz - Bizning Tarix va Missiya',
    heroDesc:
      "Biz shunchaki ma'lumotlar bazasi emasmiz. Biz talabalarning orzularini ro'yobga chiqarish va ularga eng to'g'ri yo'lni ko'rsatish uchun yaratilgan innovatsion platformamiz.",
    storyTitle: 'Loyihaning Maqsadi va Tarixi',
    storyP1:
      "University.uz loyihasi 2024-yilda ta'lim sohasidagi xizmatlarni raqamlashtirish va yoshlarimizning oliy ta'lim muassasalariga kirish jarayonini osonlashtirish maqsadida yaratildi. Bugungi kunda talabalar uchun minglab universitetlar ichidan o'zlariga mosini tanlash juda qiyin masalaga aylangan.",
    storyP2:
      "Bizning tizim barcha ochiq ma'lumotlar va universitet darchalaridagi eng saralangan jihatlarni tortib, yagona interaktiv ma'lumotlar bazasiga joylashtiradi. Platformada 15 dan ortiq yetakchi universitetlarning reytingi, narx siyosati, yotoqxonasi va fakultetlari bir joyda qulay shaklda ifodalangan.",
    storyP3:
      "Asosiy maqsadimiz - universitet haqida ishonchli vizual va matnli ma'lumotlarni onlayn taqdim etish orqali abituriyentlarning hamda ularning ota-onalarining vaqtini va mablag'ini tejashdir.",
    valuesTitle: 'Bizning Qadriyatlar',
    values: [
      {
        title: 'Shaffoflik',
        desc: "Barcha ma'lumotlar, kontrakt narxlari va reytinglar hech qanday yashirin unsurlarsiz ochiq taqdim etiladi.",
        color: '#38bdf8',
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      },
      {
        title: 'Ishonch',
        desc: "Ma'lumotlar to'g'ridan-to'g'ri rasmiy manbalarga asoslanadi va har chorakda qat'iy tahrirlab boriladi.",
        color: '#10b981',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      },
      {
        title: 'Kelajak',
        desc: "Biz yoshlarning kelajakdagi faoliyatiga zamin tayyorlaymiz va zamonaviy mutaxassisliklarni targ'ib qilamiz.",
        color: '#e81cff',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      },
      {
        title: 'Innovatsiya',
        desc: 'Har bir jarayonimiz eng zamonaviy IT texnologiyalar bilan boyitilgan, eng tezkor va qulay interfeysga ega.',
        color: '#f59e0b',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      },
    ],
    authorTitle: 'Loyiha muallifi',
    resultsBadge: 'Xulosa',
    resultsTitle: 'Natijalar',
    resultsDesc:
      "University.uz nafaqat ma'lumot, balki haqiqiy yechim beradi. Platforma yordamida yuzlab abituriyentlar o'z maqsadlariga mos keladigan eng to'g'ri va nufuzli ta'lim dargohini tez topishga muvaffaq bo'lmoqda.",
    ctaButton: "Universitetlarni Ko'rish",
  },
  ru: {
    heroTitle: 'University.uz - Наша История и Миссия',
    heroDesc:
      'Мы не просто база данных. Мы - инновационная платформа, созданная для того, чтобы воплощать мечты студентов в жизнь и указывать им правильный путь.',
    storyTitle: 'Цель и История Проекта',
    storyP1:
      'Проект University.uz был запущен в 2024 году с целью цифровизации образовательных услуг и облегчения процесса поступления молодежи в вузы. Сегодня студентам очень сложно выбрать подходящий вариант среди тысяч университетов.',
    storyP2:
      'Наша система собирает важные аспекты из открытых данных и формирует единую интерактивную базу. На платформе удобно представлены рейтинги, цены на контракты, общежития и факультеты более 15 лучших университетов.',
    storyP3:
      'Наша главная цель - сэкономить время и деньги абитуриентов и их родителей, предоставляя достоверную визуальную и текстовую информацию об университетах онлайн.',
    valuesTitle: 'Наши Ценности',
    values: [
      {
        title: 'Прозрачность',
        desc: 'Вся информация, цены на контракты и рейтинги предоставляются открыто, без скрытых деталей.',
        color: '#38bdf8',
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      },
      {
        title: 'Доверие',
        desc: 'Данные основаны на официальных источниках и регулярно обновляются.',
        color: '#10b981',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      },
      {
        title: 'Будущее',
        desc: 'Мы создаем основу для будущей карьеры молодежи и продвигаем современные специальности.',
        color: '#e81cff',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      },
      {
        title: 'Инновации',
        desc: 'Каждый наш процесс усилен современными IT-технологиями и удобным интерфейсом.',
        color: '#f59e0b',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      },
    ],
    authorTitle: 'Автор проекта',
    resultsBadge: 'Итог',
    resultsTitle: 'Результаты',
    resultsDesc:
      'University.uz дает не только информацию, но и готовое решение. С нашей платформой сотни абитуриентов быстро находят наиболее подходящее и престижное учебное заведение.',
    ctaButton: 'Посмотреть университеты',
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = localTexts[language] || localTexts.uz;
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-blob', {
        x: 'random(-40, 40)',
        y: 'random(-40, 40)',
        scale: 'random(0.9, 1.1)',
        duration: 8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 1.5,
      });

      gsap.fromTo(
        '.gsap-fade-up',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          delay: 0.2,
        },
      );
    }, pageRef);

    return () => ctx.revert();
  }, [language]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500"
    >
      <BackgroundGlow />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-20 pb-20">
          <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#38bdf8]/20 rounded-full blur-[100px] hero-blob z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#e81cff]/15 rounded-full blur-[120px] hero-blob z-0"></div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative z-10 text-center max-w-4xl mx-auto gsap-fade-up"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-lg">
                {t.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium mx-auto px-4 max-w-3xl">
                {t.heroDesc}
              </p>
            </motion.div>
          </section>

          <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto gsap-fade-up">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="relative bg-white/5 dark:bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-50"></div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.storyTitle}</h2>

              <div className="space-y-6 text-lg text-gray-300/90 leading-relaxed text-justify">
                <p>{t.storyP1}</p>
                <p className="border-l-4 border-[#38bdf8] pl-6 bg-[#38bdf8]/5 py-3 rounded-r-xl">{t.storyP2}</p>
                <p>{t.storyP3}</p>
              </div>
            </motion.div>
          </section>

          <section className="py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16 gsap-fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.valuesTitle}</h2>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {t.values.map((val) => (
                <motion.div
                  key={val.title}
                  variants={fadeUpVariant}
                  className="group relative bg-white/[0.03] dark:bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] shadow-xl gsap-fade-up"
                >
                  <div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 rounded-3xl transition-colors duration-500 pointer-events-none"
                    style={{ borderBottomColor: val.color }}
                  ></div>

                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${val.color}20`, border: `1px solid ${val.color}40`, color: val.color }}
                  >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{val.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section className="py-16 px-4 sm:px-6 lg:px-10 max-w-3xl mx-auto gsap-fade-up">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
              className="p-10 bg-white dark:bg-black/30 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden text-center mx-auto"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-50"></div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t.authorTitle}</h2>

              <div className="flex flex-col items-center justify-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#38bdf8]/30 bg-[#38bdf8]/10 text-3xl font-bold text-[#38bdf8] shadow-lg">
                  N
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Nabiev Abduvohid</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#38bdf8] font-medium">Full-stack Developer & Designer</p>
                <div className="w-16 h-px bg-gray-300 dark:bg-gray-700 my-6"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-center italic">
                  "Ushbu platforma O'zbekistondagi abituriyentlar uchun oliy ta'lim muassasalarini tanlash, kontrakt narxlari bilan tanishish va o'z imkoniyatlarini kalkulyator orqali hisoblashda yordam berish uchun yaratilgan shaxshiy loyihadir."
                </p>
              </div>
            </motion.div>
          </section>

          <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto text-center gsap-fade-up">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
            >
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-widest uppercase">
                {t.resultsBadge}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">{t.resultsTitle}</h2>
              <p className="text-xl md:text-2xl text-gray-300/80 leading-relaxed mb-12">{t.resultsDesc}</p>

              <Link
                to="/universities"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 font-bold text-white transition-all bg-[#38bdf8] hover:bg-[#0284c7] rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:-translate-y-1"
              >
                <span className="text-lg">{t.ctaButton}</span>
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
