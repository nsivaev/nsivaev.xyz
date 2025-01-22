// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'nsivaev.dev',
      meta: [
        { name: 'description', content: 'Сайт-визитка' }
      ]
    }
  }
})
