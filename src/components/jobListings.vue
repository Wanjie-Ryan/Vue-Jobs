<script setup>
import { RouterLink } from "vue-router";
// import JobData from "@/jobs.json";
import { ref, defineProps, onMounted } from "vue";
import SingleJobListing from "./SingleJobListing.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

const jobs = ref([]);
const loading = ref(false);
// console.log(jobs.value)

onMounted(async () => {
  try {
    loading.value = true;
    const response = await axios.get("/api/jobs");
    jobs.value = response.data;
  } catch (err) {
    console.log(err || "error fecthing jobs");
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="px-4 py-10 bg-blue-50">
    <div class="m-auto container-xl lg:container">
      <h2 class="mb-6 text-3xl font-bold text-center text-green-500">
        Browse Jobs
      </h2>

      <!-- LOAD SPINNER -->

      <div v-if="loading" class="py-6 text-center textx-grey-500">
        <PulseLoader />
      </div>

      <!-- // passing the data as prop named job -->
      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <SingleJobListing
          v-for="job in jobs.slice(0, limit || jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section class="max-w-lg px-6 m-auto my-10" v-if="showButton">
    <RouterLink
      to="/jobs"
      class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
