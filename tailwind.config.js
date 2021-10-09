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
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
      },
      fontSize: {
        'oneten': ['108px', {
          lineHeight: '108px',
        }],
        'threetwo': ['32px', {
          lineHeight: '32px',
        }],
        'forty': ['40px', {
          lineHeight: '40px',
        }],
        'fiftysix': ['56px', {
          lineHeight: '56px',
        }],
        'sixty': ['60px', {
          lineHeight: '60px',
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
