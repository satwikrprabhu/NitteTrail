/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      color:{
        'nitteColor': '#2e3192',
        'primary': '#F5F8FA', // light gray
        'secondary': 'rgba(255, 255, 255, 0.15)', // white
        'title': '#333333', // dark gray
        'description': '#E5E7EB', // medium gray
        'link': '#007bff', // blue
      },
      boxShadow: {
        card: '0 2px 10px rgba(255, 255, 255, 0.2)',
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

