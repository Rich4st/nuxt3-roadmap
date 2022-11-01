<script setup lang="ts">
/**
 * @description 通过<BaseApplyTitle />使用该组件，Nuxt会拼接文件名
 */
defineProps({
  title: {
    type: String,
    default: 'default title',
  },
})
</script>

<template>
  <p class="my-8 text-3xl text-gray-600">
    {{ title }}
  </p>
</template>
