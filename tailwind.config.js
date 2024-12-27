/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      backgroundImage: {
        'customeimg': "url('https://i.ibb.co/F80rMr2/pexels-olly-3771120.jpg')",
        
      }
    },
  },
  plugins: [],
}

