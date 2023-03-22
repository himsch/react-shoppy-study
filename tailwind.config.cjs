/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#F96162'
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      }
    },
  },
  plugins: [],
}
