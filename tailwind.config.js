/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Including the HTML file for global styles
    './src/**/*.{js,jsx,ts,tsx,html}',  // Matching JS, JSX, TS, TSX, and HTML files in the 'src' directory
  ],
  theme: {
    extend: {
      // You can extend your Tailwind theme here, like adding custom colors, fonts, etc.
    },
  },
  plugins: [
    // You can add Tailwind plugins here if needed
  ],
}
