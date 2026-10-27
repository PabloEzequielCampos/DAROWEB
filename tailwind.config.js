/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          900: '#0b0f17',
          800: '#111827',
          700: '#1b2333',
          600: '#283347',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          light: '#818cf8',
          glow: 'rgba(99, 102, 241, 0.25)',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          400: '#94a3b8',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        anime: ['Outfit', 'sans-serif'],
        manga: ['"Dela Gothic One"', 'cursive', 'sans-serif'],
        classic: ['Lora', 'Georgia', 'serif'],
        typewriter: ['"Courier Prime"', 'Courier', 'monospace'],
        syne: ['Syne', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
