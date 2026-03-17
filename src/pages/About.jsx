/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Award, Users, Warehouse, Leaf, Target, Eye, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

// stats data
const stats = [
  { id: 1, value: "30+", label: "Years of Excellence", icon: Award },
  { id: 2, value: "500+", label: "Happy Families", icon: Users },
  { id: 3, value: "2M+", label: "Sq. Ft. Delivered", icon: Warehouse },
  { id: 4, value: "100%", label: "Sustainable", icon: Leaf },
];

const AnimatedCounter = ({ value, label, icon: Icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center p-6 bg-white border border-neutral-100 shadow-lg hover:shadow-xl hover:shadow-gold-500/10 transition-shadow duration-300 rounded-sm"
    >
      <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mb-4 text-gold-500">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-4xl font-serif font-medium text-neutral-900 mb-2">{value}</h3>
      <p className="text-neutral-500 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-white overflow-hidden" ref={containerRef}>
      
      {/* 1. Cinematic Header with Parallax */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
            alt="About Header" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Our Story. Our Legacy.
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="h-1 bg-gold-500 mx-auto"
          />
        </div>
      </section>

      {/* 2. Who We Are - Clean & Elegant */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                 <div className="w-12 h-[1px] bg-gold-500" />
                 <span className="text-gold-500 uppercase tracking-widest text-sm font-medium">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">
                Crafting Landmarks that <span className="italic text-gold-600">Define Luxury.</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6 font-light">
                Established in 1992, MIL has redefined the skyline with architectural marvels that blend aesthetics with functionality. We don't just build structures; we curate lifestyles for those who appreciate the finer things in life.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-light">
                From bespoke interiors to sustainable engineering, our commitment to excellence ensures that every home is a masterpiece of design and comfort.
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
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop" 
                  alt="Architecture" 
                  className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
                />
              </motion.div>
              {/* Gold Border Frame */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-10 -right-10 w-full h-full border-2 border-gold-500 z-0 hidden lg:block"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Gold Philosophy Banner */}
      <section className="bg-gold-500 py-24 text-white relative overflow-hidden">
        {/* Abstract Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                 "We build with the precision of an artist <br className="hidden md:block"/> and the integrity of a master craftsman."
               </h2>
               <div className="w-24 h-1 bg-white mx-auto mt-8 opacity-50" />
             </motion.div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 -mt-10 mb-10 relative z-20">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {stats.map(stat => (
               <AnimatedCounter key={stat.id} {...stat} />
             ))}
           </div>
         </div>
      </section>

      {/* 5. Mission & Vision - Interactive Cards */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="Our Purpose" subtitle="Guiding Principles" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
            {/* Vision Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 shadow-xl border-t-4 border-gold-500 group transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-neutral-50 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 text-gold-500">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif text-neutral-900 mb-4">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                To be the most trusted name in luxury real estate globally, creating sustainable spaces that inspire and elevate the human experience. We aim to set new benchmarks in design, quality, and customer satisfaction.
              </p>
            </motion.div>

             {/* Mission Card - Inverted Style */}
             <motion.div 
              whileHover={{ y: -10 }}
              className="bg-neutral-900 p-12 shadow-xl border-t-4 border-gold-500 group transition-all duration-300 text-white"
            >
              <div className="mb-6 inline-block p-4 bg-white/10 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 text-gold-500">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif mb-4">Our Mission</h3>
              <p className="text-neutral-300 leading-relaxed">
                To deliver exceptional value through innovation and transparency. We are dedicated to constructing environmentally responsible buildings while fostering a culture of integrity and excellence in everything we do.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
