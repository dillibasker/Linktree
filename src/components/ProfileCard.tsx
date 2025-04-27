import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  children: React.ReactNode;
}

export default function ProfileCard({ children }: ProfileCardProps) {
  return (
    <motion.div
      className="z-10 max-w-md rounded-2xl bg-white/50 p-6 shadow-xl backdrop-blur-lg dark:bg-slate-900/50 sm:p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {children}
    </motion.div>
  );
}