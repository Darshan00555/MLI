import { projects } from '../data/projects';

import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group w-[300px] shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-xl sm:w-[380px]"
    >
      <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-64"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="p-4 md:p-5 lg:p-6">
        <span className="bg-gold-50 text-gold-700 mb-2 inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold tracking-[0.2em] uppercase md:mb-3 md:px-3 md:text-[10px]">
          {project.category}
        </span>

        <h3 className="mb-2 font-serif text-lg text-neutral-900 md:text-xl lg:text-2xl">
          {project.title}
        </h3>

        <div className="mb-3 flex items-center text-xs text-neutral-500 md:mb-4 md:text-sm">
          <MapPin className="text-gold-500 mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
          {project.location}
        </div>

        <p className="line-clamp-2 text-xs text-neutral-600 md:text-sm">
          {project.detailParagraphs.join(' ')}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="hover:text-gold-600 mt-4 inline-flex items-center text-xs font-medium tracking-[0.2em] text-neutral-800 uppercase transition-colors md:mt-5 md:text-sm"
        >
          Book a site visit
          <ArrowUpRight className="ml-1 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4" />
        </Link>
      </div>
    </Motion.article>
  );
};

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left' ? scrollLeft - clientWidth / 1.5 : scrollLeft + clientWidth / 1.5;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="bg-white py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <span className="text-gold-500 mb-2 block text-[10px] font-bold tracking-[0.3em] uppercase md:mb-3 md:text-xs">
              Our Portfolio
            </span>
            <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">
              Featured Residencies
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-neutral-600 md:mt-6 md:text-base">
              Discover our exclusive projects across sector 58, 59, 60 and 54.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-all hover:border-neutral-900 hover:bg-neutral-900"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 transition-all hover:border-neutral-900 hover:bg-neutral-900"
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-white" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth pb-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {projects.map((project, index) => (
            <div key={project.slug} className="scroll-snap-align-start">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scroll-snap-align-start {
          scroll-snap-align: start;
        }
      `,
        }}
      />
    </section>
  );
};

export default Projects;
