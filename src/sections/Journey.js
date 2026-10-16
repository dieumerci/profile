import React from 'react';
import { experience, education } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { SectionHeading, Tag, Icon } from '../components/ui';

function Role({ entry }) {
  const isCurrent = !entry.endDate;
  const wide = entry.span === 2;
  return (
    <div className={`card h-full p-6 ${wide ? 'sm:grid sm:grid-cols-2 sm:gap-10' : 'flex flex-col'}`}>
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
            {entry.period}
          </span>
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                Now
              </span>
            </span>
          )}
        </div>
        <h4 className="mt-4 font-display text-lg font-semibold leading-snug text-foreground">
          {entry.company}
        </h4>
        <div className="mt-1 text-sm text-muted-foreground">{entry.role}</div>
        <div className="mt-1 font-mono text-[11px] text-subtle-foreground">{entry.domain}</div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
      </div>
      <div className={wide ? 'mt-6 sm:mt-0' : ''}>
        <ul className={wide ? 'space-y-2' : 'mt-4 space-y-2'}>
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
            index="02"
            eyebrow="Journey"
            title="Software that had to stay up."
            subtitle="Cloud banking, civic data, media analytics, enterprise customer experience, and tax compliance."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {experience.map((entry, i) => (
            <Reveal
              key={entry.id}
              delay={i * 0.04}
              className={entry.span === 2 ? 'h-full sm:col-span-2' : 'h-full'}
            >
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
