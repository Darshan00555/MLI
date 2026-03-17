/* eslint-disable no-unused-vars */
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import { getImageUrl } from '../lib/media';

import React from 'react';

import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Trends defining Luxury Real Estate in 2024',
    date: 'Feb 10, 2025',
    author: 'Admin',
    image: getImageUrl('IMG_5408.webp'),
    excerpt:
      'Discover the architectural and interior design trends that are shaping the future of high-end living.',
  },
  {
    id: 2,
    title: 'Why South Delhi is the Ultimate Address',
    date: 'Jan 28, 2025',
    author: 'Admin',
    image: getImageUrl('IMG_5409.webp'),
    excerpt:
      'Explore the heritage, connectivity, and lifestyle that make South Delhi the most coveted location.',
  },
  {
    id: 3,
    title: 'Sustainable Luxury: A New Era',
    date: 'Jan 15, 2025',
    author: 'Admin',
    image: getImageUrl('IMG_5410.webp'),
    excerpt:
      'How green building practices are being integrated into ultra-luxury residential projects.',
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="bg-neutral-50 py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Insights & News" subtitle="Our Blogs" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group hover:shadow-gold-500/10 overflow-hidden rounded-sm border border-neutral-100 bg-white transition-shadow duration-300 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="bg-gold-500 absolute top-4 left-4 px-3 py-1 text-xs font-bold tracking-wider text-neutral-900 uppercase">
                  News
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center space-x-4 text-xs text-neutral-500">
                  <div className="flex items-center">
                    <Calendar className="text-gold-500 mr-2 h-3 w-3" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <User className="text-gold-500 mr-2 h-3 w-3" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="group-hover:text-gold-600 mb-4 font-serif text-xl text-neutral-900 transition-colors">
                  {blog.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-neutral-600">{blog.excerpt}</p>

                <a
                  href="#"
                  className="text-gold-600 decoration-gold-500 inline-flex items-center text-sm font-medium tracking-wider uppercase underline-offset-4 transition-colors group-hover:underline hover:text-neutral-900"
                >
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
