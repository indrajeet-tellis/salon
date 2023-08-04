// https://nuxt.com/docs/api/configuration/nuxt-config
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "bootstrap/dist/css/bootstrap.css",
  ],

  modules: ["@nuxtjs/google-fonts"],

  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400, 700], // Font weights
      },
      DM: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], // Font weights
      },
    },
    display: "swap",
  },
});
