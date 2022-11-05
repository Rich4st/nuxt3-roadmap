export default defineNuxtRouteMiddleware((to, from) => {
  // 這個中間件會在每次路由切換時執行
  console.log(`[全域中間件] to: ${to.path}, from: ${from.path}`)
})
