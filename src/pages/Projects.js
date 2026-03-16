import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, CV_URL } from '../data/resumeData';
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

function FeaturePill({ text }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-[4px] flex-shrink-0 text-[#F5C518]/60">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5l2.5 2.5L8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="font-body text-[#555555] text-[13px] leading-relaxed">{text}</span>
    </li>
  );
}

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
      id={project.slug}
    >
      {/* Large project number */}
      <div
        className="absolute -top-4 -left-2 font-display font-extrabold text-[120px] leading-none select-none pointer-events-none z-0"
        aria-hidden="true"
        style={{
          color: 'rgba(255,104,48,0.04)',
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10 card overflow-hidden">

        {/* Card Header */}
        <div
          className="p-7 sm:p-10 border-b border-[#1E1E1E] cursor-pointer group"
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
          aria-expanded={open}
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">

            {/* Left: label + name + tagline */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 bg-[#F5C518]/8 border border-[#F5C518]/15 px-2.5 py-1">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#2A2A2A] bg-[#111111] border border-[#1E1E1E] px-2.5 py-1">
                  {project.status}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-[#F5C518] transition-colors duration-200 mb-2">
                {project.name}
              </h2>

              <p className="font-mono text-[13px] text-[#888888]">
                {project.tagline}
              </p>
            </div>

            {/* Right: expand button */}
            <div className="flex items-center gap-3 flex-shrink-0 self-start">
              <motion.div
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="w-10 h-10 border border-[#1E1E1E] group-hover:border-[#F5C518]/40 flex items-center justify-center transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#888888] group-hover:text-[#F5C518] transition-colors">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Highlight */}
          <div className="mt-5 flex items-center gap-3">
            <div className="w-6 h-px bg-[#F5C518]/40" />
            <p className="font-mono text-[11px] text-[#F5C518]/50 italic">{project.highlight}</p>
          </div>
        </div>

        {/* Collapsed preview */}
        {!open && (
          <div className="p-7 sm:p-10">
            <p className="font-body text-[#555555] text-[14px] leading-relaxed line-clamp-2">
              {project.problem}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
              {project.tech.length > 5 && (
                <span className="tech-tag">+{project.tech.length - 5} more</span>
              )}
            </div>
          </div>
        )}

        {/* Expanded detail */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-7 sm:p-10 grid md:grid-cols-2 gap-10">

                {/* Problem + Solution */}
                <div className="space-y-7">
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-3">
                      The Problem
                    </h3>
                    <p className="font-body text-[#888888] text-[14px] leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-3">
                      The Solution
                    </h3>
                    <p className="font-body text-[#888888] text-[14px] leading-relaxed">{project.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-3">
                      My Role
                    </h3>
                    <p className="font-body text-[#888888] text-[14px] leading-relaxed">{project.role}</p>
                  </div>
                </div>

                {/* Features + Tech */}
                <div className="space-y-7">
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((f, fi) => (
                        <FeaturePill key={fi} text={f} />
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <PageWrapper>
      <PageHeader
        label="06 — Projects"
        title="Products I've built."
        subtitle="Four products built from the ground up — each solving a real problem in a different domain."
      />

      <div className="section-container pb-24">

        {/* Intro */}
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#2A2A2A] mb-10">
            Click any project to expand full details
          </p>
        </Reveal>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Domain grid */}
        <div className="mt-20">
          <Reveal>
            <p className="section-label mb-4">Coverage</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-10">
              Four domains, four different challenges.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: 'Tendry',
                domain: 'GovTech',
                color: '#F5C518',
                desc: 'Procurement complexity meets AI — making tenders accessible to SMEs.',
              },
              {
                name: 'Reklyn',
                domain: 'HealthTech',
                color: '#F5C518',
                desc: 'Revenue recovery intelligence for healthcare organizations.',
              },
              {
                name: 'Memoire',
                domain: 'CareerTech',
                color: '#F5C518',
                desc: 'AI-powered career coaching — resume, interviews, salary, and planning in one workspace.',
              },
              {
                name: 'Confy',
                domain: 'Social',
                color: '#F5C518',
                desc: 'Anonymous expression and emotional safety in digital communities.',
              },
            ].map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1}>
                <motion.a
                  href={`#${item.name.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ y: -4 }}
                  className="card card-hover p-6 block group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display font-bold text-white text-xl group-hover:text-[#F5C518] transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#F5C518]/60 border border-[#F5C518]/15 px-2 py-0.5">
                      {item.domain}
                    </span>
                  </div>
                  <p className="font-body text-[#555555] text-[13px] leading-relaxed">{item.desc}</p>
                  <p className="font-mono text-[11px] text-[#F5C518] mt-3 group-hover:text-[#F9E07A] transition-colors">
                    View details →
                  </p>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 border border-[#1E1E1E] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">Interested in collaborating?</h3>
              <p className="font-body text-[#555555] text-sm">I'm open to new opportunities and interesting engineering challenges.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <a href={CV_URL} download="kazadi_dieumerci_resume_2026.pdf" className="btn-ghost">
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </PageWrapper>
  );
}
