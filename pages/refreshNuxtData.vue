<script setup>
const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))

const refresh = () => refreshNuxtData('count')
</script>

<template>
  <div>
    {{ pending ? 'Loading' : count }}
  </div>
  <button @click="refresh">
    Refresh
  </button>
</template>

