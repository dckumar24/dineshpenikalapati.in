/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       screens: {
        xs: '360px',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cyber: {
          black: '#020408',
          dark: '#060d14',
          cyan: '#00f5ff',
          magenta: '#ff00aa',
          yellow: '#ffe600',
          green: '#00ff9f',
          gray: '#1a2332',
          border: '#0a1628',
        }
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 4s infinite',
        'pulse-cyan': 'pulse-cyan 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'border-flow': 'border-flow 3s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)', filter: 'none' },
          '92%': { transform: 'translate(-2px, 1px)', filter: 'hue-rotate(90deg)' },
          '94%': { transform: 'translate(2px, -1px)', filter: 'hue-rotate(-90deg)' },
          '96%': { transform: 'translate(-1px, 2px)', filter: 'none' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
        'pulse-cyan': {
          '0%, 100%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff' },
          '50%': { boxShadow: '0 0 20px #00f5ff, 0 0 40px #00f5ff, 0 0 60px #00f5ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'border-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      }
    },
  },
  plugins: [],
}
