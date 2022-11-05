// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  typescript: {
    typeCheck: true,
  },
  appConfig: {
    theme: {
      primaryColor: '#1e88e5',
    },
  },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',
    public: {
      apiBase: '/api',
      googleClientId: '373867727642-mcbj1lt1t4e78rmh281g96q2i9c12udr.apps.googleusercontent.com',
    },
  },
})

