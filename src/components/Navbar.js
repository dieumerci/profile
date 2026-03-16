import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, CV_URL } from '../data/resumeData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/92 backdrop-blur-xl border-b border-[#1E1E1E]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
              <div className="w-8 h-8 border border-[#F5C518] flex items-center justify-center transition-all group-hover:bg-[#F5C518]/10 group-hover:shadow-[0_0_12px_rgba(245,197,24,0.25)]">
                <span className="font-mono font-bold text-[11px] text-[#F5C518] tracking-widest">DK</span>
              </div>
              <span className="font-display font-semibold text-[15px] text-white/90 hidden sm:block">
                Dieumerci <span className="text-[#F5C518]">Kazadi</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-5 font-body text-[13px] transition-colors duration-200 ${
                      isActive ? 'text-[#F5C518]' : 'text-[#888888] hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute bottom-3.5 left-3.5 right-3.5 h-[2px] bg-[#F5C518]"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href={CV_URL}
                download="kazadi_dieumerci_resume_2026.pdf"
                className="hidden sm:flex items-center gap-2 px-4 py-2 border border-[#F5C518] text-[#F5C518] font-mono text-[12px] tracking-wide hover:bg-[#F5C518] hover:text-[#0A0A0A] transition-all duration-200"
                aria-label="Download CV"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download CV
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#888888] hover:text-white transition-colors"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                    className="block w-full h-px bg-current origin-center transition-colors"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    className="block w-full h-px bg-current"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                    className="block w-full h-px bg-current origin-center transition-colors"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#0A0A0A]/97 backdrop-blur-xl border-b border-[#1E1E1E] overflow-hidden lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-4">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 py-3.5 border-b border-[#1E1E1E]/50 font-body text-sm transition-colors ${
                        location.pathname === link.path
                          ? 'text-[#F5C518]'
                          : 'text-[#888888] hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-[#F5C518]/40 text-xs">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 pb-2">
                  <a
                    href={CV_URL}
                    download="kazadi_dieumerci_resume_2026.pdf"
                    className="flex items-center justify-center gap-2 w-full py-3 border border-[#F5C518] text-[#F5C518] font-mono text-sm"
                  >
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download CV
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
