import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { SectionHeading, Badge, Tag, Icon, TextLink } from '../components/ui';

function MonoLabel({ children }) {
  return (
    <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </h4>
  );
}

/* An expandable editorial row per product. */
function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `project-${project.slug}`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-start gap-5 py-8 text-left focus-visible:outline-none sm:gap-8 sm:py-10"
      >
        <span className="w-6 shrink-0 pt-2 font-mono text-sm text-subtle-foreground sm:w-8">
          0{index + 1}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground transition-opacity duration-200 group-hover:opacity-60 sm:text-4xl">
              {project.name}
            </span>
            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
              {project.category}
            </span>
          </span>
          <span className="mt-2 block text-muted-foreground sm:text-lg">{project.tagline}</span>
        </span>

        <span className="flex shrink-0 items-center gap-4 pt-2">
          <span className="hidden gap-1.5 md:flex">
            {project.badges.map((b) => (
              <Badge key={b}>{b}</Badge>
            ))}
          </span>
          <Icon
            name="chevron-down"
            size={22}
            className={`text-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-10 sm:pl-14 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div>
                  <MonoLabel>The problem</MonoLabel>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <MonoLabel>The product</MonoLabel>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <MonoLabel>My role</MonoLabel>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {project.role}
                  </p>
                </div>
              </div>

              <div>
                <MonoLabel>Capabilities</MonoLabel>
                <ul className="mt-3 space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <Icon name="check" size={14} className="mt-1 shrink-0 text-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                {project.website && (
                  <div className="mt-6">
                    <TextLink href={project.website} target="_blank" rel="noopener noreferrer">
                      {project.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      <Icon name="arrow-up-right" size={16} />
                    </TextLink>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Selected Work"
            title="Products, not portfolio pieces."
            subtitle="Five platforms — designed, architected, and shipped end-to-end."
          />
        </Reveal>

        <div className="mt-14 border-t border-border">
          {projects.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
