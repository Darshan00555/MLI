/* eslint-disable no-unused-vars */
import Button from '../components/ui/Button';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import VideoPlayer from '../components/ui/video-player';
import { getImageUrl } from '../lib/media';

import React, { useRef } from 'react';
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
            src={getImageUrl('IMG_5496.webp')}
            alt="Luxury Living Room"
            className="h-full w-full object-cover opacity-80 will-change-transform"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
        {/* Cinematic Overlays - Professional Vignette */}
        <div className="absolute inset-0 bg-neutral-900/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_20%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/20 via-transparent to-neutral-900/50" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center pt-20 md:pt-32">
        {/* Text Content */}
        <div className="container mx-auto px-6 text-center xl:pr-36 2xl:pr-24">
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
                className="text-gold-300 block text-sm font-medium tracking-[0.5em] uppercase md:text-base"
              >
                Master Land Infra
              </motion.span>
            </div>

            {/* Main Heading Mask Reveal */}
            <h1 className="relative z-20 mb-6 max-w-4xl font-serif text-3xl tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
              <div className="overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: '100%' },
                    visible: {
                      y: 0,
                      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
                    },
                  }}
                  className="block pb-2"
                >
                  Premium Builder Floors in
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
                  className="text-gold-200 block pb-2 italic"
                >
                  Gurgaon's Most Sought-After Locations
                </motion.span>
              </div>
            </h1>

            {/* Description Fade In */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } },
              }}
              className="mx-auto mb-8 max-w-2xl px-4 text-sm leading-relaxed font-medium text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-base md:mb-12 md:text-lg lg:px-0"
            >
              Discover thoughtfully designed homes that combine modern architecture, prime location,
              and everyday convenience — crafted for those who expect more from their home.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1 } },
              }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link to="/projects">
                <Button
                  variant="primary"
                  icon={true}
                  className="w-full min-w-[200px] border-none bg-white font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.4)] ring-2 ring-white/30 transition-all duration-300 hover:bg-white hover:shadow-[0_0_60px_rgba(255,255,255,0.8)] hover:ring-white/60 sm:w-auto"
                >
                  Explore Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="w-full min-w-[200px] border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  Book a Site Visit
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Extreme Magnetic Play Button - Floating Bottom Right */}
        <Dialog>
          <DialogTrigger asChild>
            <MagneticPlayButton />
          </DialogTrigger>
          <DialogContent className="overflow-hidden border-none bg-transparent p-0 shadow-none outline-none sm:max-w-5xl">
            <VideoPlayer src="https://www.youtube.com/watch?v=Get7rqXYrbQ" size="full" autoPlay />
          </DialogContent>
        </Dialog>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 mix-blend-difference xl:flex"
      >
        <div className="h-10 w-[1px] bg-white/40" />
        <span className="text-[10px] font-medium tracking-[0.4em] text-white/50 uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

const MagneticPlayButton = React.forwardRef(({ ...props }, ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.2);
    y.set((clientY - (top + height / 2)) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group absolute top-1/2 right-6 z-30 hidden -translate-y-1/2 cursor-pointer items-center justify-center border-none bg-transparent outline-none xl:flex 2xl:right-12"
      {...props}
    >
      <div className="bg-gold-500/20 absolute inset-0 animate-ping rounded-full opacity-20 duration-[3000ms]" />
      <div className="absolute inset-[-20px] scale-0 rounded-full border border-white/10 transition-transform duration-700 ease-out group-hover:scale-100" />

      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.3)] backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.6)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <Play className="relative z-10 ml-1 h-8 w-8 fill-white text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-transform duration-500 group-hover:scale-110" />
      </div>

      <div className="absolute -bottom-10 translate-y-2 transform whitespace-nowrap opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[10px] font-medium tracking-[0.3em] text-white uppercase backdrop-blur-sm">
          Watch Film
        </span>
      </div>
    </motion.button>
  );
});

export default Hero;
