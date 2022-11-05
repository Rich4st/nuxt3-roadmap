<script lang="ts" setup>
const { $hello } = useNuxtApp()
const title = $hello('Nuxt')
</script>

<template>
  <div class="m-4 bg-white">
    <p class="pb-4 text-2xl text-slate-600">
      {{ title }}
    </p>
    <p class="pb-4 text-2xl text-slate-600">
      這裡是最外層 app.vue
    </p>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
