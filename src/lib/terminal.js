import {
  personalInfo,
  primarySkills,
  projects,
  socialLinks,
  CV_URL,
} from '../data/resumeData';
import { SECTIONS } from './sections';
import { careerCommits, findCommit } from './career';

export const MAX_INPUT = 240;

export const COMMANDS = [
  'help',
  'whoami',
  'about',
  'work',
  'projects',
  'stack',
  'contact',
  'open',
  'resume',
  'git',
  'ping',
  'coffee',
  'fortune',
  'clear',
  'ls',
  'cat',
  'echo',
  'pwd',
  'date',
  'uptime',
  'void',
  'banner',
  'history',
  'sudo',
  'vim',
  'vi',
  'emacs',
  'rm',
  'hack',
  'exit',
  'time',
  'credits',
  'weather',
  'make',
];

const FILES = {
  'about.txt': () => personalInfo.summary,
  'readme.txt': () =>
    'A portfolio shell. Commands are an allowlist. Nothing you type leaves this browser.\nType help.',
  'contact.txt': () => contactBlock(),
  'stack.txt': () => primarySkills.join('\n'),
};

const FORTUNES = [
  'The green dot is the only color that made the cut.',
  'A denied claim is a bug report with a currency symbol.',
  'Confessions can expire. A good commit message should not.',
  'Johannesburg is awake. Ship the small thing.',
  'If the tests are quiet and the person using it is calmer, that counted.',
  'Intelligence is only useful on rails. Build the rails.',
];

const SECTION_IDS = new Set(SECTIONS.map((s) => s.id));

function linesFrom(text, kind = 'text') {
  return String(text)
    .split('\n')
    .map((line) => ({ kind, text: line }));
}

function reply(text, extra = {}) {
  return { lines: linesFrom(text), action: null, mode: null, ...extra };
}

function fail(text) {
  return { lines: [{ kind: 'error', text }], action: null, mode: null };
}

function johannesburgNow() {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Johannesburg',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(new Date());
}

function contactBlock() {
  const rows = [
    `email     ${personalInfo.email}`,
    ...socialLinks
      .filter((s) => s.label !== 'Email')
      .map((s) => `${s.label.toLowerCase().padEnd(9)}${s.href}`),
    'jump      open contact',
  ];
  return rows.join('\n');
}

