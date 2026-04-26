/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8ecf5',
          100: '#c5ceea',
          200: '#9eaedc',
          300: '#778ecd',
          400: '#5a76c2',
          500: '#3d5eb7',
          600: '#2e4fa0',
          700: '#1e3d87',
          800: '#1A2E5A',
          900: '#0f1c3a',
        },
        gold: {
          100: '#fef3d0',
          400: '#f7c44d',
          500: '#F4A81D',
          600: '#d4900f',
          700: '#a56e08',
        },
        saffron: '#FF9933',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
