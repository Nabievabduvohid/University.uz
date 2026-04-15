# universitet.uz Audit Report

Audit sanasi: 2026-04-08

## Scope

- Strukturaviy audit
- Frontend kod review
- Build/test urinishlari
- Hujjatlash va keyingi ishlar uchun qoidalar

## Test Summary

- `npm.cmd run build` ishga tushirildi.
- Build sandbox ichida `esbuild` child-process chaqira olmagani uchun to'liq yakunlanmadi: `Error: spawn EPERM`.
- Shu buildni sandboxdan tashqarida qayta ishlatish uchun eskalatsiya so'raldi, lekin ruxsat berilmadi.
- Loyihada `test` yoki `lint` scriptlari yo'q; shuning uchun avtomatlashtirilgan sifat nazorati hozir mavjud emas.

## Findings

### High

1. CTA elementlari ishlamaydi.
   - [src/sections/Hero.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/sections/Hero.jsx#L76)
   - [src/sections/Hero.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/sections/Hero.jsx#L79)
   - [src/components/cards/UniversityCard.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/components/cards/UniversityCard.jsx#L63)
   - Hero va card ichidagi tugmalar hech qanday `onClick`, `href` yoki routing bilan ulanmagan. UI foydalanuvchini actionga undaydi, lekin hech narsa sodir bo'lmaydi.

2. Avtomatlashtirilgan test/lint qatlamlari yo'q.
   - [package.json](C:/Users/Dilshoda/Desktop/universitet.uz/package.json#L6)
   - `scripts` ichida faqat `dev`, `build`, `preview` bor. Regression, accessibility, formatting va basic static checklar ushlanmaydi.

### Medium

3. Hero sarlavhasi React tashqarisida qo'lda DOM mutatsiya qilinmoqda va cleanup yo'q.
   - [src/sections/Hero.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/sections/Hero.jsx#L11)
   - [src/sections/Hero.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/sections/Hero.jsx#L27)
   - `useEffect` ichida `innerText` va `appendChild` ishlatilgan. Bu yondashuv remount, StrictMode va keyingi refactorlarda noaniq xatti-harakatlar keltirib chiqarishi mumkin. GSAP tweenlari ham cleanup qilinmagan.

4. Motion va 3D sahna uchun accessibility/performance fallback yo'q.
   - [src/sections/Hero.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/sections/Hero.jsx#L57)
   - [src/sections/Hero.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/sections/Hero.jsx#L87)
   - `prefers-reduced-motion` hisobga olinmagan. Full-screen `Canvas` va doimiy `autoRotate` mobil yoki past quvvatli qurilmalarda jank berishi mumkin.

5. Kontent va universitet kartalari to'liq hardcode qilingan.
   - [src/App.jsx](C:/Users/Dilshoda/Desktop/universitet.uz/src/App.jsx#L12)
   - Ma'lumotlar komponent ichida qattiq yozilgan. Admin panel, CMS yoki API bilan ulash qiyinlashadi; scaling paytida kod takrorlanadi.

## Risks

- Buildning real production holati to'liq tasdiqlanmadi, chunki sandbox cheklovi bor.
- Visual loyiha bo'lgani uchun browser-level smoke test va responsive test o'tkazilmagan.
- Networkga bog'liq tashqi rasm URL'lari runtime tarafda sekinlashish yoki bloklanish berishi mumkin.

## Recommendations

1. `react-router-dom` yoki oddiy anchor/link bilan barcha CTA'larni real sahifalarga ulang.
2. `vitest` + `@testing-library/react` bilan kamida render smoke testlar qo'shing.
3. `eslint` va `npm run lint` scriptini qo'shing.
4. Hero animatsiyasini declarative usulga o'tkazing yoki kamida `useEffect` cleanup yozing.
5. `prefers-reduced-motion` bo'lsa 3D va kuchli animatsiyalarni o'chiring.
6. Universitetlar ro'yxatini data massivga ajrating; keyin API yoki CMS ga ko'chirish oson bo'ladi.
7. Tashqi rasm URL'larini optimallashtiring yoki lokal asset/CDN strategiyasini belgilang.

## Skills Status

- Qo'shimcha skill o'rnatilmadi.
- Sabab: kerakli tizim skilllari allaqachon mavjud, yangi skill o'rnatish esa network va ruxsat talab qiladi.
- Hozirgi repo hajmi uchun qo'shimcha skill o'rnatishdan ko'ra `rules.md` va `codex.ignore.md` bilan kontekstni toraytirish foydaliroq.
