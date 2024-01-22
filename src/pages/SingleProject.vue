<template>
  <h1>single project</h1>
  {{ project.title }}
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