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
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        'bg-primary': '#FAF9F6',
        'bg-secondary': '#EDE7DC',
        'text-primary': '#1C1917',
        'text-muted': '#6C6560',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '400' }],
        'h1': ['3.5rem', { lineHeight: '1.15', fontWeight: '400' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }],
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
