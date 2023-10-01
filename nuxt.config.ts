// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    baseURL: "/yourrepositoryname/",
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/img/dotnet.png" }],
      meta: [
        { name: 'title', content: 'Brian Perez - Portfolio' },
        { name: 'ogTitle', content: 'Brian Perez - Portfolio' },
        { name: 'description', content: 'Here you can see a summary of my professional profile'},
        { name: 'ogDescription', content: 'Here you can see a summary of my professional profile'},
        { name: 'ogImage', content: 'https://brianpl990227.github.io/portfolio/img/my-photo.jpeg'},
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
