/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { cn } from '../lib/utils';

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
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-300 border-b border-black/5",
        isScrolled 
          ? "bg-white py-4 shadow-sm md:bg-white/90 md:backdrop-blur-md" 
          : "bg-white py-6 md:bg-neutral-900/10 md:backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between relative z-[1001]">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-serif font-bold text-gold-500 tracking-wider">
            MIL
          </span>
          <span className={cn(
            "text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300",
            isScrolled || isMobileMenuOpen ? "text-neutral-900 md:text-neutral-600" : "text-neutral-900 md:text-neutral-300"
          )}>
            Developers Since 1992
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-wider transition-colors duration-300 relative py-2",
                  isActive(link.path)
                    ? "text-gold-400 font-medium" 
                    : isScrolled ? "text-neutral-700 hover:text-gold-400" : "text-white/90 hover:text-gold-500"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-[1px] bg-gold-500 transform transition-transform duration-300 origin-left",
                  isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
              
              {/* Dropdown for Projects (Placeholder) */}
              {link.hasDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-neutral-100 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    <Link to="/projects" className="block px-4 py-2 text-sm text-neutral-600 hover:text-gold-600 hover:bg-neutral-50 transition-colors">Residential</Link>
                    <Link to="/projects" className="block px-4 py-2 text-sm text-neutral-600 hover:text-gold-600 hover:bg-neutral-50 transition-colors">Commercial</Link>
                    <Link to="/projects" className="block px-4 py-2 text-sm text-neutral-600 hover:text-gold-600 hover:bg-neutral-50 transition-colors">Completed</Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+919999999999" className={cn(
            "transition-colors duration-300",
            isScrolled ? "text-neutral-700 hover:text-gold-600" : "text-white hover:text-gold-500"
          )}>
            <Phone className="w-5 h-5" />
          </a>
          <Link to="/projects">
            <Button variant="primary" icon={true}>
                Explore Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2 transition-colors duration-300",
            "text-neutral-900" 
          )}
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
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[999] md:hidden pt-24 px-6 flex flex-col items-center justify-start bg-white"
            style={{ backgroundColor: '#ffffff' }} 
          >
            <div className="flex flex-col space-y-6 w-full max-w-sm text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-serif text-neutral-800 hover:text-gold-600 transition-colors border-b border-neutral-100 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full mt-8">
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
