 
import React, { useEffect } from 'react';

import { AnimatePresence, motion as Motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const LightBox = ({ isOpen, images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 p-4 md:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[2010] rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 z-[2010] rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:left-8"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 z-[2010] rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-colors hover:bg-white/20 md:right-8"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </>
        )}

        {/* Image Container */}
        <Motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative max-h-full max-w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="h-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-sm tracking-widest text-white/50 uppercase">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  );
};

export default LightBox;
