import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const journeyEvents = [
  {
    date: "June 2023",
    headline: "Embarking on ML Journey at Optisol",
    subheading: "Machine Learning Intern Takes First Steps into AI World",
    description: "Led groundbreaking computer vision projects, achieving 95% accuracy in defect detection systems.",
    icon: Briefcase,
    achievement: "Reduced model inference time by 40%"
  },
  {
    date: "January 2022",
    headline: "Leadership Role at Eagle House Technologies",
    subheading: "Rising Star Takes Helm of App Development Team",
    description: "Spearheaded innovative mobile application development with integrated ML capabilities.",
    icon: Award,
    achievement: "Managed team of 4 developers, reduced deployment time by 60%"
  },
  {
    date: "May 2021",
    headline: "Data Visualization Pioneer",
    subheading: "Transforming Data into Visual Stories at Global Growth Solutions",
    description: "Revolutionized data visualization approaches using D3.js and Python.",
    icon: GraduationCap,
    achievement: "Saved 20+ hours of manual work weekly"
  }
];

function NewspaperArticle({ event, index }: { event: typeof journeyEvents[0], index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative bg-white p-8 rounded-lg shadow-md"
    >
      {/* Newspaper Date */}
      <div className="text-xs font-serif text-gray-500 mb-2">{event.date}</div>
      
      {/* Main Headline */}
      <h3 className="font-serif text-2xl font-bold mb-2 text-gray-900">
        {event.headline}
      </h3>
      
      {/* Subheading */}
      <p className="font-serif text-lg italic text-gray-700 mb-4 border-b border-gray-200 pb-4">
        {event.subheading}
      </p>
      
      {/* Article Content */}
      <div className="mt-4 space-y-4">
        <p className="text-gray-600 leading-relaxed font-serif columns-2 gap-6">
          {event.description}
        </p>
        
        {/* Achievement Box */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
          <div className="flex items-center gap-2 text-gray-700">
            <event.icon className="w-5 h-5" />
            <span className="font-medium">{event.achievement}</span>
          </div>
        </div>
      </div>
      
      {/* Connection Arrow */}
      {index < journeyEvents.length - 1 && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex items-center"
        >
          <ArrowRight className="w-16 h-16 text-blue-500" />
        </motion.div>
      )}
    </motion.article>
  );
}

export function Journey() {
  return (
    <Section title="The Journey">
      <div className="relative space-y-12 px-8">
        {/* Decorative Header */}
        <div className="text-center mb-12">
          <div className="font-serif text-4xl font-bold border-b-4 border-black inline-block pb-2">
            THE TECH CHRONICLE
          </div>
          <div className="text-sm mt-2 text-gray-600">
            "Where Innovation Meets Achievement"
          </div>
        </div>
        
        {/* Journey Timeline */}
        <div className="space-y-16">
          {journeyEvents.map((event, index) => (
            <NewspaperArticle key={index} event={event} index={index} />
          ))}
        </div>
        
        {/* Newspaper Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-serif">
            Continue following this journey as new chapters unfold...
          </p>
        </div>
      </div>
    </Section>
  );
}