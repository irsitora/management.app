import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "../components/UserAuth.vue";
import Header from "../components/Header.vue";
import ServiceReception from "../components/ServiceReception.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: UserAuth,
    },
    {
      path: "/header",
      name: "header",
      component: Header,
    },
    {
      path: "/serviceReception",
      name: "serviceReception",
      component: ServiceReception,
    },
  ],
});

export default router;
