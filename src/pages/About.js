import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo, CV_URL, PHOTO_URL } from '../data/resumeData';
import PageWrapper from '../components/PageWrapper';
import Reveal from '../components/Reveal';

/* ─── Page Header (reused pattern) ─────────────────────────── */
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
      {/* Divider */}
      <div className="mt-10 h-px bg-gradient-to-r from-[#F5C518]/30 via-[#1E1E1E] to-transparent" />
    </div>
  );
}

export default function About() {
  return (
    <PageWrapper>
      <PageHeader
        label="01 — About"
        title="The engineer behind the work."
        subtitle="Background, perspective, and what drives me to keep building."
      />

      <div className="section-container pb-24">
        <div className="grid lg:grid-cols-5 gap-14 xl:gap-20 items-start">

          {/* ── Main Text ── */}
          <div className="lg:col-span-3 space-y-6">
            {personalInfo.aboutExtended.map((para, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="font-body text-[#888888] text-base sm:text-[17px] leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.45}>
              <div className="pt-4 flex flex-wrap gap-3">
                <Link to="/experience" className="btn-primary">
                  View Experience
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </Link>
                <a
                  href={CV_URL}
                  download="kazadi_dieumerci_resume_2026.pdf"
                  className="btn-ghost"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Photo */}
            <Reveal direction="right">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-[#F5C518]" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-[#F5C518]" />
                <div className="overflow-hidden border border-[#1E1E1E] aspect-[4/5]">
                  <img
                    src={PHOTO_URL}
                    alt="Dieumerci Kazadi"
                    className="w-full h-full object-cover object-top transition-all duration-700"
                    style={{ filter: 'brightness(0.88) saturate(0.85) contrast(1.05)' }}
                  />
                </div>
              </div>
            </Reveal>

            {/* Quick Facts */}
            <Reveal direction="right" delay={0.15}>
              <div className="card p-6 space-y-5">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70">
                  Quick Facts
                </h3>
                {[
                  { label: 'Experience', value: '6+ years' },
                  { label: 'Domains', value: 'Fintech · Civic · Analytics' },
                  { label: 'Status', value: 'Available for work' },
                ].map((f) => (
                  <div key={f.label} className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] text-[#555555] uppercase tracking-wider flex-shrink-0">
                      {f.label}
                    </span>
                    <span className="font-body text-[13px] text-[#888888] text-right">{f.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Contact snippet */}
            <Reveal direction="right" delay={0.2}>
              <div className="card p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-4">
                  Get in Touch
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-body text-[13px] text-[#888888] hover:text-[#F5C518] transition-colors block mb-1"
                >
                  {personalInfo.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Strengths Grid ── */}
      <section className="bg-[#080808] border-y border-[#1E1E1E]">
        <div className="section-container py-20">
          <Reveal>
            <p className="section-label mb-4">Core Strengths</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12">
              What I bring to the table.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalInfo.strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="card card-hover p-6 group"
              >
                <div className="w-9 h-9 border border-[#1E1E1E] flex items-center justify-center mb-4 group-hover:border-[#F5C518]/40 transition-colors">
                  <span className="font-mono text-[#F5C518] text-sm">{s.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{s.title}</h3>
                <p className="font-body text-[#555555] text-[13px] leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline teaser ── */}
      <section className="section-container py-20">
        <Reveal>
          <p className="section-label mb-4">My Journey</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            6+ years across 5 organizations.
          </h2>
          <p className="font-body text-[#555555] text-base max-w-xl mb-8 leading-relaxed">
            From VAT compliance systems to AI-driven CX platforms to cloud fintech — each chapter added a different dimension to my engineering perspective.
          </p>
          <Link to="/experience" className="btn-primary">
            View Full Experience
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </Link>
        </Reveal>
      </section>

    </PageWrapper>
  );
}
