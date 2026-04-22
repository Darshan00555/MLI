import React from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const BlogModal = ({ isOpen, onClose, blog }) => {
  if (!blog) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto sm:rounded-2xl">
        <DialogHeader className="mb-6">
          <div className="mb-2 flex items-center space-x-3">
            <span className="bg-gold-500 rounded-full px-3 py-0.5 text-[10px] font-bold tracking-wider text-neutral-900 uppercase">
              {blog.category}
            </span>
            <span className="text-xs text-neutral-500">{blog.date}</span>
          </div>
          <DialogTitle className="font-serif text-3xl leading-tight text-neutral-900 md:text-4xl">
            {blog.title}
          </DialogTitle>
        </DialogHeader>

        <div className="relative mb-8 h-64 overflow-hidden rounded-xl shadow-lg md:h-96">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="max-w-none px-2">
          <div className="text-base leading-relaxed whitespace-pre-line text-neutral-700 md:text-lg">
            {blog.content}
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-100 pt-6 text-center">
          <p className="text-xs text-neutral-400">© MLI - Beyond the Plot Insights</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;
