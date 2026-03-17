 
import Button from '../components/ui/Button';
import { Carousel, CarouselContent, CarouselItem } from '../components/ui/Carousel';

import React, { useEffect, useState } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

const galleryItems = [
  {
    id: 'residential-one',
    title: 'The Grand Arch',
    description:
      'Experience luxury living in our flagship residential towers, offering panoramic city views and world-class amenities.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'villas',
    title: 'Orchard Villas',
    description:
      'Exclusive gated community featuring widely spaced villas surrounded by lush orchards and private gardens.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'commercial',
    title: 'Skyline Business Park',
    description:
      'A state-of-the-art commercial hub designed for modern businesses, featuring sustainable architecture and smart offices.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'penthouses',
    title: 'Riverside Estate',
    description:
      'Serene waterfront living with private docks, expansive terraces, and bespoke interiors for the discerning few.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'sustainable',
    title: 'Eco-Haven Residences',
    description:
      'Award-winning sustainable housing project powered entirely by renewable energy with zero-carbon footprint.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop',
  },
];

const Gallery4 = () => {
  const [carouselApi, setCarouselApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="bg-neutral-50 py-12 md:py-16" id="latest-projects">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex items-end justify-between md:mb-12">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-3xl font-medium text-neutral-900 md:text-5xl">
              Our Prestigious <span className="text-gold-500">Developments</span>
            </h2>
            <p className="max-w-lg text-neutral-600">
              Discover how we are redefining modern living with our award-winning architectural
              landmarks.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="ml-0 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {galleryItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] md:pl-6 lg:max-w-[400px]"
              >
                <a href={item.href} className="group block h-full rounded-none outline-none">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                      <div className="bg-gold-500 mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-md">
                        Featured Project
                      </div>
                      <h3 className="group-hover:text-gold-200 mb-3 font-serif text-2xl text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-neutral-300">
                        {item.description}
                      </p>
                      <div className="group-hover:text-gold-400 flex items-center text-sm font-medium text-white transition-colors">
                        View Details{' '}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 hidden justify-center gap-3 md:flex">
          <button
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous"
            className="group border-gold-500/40 hover:bg-gold-500 hover:border-gold-500 flex h-12 w-12 items-center justify-center rounded-full border bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,145,60,0.4)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="text-gold-500 h-5 w-5 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-white" />
          </button>
          <button
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next"
            className="group border-gold-500/40 hover:bg-gold-500 hover:border-gold-500 flex h-12 w-12 items-center justify-center rounded-full border bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(180,145,60,0.4)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight className="text-gold-500 h-5 w-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery4;
