/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { Bath, BedDouble, Building2, Sofa, Trees } from 'lucide-react';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [animatedOptions, setAnimatedOptions] = useState([]); // Removed unused state

  // Data with Primary (Pexels) and Backup (Unsplash)
  const options = [
    {
      title: 'Grand Living',
      description: 'Expansive living spaces with modern aesthetics',
      image:
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      backup:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      icon: <Sofa size={24} className="text-gold-500" />,
    },
    {
      title: 'Luxury Spa',
      description: 'Private wellness sanctuaries in your home',
      image:
        'https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      backup:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      icon: <Bath size={24} className="text-gold-500" />,
    },
    {
      title: 'Lush Gardens',
      description: 'Beautifully landscaped outdoor retreats',
      image:
        'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      backup:
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80',
      icon: <Trees size={24} className="text-gold-500" />,
    },
    {
      title: 'Modern Facades',
      description: 'Striking architectural designs',
      image:
        'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      backup:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      icon: <Building2 size={24} className="text-gold-500" />,
    },
    {
      title: 'Serene Suites',
      description: 'Bedrooms designed for ultimate tranquility',
      image:
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      backup:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
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
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-white pt-20 pb-4 font-sans text-neutral-900">
      <div className="relative z-10 mb-12 w-full max-w-2xl px-6 text-center">
        <h2 className="animate-fadeInTop mb-3 font-serif text-4xl tracking-tight text-neutral-900 delay-300 md:text-5xl">
          Curated <span className="text-gold-500">Moments</span>
        </h2>
        <p className="animate-fadeInTop mx-auto max-w-xl text-lg font-medium text-neutral-600 delay-600 md:text-xl">
          Experience the pinnacle of luxury living through our collection.
        </p>
      </div>

      <div className="options relative z-10 flex h-[500px] w-full max-w-[1200px] items-stretch justify-center gap-2 px-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden rounded-xl transition-all duration-700 ease-in-out ${activeIndex === index ? 'active' : ''} `}
            style={{
              // Removed backgroundImage, using img tag below
              minWidth: '60px',
              cursor: 'pointer',
              backgroundColor: '#f5f5f5',
              boxShadow:
                activeIndex === index
                  ? '0 20px 40px rgba(0,0,0,0.2)'
                  : '0 5px 15px rgba(0,0,0,0.05)',
              flex: activeIndex === index ? '5 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Robust Background Image */}
            <RobustImage
              primary={option.image}
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
              className={`absolute right-6 bottom-6 left-6 flex items-center gap-4 transition-all duration-500 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
            >
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-transform duration-500 ${activeIndex === index ? 'scale-110' : 'scale-100'} `}
              >
                {React.cloneElement(option.icon, { className: 'text-white' })}
              </div>

              <div
                className={`flex flex-col overflow-hidden text-white transition-all duration-500 ${activeIndex === index ? 'max-w-md opacity-100' : 'max-w-0 opacity-0 md:max-w-md md:opacity-0'}`}
              >
                <span className="font-serif text-xl font-medium whitespace-nowrap">
                  {option.title}
                </span>
                <span
                  className={`mt-1 text-sm whitespace-nowrap text-gray-200 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
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
        <div className="z-10 font-serif text-4xl text-neutral-400 opacity-20">MIL</div>
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
    />
  );
};

export default InteractiveSelector;
