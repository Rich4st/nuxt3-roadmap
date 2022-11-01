<script setup lang="ts">
/**
 * https://v3.nuxtjs.org/guide/directory-structure/components#client-components
 * @description 通过文件名控制组件在服务端还是客户端渲染
 * *.client.vue 仅在客户端渲染
 * *.server.vue 仅在服务端渲染
 */
</script>

<template>
  <div class="mx-16 my-4 rounded-lg bg-green-100 p-4 text-sm text-green-700">
    <span class="font-semibold">[JustClient]</span>
    <span class="ml-2">這是只有在 <span class="font-bold">Client</span> 才會渲染的元件</span>
  </div>
</template>
