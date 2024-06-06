// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      scale: {
        '100': '1.00',
        '102': '1.02',
      },
      minWidth: {
        'screen-375': '375px',
        'screen-415': '415px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      display: ['print'],
    },
  },
  plugins: [],
};