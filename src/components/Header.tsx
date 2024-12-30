import { Github, Linkedin, Mail, MapPin, Award, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { SocialLink } from './SocialLink';

export function Header() {
  return (
    <header className="relative bg-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white/95" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              className="relative"
            >
              <div className="w-56 h-56 rounded-2xl overflow-hidden ring-2 ring-black/5 shadow-2xl transform -rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?auto=format&fit=crop&q=80&w=1024"
                  alt="S R Surjit Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg"
              >
                <Code className="w-6 h-6 text-gray-700" />
              </motion.div>
            </motion.div>
            
            <div className="text-center md:text-left flex-1">
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm mb-4"
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Machine Learning Engineer
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
              >
                {profile.name}
              </motion.h1>
              
              <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-8 max-w-2xl text-gray-600 leading-relaxed"
              >
                {profile.summary}
              </motion.p>
              
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center md:justify-start gap-6 mb-8"
              >
                <SocialLink href={`mailto:${profile.contact.email}`} icon={<Mail size={20} />}>
                  {profile.contact.email}
                </SocialLink>
                <SocialLink href={`https://${profile.contact.linkedin}`} icon={<Linkedin size={20} />}>
                  LinkedIn
                </SocialLink>
                <SocialLink href={`https://${profile.contact.github}`} icon={<Github size={20} />}>
                  GitHub
                </SocialLink>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} />
                  <span>{profile.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 text-sm text-gray-500"
              >
                <Award className="w-4 h-4" />
                <span>Top-rated Machine Learning Engineer with 3+ years of experience</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}