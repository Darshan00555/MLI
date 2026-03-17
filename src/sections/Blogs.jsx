/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const blogs = [
  {
    id: 1,
    title: "Trends defining Luxury Real Estate in 2024",
    date: "Feb 10, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    excerpt: "Discover the architectural and interior design trends that are shaping the future of high-end living."
  },
  {
    id: 2,
    title: "Why South Delhi is the Ultimate Address",
    date: "Jan 28, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
    excerpt: "Explore the heritage, connectivity, and lifestyle that make South Delhi the most coveted location."
  },
  {
    id: 3,
    title: "Sustainable Luxury: A New Era",
    date: "Jan 15, 2025",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop",
    excerpt: "How green building practices are being integrated into ultra-luxury residential projects."
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Insights & News" 
          subtitle="Our Blogs" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white group hover:shadow-2xl hover:shadow-gold-500/10 transition-shadow duration-300 rounded-sm overflow-hidden border border-neutral-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-neutral-900 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  News
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-neutral-500 text-xs mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-2 text-gold-500" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-2 text-gold-500" />
                    {blog.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-neutral-900 mb-4 group-hover:text-gold-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                
                <a href="#" className="text-gold-600 text-sm uppercase tracking-wider font-medium hover:text-neutral-900 transition-colors inline-flex items-center group-hover:underline decoration-gold-500 underline-offset-4">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
