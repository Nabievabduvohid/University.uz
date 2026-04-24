import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const quickLinks = ['Universities', 'Scholarships', 'Admissions', 'Contact'];
const socialLinks = ['Instagram', 'Telegram', 'LinkedIn', 'YouTube'];

export default function Footer() {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const ui = t.footer;

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      alert("Tabriklaymiz, siz yangiliklarga a'zo bo'ldingiz!");
      e.target.reset();
    } else {
      alert("Iltimos, to'g'ri email manzilini kiriting.");
    }
  };

  return (
    <footer
      id="footer"
      className="mt-8 border-t px-6 py-16 sm:px-8 lg:px-12"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: isDark ? '#05070a' : 'rgba(244,247,251,0.72)',
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
        <div>
          <span className="text-sm uppercase tracking-[0.34em] text-[#7bf7ff]">{ui.tagline}</span>
          <h3 className="mt-4 max-w-sm text-3xl font-semibold tracking-[-0.04em] text-white">
            {ui.headline}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            {ui.description}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{ui.quickLinks}</h4>
          <div className="mt-5 space-y-3">
            {quickLinks.map((link) => {
              if (link === 'Scholarships' || link === 'Admissions') {
                return (
                  <button
                    key={link}
                    onClick={() => alert("Ushbu bo'lim tez kunda ishga tushadi (Coming Soon)")}
                    className="block text-sm text-slate-300 transition duration-300 hover:text-[#7bf7ff] text-left"
                  >
                    {link}
                  </button>
                );
              }
              return (
                <Link
                  key={link}
                  to={link === 'Universities' ? '/universities' : '/'}
                  className="block text-sm text-slate-300 transition duration-300 hover:text-[#7bf7ff]"
                >
                  {link}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{ui.socialMedia}</h4>
          <div className="mt-5 space-y-3">
            {socialLinks.map((link) => {
              let href = '#';
              if (link === 'Instagram') href = 'https://www.instagram.com/nabiev.21a?igsh=MWllcWtrb2FuMTZjZw==';
              else if (link === 'Telegram') href = 'https://t.me/nabiev012';
              return (
                <a
                  key={link}
                  href={href}
                  className="block text-sm text-slate-300 transition duration-300 hover:text-[#7bf7ff] hover:drop-shadow-[0_0_12px_rgba(123,247,255,0.45)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{ui.newsletter}</h4>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            {ui.newsletterDesc}
          </p>
          <form className="mt-6 space-y-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              placeholder={ui.placeholder}
              className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none backdrop-blur-xl transition duration-300 placeholder:text-slate-500 focus:border-[#7bf7ff]/60"
            />
            <button
              type="submit"
              className="w-full rounded-2xl border border-[#7bf7ff]/35 bg-[#7bf7ff]/10 px-4 py-3 text-sm font-semibold text-[#bafcff] transition duration-300 hover:border-[#7bf7ff]/70 hover:bg-[#7bf7ff]/16"
            >
              {ui.subscribe}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{ui.rights}</p>
        <p>{ui.builtFor}</p>
      </div>
    </footer>
  );
}
