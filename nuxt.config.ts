// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
      { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' },
    ],
    strategy: 'no_prefix',
    vueI18n: {
      legacy: false,
    },
  },
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

