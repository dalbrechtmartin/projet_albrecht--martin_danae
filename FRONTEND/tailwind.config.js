/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'black',
        secondary: 'gray',
        danger: 'text-red-600',
        darkPink: '#921f4f',
      },
      fontFamily: {
        handlee: ['Handlee', 'sans-serif'],
        'playpen-sans': ['Playpen Sans', 'sans-serif'],
        'emilys-candy': ['Emilys Candy', 'cursive'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatless: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

