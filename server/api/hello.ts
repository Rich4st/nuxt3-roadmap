const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  const { apiSecret } = runtimeConfig

  console.log(`接收到了一個 Server API 請求: ${event.req.url}`)
  console.log(`執行時的環境變數 [apiSecret]: ${apiSecret}`)

  return {
    data: 'hello b7',
    cookies,
  }
})