function rejectOperators(input) {
  return /[;&|`$\\]/.test(input) || input.includes('$(');
}

export function completeCommand(partial) {
  const token = String(partial || '').trim().toLowerCase();
  if (!token || /\s/.test(String(partial || '').trim())) return { matches: [] };
  const matches = COMMANDS.filter((c) => c.startsWith(token));
  return { matches };
}

/**
 * Allowlisted interpreter. Returns plain text lines only — never HTML.
 * `ctx.mode` is 'vim' | 'sudo' | null. `ctx.voidNote` and `ctx.history` are optional.
 */
export function runCommand(raw, ctx = {}) {
  const input = String(raw ?? '')
    .replace(/\r/g, '')
    .split('\n')[0]
    .slice(0, MAX_INPUT);
  const trimmed = input.trim();

  if (ctx.mode === 'sudo') {
    return {
      lines: [{ kind: 'error', text: 'sorry, try again. this guest has no password.' }],
      action: null,
      mode: null,
      hideInput: true,
    };
  }

  if (ctx.mode === 'vim') {
    if (trimmed === ':q' || trimmed === ':wq' || trimmed === ':q!') {
      return reply('left vim. the buffer was empty anyway.');
    }
    return {
      lines: [{ kind: 'muted', text: trimmed ? 'E492: Not an editor command. try :q' : '~' }],
      action: null,
      mode: 'vim',
    };
  }

  if (!trimmed) return { lines: [], action: null, mode: null };

  if (rejectOperators(trimmed)) {
    return fail('shell operators stay off. one command at a time.');
  }

  const parts = trimmed.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
    case '?':
      return reply(
        [
          'help        this list',
          'whoami      who this page belongs to',
          'about       the short version',
          'work        roles, newest first',
          'projects    nine products',
          'stack       daily drivers',
          'contact     how to reach me',
          'open <id>   jump to a section',
          'resume      a plain-text snapshot',
          'resume --pdf   download the PDF',
          'git log     career as commits',
          'git show    peek at a commit',
          'ping        round trip to johannesburg',
          'coffee      important',
          'fortune     unsolicited advice',
          'void        read the on-device note',
          'ls / cat    a very small filesystem',
          'clear       wipe the screen',
          '',
          'sections: ' + SECTIONS.map((s) => s.id).join(' '),
        ].join('\n')
      );
    case 'whoami':
      return reply(
        `${personalInfo.name.toLowerCase()}\n${personalInfo.title.toLowerCase()} · johannesburg\navailable for work`
      );
    case 'about':
      return reply(personalInfo.summary);
    case 'banner':
      return reply(`${personalInfo.name.toLowerCase()}\n${personalInfo.title.toLowerCase()}\njohannesburg · available`);
    case 'work':
      return reply(
        careerCommits()
          .filter((c) => c.date !== 'College')
          .map((c) => `${c.date}  ${c.subject}`)
          .join('\n')
      );
    case 'projects':
      return reply(projects.map((p) => `${p.name.padEnd(16)} ${p.tagline}`).join('\n'));
    case 'stack':
      return reply(primarySkills.join('   '));
    case 'contact':
      return reply(contactBlock());
    case 'open': {
      const id = (args[0] || '').toLowerCase();
      if (!SECTION_IDS.has(id)) {
        return fail(`no section named "${(args[0] || '').slice(0, 40)}". try: ${[...SECTION_IDS].join(', ')}`);
      }
      return reply(`opening ${id}…`, { action: { type: 'scroll', id } });
    }
    case 'resume':
      if (args[0] === '--pdf') {
        return reply('downloading the résumé…', {
          action: { type: 'download', href: CV_URL },
        });
      }
      return reply(
        [
          personalInfo.name,
          personalInfo.title,
          personalInfo.location,
          '',
          personalInfo.summary,
          '',
          'pdf: resume --pdf',
        ].join('\n')
      );
    case 'git': {
      const sub = (args[0] || 'log').toLowerCase();
      if (sub === 'status') {
        return reply('On branch main\nnothing to commit, working tree shipping');
      }
      if (sub === 'log') {
        return reply(
          careerCommits()
            .map((c) => `${c.hash}  ${c.subject}`)
            .join('\n')
        );
      }
      if (sub === 'show') {
        const commit = args[1] ? findCommit(args[1]) : careerCommits()[0];
        if (!commit) return fail(`fatal: bad revision '${String(args[1]).slice(0, 40)}'`);
        return reply(
          [
            `commit ${commit.hash}`,
            `Author: ${personalInfo.name}`,
            `Date:   ${commit.date}`,
            '',
            `    ${commit.subject}`,
            '',
            commit.body,
            '',
            ...commit.files.map((f) => `    ${f}`),
          ].join('\n')
        );
      }
      return fail('git: try log, show, or status');
    }
    case 'ping': {
      const ms = (new Date().getMinutes() % 9) + 11;
      return reply(
        [
          'PING dieumerci (johannesburg)',
          `64 bytes: time=${ms} ms`,
          `64 bytes: time=${ms + 2} ms`,
          '--- available for work ---',
        ].join('\n')
      );
    }
    case 'coffee':
    case 'make': {
      if (cmd === 'make' && (args[0] || '').toLowerCase() !== 'coffee') {
        return fail(`make: no rule to make '${String(args[0] || '').slice(0, 40)}'. try make coffee`);
      }
      return reply('flat white.\njohannesburg.\nstill shipping.');
    }
    case 'fortune': {
      const index = Math.floor(Date.now() / 86400000) % FORTUNES.length;
      return reply(FORTUNES[index]);
    }
    case 'date':
    case 'time':
      return reply(`${johannesburgNow()} SAST`);
    case 'uptime': {
      const start = new Date('2017-10-01T00:00:00+02:00');
      const days = Math.max(0, Math.floor((Date.now() - start.getTime()) / 86400000));
      return reply(`shipping for ${days} days — since Oct 2017`);
    }
    case 'pwd':
      return reply('/home/guest/kazadi');
    case 'ls': {
      const target = (args[0] || '').toLowerCase();
      if (!target || target === '.' || target === './') {
        return reply('about.txt   contact.txt   readme.txt   stack.txt   projects/');
      }
      if (target === 'projects' || target === 'projects/') {
        return reply(projects.map((p) => p.slug).join('   '));
      }
      return fail(`ls: cannot access '${String(args[0]).slice(0, 40)}': No such file or directory`);
    }
    case 'cat': {
      const name = (args[0] || '').toLowerCase();
      if (!name) return fail('cat: missing file');
      const file = FILES[name];
      if (!file) return fail(`cat: ${name.slice(0, 40)}: No such file or directory`);
      return reply(file());
    }
    case 'echo': {
      const space = trimmed.indexOf(' ');
      const message = space === -1 ? '' : trimmed.slice(space + 1, space + 201);
      return reply(message);
    }
    case 'clear':
      return { lines: [], action: { type: 'clear' }, mode: null };
    case 'history': {
      const history = Array.isArray(ctx.history) ? ctx.history.slice(-20) : [];
      if (!history.length) return reply('no history yet.');
      return reply(history.map((h, i) => `${String(i + 1).padStart(3)}  ${h}`).join('\n'));
    }
    case 'void': {
      const note = typeof ctx.voidNote === 'string' ? ctx.voidNote.trim() : '';
      return reply(note ? note : 'the void is empty. leave a note in The void, further down this page.');
    }
    case 'credits':
      return reply('the shell runs in your browser.\ncommands are an allowlist.\nnothing you type is sent to a server.');
    case 'weather':
      return reply('johannesburg. high chance of shipping.');
    case 'sudo': {
      const rest = args.join(' ').toLowerCase();
      if (rest === 'hire' || rest === 'hire-me' || rest === 'hire me') {
        return reply('permission granted. tell me what you want to build.', {
          action: { type: 'scroll', id: 'contact' },
        });
      }
      if (rest.startsWith('rm')) {
        return fail('refusing to delete anything from a portfolio.');
      }
      return {
        lines: [{ kind: 'muted', text: 'password:' }],
        action: null,
        mode: 'sudo',
      };
    }
    case 'vim':
    case 'vi':
      return {
        lines: [{ kind: 'muted', text: 'VIM — empty buffer. :q to leave.' }],
        action: null,
        mode: 'vim',
      };
    case 'emacs':
      return reply('this machine runs vim. emotionally.');
    case 'hack':
    case 'rm':
      return fail('refusing. the interesting security work is on the résumé, not in this toy shell.');
    case 'exit':
    case 'quit':
      return reply("there's no process to quit. try open home.");
    default:
      return fail(`command not found: ${cmd.slice(0, 40)}. type help.`);
  }
}
