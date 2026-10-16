import React from 'react';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Stack from './sections/Stack';
import Journey from './sections/Journey';
import Play from './sections/Play';
import Contact from './sections/Contact';

/* The single-page experience — one continuous scroll through every section. */
export default function Portfolio() {
  return (
    <>
      <Hero />
      <Journey />
      <Play />
      <Stack />
      <Work />
      <Contact />
    </>
  );
}
