<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import Backbutton from "@/components/Backbutton.vue";
import { useToast } from "vue-toastification";

const route = useRoute();
const jobId = route.params.id;
const job = ref({});
const loading = ref(false);
const toast = useToast();
const router = useRouter();

onMounted(async () => {
  try {
    loading.value = true;
    const response = await axios.get(`/api/jobs/${jobId}`);
    // console.log(response)
    job.value = response.data;
  } catch (err) {
    console.log(err || "An error occurred");
  } finally {
    loading.value = false;
  }
});

const handleDelete = async () => {
  try {
    // const confirm = window.confirm("Are you sure you want to delete this job?")
    // if(confirm){}
    const response = await axios.delete(`/api/jobs/${jobId}`);
    console.log(response);
    if (response.status == 200) {
      toast.success("Job deleted successfully");
      setTimeout(() => {
        router.push("/jobs");
      }, 1000);
    }
  } catch (err) {
    // console.log(err);
    toast.error(err.message || "An error occurred");
  }
};
</script>

<template>
  <Backbutton />
  <section v-if="!loading" class="bg-green-50">
    <div class="container px-6 py-10 m-auto">
      <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
        <main>
          <div
            class="p-6 text-center bg-white rounded-lg shadow-md md:text-left"
          >
            <div class="mb-4 text-gray-500">{{ job.type }}</div>
            <h1 class="mb-4 text-3xl font-bold">{{ job.title }}</h1>
            <div
              class="flex justify-center mb-4 text-gray-500 align-middle md:justify-start"
            >
              <i
                class="mr-2 text-lg text-orange-700 fa-solid fa-location-dot"
              ></i>
              <p class="text-orange-700">{{ job.location }}</p>
            </div>
          </div>

          <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-lg font-bold text-green-800">
              Job Description
            </h3>

            <p class="mb-4">
              {{ job.description }}
            </p>

            <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

            <p class="mb-4">{{ job.salary }} /Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="p-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-xl font-bold">Company Info</h3>

            <h2 class="text-2xl">{{ job.company?.name || "N/A" }}</h2>

            <p class="my-2">
              {{ job.company?.description || "N/A" }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="p-2 my-2 font-bold bg-green-100">
              {{ job.company?.contactEmail || "N/A" }}
            </p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="p-2 my-2 font-bold bg-green-100">
              {{ job.company?.contactPhone || " N/A" }}
            </p>
          </div>

          <!-- Manage -->
          <div class="p-6 mt-6 bg-white rounded-lg shadow-md">
            <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${job.id}`"
              class="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
              >Edit Job</RouterLink
            >
            <button
              class="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
              @click="handleDelete"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else class="py-6 text-center textx-grey-500">
    <PulseLoader />
  </div>
</template>
