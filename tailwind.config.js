/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  translate: {
    '101': '101%',
  },
  keyframes: {
    marquee: {
      from: { transform: 'translateX(0%)' },
      to: { transform: 'translateX(-50%)' },
    },
  },
  animation: {
    marquee: 'marquee 18s linear infinite',
  },
},

  },
  plugins: [],
}

