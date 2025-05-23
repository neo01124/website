/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EDF2F4',   // Lightest - background
          100: '#E3E8EB',  // Lighter variant
          200: '#D9DFE3',  // Light variant
          300: '#8D99AE',  // Medium - secondary
          400: '#7A8599',  // Medium-dark variant
          500: '#676F85',  // Dark variant
          600: '#545A70',  // Darker variant
          700: '#41465C',  // Very dark variant
          800: '#2E3147',  // Almost darkest
          900: '#2B2D42',  // Darkest - text/backgrounds
        },
        text: {
          50: '#2B2D42',   // Now using the darkest color for maximum contrast
          100: '#23253A',  // Even darker than the original dark blue-gray
          200: '#1B1D32',  // Very dark blue-gray
          300: '#13152A',  // Extremely dark blue-gray
          400: '#0B0D22',  // Nearly black with blue undertone
          500: '#03051A',  // Almost black with slight blue tint
          600: '#020415',  // Nearly pure black with minimal blue
          700: '#010310',  // Almost pure black
          800: '#00020B',  // Barely visible blue-black
          900: '#000106',  // Nearly pure black
        },
        accent: {
          50: '#FDE8EA',   // Lightest red
          100: '#FBD0D5',  // Very light red
          200: '#F9A1AA',  // Light red
          300: '#F67280',  // Soft red
          400: '#F44355',  // Medium red
          500: '#EF233C',  // Primary red
          600: '#D90429',  // Deep red
          700: '#B1031F',  // Dark red
          800: '#890217',  // Very dark red
          900: '#61010F',  // Almost brown red
        }
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
} 