import React, { useRef, useState } from 'react';
import { Button } from './ui';
import Recaptcha from './Recaptcha';
import { setConsent, useConsent } from '../lib/consent';

const FORM_ID = process.env.REACT_APP_FORMSPREE_FORM_ID;
const SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
const COOLDOWN_MS = 30_000;
const TIMEOUT_MS = 15_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactFormConfigured = Boolean(FORM_ID && SITE_KEY);

const FIELD =
  'w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground ' +
  'placeholder:text-subtle-foreground focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  else if (name.length > 100) errors.name = 'Keep it under 100 characters.';
  if (!EMAIL_RE.test(email.trim()) || email.length > 254) errors.email = 'Enter a valid email address.';
  if (message.trim().length < 10) errors.message = 'Tell me a bit more (at least 10 characters).';
  else if (message.length > 4000) errors.message = 'Keep it under 4000 characters.';
  return errors;
}

export default function ContactForm() {
  const consent = useConsent();
  const captcha = useRef(null);
  const lastSent = useRef(0);
  const [values, setValues] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'submitting') return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!token) {
      setServerError('Please complete the spam check first.');
      setStatus('error');
      return;
    }
    const wait = COOLDOWN_MS - (Date.now() - lastSent.current);
    if (wait > 0) {
      setServerError(`Please wait ${Math.ceil(wait / 1000)}s before sending another message.`);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setServerError('');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          _gotcha: values._gotcha,
          'g-recaptcha-response': token,
        }),
        signal: controller.signal,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.errors?.map((x) => x.message).join(' ') || 'Something went wrong.');
      }
      lastSent.current = Date.now();
      setValues({ name: '', email: '', message: '', _gotcha: '' });
      setStatus('success');
    } catch (err) {
      setServerError(
        err.name === 'AbortError' ? 'The request timed out. Please try again.' : err.message,
      );
      setStatus('error');
    } finally {
      clearTimeout(timer);
      captcha.current?.reset();
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-border p-6" role="status">
        <p className="font-display text-xl font-semibold text-foreground">Message sent.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out. I&apos;ll reply by email soon.
        </p>
        <Button variant="secondary" className="mt-5" onClick={() => setStatus('idle')}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="cf-name" label="Name" error={errors.name}>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={update}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            className={`${FIELD} h-11`}
          />
        </Field>
        <Field id="cf-email" label="Email" error={errors.email}>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            value={values.email}
            onChange={update}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            className={`${FIELD} h-11`}
          />
        </Field>
      </div>
      <Field id="cf-message" label="Message" error={errors.message}>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          maxLength={4000}
          value={values.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          className={`${FIELD} py-3`}
        />
      </Field>

      {/* Honeypot: invisible to people, tempting to bots. Formspree drops filled submissions. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input name="_gotcha" tabIndex={-1} autoComplete="off" value={values._gotcha} onChange={update} />
        </label>
      </div>

      {consent === 'accepted' ? (
        <Recaptcha ref={captcha} siteKey={SITE_KEY} onChange={setToken} />
      ) : (
        <div className="rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
          The spam check uses Google reCAPTCHA, which sets cookies.{' '}
          <button
            type="button"
            onClick={() => setConsent('accepted')}
            className="font-medium text-foreground underline underline-offset-4"
          >
            Allow it to send a message
          </button>
          , or email me directly.
        </div>
      )}

      {status === 'error' && serverError && (
        <p className="text-sm text-red-600" role="alert">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={consent !== 'accepted' || status === 'submitting'}
        className="disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
