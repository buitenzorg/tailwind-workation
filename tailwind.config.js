module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        'gray-900-spotify': '#121212',
        'gray-800-spotify': '#181818',
        'gray-700-spotify': '#282828',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '128': '32rem',
        '200': '50rem',
      },
      padding: {
        '5/6': '83.333333%',
      },
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
    customForms: (theme) => ({
      default: {
        select: {
          border: 'transparent',
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.700'),
          lineHeight: theme('lineHeight.snug'),
          icon: `<svg fill="${theme(
            'colors.white'
          )}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>`,
          '&:focus': {
            boxShadow: 'none',
            borderColor: 'transparent',
            backgroundColor: theme('colors.gray.600'),
          },
        },
        checkbox: {
          borderColor: 'transparent',
          color: theme('colors.indigo.500'),
          backgroundColor: theme('colors.gray.900'),
          height: '1.5em',
          width: '1.5em',
          '&:focus': {
            boxShadow: 'none',
            borderColor: 'transparent',
          },
        },
        radio: {
          borderColor: 'transparent',
          color: theme('colors.indigo.500'),
          backgroundColor: theme('colors.gray.900'),
          height: '1.5em',
          width: '1.5em',
          '&:focus': {
            boxShadow: 'none',
            borderColor: 'transparent',
          },
        },
      },
    }),
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
