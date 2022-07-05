import { defineNuxtConfig } from "nuxt";


export default defineNuxtConfig({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@500&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@500&family=Rubik+Moonrocks&display=swap" 
    }
  ],
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
