<script setup lang="ts">
/**
 * @description 通过<BaseApplyButton />使用该组件而不是BaseApplyBaseApplyButton，Nuxt会自动删除重复的字符
 */
const emit = defineEmits(['handleClick'])

const handleButtonClick = () => {
  emit('handleClick')
}
</script>

<template>
  <button class=" text-sky-600 outline mt-4 outline-2 px-4 py-2 outline-offset-2 rounded-sm " @click="handleButtonClick">
    <slot />
  </button>
</template>
