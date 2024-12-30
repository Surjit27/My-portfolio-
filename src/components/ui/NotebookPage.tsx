import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NotebookPageProps {
  children: ReactNode;
  index?: number;
}

export function NotebookPage({ children, index = 0 }: NotebookPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative bg-white rounded-lg shadow-md overflow-hidden"
    >
      {/* Notebook holes */}
      <div className="absolute left-8 top-0 bottom-0 flex flex-col justify-around pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full bg-gray-200 border-2 border-gray-300"
          />
        ))}
      </div>
      
      {/* Red margin line */}
      <div className="absolute left-20 top-0 bottom-0 w-px bg-red-400" />
      
      {/* Content area with notebook lines */}
      <div 
        className="ml-24 p-6"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
          backgroundPosition: '0 1.2em',
          lineHeight: '32px'
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}