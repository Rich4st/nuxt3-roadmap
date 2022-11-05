import VueGTag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGTag, {
    property: {
      id: 'GA_MEASUREMENT_ID',
    },
  })
})
