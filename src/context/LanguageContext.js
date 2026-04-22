import { createContext, createElement, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

export const translations = {
  uz: {
    about: {
      heroTitle: 'University.uz - Bizning Tarix va Missiya',
      heroDesc: "Biz shunchaki ma'lumotlar bazasi emasmiz. Biz talabalarning orzularini ro'yobga chiqarish va ularga eng to'g'ri yo'lni ko'rsatish uchun yaratilgan innovatsion platformamiz.",
      storyTitle: 'Loyihaning Maqsadi va Tarixi',
      storyP1: "University.uz loyihasi 2024-yilda ta'lim sohasidagi xizmatlarni raqamlashtirish va yoshlarimizning oliy ta'lim muassasalariga kirish jarayonini osonlashtirish maqsadida yaratildi. Bugungi kunda talabalar uchun minglab universitetlar ichidan o'zlariga mosini tanlash juda qiyin masalaga aylangan.",
      storyP2: "Bizning tizim barcha ochiq ma'lumotlar va universitet darchalaridagi eng saralangan jihatlarni tortib, yagona interaktiv ma'lumotlar bazasiga joylashtiradi. Platformada 15 dan ortiq yetakchi universitetlarning reytingi, narx siyosati, yotoqxonasi va fakultetlari bir joyda qulay shaklda ifodalangan.",
      storyP3: "Asosiy maqsadimiz - universitet haqida ishonchli vizual va matnli ma'lumotlarni onlayn taqdim etish orqali abituriyentlarning hamda ularning ota-onalarining vaqtini va mablag'ini tejashdir.",
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
      resultsDesc: "University.uz nafaqat ma'lumot, balki haqiqiy yechim beradi. Platforma yordamida yuzlab abituriyentlar o'z maqsadlariga mos keladigan eng to'g'ri va nufuzli ta'lim dargohini tez topishga muvaffaq bo'lmoqda.",
      ctaButton: "Universitetlarni Ko'rish",
    },
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
        ['Toshkent', "Sun'iy intellekt", '94 trend balli'],
        ['Navoiy', 'Logistika', '89 trend balli'],
        ['Andijon', 'Tibbiyot', '91 trend balli'],
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
    about: {
      heroTitle: 'University.uz - Наша История и Миссия',
      heroDesc: 'Мы не просто база данных. Мы - инновационная платформа, созданная для того, чтобы воплощать мечты студентов в жизнь и указывать им правильный путь.',
      storyTitle: 'Цель и История Проекта',
      storyP1: 'Проект University.uz был запущен в 2024 году с целью цифровизации образовательных услуг и облегчения процесса поступления молодежи в вузы. Сегодня студентам очень сложно выбрать подходящий вариант среди тысяч университетов.',
      storyP2: 'Наша система собирает важные аспекты из открытых данных и формирует единую интерактивную базу. На платформе удобно представлены рейтинги, цены на контракты, общежития и факультеты более 15 лучших университетов.',
      storyP3: 'Наша главная цель - сэкономить время и деньги абитуриентов и их родителей, предоставляя достоверную визуальную и текстовую информацию об университетах онлайн.',
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
      resultsDesc: 'University.uz дает не только информацию, но и готовое решение. С нашей платформой сотни абитуриентов быстро находят наиболее подходящее и престижное учебное заведение.',
      ctaButton: 'Посмотреть университеты',
    },
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
