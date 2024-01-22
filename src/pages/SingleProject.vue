<template>
  <div class="container">
    <h1 class="text-primary my-3">{{ project.title }}</h1>
    <div class="mb-3">
      <a href="" class="badge bg-primary text-decoration-none me-1 ">{{ project.category.name}}</a>
      <a href="" class="badge bg-secondary text-decoration-none">{{ project.technologies[0].name}}</a>
    </div>
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
        project: null,
        technologies: null
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