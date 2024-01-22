<template>
  <div class="container">
    <h1>{{ project.title }}</h1>
  <img :src="`${store.imgPath}${project.image}`" :alt="project.title"> 
  <div>
    {{ project.body }}
  </div>

  </div>
  
  
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
        }).catch((err) => {
          console.log(err);
        })
      }
    },
    created(){
      this.getProjectData()
    }
  }
</script>

<style lang="scss" scoped>
img{
  max-width: 300px;
}

</style>