import { motion } from 'framer-motion';

export function NewspaperHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-8 bg-gray-50"
    >
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold pb-2 text-gray-800">
          THE TECH CHRONICLE
        </h1>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2" />
        <p className="text-sm text-gray-600 font-serif italic">
          "Where Innovation Meets Achievement"
        </p>
      </div>
    </motion.div>
  );
}