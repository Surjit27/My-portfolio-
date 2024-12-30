import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
}

interface NewspaperNavProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

export function NewspaperNav({ sections, activeSection, onSectionChange }: NewspaperNavProps) {
  return (
    <nav className="border-y border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 py-4 overflow-x-auto">
          {sections.map(({ id, title, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => onSectionChange(id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                ${activeSection === id 
                  ? 'bg-gray-100 text-gray-900 font-medium shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <Icon className="w-4 h-4" />
              <span className="whitespace-nowrap font-serif">{title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
  );
}