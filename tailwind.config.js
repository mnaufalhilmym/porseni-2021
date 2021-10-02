module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      scale: {
        '80' : '.8',
      },
      animation: {
        'bounce-slow' : 'bounce 3s ease-in-out infinite',
      },
      fontFamily: {
        nuku: ['Nuku Nuku', 'sans-serif'],
        sansPro: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        'biru' : '#1E234C',
        'krem' : '#FBE5D2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
