/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 0 15px 5px rgba(212, 212, 212, 0.5)', // Customize as needed
      },
    },
  },
  plugins: [],
}

