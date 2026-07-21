import React from 'react';
import { personalInfo, socialLinks, CV_URL } from '../data/resumeData';
import { SECTIONS } from '../lib/sections';
import { Icon } from './ui';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border" role="contentinfo">
      <div className="section-container py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#home" className="font-display text-lg font-semibold tracking-tight text-foreground">
              Dieumerci Kazadi<span className="text-subtle-foreground">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Software engineer building AI-powered products, SaaS platforms, and scalable systems.
            </p>
            <div className="mt-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
              <span className="font-mono text-xs tracking-wide text-muted-foreground">
                Available for work
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon name={s.icon} size={16} />
                {s.value}
              </a>
            ))}
            <a
              href={CV_URL}
              download="kazadi_dieumerci_resume_2026.pdf"
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon name="download" size={16} />
              Résumé (PDF)
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-subtle-foreground">
            © {year} Dieumerci Kazadi
          </p>
          <p className="font-mono text-xs text-subtle-foreground">
            {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
