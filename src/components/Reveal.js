import React, { useEffect, useRef, useState } from 'react';

/**
 * Scroll reveal — a subtle upward slide, driven by IntersectionObserver.
 *
 * Content is ALWAYS fully opaque; only a small translateY animates. This is
 * a deliberate robustness choice: if the render clock is ever throttled (or
 * JS/observer never runs), the worst case is content sitting a few pixels
 * low — never invisible, never a blank/white screen. Reduced motion removes
 * the movement entirely.
 */
export default function Reveal({ children, delay = 0, duration = 0.6, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    observer.observe(el);

    // Safety net: settle to the resting position even if the observer never fires.
    const safety = setTimeout(() => setShown(true), 800);

    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, []);

  const style = reduced
    ? undefined
    : {
        transform: shown ? 'none' : 'translateY(14px)',
        transition: `transform ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: shown ? 'auto' : 'transform',
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
