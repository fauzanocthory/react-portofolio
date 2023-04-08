/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        burtons: 'burtons',
      },
    },
    screens: {
      'sxl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'sxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'slg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '376px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '321px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}
