/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

// --- Components ---

const ContactHeader = () => {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neutral-700 rounded-full mix-blend-multiply filter blur-[128px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gold-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold block mb-4"
            >
                Connect With Us
            </motion.span>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif text-white mb-6"
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
    className="flex items-start space-x-6 group"
  >
    <div className="bg-neutral-50 p-4 rounded-full border border-neutral-200 group-hover:border-gold-500 group-hover:bg-gold-50 transition-all duration-500">
      <Icon className="w-6 h-6 text-neutral-400 group-hover:text-gold-600 transition-colors duration-500" />
    </div>
    <div>
      <h4 className="text-neutral-900 text-lg font-serif mb-2">{title}</h4>
      <p className="text-neutral-500 text-sm leading-relaxed whitespace-pre-line group-hover:text-neutral-700 transition-colors">
        {content}
      </p>
    </div>
  </motion.div>
);

const FloatingInput = ({ label, type = "text", placeholder, rows }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className="relative mb-8">
            <div className={`absolute left-4 transition-all duration-300 pointer-events-none ${isFocused || value ? '-top-3 text-xs bg-white px-2 text-gold-600 font-bold' : 'top-4 text-neutral-400 text-sm'}`}>
                {label}
            </div>
            {type === 'textarea' ? (
                <textarea 
                    rows={rows || 4}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`w-full bg-transparent border-2 rounded-lg px-6 py-4 text-neutral-900 focus:outline-none transition-colors duration-300 resize-none ${isFocused ? 'border-gold-500' : 'border-neutral-200 hover:border-neutral-300'}`}
                />
            ) : (
                <input 
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`w-full bg-transparent border-2 rounded-lg px-6 py-4 text-neutral-900 focus:outline-none transition-colors duration-300 ${isFocused ? 'border-gold-500' : 'border-neutral-200 hover:border-neutral-300'}`}
                />
            )}
        </div>
    );
};

const MapSection = () => {
    return (
        <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14034.253995837963!2d77.098801!3d28.432658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f618a221439%3A0x629577778216892e!2sSector%2054%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
             ></iframe>
             <div className="absolute inset-0 pointer-events-none border-t-4 border-gold-500/50 shadow-inner"></div>
        </section>
    );
};


const Contact = () => {
  return (
    <main className="bg-white min-h-screen">
      <ContactHeader />
      
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/* Left Column: Info */}
                <div className="lg:col-span-5 space-y-12">
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                     >
                         <h2 className="text-4xl font-serif text-neutral-900 mb-6">Let's Discuss Your Vision</h2>
                         <p className="text-neutral-500 text-lg leading-relaxed mb-10">
                            Whether you are looking for a premium residence or an investment opportunity, our team of experts is ready to assist you.
                         </p>
                     </motion.div>

                     <div className="space-y-8">
                        <ContactInfoItem 
                            icon={MapPin} 
                            title="Corporate Office" 
                            content="MIL Developers, Golf Course Road,\nSector 54, Gurugram, Haryana" 
                            delay={0.2}
                        />
                        <ContactInfoItem 
                            icon={Phone} 
                            title="Speak With Us" 
                            content="+91 99999 99999\n+91 88888 88888" 
                            delay={0.3}
                        />
                        <ContactInfoItem 
                            icon={Mail} 
                            title="Email Us" 
                            content="sales@mil.com\ninfo@mil.com" 
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
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-neutral-100 relative overflow-hidden"
                    >
                         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 to-gold-600"></div>
                         
                         <form>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <FloatingInput label="Full Name" />
                                 <FloatingInput label="Phone Number" type="tel" />
                             </div>
                             <FloatingInput label="Email Address" type="email" />
                             <FloatingInput label="Project Interest" />
                             <FloatingInput label="Message" type="textarea" rows={5} />
                             
                             <button className="w-full bg-neutral-900 text-white font-bold uppercase tracking-widest py-5 rounded-xl hover:bg-gold-500 hover:text-neutral-900 transition-all duration-300 shadow-lg hover:shadow-gold-500/25 flex items-center justify-center group">
                                 Send Request 
                                 <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
