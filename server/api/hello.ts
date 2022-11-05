export default defineEventHandler((event) => {
  const cookies = parseCookies(event)

  return {
    data: 'hello',
    cookies,
  }
})
