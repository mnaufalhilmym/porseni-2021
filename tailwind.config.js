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
      fontSize: {
        'oneten': ['108px', {
          lineHeight: '124px',
        }],
      },
      colors: {
        'biru' : '#1E234C',
        'krem' : '#FBE5D2',
        'merah' : '#E62434',
      },
      zIndex: {
        '15': 15,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
