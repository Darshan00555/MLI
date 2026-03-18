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
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="p-5 md:p-8">
        <span className="bg-gold-50 text-gold-700 mb-3 inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase md:mb-4 md:px-4 md:text-xs">
          {project.category}
        </span>

        <h3 className="mb-3 font-serif text-2xl text-neutral-900 md:text-3xl">{project.title}</h3>

        <div className="mb-5 flex items-center text-sm text-neutral-500">
          <MapPin className="text-gold-500 mr-2 h-4 w-4" />
          {project.location}
        </div>

        <p className="text-neutral-600">{project.detailParagraphs.join(' ')}</p>

        <Link
          to={`/projects/${project.slug}`}
          className="hover:text-gold-600 mt-6 inline-flex items-center text-sm font-medium tracking-[0.2em] text-neutral-800 uppercase transition-colors"
        >
          View Project
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center md:mb-14">
          <span className="text-gold-500 mb-3 block text-xs tracking-[0.2em] uppercase md:text-sm">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Featured Residencies</h2>
          <div className="bg-gold-500 mx-auto mt-4 h-[1.5px] w-16 md:mt-6 md:h-[2px] md:w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
            Discover our exclusive projects across sector 58, 59, 60 and 54.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
