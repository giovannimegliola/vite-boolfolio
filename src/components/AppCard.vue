<template>
  <div class="card">
    <img :src="`${store.imgPath}${project.image}`" :alt="project.title" class="card-top"> 
    <p class="card-text">{{ project.body.substring(0, 80) + '...' }}</p>
    <router-link :to="{name: 'project', params: {slug: project.slug}}" class="btn btn-primary my-1">
      {{ project.title }}</router-link>

  </div>
</template>

<script>
import {store} from '../store.js';
  export default {
    name: "AppCard",
    props: ['project'],
    data(){
      return {
        store
      }
    }
  }
</script>

<style lang="scss" scoped>

.card-top{
  width: 100%;
  height: 200px;
}

</style>