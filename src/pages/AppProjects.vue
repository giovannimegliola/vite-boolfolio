<template>
  <main class="container">
    <h1 class="text-primary my-3">Projects List</h1>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3" v-for="project in store.projects" :key="project.id">
        <AppCard :project="project"></AppCard>
      </div>
    </div>
    <nav class="d-flex justify-content-center align-items-center my-4">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': currentPage === 1}">
          <button class="page-link" :disabled="currentPage === 1" @click="getAllProjects(currentPage - 1)">Previous
          </button>
        </li>

        <li class="page-item" v-for="page in lastPage" :key="page">
          <button class="page-link" @click="getAllProjects(page)">{{ page }}</button>
        </li>
        <li>
          <button class="page-link" :disabled="currentPage === lastPage" @click="getAllProjects(currentPage + 1)">Next
          </button> 
        </li>

      </ul>

    </nav>
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
        store,
        currentPage: 1,
        lastPage: null,
        total:0
      };
    },
    methods: {
      getAllProjects(pageNum) {
        axios.get(this.store.apiUrl + 'projects' + '?page=' + pageNum).then((res) => {
          console.log(res.data);
          this.store.projects = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
          this.total = res.data.results.total;
        })
      }
    },
    created() {
      this.getAllProjects(this.currentPage);
    }
  }
</script>

<style lang="scss" scoped>

</style>