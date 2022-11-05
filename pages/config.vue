<script setup>
const appConfig = useAppConfig()
const { theme } = appConfig
</script>

<template>
  <div class="my-24 flex flex-col items-center" :style="{ background: theme.primaryColor }">
    <span class="mt-4 text-2xl text-gray-600">theme.primaryColor:</span>
    <p class="mt-4 text-3xl font-semibold text-white">
      {{ theme.primaryColor }}
    </p>
  </div>
</template>
