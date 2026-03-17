import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

import React from 'react';

import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const About = () => {
  return (
    <section id="about" className="overflow-hidden bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Image Composition */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                alt="Luxury Building"
                className="h-[600px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Elements */}
            <div className="border-gold-500/30 absolute -top-6 -left-6 z-0 h-32 w-32 border-t-2 border-l-2" />
            <div className="border-gold-500/30 absolute -right-6 -bottom-6 z-0 h-32 w-32 border-r-2 border-b-2" />

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -left-10 z-20 hidden max-w-xs border border-neutral-100 bg-white p-8 shadow-2xl md:block"
            >
              <h4 className="text-gold-500 mb-2 font-serif text-4xl">30+</h4>
              <p className="text-sm tracking-wider text-neutral-500 uppercase">
                Years of Excellence
              </p>
            </MotionDiv>
          </MotionDiv>

          {/* Right: Content */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              title="Building Trust, With Quality"
              subtitle="Our Philosophy"
              align="left"
            />

            <p className="mb-6 text-lg leading-relaxed font-light text-neutral-600">
              At MIL, we believe that a home is more than just a place to live—it's a sanctuary
              where life's best moments unfold. Since 1992, we have been at the forefront of luxury
              real estate, creating spaces that blend timeless elegance with modern functionality.
            </p>

            <p className="mb-10 text-lg leading-relaxed font-light text-neutral-600">
              Our commitment to excellence is reflected in every detail, from the selection of
              premium materials to the thoughtful architectural designs that maximize light and
              space. We don't just build structures; we craft lifestyles.
            </p>

            <ul className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                'Premium Locations',
                'Sustainable Design',
                'Artistic Architecture',
                'Vastu Compliant',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm tracking-wide text-neutral-600"
                >
                  <span className="bg-gold-500 mr-3 h-1.5 w-1.5 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="outline" icon={true}>
              Read Our Story
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default About;
