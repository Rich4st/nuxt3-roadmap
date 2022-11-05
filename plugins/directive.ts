// import type { NuxtApp } from 'nuxt/dist/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    },
    getSSRProps() {
      return {}
    },
  })
})
