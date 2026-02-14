import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={clsx(
        'relative flex h-10 w-10 items-center justify-center rounded-3xl',
        'backdrop-blur-xl border border-white/20 dark:border-white/10',
        'bg-white/10 dark:bg-black/10',
        'hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan'
      )}
    >
      <motion.div
        className="relative h-5 w-5"
        initial={false}
        animate={{
          rotate: isDark ? 0 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Sun - visible in light mode, rotates and "sets" when switching to dark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.5 : 1,
            y: isDark ? 20 : 0,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Sun className="h-5 w-5 text-amber-400" strokeWidth={2} />
        </motion.div>

        {/* Moon - visible in dark mode, "rises" when switching to dark */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.5,
            y: isDark ? 0 : -20,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Moon className="h-5 w-5 text-sky-200" strokeWidth={2} />
        </motion.div>
      </motion.div>
    </button>
  );
}
