import React from 'react';
import { Button } from './ui';
import { setConsent, useConsent } from '../lib/consent';

/* Shown until the visitor makes a choice. Accept and Decline carry equal
   weight. The site itself sets no cookies; consent only gates third-party
   services (currently Google reCAPTCHA on the contact form). */
export default function CookieBanner() {
  const consent = useConsent();
  if (consent) return null;

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-2xl rounded-2xl border border-border bg-background p-5 shadow-card-hover sm:inset-x-6 sm:p-6"
    >
      <p className="text-sm font-medium text-foreground">Cookies</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        This site doesn&apos;t set cookies of its own. The contact form uses Google reCAPTCHA to
        block spam, which sets cookies when it loads. It stays off unless you allow it, and you can
        change your choice any time from the footer.
      </p>
      <div className="mt-4 flex flex-wrap gap-2.5">
        <Button variant="primary" onClick={() => setConsent('accepted')}>
          Allow
        </Button>
        <Button variant="secondary" onClick={() => setConsent('declined')}>
          Decline
        </Button>
      </div>
    </section>
  );
}
