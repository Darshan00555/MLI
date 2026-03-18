/* eslint-disable no-unused-vars */
import InteractiveSelector from '../components/ui/InteractiveSelector';
import { Timeline } from '../components/ui/Timeline';
import { getImageUrl } from '../lib/media';

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
        <div className="z-10 font-serif text-6xl text-neutral-400 opacity-20">MLI</div>
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
    src: getImageUrl('IMG_5487.webp'),
    backup: getImageUrl('IMG_5488.webp'),
  },
  {
    src: getImageUrl('IMG_5489.webp'),
    backup: getImageUrl('IMG_5490.webp'),
  },
  {
    src: getImageUrl('IMG_5491.webp'),
    backup: getImageUrl('IMG_5492.webp'),
  },
  {
    src: getImageUrl('IMG_5493.webp'),
    backup: getImageUrl('IMG_5494.webp'),
  },
  {
    src: getImageUrl('IMG_5495.webp'),
    backup: getImageUrl('IMG_5496.webp'),
  },
  {
    src: getImageUrl('IMG_5499.webp'),
    backup: getImageUrl('IMG_5500.webp'),
  },
];

const Gallery = () => {
  // Data for the Timeline Component
  const timelineData = [
    {
      title: 'Architectural Grandeur',
      content: (
        <div>
          <p className="mb-10 text-base leading-relaxed font-normal text-neutral-600 md:text-lg">
            Every line, curve, and angle is meticulously engaged to create structures that stand as
            timeless monuments of luxury. Our designs blend modern aesthetics with functional
            brilliance.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl md:aspect-auto md:h-[500px]">
              <ImageWithFallback
                primarySrc={getImageUrl('IMG_5410.webp')}
                backupSrc={getImageUrl('IMG_5394.webp')}
                alt="Architectural Grandeur 1"
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  primarySrc={getImageUrl('IMG_5402.webp')}
                  backupSrc={getImageUrl('IMG_5400.webp')}
                  alt="Architectural Grandeur 2"
                  className="h-full w-full"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                <ImageWithFallback
                  primarySrc={getImageUrl('IMG_5411.webp')}
                  backupSrc={getImageUrl('IMG_5408.webp')}
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
          <p className="mb-10 text-base leading-relaxed font-normal text-neutral-600 md:text-lg">
            Interiors that whisper elegance. From Italian marble flooring to handcrafted fixtures,
            every detail is a testament to refined taste.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <ImageWithFallback
                primarySrc={getImageUrl('IMG_5477.webp')}
                backupSrc={getImageUrl('IMG_5478.webp')}
                alt="Interior Detail 1"
                className="h-full w-full"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <ImageWithFallback
                primarySrc={getImageUrl('IMG_5478.webp')}
                backupSrc={getImageUrl('IMG_5479.webp')}
                alt="Interior Detail 2"
                className="h-full w-full"
              />
            </div>
            <div className="col-span-1 aspect-video overflow-hidden rounded-xl shadow-xl md:col-span-2">
              <ImageWithFallback
                primarySrc={getImageUrl('IMG_5479.webp')}
                backupSrc={getImageUrl('IMG_5480.webp')}
                alt="Interior Wide View"
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
              primarySrc={getImageUrl('IMG_5481.webp')}
              backupSrc={getImageUrl('IMG_5482.webp')}
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
                primarySrc={getImageUrl('IMG_5483.webp')}
                backupSrc={getImageUrl('IMG_5484.webp')}
                alt="Panoramic Balcony"
                className="h-full w-full"
              />
            </div>
            <div className="h-60 overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                primarySrc={getImageUrl('IMG_5485.webp')}
                backupSrc={getImageUrl('IMG_5486.webp')}
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
          primarySrc={getImageUrl('IMG_5476.webp')}
          backupSrc={getImageUrl('IMG_5395.webp')}
          alt="Gallery Hero"
          className="h-full w-full opacity-60"
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
          <h1 className="mb-4 font-serif text-4xl font-medium tracking-tighter text-white drop-shadow-md sm:text-6xl md:text-8xl lg:text-9xl">
            Visual Poetry
          </h1>
          <p className="text-gold-400 text-sm font-semibold tracking-[0.3em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-shadow-sm sm:text-lg md:text-xl">
            Where Art Meets Architecture
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 animate-bounce text-white xl:block"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

const MasonryGridSection = () => {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
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
