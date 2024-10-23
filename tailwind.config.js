/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'onest' : ["Onest", 'sans-serif']
      },
      colors : {
        'Gray' : '#71717A',
        'Saffron' : '#F26922',
        'Light-Gray' : '#E4E4E7',
        'Rich-Black' : '#09090B',
        'Slate-Gray' : '#6B7280'
      },
      boxShadow : {
        "cheat" : "0px 4px 48px 0px #0000000F"
      }

    },
  },
  plugins: [],
}

