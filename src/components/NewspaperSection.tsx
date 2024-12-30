import { useState } from 'react';
import { Brain, Briefcase, GraduationCap, Lightbulb, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from './Experience';
import { Education } from './Education';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Thoughts } from './Thoughts';
import { NewspaperHeader } from './ui/NewspaperHeader';
import { NewspaperNav } from './ui/NewspaperNav';

const sections = [
  { id: 'experience', component: Experience, title: 'Experience', icon: Briefcase },
  { id: 'education', component: Education, title: 'Education', icon: GraduationCap },
  { id: 'projects', component: Projects, title: 'Projects', icon: Brain },
  { id: 'skills', component: Skills, title: 'Skills', icon: Lightbulb },
  { id: 'thoughts', component: Thoughts, title: 'Thoughts', icon: Book }
];

export function NewspaperSection() {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <section className="bg-white text-black rounded-lg overflow-hidden border border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <NewspaperHeader />
      <NewspaperNav 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Content with smooth transitions */}
      <div className="p-8 bg-white min-h-[600px]">
        <AnimatePresence mode="wait">
          {sections.map(({ id, component: Component }) => (
            activeSection === id && (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Component />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Newspaper Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-6 bg-gray-50 border-t border-gray-200"
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4" />
        <p className="text-sm text-gray-600 font-serif italic">
          Continue exploring the story...
        </p>
      </motion.div>
    </section>
  );
}