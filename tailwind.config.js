/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        lightStroke: '#E8E8EA',
        darkStroke: '#242535',
      },
      backgroundColor: {
        lightPrimary: '#fff',
        lightSecondary300: '#F6F6F7',
        lightSecondary500: '#E8E8EA',
        darkPrimary: '#181A2A',
        darkSecondary300: '#242535',
        darkSecondary900: '#141624',
        skyBlue: '#4B6BFB',
        skyBlue5: 'rgba(75, 107, 251, 0.2)',
        skyBlue50: 'rgba(75, 107, 251, 0.5)',
      },
      textColor: {
        lightPrimary: '#181A2A',
        lightSecondary: '#3B3C4A',
        darkPrimary: '#fff',
        darkSecondary: '#BABABF',
        generic: '#97989F',
        skyBlue: '#4B6BFB',
      },
    },
  },
  plugins: [],
};
