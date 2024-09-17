<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="flex flex-col items-center justify-center text-center h-96">
    <i
      class="mb-4 text-yellow-400 pi pi-exclamation-traingle fa-4x text-7xl"
    ></i>
    <h1 class="mb-4 text-6xl font-bold">404 Not Found</h1>
    <p class="mb-5 text-xl">This Page Does Not Exist</p>
    <RouterLink
      to="/"
      class="px-3 py-2 mt-4 text-white bg-green-700 rounded hover:bg-green-900-md"
      >Go Back</RouterLink
    >
  </section>
</template>
