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
      colors: {
        'cta-button': 'var(--cta-color)',
        primary: '#1E1E1E',
        secondary: '#FFFFFF',
      },
      backgroundColor: {
        'bg-cta': 'var(--cta-color)',
        'primary-background-color': '#1E1E1E',
        'secondary-background-color': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
