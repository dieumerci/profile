import React from 'react';
import { experience, education } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { SectionHeading, Tag, Icon } from '../components/ui';

function Role({ entry }) {
  const isCurrent = !entry.endDate;
  return (
    <div className="grid gap-4 border-b border-border py-9 sm:grid-cols-12 sm:gap-8">
      {/* Left — period + company */}
      <div className="sm:col-span-4">
        <div className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {entry.period}
        </div>
        <h4 className="mt-2 flex flex-wrap items-center gap-2 font-display text-xl font-semibold text-foreground">
          {entry.company}
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                Now
              </span>
            </span>
          )}
        </h4>
        <div className="mt-1 text-sm text-muted-foreground">{entry.role}</div>
        <div className="mt-1 font-mono text-[11px] text-subtle-foreground">{entry.domain}</div>
      </div>

      {/* Right — summary + work + tech */}
      <div className="sm:col-span-8">
        <p className="leading-relaxed text-muted-foreground">{entry.summary}</p>
        <ul className="mt-4 space-y-2">
          {entry.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <Icon name="check" size={14} className="mt-1 shrink-0 text-foreground" />
              {r}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Journey"
            title="Eight years of production software."
            subtitle="Five companies, five industries — fintech, media analytics, civic tech, AI-driven CX, and cloud banking."
          />
        </Reveal>

        <div className="mt-14 border-t border-border">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.04}>
              <Role entry={entry} />
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Education
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {education.map((ed, i) => (
              <Reveal key={ed.id} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <div className="flex items-center justify-between">
                    <Icon name="graduation-cap" size={20} className="text-foreground" />
                    <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-muted-foreground">
                      {ed.level}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
                    {ed.degree}
                  </h4>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {ed.institution} · {ed.period}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {ed.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
