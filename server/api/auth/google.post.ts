import { OAuth2Client } from 'google-auth-library'

interface userInfo {
  sub: any
  name: any
  picture: any
  email: any
  email_verified: any
}

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const oauth2Client = new OAuth2Client()
  oauth2Client.setCredentials({ access_token: body.accessToken })

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
    })
    .then(response => response.data as userInfo)
    .catch(() => null)

  oauth2Client.revokeCredentials()

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token',
    })
  }

  console.log({
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,
  })

  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified,
  }
})
