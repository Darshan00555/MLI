/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const leaders = [
  {
    name: 'Shri Anil Pandit Ji',
    role: 'Chairman',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    quote: "Building legacy is not just about structures, it's about the values we embed in them.",
  },
  {
    name: 'Mr. Bharat Kaushik',
    role: 'Director',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    quote: 'Innovation is the heartbeat of modern living. We craft spaces that inspire.',
  },
  {
    name: 'Mr. Vipin Kaushik',
    role: 'Director',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    quote: 'Our commitment to excellence ensures that every project is a masterpiece.',
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pt-24 pb-4">
      {/* Decorative Background Elements */}
      <div className="bg-gold-100 absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-neutral-100 opacity-30 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 font-serif text-4xl text-neutral-900 md:text-5xl"
          >
            Visionaries Behind the Legacy
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-gold-500 mx-auto h-1 w-24"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600"
          >
            Guided by wisdom, driven by innovation. Our leadership team is dedicated to redefining
            the art of living.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                {/* Image */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full translate-y-4 transform p-8 text-white transition-transform duration-500 group-hover:translate-y-0">
                  <div className="mb-1 translate-y-4 transform opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Quote className="text-gold-400 mb-2 h-8 w-8 opacity-80" />
                    <p className="border-gold-500 mb-4 border-l-2 pl-3 text-sm font-light text-gray-200 italic">
                      "{leader.quote}"
                    </p>
                  </div>

                  <h3 className="group-hover:text-gold-400 mb-1 font-serif text-2xl font-bold text-white transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-medium tracking-widest text-gray-300 uppercase">
                    {leader.role}
                  </p>

                  {/* Decorative Line on Hover */}
                  <div className="bg-gold-500 mt-4 h-0.5 w-0 transition-all duration-700 group-hover:w-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
