import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'https://localhost:8000/api/',
  projects: [],
})