/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ChevronRight, Search } from 'lucide-react';

// --- Data ---
const blogPosts = [
  {
    id: 1,
    title: "The Renaissance of Art Deco in Modern High-Rises",
    category: "Design",
    date: "Feb 14, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "How contemporary architects are reviving the glamour of the 1920s with geometric patterns and bold materials.",
    featured: true
  },
  {
    id: 2,
    title: "Biophilic Interiors: Bringing the Outdoors In",
    category: "Lifestyle",
    date: "Feb 10, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Why plant-centric design is becoming a staple in luxury residences for wellness and tranquility."
  },
  {
    id: 3,
    title: "Smart Homes 2.0: Invisible Technology",
    category: "Technology",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "The future of automation is not about screens, but about seamless, intuitive environments."
  },
  {
    id: 4,
    title: "Investing in South Delhi's Golden Quadrant",
    category: "Market",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "An analysis of property value appreciation in the capital's most exclusive neighborhoods."
  },
  {
    id: 5,
    title: "Minimalism vs. Maximalism: Finding Balance",
    category: "Design",
    date: "Jan 02, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "Curating spaces that feel personal and curated without clutter."
  },
  {
    id: 6,
    title: "The Ultimate Guide to Penthouse Living",
    category: "Lifestyle",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    excerpt: "From private elevators to rooftop terraces, what defines true sky-high luxury."
  }
];

const categories = ["All", "Design", "Lifestyle", "Market", "Technology"];

// --- Components ---

const BlogHero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    
    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-neutral-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2653&q=80" 
                    alt="Luxury Interior" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/60" /> 
            </div>
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-gold-400 uppercase tracking-[0.4em] text-sm font-medium block mb-4"
                >
                    Curated Insights
                </motion.span>
                <motion.h1 
                    style={{ y: y2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6"
                >
                    The Journal
                </motion.h1>
                <motion.p 
                    style={{ y: y2 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light leading-relaxed"
                >
                    Exploring the intersection of architectural excellence, refined living, and timeless design.
                </motion.p>
            </div>
        </section>
    );
};

const FeaturedPost = ({ post }) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 group"
                >
                    {/* Image Section */}
                    <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                        <div className="absolute inset-0 bg-neutral-800/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    
                    {/* Content Section */}
                    <div className="relative p-10 lg:p-20 flex flex-col justify-center bg-neutral-900 border-l border-white/5">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center space-x-4 mb-8">
                               <span className="bg-gold-500 text-neutral-900 px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full">
                                   Featured Story
                               </span>
                               <span className="text-neutral-400 text-sm font-medium flex items-center">
                                    <Calendar className="w-4 h-4 mr-2 text-gold-500" /> {post.date}
                               </span>
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight group-hover:text-gold-300 transition-colors">
                                {post.title}
                            </h2>
                            
                            <p className="text-neutral-400 text-lg md:text-xl mb-10 leading-relaxed">
                                {post.excerpt}
                            </p>
                            
                            <div className="flex items-center text-white font-medium uppercase tracking-widest text-sm group/btn cursor-pointer">
                                Read Full Article
                                <span className="ml-4 bg-white/10 p-3 rounded-full transition-all duration-300 group-hover/btn:bg-gold-500 group-hover/btn:text-neutral-900 group-hover/btn:ml-6 group-hover/btn:rotate-45">
                                    <ArrowUpRight className="w-5 h-5" />
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const BlogCard = ({ post, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100"
        >
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {post.category}
                </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-neutral-400 text-xs mb-4 space-x-4 font-medium uppercase tracking-wide">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                    <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-serif text-neutral-900 mb-4 leading-snug group-hover:text-gold-600 transition-colors">
                    {post.title}
                </h3>
                
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-gold-600 font-medium text-sm flex items-center group-hover:underline underline-offset-4">
                        Read Story <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Newsletter = () => {
    return (
         <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-serif mb-6">Join the Inner Circle</h3>
                <p className="text-neutral-400 mb-10 text-lg">
                    Receive distinct architectural insights, market trends, and exclusive property previews directly to your inbox.
                </p>
                
                <form className="flex flex-col md:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="Your Email Address" 
                        className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:bg-white/5 transition-all"
                    />
                    <button className="bg-gold-500 text-neutral-900 font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-white transition-colors duration-300">
                        Subscribe
                    </button>
                </form>
            </div>
         </section>
    );
};

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPosts = activeCategory === "All" 
    ? blogPosts.filter(post => !post.featured) 
    : blogPosts.filter(post => post.category === activeCategory && !post.featured);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <main className="bg-neutral-50 min-h-screen">
      <BlogHero />
      
      {activeCategory === "All" && featuredPost && <FeaturedPost post={featuredPost} />}
      
      <section className="py-12 bg-neutral-50" id="articles">
          <div className="container mx-auto px-6">
              {/* Controls */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-neutral-200 pb-8 sticky top-20 z-30 bg-neutral-50/95 backdrop-blur-sm transition-all py-4">
                  <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                          <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === cat 
                                ? 'bg-neutral-900 text-white shadow-lg' 
                                : 'bg-white text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200'
                            }`}
                          >
                              {cat}
                          </button>
                      ))}
                  </div>
                  
                  <div className="relative w-full md:w-auto">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <input 
                        type="text" 
                        placeholder="Search articles..." 
                        className="w-full md:w-64 pl-12 pr-6 py-2 bg-white border border-neutral-200 rounded-full text-sm focus:outline-none focus:border-gold-500 transition-colors"
                      />
                  </div>
              </div>

              {/* Grid */}
              <motion.div 
                 layout
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                  {filteredPosts.map((post, index) => (
                      <BlogCard key={post.id} post={post} index={index} />
                  ))}
              </motion.div>
              
              {filteredPosts.length === 0 && (
                  <div className="text-center py-20 text-neutral-400">
                      <p>No articles found in this category.</p>
                  </div>
              )}
          </div>
      </section>
      
      <Newsletter />
    </main>
  );
};

export default Blogs;
