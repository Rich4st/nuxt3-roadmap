<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { setLocale, locale, setLocaleCookie } = useI18n()
// setLocaleCookie(locale.value)
</script>

<template>
  <div class="bg-white py-24">
    <button
      type="button"
      class="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      @click="setLocale(locale === 'zh' ? 'en' : 'zh')"
    >
      {{ locale === 'en' ? 'English' : '中文' }}
    </button>
    <div class="flex flex-col items-center bg-white">
      <h1 class="mt-48 text-8xl font-medium text-blue-500">
        {{ $t('hello') }}
      </h1>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">
        這裡是首頁
        <Icon name="logos:react" size="72" />
      </h1>
      <div class="my-4 flex space-x-4">
        <NuxtLink to="/about">
          前往 About
        </NuxtLink>
        <NuxtLink to="/contact">
          前往 Contact
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
