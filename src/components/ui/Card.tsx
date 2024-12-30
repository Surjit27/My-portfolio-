import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

export function Card({ children, className = '', index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-gray-200 transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}