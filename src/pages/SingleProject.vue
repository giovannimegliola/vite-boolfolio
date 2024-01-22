<template>
  <h1>{{ project.title }}</h1>
  
  {{ project.body }}
</template>

<script>
import axios from 'axios';
import {store} from '../store.js';
  export default {
    name: "SingleProject",
    data(){
      return {
        store,
        project: null
      }
    },
    methods: {
      getProjectData(){
        axios.get (this.store.apiUrl + 'projects/' + this.$route.params.slug).then((res) => {
          console.log(res.data);
          this.project = res.data.results;
        })
      }
    },
    created(){
      this.getProjectData()
    }
  }
</script>

<style lang="scss" scoped>

</style>