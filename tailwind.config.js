/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
        backgroundImage:{
          'hero-image':"url('./RedBus clone Images/HeroImage.png')",
          'appInstall':"url('./RedBus clone Images/appInstallbg.svg')"
        },
        fontFamily:{
          "Montserrat":["'Montserrat', sans-serif"],
        }
    },
  },
  plugins: [],
}

