import { SocialLink } from '../types';
import { Github, Linkedin, Twitter, Briefcase, FileText } from 'lucide-react';
import resumeFile from '../assets/resume.pdf';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/dillibasker',
    icon: Github,
    color: 'text-black dark:text-white',
    delay: 1,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dilli-basker-8aaa262ba',
    icon: Linkedin,
    color: 'text-blue-600 dark:text-blue-400',
    delay: 2,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://x.com/DilliBasker?t=I_K18H9JozwV46AM_VF8Gw&s=09',
    icon: Twitter,
    color: 'text-sky-500 dark:text-sky-400',
    delay: 3,
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    url: 'https://port-folio-digital.vercel.app/',
    icon: Briefcase,
    color: 'text-purple-600 dark:text-purple-400',
    delay: 4,
  },
  {
    id: 'resume',
    name: 'Resume',
    url: resumeFile,
    icon: FileText,
    color: 'text-emerald-600 dark:text-emerald-400',
    delay: 5,
  },
];

export const THEMES = [
  {
    id: 'light',
    label: 'Light',
    icon: 'SunMedium',
  },
  {
    id: 'dark',
    label: 'Dark',
    icon: 'Moon',
  },
];