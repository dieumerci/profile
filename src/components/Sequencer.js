import React, { useEffect, useRef, useState } from 'react';

const NOTES = [
  { name: 'A', freq: 440 },
  { name: 'G', freq: 392 },
  { name: 'E', freq: 329.63 },
  { name: 'D', freq: 293.66 },
  { name: 'C', freq: 261.63 },
];
const STEPS = 8;

const SEED = [
  [1, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0],
];

function emptyGrid() {
  return NOTES.map(() => Array(STEPS).fill(0));
}

/* Five notes that agree with each other. A step sequencer, heard in this browser only. */
export default function Sequencer() {
  const [grid, setGrid] = useState(SEED);
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(-1);
  const [bpm, setBpm] = useState(104);
  const gridRef = useRef(grid);
  const bpmRef = useRef(bpm);
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const nextTimeRef = useRef(0);
  const stepRef = useRef(0);

  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);
  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  useEffect(() => () => window.clearInterval(timerRef.current), []);

  function strike(time, freq) {
    const audio = audioRef.current;
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(0.07, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.22);
    osc.connect(gain);
    gain.connect(audio.destination);
    osc.start(time);
    osc.stop(time + 0.24);
  }

  function tick() {
    const audio = audioRef.current;
    if (!audio) return;
    const horizon = audio.currentTime + 0.12;
    while (nextTimeRef.current < horizon) {
      const index = stepRef.current;
      gridRef.current.forEach((row, note) => {
        if (row[index]) strike(nextTimeRef.current, NOTES[note].freq);
      });
      const playedAt = nextTimeRef.current;
      const played = index;
      window.setTimeout(() => {
        if (audioRef.current) setStep(played);
      }, Math.max(0, (playedAt - audio.currentTime) * 1000));
      nextTimeRef.current += 60 / bpmRef.current / 2;
      stepRef.current = (index + 1) % STEPS;
    }
  }

  async function togglePlay() {
    if (playing) {
      window.clearInterval(timerRef.current);
      setPlaying(false);
      setStep(-1);
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!audioRef.current) audioRef.current = new AudioCtx();
    if (audioRef.current.state === 'suspended') await audioRef.current.resume();
    nextTimeRef.current = audioRef.current.currentTime + 0.06;
    stepRef.current = 0;
    setPlaying(true);
    tick();
    timerRef.current = window.setInterval(tick, 25);
  }

  function toggleCell(note, index) {
    setGrid((rows) => rows.map((row, r) => (r === note ? row.map((cell, c) => (c === index ? 1 - cell : cell)) : row)));
  }

  return (
    <div className="card flex h-full flex-col p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Five notes</p>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
        A machine that can&apos;t play a wrong note.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        C, D, E, G and A only, so anything you switch on still agrees. It plays here, and nowhere
        else.
      </p>

      <div className="mt-8 space-y-1.5" role="group" aria-label="Sequencer">
        <div className="grid grid-cols-[1.5rem_repeat(8,minmax(0,1fr))] gap-1.5" aria-hidden="true">
          <span />
          {Array.from({ length: STEPS }, (_, c) => (
            <span key={c} className={`h-1 rounded-full ${playing && step === c ? 'bg-foreground' : 'bg-transparent'}`} />
          ))}
        </div>
        {NOTES.map((note, r) => (
          <div key={note.name} className="grid grid-cols-[1.5rem_repeat(8,minmax(0,1fr))] items-center gap-1.5">
            <span className="font-mono text-[11px] text-subtle-foreground">{note.name}</span>
            {grid[r].map((on, c) => (
              <button
                key={c}
                type="button"
                aria-pressed={on === 1}
                aria-label={`${note.name}, step ${c + 1}`}
                onClick={() => toggleCell(r, c)}
                className={`h-8 rounded-sm border ${
                  on ? 'border-foreground bg-foreground' : 'border-border bg-background'
                }`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          className="h-10 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {playing ? 'Stop' : 'Play'}
        </button>
        <button
          type="button"
          onClick={() => setGrid(emptyGrid())}
          className="h-10 rounded-full border border-border px-4 text-sm text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Clear
        </button>
        <label className="flex min-w-[9rem] flex-1 items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {bpm}
          </span>
          <input
            type="range"
            min={72}
            max={160}
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            aria-label="Tempo"
            className="w-full accent-current"
          />
        </label>
      </div>
    </div>
  );
}
