module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
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