/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/bowlby-scream.jpeg')",
        'shop-header': "url('/deadwing-promo-band.jpeg')",
        grunge: "url('/grunge.png')",
      },
    },
  },
  plugins: [],
}
