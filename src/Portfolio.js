import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Stack from './sections/Stack';
import Journey from './sections/Journey';
import Contact from './sections/Contact';

/* The single-page experience — one continuous scroll through every section. */
export default function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Stack />
      <Journey />
      <Contact />
    </>
  );
}
