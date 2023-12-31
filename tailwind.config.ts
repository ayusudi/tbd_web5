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
      colors: {
        "darkblue": "#13141C",
        "darkpaleblue": "#1E202C",
        "primaryblue": "#007FFF",
        "gray": "#888CAD",
        "inputblue": "#262837"
      },
      fontFamily: {
        jua: ['var(--font-jua)']
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}