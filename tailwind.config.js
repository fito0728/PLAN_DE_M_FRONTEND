/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // paleta azul suave (ajústala si quieres)
        brand: {
          50:  '#f5f9ff',
          100: '#eaf3ff',
          200: '#cfe7ff',
          300: '#a6d4ff',
          400: '#75bfff',
          500: '#4aa8ff', // use this as main
          600: '#2f8fff',
          700: '#206fd6',
          800: '#154e9d',
          900: '#0b2f5f'
        }
      },
      boxShadow: {
        'card': '0 8px 20px rgba(20, 35, 64, 0.08)',
        'sm-soft': '0 2px 8px rgba(16,24,40,0.06)'
      },
      borderRadius: {
        'lg-2': '12px'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn .36s ease-out both',
        'pop': 'pop .28s cubic-bezier(.2,.9,.2,1) both'
      }
    }
  },
  plugins: []
}
