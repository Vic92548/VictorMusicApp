/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'nordic-gray': '#222326',
        'magic-blue': '#5E6AD2',
        'mercury-white': '#F4F5F8',
        'pure-white': '#FFFFFF',
        'dark-text': '#E5E5E5',
        'darker-gray': '#1A1A1C',
        'border-dark': '#333338',
        'light-gray': '#8a8f98',
        'npm-red': '#CB3837',
        'steam-blue': '#1b2838',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
}
