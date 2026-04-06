import BrochureForm from '../components/ui/BrochureForm';
import Button from '../components/ui/Button';
import LightBox from '../components/ui/LightBox';
import { getProjectBySlug } from '../data/projects';

import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { Download, ExternalLink, MapPin } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);
  const [lightBoxImages, setLightBoxImages] = useState([]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const openLightBox = (images, index) => {
    setLightBoxImages(images);
    setLightBoxIndex(index);
    setIsLightBoxOpen(true);
  };

  const handlePrev = () => {
    setLightBoxIndex((prev) => (prev === 0 ? lightBoxImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightBoxIndex((prev) => (prev === lightBoxImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="bg-white">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[72vh] overflow-hidden bg-neutral-900">
        {/* Background Image */}
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

        {/* Elevations Watermark Background */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <img
            src={project.modelImage}
            alt=""
            className="h-full w-full object-cover grayscale invert"
          />
        </div>

        <div className="relative z-10 container mx-auto flex min-h-[72vh] items-end px-6 pt-36 pb-16">
          <div className="max-w-3xl">
            <span className="bg-gold-500 mb-4 inline-flex rounded-full px-4 py-1 text-xs font-bold tracking-[0.25em] text-white uppercase">
              {project.category}
            </span>
            <div className="relative">
              {/* Floating "Elevations" behind title */}
              <span className="absolute -top-12 -left-4 font-serif text-6xl font-bold text-white/5 opacity-10 select-none md:text-9xl">
                ELEVATIONS
              </span>
              <h1 className="relative mb-4 font-serif text-4xl text-white md:text-6xl">
                {project.title}
              </h1>
            </div>
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

      {/* ── Overview Section ── */}
      <section className="bg-neutral-50 py-20">
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

            <div className="space-y-8">
              {/* Enquire Now Card */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
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

              {/* Request Brochure Card */}
              <BrochureForm projectTitle={project.title} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3D Render Section ── */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-gold-600 mb-3 text-sm tracking-[0.3em] uppercase">3D Render</p>
              <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Model Preview</h2>
            </div>
            <button
              onClick={() => openLightBox([project.modelImage], 0)}
              className="hover:text-gold-600 inline-flex items-center text-sm font-medium tracking-[0.2em] text-neutral-700 uppercase transition-colors"
            >
              Open Full Render
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 shadow-sm"
            onClick={() => openLightBox([project.modelImage], 0)}
          >
            <img
              src={project.modelImage}
              alt={`${project.title} 3D render`}
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="rounded-full bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-md">
                Click to Enlarge
              </span>
            </div>
          </div>

          {/* Floor Plan PDF Download — shown only if available */}
          {project.floorPlanPdf && (
            <div className="mt-6 flex justify-center">
              <a
                href={project.floorPlanPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Floor Plan (PDF)
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── Gallery Section ── */}
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
                className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
                onClick={() => openLightBox(project.galleryImages, index)}
              >
                <img
                  src={image}
                  alt={`${project.title} visual ${index + 1}`}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[420px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LightBox Component ── */}
      <LightBox
        isOpen={isLightBoxOpen}
        images={lightBoxImages}
        currentIndex={lightBoxIndex}
        onClose={() => setIsLightBoxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
};

export default ProjectDetail;
