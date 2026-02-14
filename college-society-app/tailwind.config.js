/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          purple: '#a855f7',
        },
      },
      boxShadow: {
        soft: '0 4px 14px 0 rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.12)',
        glow: '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-hover': '0 0 30px rgba(0, 245, 255, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
