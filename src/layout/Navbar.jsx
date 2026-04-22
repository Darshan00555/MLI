/* eslint-disable no-unused-vars */
import Button from '../components/ui/Button';
import { contactData } from '../data/contact';
import { projects } from '../data/projects';
import { getLogoUrl } from '../lib/media';
import { cn } from '../lib/utils';

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Projects', path: '/projects', hasDropdown: true },
  { name: 'Beyond the Plot', path: '/blogs' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={cn(
          'fixed top-0 left-0 z-[1000] w-full border-b border-white/10 bg-neutral-900/85 backdrop-blur-sm transition-all duration-300',
          isScrolled ? 'py-2 shadow-lg' : 'py-4'
        )}
      >
        <div className="relative z-[1200] container mx-auto flex items-center justify-between px-8">
          {/* Logo */}
          <Link to="/" className="ml-2 flex items-center">
            <img
              src={getLogoUrl()}
              alt="MLI Logo"
              className={cn(
                'w-auto origin-left transition-all duration-500',
                isScrolled ? 'h-12' : 'h-16'
              )}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="group relative">
                <Link
                  to={link.path}
                  className={cn(
                    'relative py-2 text-sm tracking-wider uppercase transition-colors duration-300',
                    isActive(link.path)
                      ? 'text-gold-400 font-medium'
                      : 'hover:text-gold-400 text-white/90'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'bg-gold-500 absolute bottom-0 left-0 h-[1px] w-full origin-left transform transition-transform duration-300',
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </Link>

                {/* Dropdown for Projects */}
                {link.hasDropdown && (
                  <div className="invisible absolute top-full left-0 mt-2 w-48 translate-y-2 transform rounded-sm border border-neutral-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="py-2">
                      {projects.map((project) => (
                        <Link
                          key={project.id}
                          to={`/projects/${project.slug}`}
                          className="hover:text-gold-600 block px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
                        >
                          {project.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <a
              href={`tel:${contactData.phoneRaw}`}
              className="hover:text-gold-400 text-white transition-colors duration-300"
            >
              <Phone className="h-5 w-5" />
            </a>
            <Link to="/projects">
              <Button variant="primary" size="sm" icon={true}>
                Explore
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="p-2 text-white transition-colors duration-300 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer (sibling to nav, NOT inside it) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1100,
              backgroundColor: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: '6rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              overflowY: 'auto',
            }}
          >
            {/* Close button inside drawer */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.5rem',
                color: '#ffffff',
                background: 'none',
                border: '1px solid rgba(184, 141, 59, 0.4)',
                borderRadius: '0.375rem',
                padding: '0.375rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close menu"
            >
              <X style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>

            {/* Nav Links */}
            <div
              style={{
                width: '100%',
                maxWidth: '24rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                textAlign: 'center',
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '1.25rem 0',
                    borderBottom: '1px solid rgba(184, 141, 59, 0.2)',
                    fontSize: '1.5rem',
                    fontFamily: 'Montserrat, sans-serif',
                    color: isActive(link.path) ? '#b88d3b' : '#ffffff',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                  }}
                  className="hover:text-gold-500"
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA Buttons */}
              <div
                style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
