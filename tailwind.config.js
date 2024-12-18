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
      width:{
       w90: "90%",
      },
      maxWidth:{
        contain: "1500px",
        containsmall: "450px"
      },
      minHeight:{
        min400: "400px",
        min500: "500px",

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
        mediunmoba: "600px",
        tablet:     "1000px"
      },
      fontSize:{
        title: "1.2rem",
        subtitle: "1rem",
        paragraph: ".9rem",
      },
      fontFamily:{
        "poppins-regular": ["poppins-regular", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
        "poppins-semibold": ["poppins-semibold", "sans-serif"],
        "poppins-italic": ["poppins-italic", "sans-serif"]
      },
      dropShadow:{
        shadowblue: "0px 0px 3px #0C313C"
      },



    },
  },
  plugins: [],
};
