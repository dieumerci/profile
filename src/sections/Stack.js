import React from 'react';
import { skillGroups, primarySkills } from '../data/resumeData';
import Reveal from '../components/Reveal';
import { SectionHeading, Tag, Icon } from '../components/ui';

export default function Stack() {
  return (
    <section id="stack" className="border-t border-border py-20 sm:py-28">
      <div className="section-container">
        <Reveal>
          <SectionHeading index="03" eyebrow="Skills & Stack" title="The tools behind the work." />
        </Reveal>

        {/* Daily drivers */}
        <Reveal delay={0.05}>
          <div className="mt-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Daily drivers
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {primarySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Domains — definition-list rows */}
        <div className="mt-14 border-t border-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <div className="grid gap-4 border-b border-border py-7 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-5">
                  <div className="flex items-center gap-2.5">
                    <Icon name={group.icon} size={18} className="text-foreground" />
                    <h3 className="font-display font-semibold text-foreground">{group.category}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:col-span-7 sm:justify-end">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
