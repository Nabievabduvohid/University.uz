import BackgroundGlow from '../components/BackgroundGlow';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import TopUniversities from '../sections/TopUniversities';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-500">
      <BackgroundGlow />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TopUniversities />
          <Stats />
        </main>
        <Footer />
      </div>
    </div>
  );
}
