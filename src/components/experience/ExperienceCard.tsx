import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ExperienceCard({ experience, index, isExpanded, onToggle }: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-start justify-between gap-4 group"
      >
        <div className="flex-1">
          <div className="text-xs text-gray-500 font-serif mb-1">{experience.period}</div>
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
            {experience.role}
          </h3>
          <p className="text-gray-600 font-serif">{experience.company}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-1"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
              <p className="text-gray-600 font-serif leading-relaxed">
                {experience.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}