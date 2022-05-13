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
        body:['Lexend'],
        accent:['Roboto Slab']
      },
      boxShadow:{
        '3xl': '0 30px 55px -12px rgb(0 0 0 / 0.25)',
        '4xl': '0 40px 60px -12px rgb(0 0 0 / 0.25)'
      }
    },
  },
  plugins: [],
}
