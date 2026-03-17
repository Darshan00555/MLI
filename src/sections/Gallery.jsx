/* eslint-disable no-unused-vars */
import SectionTitle from '../components/ui/SectionTitle';

import React from 'react';

import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white py-12">
      <div className="container mx-auto px-6">
        <SectionTitle title="Visual Harmony" subtitle="Gallery" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative cursor-pointer overflow-hidden rounded-sm ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/0 transition-colors duration-300 group-hover:bg-neutral-950/40">
                <div className="translate-y-4 transform opacity-0 transition-opacity duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-serif text-xl text-white italic">View Image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
