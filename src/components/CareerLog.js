import React, { useState } from 'react';
import { personalInfo } from '../data/resumeData';
import { careerCommits } from '../lib/career';

export default function CareerLog() {
  const commits = careerCommits();
  const [hash, setHash] = useState(commits[0]?.hash ?? '');
  const selected = commits.find((c) => c.hash === hash) || commits[0];

  if (!selected) return null;

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">git log --career</p>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Check out a year.
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        The same roles as the journey, read like a repository. Pick a commit.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <ul className="border-t border-border lg:col-span-5" aria-label="Career commits">
          {commits.map((commit) => {
            const on = commit.hash === selected.hash;
            return (
              <li key={commit.hash} className="border-b border-border">
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => setHash(commit.hash)}
                  className={`flex w-full flex-col gap-1 py-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring ${
                    on ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="font-mono text-[11px] tracking-wide">{commit.hash}</span>
                  <span className={`text-sm ${on ? 'font-medium' : ''}`}>{commit.subject}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <article className="font-mono text-[13px] leading-relaxed text-muted-foreground lg:col-span-7 lg:border-l lg:border-border lg:pl-8" aria-live="polite">
          <p className="text-foreground">commit {selected.hash}</p>
          <p className="mt-2">Author: {personalInfo.name}</p>
          <p>Date: {selected.date}</p>
          <p className="mt-4 pl-4 text-foreground">{selected.subject}</p>
          <p className="mt-4 max-w-prose whitespace-pre-wrap font-body text-sm leading-relaxed">{selected.body}</p>
          <ul className="mt-5 space-y-1">
            {selected.files.map((file) => (
              <li key={file} className="text-foreground">
                + {file}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
