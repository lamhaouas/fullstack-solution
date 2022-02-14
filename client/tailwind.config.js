module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'mytheme': {                         
           'primary' : '#fd2d01',         
           'secondary' : '#ffd7d7',      
           

           'info' : '#2094f3',              
           'success' : '#009485',           
           'warning' : '#ff9900',           
           'error' : '#ff5724',      
        },
      },
    ],
  },
}
