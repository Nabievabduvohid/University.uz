export const getDocumentsForUni = (uni) => {
  const common = [
    { id: 'passport', name: "Pasport yoxud ID Karta nusxasi", description: "Asl nusxadan aniq skaner (PDF) qilingan fayl." },
    { id: 'photo', name: "3x4 O'lchamdagi Fotosurat", description: "Oq fonda, oxirgi 3 oy ichida tushirilgan sifatli surat." },
    { id: 'diploma', name: "Shahodatnoma / Diplom", description: "O'rta yoki o'rta-maxsus ta'limni tugatganlik haqidagi hujjat ilovasi bilan." },
  ];

  const international = [
    { id: 'ielts', name: "IELTS / TOEFL / CEFR Sertifikati", description: "Kamida B2 (IELTS 5.5+) darajasidagi xalqaro til sertifikati." },
    { id: 'motivation', name: "Motivatsion Xat (Motivation Letter)", description: "Maqsad va intilishlarni ochib beruvchi maxsus xat (Ingliz tilida 400 so'z)." },
    { id: 'recommendation', name: "Tavsiyanoma (Reference Letter)", description: "Umumta'lim maktab direktori yoki ustozlardan yozma tavsiyanoma (Muhr bilan)." },
    { id: 'portfolio', name: "Shaxsiy Yutuqlar (Portfolio)", description: "Olimpiada, tanlov va grandlarni tasdiqlovchi faxriy yorliqlar nusxasi." }
  ];

  const local = [
    { id: 'med_cert', name: "086-U Tibbiy Ma'lumotnoma", description: "Yashash joyi poliklinikasidan salomatlik haqidagi tasdiqlangan hujjat." },
    { id: 'dtm', name: "DTM (BMBA) Kvitansiyasi", description: "Test sinovlarida qatnashish uchun to'lov qilinganlik yoki davlat xizmatlari javobi." },
  ];

  const intUnis = ['wiut', 'inha', 'turin', 'mdis', 'amity', 'akfa', 'newuu'];
  
  if (intUnis.includes(uni.id)) {
    return [...common, ...international];
  } else {
    return [...common, ...local];
  }
};
