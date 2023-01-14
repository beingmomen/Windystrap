import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

// Layouts
import defaultLayout from "../layouts/default.vue";
import authLayout from "../layouts/auth.vue";

// Pages
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
        isAuth: true,
      },
    },

    // Auth Routes
    {
      path: "/auth/login",
      name: "login",
      component: () => import("../views/auth/login/index.vue"),
      meta: {
        layout: authLayout,
        isAuth: false,
      },
    },
    {
      path: "/auth/register",
      name: "register",
      component: () => import("../views/auth/register/index.vue"),
      meta: {
        layout: authLayout,
        isAuth: false,
      },
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.isAuth && !store.getters["auth/isAuth"]) {
    next("/auth/login");
  } else if (!to.meta.isAuth && store.getters["auth/isAuth"]) {
    next("/");
  } else {
    next();
  }
});

export default router;
