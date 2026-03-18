/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.target.offsetHeight);
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white py-12 font-sans md:py-20" ref={containerRef}>
      {/* Header Section */}
      <div className="mx-auto mb-16 max-w-7xl px-4 md:mb-24 md:px-10 lg:pl-48">
        <h2 className="mb-8 font-serif text-5xl font-medium tracking-tight text-neutral-900 md:text-8xl">
          Journal of Excellence
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-500 md:text-2xl">
          A visual journey through our defining pillars of luxury, architecture, and bespoke
          interior design.
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative mb-24 flex flex-col pl-20 last:mb-0 md:mb-40 md:pl-40 lg:pl-64"
          >
            {/* Timeline Indicator (Dot) */}
            <div className="absolute top-2 left-8 z-40 md:top-4 md:left-20 lg:left-32">
              <div className="flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:h-12 md:w-12">
                <div className="bg-gold-500 h-4 w-4 rounded-full shadow-inner md:h-5 md:w-5" />
              </div>
            </div>

            {/* Section Title - Always Above Content */}
            <h3 className="mb-12 font-serif text-3xl leading-tight font-bold text-neutral-900 md:mb-16 md:text-7xl">
              {item.title}
            </h3>

            {/* Section Content (Paragraphs & Images) */}
            <div className="w-full pr-4 md:pr-10 lg:pr-20">{item.content}</div>
          </div>
        ))}

        {/* Vertical Timeline Line */}
        <div
          style={{ height: height + 'px' }}
          className="absolute top-0 left-8 w-[2px] -translate-x-1/2 overflow-hidden bg-neutral-100 md:left-20 lg:left-32"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="from-gold-500 absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b via-yellow-400 to-transparent shadow-[0_0_12px_rgba(234,179,8,0.4)]"
          />
        </div>
      </div>
    </div>
  );
};
