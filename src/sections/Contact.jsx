import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

import React from 'react';

import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const MotionDiv = motion.div;

const ContactInfo = ({ icon, title, content }) => {
  const Icon = icon;

  return (
    <div className="mb-8 flex items-start space-x-4">
      <div className="bg-gold-500/10 rounded-full p-3">
        <Icon className="text-gold-500 h-6 w-6" />
      </div>
      <div>
        <h4 className="mb-1 font-serif text-lg text-neutral-900">{title}</h4>
        <p className="text-sm leading-relaxed whitespace-pre-line text-neutral-600">{content}</p>
      </div>
    </div>
  );
};
const InputField = ({ label, type = 'text', placeholder, rows }) => (
  <div className="mb-6">
    <label className="mb-2 block text-xs tracking-wider text-neutral-500 uppercase">{label}</label>
    {type === 'textarea' ? (
      <textarea
        rows={rows || 4}
        placeholder={placeholder}
        className="focus:border-gold-500 w-full resize-none rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 transition-colors placeholder:text-neutral-400 focus:outline-none"
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="focus:border-gold-500 w-full rounded-sm border border-neutral-200 bg-neutral-50 px-4 py-3 text-neutral-900 transition-colors placeholder:text-neutral-400 focus:outline-none"
      />
    )}
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-white pt-10 pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 h-full w-1/3 translate-x-20 -skew-x-12 transform bg-neutral-800/20" />

      <div className="relative z-10 container mx-auto px-6">
        <SectionTitle title="Get in Touch" subtitle="Contact Us" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 font-serif text-3xl text-neutral-900">
              Let's Discuss Your Dream Home
            </h3>
            <p className="mb-12 max-w-md text-neutral-600">
              Whether you're looking for a premium apartment, a luxury villa, or have a query about
              our projects, our team is here to assist you.
            </p>

            <ContactInfo
              icon={MapPin}
              title="Visit Our Office"
              content="MIL, Golf Course Road,&#10;Sector 54, Gurgaon, Haryana 122002"
            />
            <ContactInfo
              icon={Phone}
              title="Call Us"
              content="+91 99999 99999&#10;+91 88888 88888"
            />
            <ContactInfo
              icon={Mail}
              title="Email Us"
              content="sales@mil.com&#10;info@mil.com"
            />
            <ContactInfo
              icon={Clock}
              title="Operating Hours"
              content="Mon - Sat: 10:00 AM - 7:00 PM&#10;Sunday: By Appointment"
            />
          </MotionDiv>

          {/* Right: Form */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative border border-neutral-100 bg-white p-8 shadow-2xl md:p-12"
          >
            <div className="from-gold-500 absolute top-0 left-0 h-1 w-full bg-gradient-to-r to-transparent" />
            <form>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputField label="Name" placeholder="Your Full Name" />
                <InputField label="Phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <InputField label="Email" type="email" placeholder="your@email.com" />
              <InputField label="Project Interest" placeholder="e.g. The Aralias, Magnolias..." />
              <InputField
                label="Message"
                type="textarea"
                placeholder="Tell us more about your requirements..."
              />

              <Button variant="primary" className="mt-2 w-full">
                Send Message
              </Button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Contact;
