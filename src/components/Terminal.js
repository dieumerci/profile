import React, { useEffect, useRef, useState } from 'react';
import { CV_URL } from '../data/resumeData';
import { completeCommand, runCommand } from '../lib/terminal';
import { readVoid } from '../lib/voidNote';

const SUGGESTIONS = ['help', 'projects', 'git log', 'coffee', 'fortune'];

let lineSeq = 0;
function withIds(lines) {
  return lines.map((line) => {
    lineSeq += 1;
    return { ...line, id: lineSeq };
  });
}

function johannesburgClock() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Johannesburg',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(new Date());
}

const WELCOME = withIds([
  { kind: 'text', text: 'Dieumerci Kazadi — interactive shell' },
  { kind: 'muted', text: 'Type help. Nothing you type leaves this browser.' },
]);

function lineClass(kind) {
  if (kind === 'error') return 'text-background';
  if (kind === 'muted') return 'text-background/55';
  return 'text-background/90';
}

export default function Terminal() {
  const [log, setLog] = useState(WELCOME);
  const [value, setValue] = useState('');
  const [mode, setMode] = useState(null);
  const [history, setHistory] = useState([]);
  const [cursor, setCursor] = useState(-1);
  const [clock, setClock] = useState(johannesburgClock);
  const draft = useRef('');
  const inputRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const id = window.setInterval(() => setClock(johannesburgClock()), 30000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log, mode]);

  function applyResult(result, typed, echo) {
    setMode(result.mode || null);
    if (result.action?.type === 'clear') {
      setLog([]);
      return;
    }
    const echoed =
      echo && typed
        ? [{ kind: 'input', text: `${mode === 'vim' ? ':' : '❯'} ${typed}` }]
        : [];
    setLog((prev) => [...prev, ...withIds([...echoed, ...result.lines])].slice(-400));

    if (result.action?.type === 'scroll') {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.getElementById(result.action.id)?.scrollIntoView({
        behavior: reduce ? 'auto' : 'smooth',
        block: 'start',
      });
    }

    if (result.action?.type === 'download' && result.action.href === CV_URL) {
      const a = document.createElement('a');
      a.href = CV_URL;
      a.download = 'kazadi_dieumerci_resume_2026.pdf';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

  function execute(raw) {
    const typed = String(raw).slice(0, 240);
    const hide = mode === 'sudo';
    const result = runCommand(typed, {
      mode,
      history,
      voidNote: readVoid(),
    });
    if (!hide && typed.trim() && result.action?.type !== 'clear') {
      setHistory((prev) => [...prev, typed.trim()].slice(-50));
    }
    setCursor(-1);
    draft.current = '';
    applyResult(result, typed.trim(), !hide);
    setValue('');
  }

  function onKeyDown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length || mode === 'sudo') return;
      const next = cursor === -1 ? history.length - 1 : Math.max(0, cursor - 1);
      if (cursor === -1) draft.current = value;
      setCursor(next);
      setValue(history[next]);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cursor === -1) return;
      const next = cursor + 1;
      if (next >= history.length) {
        setCursor(-1);
        setValue(draft.current);
      } else {
        setCursor(next);
        setValue(history[next]);
      }
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const { matches } = completeCommand(value);
      if (matches.length === 1) {
        setValue(`${matches[0]} `);
      } else if (matches.length > 1) {
        setLog((prev) => [...prev, ...withIds([{ kind: 'muted', text: matches.join('   ') }])]);
      }
    }
  }

  const prompt = mode === 'vim' ? ':' : mode === 'sudo' ? 'password' : '❯';

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-foreground bg-foreground text-background">
        <div className="flex items-center justify-between gap-3 border-b border-background/15 px-4 py-2.5">
          <span className="font-mono text-[11px] tracking-wide text-background/60">guest@kazadi</span>
          <span className="font-mono text-[11px] text-background/50">JNB {clock}</span>
        </div>

        <div
          ref={scrollerRef}
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          className="shell-log h-80 overflow-auto px-4 py-4 font-mono text-[13px] leading-relaxed sm:h-96"
        >
          {log.map((line) => (
            <div key={line.id} className={`whitespace-pre-wrap break-words ${lineClass(line.kind)}`}>
              {line.text || ' '}
            </div>
          ))}
        </div>

        <form
          className="border-t border-background/15 focus-within:ring-2 focus-within:ring-inset focus-within:ring-background/70"
          onSubmit={(e) => {
            e.preventDefault();
            execute(value);
          }}
        >
          <label htmlFor="shell-input" className="sr-only">
            Shell command
          </label>
          <div className="flex items-center gap-2 px-4 py-3">
            <span className={mode ? 'font-mono text-xs text-background/70' : 'text-success'} aria-hidden="true">
              {prompt}
            </span>
            <input
              ref={inputRef}
              id="shell-input"
              value={mode === 'sudo' ? '•'.repeat(value.length) : value}
              onChange={(e) => {
                const next = e.target.value;
                if (mode !== 'sudo') {
                  setValue(next.slice(0, 240));
                  return;
                }
                if (next.length < value.length) {
                  setValue(value.slice(0, next.length));
                  return;
                }
                setValue((value + next.slice(value.length)).slice(0, 240));
              }}
              onKeyDown={onKeyDown}
              maxLength={240}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="go"
              placeholder={mode === 'vim' ? ':q' : mode === 'sudo' ? '' : 'help'}
              type="text"
              className="w-full bg-transparent font-mono text-base text-background outline-none placeholder:text-background/30 focus-visible:outline-none"
            />
          </div>
        </form>
      </div>

      <div className="mt-3 flex flex-wrap gap-2" aria-label="Suggested commands">
        {SUGGESTIONS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => {
              execute(cmd);
              inputRef.current?.focus();
            }}
            className="inline-flex h-10 items-center rounded-full border border-border px-3 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/25 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
