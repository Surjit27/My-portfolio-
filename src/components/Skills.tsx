import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export function Skills() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-6 text-white"
              >
                Technical Skills
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-zinc-900 rounded-xl text-zinc-400 border border-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-6 text-white"
              >
                Core Strengths
              </motion.h3>
              <div className="space-y-4">
                {profile.strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="px-6 py-4 bg-zinc-900 rounded-xl text-zinc-400 border border-zinc-800 hover:border-zinc-700 transition-all"
                  >
                    {strength}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}