/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    "./*.{html,js}"],        
  theme: {
    extend: {
      colors:{
        primaryblue: " #60c5e0",
        secundaryblue: "#42BADA",
        terciaryblue: " #2394B3",
        white: "#E3F5FA",
        dark: "#0C313C",
      },
      maxWidth:{
        contain: "1500px",
      },
      minHeight:{
        min400: "400px",
      },
      margin:{
        centralize: "0 auto",
      },
      translate:{
        oneeixo: "-50%",
        alleixo: "-50%, -50%",
      },
      screens:{
        smallmoba: "300px",
      },
      fontSize:{
        title: "2rem",
        subtitle: "1rem",
        paragraph: ".8rem",
      },
      fontFamily:{
        "poppins-regular": ["poppins-regular", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
        "poppins-semibold": ["poppins-semibold", "sans-serif"],
        "poppins-italic": ["poppins-italic", "sans-serif"]
      }



    },
  },
  plugins: [],
};
