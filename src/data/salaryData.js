export const salaryData = [
  {
    id: "it",
    names: {
      uz: "IT va Dasturlash (Web, AI, Kiberxavfsizlik)",
      ru: "IT и разработка (Web, AI, кибербезопасность)",
    },
    multiplier: 1,
    matchedUnis: ["inha", "tuit", "amity", "turin", "newuu"]
  },
  {
    id: "finance",
    names: {
      uz: "Iqtisodiyot va Moliya (Bank, Audit)",
      ru: "Экономика и финансы (банк, аудит)",
    },
    multiplier: 0.82,
    matchedUnis: ["wiut", "tsue", "mdis", "samdu"]
  },
  {
    id: "medicine",
    names: {
      uz: "Tibbiyot (Davlat va xususiy klinikalar)",
      ru: "Медицина (государственные и частные клиники)",
    },
    multiplier: 0.9,
    matchedUnis: ["akfa", "samdu"] // If more medical unis existed, they'd go here
  },
  {
    id: "education",
    names: {
      uz: "Ta'lim va Pedagogika (Maktab, universitet)",
      ru: "Образование и педагогика (школа, университет)",
    },
    multiplier: 0.58,
    matchedUnis: ["tspu", "samdu", "namdu", "buxdu", "ferdu"]
  },
  {
    id: "law",
    names: {
      uz: "Huquqshunoslik va yuridik soha",
      ru: "Юриспруденция и правовая сфера",
    },
    multiplier: 0.86,
    matchedUnis: ["tsul", "wiut", "jizpi"]
  }
];

export const englishLevels = [
  {
    id: "none",
    labels: {
      uz: "Hali yo'q / Boshlang'ich",
      ru: "Пока нет / Начальный уровень",
    },
    multiplier: 1,
  },
  {
    id: "b1",
    labels: {
      uz: "CEFR B1 / IELTS 5.0",
      ru: "CEFR B1 / IELTS 5.0",
    },
    multiplier: 1.08,
  },
  {
    id: "b2",
    labels: {
      uz: "CEFR B2 / IELTS 6.0",
      ru: "CEFR B2 / IELTS 6.0",
    },
    multiplier: 1.18,
  },
  {
    id: "c1",
    labels: {
      uz: "CEFR C1 / IELTS 7.0+",
      ru: "CEFR C1 / IELTS 7.0+",
    },
    multiplier: 1.3,
  },
];

export const additionalSkills = [
  {
    id: "soft",
    labels: {
      uz: "Soft skills (muloqot, taqdimot)",
      ru: "Soft skills (коммуникация, презентация)",
    },
    percentBonus: 0.08,
    flatBonus: 0,
  },
  {
    id: "team",
    labels: {
      uz: "Jamoaviy ishlash",
      ru: "Командная работа",
    },
    percentBonus: 0.05,
    flatBonus: 0,
  },
  {
    id: "leadership",
    labels: {
      uz: "Yetakchilik va menejment",
      ru: "Лидерство и менеджмент",
    },
    percentBonus: 0.12,
    flatBonus: 150,
  },
  {
    id: "tech",
    labels: {
      uz: "Qo'shimcha texnik sertifikatlar",
      ru: "Дополнительные технические сертификаты",
    },
    percentBonus: 0.1,
    flatBonus: 120,
  },
];
