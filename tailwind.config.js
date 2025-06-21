/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'zen-kaku-gothic-new': ['Zen Kaku Gothic New', 'sans-serif'],
        'zen-kaku-gothic-antique': ['Zen Kaku Gothic Antique', 'sans-serif'],
      },
      colors: {
        'beige-900': '#6b3323',
        'beige-950': '#40220f',
        'light-green-100': '#c7efde',
        'red-600': '#ff0000',
        'red-button': '#d52109',
      },
    },
  },
  plugins: [],
}