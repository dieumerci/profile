import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { skillGroups, primarySkills } from '../data/resumeData';
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

// Primary skill items with "featured" treatment
const primaryDetails = {
  'Ruby on Rails':  { years: '5+', context: 'Production fintech & media systems' },
  'Python':         { years: '6+', context: 'Data pipelines, APIs, compliance systems' },
  'JavaScript':     { years: '4+', context: 'Frontend with React, backend tooling' },
  'PostgreSQL':     { years: '5+', context: 'Primary DB across all backend roles' },
  'AWS':            { years: '4+', context: 'Cloud infra, S3, deployment pipelines' },
  'Docker':         { years: '3+', context: 'Containerization & dev environments' },
  'Elixir':         { years: '2+', context: 'Concurrent backend at Helm Africa' },
  'Django':         { years: '4+', context: 'Python web services & APIs' },
};

function PrimarySkillCard({ skill, index }) {
  const details = primaryDetails[skill] || { years: '3+', context: 'Across multiple roles' };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="group card card-hover p-5 flex flex-col gap-3 relative overflow-hidden cursor-default"
    >
      {/* Orange accent left border on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F5C518]/0 group-hover:bg-[#F5C518] transition-all duration-300" />

      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono text-[13px] text-[#C4CDDC] group-hover:text-[#F5C518] transition-colors font-medium">
          {skill}
        </h3>
        <span className="font-mono text-[10px] text-[#F5C518]/60 bg-[#F5C518]/8 border border-[#F5C518]/15 px-2 py-0.5 flex-shrink-0">
          {details.years}
        </span>
      </div>
      <p className="font-body text-[#555555] text-[12px] leading-relaxed">{details.context}</p>
    </motion.div>
  );
}

function SkillBadge({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.04, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="skill-badge"
    >
      {label}
    </motion.span>
  );
}

function SkillGroup({ group, groupIndex }) {
  return (
    <Reveal delay={groupIndex * 0.08}>
      <div className="card p-6 sm:p-8 h-full">
        {/* Group header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1E1E1E]">
          <div className="w-8 h-8 border border-[#1E1E1E] flex items-center justify-center flex-shrink-0">
            <span className="font-mono text-[#F5C518] text-sm">{group.icon}</span>
          </div>
          <h3 className="font-display font-semibold text-white text-sm">{group.category}</h3>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, si) => (
            <SkillBadge key={skill} label={skill} index={groupIndex * 6 + si} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <PageWrapper>
      <PageHeader
        label="05 — Skills"
        title="Tech stack & tools."
        subtitle="A curated overview of languages, frameworks, databases, and infrastructure I work with professionally."
      />

      <div className="section-container pb-24">

        {/* Primary Skills */}
        <section className="mb-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <p className="section-label mb-2">Primary Expertise</p>
                <p className="font-body text-[#555555] text-sm">Technologies I use most frequently and with the most depth.</p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {primarySkills.map((skill, i) => (
              <PrimarySkillCard key={skill} skill={skill} index={i} />
            ))}
          </div>
        </section>

        {/* Full skill groups */}
        <section className="mb-16">
          <Reveal>
            <p className="section-label mb-2">Full Tech Stack</p>
            <p className="font-body text-[#555555] text-sm mb-8">All technologies organized by category.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.category} group={group} groupIndex={i} />
            ))}
          </div>
        </section>

        {/* All skills flat list (searchable feel) */}
        <section className="mb-16">
          <Reveal>
            <div className="card p-8 sm:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/70 mb-2">Complete Index</p>
              <h2 className="font-display text-xl font-bold text-white mb-6">All technologies</h2>
              <div className="flex flex-wrap gap-2">
                {skillGroups.flatMap((g) => g.skills).map((skill, i) => (
                  <SkillBadge key={`${skill}-${i}`} label={skill} index={i} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Philosophy cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: '{ }',
              title: 'Language-Agnostic',
              text: 'Strong fundamentals over tool-specific habits. Given enough context, I can work effectively in any modern stack.',
            },
            {
              icon: '⬡',
              title: 'Systems Thinker',
              text: 'I think about architecture, data flow, failure modes, and maintainability — not just "does this feature work?"',
            },
            {
              icon: '◈',
              title: 'Production-Minded',
              text: 'Security, observability, and operational correctness matter as much as the initial build in every engineering decision.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group">
                <div className="w-9 h-9 border border-[#1E1E1E] flex items-center justify-center mb-4 group-hover:border-[#F5C518]/40 transition-colors">
                  <span className="font-mono text-[#F5C518] text-sm">{item.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="font-body text-[#555555] text-[13px] leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">
              See Projects
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
            <Link to="/experience" className="btn-ghost">
              View Experience
            </Link>
          </div>
        </Reveal>
      </div>
    </PageWrapper>
  );
}
