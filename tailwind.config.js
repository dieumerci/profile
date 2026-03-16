/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        // Near-pure blacks — warm undertone lets gold pop harder
        ink: {
          950: '#050505',
          900: '#080808',
          800: '#111111',
          700: '#1A1A1A',
          600: '#1E1E1E',
          500: '#2A2A2A',
        },
        // Accent: Rich IMDb-gold — premium, saturated, instantly striking
        gold: {
          DEFAULT: '#F5C518',
          light:   '#F9E07A',
          deep:    '#C09A0E',
          subtle:  'rgba(245,197,24,0.10)',
          glow:    'rgba(245,197,24,0.06)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        body:    ['Inter', 'ui-sans-serif', 'system-ui'],
        mono:    ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      boxShadow: {
        'gold':       '0 0 32px rgba(245,197,24,0.18)',
        'gold-sm':    '0 0 16px rgba(245,197,24,0.10)',
        'card':       '0 2px 16px rgba(0,0,0,0.50)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.70)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':      'float 7s ease-in-out infinite',
        'scan':       'scan 6s linear infinite',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        scan: {
          '0%':   { top: '-4px' },
          '100%': { top: '101%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
