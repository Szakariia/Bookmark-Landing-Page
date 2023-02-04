/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,css}",
    ],
    theme: { 
        screens: {
            'sm': '425px',
        // => @media (min-width: 640px) { ... }
  
            'md': '768px',
        // => @media (min-width: 768px) { ... }
  
            'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
            'xl': '1440px',
        // => @media (min-width: 1280px) { ... }
  
            '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                'red': '#FA5959',
                'bleumarine': '#242A45',
                'bleu' : '#5267DF',
                'gray': {
                          100: '#9194A2',
                          200: '#F7F7F7',
                    },
                'white': '#FFFFFF',
                },
            fontFamily: {
                Rubik: ['Rubik', 'sans-serif']
                },
        },

    },
    plugins: [],
  }
