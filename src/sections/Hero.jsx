/* eslint-disable no-unused-vars */
import Button from '../components/ui/Button';

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-neutral-900"
    >
      {/* Dynamic Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
            alt="Luxury Living Room"
            className="h-full w-full object-cover opacity-80"
          />
        </motion.div>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-transparent to-neutral-900/80" />
        <div className="absolute inset-0 bg-neutral-900/20" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        {/* Text Content */}
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-center">
            {/* Subheading Mask Reveal */}
            <div className="mb-6 overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: '100%' },
                  visible: {
                    y: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
                  },
                }}
                className="text-gold-300 block text-xs font-medium tracking-[0.2em] uppercase sm:text-sm sm:tracking-[0.35em] md:text-base md:tracking-[0.5em]"
              >
                Redefining Luxury Living
              </motion.span>
            </div>

            {/* Main Heading Mask Reveal */}
            <h1
              className="relative z-20 mb-4 font-serif tracking-tight text-white sm:mb-6 md:mb-8"
              style={{ fontSize: 'clamp(2rem, 10vw, 9rem)' }}
            >
              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '100%' },
                    visible: {
                      y: 0,
                      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
                    },
                  }}
                  className="block pb-4"
                >
                  Live Beyond
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '100%' },
                    visible: {
                      y: 0,
                      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
                    },
                  }}
                  className="text-gold-200 block pb-4 italic"
                >
                  Ordinary
                </motion.span>
              </div>
            </h1>

            {/* Description Fade In */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
              }}
              className="mx-auto mb-8 max-w-xs px-2 text-base leading-relaxed font-light text-neutral-200 sm:max-w-lg sm:text-lg md:mb-12 md:max-w-2xl md:text-xl lg:text-2xl"
            >
              Experience the pinnacle of sophisticated living with MIL. Crafting timeless homes
              since 1992.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
              }}
              className="flex justify-center"
            >
              <Link to="/projects">
                <Button
                  variant="primary"
                  icon={true}
                  className="animate-pulse-slow min-w-[200px] scale-105 border-none bg-white font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.6)] ring-4 ring-white/30 transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-[0_0_80px_rgba(255,255,255,1)] hover:ring-white/60"
                >
                  Explore Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Extreme Magnetic Play Button - Floating Bottom Right */}
        <MagneticPlayButton />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 mix-blend-difference"
      >
        <div className="h-10 w-[1px] bg-white/50" />
        <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

const MagneticPlayButton = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 }); // Magnetic strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href="https://www.youtube.com/watch?v=Get7rqXYrbQ" // User can update this link
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className="group absolute right-50 bottom-77 z-30 hidden cursor-pointer items-center justify-center lg:flex"
    >
      {/* Pulsing Ripple Effect */}
      <div className="bg-gold-500/20 absolute inset-0 animate-ping rounded-full opacity-20 duration-[3000ms]" />
      <div className="absolute inset-[-20px] scale-0 rounded-full border border-white/10 transition-transform duration-700 ease-out group-hover:scale-100" />

      {/* Glass Button Container */}
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]">
        {/* Animated Fill on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <Play className="relative z-10 ml-1 h-8 w-8 fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-transform duration-500 group-hover:scale-110" />
      </div>

      {/* Rotating Text or Label */}
      <div className="absolute -bottom-10 translate-y-2 transform whitespace-nowrap opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-medium tracking-[0.3em] text-white uppercase backdrop-blur-sm">
          Watch Film
        </span>
      </div>
    </motion.a>
  );
};

export default Hero;
