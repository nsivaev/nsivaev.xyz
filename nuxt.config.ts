// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ['@/assets/styles/fonts.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "Николай Сиваев",
      link: [
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'theme-color', content: '#121212' },
        { property: 'og:title', content: 'Николай Сиваев' },
        { property: 'og:description', content: 'Фронтенд-разработчик' },
        { property: 'og:image', content: 'https://nsivaev.xyz/images/meta.png' },
        { property: 'og:url', content: 'https://nsivaev.xyz' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' }
      ]
    }
  },

  compatibilityDate: "2025-01-22"
})