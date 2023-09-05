// https://nuxt.com/docs/api/configuration/nuxt-config
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
    "maz-ui/css/main.css",
  ],
  build: {
    transpile: ["vuetify", "maz-ui"],
  },

  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400, 700],
      },
      DM: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      },
    },
    display: "swap",
  },
});
