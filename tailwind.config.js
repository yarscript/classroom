/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}",
            "./pages/**/*.{js,jsx}",
            "./styles/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#0E927A',
        primaryLight: '#E3FAF5',
        lightBlue: '#CDEDFA',
        textColor: '#203B54',
        border: '#D1D5DB',
        greyBackground: '#F1F1F1'
      }
    },
  },
  plugins: [],
}
