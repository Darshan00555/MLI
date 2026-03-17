import Button from '../components/ui/Button';
import { getProjectBySlug } from '../data/projects';

import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { ExternalLink, MapPin } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="bg-white">
      <section className="relative min-h-[72vh] overflow-hidden bg-neutral-900">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        <div className="relative z-10 container mx-auto flex min-h-[72vh] items-end px-6 pt-36 pb-16">
          <div className="max-w-3xl">
            <span className="bg-gold-500 mb-4 inline-flex rounded-full px-4 py-1 text-xs font-bold tracking-[0.25em] text-white uppercase">
              {project.category}
            </span>
            <h1 className="mb-4 font-serif text-4xl text-white md:text-6xl">{project.title}</h1>
            <div className="mb-6 flex items-center text-sm tracking-[0.25em] text-white/75 uppercase">
              <MapPin className="text-gold-400 mr-3 h-4 w-4" />
              {project.location}
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-200 md:text-lg">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <span className="text-gold-600 text-sm tracking-[0.3em] uppercase">
                Project Overview
              </span>
              <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">
                Featured Residencies
              </h2>
              {project.detailParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <p className="text-gold-600 mb-3 text-sm tracking-[0.3em] uppercase">Enquire Now</p>
              <h3 className="mb-4 font-serif text-2xl text-neutral-900">
                Schedule a personalized site visit
              </h3>
              <p className="mb-8 text-neutral-600">
                Speak with the team for availability, walkthroughs, and project-specific details.
              </p>
              <Link to={`/contact?project=${encodeURIComponent(project.title)}`}>
                <Button variant="primary" icon={true}>
                  {project.ctaLabel}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-gold-600 mb-3 text-sm tracking-[0.3em] uppercase">3D Render</p>
              <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Model Preview</h2>
            </div>
            <a
              href={project.modelImage}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-600 inline-flex items-center text-sm font-medium tracking-[0.2em] text-neutral-700 uppercase transition-colors"
            >
              Open Full Render
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
            <img
              src={project.modelImage}
              alt={`${project.title} 3D render`}
              className="h-[420px] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-gold-600 mb-3 text-sm tracking-[0.3em] uppercase">Gallery</p>
              <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Project Visuals</h2>
            </div>
            <Link
              to="/projects"
              className="hover:text-gold-600 text-sm font-medium tracking-[0.2em] text-neutral-600 uppercase transition-colors"
            >
              Back to Projects
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {project.galleryImages.map((image, index) => (
              <div
                key={image}
                className={`overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} visual ${index + 1}`}
                  className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[420px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
