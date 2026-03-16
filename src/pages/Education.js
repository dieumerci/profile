import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { education, CV_URL } from '../data/resumeData';
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

function EducationCard({ edu, index }) {
  const isHonours = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative group"
    >
      {/* Feature indicator */}
      {isHonours && (
        <div className="absolute -top-3 right-6 z-10">
          <span className="font-mono text-[9px] uppercase tracking-widest bg-[#F5C518] text-[#0A0A0A] px-3 py-1">
            Most Recent
          </span>
        </div>
      )}

      <div className={`card card-hover p-8 sm:p-10 h-full flex flex-col ${isHonours ? 'border-[#F5C518]/20' : ''}`}>

        {/* Header */}
        <div className="flex items-start gap-6 mb-6">
          {/* Icon */}
          <div className={`w-14 h-14 border flex items-center justify-center flex-shrink-0 transition-colors ${
            isHonours ? 'border-[#F5C518]/40 bg-[#F5C518]/5' : 'border-[#1E1E1E]'
          }`}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={isHonours ? 'text-[#F5C518]' : 'text-[#2A2A2A]'}>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 block mb-1.5">
              {edu.level}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#F5C518] transition-colors leading-tight">
              {edu.degree}
            </h3>
          </div>
        </div>

        {/* Institution */}
        <div className="border-t border-[#1E1E1E] pt-5 mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#2A2A2A] block mb-1">Institution</span>
              <span className="font-display font-semibold text-[#C4CDDC] text-lg">{edu.institution}</span>
              <span className="font-body text-[#555555] text-sm block">{edu.location}</span>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#2A2A2A] block mb-1">Completed</span>
              <span className="font-mono text-[#888888] text-sm">{edu.period}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-[#555555] text-[14px] leading-relaxed flex-1">
          {edu.description}
        </p>

        {/* Highlights */}
        {isHonours && (
          <div className="mt-6 pt-5 border-t border-[#1E1E1E]/60">
            <div className="flex flex-wrap gap-2">
              {['Computer Science', 'Honours Level', 'Research Methods', 'Advanced Algorithms'].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
        {!isHonours && (
          <div className="mt-6 pt-5 border-t border-[#1E1E1E]/60">
            <div className="flex flex-wrap gap-2">
              {['Computer Science', 'Data Structures', 'Systems Design', 'Mathematics'].map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <PageWrapper>
      <PageHeader
        label="04 — Education"
        title="Academic foundation."
        subtitle="Two degrees from Pearson Institute, building from core fundamentals to honours-level research and advanced theory."
      />

      <div className="section-container pb-24">

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>

        {/* Institution feature */}
        <Reveal>
          <div className="card p-8 sm:p-10 grid sm:grid-cols-3 gap-8 items-center">
            <div className="sm:col-span-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F5C518]/60 block mb-3">
                The Institution
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Pearson Institute</h3>
              <p className="font-body text-[#555555] text-sm leading-relaxed max-w-lg">
                Pearson Institute of Higher Education (Midrand) is one of South Africa's established private higher education institutions, offering nationally accredited programmes in Information Technology and Computer Science.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Location', value: 'Midrand, South Africa' },
                { label: 'Programmes', value: 'BSc Computer Science' },
                { label: 'Total Study', value: '2015 — 2024' },
              ].map((f) => (
                <div key={f.label}>
                  <span className="font-mono text-[10px] text-[#2A2A2A] uppercase tracking-wider block mb-0.5">{f.label}</span>
                  <span className="font-body text-[#888888] text-sm">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Philosophy section */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {[
            {
              icon: '◈',
              title: 'Foundation First',
              text: 'Strong theoretical grounding in algorithms, data structures, and systems — applied daily in real engineering decisions.',
            },
            {
              icon: '⬡',
              title: 'Continuous Learning',
              text: 'Engineering knowledge doesn\'t stop at graduation. Every role, every problem, every codebase has been part of the curriculum.',
            },
            {
              icon: '◻',
              title: 'Applied Theory',
              text: 'Academic principles meet production realities — from formal methods to CI/CD pipelines and cloud infrastructure.',
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
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-wrap gap-4">
            <Link to="/skills" className="btn-primary">
              View Tech Stack
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
            <a
              href={CV_URL}
              download="kazadi_dieumerci_resume_2026.pdf"
              className="btn-ghost"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </PageWrapper>
  );
}
