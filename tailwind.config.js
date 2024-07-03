/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      primary: '#fece00',
      secondary: '#ff6362',
      base: '#1E1E1E',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
