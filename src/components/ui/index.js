import React from 'react';
import Icon from './Icon';

export { Icon };

/* ─────────────────────────────────────────────────────────────────
   UI KIT — MONO. Minimal monochrome primitives: black actions, hairline
   surfaces, mono labels. No glass, no gradients. See docs/design-system.md.
───────────────────────────────────────────────────────────────── */

/* ─── Button ──────────────────────────────────────────────────── */
const BTN_BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium ' +
  'transition-colors duration-200 select-none active:scale-[0.99] whitespace-nowrap ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const BTN_SIZES = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[15px]',
};

const BTN_VARIANTS = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/85',
  secondary: 'border border-border text-foreground hover:bg-muted hover:border-foreground/25',
  ghost: 'text-muted-foreground hover:text-foreground',
};

export function Button({
  href,
  download,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = `${BTN_BASE} ${BTN_SIZES[size]} ${BTN_VARIANTS[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} download={download} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  );
}

/* ─── Card ────────────────────────────────────────────────────── */
export function Card({ hover = false, className = '', children, ...rest }) {
  const hoverCls = hover
    ? 'transition-all duration-200 hover:border-foreground/20 hover:shadow-card-hover hover:-translate-y-0.5'
    : '';
  return (
    <div className={`card ${hoverCls} ${className}`} {...rest}>
      {children}
    </div>
  );
}

/* ─── Badge ───────────────────────────────────────────────────── */
export function Badge({ dot = false, className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-muted-foreground ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-success" aria-hidden="true" />}
      {children}
    </span>
  );
}

/* ─── Tag — small technical chip ──────────────────────────────── */
export function Tag({ className = '', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}

/* ─── TextLink — inline underline-on-hover link ───────────────── */
export function TextLink({ href, download, className = '', children, ...rest }) {
  return (
    <a
      href={href}
      download={download}
      className={`link-underline inline-flex items-center gap-1.5 font-medium text-foreground ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

/* ─── Eyebrow — numbered section label ────────────────────────── */
export function Eyebrow({ index, children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      {index && (
        <>
          <span className="text-foreground">{index}</span>
          <span className="mx-2 text-border">/</span>
        </>
      )}
      {children}
    </span>
  );
}

/* ─── SectionHeading ──────────────────────────────────────────── */
export function SectionHeading({ index, eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="mb-5">
          <Eyebrow index={index}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-foreground text-balance leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed text-balance">{subtitle}</p>
      )}
    </div>
  );
}
