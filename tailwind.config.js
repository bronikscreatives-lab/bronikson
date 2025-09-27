/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coral: '#FF6F61',
        'sky-blue': '#4A90E2',
        'sunshine-yellow': '#FFD166',
        'slate-gray': '#333333',
        cream: '#FFF5E1',
      }
    },
  },
  plugins: [],
};
