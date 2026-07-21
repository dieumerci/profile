import React from 'react';
import { MotionConfig } from 'framer-motion';
import './index.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import ErrorBoundary, { RouteErrorFallback } from './components/ErrorBoundary';
import Portfolio from './Portfolio';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Keyboard users can bypass the nav */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <ErrorBoundary fallback={<RouteErrorFallback />}>
        <div className="flex min-h-screen flex-col bg-background">
          <Nav />
          <main id="main" className="flex-1">
            <Portfolio />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </MotionConfig>
  );
}
