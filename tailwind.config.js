/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        surface: '#0f172a',
        'surface-hover': '#1e293b',
        border: '#334155',
        accent: '#22d3ee',
        'accent-muted': '#164e63',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.9',
            boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)',
          },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
