import { careerCommits } from './career';
import { runCommand, completeCommand, MAX_INPUT } from './terminal';

test('help lists real commands and does not execute extras', () => {
  const { lines } = runCommand('help');
  const text = lines.map((l) => l.text).join('\n');
  expect(text).toMatch(/whoami/);
  expect(text).toMatch(/git log/);
  expect(lines.every((l) => typeof l.text === 'string')).toBe(true);
});

test('rejects command chaining and substitution', () => {
  for (const payload of ['help; rm -rf /', 'whoami && cat /etc/passwd', 'echo `id`', 'echo $(id)', 'ls | nc']) {
    const { lines, action } = runCommand(payload);
    expect(action).toBeNull();
    expect(lines[0].text).toMatch(/one command at a time/i);
  }
});

test('echo returns markup as plain text', () => {
  const payload = '<img src=x onerror=alert(1)>';
  const { lines } = runCommand(`echo ${payload}`);
  expect(lines.map((l) => l.text).join('')).toBe(payload);
  expect(lines.some((l) => l.html)).toBe(false);
});

test('open only scrolls to known sections', () => {
  expect(runCommand('open work').action).toEqual({ type: 'scroll', id: 'work' });
  expect(runCommand('open ../secret').action).toBeNull();
  expect(runCommand('open contact').action).toEqual({ type: 'scroll', id: 'contact' });
  const missed = runCommand('open not-a-section');
  expect(missed.action).toBeNull();
  expect(missed.lines[0].kind).toBe('error');
});

test('refuses destructive sudo and rm', () => {
  expect(runCommand('sudo rm -rf /').lines[0].text).toMatch(/refusing/i);
  expect(runCommand('rm -rf /').lines[0].text).toMatch(/refusing/i);
  expect(runCommand('hack').lines[0].kind).toBe('error');
});

test('sudo hire-me jumps to contact without a password', () => {
  const result = runCommand('sudo hire-me');
  expect(result.action).toEqual({ type: 'scroll', id: 'contact' });
  expect(result.mode).toBeNull();
});

test('does not echo a sudo password attempt', () => {
  const asked = runCommand('sudo');
  expect(asked.mode).toBe('sudo');
  const attempt = runCommand('hunter2', { mode: 'sudo' });
  expect(attempt.hideInput).toBe(true);
  expect(attempt.lines[0].text).not.toMatch(/hunter2/);
  expect(attempt.mode).toBeNull();
});

test('resume pdf is a download action and a long input cannot overflow', () => {
  expect(runCommand('resume --pdf').action).toEqual({
    type: 'download',
    href: expect.stringContaining('kazadi_dieumerci_resume_2026.pdf'),
  });
  const huge = `echo ${'A'.repeat(5000)}`;
  const { lines } = runCommand(huge);
  const printed = lines.map((l) => l.text).join('');
  expect(printed.length).toBeLessThanOrEqual(200);
  expect(huge.slice(0, MAX_INPUT).length).toBe(MAX_INPUT);
});

test('only the first line of a pasted command runs', () => {
  const { lines } = runCommand('whoami\nrm -rf /');
  const text = lines.map((l) => l.text).join('\n');
  expect(text).toMatch(/dieumerci/i);
  expect(text).not.toMatch(/refusing/i);
});

test('unknown commands and missing files fail closed', () => {
  expect(runCommand('cat ../../etc/passwd').lines[0].kind).toBe('error');
  expect(runCommand('ls /etc').lines[0].kind).toBe('error');
  expect(runCommand('python -c "import os"').lines[0].text).toMatch(/not found/i);
});

test('git show only resolves known commits', () => {
  const hash = careerCommits()[0].hash;
  expect(runCommand(`git show ${hash}`).lines[0].text).toBe(`commit ${hash}`);
  expect(runCommand('git show nope').lines[0].kind).toBe('error');
});

test('tab completion stays on the allowlist', () => {
  expect(completeCommand('who').matches).toEqual(['whoami']);
  expect(completeCommand('rm').matches).toEqual(['rm']);
  expect(completeCommand('git log').matches).toEqual([]);
});

test('vim only leaves on :q', () => {
  expect(runCommand('vim').mode).toBe('vim');
  expect(runCommand('!sh', { mode: 'vim' }).mode).toBe('vim');
  expect(runCommand(':q', { mode: 'vim' }).mode).toBeNull();
});
