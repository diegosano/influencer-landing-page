/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      fontSize: {
        lg: ["24px", "32px"],
        md: ["20px", "32px"],
        base: ["18px", "24px"],
        sm: ["18px", "24px"],
        xs: ["16px", "24px"],
        xxs: ["14px", "20px"],
      },
      colors: {
        primary: {
          100: "#ebf3f9",
          200: "#b1d0e7",
          300: "#76acd5",
          400: "#3c89c3",
          500: "#306d9c",
          600: "#1e4462",
          700: "#12293b",
          800: "#060e14",
        },
        secondary: {
          100: "#edf1f7",
          200: "#c9d4e8",
          300: "#a6b7d9",
          400: "#829ac9",
          500: "#5e7dba",
          600: "#4563a1",
          700: "#364d7d",
          800: "#263759",
          900: "#172136",
        },
        tertiary: {
          100: "#555555",
          200: "#454544",
          300: "#373736",
          400: "#262625",
        },
        neutral: {
          100: "#f5f5f5",
          200: "#e0e0e0",
          300: "#cdcdcd",
          400: "#b8b8b8",
          500: "#a6a6a6",
          600: "#909090",
          700: "#808080",
        },
      },
      backgroundImage: {
        "radial-blur":
          "radial-gradient(theme('colors.secondary.800 / 95%'),theme('colors.secondary.800 / 90%'),theme('colors.secondary.700 / 90%'), theme('colors.secondary.600 / 85%'), theme('colors.secondary.500 / 85%'), theme('colors.secondary.500 / 70%'), theme('colors.secondary.500 / 55%'), transparent 72%)",
        "linear-blur":
          "linear-gradient(transparent, theme('colors.secondary.500 / 70%'), theme('colors.secondary.600 / 85%'), theme('colors.secondary.700 / 90%'), theme('colors.secondary.800 / 95%'))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
