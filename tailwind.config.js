/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'galaxy-dark': '#03002e',
        'galaxy-primary': '#010048',
        'galaxy-secondary': '#010057',
        'galaxy-tertiary': '#02006c',
        'galaxy-accent': '#090088',
        'galaxy-purple': '#1c0333',
        'galaxy-blue': '#0066cc',
        'galaxy-light': '#e0e7ff',
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'galaxy-drift': 'galaxy-drift 20s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(9, 0, 136, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(9, 0, 136, 0.5)',
          },
        },
        'galaxy-drift': {
          '0%': {
            transform: 'translateX(0px) translateY(0px)',
          },
          '33%': {
            transform: 'translateX(30px) translateY(-30px)',
          },
          '66%': {
            transform: 'translateX(-20px) translateY(20px)',
          },
          '100%': {
            transform: 'translateX(0px) translateY(0px)',
          },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};