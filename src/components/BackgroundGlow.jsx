import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundGlow() {
  const [enabled, setEnabled] = useState(true);
  const mouseX = useSpring(0, { stiffness: 90, damping: 20, mass: 0.3 });
  const mouseY = useSpring(0, { stiffness: 90, damping: 20, mass: 0.3 });
  const { isDark } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateCapability = () => setEnabled(mediaQuery.matches);
    updateCapability();

    const handleMove = (event) => {
      mouseX.set(event.clientX - 220);
      mouseY.set(event.clientY - 220);
    };

    window.addEventListener('mousemove', handleMove);
    mediaQuery.addEventListener('change', updateCapability);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      mediaQuery.removeEventListener('change', updateCapability);
    };
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          background: isDark
            ? 'radial-gradient(circle at top, rgba(39,100,255,0.16), transparent 32%), linear-gradient(180deg, #04070b 0%, #07111d 55%, #05070a 100%)'
            : 'radial-gradient(circle at top, rgba(39,100,255,0.12), transparent 28%), linear-gradient(180deg, #f8fbff 0%, #eef4ff 55%, #f4f7fb 100%)',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      />
      <div className="absolute left-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#2764ff]/20 blur-[140px]" />
      <div className="absolute bottom-[-10rem] right-[-4rem] h-[24rem] w-[24rem] rounded-full bg-[#7bf7ff]/12 blur-[130px]" />
      {enabled && (
        <motion.div
          className="absolute h-[27.5rem] w-[27.5rem] rounded-full bg-[radial-gradient(circle,rgba(123,247,255,0.22)_0%,rgba(39,100,255,0.14)_40%,transparent_70%)] blur-[42px]"
          style={{ x: mouseX, y: mouseY }}
        />
      )}
    </div>
  );
}
