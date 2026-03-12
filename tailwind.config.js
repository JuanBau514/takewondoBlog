/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#FDE8EF',
          100: '#FCC8D9',
          200: '#F99AB8',
          300: '#F46C96',
          400: '#EE3D74',
          500: '#DA1F50',
          600: '#C81A47',
          700: '#A81540',
          800: '#881138',
          900: '#680D2E',
          950: '#3A0718',
        },
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
        },
        'korean-red': '#DA1F50',
        'korean-blue': '#0052CC',
        'korean-green': '#2D6A4F',
        'korean-gold': '#D4A017',
        'colombian-yellow': '#FFD60A',
        'colombian-green': '#2D6A4F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

