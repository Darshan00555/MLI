/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const SectionTitle = ({ title, subtitle, className, align = 'center' }) => {
  return (
    <div className={cn("mb-12", align === 'center' ? 'text-center' : 'text-left', className)}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-gold-500 text-sm tracking-[0.2em] uppercase mb-3 font-sans"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-serif text-neutral-900 leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-[2px] bg-gold-500 mt-6",
          align === 'center' ? 'mx-auto w-24' : 'w-24'
        )}
      />
    </div>
  );
};

export default SectionTitle;
