/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        'black-50%': '#18181bf2',
      },
    },
  },
  plugins: [
      require('flowbite/plugin'),
      require('tailwindcss-animated')
  ],
  darkMode: 'class',

}
