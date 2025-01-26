/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'nav': '60px',
      },
      margin: {
        'nav': '60px',
      },
      colors: {
        "primary": "#101524",
        "secondary": "#1D2439",
        "primary-dark": "#081021",
        "accent": "#586BA4",
        "text": "#ECD8C8",
        "text-accent": "#FFFFFF",
        "muted": "#4A5568"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

