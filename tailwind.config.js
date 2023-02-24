/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',

      'sm2': '375px',

      'sm3': '425px',

      'md': '768px',
      
      'lg': '1024px',
      
      'xl': '1440px',
      
      '2xl': '2560px',
      
      '3xl': '3840px',

    },
    extend: {
      backgroundImage: {
        'home': "url('/img/backgroundImage.png')",
        'contact': "url('/img/backgroundContact.png')",

      }
    },
  },
  plugins: [],
}