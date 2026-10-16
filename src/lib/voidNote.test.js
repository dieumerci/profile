import { sanitizeVoid, VOID_LIMIT } from './voidNote';

test('strips control characters and caps length', () => {
  expect(sanitizeVoid('hello\u0000there')).toBe('hellothere');
  expect(sanitizeVoid(`<script>alert(1)</script>`).includes('<script>')).toBe(true);
  expect(sanitizeVoid('x'.repeat(500)).length).toBe(VOID_LIMIT);
  expect(sanitizeVoid(null)).toBe('');
  expect(sanitizeVoid(12)).toBe('');
});
