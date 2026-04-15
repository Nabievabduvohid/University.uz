import { createContext, createElement, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const translations = {
  uz: {
    navbar: {
      brandTagline: 'Premium taʼlim platformasi',
      home: 'Bosh sahifa',
      universities: 'Universitetlar',
      about: 'Afzalliklar',
      contact: 'Aloqa',
      startApplication: 'Ariza topshirish',
      languageLabel: 'Til',
      themeLabel: 'Mavzu',
    },
    hero: {
      badge: 'O‘zbekiston talabalari uchun premium qabul ekotizimi',
      title: "Kelajak ta'limi endi bitta premium makonda",
      description:
        "University.uz eng kuchli universitetlar, qabul muddatlari, grant imkoniyatlari va yo'nalishlarni yagona premium interfeysda birlashtiradi.",
      primaryCta: "Platformani ko'rish",
      secondaryCta: "Qabul bo'yicha maslahat",
      highlights: [
        ['95%', 'premium saralash aniqligi'],
        ['24/7', 'konsultant yordami'],
        ['AI+', 'aqlli moslashtirish'],
      ],
      liveRanking: 'Jonli reyting',
      topDestinations: '2026 uchun top yo‘nalishlar',
      realtime: 'Real vaqt',
      destinations: [
        ['Toshkent', 'Raqamli muhandislik', '92 moslik balli'],
        ['Samarqand', 'Biznes tahlili', '87 moslik balli'],
      ],
    },
    stats: {
      eyebrow: 'Premium ko‘rsatkichlar',
      title: 'Taʼlim bozoridagi ishonchni raqamlar bilan ko‘rsatamiz',
      description:
        "Hamkor oliygohlar, hujjat topshirish yordami va doimiy konsultatsiya bilan premium qabul tajribasini quramiz.",
      features: [
        'Premium hamkorlar tanlovi',
        'Glassmorphism interfeys',
        'Viewport animatsiyali hisoblagichlar',
      ],
      items: [
        {
          value: 15,
          suffix: '+',
          label: 'Hamkor Universitetlar',
          description: 'Premium hamkor oliygohlar roʻyxati.',
        },
        {
          value: 1200,
          suffix: '+',
          label: 'Talabalarga yordam',
          description: 'Hujjat topshirishda ko‘maklashganlar.',
        },
        {
          value: 92,
          suffix: '%',
          label: 'Qabul ko‘rsatkichi',
          description: 'Muvaffaqiyatli roʻyxatdan oʻtish.',
        },
        {
          value: 24,
          suffix: '/7',
          label: 'Qoʻllab-quvvatlash',
          description: 'Har doim aloqada bo‘lgan konsultantlar.',
        },
      ],
    },
    card: {
      description:
        "Premium qabul strategiyasi, kuchli fakultetlar va xalqaro yo'nalishlar bo'yicha batafsil ma'lumot oling.",
      action: "Batafsil ko'rish",
    },
  },
  ru: {
    navbar: {
      brandTagline: 'Премиальная образовательная платформа',
      home: 'Главная',
      universities: 'Университеты',
      about: 'Преимущества',
      contact: 'Контакты',
      startApplication: 'Подать заявку',
      languageLabel: 'Язык',
      themeLabel: 'Тема',
    },
    hero: {
      badge: 'Премиальная экосистема поступления для студентов Узбекистана',
      title: 'Будущее образования теперь в одном премиальном пространстве',
      description:
        'University.uz объединяет сильнейшие университеты, дедлайны поступления, гранты и направления в одном премиальном интерфейсе.',
      primaryCta: 'Посмотреть платформу',
      secondaryCta: 'Получить консультацию',
      highlights: [
        ['95%', 'точность премиального подбора'],
        ['24/7', 'поддержка консультантов'],
        ['AI+', 'умное сопоставление'],
      ],
      liveRanking: 'Живой рейтинг',
      topDestinations: 'Топ-направления на 2026 год',
      realtime: 'В реальном времени',
      destinations: [
        ['Ташкент', 'Цифровая инженерия', '92 балла совпадения'],
        ['Самарканд', 'Бизнес-аналитика', '87 баллов совпадения'],
      ],
    },
    stats: {
      eyebrow: 'Премиальные показатели',
      title: 'Показываем доверие к образовательному сервису в цифрах',
      description:
        'Подбираем сильные вузы, сопровождаем документы и держим постоянную связь с абитуриентами в премиальном формате.',
      features: [
        'Отбор премиальных партнёров',
        'Glassmorphism-интерфейс',
        'Счётчики с анимацией во viewport',
      ],
      items: [
        {
          value: 15,
          suffix: '+',
          label: 'Университетов-партнёров',
          description: 'Список премиальных вузов-партнёров.',
        },
        {
          value: 1200,
          suffix: '+',
          label: 'Студентам помогли',
          description: 'Сопровождение при подаче документов.',
        },
        {
          value: 92,
          suffix: '%',
          label: 'Показатель поступления',
          description: 'Успешное завершение регистрации.',
        },
        {
          value: 24,
          suffix: '/7',
          label: 'Поддержка',
          description: 'Консультанты всегда на связи.',
        },
      ],
    },
    card: {
      description:
        'Изучите премиальную стратегию поступления, сильные факультеты и международные направления в одном месте.',
      action: 'Подробнее',
    },
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('uz');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((currentLanguage) => (currentLanguage === 'uz' ? 'ru' : 'uz')),
      t: translations[language],
    }),
    [language],
  );

  return createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
