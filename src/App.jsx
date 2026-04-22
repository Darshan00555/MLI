import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import { BrochureProvider } from './context/BrochureContext';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BrochureProvider>
        <div className="selection:bg-gold-500/30 selection:text-gold-900 min-h-screen overflow-x-hidden bg-white font-sans text-neutral-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </div>
      </BrochureProvider>
    </Router>
  );
}

export default App;
