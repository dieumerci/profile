import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

/* Google reCAPTCHA v2 checkbox, loaded on demand. Only mount this once the
   visitor has allowed cookies, so no Google request happens before consent. */
let scriptPromise;

function loadRecaptcha() {
  if (window.grecaptcha && window.grecaptcha.render) return Promise.resolve(window.grecaptcha);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      window.__onRecaptchaLoad = () => resolve(window.grecaptcha);
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit&onload=__onRecaptchaLoad';
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        scriptPromise = undefined;
        reject(new Error('reCAPTCHA failed to load'));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

/* onChange(token) fires with the response token, or null when it expires.
   The parent can call ref.current.reset() after a submission. */
const Recaptcha = forwardRef(function Recaptcha({ siteKey, onChange }, ref) {
  const container = useRef(null);
  const widgetId = useRef(null);
  const [failed, setFailed] = useState(false);

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current !== null && window.grecaptcha) window.grecaptcha.reset(widgetId.current);
      onChange(null);
    },
  }));

  useEffect(() => {
    let cancelled = false;
    const node = container.current;
    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !node) return;
        widgetId.current = grecaptcha.render(node, {
          sitekey: siteKey,
          callback: (token) => onChange(token),
          'expired-callback': () => onChange(null),
          'error-callback': () => onChange(null),
        });
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
      widgetId.current = null;
      if (node) node.innerHTML = '';
    };
    // onChange is stable enough for this one-shot widget; re-rendering would reset the challenge
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey]);

  if (failed) {
    return (
      <p className="text-sm text-muted-foreground" role="alert">
        The spam check couldn&apos;t load. Check your connection or ad blocker and reload, or email
        me directly.
      </p>
    );
  }
  return <div ref={container} />;
});

export default Recaptcha;
