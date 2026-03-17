/* eslint-disable no-unused-vars */
import Button from '../components/ui/Button';
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
  { name: 'Blogs', path: '/blogs' },
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
    <nav
      className={cn(
        'fixed top-0 left-0 z-[1000] w-full border-b border-black/5 transition-all duration-300',
        isScrolled
          ? 'bg-white py-4 shadow-sm md:bg-white/90 md:backdrop-blur-md'
          : 'bg-white py-6 md:bg-neutral-900/10 md:backdrop-blur-sm'
      )}
    >
      <div className="relative z-[1001] container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="-ml-4 flex items-center">
          <img
            src={getLogoUrl()}
            alt="MLI Logo"
            className={cn(
              'h-16 w-auto origin-left scale-125 transition-all duration-300',
              isScrolled || isMobileMenuOpen ? 'brightness-0' : ''
            )}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              <Link
                to={link.path}
                className={cn(
                  'relative py-2 text-sm tracking-wider uppercase transition-colors duration-300',
                  isActive(link.path)
                    ? 'text-gold-400 font-medium'
                    : isScrolled
                      ? 'hover:text-gold-400 text-neutral-700'
                      : 'hover:text-gold-500 text-white/90'
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

              {/* Dropdown for Projects (Placeholder) */}
              {link.hasDropdown && (
                <div className="invisible absolute top-full left-0 mt-2 w-48 translate-y-2 transform rounded-sm border border-neutral-100 bg-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="py-2">
                    <Link
                      to="/projects/ireo-a1-01"
                      className="hover:text-gold-600 block px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
                    >
                      IREO A1-01
                    </Link>
                    <Link
                      to="/projects/ireo-a1-18"
                      className="hover:text-gold-600 block px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
                    >
                      IREO A1-18
                    </Link>
                    <Link
                      to="/projects/suncity-c-85"
                      className="hover:text-gold-600 block px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
                    >
                      Suncity C-85
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+91999999XXXX"
            className={cn(
              'transition-colors duration-300',
              isScrolled ? 'hover:text-gold-600 text-neutral-700' : 'hover:text-gold-500 text-white'
            )}
          >
            <Phone className="h-5 w-5" />
          </a>
          <Link to="/projects">
            <Button variant="primary" icon={true}>
              Explore Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn('p-2 transition-colors duration-300 md:hidden', 'text-neutral-900')}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-start bg-white px-6 pt-24 md:hidden"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="flex w-full max-w-sm flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-gold-600 border-b border-neutral-100 pb-4 font-serif text-2xl text-neutral-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" className="mt-8 w-full">
                  Explore Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
