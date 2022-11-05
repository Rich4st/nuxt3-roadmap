<script lang="ts" setup>
definePageMeta({
  middleware: 'random-redirect',
})
</script>

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-rose-400">
        如果沒事不要找我 xDDD
      </h1>
      <p class="my-8 text-3xl text-gray-600">
        這裡是 /contact
      </p>
    </div>
    <!-- ClientOnly 中的内容尽在客户端渲染，且会先旋绕fallback中的内容 -->
    <ClientOnly>
      <IronManWelcome />
      <template #fallback>
        <p class="my-6 flex justify-center">
          [IronManWelcome] 載入中...
        </p>
      </template>
    </ClientOnly>
    <JustClient />
    <ClientAndServer />
  </div>
</template>
