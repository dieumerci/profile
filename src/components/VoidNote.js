import React, { useState } from 'react';
import { VOID_LIMIT, readVoid, sanitizeVoid, writeVoid } from '../lib/voidNote';

export default function VoidNote() {
  const [value, setValue] = useState(() => readVoid());
  const [stored, setStored] = useState(true);

  function onChange(next) {
    const clean = sanitizeVoid(next);
    setValue(clean);
    const result = writeVoid(clean);
    setStored(result.ok);
  }

  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">The void</p>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        A note that stays here.
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        Written into this browser only, the way Confy keeps a private note. It is not uploaded, and
        the shell can read it with <span className="font-mono text-foreground">void</span>.
      </p>

      <label htmlFor="void-note" className="mt-6 block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Your note
      </label>
      <textarea
        id="void-note"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={VOID_LIMIT}
        rows={4}
        placeholder="Leave something. Only this browser will remember it."
        className="mt-2 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base leading-relaxed text-foreground placeholder:text-subtle-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted-foreground" role="status">
          {stored
            ? value
              ? 'Saved on this device'
              : 'Only this browser'
            : 'This browser blocked storage. The note lasts until you refresh.'}
        </p>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-subtle-foreground">
            {value.length}/{VOID_LIMIT}
          </span>
          <button
            type="button"
            onClick={() => onChange('')}
            className="inline-flex h-10 items-center text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
