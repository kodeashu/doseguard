/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        obsidian: {
          950: '#05070a',
          900: '#080d14',
          850: '#0e1622',
          800: '#141e2e',
          700: '#1e2c40',
          600: '#2c3e58',
        },
        uv: {
          glow: '#9d4edd',
          bright: '#c77dff',
          deep: '#5a189a',
        },
        photon: {
          cyan: '#00f2fe',
          teal: '#4facfe',
          emerald: '#10b981',
          amber: '#f59e0b',
          crimson: '#f43f5e',
        }
      },
      boxShadow: {
        'bezel': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.08), 0 12px 32px -8px rgba(0, 0, 0, 0.6)',
        'bezel-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), 0 0 24px -4px rgba(0, 242, 254, 0.25)',
        'hazard-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 0 32px 0 rgba(244, 63, 94, 0.35)',
        'nested': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'hazard': 'hazard-pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser': 'laser-sweep 2.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        'hazard-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.02)' },
        },
        'laser-sweep': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
