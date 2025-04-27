import { motion } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { Theme } from '../types';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-4 top-4 z-10 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm transition-colors dark:bg-slate-800/80"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <SunMedium className="h-5 w-5 text-gold-400" />
      ) : (
        <Moon className="h-5 w-5 text-primary-700" />
      )}
    </motion.button>
  );
}