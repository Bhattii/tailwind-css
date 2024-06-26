/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3433',
        darkColor: '#000',
        darkLightColor: '#171717',
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '1.5rem',
        },
      },
    },
  },
  plugins: [],
};
