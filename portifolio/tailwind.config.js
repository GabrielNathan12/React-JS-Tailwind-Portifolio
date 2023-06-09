/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
  container:{
    padding:{
      DEFAULT: '15px',
    },
  },
  screens:{
    sm: '640px',
    md: '768',
    lg: '960px',
    xl: '1200px',
  },
  extend: {
    colors:{
      primary: '#0a0a0a',
      accent: '#B809C3',
    }
  },
    backgroundImage:{
      site: "url('./assets/backgrupd.jpg')",
      about: "url('./assets/contact.jpg')",
      services: "url('./assets/woks.jpg')"
    }
  },
  plugins: [],
}

