import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: [
    "@/assets/css/tailwind.css",
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    transpile: ["vuetify"],
  },
});
