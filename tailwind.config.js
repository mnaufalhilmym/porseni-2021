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
      },
      zIndex: {
        '-10': '-10',
      },
      colors: {
        'biru' : '#1E234C',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
