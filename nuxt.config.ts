// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "nsivaev.xyz",
      link: [
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      meta: [
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:title', content: 'Мой сайт-визитка' },
        { property: 'og:description', content: 'Фронтенд-разработчик с опытом создания современных веб-приложений' },
        { property: 'og:url', content: 'https://nsivaev.xyz' },
        { property: 'og:type', content: 'website' },
      ]
    }
  },

  compatibilityDate: "2025-01-22"
})