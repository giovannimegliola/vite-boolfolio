import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/projects/:slug",
      name: "project",
      component: SingleProject,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    } //rotta di fallback nel caso non vada in nessuna delle precedenti

  ],
});

export default router;