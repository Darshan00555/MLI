import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Gallery4 from '../sections/Gallery4';
import Gallery from '../sections/Gallery';
import Blogs from '../sections/Blogs';
import Leadership from '../sections/Leadership';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Gallery4 />
      <Gallery />
      <Blogs />
      <Leadership />
      <Contact />
    </main>
  );
};

export default Home;
