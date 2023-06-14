/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      color:{
        'nitteColor': '#2e3192',
      },
      backgroundColor:{
      'nitteYellow': '#57f0ee',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  },
  

},
  
    
  },
  plugins: [],
}

