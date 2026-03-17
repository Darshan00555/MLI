/* eslint-disable no-unused-vars */
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { cn } from '../lib/utils2'; // Removed unused cn

const SocialLink = ({ icon: Icon, href }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link 
      to={href} 
      className="text-neutral-600 hover:text-gold-600 transition-colors flex items-center group"
    >
      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold text-gold-500 tracking-wider">
                MIL
              </span>
              <span className="text-[0.65rem] text-neutral-400 tracking-[0.2em] uppercase">
                Developers Since 1992
              </span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Pioneering luxury real estate with a commitment to quality, innovation, and timeless design.
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
            <h4 className="text-neutral-900 font-serif text-lg mb-6">Quick Links</h4>
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
            <h4 className="text-neutral-900 font-serif text-lg mb-6">Featured Projects</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink href="/projects">The Aralias</FooterLink>
              <FooterLink href="/projects">Magnolias Park</FooterLink>
              <FooterLink href="/projects">Vasant Vihar Floors</FooterLink>
              <FooterLink href="/projects">The Crest</FooterLink>
              <FooterLink href="/projects">Sky Mansion</FooterLink>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-neutral-900 font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-neutral-600 text-sm mb-6">
              Subscribe to get the latest updates on new launches and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white border border-neutral-200 text-neutral-900 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors placeholder:text-neutral-400 rounded-sm"
              />
              <button className="bg-gold-500 text-white font-medium py-3 px-6 hover:bg-gold-600 transition-colors rounded-sm uppercase tracking-wider text-sm">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} MIL. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
