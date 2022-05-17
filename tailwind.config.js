module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: {
          100: "#212121",
          200: '#07f8ff',
          300: '#9525fb',
          400: '#52ff00'
        }
      },
      fontFamily: {
        body: ['Lexend'],
        accent: ['Roboto Slab']
      },
      boxShadow: {
        '3xl': '0 30px 55px -12px rgb(0 0 0 / 0.25)',
        '4xl': '0 40px 60px -12px rgb(0 0 0 / 0.25)'
      }
    },
    textIndent: { // defaults to {}
      '1': '0.25rem',
      '2': '0.5rem',
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    textDecorationStyle: { // defaults to these values
      'solid': 'solid',
      'double': 'double',
      'dotted': 'dotted',
      'dashed': 'dashed',
      'wavy': 'wavy',
    },
    textDecorationColor: { // defaults to theme => theme('colors')
      'red': '#f00',
      'green': '#0f0',
      'blue': '#00f',
    },
    fontVariantCaps: { // defaults to these values
      'normal': 'normal',
      'small': 'small-caps',
      'all-small': 'all-small-caps',
      'petite': 'petite-caps',
      'unicase': 'unicase',
      'titling': 'titling-caps',
    },
    fontVariantNumeric: { // defaults to these values
      'normal': 'normal',
      'ordinal': 'ordinal',
      'slashed-zero': 'slashed-zero',
      'lining': 'lining-nums',
      'oldstyle': 'oldstyle-nums',
      'proportional': 'proportional-nums',
      'tabular': 'tabular-nums',
      'diagonal-fractions': 'diagonal-fractions',
      'stacked-fractions': 'stacked-fractions',
    },
    fontVariantLigatures: { // defaults to these values
      'normal': 'normal',
      'none': 'none',
      'common': 'common-ligatures',
      'no-common': 'no-common-ligatures',
      'discretionary': 'discretionary-ligatures',
      'no-discretionary': 'no-discretionary-ligatures',
      'historical': 'historical-ligatures',
      'no-historical': 'no-historical-ligatures',
      'contextual': 'contextual',
      'no-contextual': 'no-contextual',
    },
    textRendering: { // defaults to these values
      'rendering-auto': 'auto',
      'optimize-legibility': 'optimizeLegibility',
      'optimize-speed': 'optimizeSpeed',
      'geometric-precision': 'geometricPrecision'
    },
  },

  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    textDecorationStyle: ['responsive'],
    textDecorationColor: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    kerning: ['responsive'],
    textUnset: ['responsive'],
    fontVariantCaps: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontVariantLigatures: ['responsive'],
    textRendering: ['responsive'],
  },

  plugins: [ require('tailwindcss-typography')({
    // all these options default to the values specified here
    ellipsis: true,         // whether to generate ellipsis utilities
    hyphens: true,          // whether to generate hyphenation utilities
    kerning: true,          // whether to generate kerning utilities
    textUnset: true,        // whether to generate utilities to unset text properties
    componentPrefix: 'c-',  // the prefix to use for text style classes
  }),],
}
