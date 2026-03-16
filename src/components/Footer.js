import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, navLinks, CV_URL } from '../data/resumeData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-[#1E1E1E] mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 group mb-4">
              <div className="w-8 h-8 border border-[#F5C518] flex items-center justify-center group-hover:bg-[#F5C518]/10 transition-all">
                <span className="font-mono font-bold text-[11px] text-[#F5C518] tracking-widest">DK</span>
              </div>
              <span className="font-display font-semibold text-white">
                Dieumerci <span className="text-[#F5C518]">Kazadi</span>
              </span>
            </Link>
            <p className="text-[#555555] font-body text-sm leading-relaxed max-w-sm mt-3">
              Software Engineer with 6+ years building secure, scalable systems across fintech, civic tech, and enterprise environments.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href={CV_URL}
                download="kazadi_dieumerci_resume_2026.pdf"
                className="inline-flex items-center gap-2 text-[#F5C518] font-mono text-xs hover:text-[#F9E07A] transition-colors"
              >
                <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download CV
              </a>
              <span className="text-[#1E1E1E]">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#555555] font-mono text-xs hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-[#555555] hover:text-[#888888] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-4">
              Contact
            </h3>
            <div className="space-y-2.5">
              <div>
                <span className="font-mono text-[10px] text-[#2A2A2A] uppercase tracking-widest block mb-0.5">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-body text-sm text-[#555555] hover:text-white transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#2A2A2A] uppercase tracking-widest block mb-0.5">GitHub</span>
                <a
                  href="https://github.com/dieumercikaz"
                  className="font-body text-sm text-[#555555] hover:text-white transition-colors"
                >
                  github.com/dieumercikaz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1E1E1E]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-[#2A2A2A]">
            © {year} Dieumerci Kazadi. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[#2A2A2A]">
            Built with React · Three.js · Framer Motion · anime.js
          </p>
        </div>
      </div>
    </footer>
  );
}
