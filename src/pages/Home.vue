<script setup>
  import { ref } from "vue"

  const message = ref("Hello, World!")
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="font-bold text-5xl">{{ message }}</div>
  </div>
</template>
