import BlogModal from '../components/BlogModal';
import { blogPosts } from '../data/blogs';
import { getImageUrl } from '../lib/media';

import React, { useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Calendar, ChevronRight, Search } from 'lucide-react';

const MotionDiv = motion.div;
const MotionSpan = motion.span;
const MotionH1 = motion.h1;
const MotionP = motion.p;

// --- Data ---
const categories = ['All', 'Design', 'Lifestyle', 'Market', 'Technology'];

// --- Components ---

const BlogHero = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={getImageUrl('IMG_5488.webp')}
          alt="Luxury Interior"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <MotionSpan
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-400 mb-4 block text-sm font-medium tracking-[0.4em] uppercase"
        >
          Curated Insights
        </MotionSpan>
        <MotionH1
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-serif text-6xl text-white md:text-8xl lg:text-9xl"
        >
          Beyond the Plot
        </MotionH1>
        <MotionP
          style={{ y: y2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-300 md:text-xl"
        >
          Exploring the intersection of architectural excellence, refined living, and timeless
          design.
        </MotionP>
      </div>
    </section>
  );
};

const FeaturedPost = ({ post, onReadMore }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group grid grid-cols-1 gap-0 overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl lg:grid-cols-2"
        >
          {/* Image Section */}
          <div className="relative h-[400px] overflow-hidden lg:h-[600px]">
            <div className="absolute inset-0 z-10 bg-neutral-800/20 transition-colors duration-500 group-hover:bg-transparent" />
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="relative flex flex-col justify-center border-l border-white/5 bg-neutral-900 p-10 lg:p-20">
            {/* Decorative Background Element */}
            <div className="bg-gold-500/5 absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="mb-8 flex items-center space-x-4">
                <span className="bg-gold-500 rounded-full px-4 py-1 text-xs font-bold tracking-wider text-neutral-900 uppercase">
                  Featured Story
                </span>
                <span className="flex items-center text-sm font-medium text-neutral-400">
                  <Calendar className="text-gold-500 mr-2 h-4 w-4" /> {post.date}
                </span>
              </div>

              <h2 className="group-hover:text-gold-300 mb-6 font-serif text-3xl leading-tight text-white transition-colors md:text-5xl">
                {post.title}
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-neutral-400 md:text-xl">
                {post.excerpt}
              </p>

              <div
                onClick={onReadMore}
                className="group/btn flex cursor-pointer items-center text-sm font-medium tracking-widest text-white uppercase"
              >
                Read Full Article
                <span className="group-hover/btn:bg-gold-500 ml-4 rounded-full bg-white/10 p-3 transition-all duration-300 group-hover/btn:ml-6 group-hover/btn:rotate-45 group-hover/btn:text-neutral-900">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

const BlogCard = ({ post, index, onClick }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-sm">
          {post.category}
        </div>
      </div>

      <div className="flex flex-grow flex-col p-8">
        <div className="mb-4 flex items-center space-x-4 text-xs font-medium tracking-wide text-neutral-400 uppercase">
          <span>{post.date}</span>
          <span className="bg-gold-500 h-1 w-1 rounded-full"></span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="group-hover:text-gold-600 mb-4 font-serif text-xl leading-snug text-neutral-900 transition-colors md:text-2xl">
          {post.title}
        </h3>

        <p className="mb-6 line-clamp-3 flex-grow text-sm leading-relaxed text-neutral-500">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-neutral-100 pt-6">
          <button
            onClick={onClick}
            className="text-gold-600 flex items-center text-sm font-medium underline-offset-4 group-hover:underline"
          >
            Read Story{' '}
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </MotionDiv>
  );
};

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      <div className="relative z-10 container mx-auto max-w-3xl px-6 text-center">
        <h3 className="mb-6 font-serif text-3xl md:text-4xl">Join the Inner Circle</h3>
        <p className="mb-10 text-lg text-neutral-400">
          Receive distinct architectural insights, market trends, and exclusive property previews
          directly to your inbox.
        </p>

        <form className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Your Email Address"
            className="focus:ring-gold-500 flex-grow rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white transition-all placeholder:text-neutral-500 focus:bg-white/5 focus:ring-2 focus:outline-none"
          />
          <button className="bg-gold-500 rounded-full px-10 py-4 font-bold tracking-wider text-neutral-900 uppercase transition-colors duration-300 hover:bg-white">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts.filter((post) => !post.featured)
      : blogPosts.filter((post) => post.category === activeCategory && !post.featured);

  const featuredPost = blogPosts.find((post) => post.featured);

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <BlogHero />

      {activeCategory === 'All' && featuredPost && (
        <FeaturedPost post={featuredPost} onReadMore={() => openBlog(featuredPost)} />
      )}

      <section className="bg-neutral-50 py-12" id="articles">
        <div className="container mx-auto px-6">
          {/* Controls */}
          <div className="sticky top-20 z-30 mb-16 flex flex-col justify-between gap-8 border-b border-neutral-200 bg-neutral-50/95 py-4 pb-8 backdrop-blur-sm transition-all md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-neutral-900 text-white shadow-lg'
                      : 'border border-neutral-200 bg-white text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-auto">
              <Search className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="focus:border-gold-500 w-full rounded-full border border-neutral-200 bg-white py-2 pr-6 pl-12 text-sm transition-colors focus:outline-none md:w-64"
              />
            </div>
          </div>

          {/* Grid */}
          <MotionDiv layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} onClick={() => openBlog(post)} />
            ))}
          </MotionDiv>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center text-neutral-400">
              <p>No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Newsletter />

      <BlogModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} blog={selectedBlog} />
    </main>
  );
};

export default Blogs;
