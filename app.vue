<script lang="ts" setup>
</script>

<template>
  <div class="m-4 bg-white">
    <NuxtLayout>
      <template #header>
        <div class=" flex justify-between items-center">
          <p class="px-6 py-4 text-2xl cursor-pointer hover:text-sky-400 text-gray-700" @click="$router.push('/')">
            Nuxt3 docs
          </p>
          <p class="px-6 py-4 text-2xl text-gray-700">
            Rich4$t
          </p>
        </div>
      </template>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
