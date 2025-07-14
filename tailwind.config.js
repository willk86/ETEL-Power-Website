/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#060879',
        secondary: '#31527f',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'float-slower': 'float-slower 5s ease-in-out infinite',
        'subtle-zoom': 'subtle-zoom 20s ease-in-out infinite alternate',
        'spin-slow': 'spin-slow 8s linear infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};