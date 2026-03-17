/* eslint-disable no-unused-vars */
import { getLogoUrl } from '../lib/media';

import React from 'react';
import { Link } from 'react-router-dom';

import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

// import { cn } from '../lib/utils2'; // Removed unused cn

const SocialLink = ({ icon: Icon, href }) => (
  <a
    href={href}
    className="hover:bg-gold-500 hover:border-gold-500 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 hover:text-white"
  >
    <Icon className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link
      to={href}
      className="hover:text-gold-600 group flex items-center text-neutral-600 transition-colors"
    >
      <ArrowRight className="mr-2 -ml-5 h-3 w-3 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100" />
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-6 flex items-center">
              <img src={getLogoUrl()} alt="MLI Logo" className="h-[5rem] w-auto" />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-neutral-600">
              Pioneering luxury real estate with a commitment to quality, innovation, and timeless
              design.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={Facebook} href="#" />
              <SocialLink icon={Instagram} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Twitter} href="#" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 font-serif text-lg text-neutral-900">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h4 className="mb-6 font-serif text-lg text-neutral-900">Featured Projects</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/projects/ireo-a1-01">IREO A1-01</FooterLink>
              <FooterLink href="/projects/ireo-a1-18">IREO A1-18</FooterLink>
              <FooterLink href="/projects/suncity-c-85">Suncity C-85</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="mb-6 font-serif text-lg text-neutral-900">Newsletter</h4>
            <p className="mb-6 text-sm text-neutral-600">
              Subscribe to get the latest updates on new launches and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="focus:border-gold-500 w-full rounded-sm border border-neutral-200 bg-white px-4 py-3 text-neutral-900 transition-colors placeholder:text-neutral-400 focus:outline-none"
              />
              <button className="bg-gold-500 hover:bg-gold-600 rounded-sm px-6 py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between border-t border-neutral-200 pt-8 text-sm text-neutral-500 md:flex-row">
          <p>© {new Date().getFullYear()} MLI. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
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
