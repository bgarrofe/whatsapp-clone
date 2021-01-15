module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '.825rem',
        '3xs': '.85rem',
      },
      backgroundImage: theme => ({
        'chat-texture': "url('/chat-background.png')",
      }),
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#dddbd1',
      'danger': '#e3342f',
      'chat': '#e5ddd5',
      'notification': '#9de1fe',
    }),
  },
  variants: {
    extend: {
      borderRadius: ['focus'],
    },
  },
  plugins: [],
}
