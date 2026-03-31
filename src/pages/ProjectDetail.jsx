import Button from '../components/ui/Button';
import { getProjectBySlug } from '../data/projects';
import { leadFormAction } from '../lib/forms';

import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

import { Download, ExternalLink, MapPin } from 'lucide-react';

const BrochureForm = ({ projectTitle }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(leadFormAction, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        // Trigger download
        const link = document.createElement('a');
        link.href = '/brochure.pdf';
        link.download = 'MLI_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border-gold-200 bg-gold-50 rounded-2xl border p-8 text-center">
        <div className="bg-gold-500 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full text-white">
          <Download className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-serif text-2xl text-neutral-900">Thank You!</h3>
        <p className="text-neutral-600">
          Your brochure download has started. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <p className="text-gold-600 mb-3 text-sm tracking-[0.3em] uppercase">Digital Brochure</p>
      <h3 className="mb-4 font-serif text-2xl text-neutral-900">Request Project Details</h3>
      <p className="mb-6 text-sm text-neutral-600">
        Fill the form below to instantly download the project brochure.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="source" value={`Brochure Request - ${projectTitle}`} />
        <input type="hidden" name="project" value={projectTitle} />

        <div>
          <input
            required
            type="text"
            name="name"
            placeholder="Your Full Name"
            className="focus:border-gold-500 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition-colors outline-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="focus:border-gold-500 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition-colors outline-none"
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Phone"
            className="focus:border-gold-500 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition-colors outline-none"
          />
        </div>

        <button
          disabled={status === 'loading'}
          className="bg-gold-500 hover:bg-gold-600 disabled:bg-gold-300 flex w-full items-center justify-center gap-2 rounded-md py-3 font-semibold text-white transition-all"
        >
          {status === 'loading' ? (
            'Preparing Download...'
          ) : (
            <>
              <Download className="h-4 w-4" />
              Download Brochure
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="mt-2 text-center text-xs text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

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

          {/* Floor Plan PDF Download — shown only if available */}
          {project.floorPlanPdf && (
            <div className="mt-6 flex justify-center">
              <a
                href={project.floorPlanPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wider text-white uppercase transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Download Floor Plan (PDF)
              </a>
            </div>
          )}
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
