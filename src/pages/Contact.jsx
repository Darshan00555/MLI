/* eslint-disable no-unused-vars */
import { leadFormAction } from '../lib/forms';

import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

// --- Components ---

const ContactHeader = () => {
  return (
    <section className="relative flex h-20 items-center justify-center overflow-hidden bg-neutral-900 md:h-[40vh]">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="bg-gold-500 absolute top-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full mix-blend-multiply blur-[128px] filter"></div>
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-neutral-700 mix-blend-multiply blur-[128px] filter"></div>
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-500 mb-4 block text-xs font-bold tracking-[0.3em] uppercase md:text-sm"
        >
          Connect With Us
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 font-serif text-5xl text-white md:text-7xl"
        >
          Get in Touch
        </motion.h1>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group flex items-start space-x-6"
  >
    <div className="group-hover:border-gold-500 group-hover:bg-gold-50 rounded-full border border-neutral-200 bg-neutral-50 p-4 transition-all duration-500">
      <Icon className="group-hover:text-gold-600 h-6 w-6 text-neutral-400 transition-colors duration-500" />
    </div>
    <div>
      <h4 className="mb-2 font-serif text-lg text-neutral-900">{title}</h4>
      <p className="text-sm leading-relaxed whitespace-pre-line text-neutral-500 transition-colors group-hover:text-neutral-700">
        {content}
      </p>
    </div>
  </motion.div>
);

const FloatingInput = ({ label, name, type = 'text', rows, defaultValue = '' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="relative mb-4">
      <div
        className={`pointer-events-none absolute left-3 transition-all duration-300 ${isFocused || value ? 'text-gold-600 -top-2.5 bg-white px-1.5 text-[10px] font-bold' : 'top-2.5 text-xs text-neutral-400'}`}
      >
        {label}
      </div>
      {type === 'textarea' ? (
        <textarea
          name={name}
          rows={rows || 4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full resize-none rounded-md border bg-transparent px-3 py-2 text-sm text-neutral-900 transition-colors duration-300 focus:outline-none ${isFocused ? 'border-gold-500' : 'border-neutral-300 hover:border-neutral-400'}`}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full rounded-md border bg-transparent px-3 py-2 text-sm text-neutral-900 transition-colors duration-300 focus:outline-none ${isFocused ? 'border-gold-500' : 'border-neutral-300 hover:border-neutral-400'}`}
        />
      )}
    </div>
  );
};

const MapSection = () => {
  return (
    <section className="relative h-[400px] w-full grayscale transition-all duration-700 hover:grayscale-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14034.253995837963!2d77.098801!3d28.432658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f618a221439%3A0x629577778216892e!2sSector%2054%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      ></iframe>
      <div className="border-gold-500/50 pointer-events-none absolute inset-0 border-t-4 shadow-inner"></div>
    </section>
  );
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const selectedProject = searchParams.get('project') || '';

  return (
    <main className="min-h-screen bg-white">
      <ContactHeader />

      <section className="relative overflow-hidden py-4 md:py-16">
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left Column: Info — hidden on mobile, shown on lg+ */}
            <div className="hidden space-y-10 lg:col-span-5 lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 font-serif text-4xl text-neutral-900">
                  Let&apos;s Discuss Your Dream Home
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-neutral-500">
                  Whether you are exploring a builder floor, booking a site visit, or need project
                  details, our team is ready to assist you.
                </p>
              </motion.div>

              <div className="space-y-8">
                <ContactInfoItem
                  icon={MapPin}
                  title="Corporate Office"
                  content="MLI Developers, Golf Course Road,\nSector 54, Gurugram, Haryana"
                  delay={0.2}
                />
                <ContactInfoItem
                  icon={Phone}
                  title="Speak With Us"
                  content="+91 98765 43210"
                  delay={0.3}
                />
                <ContactInfoItem
                  icon={Mail}
                  title="Email Us"
                  content="info@masterlandinfra.com"
                  delay={0.4}
                />
              </div>
            </div>

            {/* Right Column: Floating Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-white p-4 shadow-lg md:p-8"
              >
                <div className="from-gold-400 to-gold-600 absolute top-0 left-0 h-2 w-full bg-gradient-to-r"></div>

                <form action={leadFormAction} method="POST">
                  <input type="hidden" name="source" value="Dedicated Contact Page" />
                  <div className="grid grid-cols-2 gap-3">
                    <FloatingInput label="Full Name" name="name" />
                    <FloatingInput label="Phone Number" name="phone" type="tel" />
                  </div>
                  <FloatingInput label="Email Address" name="email" type="email" />
                  <FloatingInput
                    label="Project Interest"
                    name="project_interest"
                    defaultValue={selectedProject}
                  />
                  <FloatingInput label="Message" name="message" type="textarea" rows={3} />

                  <button
                    type="submit"
                    className="hover:bg-gold-500 group mt-1 flex w-full items-center justify-center rounded-lg bg-neutral-900 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300"
                  >
                    Send Request
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
};

export default Contact;
