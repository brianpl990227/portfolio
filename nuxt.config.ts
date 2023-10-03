// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: "/portfolio/",
    head: {
      title: 'Brian Perez | Portfolio',
      link: [{ rel: 'icon', type: 'image/png', href: "/portfolio/img/dotnet.png" }],
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'Brian Perez | Portfolio' },
        { hid: 'description', property: 'description', content: 'Here you can see a summary of my professional profile'},
        { hid: 'og:description', property: 'og:description', content: 'Here you can see a summary of my professional profile'},
        { hid: 'og:image', property: 'og:image', content: 'https://brianpl990227.github.io/portfolio/img/my-photo.jpeg'},
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
