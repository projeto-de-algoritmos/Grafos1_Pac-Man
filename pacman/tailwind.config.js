module.exports = {
  important: true,
  prefix: '',
  content: [
    './src/**/*.{html,css,ts}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#2D4369",
          500: "#071A3B",
        },
        secondary: "#C78A04"
      },
      spacing: {
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem',
        '152': '38rem',
        '160': '40rem'
      },
      backgroundImage: theme => ({
        'layout-theme': "url('src/assets/pacman_map.png')"
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};