import React, { useState } from 'react';
import { shipSketches } from '../lib/sketches';
import { Tag } from './ui';

export default function ShipSketch() {
  const sketches = shipSketches();
  const [id, setId] = useState(sketches[0]?.id ?? '');
  const selected = sketches.find((s) => s.id === id) || sketches[0];

  if (!selected) return null;

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Ship a sketch</p>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Pick a problem.
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Each one is a product that already exists — the stack is the one it actually ships with.
      </p>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div role="radiogroup" aria-label="Problems to sketch" className="flex flex-col gap-2 lg:col-span-5">
          {sketches.map((sketch) => {
            const on = sketch.id === selected.id;
            return (
              <button
                key={sketch.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => setId(sketch.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  on
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-foreground hover:bg-muted'
                }`}
              >
                {sketch.prompt}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7 lg:border-l lg:border-border lg:pl-10" aria-live="polite">
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="font-display text-3xl font-semibold tracking-tight text-foreground">{selected.name}</h4>
            <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{selected.status}</span>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-foreground">{selected.tagline}</p>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">{selected.highlight}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {selected.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          {selected.website && (
            <a
              href={selected.website}
              target="_blank"
              rel="noreferrer"
              className="link-underline mt-6 inline-flex text-sm font-medium text-foreground"
            >
              Visit {selected.name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
