/* Private on-device note. Never uploaded. Stored as plain text. */

export const VOID_KEY = 'dk.void.v1';
export const VOID_LIMIT = 280;

export function sanitizeVoid(value) {
  if (typeof value !== 'string') return '';
  // Stripping control characters is the point of this regex.
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').slice(0, VOID_LIMIT);
}

export function readVoid() {
  try {
    return sanitizeVoid(window.localStorage.getItem(VOID_KEY) ?? '');
  } catch {
    return '';
  }
}

export function writeVoid(value) {
  const next = sanitizeVoid(value);
  try {
    if (next) window.localStorage.setItem(VOID_KEY, next);
    else window.localStorage.removeItem(VOID_KEY);
    return { ok: true, value: next };
  } catch {
    return { ok: false, value: next };
  }
}
