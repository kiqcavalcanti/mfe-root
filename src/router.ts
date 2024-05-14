import HomePage from "@/Pages/HomePage.vue";
import { createRouter, createWebHistory } from 'vue-router'
import TeamPage from "@/Pages/TeamPage.vue";
import ProjectPage from "@/Pages/ProjectPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },

    {
      path: "/teams",
      component: TeamPage,
    },

    {
      path: "/projects",
      component: ProjectPage,
    },
  ]
});

export default router;