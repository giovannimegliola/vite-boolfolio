<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <h1>hello</h1>
</template>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import {store} from './store.js';
export default {
  
    name: "App",
    components: {
    
      AppHeader

    },
    data() {
      return {
        store,
      }

    },
    methods: {
      getApiTest() {
        axios.get(this.store.apiUrl + 'projects').then((res) => {
          console.log(res.data);
          
        });
      },
    },
    mounted() {
      this.getApiTest();
    },

};

</script>

<style lang="scss" scoped>
// @use "./styles/partials/variables" as *;

</style>