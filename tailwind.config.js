module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFF000',
        secondary: '#E50012',
        gray: {
          100: '#EEEEEE',
          200: '#D4D4D4',
          300: '#B5B5B6',
          400: '#9E9E9E',
          500: '#707070'
        },
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        '0px': '0',           // 0px
        '12px': '0.75rem',    // 12px
        '14px': '0.875rem',   // 14px
        '15px': '0.9375rem',  // 15px
        '16px': '1rem',       // 16px
        '18px': '1.125rem',   // 18px
        '20px': '1.25rem',    // 20px
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1601px'
      },
      spacing: {
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '50%': '50%'
      },
      borderRadius: {
        '5': '0.3125rem',
        '9': '0.5625rem',
        '10': '0.625rem'
      }
    },
  },
  plugins: [],
}
