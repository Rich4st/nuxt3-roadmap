export default defineEventHandler((event) => {
  const params = event.context.params as { name: string }

  return {
    data: `hello ${params.name}`,
  }
})

