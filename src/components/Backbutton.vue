<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <div class="container px-6 py-6 m-auto">
      <RouterLink
        to="/jobs"
        class="flex items-center text-green-500 hover:text-green-600"
      >
        <i class="mr-5 pi pi-arrow-circle-left">Back To Job Listings</i>
      </RouterLink>
    </div>
  </section>
</template>
