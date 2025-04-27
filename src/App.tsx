import { Suspense, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';

// Components
import ProfileCard from './components/ProfileCard';
import Avatar from './components/Avatar';
import LinkContainer from './components/LinkContainer';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

// Lazy load the 3D background for better performance
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

// Data & Hooks
import { SOCIAL_LINKS } from './constants/links';
import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    // Update page title
    document.title = 'My 3D Linktree | Connect With Me';
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Custom animated cursor */}
      <CustomCursor />
      
      {/* 3D Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-950 dark:to-slate-900" />}>
        <ThreeBackground theme={theme} />
      </Suspense>
      
      {/* Theme Toggle */}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <ProfileCard>
          {/* Avatar */}
          <Avatar />
          
          {/* Profile Info */}
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Dilli Basker</h1>
            <p className="text-slate-600 dark:text-slate-300">Full stack & Blockchain Dev</p>
          </motion.div>
          
          {/* Links */}
          <LinkContainer links={SOCIAL_LINKS} />
        </ProfileCard>
      </main>
      
      {/* Footer Attribution */}
      <motion.footer
        className="absolute bottom-4 left-0 right-0 z-10 text-center text-sm text-slate-600 dark:text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Crafted with ❤️ in 2025
      </motion.footer>
    </div>
  );
}

export default App;