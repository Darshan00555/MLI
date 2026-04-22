import React from 'react';

import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 border-b border-neutral-200 pb-6 font-serif text-4xl tracking-wider text-neutral-900 uppercase md:text-5xl">
            Privacy Policy
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8 leading-relaxed font-light text-neutral-700">
            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">1. Introduction</h2>
              <p>
                At MLI, we are committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">
                2. Information Collection
              </h2>
              <p>
                We collect information that you provide directly to us, such as when you fill out a
                contact form, subscribe to our newsletter, or download a brochure. This may include
                your name, email address, phone number, and any other details you provide.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">3. Use of Information</h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Provide, operate, and maintain our website and services.</li>
                <li>Improve, personalize, and expand our website and services.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>
                  Communicate with you, either directly or through one of our partners, for customer
                  service, to provide you with updates and other information relating to the
                  website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">4. Data Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect
                your personal information. While we have taken reasonable steps to secure the
                personal information you provide to us, please be aware that despite our efforts, no
                security measures are perfect or impenetrable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">5. Contact Us</h2>
              <p>
                If you have any questions or comments about this Privacy Policy, please contact us
                at our office or via email.
              </p>
            </section>
          </div>

          <div className="mt-16 border-t border-neutral-200 pt-8 text-sm text-neutral-500">
            Last updated: April 2026
          </div>
        </MotionDiv>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
