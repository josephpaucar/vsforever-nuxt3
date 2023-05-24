// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
  ],
  googleFonts: {
    families: {
      Caveat: {
        wght: [400, 500, 600],
      },
      "Didact Gothic": true,
      Marcellus: true,
      WindSong: {
        wght: [400, 500],
      },
    },
  },
});
