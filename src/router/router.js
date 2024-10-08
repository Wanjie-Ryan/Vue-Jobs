import { createRouter, createWebHistory } from "vue-router";
import Homeview from "@/views/Homeview.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SingleJobView from "@/views/SingleJobView.vue";
import Addjob from "@/views/Addjob.vue";
import EditJob from "@/views/EditJob.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "singleJob",
      component: SingleJobView,
    },
    {
      path: "/jobs/add",
      name: "addJob",
      component: Addjob,
    },
    {
      path: "/jobs/edit/:id",
      name: "EditJob",
      component: EditJob,
    },

    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFoundView,
    },
  ],
});

export default router;
