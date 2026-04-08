import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx,mdx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        navy: '#0A1628',
        gold: {
          DEFAULT: '#C9A84C',
          accessible: '#8C6D17', // darker gold for light backgrounds (WCAG AA)
        },
        cream: '#FAF7F2',
        steel: '#4A6FA5',
        bg: {
          primary: '#0A1628',
          secondary: '#111E2E',
          surface: '#162236',
          border: '#1E3044',
        },
        text: {
          primary: '#FAF7F2',
          secondary: '#A0AABB',
          tertiary: '#8090A5',
          accent: '#C9A84C',
          link: '#C9A84C',
        },
        success: '#4CAF50',
        warning: '#F5A623',
        error: '#E53E3E',
        info: '#4A6FA5',
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'Lato', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.6' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        xl: ['1.5rem', { lineHeight: '1.3' }],
        '2xl': ['1.75rem', { lineHeight: '1.4' }],
        '3xl': ['2rem', { lineHeight: '1.3' }],
        '4xl': ['2.5rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['4rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(10, 22, 40, 0.4)',
        DEFAULT: '0 4px 12px rgba(10, 22, 40, 0.4)',
        md: '0 4px 12px rgba(10, 22, 40, 0.4)',
        lg: '0 8px 24px rgba(10, 22, 40, 0.4)',
      },
      maxWidth: {
        container: '1280px',
      },
      backdropBlur: {
        nav: '8px',
      },
    },
  },
  plugins: [],
}

export default config
