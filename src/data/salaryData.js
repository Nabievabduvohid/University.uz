export const salaryData = [
  {
    id: "it",
    name: "IT va Dasturlash (Web, AI, Kiberxavfsizlik)",
    baseSalary: [6, 12], // Junior (mln so'm)
    seniorSalary: [25, 60], // 5 yil+ (mln so'm)
    matchedUnis: ["inha", "tuit", "amity", "turin", "newuu"]
  },
  {
    id: "finance",
    name: "Iqtisodiyot va Moliya (Banka, Audit)",
    baseSalary: [4, 8],
    seniorSalary: [15, 35],
    matchedUnis: ["wiut", "tsue", "mdis", "samdu"]
  },
  {
    id: "medicine",
    name: "Tibbiyot (Davlat va Xususiy klinikalar)",
    baseSalary: [3, 6],
    seniorSalary: [12, 40],
    matchedUnis: ["akfa", "samdu"] // If more medical unis existed, they'd go here
  },
  {
    id: "education",
    name: "Ta'lim va Pedagogika (Maktab, Universitet)",
    baseSalary: [3.5, 7],
    seniorSalary: [8, 15],
    matchedUnis: ["tspu", "samdu", "namdu", "buxdu", "ferdu"]
  },
  {
    id: "law",
    name: "Huquqshunoslik va Yuridik soha",
    baseSalary: [4, 7],
    seniorSalary: [18, 50],
    matchedUnis: ["tsul", "wiut", "jizpi"]
  }
];

export const englishLevels = [
  { id: "none", label: "Hali yo'q / Boshlang'ich", multiplier: 1.0 },
  { id: "b1", label: "CEFR B1 / IELTS 5.0", multiplier: 1.15 },
  { id: "b2", label: "CEFR B2 / IELTS 6.0", multiplier: 1.35 },
  { id: "c1", label: "CEFR C1 / IELTS 7.0+", multiplier: 1.6 },
];

export const additionalSkills = [
  { id: "soft", label: "Soft Skills (Muloqot, taqdimot qilish)", bonus: 1.1 },
  { id: "team", label: "Jamoaviy ishlash (Teamwork)", bonus: 1.05 },
  { id: "leadership", label: "Yetakchilik va menejment", bonus: 1.2 },
  { id: "tech", label: "Qo'shimcha texnik sertifikatlar", bonus: 1.15 },
];
