/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // activamos modo dark con la clase "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2e',       // fondo principal oscuro
        foreground: '#e0e0e0',       // texto claro
        muted: '#2a2a3a',            // secciones secundarias
        primary: '#6c63ff',          // color principal suave
        secondary: '#9e9eda',        // acentos suaves
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
