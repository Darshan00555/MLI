/* eslint-disable no-unused-vars */
import SectionTitle from '../components/ui/SectionTitle';
import { getImageUrl } from '../lib/media';

import React, { useRef } from 'react';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Eye, Leaf, Target, Users, Warehouse } from 'lucide-react';

// stats data
const stats = [
  { id: 1, value: '30+', label: 'Years of Excellence', icon: Award },
  { id: 2, value: '500+', label: 'Happy Families', icon: Users },
  { id: 3, value: '2M+', label: 'Sq. Ft. Delivered', icon: Warehouse },
  { id: 4, value: '100%', label: 'Sustainable', icon: Leaf },
];

const AnimatedCounter = ({ value, label, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="hover:shadow-gold-500/10 flex flex-col items-center rounded-sm border border-neutral-100 bg-white p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="bg-gold-50 text-gold-500 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-serif text-4xl font-medium text-neutral-900">{value}</h3>
      <p className="text-sm tracking-wider text-neutral-500 uppercase">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main className="overflow-hidden bg-white" ref={containerRef}>
      {/* 1. Cinematic Header with Parallax */}
      <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={getImageUrl('IMG_5402.webp')}
            alt="About Header"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 font-serif text-5xl text-white md:text-7xl"
          >
            Our Story. Our Legacy.
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className="bg-gold-500 mx-auto h-1"
          />
        </div>
      </section>

      {/* 2. Who We Are - Clean & Elegant */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className="bg-gold-500 h-[1px] w-12" />
                <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="mb-8 font-serif text-4xl leading-tight text-neutral-900 md:text-5xl">
                Crafting Landmarks that <span className="text-gold-600 italic">Define Luxury.</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed font-light text-neutral-600">
                Established in 1992, MLI has redefined the skyline with architectural marvels that
                blend aesthetics with functionality. We don't just build structures; we curate
                lifestyles for those who appreciate the finer things in life.
              </p>
              <p className="mb-8 text-lg leading-relaxed font-light text-neutral-600">
                From bespoke interiors to sustainable engineering, our commitment to excellence
                ensures that every home is a masterpiece of design and comfort.
              </p>

              <img
                src="https://signatureglobal.in/images/about/about-signature-global.webp" // Signature style signature or quote image if available, else decorative
                alt="Signature"
                className="h-16 opacity-80"
              />
            </motion.div>

            {/* Image Composition */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <img
                  src={getImageUrl('IMG_5400.webp')}
                  alt="Architecture"
                  className="h-[600px] w-full rounded-sm object-cover shadow-2xl"
                />
              </motion.div>
              {/* Gold Border Frame */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="border-gold-500 absolute top-10 -right-10 z-0 hidden h-full w-full border-2 lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Gold Philosophy Banner */}
      <section className="bg-gold-500 relative overflow-hidden py-24 text-white">
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 font-serif text-3xl leading-tight md:text-5xl">
              "We build with the precision of an artist <br className="hidden md:block" /> and the
              integrity of a master craftsman."
            </h2>
            <div className="mx-auto mt-8 h-1 w-24 bg-white opacity-50" />
          </motion.div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="relative z-20 -mt-10 mb-10 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision - Interactive Cards */}
      <section className="bg-neutral-50 py-24">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Purpose" subtitle="Guiding Principles" />

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Vision Card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="border-gold-500 group border-t-4 bg-white p-12 shadow-xl transition-all duration-300"
            >
              <div className="group-hover:bg-gold-500 text-gold-500 mb-6 inline-block rounded-full bg-neutral-50 p-4 transition-colors duration-300 group-hover:text-white">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mb-4 font-serif text-3xl text-neutral-900">Our Vision</h3>
              <p className="leading-relaxed text-neutral-600">
                To be the most trusted name in luxury real estate globally, creating sustainable
                spaces that inspire and elevate the human experience. We aim to set new benchmarks
                in design, quality, and customer satisfaction.
              </p>
            </motion.div>

            {/* Mission Card - Inverted Style */}
            <motion.div
              whileHover={{ y: -10 }}
              className="border-gold-500 group border-t-4 bg-neutral-900 p-12 text-white shadow-xl transition-all duration-300"
            >
              <div className="group-hover:bg-gold-500 text-gold-500 mb-6 inline-block rounded-full bg-white/10 p-4 transition-colors duration-300 group-hover:text-white">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="mb-4 font-serif text-3xl">Our Mission</h3>
              <p className="leading-relaxed text-neutral-300">
                To deliver exceptional value through innovation and transparency. We are dedicated
                to constructing environmentally responsible buildings while fostering a culture of
                integrity and excellence in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
