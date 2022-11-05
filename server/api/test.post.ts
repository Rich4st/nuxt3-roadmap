export default defineEventHandler(async (event) => {
  const body = await readBody(event) as { name: string }

  return {
    ok: true,
    data: `hello, ${body.name}`,
  }
})
