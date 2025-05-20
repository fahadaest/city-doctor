/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        gilroyBlack: ['Gilroy-Black', 'sans-serif'],
        gilroyBold: ['Gilroy-Bold', 'sans-serif'],
        gilroySemiBold: ['Gilroy-SemiBold', 'sans-serif'],
      },
      backgroundImage: {
        'home-bg': "url('/images/home-bg.png')",
        'home-double-circle': "url('/images/home-double-circle.png')",
      },
      colors: {
        white: '#FFFFFF',
        orange: '#F24E04',
        menuFont: '#606060',
        footerGray: "#606060",
        whatsappGreen: "#3CDB1D",
      },
    },
  },
  plugins: [],
}
