import { useRef, Suspense } from 'react';
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import React from 'react';

const ContactForm = React.lazy(() => import('../components/ContactForm'));
const ContactInfo = React.lazy(() => import('../components/ContactInfo'));

export default function Contact() {
  const contactRef = useRef();

  const text = `Open to collaborate and turn your thoughts into code!`;

  return (
    <section className="rounded-4xl min-h-screen bg-black">
      <AnimatedHeaderSection
        subTitle="~ dont just scroll - say hello! ~"
        title="contact"
        textColor="text-white"
        text={text}
      />

      <div ref={contactRef} id="contact" className="h-full max-w-[1366px] gap-12 mx-auto px-12 flex flex-col md:flex-row items-center justify-center">
        <Suspense fallback={<div>Loading info...</div>}>
          <ContactInfo />
        </Suspense>

        <div className="form-container flex-1 text-white flex flex-col gap-5 relative">
          <Suspense fallback={<div>Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>

      <div className="h-10 w-full px-10 md:px-16 rounded-md bg-white">
        <p className="text-center text-black/40 tracking-widest uppercase w-full">All rights reserved @ 2025</p>
      </div>
    </section>
  );
}