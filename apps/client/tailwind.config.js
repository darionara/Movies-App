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
        'primary': '#D02C1E',
        'secondary': '#272728',
        'background-color': '#1E1E21',
        'text-color': '#fff',
        'dark-red': '#AD2418',
        'input-color': '#0F0F10',
        'dark-grey': '#38383E',
        'black-grey': '#19191B',
        'shadow-grey': '#141417'
      },
    },
/*     boxShadow: {
      'shadow': '0px 0px 1px 4px shadow-grey'
    }, */
  },
  plugins: [],
}

