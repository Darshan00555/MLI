/* eslint-disable no-unused-vars */
import { cn } from '../../lib/utils';

import React from 'react';

import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, className, align = 'center' }) => {
  return (
    <div
      className={cn('mb-8 md:mb-12', align === 'center' ? 'text-center' : 'text-left', className)}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-500 mb-2 block font-sans text-xs tracking-[0.2em] uppercase md:mb-3 md:text-sm"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-2xl leading-[1.2] text-neutral-900 md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn('bg-gold-500 mt-6 h-[2px]', align === 'center' ? 'mx-auto w-24' : 'w-24')}
      />
    </div>
  );
};

export default SectionTitle;
