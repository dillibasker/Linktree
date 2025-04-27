import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { SocialLink as SocialLinkType } from '../types';

interface SocialLinkProps {
  link: SocialLinkType;
}

export default function SocialLink({ link }: SocialLinkProps) {
  const { id, name, url, icon: Icon, color, delay } = link;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-link group ${color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="flex items-center justify-center rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary-50/50 dark:bg-slate-700/50 dark:group-hover:bg-slate-700">
        <Icon className="h-6 w-6" />
      </span>
      <span>{name}</span>
      <span className="ml-auto text-slate-400">&rarr;</span>
    </motion.a>
  );
}