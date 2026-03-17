import Button from '../components/ui/Button';
import { projects } from '../data/projects';
import { getImageUrl } from '../lib/media';

import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

const MotionArticle = motion.article;

const Projects = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] overflow-hidden bg-neutral-900">
        <img
          src={getImageUrl('IMG_5481.webp')}
          alt="Master Land Infra Projects"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/15" />

        <div className="relative z-10 container mx-auto flex min-h-[60vh] items-end px-6 pt-32 pb-16">
          <div className="max-w-3xl">
            <span className="text-gold-400 mb-3 block text-sm tracking-[0.3em] uppercase">
              Our Portfolio
            </span>
            <h1 className="font-serif text-4xl text-white md:text-6xl">Featured Residencies</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
              Discover our exclusive projects across sector 58, 59, 60 and 54.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <MotionArticle
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Link>

                <div className="p-8">
                  <span className="bg-gold-50 text-gold-700 mb-4 inline-flex rounded-full px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase">
                    {project.category}
                  </span>
                  <h2 className="mb-3 font-serif text-3xl text-neutral-900">{project.title}</h2>
                  <div className="mb-5 flex items-center text-sm text-neutral-500">
                    <MapPin className="text-gold-500 mr-2 h-4 w-4" />
                    {project.location}
                  </div>
                  <p className="mb-8 text-neutral-600">{project.detailParagraphs.join(' ')}</p>

                  <div className="flex flex-wrap gap-4">
                    <Link to={`/projects/${project.slug}`}>
                      <Button variant="primary" icon={true}>
                        View Project
                      </Button>
                    </Link>
                    <Link
                      to={`/contact?project=${encodeURIComponent(project.title)}`}
                      className="hover:text-gold-600 inline-flex items-center text-sm font-medium tracking-[0.2em] text-neutral-700 uppercase transition-colors"
                    >
                      Book a Site Visit
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </MotionArticle>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
