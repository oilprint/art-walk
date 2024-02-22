/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: { 
      inter: ['Inter', 'sans-serif'],
      lucky: ["Luckiest Guy", "cursive"],  
      },
    },
    colors: {
        light: "#FFFAE4",
        dark:"#0C2439",
        primary: "#296A89",
        accent: "#F89C1F",
        
      },
    container: {
      'max-width': '1200px',
      'padding': '15px',
      'center': true
    },
  },
  plugins: [],
}

