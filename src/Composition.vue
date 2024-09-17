<script setup>
import { ref, onMounted } from "vue";
// USING COMPOSITION API

const name = ref("John");
const status = ref("active");
const tasks = ref([]);
const newTask = ref("");

const toggle = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// when the component mounts, do this
onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (err) {
    console.log("error fetching tasks");
  }
});
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- // v-if is a directive that is used to conditionally render a block -->
  <p v-if="status === 'active'">User is Active</p>
  <p v-else>User is Inactive</p>

  <!-- the .prevent method is equivalent to the e.preventDefault -->
  <form @submit.prevent="addTask">
    <label>New Task</label>
    <input type="text" v-model="newTask" />
    <button>Submit</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">Delete</button>
    </li>
  </ul>

  <!-- <button v-on:click="toggle">Change Status</button> -->
  <button @click="toggle">Change Status</button>
</template>

// scoped means that the styles will only be applicable to this file alone or
the classes belonging to this file
<style scoped></style>
