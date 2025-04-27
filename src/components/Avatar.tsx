import { motion } from 'framer-motion';
import profile from '../assets/profile_photo.jpg'
export default function Avatar() {
  return (
    <motion.div
      className="relative mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-slate-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={profile}
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}