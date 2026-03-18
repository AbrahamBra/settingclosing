import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#F87171',
        'accent-hover': '#EF4444',
        'bg-primary': '#06080F',
        'bg-secondary': '#0B0E18',
        'surface-hover': '#111627',
        'text-primary': '#E2E8F0',
        'text-secondary': '#94A3B8',
        'text-muted': '#64748B',
        'semantic-ia': '#818CF8',
        'semantic-methode': '#FBBF24',
        'semantic-humain': '#34D399',
        'semantic-hybrid': '#C084FC',
        'semantic-info': '#38BDF8',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['clamp(2rem, 5vw, 2.5rem)', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.04em' }],
        'h1': ['clamp(1.75rem, 4vw, 2.25rem)', { lineHeight: '1.15', fontWeight: '800', letterSpacing: '-0.025em' }],
        'h2': ['clamp(1.375rem, 3vw, 1.75rem)', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.015em' }],
        'h3': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.3', fontWeight: '600' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
    },
  },
  plugins: [],
}

export default config
