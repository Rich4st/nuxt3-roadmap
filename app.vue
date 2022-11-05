<script lang="ts" setup>
import { googleTokenLogin } from 'vue3-google-login'

const { $hello } = useNuxtApp()
const title = $hello('Nuxt')

const runtimeConfig = useRuntimeConfig()
const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public

const userInfo = ref()

const handleGoogleLogin = async () => {
  const accessToken = await googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID,
  }).then(response => response?.access_token)

  if (!accessToken)
    return '登入失敗'

  const { data } = await useFetch('/api/auth/google', {
    method: 'POST',
    body: {
      accessToken,
    },
    initialCache: false,
  })

  userInfo.value = data.value
}
</script>

<template>
  <div class="m-4 bg-white">
    <p class="pb-4 text-2xl text-slate-600">
      {{ title }}
    </p>
    <div>
      <ClientOnly>
        <GoogleLogin prompt />
      </ClientOnly>
    </div>
    <NuxtLink to="/useState/increment">
      INCREMENT
    </NuxtLink>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
