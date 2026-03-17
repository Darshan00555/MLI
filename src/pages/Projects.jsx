/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Filter } from 'lucide-react';

// --- Data ---
const projects = [
  {
    id: 1,
    title: "The Aralias",
    location: "Golf Course Road, Gurgaon",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    category: "Luxury Apartments",
    size: "large" // Control grid span
  },
  {
    id: 2,
    title: "Magnolias Park",
    location: "Sector 42, Gurgaon",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    category: "Premium Villas",
    size: "medium"
  },
  {
    id: 3,
    title: "Camellias",
    location: "Golf Course Ext, Gurgaon",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2670&auto=format&fit=crop",
    category: "Penthouse Collection",
    size: "medium"
  },
  {
    id: 4,
    title: "Vasant Vihar Floors",
    location: "Vasant Vihar, South Delhi",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
    category: "Builder Floors",
    size: "large"
  },
  {
    id: 5,
    title: "The Crest",
    location: "DLF Phase 5, Gurgaon",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
    category: "Luxury Apartments",
    size: "medium"
  },
  {
    id: 6,
    title: "Sky Mansion",
    location: "Chattarpur, South Delhi",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2584&auto=format&fit=crop",
    category: "Farmhouses",
    size: "medium"
  }
];

const categories = ["All", "Luxury Apartments", "Premium Villas", "Penthouse Collection", "Builder Floors", "Farmhouses"];

// --- Components ---

const ProjectsHero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-[60vh] flex items-center justify-center bg-white overflow-hidden">
             {/* Background Image with Parallax */}
             <motion.div 
                style={{ y: y1 }}
                className="absolute inset-0 z-0"
             >
                <img 
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2670&q=80" 
                    alt="Hero Background" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
             </motion.div>

             <motion.div 
                style={{ opacity }}
                className="relative z-10 text-center px-4"
             >
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white uppercase tracking-[0.4em] text-xs md:text-sm font-bold block mb-6"
                >
                    Our Portfolio
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tight"
                >
                    Masterpieces
                </motion.h1>
             </motion.div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[600px]' : 'md:col-span-1 h-[400px]'
            } col-span-1 shadow-lg hover:shadow-xl transition-shadow`}
        >
            {/* Image */}
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold-300 text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.category}
                    </span>
                    <h3 className="text-3xl font-serif text-white mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-300 text-sm mb-6">
                        <MapPin className="w-4 h-4 mr-2 text-gold-500" />
                        {project.location}
                    </div>
                </div>
                
                {/* Magnetic Button Effect (Simulated with simple hover for now) */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-gold-500 hover:text-neutral-900 hover:border-gold-500 transition-colors duration-300 text-white">
                         <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="bg-white min-h-screen">
      <ProjectsHero />
      
      <section className="py-4 px-6">
          <div className="container mx-auto">
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                  {categories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${
                            activeCategory === cat 
                            ? 'bg-neutral-900 text-white border-neutral-900' 
                            : 'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-900 hover:text-neutral-900'
                        }`}
                      >
                          {cat}
                      </button>
                  ))}
              </div>

              {/* Masonry Grid */}
              <motion.div 
                 layout
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                 <AnimatePresence>
                     {filteredProjects.map((project, index) => (
                         <ProjectCard key={project.id} project={project} index={index} />
                     ))}
                 </AnimatePresence>
              </motion.div>
              
              {filteredProjects.length === 0 && (
                  <div className="text-center py-32">
                      <p className="text-neutral-500 text-lg">No projects found in this category.</p>
                  </div>
              )}
          </div>
      </section>
    </main>
  );
};

export default Projects;
