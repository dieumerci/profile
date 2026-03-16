import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home       from './pages/Home';
import About      from './pages/About';
import Experience from './pages/Experience';
import Education  from './pages/Education';
import Skills     from './pages/Skills';
import Projects   from './pages/Projects';
import Contact    from './pages/Contact';

/* AnimatePresence requires reading location inside Router context */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education"  element={<Education />} />
        <Route path="/skills"     element={<Skills />} />
        <Route path="/projects"   element={<Projects />} />
        <Route path="/contact"    element={<Contact />} />
        {/* Fallback → Home */}
        <Route path="*"           element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-[#C4CDDC] font-body flex flex-col">
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
