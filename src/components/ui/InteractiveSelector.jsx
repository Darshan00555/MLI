import { getImageUrl } from '../../lib/media';

import React, { useEffect, useState } from 'react';

import { Bath, BedDouble, Building2, Sofa, Trees } from 'lucide-react';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const options = [
    {
      title: 'Grand Living',
      description: 'Expansive living spaces with modern aesthetics',
      primary: getImageUrl('IMG_5483(1).webp'),
      backup: getImageUrl('IMG_5415.webp'),
      icon: <Sofa size={24} className="text-gold-500" />,
    },
    {
      title: 'Luxury Spa',
      description: 'Private wellness sanctuaries in your home',
      primary: getImageUrl('IMG_5486(1).webp'),
      backup: getImageUrl('IMG_5416.webp'),
      icon: <Bath size={24} className="text-gold-500" />,
    },
    {
      title: 'Lush Gardens',
      description: 'Beautifully landscaped outdoor retreats',
      primary: getImageUrl('IMG_5492(1).webp'),
      backup: getImageUrl('IMG_5417.webp'),
      icon: <Trees size={24} className="text-gold-500" />,
    },
    {
      title: 'Modern Facades',
      description: 'Striking architectural designs',
      primary: getImageUrl('IMG_5495(1).webp'),
      backup: getImageUrl('IMG_5418.webp'),
      icon: <Building2 size={24} className="text-gold-500" />,
    },
    {
      title: 'Serene Suites',
      description: 'Bedrooms designed for ultimate tranquility',
      primary: getImageUrl('IMG_5505(1).webp'),
      backup: getImageUrl('IMG_5419.webp'),
      icon: <BedDouble size={24} className="text-gold-500" />,
    },
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Removed unused useEffect for animatedOptions

  return (
    <section className="relative flex flex-col items-center overflow-hidden bg-white py-8 font-sans text-neutral-900 md:py-12">
      <div className="relative z-10 mb-4 w-full max-w-2xl px-6 text-center">
        <h2 className="animate-fadeInTop mb-3 font-serif text-4xl tracking-tight text-neutral-900 delay-300 md:text-5xl">
          Curated <span className="text-gold-500">Moments</span>
        </h2>
        <p className="animate-fadeInTop mx-auto max-w-xl text-lg font-medium text-neutral-600 delay-600 md:text-xl">
          Experience the pinnacle of luxury living through our collection.
        </p>
      </div>

      <div
        className={`options relative z-10 flex ${isMobile ? 'h-[700px] flex-col' : 'h-[500px] flex-row'} w-full max-w-[1200px] items-stretch justify-center gap-3 px-4`}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden rounded-2xl transition-all duration-700 ease-in-out ${activeIndex === index ? 'active shadow-2xl' : 'shadow-md'} `}
            style={{
              minWidth: isMobile ? '100%' : '60px',
              minHeight: isMobile ? (activeIndex === index ? '300px' : '70px') : '100%',
              cursor: 'pointer',
              backgroundColor: '#f5f5f5',
              flex:
                activeIndex === index
                  ? isMobile
                    ? 'none'
                    : '6 1 0%'
                  : isMobile
                    ? 'none'
                    : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Robust Background Image */}
            <RobustImage
              primary={option.primary}
              backup={option.backup}
              alt={option.title}
              isActive={activeIndex === index}
            />

            {/* Gradient Overlay */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)',
                opacity: activeIndex === index ? 1 : 0.6,
              }}
            />

            {/* Label with icon and info */}
            <div
              className={`absolute right-6 bottom-6 left-6 flex items-center gap-5 transition-all duration-500 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 md:translate-y-0 md:opacity-100'} ${!isMobile && activeIndex !== index ? 'justify-center' : ''}`}
            >
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-xl backdrop-blur-lg transition-all duration-500 ${activeIndex === index ? 'bg-gold-500/20 border-gold-500/50 scale-110' : 'scale-90 opacity-0 md:opacity-100'} `}
              >
                {React.cloneElement(option.icon, {
                  className: activeIndex === index ? 'text-gold-500' : 'text-white',
                })}
              </div>

              <div
                className={`flex flex-col overflow-hidden text-white transition-all duration-500 ${activeIndex === index ? 'max-w-md scale-100 opacity-100' : 'max-w-0 scale-95 opacity-0 md:max-w-0'}`}
              >
                <span className="font-serif text-xl font-bold whitespace-nowrap drop-shadow-md md:text-2xl">
                  {option.title}
                </span>
                <span
                  className={`mt-1 text-sm whitespace-nowrap text-gray-100 transition-opacity delay-100 duration-500 md:text-base ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  {option.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInFromTop {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInTop { animation: fadeInFromTop 0.8s ease-in-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

// --- Helper Component for Robust Images in Selector ---
const RobustImage = ({ primary, backup, alt, isActive }) => {
  const [src, setSrc] = useState(primary);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (src === primary && backup) {
      setSrc(backup);
    } else {
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300" />
        <div className="z-10 font-serif text-4xl text-neutral-400 opacity-20">MLI</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000"
      style={{
        transform: isActive ? 'scale(1.0)' : 'scale(1.1)',
      }}
      onError={handleError}
      loading="lazy"
      decoding="async"
    />
  );
};

export default InteractiveSelector;
