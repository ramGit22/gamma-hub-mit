/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',
        'primary-dark': '#357ABD',
        'secondary': '#F5F5F5',
        'text-dark': '#333',
        'text-medium': '#666',
        'text-light': '#CCC',
      },
      fontFamily: {
        'sans': ['Poppins', 'Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}