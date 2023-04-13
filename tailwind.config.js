/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument_reg: "Monuments Ext, sans-serif",
        monument_bold: "Monuments Ext Bold, sans-serif",
        otf: "OTF, sans-serif",
      },
    },
  },
  plugins: [],
};
