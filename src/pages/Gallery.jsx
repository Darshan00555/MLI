/* eslint-disable no-unused-vars */
import InteractiveSelector from '../components/ui/InteractiveSelector';
import { Timeline } from '../components/ui/Timeline';

import React, { useEffect, useRef, useState } from 'react';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// --- ROBUST MULTI-SOURCE IMAGE COMPONENT ---
// Tries primarySrc first. If error, tries backupSrc. If that errors, shows gradient.
const ImageWithFallback = ({ primarySrc, backupSrc, alt, className, priority = false }) => {
  const [currentSrc, setCurrentSrc] = useState(primarySrc);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [usingBackup, setUsingBackup] = useState(false);

  const handleError = () => {
    if (!usingBackup && backupSrc) {
      console.log(`Primary image failed again for ${alt}, switching to backup...`);
      setUsingBackup(true);
      setCurrentSrc(backupSrc);
      // Reset loading state for the new image attempt
      setLoaded(false);
    } else {
      console.log(`All image sources failed for ${alt}.`);
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-neutral-200 ${className} min-h-[300px]`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
        <div className="z-10 font-serif text-6xl text-neutral-400 opacity-20">MIL</div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className} bg-neutral-100`}>
      <img
        key={currentSrc} // Key change forces re-render on src change
        src={currentSrc}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
      {!loaded && <div className="absolute inset-0 animate-pulse bg-neutral-200" />}
    </div>
  );
};

const masonryImages = [
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    backup:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1000&q=80',
    backup:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
    backup:
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&w=1000&q=80',
    backup:
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    backup:
      'https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80',
    backup:
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Gallery = () => {
  // Data for the Timeline Component
  const timelineData = [
    {
      title: 'Architectural Grandeur',
      content: (
        <div>
          <p className="mb-8 text-sm leading-relaxed font-normal text-neutral-800 md:text-base">
            Every line, curve, and angle is meticulously engaged to create structures that stand as
            timeless monuments of luxury. Our designs blend modern aesthetics with functional
            brilliance.
          </p>
          <div className="grid h-[400px] grid-cols-2 gap-4">
            {/* Large Left Image - Modern Building Facade */}
            <div className="col-span-2 h-full overflow-hidden rounded-2xl shadow-xl md:col-span-1">
              <ImageWithFallback
                primarySrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                backupSrc="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Architectural Grandeur 1"
                className="h-full w-full"
              />
            </div>
            {/* Stacked Right Images - Details & Angles */}
            <div className="hidden h-full flex-col gap-4 md:flex">
              <div className="h-1/2 overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  primarySrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  backupSrc="https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Architectural Grandeur 2"
                  className="h-full w-full"
                />
              </div>
              <div className="h-1/2 overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  primarySrc="https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&w=800&q=80"
                  backupSrc="https://images.pexels.com/photos/259953/pexels-photo-259953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Architectural Grandeur 3"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Bespoke Interiors',
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base">
            Interiors that whisper elegance. From Italian marble flooring to handcrafted fixtures,
            every detail is a testament to refined taste.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="h-64 overflow-hidden rounded-xl shadow-md">
              <ImageWithFallback
                primarySrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                backupSrc="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interior 1"
                className="h-full w-full"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-xl shadow-md">
              <ImageWithFallback
                primarySrc="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80"
                backupSrc="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interior 2"
                className="h-full w-full"
              />
            </div>
            <div className="col-span-1 h-80 overflow-hidden rounded-xl shadow-xl md:col-span-2">
              <ImageWithFallback
                primarySrc="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
                backupSrc="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Interior Wide"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Serene Landscapes',
      content: (
        <div>
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-base">
            Nature and architecture in perfect harmony. Lush gardens and water bodies create a
            sanctuary of peace amidst the city.
          </p>
          <ul className="mb-4 ml-6 list-disc">
            <li className="text-xs text-neutral-600 md:text-sm">Lush Gardens</li>
            <li className="text-xs text-neutral-600 md:text-sm">Water Bodies</li>
            <li className="text-xs text-neutral-600 md:text-sm">Private Patios</li>
          </ul>
          {/* REPLACED with House + Garden image, not just nature */}
          <div className="h-96 overflow-hidden rounded-2xl shadow-2xl">
            <ImageWithFallback
              primarySrc="https://images.unsplash.com/photo-1600596542815-3ad196bb4a7f?auto=format&fit=crop&w=1200&q=80"
              backupSrc="https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Landscape with Architecture"
              className="h-full w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Panoramic Views',
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-base">
            Wake up to breathtaking vistas. Our properties offer unobstructed views that stretch to
            the horizon.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-60 overflow-hidden rounded-lg shadow-lg">
              {/* REPLACED with Modern Balcony/Terrace View */}
              <ImageWithFallback
                primarySrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                backupSrc="https://images.pexels.com/photos/259953/pexels-photo-259953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Panoramic Balcony"
                className="h-full w-full"
              />
            </div>
            <div className="h-60 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                primarySrc="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80"
                backupSrc="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern Facade View"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="bg-white">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. NEW TIMELINE SECTION (Replced Sticky Scroll) */}
      <section className="bg-white">
        <Timeline data={timelineData} />
      </section>

      {/* 3. New Interactive Selector */}
      <InteractiveSelector />

      {/* 4. Masonry Grid */}
      <MasonryGridSection />
    </main>
  );
};

// --- Sub-Components ---

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden bg-neutral-900">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <ImageWithFallback
          primarySrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
          backupSrc="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Gallery Hero"
          className="h-full w-full opacity-70"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h1 className="mb-4 font-serif text-6xl tracking-tighter text-white md:text-9xl">
            Visual Poetry
          </h1>
          <p className="text-gold-400 text-lg font-light tracking-[0.3em] uppercase md:text-xl">
            Where Art Meets Architecture
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

const MasonryGridSection = () => {
  return (
    <section className="overflow-hidden bg-white pt-12 pb-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-4 font-serif text-4xl text-neutral-900">The Collection</h2>
          <div className="bg-gold-500 mx-auto h-1 w-16" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 */}
          <div className="mt-12 flex flex-col gap-8">
            <SimpleImage
              src={masonryImages[0].src}
              backup={masonryImages[0].backup}
              height="h-96"
            />
            <SimpleImage
              src={masonryImages[1].src}
              backup={masonryImages[1].backup}
              height="h-[500px]"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            <SimpleImage
              src={masonryImages[2].src}
              backup={masonryImages[2].backup}
              height="h-[600px]"
            />
            <SimpleImage
              src={masonryImages[3].src}
              backup={masonryImages[3].backup}
              height="h-80"
            />
          </div>

          {/* Column 3 */}
          <div className="mt-24 flex flex-col gap-8">
            <SimpleImage
              src={masonryImages[4].src}
              backup={masonryImages[4].backup}
              height="h-64"
            />
            <SimpleImage
              src={masonryImages[5].src}
              backup={masonryImages[5].backup}
              height="h-[550px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SimpleImage = ({ src, backup, height }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`w-full ${height} group relative cursor-pointer overflow-hidden rounded-sm bg-neutral-100 shadow-lg`}
    >
      <ImageWithFallback
        primarySrc={src}
        backupSrc={backup}
        alt="Gallery Item"
        className="h-full w-full"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-500 group-hover:bg-black/30">
        <div className="translate-y-4 transform font-serif text-2xl text-white italic opacity-0 transition-opacity duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Project
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
