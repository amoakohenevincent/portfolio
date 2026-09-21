/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#080808',
          secondary: '#0f0f0f',
          card: '#141414',
        },
        border: {
          DEFAULT: '#262626',
        },
        accent: {
          DEFAULT: '#6d6aff',
          light: '#8b89ff',
          dim: '#4c49b8',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a1a1aa',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        section: ['clamp(1.9rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      }
    },
  },
  plugins: [],
}
