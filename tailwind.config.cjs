const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--jh-color-primary)',
        secondary: 'var(--jh-color-secondary)',
        accent: 'var(--jh-color-accent)',
      },
      fontFamily: {
        sans: ['var(--jh-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--jh-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--jh-font-heading)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
