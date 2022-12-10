import { createRouter, createWebHistory } from "vue-router";

// Imports Layouts

import defaultLayout from "../layouts/default.vue";
import authLayout from "../layouts/auth.vue";

import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: defaultLayout,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        layout: authLayout,
      },
    },
  ],
});

export default router;
