/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'infinite-carousel': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        'infinite-carousel': 'infinite-carousel 5s infinite linear'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('autoprefixer')
  ],
}

