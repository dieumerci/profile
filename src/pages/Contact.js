import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, CV_URL } from '../data/resumeData';
import PageWrapper from '../components/PageWrapper';
import Reveal from '../components/Reveal';

function PageHeader({ label, title, subtitle }) {
  return (
    <div className="section-container pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-label mb-4">{label}</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </motion.div>
      <div className="mt-10 h-px bg-gradient-to-r from-[#F5C518]/30 via-[#1E1E1E] to-transparent" />
    </div>
  );
}

function ContactCard({ icon, label, value, href, description }) {
  return (
    <Reveal>
      <motion.div
        whileHover={{ y: -4 }}
        className="card card-hover p-6 sm:p-7 group"
      >
        {/* Icon */}
        <div className="w-10 h-10 border border-[#1E1E1E] flex items-center justify-center mb-5 group-hover:border-[#F5C518]/40 transition-colors">
          {icon}
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-1.5">{label}</p>

        {href ? (
          <a
            href={href}
            className="font-display font-semibold text-white text-[15px] hover:text-[#F5C518] transition-colors block mb-2 break-all"
          >
            {value}
          </a>
        ) : (
          <p className="font-display font-semibold text-white text-[15px] mb-2">{value}</p>
        )}

        {description && (
          <p className="font-body text-[#555555] text-[13px] leading-relaxed">{description}</p>
        )}
      </motion.div>
    </Reveal>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <PageWrapper>
      <PageHeader
        label="07 — Contact"
        title="Let's build something."
        subtitle="Open to collaborations, full-time engineering roles, and interesting technical conversations."
      />

      <div className="section-container pb-24">
        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">

          {/* Left: contact info */}
          <div className="lg:col-span-3 space-y-8">

            {/* Status banner */}
            <Reveal>
              <div className="flex items-center gap-3 p-4 border border-emerald-400/15 bg-emerald-400/4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="font-mono text-[12px] text-emerald-400/80 uppercase tracking-wider">
                  Available for new opportunities
                </span>
              </div>
            </Reveal>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F5C518]">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                }
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                description="Best way to reach me. I usually respond within 24 hours."
              />

              <ContactCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F5C518]">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                }
                label="LinkedIn"
                value="linkedin.com/in/dieumercikaz"
                href="https://linkedin.com/in/dieumercikaz"
                description="Connect professionally — always open to interesting conversations."
              />

              <ContactCard
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F5C518]">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                label="GitHub"
                value="github.com/dieumercikaz"
                href="https://github.com/dieumercikaz"
                description="Open-source work, side projects, and code samples."
              />

              {/* Copy email card */}
              <Reveal>
                <motion.button
                  whileHover={{ y: -4 }}
                  onClick={copyEmail}
                  className="card card-hover p-6 sm:p-7 group w-full text-left"
                >
                  <div className="w-10 h-10 border border-[#1E1E1E] flex items-center justify-center mb-5 group-hover:border-[#F5C518]/40 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F5C518]">
                      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-1.5">Quick Copy</p>
                  <p className="font-display font-semibold text-white text-[15px] mb-2">
                    {copied ? '✓ Copied!' : 'Copy Email'}
                  </p>
                  <p className="font-body text-[#555555] text-[13px] leading-relaxed">
                    {copied ? 'Email address copied to clipboard.' : 'Click to copy email address to clipboard.'}
                  </p>
                </motion.button>
              </Reveal>
            </div>

            {/* Message guidance */}
            <Reveal delay={0.1}>
              <div className="card p-6 sm:p-8">
                <h3 className="font-display font-semibold text-white text-sm mb-3">
                  What to include in your message
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "What you're working on or building",
                    'The kind of role or collaboration you have in mind',
                    'Your timeline and expectations',
                    "Anything specific you'd like to discuss",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#F5C518]/50 mt-[3px] flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-body text-[#555555] text-[13px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: download CV + additional info */}
          <div className="lg:col-span-2 space-y-5">

            {/* Download CV block */}
            <Reveal direction="right">
              <div className="relative border border-[#F5C518]/20 bg-[#F5C518]/4 p-7 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 100% 0%, rgba(245,197,24,0.06) 0%, transparent 60%)' }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 border border-[#F5C518]/30 flex items-center justify-center mb-5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#F5C518]">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M14 2v6h6M12 18v-7M9 15l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">Download My CV</h3>
                  <p className="font-body text-[#888888] text-sm leading-relaxed mb-5">
                    Full resume with work history, skills, education, and project details.
                  </p>
                  <a
                    href={CV_URL}
                    download="kazadi_dieumerci_resume_2026.pdf"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#F5C518] text-[#0A0A0A] font-mono font-semibold text-sm hover:bg-[#F9E07A] transition-all"
                  >
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Download CV (.pdf)
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Availability */}
            <Reveal direction="right" delay={0.1}>
              <div className="card p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-5">
                  Availability
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Status', value: 'Open to opportunities' },
                    { label: 'Timezone', value: 'SAST (UTC+2)' },
                    { label: 'Work type', value: 'Remote · Hybrid · On-site' },
                    { label: 'Preference', value: 'Full-time or contract' },
                  ].map((f) => (
                    <div key={f.label} className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[10px] text-[#2A2A2A] uppercase tracking-wider flex-shrink-0">
                        {f.label}
                      </span>
                      <span className="font-body text-[13px] text-[#888888] text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Tech interests */}
            <Reveal direction="right" delay={0.15}>
              <div className="card p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-4">
                  Interested In
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Backend Systems',
                    'Fintech',
                    'AI Applications',
                    'Data Engineering',
                    'GovTech',
                    'HealthTech',
                    'Infrastructure',
                    'Ruby / Python',
                  ].map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
