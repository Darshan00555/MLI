import React from 'react';

import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const Terms = () => {
  return (
    <main className="min-h-screen bg-neutral-50 pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 border-b border-neutral-200 pb-6 font-serif text-4xl tracking-wider text-neutral-900 uppercase md:text-5xl">
            Terms and Conditions
          </h1>

          <div className="prose prose-neutral max-w-none space-y-8 leading-relaxed font-light text-neutral-700">
            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">1. Agreement to Terms</h2>
              <p>
                By accessing our website and using our services, you agree to be bound by these
                Terms and Conditions. If you disagree with any part of these terms, you may not
                access the service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">
                2. Intellectual Property
              </h2>
              <p>
                The website and its original content, features, and functionality are and will
                remain the exclusive property of MLI and its licensors. Our trademarks and trade
                dress may not be used in connection with any product or service without the prior
                written consent of MLI.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">
                3. Links To Other Web Sites
              </h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not
                owned or controlled by MLI. MLI has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third party web sites or
                services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">
                4. Limitation Of Liability
              </h2>
              <p>
                In no event shall MLI, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or
                punitive damages, including without limitation, loss of profits, data, use,
                goodwill, or other intangible losses, resulting from your access to or use of or
                inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">5. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-serif text-2xl text-neutral-900">6. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at
                any time. By continuing to access or use our Service after those revisions become
                effective, you agree to be bound by the revised terms.
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

export default Terms;
