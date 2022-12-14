module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
    },
    extend: {
      colors: {
        'spotify-green': '#1db954',
        'spotify-orange': '#fa9a00',
        'spotify-hover-green': '#1ed760',
        'harmony-black': '#444c64',

      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
