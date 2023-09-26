/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
        'background-color': 'var(--background-color)',
        'text-color': 'var(--text-color)',
        'dark-red': '#AD2418',
        'input-color': '#0F0F10',
        'dark-grey': '#38383E',
        'black-grey': '#19191B',
        'shadow-grey': '#141417'
      },
    },
  },
  plugins: [],
}

