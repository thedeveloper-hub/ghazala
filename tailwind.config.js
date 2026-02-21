/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#2a5f8f',
          light: '#4a9fd4',
          dark: '#1a3f6f',
        },
        gold: {
          DEFAULT: '#b8860b',
          light: '#d4a017',
        },
      },
      animation: {
        'blob-float': 'blobFloat 8s ease-in-out infinite',
        'avatar-float': 'avatarFloat 6s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        blobFloat: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(20px,-30px) scale(1.05)' },
          '66%': { transform: 'translate(-15px,15px) scale(0.97)' },
        },
        avatarFloat: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseDot: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
