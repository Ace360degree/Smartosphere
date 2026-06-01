/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f1115',
        foreground: '#ffffff',
        heading: '#ffffff',
        body: '#9ca3af',
        border: 'rgba(255,255,255,0.1)',
        'surface-elevated': '#1a1d23',
        accent: '#ff7e05',
        'primary-foreground': '#ffffff',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
