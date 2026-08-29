import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        'navy-light': '#112D52',
        'navy-dark': '#070F1D',
        'blue-cade': '#1F6FEB',
        'blue-cade-light': '#4A8FF7',
        'yellow-cade': '#FFC857',
        'yellow-cade-light': '#FFD88A',
        'green-cade': '#20A36A',
        'green-cade-light': '#34D08E',
        'red-cade': '#E85D5D',
        'red-cade-light': '#F08A8A',
        ice: '#F7F9FC',
        'ice-dark': '#E8ECF2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'hero-mobile': ['2rem', { lineHeight: '1.15', fontWeight: '900' }],
        'section': ['2.25rem', { lineHeight: '1.2', fontWeight: '800' }],
        'section-mobile': ['1.5rem', { lineHeight: '1.25', fontWeight: '800' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'highlight': 'highlight 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        highlight: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
