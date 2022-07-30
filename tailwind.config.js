/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainbg: 'hsl(222deg 26% 31%)',
        keypadbg: 'hsl(223deg 31% 20%)',
        togglebg: 'hsl(223deg 31% 20%)',
        screenbg: 'hsl(224deg 36% 15%)',
        bluekeybg: 'hsl(225deg 21% 49%)',
        bluekeytoggle: 'hsl(225deg 21% 49%)',
        bluekeyshadow: 'hsl(224deg 28% 35%)',
        redkeybg: 'hsl(6deg 63% 50%)',
        redkeytoggle: 'hsl(6deg 63% 50%)',
        redkeyshadow: 'hsl(6deg 70%, 34%)',
        orangekeybg: 'hsl(30deg 25% 89%)',
        orangekeyshadow: 'hsl(28deg 16% 65%)',
        darkbluetext: 'hsl(221deg 14% 31%)',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}
