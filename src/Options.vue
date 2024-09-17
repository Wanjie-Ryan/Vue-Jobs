<script>

// USING OPTIONS API
export default{
  data(){
    return{
      name:"John Doe",
      status:true,
      tasks:['task One', 'Task two', 'Task three'],
      link:"https://www.google.com"
    }
  },
  methods:{
    toggle(){
      if(this.status === 'active'){
        this.status ="pending"
      }
      else if(this.status === 'pending'){
        this.status = 'inactive'
      }
      else{
        this.status = 'active'
      }
    }
  }
}

</script>

<template>

  <h1>{{ name }}</h1>
  <!-- // v-if is a directive that is used to conditionally render a block -->
  <p v-if="status"> User is Active</p> 
  <p v-else>User is Inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click Link</a> -->
  <a :href="link">Click Link</a>

  <!-- <button v-on:click="toggle">Change Status</button> -->
  <button @click="toggle">Change Status</button>
  

</template>

// scoped means that the styles will only be applicable to this file alone or the classes belonging to this file
<style scoped>

</style>

