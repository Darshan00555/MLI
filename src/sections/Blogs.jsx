import BlogModal from '../components/BlogModal';
import SectionTitle from '../components/ui/SectionTitle';
import { blogPosts as blogData } from '../data/blogs';

import React, { useState } from 'react';

import { Calendar, User } from 'lucide-react';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use only first 3 for home section
  const blogs = blogData.slice(0, 3);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <section id="blogs" className="bg-neutral-50 py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title="Insights & News" subtitle="Beyond the Plot" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
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
                    Admin
                  </div>
                </div>

                <h3 className="group-hover:text-gold-600 mb-4 font-serif text-xl text-neutral-900 transition-colors">
                  {blog.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-neutral-600">{blog.excerpt}</p>

                <button
                  onClick={() => openBlog(blog)}
                  className="text-gold-600 decoration-gold-500 inline-flex items-center text-sm font-medium tracking-wider uppercase underline-offset-4 transition-colors group-hover:underline hover:text-neutral-900"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BlogModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} blog={selectedBlog} />
    </section>
  );
};

export default Blogs;
