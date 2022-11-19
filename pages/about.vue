<script setup lang="ts">
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    console.log('[匿名中間件] 我是直接定義在頁面內的匿名中間件')
  }),
  title: 'About',
})

const route = useRoute()
const title = ref('Nuxt3 Roadmap')
const description = ref('這裡是 Nuxt 3 學習筆記 實戰部落格')

useHead({
  title,
  titleTemplate: title => title ? `${title} - About` : 'About',
  meta: [
    {
      name: 'description',
      content: description.value,
    },
    {
      name: 'og:title',
      content: `${route.meta.title} | Nuxt3 RoadMap`,
    },
  ],
})
</script>

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-yellow-400">
        大家好！我是 Ryan
      </h1>
      <BaseApplyTitle title="這裡是 /about" />
      <LazyBaseApplyButton @handle-click="$router.push({ path: '/' })">
        <span class="text-3xl text-gray-600">👉點我返回主页</span>
      </LazyBaseApplyButton>
      <DynamicComponents />
      <LazyTheLazyComponent />
    </div>
  </div>
</template>
