/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        papel: '#F3EFE4',
        dobra: '#EAE4D6',
        tinta: '#1F1B16',
        apoio: '#6B6155',
        latao: '#8A5A1E',
        brasa: '#6E4715',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { rotulo: '0.2em' },
    },
  },
  plugins: [],
}
