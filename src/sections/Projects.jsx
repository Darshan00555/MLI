/* eslint-disable no-unused-vars */
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Aralias',
    location: 'Golf Course Road, Gurgaon',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    category: 'Luxury Apartments',
  },
  {
    id: 2,
    title: 'Magnolias Park',
    location: 'Sector 42, Gurgaon',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop',
    category: 'Premium Villas',
  },
  {
    id: 3,
    title: 'Camellias',
    location: 'Golf Course Ext, Gurgaon',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop',
    category: 'Penthouse Collection',
  },
  {
    id: 4,
    title: 'Vasant Vihar Floors',
    location: 'Vasant Vihar, South Delhi',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    category: 'Builder Floors',
  },
  {
    id: 5,
    title: 'The Crest',
    location: 'DLF Phase 5, Gurgaon',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop',
    category: 'Luxury Apartments',
  },
  {
    id: 6,
    title: 'Sky Mansion',
    location: 'Chattarpur, South Delhi',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2584&auto=format&fit=crop',
    category: 'Farmhouses',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative h-[400px] cursor-pointer overflow-hidden rounded-sm"
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Bottom Gradient Overlay for Text Visibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-8 transition-transform duration-300 group-hover:translate-y-0">
        <div className="translate-y-4 transform transition-transform duration-500 group-hover:translate-y-0">
          <span className="bg-gold-500 mb-3 inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-md">
            {project.category}
          </span>
          <h3 className="mb-2 font-serif text-2xl text-white">{project.title}</h3>
          <div className="mb-6 flex items-center text-sm text-neutral-300 opacity-80">
            <MapPin className="text-gold-500 mr-2 h-4 w-4" />
            {project.location}
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center text-sm font-medium tracking-widest text-white uppercase opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100"
          >
            View Details <ArrowUpRight className="text-gold-500 ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-12">
      <div className="container mx-auto px-6">
        <SectionTitle title="Featured Residences" subtitle="Our Portfolio" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
