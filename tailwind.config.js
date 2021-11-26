module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // purge: {
  //   enabled: true,
  //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // },
  prefix: 'fintw-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
