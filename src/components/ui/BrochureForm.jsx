import { leadFormAction } from '../../lib/forms';

import React, { useState } from 'react';

import { Download } from 'lucide-react';

const BrochureForm = ({ projectTitle = 'General Portfolio' }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      console.log('Sending lead to:', leadFormAction);
      const response = await fetch(leadFormAction, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Lead submitted successfully!');
        setStatus('success');
        // Trigger automated download
        const link = document.createElement('a');
        link.href =
          'https://api.cloudinary.com/v1_1/de8be7dqu/image/download?api_key=191276459951236&attachment=true&public_id=brochure_za4npg&signature=d67cd1b993876c1e94e0406986335ffabac3b426&source=ml&target_filename=brochure_za4npg&timestamp=1774946131&type=upload';
        link.download = 'MLI_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const errorData = await response.json();
        console.error('Formspree Error Response:', errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error('Form submission exception:', err);
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
        <p className="mb-6 text-neutral-600">
          Your brochure download has started. If it didn't, please click the button below.
        </p>
        <a
          href="https://api.cloudinary.com/v1_1/de8be7dqu/image/download?api_key=191276459951236&attachment=true&public_id=brochure_za4npg&signature=d67cd1b993876c1e94e0406986335ffabac3b426&source=ml&target_filename=brochure_za4npg&timestamp=1774946131&type=upload"
          className="bg-gold-500 hover:bg-gold-600 inline-flex items-center gap-2 rounded-md px-6 py-2 font-semibold text-white transition-all"
        >
          <Download className="h-4 w-4" />
          Download Brochure
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-gold-600 mb-2 text-xs font-bold tracking-[0.3em] uppercase">
        Digital Brochure
      </p>
      <h3 className="mb-3 font-serif text-xl text-neutral-900 md:text-2xl">
        Request Project Details
      </h3>
      <p className="mb-6 text-sm text-neutral-600">
        Fill the form below to instantly download the project brochure via email and direct link.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="source" value={`Brochure Request - ${projectTitle}`} />
        <input type="hidden" name="project" value={projectTitle} />

        <div className="space-y-4">
          <div className="relative">
            <input
              required
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="focus:border-gold-500 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition-all outline-none focus:bg-white"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              className="focus:border-gold-500 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition-all outline-none focus:bg-white"
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="focus:border-gold-500 w-full rounded-md border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm transition-all outline-none focus:bg-white"
            />
          </div>
        </div>

        <button
          disabled={status === 'loading'}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 py-3.5 font-bold tracking-widest text-white uppercase transition-all hover:bg-neutral-800 disabled:bg-neutral-400"
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
          <p className="mt-2 text-center text-xs font-medium text-red-500">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default BrochureForm;
