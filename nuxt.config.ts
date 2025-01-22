// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],

  nitro: {
    preset: 'static'
  },

  app: {
    baseURL: '/',

    head: {
      title: "nsivaev.xyz",
    }
  },

  compatibilityDate: "2025-01-22"
})