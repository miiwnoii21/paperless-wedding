/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      //terracotta: '#bb6a4b',
      terracotta: {
        50: '#fef7f1',
        300: '#E3B6A2',
        400: '#DAA28B',
        500: '#CD8A6E',
        600: '#BB6A4B',
      },
    },
    extend: {
      fontFamily: {
        primary: ['JosefinSans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
