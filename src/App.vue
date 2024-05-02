<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="container mx-auto">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <router-link to="/idioms" class="mr-5 text-2xl">Home</router-link>
      <router-link to="/" class="text-2xl">British vs American</router-link><br>
    </nav>
    <div>
      <RouterView />
    </div>
  </main>

</template>

<style scoped>

</style>
