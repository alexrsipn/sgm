const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      blueGray: colors.blueGray,
      trueGray: colors.trueGray,
      amber: colors.amber,
      emerald: colors.emerald,
      cyan: colors.cyan,
      sky: colors.sky
    },
    linearGradientColors: theme => theme('colors'),
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
    screens: {
      'xxs': '310px',
      'xs': '475px',
      ...defaultTheme.screens
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-neumorphism'),
    require('tailwindcss-elevation')(['responsive']),
    require('tailwindcss-gradients')
  ],
}
