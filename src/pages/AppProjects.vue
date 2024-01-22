<template>
  <h1>Projects List</h1>
  <ul>
    <li v-for="project in store.projects" :key="project.id">
      <router-link :to="{name: 'project', params: {slug: project.slug}}" class="btn btn-primary my-1">{{ project.title }}</router-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
import {store} from '../store.js';
  export default {
    name: "AppProjects",
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