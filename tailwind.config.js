const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,vue}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Noto Sans HK", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    }),
    require("@tailwindcss/typography")
  ]
}
