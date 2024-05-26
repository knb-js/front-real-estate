/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-down': {
          '0%': { maxHeight: '0' },
          '100%': { maxHeight: '100%' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.5s ease-out forwards',
      },
      height: {
        '95': '32rem', // altura personalizada
      },
    },
  },
  plugins: [],
}