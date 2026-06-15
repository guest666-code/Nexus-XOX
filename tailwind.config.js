/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // index.html'de çağırdığımız Google Fontları buraya bağlıyoruz
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        orbit: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        // Nexus XOX'e özel siberpunk renk paletimiz
        nexusDark: '#0B0F19',
        nexusPurple: '#6366F1',
        nexusNeon: '#00F5FF',
      },
    },
  },
  plugins: [],
}

