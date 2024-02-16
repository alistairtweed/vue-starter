import path from "path"
import vue from "@vitejs/plugin-vue"

export default {
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 3000
  },
  plugins: [
    vue()
  ]
}
