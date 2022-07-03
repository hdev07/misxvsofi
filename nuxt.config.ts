import { defineNuxtConfig } from "nuxt";
import brand from "./static/text/brand.js";


export default defineNuxtConfig({
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'misxvsofi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.misxvsofi.desc },
      { name: 'msapplication-TileColor', content: '#00C4B3' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/ms-icon-144x144.png'
      },
      // Facebook
      { property: 'author', content: 'misxvsofi' },
      { property: 'og:site_name', content: 'misxvsofi.io' },
      { property: 'og:locale', content: 'en_ES' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'misxvsofi.io' },
      { property: 'twitter:domain', content: 'misxvsofi.io' },
      { property: 'twitter:creator', content: 'misxvsofi' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: brand.misxvsofi.img },
      { property: 'og:url', content: brand.misxvsofi.url },
      { property: 'og:title', content: brand.misxvsofi.projectName },
      { property: 'og:description', content: brand.misxvsofi.desc },
      { name: 'twitter:site', content: brand.misxvsofi.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.misxvsofi.img },
      { property: 'og:image', content: brand.misxvsofi.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
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
