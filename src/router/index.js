import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/task2",
    name: "Task 2",
    component: () => import("@/views/Task2.vue"),
  },
  {
    path: "/task3",
    name: "Task 3",
    component: () => import("@/views/Task3.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
