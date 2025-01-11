/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        'inter' : ['Inter'],
        'figtree' : ['Figtree'],
        'roboto' : ['Roboto']
      },
      boxShadow: {
        toolbar: 'rgba(100, 100, 111, 0.2) 0 0 14px 0',
        formLayout: 'rgba(100, 100, 111, 0.2) 0 0 4px 0',
      },
    },
  },
  plugins: [],
}

