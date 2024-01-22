<template>
  <main class="container">
    <h1>Projects List</h1>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="project in store.projects" :key="project.id">
        <AppCard :project="project"></AppCard>
      </div>
    </div>
  </main>
  
</template>

<script>
import axios from 'axios';
import {store} from '../store.js';
import AppCard from '../components/AppCard.vue';
  export default {
    name: "AppProjects",
    components: {
      AppCard,
    },
    data(){
      return {
        store
      };
    },
    methods: {
      getAllProjects() {
        axios.get(this.store.apiUrl + 'projects').then((res) => {
          console.log(res.data);
          this.store.projects = res.data.results.data;
        })
      }
    },
    created() {
      this.getAllProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>