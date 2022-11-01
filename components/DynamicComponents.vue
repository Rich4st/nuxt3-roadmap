<script setup lang="ts">
/**
 * @description 通过 resolveComponent 控制动态组件
 */
const show = ref(false)
const BaseApplyButtonPlain = resolveComponent('BaseApplyButton')
const BaseApplyButtonRound = resolveComponent('BaseApplyRoundButton')
</script>

<template>
  <div class="flex mt-8 mb-2">
    <input
      id="show-button"
      v-model="show"
      name="show-button"
      type="checkbox"
      class="h-5 w-5"
    >
    <label for="show-button" class="ml-2 block text-base text-slate-800">切换动态组件</label>
  </div>
  <component :is="show ? BaseApplyButtonPlain : BaseApplyButtonRound">
    <span class="text-3xl text-gray-600">👉點我返回主页</span>
  </component>
</template>
