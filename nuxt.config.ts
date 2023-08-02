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
    },
    display: "swap",
  },
});
