/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '550px',
      md: '900px',
    },
    extend: {
      colors: {
        primary: '#8AC43F',
        secondary: '#006738',
        tertiary: '#EFEFEF',
      },
    },
  },
  plugins: [],
}

