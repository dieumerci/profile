import { useSyncExternalStore } from 'react';

/* Cookie consent state. Stored in localStorage (never a cookie itself) and
   shared through a tiny subscribe/emit store so the banner, the footer
   "Cookie settings" link and the captcha all stay in sync. */
const KEY = 'consent.v1';
const listeners = new Set();

function read() {
  try {
    const value = window.localStorage.getItem(KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

let current = read();

function emit(next) {
  current = next;
  listeners.forEach((fn) => fn());
}

export function setConsent(value) {
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* storage blocked: the choice still applies for this page view */
  }
  emit(value);
}

export function resetConsent() {
  try {
    window.localStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
  emit(null);
}

function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/* 'accepted' | 'declined' | null (not chosen yet) */
export function useConsent() {
  return useSyncExternalStore(subscribe, () => current, () => null);
}
