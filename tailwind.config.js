/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        'couleur': {
          100: "#D2B9CB",
          200: "#D8C2D2",
          300: "#DECCD9",
          400: "#E4D5E0",
          500: "#EADEE7",
          600: "#F0E8EE",
          700: "#F6F1F5",
          800: "#89587A"
        },
      },
    },
  },
  plugins: [],
}