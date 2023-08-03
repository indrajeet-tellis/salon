// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@fortawesome/fontawesome-free/css/all.css",
  ],

  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 400, 700], // Font weights
      },
      DMSans: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], // Font weights
      },
      // $colors:{
      //   $primary:[#ed0046]
      // }
    },
    display: "swap",
  },
});
