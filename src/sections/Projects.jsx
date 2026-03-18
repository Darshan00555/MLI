/* eslint-disable no-unused-vars */
import { projects } from '../data/projects';

import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
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
          View Project
          <ArrowUpRight className="ml-1 h-3.5 w-3.5 md:ml-2 md:h-4 md:w-4" />
        </Link>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-8 text-center md:mb-12">
          <span className="text-gold-500 mb-2 block text-[10px] tracking-[0.2em] uppercase md:mb-3 md:text-xs">
            Our Portfolio
          </span>
          <h2 className="font-serif text-2xl text-neutral-900 md:text-4xl">Featured Residencies</h2>
          <div className="bg-gold-500 mx-auto mt-3 h-[1.5px] w-12 md:mt-4 md:h-[2px] md:w-16" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 md:mt-5 md:text-base">
            Discover our exclusive projects across sector 58, 59, 60 and 54.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
