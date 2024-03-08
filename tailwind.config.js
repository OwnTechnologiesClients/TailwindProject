/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#f5f7fA',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#4caf4f',
        'neutralGrey':'#717171',
        'gray900': '#18191F'
      }
    },
  },
  plugins: [],
}

