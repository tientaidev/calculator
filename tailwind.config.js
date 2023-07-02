const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBgBlue: 'hsl(222deg 26% 31%)',
        keyPadBgBlue: 'hsl(223deg 31% 20%)',
        screenBgBlue: 'hsl(224deg 36% 15%)',
        keyBgBlue: 'hsl(225deg 21% 49%)',
        keyShadowBlue: 'hsl(224deg 28% 35%)',
        keyBgRed: 'hsl(6deg 63% 50%)',
        keyShadowDarkRed: 'hsl(6deg 70%, 34%)',
        keyBgLightGrayishOrange: 'hsl(30deg 25% 89%)',
        keyShadowGrayishOrange: 'hsl(28deg 16% 65%)',
        textVeryDarkGrayishBlue: 'hsl(221deg 14% 31%)',
        textWhite: 'hsl(0deg 0% 100%)',
        mainBgLightGray: 'hsl(0deg 0% 90%)',
        keyPadBgLightGray: 'hsl(0deg 5% 81%)',
        screenBgVeryLightGray: 'hsl(0deg 0% 93%)',
        keyBgDarkModerateCyan: 'hsl(185deg 42% 37%)',
        keyShadowVeryDarkCyan: 'hsl(185deg 58% 25%)',
        keyBgOrange: 'hsl(25deg 98% 40%)',
        keyShadowDarkOrange: 'hsl(25deg 99% 27%)',
        keyBgLightGrayishYellow: 'hsl(45deg 7% 89%)',
        keyShadowDarkGrayishOrange: 'hsl(35deg 11% 61%)',
        textVeryDarkGrayishYellow: 'hsl(60deg 10% 19%)',
        mainBgVeryDarkViolet: 'hsl(268deg 75% 9%)',
        keyPadBgVeryDarkViolet: 'hsl(268deg 71% 12%)',
        screenBgVeryDarkViolet: 'hsl(268deg 71% 12%)',
        keyBgDarkViolet: 'hsl(281deg 89% 26%)',
        keyShadowVividMagenta: 'hsl(285deg 91% 52%)',
        keyBgPureCyan: 'hsl(176deg 100% 44%)',
        keyShadowSoftCyan: 'hsl(177deg 92% 70%)',
        keyBgVeryDarkViolet: 'hsl(268deg 47% 21%)',
        keyShadowDarkMagenta: 'hsl(290deg 70% 36%)',
        textLightYellow: 'hsl(52deg 100% 62%)',
        textVeryDarkBlue: 'hsl(198deg 20% 13%)',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      }
    },
    screens: {
      'xs': '0px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
