import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function SocialLink({ href, icon, children }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
    >
      {icon}
      <span>{children}</span>
    </motion.a>
  );
}