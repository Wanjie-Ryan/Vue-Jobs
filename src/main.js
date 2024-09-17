import "./assets/main.css";
import "tailwindcss/tailwind.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import router from "./router/router";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount("#app");
