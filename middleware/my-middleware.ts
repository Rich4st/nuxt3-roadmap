export default defineNuxtRouteMiddleware((to, _from) => {
  // 路由中介軟體的邏輯
  if (to.params.id === '1')
    return abortNavigation()
  return navigateTo('/', { replace: true })
})
