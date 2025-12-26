/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          50: '#fefdf8',
          100: '#fef9e7',
          200: '#fef2c7',
          300: '#fde68a',
          400: '#fcd34d',
          500: '#f59e0b', // Main accent color (warm amber)
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        light: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#262626',
        }
      },
    },
  },
  plugins: [],
};
