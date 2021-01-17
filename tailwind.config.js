let grid48 = {};
for (let i = 1; i < 48; i++) {
  grid48[`${i}/48`] = (100/48)*i + "%";
}

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          '50':  '#fbf7f2',
          '100': '#fceee4',
          '200': '#f9dac4',
          '300': '#f7bc91',
          '400': '#f78f51',
          '500': '#ff6000',
          '600': '#ed421b',
          '700': '#cd311e',
          '800': '#a52820',
          '900': '#84211e',
        }
      },
      width: {
        "29": "7.125rem",
        ...grid48
      },
      boxShadow: {
        "search": "0 0 4px 0 rgba(0, 0, 0, .16)",
        "searchMobile": "0 1px 2px 0 rgba(0, 0, 0, .12)",
        "categoryCard": "0 8px 32px 0 #eee"
      },
      lineHeight: {
        "min": "1px",
      },
      flex: {
        "full": "0 0 100%"
      },
      zIndex: {
        "100": 100,
      },
      backgroundOpacity: {
        '15': '0.15'
      },
      keyframes: {
        slideButton: {
          "0%": {
            opacity: ".5",
            transform: "translateX(150px)"
          },
          "to": {
            opacity: "1",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        'slideButton': 'slideButton .15s ease-in-out',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1072px',
      'xl': '1220px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}