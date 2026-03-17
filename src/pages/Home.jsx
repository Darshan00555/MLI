import About from '../sections/About';
import Contact from '../sections/Contact';
import Gallery from '../sections/Gallery';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';

import React from 'react';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
