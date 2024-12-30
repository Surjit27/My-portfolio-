import { motion } from 'framer-motion';

interface BadgeProps {
  children: string;
  index?: number;
}

export function Badge({ children, index = 0 }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors font-medium text-sm"
    >
      {children}
    </motion.span>
  );
}