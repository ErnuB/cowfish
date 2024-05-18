/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
          'deliver': ['deliver', 'sans-serif'],
          'giliams': ['giliams', 'sans-serif'],
          'notulen': ['notulen', 'sans-serif'],
          'museosans': ['museosans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

