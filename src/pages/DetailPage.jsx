import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import BackgroundGlow from '../components/BackgroundGlow';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import universities from '../data/universities';
import DocChecklist from '../components/DocChecklist';
import { useLanguage } from '../context/LanguageContext';

export default function DetailPage() {
  const { id } = useParams();
  const pageRef = useRef(null);
  const { language } = useLanguage();
  const university = universities.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  useEffect(() => {
    if (!university) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .fromTo(
          '.detail-hero',
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1 },
        )
        .fromTo(
          '.detail-badge, .detail-title, .detail-copy, .detail-faculties, .detail-sidebar, .detail-gallery',
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          '-=0.7',
        );
    }, pageRef);

    return () => ctx.revert();
  }, [university]);

  if (!university) {
    return (
      <div className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
        <BackgroundGlow />
        <div className="relative z-10">
          <Navbar />
          <main className="px-6 pb-24 pt-28 sm:px-8 lg:px-12">
            <section className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-2xl">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-500">404</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-white">
                Universitet topilmadi
              </h1>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                Tanlangan universitet ma’lumoti mavjud emas. Katalogga qaytib boshqa
                universitetni tanlang.
              </p>
              <Link
                to="/universities"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[#7bf7ff]/35 bg-[#7bf7ff]/10 px-6 text-sm font-semibold text-[#bafcff] transition duration-300 hover:border-[#7bf7ff]/70 hover:bg-[#7bf7ff]/15"
              >
                Katalogga qaytish
              </Link>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      <BackgroundGlow />

      <div className="relative z-10">
        <Navbar />

        <main className="px-6 pb-24 pt-24 sm:px-8 lg:px-12">
          <section className="mx-auto max-w-7xl">
            <div className="detail-hero relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]">
              <img
                src={university.images[0]}
                alt={university[`name_${language}`]}
                className="h-[26rem] w-full object-cover sm:h-[32rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 dark:from-[#05070A] dark:via-[#05070A]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <Link
                  to="/universities"
                  className="detail-badge inline-flex min-h-11 items-center rounded-full border border-gray-300 dark:border-white/14 bg-white/70 dark:bg-black/25 px-5 text-sm font-medium text-slate-800 dark:text-white/85 backdrop-blur-xl"
                >
                  Katalogga qaytish
                </Link>
                <h1 className="detail-title mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                  {university[`name_${language}`]}
                </h1>
              </div>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="space-y-8">
                <article className="detail-copy rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-2xl sm:p-8">
                  <span className="text-sm uppercase tracking-[0.28em] text-cyan-600 dark:text-[#7bf7ff]">
                    Universitet haqida
                  </span>
                  <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300 sm:text-lg">
                    {university[`fullDescription_${language}`]}
                  </p>
                </article>

                <section className="detail-faculties rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-2xl sm:p-8">
                  <span className="text-sm uppercase tracking-[0.28em] text-cyan-600 dark:text-[#7bf7ff]">
                    Fakultetlar
                  </span>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {university[`faculties_${language}`].map((faculty) => (
                      <div
                        key={faculty}
                        className="rounded-2xl border border-gray-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-4 py-4 text-sm font-medium text-slate-800 dark:text-slate-200"
                      >
                        {faculty}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="detail-gallery grid gap-4 sm:grid-cols-2">
                  {university.images.slice(1).map((image, index) => (
                    <div
                      key={image}
                      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]"
                    >
                      <img
                        src={image}
                        alt={`${university[`name_${language}`]} preview ${index + 2}`}
                        className="h-64 w-full object-cover"
                      />
                    </div>
                  ))}
                </section>
              </div>

              <aside className="detail-sidebar lg:sticky lg:top-28 lg:self-start">
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-3xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,247,255,0.12),transparent_40%),radial-gradient(circle_at_bottom,rgba(39,100,255,0.16),transparent_42%)]" />
                  <div className="relative z-10">
                    <span className="text-sm uppercase tracking-[0.28em] text-slate-400">
                      Quick info
                    </span>

                    <div className="mt-6 space-y-5">
                      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-black/10 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                          Kontrakt narxi
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                          {university.tuitionFee}
                        </p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          Oyiga: {university.contract_month.toLocaleString('uz-UZ')} UZS
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-black/10 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                          Manzil
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                          {university[`location_${language}`]}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-black/10 p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                          Rasmiy sayt
                        </p>
                        <a
                          href={university.website}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 block text-sm font-medium text-sky-600 dark:text-[#7bf7ff] transition hover:text-slate-900 dark:hover:text-white"
                        >
                          {university.website}
                        </a>
                      </div>
                    </div>

                    <a
                      href={university.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-[1.25rem] border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_32px_rgba(123,247,255,0.12)] backdrop-blur-2xl transition duration-300 hover:border-[#7bf7ff]/50 hover:bg-white/14"
                    >
                      Hujjat topshirish
                    </a>
                  </div>
                </div>

                {/* --- Smart Application Checklist --- */}
                <DocChecklist university={university} />

              </aside>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
