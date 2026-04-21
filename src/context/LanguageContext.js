import { createContext, createElement, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const translations = {
  uz: {
    navbar: {
      brandTagline: 'Premium taʼlim platformasi',
      home: 'Bosh sahifa',
      universities: 'Universitetlar',
      about: 'Biz haqimizda',
      quiz: 'Test topshirish',
      calculator: 'Kalkulyator',
      compare: 'Solishtirish',
      login: 'Kirish',
      register: "Ro'yxatdan o'tish",
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
    topUniversities: {
      title1: 'Top 5 ',
      title2: 'Universitetlar',
      desc: "Talabalar tomonidan eng yuqori baholangan, ta'lim sifati va sharoitlari bilan ajralib turadigan yetakchi oliygohlar.",
      moreInfo: "Batafsil ma'lumot",
      viewAll: "Barcha universitetlarni ko'rish"
    },
    quiz: {
      title: "O'zingizni sinab ko'ring",
      desc: "Quyidagi qiziqarli testlardan birini tanlang va o'zingizga eng mos keladigan ta'lim yo'nalishi va universitetlarni kashf eting. Har bir test 10 ta savoldan iborat.",
      startTest: "Testni boshlash (10 savol)",
      backToMenu: "Asosiy menuga qaytish",
      resultsTitle: "Test Natijalari",
      totalScore: "Umumiy Ball:",
      recommendations: "Siz uchun maxsus tavsiyalar:",
      details: "Batafsil",
      noUniversities: "Hech qanday universitet topilmadi.",
      retake: "Boshqa test topshirish",
      saveResult: "Natijani Profilga saqlash"
    },
    calculator: {
      title: "Kasbiy Maosh Kalkulyatori",
      desc: "Siz tanlagan yo'nalish, til bilish darajasi va tajriba kabi omillarga asoslanib kelajakdagi o'rtacha potentsial daromadingizni kashf qiling.",
      selectField: "Yo'nalishni tanlang",
      experience: "Tajriba darajasi",
      junior: "Boshlang'ich (Junior 0-2 yil)",
      senior: "Tajribali (Middle/Senior 5+ yil)",
      englishLabel: "Ingliz tili darajasi",
      additionalSkills: "Qo'shimcha Ko'nikmalar",
      potentialIncome: "Sizning potensial daromadingiz:",
      perMonth: "mln / oy",
      zeroMln: "0 mln",
      maxSector: "Maksimal Sektor",
      disclaimer: "Ushbu qiymatlar O'zbekiston mehnat bozori, top kompaniyalar va xalqaro frilans daromadlari tahlili asosida generatsiya qilindi.",
      recommendationsTitle: "Ushbu maoshga erishish uchun...",
      recommendationsDesc: "Soha kelajagi porloq. Daromadingizni maksimal darajaga olib chiqish uchun quyidagi nufuzli oliygohlarning tegishli fakultetlariga topshirishni rejalashtiring.",
      notFound: "Xato: Ushbu soha bo'yicha maxsus muassasa topilmadi."
    },
    compare: {
      title: "Solishtirish Markazi",
      desc: "Universitetlarning parametrlari boyicha eng mosini toping.",
      clearAll: "Hammasini tozalash",
      emptyTitle: "Hali hech qanday universitet tanlanmadi",
      emptyDesc: "Universitetlarni solishtirish uchun \"Universitetlar\" bo'limidan sizga yoqqanlarini tanlang. (Maksimal 3 ta).",
      goToCatalog: "Katalogga o'tish",
      contract: "Yillik Kontrakt Narxi",
      rating: "Dunyo / Mahalliy Reyting",
      faculties: "Fakultetlar Soni",
      dormitory: "Talabalar Yotoqxonasi",
      dormitoryYes: "Bor (Davlat narxida)",
      dormitoryNo: "Yo'q (Xususiy, yordamlashiladi)",
      international: "Xalqaro toifa",
      national: "Milliy daraja",
      itemsCount: "ta",
      mainDirection: "Asosiy yo'nalish",
      details: "Batafsil",
      emptySlot: "Joy bo'sh",
      select: "Tanlash",
      remove: "Olib tashlash"
    }
  },
  ru: {
    navbar: {
      brandTagline: 'Премиальная образовательная платформа',
      home: 'Главная',
      universities: 'Университеты',
      about: 'О нас',
      quiz: 'Пройти тест',
      calculator: 'Калькулятор',
      compare: 'Сравнить',
      login: 'Войти',
      register: 'Регистрация',
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
    topUniversities: {
      title1: 'Топ 5 ',
      title2: 'Университетов',
      desc: "Ведущие университеты с самыми высокими оценками студентов, отличающиеся качеством образования и условиями.",
      moreInfo: "Подробная информация",
      viewAll: "Посмотреть все университеты"
    },
    quiz: {
      title: "Проверьте себя",
      desc: "Выберите один из следующих интересных тестов и откройте для себя направление обучения и университеты, которые вам больше всего подходят. Каждый тест состоит из 10 вопросов.",
      startTest: "Начать тест (10 вопросов)",
      backToMenu: "Вернуться в главное меню",
      resultsTitle: "Результаты теста",
      totalScore: "Общий балл:",
      recommendations: "Специальные рекомендации для вас:",
      details: "Подробнее",
      noUniversities: "Университеты не найдены.",
      retake: "Пройти другой тест",
      saveResult: "Сохранить результат в профиль"
    },
    calculator: {
      title: "Калькулятор профессиональной зарплаты",
      desc: "Узнайте свой средний потенциальный доход в будущем с учетом выбранного направления, уровня владения языком и опыта.",
      selectField: "Выберите направление",
      experience: "Уровень опыта",
      junior: "Начинающий (Junior 0-2 года)",
      senior: "Опытный (Middle/Senior 5+ лет)",
      englishLabel: "Уровень английского языка",
      additionalSkills: "Дополнительные навыки",
      potentialIncome: "Ваш потенциальный доход:",
      perMonth: "млн / месяц",
      zeroMln: "0 млн",
      maxSector: "Максимальный сектор",
      disclaimer: "Эти значения сгенерированы на основе анализа рынка труда Узбекистана, топовых компаний и доходов международных фрилансеров.",
      recommendationsTitle: "Чтобы достичь этой зарплаты...",
      recommendationsDesc: "Будущее этой сферы блестяще. Чтобы максимизировать доход, планируйте поступление на соответствующие факультеты следующих престижных университетов.",
      notFound: "Ошибка: Специализированное учреждение в этой области не найдено."
    },
    compare: {
      title: "Центр сравнения",
      desc: "Найдите наиболее подходящий университет по параметрам.",
      clearAll: "Очистить все",
      emptyTitle: "Пока не выбран ни один университет",
      emptyDesc: "Для сравнения выберите понравившиеся университеты в разделе «Университеты». (Максимум 3).",
      goToCatalog: "Перейти в каталог",
      contract: "Годовая стоимость контракта",
      rating: "Мировой / Местный рейтинг",
      faculties: "Количество факультетов",
      dormitory: "Студенческое общежитие",
      dormitoryYes: "Есть (По гос. цене)",
      dormitoryNo: "Нет (Частное, с поддержкой)",
      international: "Международная категория",
      national: "Национальный уровень",
      itemsCount: "шт",
      mainDirection: "Основное направление",
      details: "Подробнее",
      emptySlot: "Свободное место",
      select: "Выбрать",
      remove: "Удалить"
    }
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
