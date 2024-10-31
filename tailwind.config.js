/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#24788F'
      },
    },
  },
  plugins: [],
    corePlugins: {
    preflight: false,
  }
}