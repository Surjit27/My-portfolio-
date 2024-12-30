import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center text-gray-900"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}