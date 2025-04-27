import { motion } from 'framer-motion';
import SocialLink from './SocialLink';
import { SocialLink as SocialLinkType } from '../types';

interface LinkContainerProps {
  links: SocialLinkType[];
}

export default function LinkContainer({ links }: LinkContainerProps) {
  return (
    <motion.div
      className="flex w-full flex-col gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {links.map((link) => (
        <SocialLink key={link.id} link={link} />
      ))}
    </motion.div>
  );
}