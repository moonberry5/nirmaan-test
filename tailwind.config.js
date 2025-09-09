/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F1E8',
          light: '#FAF7F0',
          dark: '#E8E1D5'
        },
        maroon: {
          DEFAULT: '#8B2635',
          light: '#A53E4C',
          dark: '#6B1D28'
        },
        forest: {
          DEFAULT: '#2D5016',
          light: '#3D6B20',
          dark: '#1F3710'
        },
        rust: {
          DEFAULT: '#D2691E',
          light: '#E8833A',
          dark: '#B85C1A'
        },
        charcoal: {
          DEFAULT: '#3D2914',
          light: '#5C4A35',
          dark: '#2A1C0F'
        }
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};