/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      maxWidth: {
        'max-w-screen-1.5xl': '1444px',
      },
      colors: {
        'cta-button': 'var(--cta-color)',
        primary: '#1E1E1E',
        secondary: '#FFFFFF',
        purple: {
          50: '#f3eefc',
          100: '#d8cbf7',
          200: '#c6b2f3',
          300: '#ab8eee',
          400: '#9b79ea',
          500: '#8257e5',
          600: '#764fd0',
          700: '#5c3ea3',
          800: '#48307e',
          900: '#372560',
        },
      },
      backgroundColor: {
        'bg-cta': 'var(--cta-color)',
        'primary-background-color': '#1E1E1E',
        'secondary-background-color': '#FFFFFF',
      },
      lineHeight: {
        xl: '112px',
      },
    },
  },
  plugins: [],
}
