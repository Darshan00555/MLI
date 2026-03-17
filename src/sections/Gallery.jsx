/* eslint-disable no-unused-vars */
import SectionTitle from '../components/ui/SectionTitle';
import { getImageUrl } from '../lib/media';

import React from 'react';

import { motion } from 'framer-motion';

const galleryImages = [
  getImageUrl('IMG_5490.webp'),
  getImageUrl('IMG_5491.webp'),
  getImageUrl('IMG_5492.webp'),
  getImageUrl('IMG_5493.webp'),
  getImageUrl('IMG_5495.webp'),
  getImageUrl('IMG_5496.webp'),
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white py-22">
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
