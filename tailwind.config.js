/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:   '#E05A20',
        teal:     '#2AABB5',
        steel:    '#1A1A1A',
        grayDark: '#595959',
        grayMid:  '#999999',
        dark:     '#111111',
        ostra:    '#F8F7F5',
      },
      fontFamily: {
        heading: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        data:    ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
