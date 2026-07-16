/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0e14',
          soft: '#0f141c',
          card: '#131922',
        },
        accent: {
          DEFAULT: '#39ff9f',
          dim: '#1f8f5c',
          soft: '#7fffd4',
        },
        ink: {
          DEFAULT: '#e6edf3',
          dim: '#8b98a8',
          faint: '#5a6472',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(57,255,159,0.15), 0 8px 30px rgba(57,255,159,0.08)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(57,255,159,0.2)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(57,255,159,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,159,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
