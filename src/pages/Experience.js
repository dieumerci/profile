import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experience, CV_URL } from '../data/resumeData';
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

function TechPill({ label }) {
  return (
    <span className="tech-tag">{label}</span>
  );
}

function ExperienceCard({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLast = index === experience.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[5px] top-8 bottom-0 w-px bg-gradient-to-b from-[#F5C518]/40 to-[#1E1E1E]/30" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-[22px] w-[11px] h-[11px] rounded-full bg-[#F5C518] border-2 border-[#0A0A0A] ring-4 ring-[#F5C518]/15" />

      {/* Card */}
      <div className="mb-12">
        <motion.div
          className="card card-hover p-6 sm:p-8 cursor-pointer group"
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          onClick={() => setExpanded(!expanded)}
          role="button"
          aria-expanded={expanded}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setExpanded(!expanded)}
        >
          {/* Card top row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F5C518]/60 bg-[#F5C518]/8 border border-[#F5C518]/15 px-2 py-0.5">
                  {job.domain}
                </span>
                {!job.endDate && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/70 bg-emerald-400/8 border border-emerald-400/20 px-2 py-0.5">
                    Current
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#F5C518] transition-colors">
                {job.role}
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <span className="font-body text-[#C4CDDC] text-[15px]">{job.company}</span>
                <span className="text-[#2A2A2A] text-xs">·</span>
                <span className="font-mono text-[12px] text-[#555555]">{job.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-mono text-[12px] text-[#555555] whitespace-nowrap">{job.period}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                className="text-[#2A2A2A] group-hover:text-[#F5C518] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Summary */}
          <p className="font-body text-[#555555] text-sm leading-relaxed mb-4">
            {job.summary}
          </p>

          {/* Tech tags (always visible) */}
          <div className="flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>

          {/* Expanded responsibilities */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-[#1E1E1E]">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {job.responsibilities.map((r, ri) => (
                  <li key={ri} className="flex items-start gap-3">
                    <span className="text-[#F5C518]/50 mt-[3px] flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="font-body text-[#888888] text-[13px] leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Expand hint */}
          {!expanded && (
            <p className="font-mono text-[10px] text-[#2A2A2A] group-hover:text-[#555555] transition-colors mt-4">
              Click to expand →
            </p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <PageWrapper>
      <PageHeader
        label="02 — Experience"
        title="Where I've shipped."
        subtitle="5 companies, 6+ years, spanning fintech, civic tech, AI platforms, media analytics, and global tax compliance."
      />

      <div className="section-container pb-24">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Timeline */}
          <div className="lg:col-span-3">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#2A2A2A] mb-8">
                Click any role to see full responsibilities
              </p>
            </Reveal>

            <div className="relative">
              {experience.map((job, index) => (
                <ExperienceCard key={job.id} job={job} index={index} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-5">

              {/* Summary stats */}
              <Reveal direction="right">
                <div className="card p-6">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-5">
                    At a Glance
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Years', value: '6+' },
                      { label: 'Roles', value: '5' },
                      { label: 'Countries', value: 'South Africa' },
                      { label: 'Current', value: 'nCino, 2024–' },
                    ].map((s) => (
                      <div key={s.label}>
                        <span className="font-mono text-[10px] text-[#2A2A2A] uppercase tracking-wider block mb-0.5">{s.label}</span>
                        <span className="font-display font-semibold text-[#C4CDDC] text-sm">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Domain coverage */}
              <Reveal direction="right" delay={0.1}>
                <div className="card p-6">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-4">
                    Domains
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Fintech', 'AI/CX', 'Civic Tech', 'Media', 'Tax Tech'].map((d) => (
                      <span key={d} className="tech-tag">{d}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Download CV */}
              <Reveal direction="right" delay={0.2}>
                <a
                  href={CV_URL}
                  download="kazadi_dieumerci_resume_2026.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#F5C518] text-[#F5C518] font-mono text-sm hover:bg-[#F5C518] hover:text-[#0A0A0A] transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Download CV
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Mobile CV download */}
        <div className="lg:hidden mt-8">
          <a
            href={CV_URL}
            download="kazadi_dieumerci_resume_2026.pdf"
            className="flex items-center justify-center gap-2 w-full py-3 border border-[#F5C518] text-[#F5C518] font-mono text-sm"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9M4 7l4 4 4-4M2 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
