import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableCardProps {
  title: ReactNode;
  children: ReactNode;
  index?: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ExpandableCard({ 
  title, 
  children, 
  index = 0, 
  isExpanded, 
  onToggle 
}: ExpandableCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:border-gray-200 transition-all"
    >
      <motion.button
        onClick={onToggle}
        className="w-full p-8 flex items-center justify-between text-left transition-colors relative"
        whileHover={{ scale: 1.005 }}
      >
        <div className="flex-1 relative z-10">{title}</div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
        <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-8 pb-8 relative">
              <div className="absolute left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}