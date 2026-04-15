# Audit Rules

Bu repo uchun Codex ishlash qoidalari:

1. Kontekstdan chiqmaslik uchun birinchi navbatda `src/`, `package.json`, `vite.config.js`, `tailwind.config.js` va `postcss.config.js` tekshirilsin.
2. `node_modules/`, katta lock fayllar va uchinchi tomon README fayllari faqat dependency muammosi bo'lsa ochilsin.
3. Windows muhitida `npm` o'rniga `npm.cmd` ishlatilsin.
4. Vite build yoki boshqa child-process chaqiradigan komandalar sandboxda `EPERM` bersa, darhol escalated ruxsat bilan qayta urinilsin.
5. Audit natijalari alohida markdown hisobotga yozilsin: topilmalar, test holati, risklar va tavsiyalar.
6. Buglar ro'yxati file/line reference bilan yozilsin.
7. Agar test infrastruktura mavjud bo'lmasa, bu alohida topilma sifatida qayd etilsin; mavjud bo'lmagan testni "o'tdi" deb belgilash mumkin emas.
8. Kod o'zgartirilmasa ham hujjatlar yangilanib, foydalanuvchiga bajarilgan va bajarilmagan ishlar aniq aytilsin.
