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
        accent: '#C87533',
        'accent-hover': '#A85E28',
        'accent-light': '#D4956A',
        'bg-primary': '#0A0908',
        'bg-secondary': '#141210',
        'surface-hover': '#1C1A16',
        'text-primary': '#F0ECE4',
        'text-secondary': '#A8A090',
        'text-muted': '#6B6560',
        'semantic-ia': '#A78BFA',
        'semantic-methode': '#FBBF24',
        'semantic-humain': '#34D399',
        'semantic-hybrid': '#C084FC',
        'semantic-info': '#D4956A',
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
