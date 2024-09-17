<script setup>
import Hero from "@/components/Hero.vue";
import Cards from "@/components/Homecards.vue";
import JobListings from "@/components/jobListings.vue";
</script>

<template>
  <Hero />
  <Cards />
  <JobListings :limit="4" :show-button="true" />
</template>
