export const quizzes = [
  {
    id: "career",
    title: "Kasbga Yo'naltirish Testi",
    description: "Sizning xarakteringiz va qiziqishlaringizga mos keladigan sohalar aniqlanadi.",
    icon: "🎯",
    color: "#e81cff",
    questions: [
      { question: "Muloqot qilish siz uchun...", options: [{ text: "Juda qiyin, yolg'izlik yaxshi", points: 1 }, { text: "Faqat kerak bo'lsa muloqot qilaman", points: 2 }, { text: "Yangi odamlar bilan tez til topishaman", points: 3 }, { text: "Hayotimning asosiy qismi, men doim davradaman", points: 4 }] },
      { question: "Bo'sh vaqtingizda nima qilishni yoqtirasiz?", options: [{ text: "O'z ustimda ishlash, dasturlash yoki dizayn", points: 1 }, { text: "Kitob o'qish yoki yangiliklar yozish", points: 2 }, { text: "Sport bilan shug'ullanish, tabiatga chiqish", points: 3 }, { text: "Do'stlarim bilan tadbirlar tashkillashtirish", points: 4 }] },
      { question: "Qiyin muammoga duch kelsangiz...", options: [{ text: "Masalani qismlarga bo'lib mantiqiy yechaman", points: 1 }, { text: "Tadqiqot o'tkazib, ma'lumotlar to'playman", points: 2 }, { text: "O'z hissiyotlarimga tayanib harakat qilaman", points: 3 }, { text: "Boshqalar bilan maslahatlashib, jamoaviy yechim izlayman", points: 4 }] },
      { question: "Maktabda qaysi fan sizga yaqinroq?", options: [{ text: "Matematika / Informatika", points: 1 }, { text: "Tarix / Adabiyot", points: 2 }, { text: "Biologiya / Kimyo", points: 3 }, { text: "Chet tillari / Iqtisod", points: 4 }] },
      { question: "Kompyuter qarshisida uzoq o'tirish...", options: [{ text: "Men uchun ajoyib, qanday qilib vaqt o'tganini bilmayman", points: 1 }, { text: "Kerak bo'lsa o'tiraman, ammo tabiat ko'proq yoqadi", points: 2 }, { text: "Zerikarli, men harakatda bo'lishni yoqtiraman", points: 3 }, { text: "Odamlar bilan yuzma-yuz suhbatlashishni afzal ko'raman", points: 4 }] },
      { question: "Tartib va intizom haqida fikringiz?", options: [{ text: "Har bir narsa to'g'ri tizimda bo'lishi shart", points: 1 }, { text: "Kreativ algoritm orqali natija qilish muhim", points: 2 }, { text: "Dinamik, o'zgaruvchan vaziyatlarda yaxshiroq ishlayman", points: 3 }, { text: "Qat'iy qoidalarni yoqtirmayman, omma nima desa shu", points: 4 }] },
      { question: "Biror loyiha qilsangiz qanday vazifani tanlaysiz?", options: [{ text: "Dasturlash yoki texnik ta'minot", points: 1 }, { text: "G'oyalarni yozish yoki kontent tayyorlash", points: 2 }, { text: "Tajribalar o'tkazish yoki kuzatish", points: 3 }, { text: "Jamoani boshqarish va taqdimot qilish", points: 4 }] },
      { question: "Natija nima?", options: [{ text: "Aniq faktlar va raqamlar", points: 1 }, { text: "O'zlashtirilgan bilim", points: 2 }, { text: "Odamlarga keltirgan sog'lik yoki quvonch", points: 3 }, { text: "Boshqalar sizni qanday baholashi", points: 4 }] },
      { question: "O'z biznesingiz bo'lsa u...", options: [{ text: "Texnologik startap bo'lardi", points: 1 }, { text: "Ta'lim yoki media platformasi", points: 2 }, { text: "Sog'liqni saqlash yoki tadqiqot", points: 3 }, { text: "Yirik menejment korxonasi", points: 4 }] },
      { question: "Kelajakni qanday ko'rasiz?", options: [{ text: "To'liq avtomatlashtirilgan tizim", points: 1 }, { text: "Yangi dostonlar va san'at asarlari", points: 2 }, { text: "Ekologik va tibbiy jihatdan mukammal", points: 3 }, { text: "Butun dunyo insonlari ulkan tarmoqda birlashgan", points: 4 }] }
    ],
    results: [
       { min: 10, max: 16, text: "Sizda mutlaqo Raqamli Asr mutaxassisi (IT / Muhandislik) salohiyati yashiringan.", matchedUniversities: ['tuit', 'inha', 'turin', 'amity'] },
       { min: 17, max: 22, text: "Gumanitar yo'nalish, dizayn yoki media sizga juda ham to'g'ri keladi.", matchedUniversities: ['samdu', 'buxdu', 'tspu'] },
       { min: 23, max: 28, text: "Tadqiqotchi, shifokor va ekologiya. Tabiiy fanlarga qiziqishingiz baland.", matchedUniversities: ['akfa', 'samdu', 'newuu'] },
       { min: 29, max: 34, text: "Ijtimoiy diplomatiya va inson huquqlari. Tartib o'rnatish sizning qo'lingizdan keladi.", matchedUniversities: ['tsul', 'wiut'] },
       { min: 35, max: 40, text: "Tadbirkor, Boshqaruvchi, Yetakchi! Siz Ommaviy menejment va Moliya sohalarida yulduz bo'lasiz.", matchedUniversities: ['wiut', 'tsue', 'mdis'] }
    ]
  },
  {
    id: "grant",
    title: "Grant Ehtimoli Testi",
    description: "Hozirgi bilimingiz qaysi o'qish tizimi uchun yetarli ekanini chamalab beradi.",
    icon: "🎓",
    color: "#38bdf8",
    questions: [
      { question: "Maktab/Litseydagi o'rtacha baholaringiz?", options: [{ text: "Past, asosan '3' va '2'", points: 1 }, { text: "O'rtacha, 3-4 oralig'ida", points: 2 }, { text: "Yaxshi (4-5)", points: 3 }, { text: "A'lo, barcha fanlardan 5", points: 4 }] },
      { question: "Mantiqiy-matematik testlar ishlashda...", options: [{ text: "Juda qiyinalaman", points: 1 }, { text: "Oddiy misollarga tushunaman", points: 2 }, { text: "Yaxshi, ammo qiyinlari o'ylantiradi", points: 3 }, { text: "Juda kuchliman, doim to'liq yechaman", points: 4 }] },
      { question: "Ingliz tili IELTS sertifikatingiz bormi?", options: [{ text: "Yo'q, hali boshlamaganman", points: 1 }, { text: "5.5 atrofida (Pre-Int/Int)", points: 2 }, { text: "6.0 - 6.5 (Upper-Int)", points: 3 }, { text: "IELTS 7.0 yoki undan yuqori", points: 4 }] },
      { question: "Kutubxonaga haftada necha marta borasiz?", options: [{ text: "Hech qachon", points: 1 }, { text: "Bir marta yoki vaqti bo'lsa", points: 2 }, { text: "Deyarli haftasiga 2-3 marta", points: 3 }, { text: "Kutubxona men uchun ikkinchi uy!", points: 4 }] },
      { question: "Maqsad qo'ysangiz unga yetish uchun...", options: [{ text: "Tez fikrimdan qaytaman", points: 1 }, { text: "Biroz harakat qilaman, agar qiyin bo'lsa qo'yaman", points: 2 }, { text: "Yaxshi harakat qilaman, ba'zida chalg'iyman", points: 3 }, { text: "Umuman uyqum kelmaydi, tinimsiz intilaman", points: 4 }] },
      { question: "Fan olimpiadalarida tajribangiz bormi?", options: [{ text: "Hech qachon qatnashmaganman", points: 1 }, { text: "Maktab bosqichida xolos", points: 2 }, { text: "Tuman yoki Viloyat bosqichida yaxshi natijalarim bor", points: 3 }, { text: "Respublika / Xalqaro darajada faxrli o'rin", points: 4 }] },
      { question: "Xalqaro standartlashtirilgan testlar (SAT/GMAT)?", options: [{ text: "Ular nimaligini bilmayman", points: 1 }, { text: "Eshitganman, o'qish qiyin", points: 2 }, { text: "Tayyorgarlik ko'rmoqdaman", points: 3 }, { text: "Sertifikatim allaqachon tayyor va ballar yuqori", points: 4 }] },
      { question: "Kitob yoki darslik o'qish tezligingiz?", options: [{ text: "Sekin tushunaman", points: 1 }, { text: "O'rtacha", points: 2 }, { text: "Ancha tez o'qiyman va tushlay olaman", points: 3 }, { text: "Yodingizda hamma narsa muhrlanadi, a'lo xotira", points: 4 }] },
      { question: "Universitet grantidan nima aniq kutyapsiz?", options: [{ text: "Prosta arzon bo'lsa bo'ldi", points: 1 }, { text: "Yarmini qoplab berishsa ham yaxshi", points: 2 }, { text: "O'qishim bepul bo'lsa imkoniyatim bor", points: 3 }, { text: "100% yopilishi va oylik stipendiya ham kutaman!", points: 4 }] },
      { question: "Mustaqil IT / Zamonaviy malaka bilimlaringiz?", options: [{ text: "Faqat telefon / instagram", points: 1 }, { text: "Word / Excel ni tushunaman", points: 2 }, { text: "Boshlang'ich dasturlash/dizayn", points: 3 }, { text: "O'z shaxsiy portfelim/loyihalarim bor", points: 4 }] }
    ],
    results: [
       { min: 10, max: 16, text: "Siz uchun asosan super-kontrakt yechimlari ustuvor bo'lishi mumkin. Hali tayyorgarlikka kuch kerak.", matchedUniversities: ['jizpi', 'samdu'] },
       { min: 17, max: 22, text: "O'rtacha bilim bazasi. Ayrim xususiy OTM lardan chegirmalar olishingiz ehtimoli bor.", matchedUniversities: ['mdis', 'amity'] },
       { min: 23, max: 28, text: "Yaxshi daraja! Davlat granti yoki universitetning ichki kvotalarida imkoniyatingiz 50%.", matchedUniversities: ['tuit', 'namdu', 'ferdu'] },
       { min: 29, max: 34, text: "A'lo! Davlat grantlari, mahalliy reytingi yuqori OTMlarda albatta joyingiz bor.", matchedUniversities: ['tsue', 'tsul', 'inha', 'tspu'] },
       { min: 35, max: 40, text: "100% Top Grandlar uchun mosziz! Siz xalqaro, yangi tizimli Universitetlardan osongina stipendiya olishingiz mumkin.", matchedUniversities: ['newuu', 'wiut', 'inha', 'akfa'] }
    ]
  },
  {
    id: "match",
    title: "Universitet Mosligi Testi",
    description: "Turmush tarzingiz, sharoitlaringiz yuzasidan 100% ideal platformani qidrib topamiz.",
    icon: "🏛️",
    color: "#10b981",
    questions: [
      { question: "Talabalar yotoqxonasi (Obshijitiya) kerakmi?", options: [{ text: "Umuman muhim emas, poytaxtda o'z uyim bor", points: 1 }, { text: "Ijarada yashay olaman", points: 2 }, { text: "Yaxshi yotoqxona o'qish uchun zarur", points: 3 }, { text: "Yotoqxonasi bepul yoki super arzon bo'lishi shart", points: 4 }] },
      { question: "Universitet binosining zamonaviyligi...", options: [{ text: "O'ta hashamatli kampuslar faqat men uchun", points: 1 }, { text: "Smart doskalar, yaxshi binolar qiziq", points: 2 }, { text: "Normativ o'quv xonalari ham bo'laveradi", points: 3 }, { text: "Hech qanday farqi yo'q, asosiy dars kuchli bo'lsin", points: 4 }] },
      { question: "Karyeraga o'tish qanday bo'lishi kerak?", options: [{ text: "Eng zo'r xalqaro korporatsiyalarda ish", points: 1 }, { text: "Xususiy tijorat moliya korxonalari", points: 2 }, { text: "Katta zavod yoki muhandislik sohalari", points: 3 }, { text: "O'qituvchilik yoki ijtimoiy tashkilot", points: 4 }] },
      { question: "Ta'lim uchun oilaning moliyaviy imkoniyati (yiliga)?", options: [{ text: "Cheklanmagan (eng yuksak ta'lim)", points: 1 }, { text: "40 - 50 mln so'm / yiliga bemalol", points: 2 }, { text: "10 - 20 mln atrofida", points: 3 }, { text: "Sharoitim faqat byudjetni taqazo qiladi", points: 4 }] },
      { question: "Talabalar bilan inglizchada suhbat...", options: [{ text: "Har kuni xohlayman, butun kampus inglizcha bo'lsin", points: 1 }, { text: "Darslarda bo'lsa yetarli", points: 2 }, { text: "Aralash tillar afzal", points: 3 }, { text: "Faqat mahalliy til (O'zbekcha) bo'lishi shart", points: 4 }] },
      { question: "Ta'lim oladigan shahar?", options: [{ text: "Albatta Toshkent shahri", points: 1 }, { text: "Sifatli bo'lsa Markaziy ta'lim maskanlaridan biri (Toshkent, Samarqand)", points: 2 }, { text: "Vodiy / Boshqa rivojlangan shahar", points: 3 }, { text: "Uyimga eng yaqin viloyat", points: 4 }] },
      { question: "O'qishning amaliy ustunligi", options: [{ text: "Katta investitsiya fondlariga ulanish", points: 1 }, { text: "Biznesni noldan qurish", points: 2 }, { text: "Tibbiyot va haqiqiy laboratoriya markazi", points: 3 }, { text: "Mustahkam pedagogik tizim va xotirjam maktab", points: 4 }] },
      { question: "Moddiy texnika bazasi?", options: [{ text: "Apple Mac kompyuterlari bo'lishi kerak", points: 1 }, { text: "Zamonaviy IT laboratoriyalari kerak", points: 2 }, { text: "Kutubxona boy bo'lsa yetarli", points: 3 }, { text: "Hech narsa muhim emas, odam o'qisa bo'ldi", points: 4 }] },
      { question: "Ta'lim shakli bo'yicha?", options: [{ text: "Faqat Kunduzgi (Xalqaro)", points: 1 }, { text: "Kunduzgi va Kechki variantlar", points: 2 }, { text: "Sirtqi yoki masofaviy imkoni asqotadi", points: 3 }, { text: "O'qituvchilik qilib sirtqi bo'lishi", points: 4 }] },
      { question: "Asosiy motivatsiya - Universitet sizga nima berishi kerak?", options: [{ text: "Diplomi dunyoga o'tishi kerak", points: 1 }, { text: "Tez orada yaxshi maosh oluvchi ishchi", points: 2 }, { text: "Qadrli muhandis & Usta unvoni", points: 3 }, { text: "Qiyinchiliksiz va xotirjam Davlat diplomi", points: 4 }] }
    ],
    results: [
       { min: 10, max: 16, text: "Siz mutlaqo Xususiy / Xalqaro OTM lar uchun formatsiz. Yuqori hashamat va til talablariga mos muassasalar:", matchedUniversities: ['wiut', 'inha', 'akfa'] },
       { min: 17, max: 22, text: "Siz Xalqaro muhit hamda qulay sharoitni yoqtirasiz, ko'pincha texnik yo'nalishli xususiy yoki yarim davlat filiallar:.", matchedUniversities: ['amity', 'mdis', 'turin', 'newuu'] },
       { min: 23, max: 28, text: "Poytaxtdagi kuchli amaliy va laboratorik bazasi bor katta davlat universitetlari, yotoqxona ham ko'p hollarda bor.", matchedUniversities: ['tuit', 'tsue', 'tsul'] },
       { min: 29, max: 34, text: "Viloyat miqyosida barqaror obro'ga ega kuchli amaliy markazlar, arzonroq kontrakt imkoniyatlari bilan.", matchedUniversities: ['samdu', 'jizpi', 'namdu'] },
       { min: 35, max: 40, text: "Sof mahalliy tillardagi va mintaqaviy muassasalar tumaningizga yaqin hamda byudjetbop hisoblanadi.", matchedUniversities: ['ferdu', 'buxdu', 'tspu'] }
    ]
  },
  {
    id: "english",
    title: "Ingliz tili Darajasi (Tezkor 10-Q)",
    description: "Ingliz tili gramatikangiz va qobiliyatingiz qanchalik mukammal ekanini tekshiramiz.",
    icon: "🌍",
    color: "#f59e0b",
    questions: [
      { question: "Choose the correct: 'I ___ to the store yesterday.'", options: [{ text: "goted", points: 1 }, { text: "go", points: 2 }, { text: "gone", points: 3 }, { text: "went", points: 4 }] },
      { question: "'She plays tennis very ___.'", options: [{ text: "good", points: 1 }, { text: "gooder", points: 2 }, { text: "well", points: 4 }, { text: "fine", points: 3 }] },
      { question: "I ___ a bath when the phone rang.", options: [{ text: "had", points: 2 }, { text: "was having", points: 4 }, { text: "am having", points: 1 }, { text: "have", points: 1 }] },
      { question: "Which is a synonym for 'Huge'?", options: [{ text: "Tiny", points: 1 }, { text: "Fast", points: 2 }, { text: "Expensive", points: 3 }, { text: "Enormous", points: 4 }] },
      { question: "Choose the right conditional: 'If I ___ a million dollars, I would travel.'", options: [{ text: "have", points: 2 }, { text: "had", points: 4 }, { text: "will have", points: 1 }, { text: "having", points: 1 }] },
      { question: "Find error: 'He don't like playing soccer.'", options: [{ text: "Wait, it's correct", points: 1 }, { text: "playing -> play", points: 2 }, { text: "He -> Him", points: 3 }, { text: "don't -> doesn't", points: 4 }] },
      { question: "'By this time next year, I ___ my master’s degree.'", options: [{ text: "will finish", points: 2 }, { text: "have finished", points: 3 }, { text: "will have finished", points: 4 }, { text: "finish", points: 1 }] },
      { question: "What does 'To break the ice' mean?", options: [{ text: "To break completely", points: 1 }, { text: "To be freezing", points: 2 }, { text: "To start a conversation softly", points: 4 }, { text: "To drop a glass", points: 1 }] },
      { question: "Choose preposition: 'I am interested ___ learning Japanese.'", options: [{ text: "for", points: 2 }, { text: "about", points: 3 }, { text: "in", points: 4 }, { text: "to", points: 1 }] },
      { question: "Advanced Vocabulary: 'The committee was ________ in its decision.'", options: [{ text: "unanimous", points: 4 }, { text: "divide", points: 1 }, { text: "agreeable", points: 3 }, { text: "separating", points: 2 }] }
    ],
    results: [
       { min: 10, max: 16, text: "Sizning darajangiz (A1) Boshlang'ich (Elementary). Tilga ko'proq yondashmagan O'zbek/Rus tili ta'lim muassasalari.", matchedUniversities: ['jizpi', 'namdu', 'ferdu'] },
       { min: 17, max: 22, text: "Sizning darajangiz (A2-B1). O'rtacha muhokamalarga yo'l bor, gumanitar Davlat universitetlari qulay.", matchedUniversities: ['tspu', 'samdu', 'tsue'] },
       { min: 23, max: 28, text: "Mukammal intilish (B2) bor. Chet tillari fakultetlari yoki ba'zi ingliz guruhlarida erkinroqsiz.", matchedUniversities: ['tsul', 'tuit', 'buxdu'] },
       { min: 29, max: 34, text: "Upper-Intermediate darajasidasiz! Xorijiy universitetlarning O'zbekistondagi filiallari muammosiz kutib oladi.", matchedUniversities: ['amity', 'turin', 'mdis'] },
       { min: 35, max: 40, text: "Siz mutlaq mutaxassis (Advanced). Akademik inglizchangiz mukammal ishlaydi va har qanday xorij grandiga rozi.", matchedUniversities: ['wiut', 'inha', 'newuu', 'akfa'] }
    ]
  },
  {
    id: "future",
    title: "Kelajak Prognozi (10 yillik)",
    description: "Keyingi bir necha o'n yillikning eng gullab-yashnaydigan va boy sohalarini topishga yordam beramiz.",
    icon: "🚀",
    color: "#8b5cf6",
    questions: [
      { question: "10 yildan so'ng dunyoda yagona energiya vositasi...?", options: [{ text: "Nuklear, quyosh, elektr panellar", points: 4 }, { text: "Elektr mashinalar batareyasi", points: 3 }, { text: "Moliya tangalari tizimi bo'ladi", points: 2 }, { text: "Hattoki u ham axborot, data bo'ladi", points: 1 }] },
      { question: "Robotlar kelajakda...?", options: [{ text: "Barcha jismoniy zavodlarni egallaydi", points: 4 }, { text: "Raqamli olamda algoritmlarga o'tadi", points: 3 }, { text: "Odamlarga huquqiy yordam beradi", points: 2 }, { text: "Media vositalarini to'ldiradi", points: 1 }] },
      { question: "Kelajak kompaniyalari ishchilarga nimaga qarab maosh to'laydi?", options: [{ text: "O'qigan kitoblari, amaliy portfel va soft skills", points: 1 }, { text: "U yaratadigan kontentning qiymati", points: 2 }, { text: "Global muammolarni qanchalik tez yechgani", points: 3 }, { text: "Avtomatlashtirish, startap boshqarish salohiyati", points: 4 }] },
      { question: "Ta'lim olish usulimiz qanday o'zgaradi?", options: [{ text: "VR-ko'zoynaklarda xohlagan davlat orqali o'qiymiz", points: 4 }, { text: "Faqat malaka talab qilingan joylarda ishlash orqali", points: 3 }, { text: "Kitoblardan ko'proq muhokamali treninglar orqali", points: 2 }, { text: "Shunchaki interaktiv qisqa video dasturlar", points: 1 }] },
      { question: "Kelajak tibbiyoti nimaga aylanadi?", options: [{ text: "Gibrid-injiniring (Genom tahrirlash)", points: 4 }, { text: "Sun'iy intellekt orqali masofaviy jarrohlik", points: 3 }, { text: "Profilaktika va sog'lom iste'mol savdosiga", points: 2 }, { text: "An'anaviy yo'lda ketaveradi", points: 1 }] },
      { question: "Internet of Things (IoT) ni qayerda ko'p ko'ramiz?", options: [{ text: "Butun shaharlarni boshqaradigan tizimlarda", points: 4 }, { text: "Avtombil, transport va ta'minot marshrutlarida", points: 3 }, { text: "Mobil bank va tijorat operatsiyalarida", points: 2 }, { text: "Umuman eshitmagan narsam", points: 1 }] },
      { question: "Siz qaysi trendda qatnashasiz?", options: [{ text: "Kosmos, Mars missiyalari va Aerokosmik sanoat", points: 4 }, { text: "Kiberxavfsizlik va Ma'lumot tahlili bo'yicha ekspert", points: 3 }, { text: "Xalqaro tijorat bitimlari yoki raqamli pul boshqaruvi", points: 2 }, { text: "Madaniyat, san'at va tilshunoslik integratsiyasi", points: 1 }] },
      { question: "Sun'iy intellekt xulosasiz xato qilsa...?", options: [{ text: "To'g'rilab yozish uchun kuchli dasturchi kerak bo'ladi", points: 4 }, { text: "Shifokor / Ekspert bo'lib men uni tahlil qilaman", points: 3 }, { text: "Xalqaro qonun va axloq bo'yicha yurist uni himoya qiladi", points: 2 }, { text: "Ijtimoiy tarmoq tahlilchilari undan kuladi", points: 1 }] },
      { question: "10 yildan so'ng global bozor...", options: [{ text: "Avtomatlashtirilgan xizmatlar, bulutli omborlarga tayanadi", points: 4 }, { text: "Startaplar logistika va tibbiyot kabi yirik zanjirlarga qaratiladi", points: 3 }, { text: "Hamma ofisdan masofaga ishlash qonuniylashadi", points: 2 }, { text: "Mahalliy iqtisodiy resurslar, klassik turizm asos bo'ladi", points: 1 }] },
      { question: "Va nihoyat siz kimsiz?", options: [{ text: "Innovator muhandis / Dastur xavfsizligi professori", points: 4 }, { text: "Ekolog, Biotexnolog yoki Robotexnik", points: 3 }, { text: "Biznes tahlilchi, Data analyst, yirik Menejer", points: 2 }, { text: "Xalqaro tildagi Tarjimon, Ijodkor, Ta'lim yetakchisi", points: 1 }] }
    ],
    results: [
       { min: 10, max: 16, text: "Gumanitar va ijodiy mutaxassis. Inson ruhiyati, tillar, o'qitish mashinadan ajralib turadigan yagona narsa bo'lib qoladi.", matchedUniversities: ['samdu', 'buxdu', 'tspu'] },
       { min: 17, max: 22, text: "Iqtisodchi va yuridik tahlilchi. Mashinalar savdo bitimlari tuza olmaydi. Bu kasbdan kuchli foyda ko'rasiz.", matchedUniversities: ['wiut', 'tsul', 'tsue', 'mdis'] },
       { min: 23, max: 28, text: "Data Science, Biotexnologiya mutaxassisi. Tabiat muhandislari eng yuqori ehtiyojdagi elita bo'ladi.", matchedUniversities: ['akfa', 'newuu', 'amity'] },
       { min: 29, max: 34, text: "Robotics va IT. Barcha avtomatizatsiya va aqlli zavodlarni bevosita yig'uvchi arxitektor.", matchedUniversities: ['inha', 'amity', 'tuit', 'turin'] },
       { min: 35, max: 40, text: "Texnologiya va Aerokosmik / Dasturiy Muhandislik qiroli. Kelajak sizniki - 100% raqamli boshqaruv platformalari asoschisi.", matchedUniversities: ['newuu', 'inha', 'turin', 'tuit'] }
    ]
  }
];
