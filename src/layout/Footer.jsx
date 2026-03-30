/* eslint-disable no-unused-vars */
import { leadFormAction } from '../lib/forms';
import { getLogoUrl } from '../lib/media';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Instagram, Mail, Phone } from 'lucide-react';

/* ── Social Icon ── */
const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="hover:bg-gold-500 hover:border-gold-500 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 hover:text-white"
  >
    <Icon className="h-4 w-4" />
  </a>
);

/* ── Footer Nav Link ── */
const FooterLink = ({ href, children }) => (
  <li>
    <Link to={href} className="hover:text-gold-600 text-sm text-neutral-600 transition-colors">
      {children}
    </Link>
  </li>
);

/* ── Newsletter Form ── */
const NewsletterForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch(leadFormAction, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'Footer Newsletter' }),
      });
    } catch (_) {
      /* ignore */
    }
    setSubmitted(true);
    setEmail('');
  };

  if (submitted) {
    return (
      <p className="text-gold-600 text-sm font-medium">
        ✓ Thank you! You&apos;ll hear from us soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email Address"
        className="focus:border-gold-500 w-full rounded-sm border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gold-500 hover:bg-gold-600 rounded-sm py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};

/* ── Footer ── */
const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pt-10 pb-6 md:pt-16 md:pb-10">
      <div className="container mx-auto px-5 md:px-8">
        {/* Top section */}
        <div className="mb-6 border-b border-neutral-200 pb-8 md:mb-8 md:pb-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            {/* Brand Column */}
            <div className="w-full max-w-[280px]">
              <img src="Vectorfile.svg" alt="MLI Logo" className="mb-3 h-14 w-auto" />
              <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                Pioneering luxury real estate with a commitment to quality, innovation, and timeless
                design.
              </p>
              <div className="mb-4 space-y-2">
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold-600 flex items-center gap-2 text-sm text-neutral-600 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                  +91 98765 43210
                </a>
                <a
                  href="mailto:info@masterlandinfra.com"
                  className="hover:text-gold-600 flex items-center gap-2 text-sm text-neutral-600 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                  info@masterlandinfra.com
                </a>
              </div>
              <SocialLink icon={Instagram} href="#" />
            </div>

            {/* Links + Newsletter */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-10">
              {/* Quick Links */}
              <div>
                <h4 className="mb-3 font-serif text-sm font-semibold tracking-wider text-neutral-900 uppercase">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/about">About Us</FooterLink>
                  <FooterLink href="/projects">Projects</FooterLink>
                  <FooterLink href="/gallery">Gallery</FooterLink>
                  <FooterLink href="/blogs">Blogs</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h4 className="mb-3 font-serif text-sm font-semibold tracking-wider text-neutral-900 uppercase">
                  Projects
                </h4>
                <ul className="space-y-2">
                  <FooterLink href="/projects/ireo-a1-01">IREO A1-01</FooterLink>
                  <FooterLink href="/projects/ireo-a1-18">IREO A1-18</FooterLink>
                  <FooterLink href="/projects/suncity-c-85">Suncity C-85</FooterLink>
                </ul>
              </div>

              {/* Newsletter — full width on 2-col, normal on 3-col */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="mb-3 font-serif text-sm font-semibold tracking-wider text-neutral-900 uppercase">
                  Newsletter
                </h4>
                <p className="mb-3 text-sm text-neutral-600">
                  Get updates on new launches and exclusive offers.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} MLI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
