export default defineNuxtPlugin(() => {
  addRouteMiddleware('global-test', (_to, _from) => {
    if (_from.name === 'home')
      console.log('global-test middleware')
  }, { global: true })

  return {
    provide: {
      hello: (msg: string) => `hello, ${msg}!`,
    },
  }
})
