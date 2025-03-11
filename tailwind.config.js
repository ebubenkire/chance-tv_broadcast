/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 8s linear infinite reverse',
        'shimmer': 'shimmer 2s linear infinite',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'slideRight': 'slideRight 0.5s ease-out forwards',
        'slideDown': 'slideDown 0.5s ease-out forwards',
        'expandWidth': 'expandWidth 0.5s ease-out forwards 0.5s',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slowZoom': 'slowZoom 20s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        expandWidth: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slowZoom: {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
} 